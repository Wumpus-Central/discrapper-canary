n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(101058),
    o = n(836602),
    d = n(287070),
    c = n(905872);
function u(e) {
    let { user: t, disabledInputs: u, containerClassName: _ } = e,
        { reducedMotion: g } = s.useContext(a.CZY),
        {
            pendingAvatar: m,
            pendingBanner: A,
            pendingAvatarDecoration: h,
            pendingProfileEffect: p,
            pendingDisplayNameStyles: x,
            pendingThemeColors: E,
            pendingPronouns: T,
            pendingBio: S,
            tryItOutThemeColors: C,
            tryItOutAvatar: f,
            tryItOutBanner: I,
            tryItOutAvatarDecoration: b,
            tryItOutDisplayNameStyles: N,
        } = (0, l.cf)([o.A], () => {
            let e = o.A.getPendingChanges(),
                t = o.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        v = (0, r.V7)({ userId: t.id, image: f ?? m });
    return (0, i.jsx)(d.A, {
        containerClassName: _,
        user: t,
        pendingPronouns: T,
        pendingBio: S,
        pendingBanner: I ?? A ?? n(636763),
        pendingDisplayNameStyles: N ?? x,
        pendingAvatar: v,
        pendingThemeColors: C ?? E,
        pendingAvatarDecoration: void 0 !== b ? b : h,
        pendingProfileEffect: p,
        avatarClassName: null != f || null != m || g.enabled ? void 0 : c.W,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        disabledInputs: u,
        hideExampleButton: !0,
    });
}
