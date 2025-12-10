n.d(t, { Z: () => p });
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
function p(e) {
    var t;
    let { user: d, disabledInputs: p, containerClassName: _ } = e,
        { reducedMotion: m } = i.useContext(o.Sfi),
        {
            pendingAvatar: h,
            pendingBanner: g,
            pendingAvatarDecoration: E,
            pendingProfileEffect: b,
            pendingDisplayNameStyles: y,
            pendingThemeColors: O,
            pendingPronouns: v,
            pendingBio: S,
            tryItOutThemeColors: I,
            tryItOutAvatar: T,
            tryItOutBanner: C,
            tryItOutAvatarDecoration: A,
            tryItOutDisplayNameStyles: N,
        } = (0, a.cj)([l.Z], () => f({}, l.Z.getAllPending(), l.Z.getAllTryItOut())),
        P = (0, s.SD)({
            userId: d.id,
            image: null != T ? T : h,
        });
    return (0, r.jsx)(c.Z, {
        containerClassName: _,
        user: d,
        pendingPronouns: v,
        pendingBio: S,
        pendingBanner: null != (t = null != C ? C : g) ? t : n(466045),
        pendingDisplayNameStyles: null != N ? N : y,
        pendingAvatar: P,
        pendingThemeColors: null != I ? I : O,
        pendingAvatarDecoration: void 0 !== A ? A : E,
        pendingProfileEffect: b,
        avatarClassName: null != T || null != h || m.enabled ? void 0 : u.spinningAvatar,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        disabledInputs: p,
        hideExampleButton: !0,
    });
}
