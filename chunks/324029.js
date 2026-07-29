"use strict";
n.d(t, { JX: () => m, se: () => I, v_: () => p, xp: () => h, yR: () => T });
var i = n(240899),
    r = n(626584),
    a = n(723702),
    s = n(19575),
    l = n(264572).Buffer;
let o = new r.A("RPCServer:CS2GSI"),
    d = null,
    c = null,
    u = 0,
    _ = null;
function E() {
    let e = s.Ay.releaseChannel;
    return "" === e ? "stable" : e;
}
function A() {
    return `/cs2-gsi-${E()}`;
}
function h(e) {
    return e === A();
}
async function I(e) {
    i.A.getConfig({ location: "gsi config install" }).enableCs2Gsi &&
        (null != _ && (await _),
        (_ = (async () => {
            if (!(0, a.isWindows)()) return;
            if (!e) {
                d = null;
                let e = await s.Ay.deleteCs2GsiConfig(E());
                o.info(`GSI config removal ${e ? "succeeded" : "failed"}`);
                return;
            }
            let { default: t } = await n.e("6787").then(n.bind(n, 33006)),
                i = t.getPort();
            if (null == i) return void o.info("RPC server not ready yet; deferring GSI config install");
            d = (await s.Ay.readCs2GsiToken(E())) ?? window.crypto.randomUUID().replace(/-/g, "");
            let r = `http://127.0.0.1:${i}${A()}`;
            try {
                let e = await s.Ay.writeCs2GsiConfig(r, d, E());
                o.info(`GSI config install ${e ? "succeeded" : "skipped"}`);
            } catch (e) {
                o.warn("GSI config install failed", e);
            }
        })()),
        await _);
}
function f(e, t) {
    e.setHeader("Connection", "close"), e.writeHead(t), e.end();
}
function p(e) {
    (c = e), (u = 0);
}
function T() {
    c = null;
}
function m(e, t) {
    let n = c;
    if (null == n) return void f(t, 403);
    if (null == d) return void f(t, 503);
    let i = e.headers();
    if (!(i["user-agent"] ?? "").startsWith("Valve/Steam HTTP Client")) return void f(t, 403);
    let r = Number(i["content-length"] ?? NaN);
    if (!Number.isFinite(r) || r > 524288) return void f(t, 413);
    let a = "",
        s = 0,
        _ = !1;
    e.on("data", (e) => {
        if (_) return;
        let n = String(e);
        if ((s += l.byteLength(n)) > 524288) {
            (_ = !0), f(t, 413);
            return;
        }
        a += n;
    }),
        e.on("error", () => {}),
        e.on("end", () => {
            let e;
            if (!_) {
                try {
                    e = JSON.parse(a);
                } catch (e) {
                    f(t, 400);
                    return;
                }
                if ("string" != typeof e?.auth?.token || e.auth.token !== d) {
                    ++u >= 5 &&
                        (o.warn("Too many bad GSI requests; unregistering handler for this session"), (c = null)),
                        f(t, 401);
                    return;
                }
                t.writeHead(200), t.end();
                try {
                    n(e);
                } catch (e) {
                    o.warn("GSI payload handler threw", e);
                }
            }
        });
}
