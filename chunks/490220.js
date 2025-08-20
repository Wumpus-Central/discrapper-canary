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
            pendingThemeColors: b,
            pendingPronouns: y,
            pendingBio: O,
            tryItOutThemeColors: v,
            tryItOutAvatar: I,
            tryItOutBanner: T,
            tryItOutAvatarDecoration: S,
            tryItOutProfileEffectId: A,
        } = (0, a.cj)([c.Z], () => _({}, c.Z.getAllPending(), c.Z.getAllTryItOut())),
        C = (0, l.SD)({
            userId: f.id,
            image: null != I ? I : g,
        }),
        N = (0, s.Z)(S, !1);
    return (0, r.jsx)(u.Z, {
        containerClassName: h,
        user: f,
        pendingPronouns: y,
        pendingBio: O,
        pendingBanner: null != (t = null != T ? T : E) ? t : n(466045),
        pendingAvatar: C,
        pendingThemeColors: null != v ? v : b,
        pendingAvatarDecoration: N,
        pendingProfileEffectId: A,
        avatarClassName: null != I || null != g || m.enabled ? void 0 : d.spinningAvatar,
        canUsePremiumCustomization: !0,
        isTryItOutFlow: !0,
        disabledInputs: p,
        hideViewFullProfileButton: !0,
    });
}
