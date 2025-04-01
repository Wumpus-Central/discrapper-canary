n.d(t, { default: () => P });
var r = n(200651),
    o = n(192379),
    c = n(442837),
    s = n(481060),
    i = n(809206),
    a = n(410030),
    l = n(906732),
    d = n(1585),
    f = n(164946),
    u = n(25990),
    p = n(594174),
    b = n(668826),
    g = n(120421),
    O = n(477839),
    j = n(884479),
    y = n(388032),
    h = n(873608),
    m = n(688401),
    x = n(609051),
    k = n(411384);
function P(e) {
    var t,
        n,
        { analyticsLocations: P } = e,
        v = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        c = Object.keys(e);
                    for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++) (n = c[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['analyticsLocations']);
    let w = (0, c.e7)([p.default], () => p.default.getCurrentUser()),
        N = (0, a.ZP)(),
        { analyticsLocations: Z } = (0, l.ZP)(P),
        C = (0, c.e7)([g.Z], () => g.Z.isRedeemingPrize);
    return (
        (0, o.useEffect)(() => {
            null != w && (0, b.YM)(w);
        }, []),
        (0, r.jsxs)(
            s.Y0X,
            ((t = (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, v)),
            (n = n =
                {
                    children: [
                        (0, r.jsx)('img', {
                            className: h.decorationBackground,
                            src: 'light' === N ? x : m,
                            alt: ''
                        }),
                        (0, r.jsxs)(s.hzk, {
                            className: h.content,
                            children: [
                                (0, r.jsx)('img', {
                                    className: h.decoration,
                                    src: k.Z,
                                    alt: ''
                                }),
                                (0, r.jsx)(s.X6q, {
                                    className: h.header,
                                    variant: 'heading-md/bold',
                                    children: y.NW.string(j.Z.B0jZ3t)
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-md/normal',
                                    children: y.NW.string(j.Z.aexiND)
                                })
                            ]
                        }),
                        (0, r.jsxs)(s.mzw, {
                            children: [
                                (0, r.jsx)(s.zxk, {
                                    onClick: () => {
                                        v.onClose(),
                                            (0, d.ps)({
                                                initialSelectedDecorationId: O.MH,
                                                analyticsLocations: Z,
                                                onClose: () => {
                                                    let e = u.Z.getAllPending(),
                                                        t = (0, f.ED)(e);
                                                    (0, i.Mn)(t), (0, i.si)();
                                                }
                                            });
                                    },
                                    submitting: C,
                                    children: y.NW.string(y.t['Tna/TU'])
                                }),
                                (0, r.jsx)(s.zxk, {
                                    onClick: v.onClose,
                                    look: s.zxk.Looks.LINK,
                                    color: s.zxk.Colors.PRIMARY,
                                    children: y.NW.string(y.t['ETE/oK'])
                                })
                            ]
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        )
    );
}
