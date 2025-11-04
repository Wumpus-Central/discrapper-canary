n.d(t, { Z: () => _ });
var r = n(951288),
    i = n(647438),
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
            pendingDisplayNameStyles: b,
            pendingThemeColors: y,
            pendingPronouns: O,
            pendingBio: v,
            tryItOutThemeColors: I,
            tryItOutAvatar: T,
            tryItOutBanner: S,
            tryItOutAvatarDecoration: A,
            tryItOutDisplayNameStyles: C,
        } = (0, a.cj)([l.Z], () => f({}, l.Z.getAllPending(), l.Z.getAllTryItOut())),
        N = (0, s.SD)({
            userId: d.id,
            image: null != T ? T : m,
        });
    return (0, r.jsx)(c.Z, {
        containerClassName: p,
        user: d,
        pendingPronouns: O,
        pendingBio: v,
        pendingBanner: null != (t = null != S ? S : g) ? t : n(466045),
        pendingDisplayNameStyles: null != C ? C : b,
        pendingAvatar: N,
        pendingThemeColors: null != I ? I : y,
        pendingAvatarDecoration: void 0 !== A ? A : E,
        avatarClassName: null != T || null != m || h.enabled ? void 0 : u.spinningAvatar,
        canUsePremiumCustomization: !0,
        isTryItOutFlow: !0,
        disabledInputs: _,
        hideExampleButton: !0,
    });
}
