n.d(t, { Z: () => u });
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(588126),
    o = n(25990),
    c = n(921813),
    d = n(256504);
function u(e) {
    var t;
    let { user: u, disabledInputs: m, containerClassName: h } = e,
        { reducedMotion: g } = s.useContext(l.Sfi),
        {
            pendingAvatar: x,
            pendingBanner: _,
            pendingThemeColors: p,
            pendingPronouns: E,
            pendingBio: C,
            tryItOutThemeColors: f,
            tryItOutAvatar: T,
            tryItOutBanner: N,
            tryItOutAvatarDecoration: S,
            tryItOutProfileEffectId: I
        } = (0, r.cj)([o.Z], () => {
            let e = o.Z.getAllPending(),
                t = o.Z.getAllTryItOut();
            return {
                ...e,
                ...t
            };
        }),
        b = (0, a.Z)(S, !1);
    return (0, i.jsx)(c.Z, {
        containerClassName: h,
        user: u,
        pendingPronouns: E,
        pendingBio: C,
        pendingBanner: null !== (t = null != N ? N : _) && void 0 !== t ? t : n(466045),
        pendingAvatar: null != T ? T : x,
        pendingThemeColors: null != f ? f : p,
        pendingAvatarDecoration: b,
        pendingProfileEffectId: I,
        avatarClassName: null != T || null != x || g.enabled ? void 0 : d.spinningAvatar,
        canUsePremiumCustomization: !0,
        isTryItOutFlow: !0,
        hideExampleButton: !0,
        disabledInputs: m
    });
}
