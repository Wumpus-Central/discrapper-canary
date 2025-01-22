r.d(n, {
    C: function () {
        return u;
    },
    R: function () {
        return l;
    }
});
var i = r(570140),
    a = r(788983),
    o = r(214629),
    s = r(981631);
function l() {
    var e;
    let n = o.ZP.getCurrentConfig({ location: 'shouldOpenActivityInPopoutWindow' }).enabled;
    return (null === (e = platform) || void 0 === e ? void 0 : e.name) !== 'Firefox' && n;
}
async function u(e) {
    let n;
    let r = l();
    r &&
        i.Z.wait(() => {
            i.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
        });
    try {
        n = await e();
    } catch {
        n = !1;
    }
    return !n && r && a.xv(s.KJ3.ACTIVITY_POPOUT), n;
}
