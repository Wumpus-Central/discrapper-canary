n.d(t, {
    C: () => l,
    R: () => o
});
var i = n(570140),
    r = n(788983),
    a = n(214629),
    s = n(981631);
function o() {
    var e;
    let t = a.ZP.getCurrentConfig({ location: 'shouldOpenActivityInPopoutWindow' }).enabled;
    return (null === (e = platform) || void 0 === e ? void 0 : e.name) !== 'Firefox' && t;
}
async function l(e) {
    let t;
    let n = o();
    n &&
        i.Z.wait(() => {
            i.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
        });
    try {
        t = await e();
    } catch {
        t = !1;
    }
    return !t && n && r.xv(s.KJ3.ACTIVITY_POPOUT), t;
}
