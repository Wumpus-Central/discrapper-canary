n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(588126),
    l = n(643879),
    c = n(25990),
    u = n(678135),
    d = n(575169);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e) {
    var t;
    let { user: f, disabledInputs: p, containerClassName: h } = e,
        { reducedMotion: m } = i.useContext(o.Sfi),
        {
            pendingAvatar: g,
            pendingBanner: E,
            pendingDisplayNameStyles: b,
            pendingThemeColors: y,
            pendingPronouns: O,
            pendingBio: v,
            tryItOutThemeColors: I,
            tryItOutAvatar: T,
            tryItOutBanner: S,
            tryItOutAvatarDecoration: A,
            tryItOutDisplayNameStyles: C,
        } = (0, a.cj)([c.Z], () => _({}, c.Z.getAllPending(), c.Z.getAllTryItOut())),
        N = (0, l.SD)({
            userId: f.id,
            image: null != T ? T : g,
        }),
        R = (0, s.Z)(A, !1);
    return (0, r.jsx)(u.Z, {
        containerClassName: h,
        user: f,
        pendingPronouns: O,
        pendingBio: v,
        pendingBanner: null != (t = null != S ? S : E) ? t : n(466045),
        pendingDisplayNameStyles: null != C ? C : b,
        pendingAvatar: N,
        pendingThemeColors: null != I ? I : y,
        pendingAvatarDecoration: R,
        avatarClassName: null != T || null != g || m.enabled ? void 0 : d.spinningAvatar,
        canUsePremiumCustomization: !0,
        isTryItOutFlow: !0,
        disabledInputs: p,
        hideExampleButton: !0,
    });
}
