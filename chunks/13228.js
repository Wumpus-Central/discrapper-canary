n.d(t, { Z: () => p });
var r = n(442837),
    i = n(594190),
    l = n(480294),
    a = n(131951),
    o = n(924557),
    s = n(435064),
    c = n(779618),
    u = n(356659),
    d = n(981631);
function p(e) {
    let t = (0, o.nM)({ autoTrackExposure: !0 }),
        n = s.Z.isDecoupledGameClippingEnabled();
    return (0, r.e7)([s.Z, i.ZP, l.Z, a.Z], () => {
        if (!(0, c.Z)(a.Z) || !t || !n) return !1;
        if (null != s.Z.getLastClipsError()) return !0;
        if (!l.Z.hasConsented(d.pjP.PERSONALIZATION) || null == i.ZP.getVisibleGame()) return !1;
        let {
            clipsEducationState: { dismissedAt: r, numberOfGamesLaunchedSinceDismissal: p, numberOfTimesDismissed: h },
            hasTakenDecoupledClip: f,
            clipsSettings: { clipsEnabled: g }
        } = s.Z.getState();
        if (null === r) return !0;
        if (!(null != e && (0, o.xt)(e))) return !1;
        let m = Date.now() - r > u.xx,
            b = p >= u._U,
            _ = g ? u.xd : u.A5;
        return m && b && h < _ && !f;
    });
}
