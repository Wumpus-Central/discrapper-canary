n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(101058),
    o = n(836602),
    d = n(287070),
    c = n(83118);
function u(e) {
    let { user: t, disabledInputs: u, containerClassName: _ } = e,
        { reducedMotion: m } = s.useContext(r.CZY),
        {
            pendingAvatar: g,
            pendingBanner: A,
            pendingAvatarDecoration: h,
            pendingProfileEffect: x,
            pendingDisplayNameStyles: p,
            pendingThemeColors: T,
            pendingPronouns: E,
            pendingBio: C,
            tryItOutThemeColors: S,
            tryItOutAvatar: f,
            tryItOutBanner: N,
            tryItOutAvatarDecoration: b,
            tryItOutDisplayNameStyles: I,
        } = (0, l.cf)([o.A], () => {
            let e = o.A.getPendingChanges(),
                t = o.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        v = (0, a.V7)({ userId: t.id, image: f ?? g });
    return (0, i.jsx)(d.A, {
        containerClassName: _,
        user: t,
        pendingPronouns: E,
        pendingBio: C,
        pendingBanner: N ?? A ?? n(636763),
        pendingDisplayNameStyles: I ?? p,
        pendingAvatar: v,
        pendingThemeColors: S ?? T,
        pendingAvatarDecoration: void 0 !== b ? b : h,
        pendingProfileEffect: x,
        avatarClassName: null != f || null != g || m.enabled ? void 0 : c.W,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        disabledInputs: u,
        hideExampleButton: !0,
    });
}
