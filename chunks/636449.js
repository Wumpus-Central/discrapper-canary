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
function c() {
    var e;
    return (null == (e = platform) ? void 0 : e.name) !== 'Firefox' && (a.ZP.getCurrentConfig({ location: 'shouldOpenActivityInPopoutWindow' }).enabled || s.Z.getCurrentConfig({ location: 'shouldOpenActivityInPopoutWindow' }).enabled);
}
async function u(e, t) {
    let n,
        a = i.Z.getWindowOpen(l.KJ3.ACTIVITY_POPOUT);
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
