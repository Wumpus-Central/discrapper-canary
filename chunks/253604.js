n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(844222),
    r = n(101058),
    o = n(836602),
    d = n(287070),
    u = n(314649);
function c(e) {
    let { user: t, disabledInputs: c, containerClassName: g } = e,
        { reducedMotion: m } = s.useContext(a.C),
        {
            pendingAvatar: _,
            pendingBanner: A,
            pendingAvatarDecoration: h,
            pendingProfileEffect: p,
            pendingDisplayNameStyles: x,
            pendingThemeColors: E,
            pendingPronouns: T,
            pendingBio: S,
            tryItOutThemeColors: f,
            tryItOutAvatar: b,
            tryItOutBanner: C,
            tryItOutAvatarDecoration: v,
            tryItOutDisplayNameStyles: N,
        } = (0, l.cf)([o.A], () => {
            let e = o.A.getPendingChanges(),
                t = o.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        I = (0, r.V7)({ userId: t.id, image: b ?? _ });
    return (0, i.jsx)(d.A, {
        containerClassName: g,
        user: t,
        pendingPronouns: T,
        pendingBio: S,
        pendingBanner: C ?? A ?? n(636763),
        pendingDisplayNameStyles: N ?? x,
        pendingAvatar: I,
        pendingThemeColors: f ?? E,
        pendingAvatarDecoration: void 0 !== v ? v : h,
        pendingProfileEffect: p,
        avatarClassName: null != b || null != _ || m.enabled ? void 0 : u.W,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        disabledInputs: c,
        hideExampleButton: !0,
    });
}
