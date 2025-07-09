n.d(t, { default: () => C });
var r = n(255367),
    c = n(73800),
    o = n(442837),
    i = n(481060),
    a = n(809206),
    s = n(410030),
    l = n(906732),
    d = n(1585),
    f = n(335131),
    u = n(1870),
    p = n(228624),
    b = n(164946),
    g = n(25990),
    y = n(594174),
    O = n(668826),
    j = n(120421),
    m = n(477839),
    h = n(603571),
    x = n(388032),
    P = n(918991),
    v = n(688401),
    k = n(609051),
    w = n(171346);
function C(e) {
    var t,
        n,
        { analyticsLocations: C } = e,
        Z = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                c = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        c = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (c[n] = e[n]));
                    return c;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]));
            }
            return c;
        })(e, ['analyticsLocations']);
    let z = (0, o.e7)([y.default], () => y.default.getCurrentUser()),
        E = (0, s.ZP)(),
        { analyticsLocations: D } = (0, l.ZP)(C),
        S = (0, o.e7)([j.Z], () => j.Z.isRedeemingPrize),
        M = (0, o.e7)([u.Z], () => u.Z.isFetching),
        _ = (0, p.hv)('ClickerGameRedeemPrizeModal');
    return (
        (0, c.useEffect)(() => {
            null != z &&
                (async () => {
                    (await (0, O.YM)(z),
                        (0, f.qg)({
                            variantsReturnStyle: _,
                            location: 'ClickerGameRedeemPrizeModal'
                        }));
                })();
        }, []),
        (0, r.jsxs)(
            i.Y0X,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })({}, Z)),
            (n = n =
                {
                    parentComponent: 'ClickerGameRedeemPrizeModal',
                    children: [
                        (0, r.jsx)('img', {
                            className: P.decorationBackground,
                            src: 'light' === E ? k : v,
                            alt: ''
                        }),
                        (0, r.jsxs)(i.hzk, {
                            className: P.content,
                            children: [
                                (0, r.jsx)('img', {
                                    className: P.decoration,
                                    src: w.Z,
                                    alt: ''
                                }),
                                (0, r.jsx)(i.X6q, {
                                    className: P.header,
                                    variant: 'heading-md/bold',
                                    children: x.intl.string(h.default.B0jZ3t)
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-md/normal',
                                    children: x.intl.string(h.default.aexiND)
                                })
                            ]
                        }),
                        (0, r.jsx)(i.mzw, {
                            children: (0, r.jsxs)(i.hE2, {
                                direction: 'horizontal-reverse',
                                children: [
                                    (0, r.jsx)(i.zxk, {
                                        variant: 'primary',
                                        text: x.intl.string(x.t.BVcYCw),
                                        onClick: () => {
                                            (Z.onClose(),
                                                (0, d.ps)({
                                                    initialSelectedDecorationId: m.MH,
                                                    analyticsLocations: D,
                                                    onClose: () => {
                                                        let e = g.Z.getAllPending(),
                                                            t = (0, b.ED)(e);
                                                        ((0, a.Mn)(t), (0, a.si)());
                                                    }
                                                }));
                                        },
                                        loading: S || M
                                    }),
                                    (0, r.jsx)(i.zxk, {
                                        variant: 'secondary',
                                        text: x.intl.string(x.t['ETE/oK']),
                                        onClick: Z.onClose
                                    })
                                ]
                            })
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
