n.d(t, { default: () => Z });
var r = n(200651),
    c = n(192379),
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
    O = n(594174),
    j = n(668826),
    y = n(120421),
    h = n(477839),
    m = n(622802),
    k = n(388032),
    x = n(918991),
    P = n(688401),
    v = n(609051),
    w = n(411384);
function Z(e) {
    var t,
        n,
        { analyticsLocations: Z } = e,
        C = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                c = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        c = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (c[n] = e[n]);
                    return c;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
            }
            return c;
        })(e, ['analyticsLocations']);
    let N = (0, o.e7)([O.default], () => O.default.getCurrentUser()),
        z = (0, s.ZP)(),
        { analyticsLocations: D } = (0, l.ZP)(Z),
        E = (0, o.e7)([y.Z], () => y.Z.isRedeemingPrize),
        S = (0, o.e7)([u.Z], () => u.Z.isFetching),
        M = (0, p.hv)('ClickerGameRedeemPrizeModal');
    return (
        (0, c.useEffect)(() => {
            null != N &&
                (async () => {
                    await (0, j.YM)(N),
                        (0, f.qg)({
                            variantsReturnStyle: M,
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
            })({}, C)),
            (n = n =
                {
                    children: [
                        (0, r.jsx)('img', {
                            className: x.decorationBackground,
                            src: 'light' === z ? v : P,
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
                                    children: k.NW.string(m.Z.B0jZ3t)
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-md/normal',
                                    children: k.NW.string(m.Z.aexiND)
                                })
                            ]
                        }),
                        (0, r.jsxs)(i.mzw, {
                            children: [
                                (0, r.jsx)(i.zxk, {
                                    onClick: () => {
                                        C.onClose(),
                                            (0, d.ps)({
                                                initialSelectedDecorationId: h.MH,
                                                analyticsLocations: D,
                                                onClose: () => {
                                                    let e = g.Z.getAllPending(),
                                                        t = (0, b.ED)(e);
                                                    (0, a.Mn)(t), (0, a.si)();
                                                }
                                            });
                                    },
                                    submitting: E || S,
                                    children: k.NW.string(k.t['Tna/TU'])
                                }),
                                (0, r.jsx)(i.zxk, {
                                    onClick: C.onClose,
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    children: k.NW.string(k.t['ETE/oK'])
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
