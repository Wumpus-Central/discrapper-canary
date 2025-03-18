n.d(t, {
    C: () => u,
    R: () => c
});
var r = n(570140),
    i = n(522474),
    o = n(788983),
    a = n(214629),
    s = n(422483),
    l = n(981631);
function c(e) {
    var t;
    let { isContextless: n } = e;
    if (n) return !0;
    let r = a.ZP.getCurrentConfig({ location: 'shouldOpenActivityInPopoutWindow' }).enabled || s.Z.getCurrentConfig({ location: 'shouldOpenActivityInPopoutWindow' }).enabled;
    return (null === (t = platform) || void 0 === t ? void 0 : t.name) !== 'Firefox' && r;
}
async function u(e, t) {
    let n;
    let a = i.Z.getWindowOpen(l.KJ3.ACTIVITY_POPOUT);
    e &&
        !a &&
        r.Z.wait(() => {
            r.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
        });
    try {
        n = await t();
    } catch (e) {
        n = !1;
    }
    return !n && e && o.xv(l.KJ3.ACTIVITY_POPOUT), n;
}
