n.d(t, {
    C: () => c,
    R: () => l
});
var r = n(570140),
    i = n(788983),
    o = n(214629),
    a = n(422483),
    s = n(981631);
function l(e) {
    var t;
    let { isContextless: n } = e;
    if (n) return !0;
    let r = o.ZP.getCurrentConfig({ location: 'shouldOpenActivityInPopoutWindow' }).enabled || a.Z.getCurrentConfig({ location: 'shouldOpenActivityInPopoutWindow' }).enabled;
    return (null === (t = platform) || void 0 === t ? void 0 : t.name) !== 'Firefox' && r;
}
async function c(e, t) {
    let n;
    e &&
        r.Z.wait(() => {
            r.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
        });
    try {
        n = await t();
    } catch (e) {
        n = !1;
    }
    return !n && e && i.xv(s.KJ3.ACTIVITY_POPOUT), n;
}
