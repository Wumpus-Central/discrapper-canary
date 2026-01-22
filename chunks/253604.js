n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(101058),
    l = n(752319),
    c = n(287070),
    u = n(83118);
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
        { reducedMotion: h } = i.useContext(s.CZY),
        {
            pendingAvatar: m,
            pendingBanner: g,
            pendingAvatarDecoration: E,
            pendingProfileEffect: b,
            pendingDisplayNameStyles: y,
            pendingThemeColors: O,
            pendingPronouns: A,
            pendingBio: v,
            tryItOutThemeColors: S,
            tryItOutAvatar: I,
            tryItOutBanner: T,
            tryItOutAvatarDecoration: C,
            tryItOutDisplayNameStyles: N,
        } = (0, a.cf)([l.A], () => f({}, l.A.getAllPending(), l.A.getAllTryItOut())),
        R = (0, o.V7)({
            userId: d.id,
            image: null != I ? I : m,
        });
    return (0, r.jsx)(c.A, {
        containerClassName: _,
        user: d,
        pendingPronouns: A,
        pendingBio: v,
        pendingBanner: null != (t = null != T ? T : g) ? t : n(636763),
        pendingDisplayNameStyles: null != N ? N : y,
        pendingAvatar: R,
        pendingThemeColors: null != S ? S : O,
        pendingAvatarDecoration: void 0 !== C ? C : E,
        pendingProfileEffect: b,
        avatarClassName: null != I || null != m || h.enabled ? void 0 : u.W,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        disabledInputs: p,
        hideExampleButton: !0,
    });
}
