n.d(t, { Z: () => A });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(692547),
    l = n(481060),
    c = n(220082),
    u = n(420596),
    d = n(880563),
    f = n(168631),
    p = n(687158),
    _ = n(213053),
    m = n(484459),
    h = n(695346),
    g = n(775610),
    E = n(981631),
    b = n(671955),
    y = n(182719);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let A = function (e) {
    var t,
        n,
        a,
        O,
        S,
        C,
        {
            style: A,
            src: N,
            backgroundSrc: P,
            userId: R,
            guildId: D,
            pulseSpeakingIndicator: w = !1,
            speaking: x = !1,
        } = e,
        L = T(e, ["style", "src", "backgroundSrc", "userId", "guildId", "pulseSpeakingIndicator", "speaking"]);
    let j = null != P ? P : N,
        M = (0, c.ZP)(j, s.Z.unsafe_rawColors.PRIMARY_800.css),
        k = (0, u.c)(!0, "VideoBackground-web").enabled,
        U = (0, p.ZP)(null != R ? R : E.lds, D),
        G = null != (O = (0, f.V3)(null == U || null == (t = U.themeColors) ? void 0 : t[0])) ? O : E.BRd.DARK,
        { profileThemeStyle: Z, profileThemeClassName: B } = (0, _.Z)({
            theme: G,
            themeType: b.l.VIDEO_TILE_BACKGROUND,
            primaryColor: null != (S = null == U || null == (n = U.themeColors) ? void 0 : n[0]) ? S : null,
            secondaryColor: null != (C = null == U || null == (a = U.themeColors) ? void 0 : a[1]) ? C : null,
        }),
        F =
            null == U
                ? void 0
                : U.getBannerURL({
                      size: 1024,
                      canAnimate: h.QK.getSetting(),
                  }),
        { useProfileColors: V } = (0, g.$i)("VideoBackground-web"),
        H = V || k;
    if (
        (i.useEffect(() => {
            null != R &&
                H &&
                (0, m.Z)(R, void 0, {
                    guildId: D,
                    dispatchWait: !0,
                });
        }, [H, R, D]),
        null == N)
    )
        return null;
    let Y = (0, r.jsx)(
            l.qEK,
            v(
                {
                    className: y.avatarWrapper,
                    src: N,
                },
                L,
            ),
        ),
        W = I(v({}, A), { backgroundColor: M });
    return (
        null != F && x && k && ((W.backgroundImage = "url(".concat(F, ")")), (W.backgroundSize = "cover")),
        (0, r.jsx)("div", {
            style: V ? v({}, A, Z) : v({}, W),
            className: o()(y.background, { [B]: V }),
            children: w
                ? (0, r.jsx)(d.Z, {
                      shouldAnimate: x,
                      children: Y,
                  })
                : Y,
        })
    );
};
