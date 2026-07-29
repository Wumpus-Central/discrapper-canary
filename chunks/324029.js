"use strict";
n.d(t, { JX: () => g, se: () => f, v_: () => T, xp: () => I, yR: () => m });
var i = n(240899),
    r = n(626584),
    a = n(723702),
    s = n(19575),
    l = n(33006),
    o = n(264572).Buffer;
let d = new r.A("RPCServer:CS2GSI"),
    c = null,
    u = null,
    _ = 0,
    E = null;
function A() {
    let e = s.Ay.releaseChannel;
    return "" === e ? "stable" : e;
}
function h() {
    return `/cs2-gsi-${A()}`;
}
function I(e) {
    return e === h();
}
async function f(e) {
    i.A.getConfig({ location: "gsi config install" }).enableCs2Gsi &&
        (null != E && (await E),
        (E = (async () => {
            if (!(0, a.isWindows)()) return;
            if (!e) {
                c = null;
                let e = await s.Ay.deleteCs2GsiConfig(A());
                d.info(`GSI config removal ${e ? "succeeded" : "failed"}`);
                return;
            }
            let t = l.A.getPort();
            if (null == t) return void d.info("RPC server not ready yet; deferring GSI config install");
            c = (await s.Ay.readCs2GsiToken(A())) ?? window.crypto.randomUUID().replace(/-/g, "");
            let n = `http://127.0.0.1:${t}${h()}`;
            try {
                let e = await s.Ay.writeCs2GsiConfig(n, c, A());
                d.info(`GSI config install ${e ? "succeeded" : "skipped"}`);
            } catch (e) {
                d.warn("GSI config install failed", e);
            }
        })()),
        await E);
}
function p(e, t) {
    e.setHeader("Connection", "close"), e.writeHead(t), e.end();
}
function T(e) {
    (u = e), (_ = 0);
}
function m() {
    u = null;
}
function g(e, t) {
    let n = u;
    if (null == n) return void p(t, 403);
    if (null == c) return void p(t, 503);
    let i = e.headers();
    if (!(i["user-agent"] ?? "").startsWith("Valve/Steam HTTP Client")) return void p(t, 403);
    let r = Number(i["content-length"] ?? NaN);
    if (!Number.isFinite(r) || r > 524288) return void p(t, 413);
    let a = "",
        s = 0,
        l = !1;
    e.on("data", (e) => {
        if (l) return;
        let n = String(e);
        if ((s += o.byteLength(n)) > 524288) {
            (l = !0), p(t, 413);
            return;
        }
        a += n;
    }),
        e.on("error", () => {}),
        e.on("end", () => {
            let e;
            if (!l) {
                try {
                    e = JSON.parse(a);
                } catch (e) {
                    p(t, 400);
                    return;
                }
                if ("string" != typeof e?.auth?.token || e.auth.token !== c) {
                    ++_ >= 5 &&
                        (d.warn("Too many bad GSI requests; unregistering handler for this session"), (u = null)),
                        p(t, 401);
                    return;
                }
                t.writeHead(200), t.end();
                try {
                    n(e);
                } catch (e) {
                    d.warn("GSI payload handler threw", e);
                }
            }
        });
}
