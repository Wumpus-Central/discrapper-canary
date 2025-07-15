(n.d(t, {
    default: () => j,
    k: () => O
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(311570),
    a = n(692547),
    o = n(755721),
    s = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(688465),
    p = n(333867),
    m = n(980463),
    f = n(576645),
    _ = n(317951),
    g = n(63063),
    h = n(937615),
    b = n(82950),
    E = n(981631),
    y = n(388032),
    C = n(668275),
    v = n(99713);
function x(e) {
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
}
let O = (e, t) => {
    ((0, f.mx)(t),
        (0, s.ZDy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 447564));
                return (n) => (0, r.jsx)(t, x({ channel: e }, n));
            },
            { modalKey: I }
        ));
};
function j(e) {
    let { transitionState: t, channel: n } = e;
    return (0, r.jsx)(s.Y0X, {
        size: s.CgR.DYNAMIC,
        transitionState: t,
        parentComponent: 'HDStreamingConsumableModal',
        children: (0, r.jsx)(S, { channel: n })
    });
}
let I = 'HD_STREAMING_POTION_MODAL_KEY';
function S(e) {
    let { channel: t } = e,
        n = (0, f.T$)(t),
        [a, o] = (0, i.useState)(!1),
        { price: d, fetchingPrice: g, error: h } = (0, f.R2)(_.FX),
        { entitlement: b, fetchedEntitlement: y, error: C } = (0, f.t6)(_.FX),
        v = h || C,
        { analyticsLocations: x } = (0, u.ZP)([c.Z.HD_STREAMING_POTION_MODAL]),
        O = null != b && !b.consumed;
    (0, i.useEffect)(
        () => () => {
            v && (0, m.SN)(_.FX);
        },
        [b, t, a, v]
    );
    let j = (0, i.useCallback)(() => {
            ((0, m.Zu)(t.id), (0, s.pTH)());
        }, [t.id]),
        I = (0, i.useCallback)(() => {
            (0, p.Z)({
                skuId: _.FX,
                analyticsLocations: x,
                onComplete: j,
                variantsReturnStyle: l.v.INDIVIDUAL_PRODUCTS
            });
        }, [x, j]),
        S = (0, i.useMemo)(() => () => (t.isHDStreamSplashed ? 4 : n ? ((null == b ? void 0 : b.type) === E.qc2.DEVELOPER_GIFT ? 1 : 2 * !!O) : 3), [t.isHDStreamSplashed, n, null == b ? void 0 : b.type, O]),
        N = (0, i.useMemo)(() => S(), [S]);
    return (0, r.jsx)(T, {
        channel: t,
        buttonState: N,
        price: d,
        onActionClick: () => {
            (o(!0), (O ? j : I)());
        },
        loading: g || !y
    });
}
let T = (e) => {
        let { channel: t, buttonState: n, price: i, onActionClick: l, loading: a } = e;
        return a
            ? (0, r.jsx)(R, {})
            : null == i
              ? (0, r.jsx)(Z, {})
              : (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: C.modal,
                            children: [(0, r.jsx)(N, {}), (0, r.jsx)(P, { channel: t })]
                        }),
                        (0, r.jsx)(A, {
                            buttonState: n,
                            price: i,
                            onActionClick: l
                        })
                    ]
                });
    },
    N = () =>
        (0, r.jsx)('img', {
            className: C.image,
            src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
            alt: y.intl.string(y.t.DdigcX)
        }),
    P = (e) => {
        let { channel: t } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: C.body,
                    children: [
                        (0, r.jsxs)('div', {
                            className: C.heading,
                            children: [
                                (0, r.jsx)(s.X6q, {
                                    variant: 'heading-lg/bold',
                                    children: y.intl.string(y.t.K04rOD)
                                }),
                                (0, r.jsx)(d.Z, {})
                            ]
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: y.intl.string(y.t.lq40Pz)
                        }),
                        (0, r.jsx)(s.Text, {
                            color: 'text-link',
                            variant: 'text-sm/normal',
                            children: y.intl.format(y.t['1wV4qq'], { helpCenterLink: g.Z.getArticleURL(E.BhN.HD_STREAMING_POTION) })
                        }),
                        (0, r.jsx)(s.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/medium',
                            children: y.intl.string(y.t.qk07Mj)
                        })
                    ]
                }),
                (0, r.jsx)('div', { className: C.divider }),
                (0, r.jsxs)('div', {
                    className: C.applyingTo,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: 'eyebrow',
                            children: y.intl.string(y.t.tZyXg4)
                        }),
                        (0, r.jsx)(b.Z, { channel: t })
                    ]
                })
            ]
        });
    },
    A = (e) => {
        let { buttonState: t, price: n, onActionClick: i } = e;
        return (0, r.jsxs)('div', {
            className: C.footer,
            children: [
                (0, r.jsx)(s.zxk, {
                    variant: 'secondary',
                    text: y.intl.string(y.t.Avt5KS),
                    onClick: () => {
                        (0, s.Mr3)(I);
                    }
                }),
                (0, r.jsx)(w, {
                    buttonState: t,
                    price: n,
                    onActionClick: i
                })
            ]
        });
    },
    w = (e) => {
        let { buttonState: t, price: n, onActionClick: i } = e,
            l = y.intl.formatToPlainString(y.t.S9LAdX, { price: (0, h.T4)(n.amount, n.currency) });
        if (3 === t || 4 === t) {
            let e = {
                3: y.intl.string(y.t.Qrh2BQ),
                4: y.intl.string(y.t.utRdl5)
            }[t];
            return (0, r.jsx)(s.ua7, {
                tooltipContentClassName: C.tooltip,
                text: e,
                children: (e) => {
                    var t, n;
                    return (0, r.jsx)(
                        o.zx,
                        ((t = x({}, e)),
                        (n = n =
                            {
                                disabled: !0,
                                children: l
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
                    );
                }
            });
        }
        let c = {
            0: l,
            1: y.intl.string(y.t.sl6Tcn),
            2: y.intl.string(y.t.XJ9INj)
        }[t];
        return (0, r.jsx)(o.zx, {
            onClick: i,
            children: (0, r.jsxs)('div', {
                className: C.buttonCopy,
                children: [
                    (0, r.jsx)(s.hh5, {
                        color: a.Z.colors.WHITE,
                        size: 'sm'
                    }),
                    c
                ]
            })
        });
    },
    Z = () =>
        (0, r.jsx)('div', {
            className: C.anomaly,
            children: (0, r.jsxs)('div', {
                className: C.error,
                children: [
                    (0, r.jsx)(s.Eep, {
                        src: v,
                        width: 178,
                        height: 190
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: y.intl.string(y.t.sIA0OD)
                    })
                ]
            })
        }),
    R = () =>
        (0, r.jsx)('div', {
            className: C.anomaly,
            children: (0, r.jsx)('div', {
                className: C.spinner,
                children: (0, r.jsx)(s.$jN, {})
            })
        });
