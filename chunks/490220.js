n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(588126),
    o = n(643879),
    c = n(25990),
    d = n(921813),
    u = n(861305);
function m(e) {
    var t;
    let { user: m, disabledInputs: g, containerClassName: p } = e,
        { reducedMotion: h } = i.useContext(a.Sfi),
        {
            pendingAvatarV2: f,
            pendingBanner: b,
            pendingThemeColors: N,
            pendingPronouns: x,
            pendingBio: _,
            tryItOutThemeColors: E,
            tryItOutAvatarV2: j,
            tryItOutBanner: C,
            tryItOutAvatarDecoration: O,
            tryItOutProfileEffectId: v
        } = (0, s.cj)([c.Z], () =>
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, c.Z.getAllPending(), c.Z.getAllTryItOut())
        ),
        S = (0, o.SD)({
            userId: m.id,
            image: null != j ? j : f
        }),
        T = (0, l.Z)(O, !1);
    return (0, r.jsx)(d.Z, {
        containerClassName: p,
        user: m,
        pendingPronouns: x,
        pendingBio: _,
        pendingBanner: null !== (t = null != C ? C : b) && void 0 !== t ? t : n(466045),
        pendingAvatar: S,
        pendingThemeColors: null != E ? E : N,
        pendingAvatarDecoration: T,
        pendingProfileEffectId: v,
        avatarClassName: null != j || null != f || h.enabled ? void 0 : u.spinningAvatar,
        canUsePremiumCustomization: !0,
        isTryItOutFlow: !0,
        hideExampleButton: !0,
        disabledInputs: g
    });
}
