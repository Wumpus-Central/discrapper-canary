var i = n(73153),
    r = n(754712),
    l = n(37595),
    s = n(731854);
let a = !1,
    o = 0,
    u = null,
    d = null;
function c(e) {
    return null == e ? void 0 : Math.min(Math.max(Math.floor(e), 0), 7680);
}
function h() {
    let e = (0, l.V)();
    return e?.windowHandle == null
        ? null
        : { id: `window:${e.windowHandle}`, processId: e.pid, useVideoHook: !1, useGraphicsCapture: (0, r.hp)() };
}
function f(e) {
    i.h.dispatch({ type: "CONJURE_SNAPSHOT_CAPTURE_SET", app: e });
}
function g(e, t) {
    i.h.dispatch({ type: "CONJURE_SNAPSHOT_FAILURE_SET", applicationId: e, reason: t });
}
async function A() {
    let e = performance.now(),
        t = await I();
    if (a && e > o && t?.encodeFailed === !0) {
        let e = d;
        (E(), null != e && g(e.appId, "encode_failed"));
    }
}
function p() {
    r.Ay.getMediaEngine().setSnapshotSource(h());
}
function m() {
    return r.Ay.getMediaEngine().supports(s.O5.CONJURE_SNAPSHOT);
}
function I() {
    return r.Ay.getMediaEngine()
        .getSnapshotStats()
        .catch(() => null);
}
function E() {
    if (!a) return;
    for (let e of ((a = !1), null != u && clearInterval(u), (u = null), l.g)) e.removeChangeListener(p);
    let e = r.Ay.getMediaEngine();
    (e.setSnapshotSource(null), e.stopSnapshotCapture(), (d = null), f(null));
}
n.d(
    t,
    {},
    {
        Az: I,
        DD: g,
        aG: function () {
            return null != h();
        },
        ik: E,
        it: function (e, t, n) {
            for (let t of ["appId", "appName"]) {
                let n = e?.[t];
                if ("string" != typeof n || "" === n.trim())
                    throw Error(`startConjureSnapshots: app.${t} must be a non-empty string`);
            }
            if (!m()) return !1;
            if (
                (r.Ay.getMediaEngine().startSnapshotCapture(
                    (function (e) {
                        let { width: t, height: n, intervalMs: i } = e;
                        return { width: c(t), height: c(n), intervalMs: Math.max(Math.floor(i), 250) };
                    })(t),
                    n,
                ),
                !a)
            ) {
                for (let e of ((a = !0), (o = performance.now()), l.g)) e.addChangeListener(p);
                (p(), (u = setInterval(A, 2e3)));
            }
            return ((d = e), f(e), !0);
        },
        y8: m,
    },
);
