n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    a = n(311907),
    l = n(397927),
    r = n(101058),
    o = n(836602),
    c = n(287070),
    d = n(83118);
function u(e) {
    let { user: t, disabledInputs: u, containerClassName: _ } = e,
        { reducedMotion: m } = s.useContext(l.CZY),
        {
            pendingAvatar: A,
            pendingBanner: g,
            pendingAvatarDecoration: h,
            pendingProfileEffect: x,
            pendingDisplayNameStyles: p,
            pendingThemeColors: E,
            pendingPronouns: C,
            pendingBio: T,
            tryItOutThemeColors: S,
            tryItOutAvatar: I,
            tryItOutBanner: f,
            tryItOutAvatarDecoration: N,
            tryItOutDisplayNameStyles: b,
        } = (0, a.cf)([o.A], () => {
            let e = o.A.getPendingChanges(),
                t = o.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        j = (0, r.V7)({ userId: t.id, image: I ?? A });
    return (0, i.jsx)(c.A, {
        containerClassName: _,
        user: t,
        pendingPronouns: C,
        pendingBio: T,
        pendingBanner: f ?? g ?? n(636763),
        pendingDisplayNameStyles: b ?? p,
        pendingAvatar: j,
        pendingThemeColors: S ?? E,
        pendingAvatarDecoration: void 0 !== N ? N : h,
        pendingProfileEffect: x,
        avatarClassName: null != I || null != A || m.enabled ? void 0 : d.W,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        disabledInputs: u,
        hideExampleButton: !0,
    });
}
