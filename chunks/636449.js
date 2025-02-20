n.d(t, {
    C: () => c,
    R: () => l
});
var r = n(570140),
    i = n(788983),
    o = n(214629),
    a = n(422483),
    s = n(981631);
function l() {
    var e;
    let t = o.ZP.getCurrentConfig({ location: 'shouldOpenActivityInPopoutWindow' }).enabled || a.Z.getCurrentConfig({ location: 'shouldOpenActivityInPopoutWindow' }).enabled;
    return (null === (e = platform) || void 0 === e ? void 0 : e.name) !== 'Firefox' && t;
}
async function c(e) {
    let t;
    let n = l();
    n &&
        r.Z.wait(() => {
            r.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
        });
    try {
        t = await e();
    } catch (e) {
        t = !1;
    }
    return !t && n && i.xv(s.KJ3.ACTIVITY_POPOUT), t;
}
