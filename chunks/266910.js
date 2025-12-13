n.d(t, { Z: () => T });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(692547),
    l = n(481060),
    c = n(220082),
    u = n(880563),
    d = n(168631),
    f = n(687158),
    p = n(213053),
    _ = n(484459),
    m = n(775610),
    h = n(981631),
    g = n(671955),
    E = n(607437);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let T = function (e) {
    var t,
        n,
        a,
        b,
        O,
        I,
        {
            style: T,
            src: C,
            backgroundSrc: A,
            userId: N,
            guildId: P,
            pulseSpeakingIndicator: R = !1,
            speaking: w = !1,
        } = e,
        D = S(e, ["style", "src", "backgroundSrc", "userId", "guildId", "pulseSpeakingIndicator", "speaking"]);
    let x = null != A ? A : C,
        L = (0, c.ZP)(x, s.Z.unsafe_rawColors.PRIMARY_800.css),
        j = (0, f.ZP)(null != N ? N : h.lds, P),
        M = null != (b = (0, d.V3)(null == j || null == (t = j.themeColors) ? void 0 : t[0])) ? b : h.BRd.DARK,
        { profileThemeStyle: k, profileThemeClassName: U } = (0, p.Z)({
            theme: M,
            themeType: g.l.VIDEO_TILE_BACKGROUND,
            primaryColor: null != (O = null == j || null == (n = j.themeColors) ? void 0 : n[0]) ? O : null,
            secondaryColor: null != (I = null == j || null == (a = j.themeColors) ? void 0 : a[1]) ? I : null,
        }),
        { useProfileColors: G } = (0, m.$i)("VideoBackground-web");
    if (
        (i.useEffect(() => {
            null != N &&
                G &&
                (0, _.Z)(N, void 0, {
                    guildId: P,
                    dispatchWait: !0,
                });
        }, [G, N, P]),
        null == C)
    )
        return null;
    let Z = (0, r.jsx)(
            l.qEK,
            y(
                {
                    className: E.avatarWrapper,
                    src: C,
                },
                D,
            ),
        ),
        F = v(y({}, T), { backgroundColor: L });
    return (0, r.jsx)("div", {
        style: G ? y({}, T, k) : y({}, F),
        className: o()(E.background, { [U]: G }),
        children: R
            ? (0, r.jsx)(u.Z, {
                  shouldAnimate: w,
                  children: Z,
              })
            : Z,
    });
};
