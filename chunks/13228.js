n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(442837),
    r = n(594190),
    l = n(480294),
    a = n(131951),
    s = n(924557),
    o = n(435064),
    c = n(779618),
    d = n(356659),
    u = n(981631);
function h(e) {
    let t = (0, s.nM)({ autoTrackExposure: !0 }),
        n = o.Z.isDecoupledGameClippingEnabled();
    return (0, i.e7)([o.Z, r.ZP, l.Z, a.Z], () => {
        if (!(0, c.Z)(a.Z) || !t || !n) return !1;
        if (null != o.Z.getLastClipsError()) return !0;
        if (!l.Z.hasConsented(u.pjP.PERSONALIZATION) || null == r.ZP.getVisibleGame()) return !1;
        let {
            clipsEducationState: { dismissedAt: i, numberOfGamesLaunchedSinceDismissal: h, numberOfTimesDismissed: m },
            hasTakenDecoupledClip: p,
            clipsSettings: { clipsEnabled: g }
        } = o.Z.getState();
        if (null === i) return !0;
        if (!(null != e && (0, s.xt)(e))) return !1;
        let f = Date.now() - i > d.xx,
            _ = h >= d._U,
            E = g ? d.xd : d.A5;
        return f && _ && m < E && !p;
    });
}
