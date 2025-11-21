n.d(t, { Z: () => C });
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
    _ = n(687158),
    p = n(213053),
    h = n(484459),
    m = n(695346),
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
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let C = function (e) {
    var t,
        n,
        a,
        O,
        I,
        A,
        {
            style: C,
            src: N,
            backgroundSrc: R,
            userId: P,
            guildId: D,
            pulseSpeakingIndicator: w = !1,
            speaking: L = !1,
        } = e,
        x = S(e, ["style", "src", "backgroundSrc", "userId", "guildId", "pulseSpeakingIndicator", "speaking"]);
    let M = null != R ? R : N,
        k = (0, c.ZP)(M, s.Z.unsafe_rawColors.PRIMARY_800.css),
        j = (0, u.c)(!0, "VideoBackground-web").enabled,
        U = (0, _.ZP)(null != P ? P : E.lds, D),
        G = null != (O = (0, f.V3)(null == U || null == (t = U.themeColors) ? void 0 : t[0])) ? O : E.BRd.DARK,
        { profileThemeStyle: B, profileThemeClassName: Z } = (0, p.Z)({
            theme: G,
            themeType: b.l.VIDEO_TILE_BACKGROUND,
            primaryColor: null != (I = null == U || null == (n = U.themeColors) ? void 0 : n[0]) ? I : null,
            secondaryColor: null != (A = null == U || null == (a = U.themeColors) ? void 0 : a[1]) ? A : null,
        }),
        F =
            null == U
                ? void 0
                : U.getBannerURL({
                      size: 1024,
                      canAnimate: m.QK.getSetting(),
                  }),
        { useProfileColors: V } = (0, g.$i)("VideoBackground-web"),
        H = V || j;
    if (
        (i.useEffect(() => {
            null != P &&
                H &&
                (0, h.Z)(P, void 0, {
                    guildId: D,
                    dispatchWait: !0,
                });
        }, [H, P, D]),
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
                x,
            ),
        ),
        W = T(v({}, C), { backgroundColor: k });
    return (
        null != F && L && j && ((W.backgroundImage = "url(".concat(F, ")")), (W.backgroundSize = "cover")),
        (0, r.jsx)("div", {
            style: V ? v({}, C, B) : v({}, W),
            className: o()(y.background, { [Z]: V }),
            children: w
                ? (0, r.jsx)(d.Z, {
                      shouldAnimate: L,
                      children: Y,
                  })
                : Y,
        })
    );
};
