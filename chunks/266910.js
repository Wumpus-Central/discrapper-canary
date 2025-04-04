n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    o = n(692547),
    a = n(481060),
    s = n(220082),
    l = n(420596),
    c = n(880563),
    u = n(687158),
    d = n(484459),
    f = n(695346),
    _ = n(981631),
    p = n(318413);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let v = function (e) {
    var { style: t, src: n, backgroundSrc: h, userId: g, pulseSpeakingIndicator: y = !1, speaking: v = !1 } = e,
        O = b(e, ['style', 'src', 'backgroundSrc', 'userId', 'pulseSpeakingIndicator', 'speaking']);
    let I = null != h ? h : n,
        S = (0, s.ZP)(I, o.Z.unsafe_rawColors.PRIMARY_800.css),
        T = (0, l.c)(!0, 'VideoBackground-web').enabled,
        N = (0, u.ZP)(null != g ? g : _.lds),
        A =
            null == N
                ? void 0
                : N.getBannerURL({
                      size: 1024,
                      canAnimate: f.QK.getSetting()
                  });
    if (
        (i.useEffect(() => {
            null != g && T && (0, d.Z)(g, void 0, { dispatchWait: !0 });
        }, [T, g]),
        null == n)
    )
        return null;
    let C = (0, r.jsx)(
            a.qEK,
            m(
                {
                    className: p.avatarWrapper,
                    src: n
                },
                O
            )
        ),
        R = E(m({}, t), { backgroundColor: S });
    return (
        null != A && v && T && ((R.backgroundImage = 'url('.concat(A, ')')), (R.backgroundSize = 'cover')),
        (0, r.jsx)('div', {
            style: R,
            className: p.background,
            children: y
                ? (0, r.jsx)(c.Z, {
                      shouldAnimate: v,
                      children: C
                  })
                : C
        })
    );
};
