n.d(t, { Z: () => u });
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    a = n(588126),
    o = n(25990),
    c = n(921813),
    d = n(424400);
function u(e) {
    var t;
    let { user: u, disabledInputs: h, containerClassName: m } = e,
        { reducedMotion: g } = s.useContext(r.Sfi),
        {
            pendingAvatar: x,
            pendingBanner: _,
            pendingThemeColors: p,
            pendingPronouns: E,
            pendingBio: C,
            tryItOutThemeColors: N,
            tryItOutAvatar: f,
            tryItOutBanner: I,
            tryItOutAvatarDecoration: T,
            tryItOutProfileEffectId: S
        } = (0, l.cj)([o.Z], () => {
            let e = o.Z.getAllPending(),
                t = o.Z.getAllTryItOut();
            return {
                ...e,
                ...t
            };
        }),
        j = (0, a.Z)(T, !1);
    return (0, i.jsx)(c.Z, {
        containerClassName: m,
        user: u,
        pendingPronouns: E,
        pendingBio: C,
        pendingBanner: null !== (t = null != I ? I : _) && void 0 !== t ? t : n(466045),
        pendingAvatar: null != f ? f : x,
        pendingThemeColors: null != N ? N : p,
        pendingAvatarDecoration: j,
        pendingProfileEffectId: S,
        avatarClassName: null != f || null != x || g.enabled ? void 0 : d.spinningAvatar,
        canUsePremiumCustomization: !0,
        isTryItOutFlow: !0,
        hideExampleButton: !0,
        disabledInputs: h
    });
}
