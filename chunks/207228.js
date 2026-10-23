n.d(t, { Az: () => I, DD: () => g, aG: () => p, ik: () => S, it: () => E, y8: () => m });
var i = n(73153),
    l = n(360906),
    r = n(37595),
    s = n(731854);
let a = !1,
    o = 0,
    u = null,
    d = null;
function c(e) {
    return null == e ? void 0 : Math.min(Math.max(Math.floor(e), 0), 7680);
}
function h() {
    let e = (0, r.V)();
    return e?.windowHandle == null
        ? null
        : { id: `window:${e.windowHandle}`, processId: e.pid, useVideoHook: !1, useGraphicsCapture: (0, l.hp)() };
}
function f(e) {
    i.h.dispatch({ type: "CONJURE_SNAPSHOT_CAPTURE_SET", app: e });
}
function g(e, t) {
    i.h.dispatch({ type: "CONJURE_SNAPSHOT_FAILURE_SET", applicationId: e, reason: t });
}
async function C() {
    let e = performance.now(),
        t = await I();
    if (a && e > o && t?.encodeFailed === !0) {
        let e = d;
        (S(), null != e && g(e.appId, "encode_failed"));
    }
}
function A() {
    l.Ay.getMediaEngine().setSnapshotSource(h());
}
function p() {
    return null != h();
}
function m() {
    return l.Ay.getMediaEngine().supports(s.O5.CONJURE_SNAPSHOT);
}
function E(e, t, n) {
    for (let t of ["appId", "appName"]) {
        let n = e?.[t];
        if ("string" != typeof n || "" === n.trim())
            throw Error(`startConjureSnapshots: app.${t} must be a non-empty string`);
    }
    if (!m()) return !1;
    if (
        (l.Ay.getMediaEngine().startSnapshotCapture(
            (function (e) {
                let { width: t, height: n, intervalMs: i } = e;
                return { width: c(t), height: c(n), intervalMs: Math.max(Math.floor(i), 250) };
            })(t),
            n,
        ),
        !a)
    ) {
        for (let e of ((a = !0), (o = performance.now()), r.g)) e.addChangeListener(A);
        (A(), (u = setInterval(C, 2e3)));
    }
    return ((d = e), f(e), !0);
}
function I() {
    return l.Ay.getMediaEngine()
        .getSnapshotStats()
        .catch(() => null);
}
function S() {
    if (!a) return;
    for (let e of ((a = !1), null != u && clearInterval(u), (u = null), r.g)) e.removeChangeListener(A);
    let e = l.Ay.getMediaEngine();
    (e.setSnapshotSource(null), e.stopSnapshotCapture(), (d = null), f(null));
}
