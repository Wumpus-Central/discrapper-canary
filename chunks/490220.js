n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(588126),
    o = n(25990),
    c = n(921813),
    d = n(667028);
function u(e) {
    var t;
    let { user: u, disabledInputs: m, containerClassName: g } = e,
        { reducedMotion: h } = r.useContext(a.AccessibilityPreferencesContext),
        {
            pendingAvatar: p,
            pendingBanner: x,
            pendingThemeColors: f,
            pendingPronouns: _,
            pendingBio: E,
            tryItOutThemeColors: C,
            tryItOutAvatar: T,
            tryItOutBanner: S,
            tryItOutAvatarDecoration: b,
            tryItOutProfileEffectId: I
        } = (0, s.cj)([o.Z], () => {
            let e = o.Z.getAllPending(),
                t = o.Z.getAllTryItOut();
            return {
                ...e,
                ...t
            };
        }),
        N = (0, l.Z)(b, !1);
    return (0, i.jsx)(c.Z, {
        containerClassName: g,
        user: u,
        pendingPronouns: _,
        pendingBio: E,
        pendingBanner: null !== (t = null != S ? S : x) && void 0 !== t ? t : n(466045),
        pendingAvatar: null != T ? T : p,
        pendingThemeColors: null != C ? C : f,
        pendingAvatarDecoration: N,
        pendingProfileEffectId: I,
        avatarClassName: null != T || null != p || h.enabled ? void 0 : d.spinningAvatar,
        canUsePremiumCustomization: !0,
        isTryItOutFlow: !0,
        hideExampleButton: !0,
        disabledInputs: m
    });
}
