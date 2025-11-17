n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(643879),
    l = n(25990),
    c = n(678135),
    u = n(575169);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e) {
    var t;
    let { user: d, disabledInputs: _, containerClassName: p } = e,
        { reducedMotion: h } = i.useContext(o.Sfi),
        {
            pendingAvatar: m,
            pendingBanner: g,
            pendingAvatarDecoration: E,
            pendingProfileEffect: b,
            pendingDisplayNameStyles: y,
            pendingThemeColors: O,
            pendingPronouns: v,
            pendingBio: I,
            tryItOutThemeColors: T,
            tryItOutAvatar: S,
            tryItOutBanner: A,
            tryItOutProfileEffect: C,
            tryItOutAvatarDecoration: N,
            tryItOutDisplayNameStyles: R,
        } = (0, a.cj)([l.Z], () => f({}, l.Z.getAllPending(), l.Z.getAllTryItOut())),
        P = (0, s.SD)({
            userId: d.id,
            image: null != S ? S : m,
        });
    return (0, r.jsx)(c.Z, {
        containerClassName: p,
        user: d,
        pendingPronouns: v,
        pendingBio: I,
        pendingBanner: null != (t = null != A ? A : g) ? t : n(466045),
        pendingDisplayNameStyles: null != R ? R : y,
        pendingAvatar: P,
        pendingThemeColors: null != T ? T : O,
        pendingAvatarDecoration: void 0 !== N ? N : E,
        pendingProfileEffect: void 0 !== C ? C : b,
        avatarClassName: null != S || null != m || h.enabled ? void 0 : u.spinningAvatar,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        disabledInputs: _,
        hideExampleButton: !0,
    });
}
