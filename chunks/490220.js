n.d(t, { Z: () => m });
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(588126),
    o = n(643879),
    c = n(25990),
    d = n(678135),
    u = n(976979);
function m(e) {
    var t;
    let { user: m, disabledInputs: p, containerClassName: g } = e,
        { reducedMotion: h } = r.useContext(l.Sfi),
        {
            pendingAvatar: f,
            pendingBanner: b,
            pendingThemeColors: _,
            pendingPronouns: x,
            pendingBio: E,
            tryItOutThemeColors: C,
            tryItOutAvatar: j,
            tryItOutBanner: O,
            tryItOutAvatarDecoration: S,
            tryItOutProfileEffectId: v
        } = (0, s.cj)([c.Z], () =>
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({}, c.Z.getAllPending(), c.Z.getAllTryItOut())
        ),
        T = (0, o.SD)({
            userId: m.id,
            image: null != j ? j : f
        }),
        I = (0, a.Z)(S, !1);
    return (0, i.jsx)(d.Z, {
        containerClassName: g,
        user: m,
        pendingPronouns: x,
        pendingBio: E,
        pendingBanner: null != (t = null != O ? O : b) ? t : n(466045),
        pendingAvatar: T,
        pendingThemeColors: null != C ? C : _,
        pendingAvatarDecoration: I,
        pendingProfileEffectId: v,
        avatarClassName: null != j || null != f || h.enabled ? void 0 : u.spinningAvatar,
        canUsePremiumCustomization: !0,
        isTryItOutFlow: !0,
        hideExampleButton: !0,
        disabledInputs: p
    });
}
