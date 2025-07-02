(n.d(t, {
    default: () => O,
    k: () => v
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(311570),
    a = n(692547),
    o = n(481060),
    s = n(100527),
    c = n(906732),
    u = n(688465),
    d = n(333867),
    p = n(980463),
    m = n(576645),
    f = n(317951),
    g = n(63063),
    _ = n(937615),
    h = n(82950),
    b = n(981631),
    E = n(388032),
    y = n(668275),
    C = n(99713);
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
let v = (e, t) => {
    ((0, m.mx)(t),
        (0, o.ZDy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 447564));
                return (n) => (0, r.jsx)(t, x({ channel: e }, n));
            },
            { modalKey: j }
        ));
};
function O(e) {
    let { transitionState: t, channel: n } = e;
    return (0, r.jsx)(o.Y0X, {
        size: o.CgR.DYNAMIC,
        transitionState: t,
        parentComponent: 'HDStreamingConsumableModal',
        children: (0, r.jsx)(I, { channel: n })
    });
}
let j = 'HD_STREAMING_POTION_MODAL_KEY';
function I(e) {
    let { channel: t } = e,
        n = (0, m.T$)(t),
        [a, u] = (0, i.useState)(!1),
        { price: g, fetchingPrice: _, error: h } = (0, m.R2)(f.FX),
        { entitlement: E, fetchedEntitlement: y, error: C } = (0, m.t6)(f.FX),
        x = h || C,
        { analyticsLocations: v } = (0, c.ZP)([s.Z.HD_STREAMING_POTION_MODAL]),
        O = null != E && !E.consumed;
    (0, i.useEffect)(
        () => () => {
            x && (0, p.SN)(f.FX);
        },
        [E, t, a, x]
    );
    let j = (0, i.useCallback)(() => {
            ((0, p.Zu)(t.id), (0, o.pTH)());
        }, [t.id]),
        I = (0, i.useCallback)(() => {
            (0, d.Z)({
                skuId: f.FX,
                analyticsLocations: v,
                onComplete: j,
                variantsReturnStyle: l.v.INDIVIDUAL_PRODUCTS
            });
        }, [v, j]),
        T = (0, i.useMemo)(() => () => (t.isHDStreamSplashed ? 4 : n ? ((null == E ? void 0 : E.type) === b.qc2.DEVELOPER_GIFT ? 1 : 2 * !!O) : 3), [t.isHDStreamSplashed, n, null == E ? void 0 : E.type, O]),
        N = (0, i.useMemo)(() => T(), [T]);
    return (0, r.jsx)(S, {
        channel: t,
        buttonState: N,
        price: g,
        onActionClick: () => {
            (u(!0), (O ? j : I)());
        },
        loading: _ || !y
    });
}
let S = (e) => {
        let { channel: t, buttonState: n, price: i, onActionClick: l, loading: a } = e;
        return a
            ? (0, r.jsx)(Z, {})
            : null == i
              ? (0, r.jsx)(w, {})
              : (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: y.modal,
                            children: [(0, r.jsx)(T, {}), (0, r.jsx)(N, { channel: t })]
                        }),
                        (0, r.jsx)(P, {
                            buttonState: n,
                            price: i,
                            onActionClick: l
                        })
                    ]
                });
    },
    T = () =>
        (0, r.jsx)('img', {
            className: y.image,
            src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
            alt: E.intl.string(E.t.DdigcX)
        }),
    N = (e) => {
        let { channel: t } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: y.body,
                    children: [
                        (0, r.jsxs)('div', {
                            className: y.heading,
                            children: [
                                (0, r.jsx)(o.X6q, {
                                    variant: 'heading-lg/bold',
                                    children: E.intl.string(E.t.K04rOD)
                                }),
                                (0, r.jsx)(u.Z, {})
                            ]
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: E.intl.string(E.t.lq40Pz)
                        }),
                        (0, r.jsx)(o.Text, {
                            color: 'text-link',
                            variant: 'text-sm/normal',
                            children: E.intl.format(E.t['1wV4qq'], { helpCenterLink: g.Z.getArticleURL(b.BhN.HD_STREAMING_POTION) })
                        }),
                        (0, r.jsx)(o.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/medium',
                            children: E.intl.string(E.t.qk07Mj)
                        })
                    ]
                }),
                (0, r.jsx)('div', { className: y.divider }),
                (0, r.jsxs)('div', {
                    className: y.applyingTo,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: 'eyebrow',
                            children: E.intl.string(E.t.tZyXg4)
                        }),
                        (0, r.jsx)(h.Z, { channel: t })
                    ]
                })
            ]
        });
    },
    P = (e) => {
        let { buttonState: t, price: n, onActionClick: i } = e;
        return (0, r.jsxs)('div', {
            className: y.footer,
            children: [
                (0, r.jsx)(o.zxk, {
                    onClick: () => {
                        (0, o.Mr3)(j);
                    },
                    color: o.zxk.Colors.PRIMARY,
                    children: E.intl.string(E.t.Avt5KS)
                }),
                (0, r.jsx)(A, {
                    buttonState: t,
                    price: n,
                    onActionClick: i
                })
            ]
        });
    },
    A = (e) => {
        let { buttonState: t, price: n, onActionClick: i } = e,
            l = E.intl.formatToPlainString(E.t.S9LAdX, { price: (0, _.T4)(n.amount, n.currency) });
        if (3 === t || 4 === t) {
            let e = {
                3: E.intl.string(E.t.Qrh2BQ),
                4: E.intl.string(E.t.utRdl5)
            }[t];
            return (0, r.jsx)(o.ua7, {
                tooltipContentClassName: y.tooltip,
                text: e,
                children: (e) => {
                    var t, n;
                    return (0, r.jsx)(
                        o.zxk,
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
        let s = {
            0: l,
            1: E.intl.string(E.t.sl6Tcn),
            2: E.intl.string(E.t.XJ9INj)
        }[t];
        return (0, r.jsx)(o.zxk, {
            onClick: i,
            children: (0, r.jsxs)('div', {
                className: y.buttonCopy,
                children: [
                    (0, r.jsx)(o.hh5, {
                        color: a.Z.colors.WHITE,
                        size: 'sm'
                    }),
                    s
                ]
            })
        });
    },
    w = () =>
        (0, r.jsx)('div', {
            className: y.anomaly,
            children: (0, r.jsxs)('div', {
                className: y.error,
                children: [
                    (0, r.jsx)(o.Eep, {
                        src: C,
                        width: 178,
                        height: 190
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: E.intl.string(E.t.sIA0OD)
                    })
                ]
            })
        }),
    Z = () =>
        (0, r.jsx)('div', {
            className: y.anomaly,
            children: (0, r.jsx)('div', {
                className: y.spinner,
                children: (0, r.jsx)(o.$jN, {})
            })
        });
