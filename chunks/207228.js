n.d(t, { Az: () => S, DD: () => g, aG: () => m, ik: () => C, it: () => I, y8: () => E });
var i = n(73153),
    l = n(999926),
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
async function A() {
    let e = performance.now(),
        t = await S();
    if (a && e > o && t?.encodeFailed === !0) {
        let e = d;
        (C(), null != e && g(e.appId, "encode_failed"));
    }
}
function p() {
    l.Ay.getMediaEngine().setSnapshotSource(h());
}
function m() {
    return null != h();
}
function E() {
    return l.Ay.getMediaEngine().supports(s.O5.CONJURE_SNAPSHOT);
}
function I(e, t, n) {
    for (let t of ["appId", "appName"]) {
        let n = e?.[t];
        if ("string" != typeof n || "" === n.trim())
            throw Error(`startConjureSnapshots: app.${t} must be a non-empty string`);
    }
    if (!E()) return !1;
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
        for (let e of ((a = !0), (o = performance.now()), r.g)) e.addChangeListener(p);
        (p(), (u = setInterval(A, 2e3)));
    }
    return ((d = e), f(e), !0);
}
function S() {
    return l.Ay.getMediaEngine()
        .getSnapshotStats()
        .catch(() => null);
}
function C() {
    if (!a) return;
    for (let e of ((a = !1), null != u && clearInterval(u), (u = null), r.g)) e.removeChangeListener(p);
    let e = l.Ay.getMediaEngine();
    (e.setSnapshotSource(null), e.stopSnapshotCapture(), (d = null), f(null));
}
