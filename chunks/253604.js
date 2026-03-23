n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(101058),
    o = n(836602),
    d = n(287070),
    c = n(83118);
function u(e) {
    let { user: t, disabledInputs: u, containerClassName: _ } = e,
        { reducedMotion: m } = s.useContext(a.CZY),
        {
            pendingAvatar: g,
            pendingBanner: A,
            pendingAvatarDecoration: x,
            pendingProfileEffect: h,
            pendingDisplayNameStyles: p,
            pendingThemeColors: T,
            pendingPronouns: E,
            pendingBio: S,
            tryItOutThemeColors: f,
            tryItOutAvatar: C,
            tryItOutBanner: b,
            tryItOutAvatarDecoration: N,
            tryItOutDisplayNameStyles: I,
        } = (0, l.cf)([o.A], () => {
            let e = o.A.getPendingChanges(),
                t = o.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        v = (0, r.V7)({ userId: t.id, image: C ?? g });
    return (0, i.jsx)(d.A, {
        containerClassName: _,
        user: t,
        pendingPronouns: E,
        pendingBio: S,
        pendingBanner: b ?? A ?? n(636763),
        pendingDisplayNameStyles: I ?? p,
        pendingAvatar: v,
        pendingThemeColors: f ?? T,
        pendingAvatarDecoration: void 0 !== N ? N : x,
        pendingProfileEffect: h,
        avatarClassName: null != C || null != g || m.enabled ? void 0 : c.W,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        disabledInputs: u,
        hideExampleButton: !0,
    });
}
