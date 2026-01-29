n.d(t, {
    A: () => u,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(101058),
    o = n(836602),
    c = n(287070),
    d = n(83118);

function u(e) {
    var t;
    let { user: u, disabledInputs: p, containerClassName: _ } = e,
        { reducedMotion: m } = i.useContext(s.CZY),
        {
            pendingAvatar: g,
            pendingBanner: f,
            pendingAvatarDecoration: b,
            pendingProfileEffect: h,
            pendingDisplayNameStyles: A,
            pendingThemeColors: E,
            pendingPronouns: x,
            pendingBio: O,
            tryItOutThemeColors: C,
            tryItOutAvatar: y,
            tryItOutBanner: j,
            tryItOutAvatarDecoration: T,
            tryItOutDisplayNameStyles: v,
        } = (0, l.cf)([o.A], () =>
            (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, o.A.getPendingChanges(), o.A.getTryItOutChanges()),
        ),
        S = (0, a.V7)({
            userId: u.id,
            image: null != y ? y : g,
        });
    return (0, r.jsx)(c.A, {
        containerClassName: _,
        user: u,
        pendingPronouns: x,
        pendingBio: O,
        pendingBanner: null != (t = null != j ? j : f) ? t : n(636763),
        pendingDisplayNameStyles: null != v ? v : A,
        pendingAvatar: S,
        pendingThemeColors: null != C ? C : E,
        pendingAvatarDecoration: void 0 !== T ? T : b,
        pendingProfileEffect: h,
        avatarClassName: null != y || null != g || m.enabled ? void 0 : d.W,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        disabledInputs: p,
        hideExampleButton: !0,
    });
}
