n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    a = n(397927),
    l = n(101058),
    o = n(836602),
    c = n(287070),
    d = n(83118);
function u(e) {
    let { user: t, disabledInputs: u, containerClassName: _ } = e,
        { reducedMotion: m } = s.useContext(a.CZY),
        {
            pendingAvatar: A,
            pendingBanner: g,
            pendingAvatarDecoration: E,
            pendingProfileEffect: h,
            pendingDisplayNameStyles: p,
            pendingThemeColors: C,
            pendingPronouns: x,
            pendingBio: T,
            tryItOutThemeColors: I,
            tryItOutAvatar: S,
            tryItOutBanner: f,
            tryItOutAvatarDecoration: N,
            tryItOutDisplayNameStyles: b,
        } = (0, r.cf)([o.A], () => {
            let e = o.A.getPendingChanges(),
                t = o.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        R = (0, l.V7)({ userId: t.id, image: S ?? A });
    return (0, i.jsx)(c.A, {
        containerClassName: _,
        user: t,
        pendingPronouns: x,
        pendingBio: T,
        pendingBanner: f ?? g ?? n(636763),
        pendingDisplayNameStyles: b ?? p,
        pendingAvatar: R,
        pendingThemeColors: I ?? C,
        pendingAvatarDecoration: void 0 !== N ? N : E,
        pendingProfileEffect: h,
        avatarClassName: null != S || null != A || m.enabled ? void 0 : d.W,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        disabledInputs: u,
        hideExampleButton: !0,
    });
}
