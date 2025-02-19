n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(588126),
    o = n(25990),
    c = n(921813),
    d = n(861305);
function u(e) {
    var t;
    let { user: u, disabledInputs: m, containerClassName: g } = e,
        { reducedMotion: p } = i.useContext(a.Sfi),
        {
            pendingAvatar: h,
            pendingBanner: f,
            pendingThemeColors: N,
            pendingPronouns: x,
            pendingBio: b,
            tryItOutThemeColors: _,
            tryItOutAvatar: E,
            tryItOutBanner: j,
            tryItOutAvatarDecoration: C,
            tryItOutProfileEffectId: O
        } = (0, s.cj)([o.Z], () =>
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
            })({}, o.Z.getAllPending(), o.Z.getAllTryItOut())
        ),
        v = (0, l.Z)(C, !1);
    return (0, r.jsx)(c.Z, {
        containerClassName: g,
        user: u,
        pendingPronouns: x,
        pendingBio: b,
        pendingBanner: null !== (t = null != j ? j : f) && void 0 !== t ? t : n(466045),
        pendingAvatar: null != E ? E : h,
        pendingThemeColors: null != _ ? _ : N,
        pendingAvatarDecoration: v,
        pendingProfileEffectId: O,
        avatarClassName: null != E || null != h || p.enabled ? void 0 : d.spinningAvatar,
        canUsePremiumCustomization: !0,
        isTryItOutFlow: !0,
        hideExampleButton: !0,
        disabledInputs: m
    });
}
