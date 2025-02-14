n.d(t, { Z: () => h });
var i = n(442837),
    l = n(594190),
    r = n(480294),
    a = n(131951),
    s = n(924557),
    o = n(435064),
    d = n(779618),
    c = n(356659),
    u = n(981631);
function h(e) {
    let t = (0, s.nM)({ autoTrackExposure: !0 }),
        n = o.Z.isDecoupledGameClippingEnabled();
    return (0, i.e7)([o.Z, l.ZP, r.Z, a.Z], () => {
        if (!(0, d.Z)(a.Z) || !t || !n) return !1;
        if (null != o.Z.getLastClipsError()) return !0;
        if (!r.Z.hasConsented(u.pjP.PERSONALIZATION) || null == l.ZP.getVisibleGame()) return !1;
        let {
            clipsEducationState: { dismissedAt: i, numberOfGamesLaunchedSinceDismissal: h, numberOfTimesDismissed: m },
            hasTakenDecoupledClip: p,
            clipsSettings: { clipsEnabled: g }
        } = o.Z.getState();
        if (null === i) return !0;
        if (!(null != e && (0, s.xt)(e))) return !1;
        let _ = Date.now() - i > c.xx,
            f = h >= c._U,
            E = g ? c.xd : c.A5;
        return _ && f && m < E && !p;
    });
}
