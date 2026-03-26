n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(101058),
    o = n(836602),
    d = n(287070),
    c = n(578665);
function u(e) {
    let { user: t, disabledInputs: u, containerClassName: m } = e,
        { reducedMotion: _ } = s.useContext(a.CZY),
        {
            pendingAvatar: g,
            pendingBanner: x,
            pendingAvatarDecoration: A,
            pendingProfileEffect: h,
            pendingDisplayNameStyles: p,
            pendingThemeColors: f,
            pendingPronouns: T,
            pendingBio: S,
            tryItOutThemeColors: E,
            tryItOutAvatar: b,
            tryItOutBanner: C,
            tryItOutAvatarDecoration: v,
            tryItOutDisplayNameStyles: N,
        } = (0, l.cf)([o.A], () => {
            let e = o.A.getPendingChanges(),
                t = o.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        I = (0, r.V7)({ userId: t.id, image: b ?? g });
    return (0, i.jsx)(d.A, {
        containerClassName: m,
        user: t,
        pendingPronouns: T,
        pendingBio: S,
        pendingBanner: C ?? x ?? n(636763),
        pendingDisplayNameStyles: N ?? p,
        pendingAvatar: I,
        pendingThemeColors: E ?? f,
        pendingAvatarDecoration: void 0 !== v ? v : A,
        pendingProfileEffect: h,
        avatarClassName: null != b || null != g || _.enabled ? void 0 : c.W,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        disabledInputs: u,
        hideExampleButton: !0,
    });
}
