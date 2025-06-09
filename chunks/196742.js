n.d(t, { default: () => C });
var r = n(255367),
    o = n(73800),
    c = n(442837),
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
    O = n(594174),
    m = n(668826),
    j = n(120421),
    y = n(477839),
    h = n(603571),
    k = n(388032),
    x = n(918991),
    P = n(688401),
    v = n(609051),
    w = n(171346);
function C(e) {
    var t,
        n,
        { analyticsLocations: C } = e,
        z = (function (e, t) {
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
    let Z = (0, c.e7)([O.default], () => O.default.getCurrentUser()),
        D = (0, s.ZP)(),
        { analyticsLocations: E } = (0, l.ZP)(C),
        M = (0, c.e7)([j.Z], () => j.Z.isRedeemingPrize),
        S = (0, c.e7)([u.Z], () => u.Z.isFetching),
        N = (0, p.hv)('ClickerGameRedeemPrizeModal');
    return (
        (0, o.useEffect)(() => {
            null != Z &&
                (async () => {
                    await (0, m.YM)(Z),
                        (0, f.qg)({
                            variantsReturnStyle: N,
                            location: 'ClickerGameRedeemPrizeModal'
                        });
                })();
        }, []),
        (0, r.jsxs)(
            i.Y0X,
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
            })({}, z)),
            (n = n =
                {
                    parentComponent: 'ClickerGameRedeemPrizeModal',
                    children: [
                        (0, r.jsx)('img', {
                            className: x.decorationBackground,
                            src: 'light' === D ? v : P,
                            alt: ''
                        }),
                        (0, r.jsxs)(i.hzk, {
                            className: x.content,
                            children: [
                                (0, r.jsx)('img', {
                                    className: x.decoration,
                                    src: w.Z,
                                    alt: ''
                                }),
                                (0, r.jsx)(i.X6q, {
                                    className: x.header,
                                    variant: 'heading-md/bold',
                                    children: k.intl.string(h.default.B0jZ3t)
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-md/normal',
                                    children: k.intl.string(h.default.aexiND)
                                })
                            ]
                        }),
                        (0, r.jsxs)(i.mzw, {
                            children: [
                                (0, r.jsx)(i.zxk, {
                                    onClick: () => {
                                        z.onClose(),
                                            (0, d.ps)({
                                                initialSelectedDecorationId: y.MH,
                                                analyticsLocations: E,
                                                onClose: () => {
                                                    let e = g.Z.getAllPending(),
                                                        t = (0, b.ED)(e);
                                                    (0, a.Mn)(t), (0, a.si)();
                                                }
                                            });
                                    },
                                    submitting: M || S,
                                    children: k.intl.string(k.t.BVcYCw)
                                }),
                                (0, r.jsx)(i.zxk, {
                                    onClick: z.onClose,
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    children: k.intl.string(k.t['ETE/oK'])
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
