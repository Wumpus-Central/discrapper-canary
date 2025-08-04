n.d(t, { Z: () => m });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(481060),
    l = n(588126),
    o = n(643879),
    c = n(25990),
    d = n(678135),
    u = n(976979);
function m(e) {
    var t;
    let { user: m, disabledInputs: p, containerClassName: g } = e,
        { reducedMotion: h } = r.useContext(a.Sfi),
        {
            pendingAvatar: f,
            pendingBanner: b,
            pendingThemeColors: x,
            pendingPronouns: _,
            pendingBio: j,
            tryItOutThemeColors: C,
            tryItOutAvatar: E,
            tryItOutBanner: O,
            tryItOutAvatarDecoration: v,
            tryItOutProfileEffectId: S
        } = (0, s.cj)([c.Z], () =>
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            ((i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i));
                        }));
                }
                return e;
            })({}, c.Z.getAllPending(), c.Z.getAllTryItOut())
        ),
        T = (0, o.SD)({
            userId: m.id,
            image: null != E ? E : f
        }),
        N = (0, l.Z)(v, !1);
    return (0, i.jsx)(d.Z, {
        containerClassName: g,
        user: m,
        pendingPronouns: _,
        pendingBio: j,
        pendingBanner: null != (t = null != O ? O : b) ? t : n(466045),
        pendingAvatar: T,
        pendingThemeColors: null != C ? C : x,
        pendingAvatarDecoration: N,
        pendingProfileEffectId: S,
        avatarClassName: null != E || null != f || h.enabled ? void 0 : u.spinningAvatar,
        canUsePremiumCustomization: !0,
        isTryItOutFlow: !0,
        hideExampleButton: !0,
        disabledInputs: p
    });
}
