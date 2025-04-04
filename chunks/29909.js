n.d(t, { Z: () => E }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(68405),
    c = n(985375),
    u = n(585483),
    d = n(981631),
    f = n(388032),
    _ = n(54816);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = i.memo(function (e) {
    let { width: t, height: n, src: o, url: p, format: m, className: E } = e,
        [b, y] = i.useState(!1),
        v = (0, c.hb)((0, l.iy)(p)),
        O = v ? f.NW.string(f.t['5/NS7+']) : f.NW.string(f.t.nIH0v7),
        I = v ? s.r7p : s.vxU;
    i.useEffect(() => {
        if (!b) return;
        let e = setTimeout(() => {
            y(!1);
        }, 500);
        return () => clearTimeout(e);
    }, [b]);
    let S = (e) => {
        e.preventDefault(),
            e.stopPropagation(),
            y(!0),
            v
                ? (0, l.PF)(p)
                : ((0, l.uL)({
                      url: p,
                      src: o,
                      width: t,
                      height: n,
                      format: m
                  }),
                  u.S.dispatch(d.CkL.FAVORITE_GIF));
    };
    return (0, r.jsx)(s.ua7, {
        text: O,
        children: (e) =>
            (0, r.jsx)(
                s.P3F,
                g(h({}, e), {
                    className: a()(E, _.gifFavoriteButton, {
                        [_.selected]: v,
                        [_.showPulse]: b
                    }),
                    onMouseDown: (e) => e.preventDefault(),
                    onClick: S,
                    onDoubleClick: (e) => e.preventDefault(),
                    children: (0, r.jsx)(I, {
                        color: 'currentColor',
                        className: _.icon,
                        size: 'custom',
                        width: 20,
                        height: 20
                    })
                })
            )
    });
});
