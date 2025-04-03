n.d(t, {
    default: () => N,
    k: () => O
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(311570),
    l = n(692547),
    o = n(481060),
    s = n(100527),
    c = n(906732),
    u = n(688465),
    d = n(333867),
    p = n(980463),
    m = n(576645),
    f = n(317951),
    h = n(63063),
    g = n(937615),
    _ = n(82950),
    b = n(981631),
    x = n(388032),
    y = n(668275),
    E = n(99713);
function v(e) {
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
}
let O = (e, t) => {
    (0, m.mx)(t),
        (0, o.ZDy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 447564));
                return (n) => (0, r.jsx)(t, v({ channel: e }, n));
            },
            { modalKey: j }
        );
};
function N(e) {
    let { transitionState: t, channel: n } = e;
    return (0, r.jsx)(o.Y0X, {
        size: o.CgR.DYNAMIC,
        transitionState: t,
        children: (0, r.jsx)(C, { channel: n })
    });
}
let j = 'HD_STREAMING_POTION_MODAL_KEY';
function C(e) {
    let { channel: t } = e,
        n = (0, m.T$)(t),
        [l, u] = (0, i.useState)(!1),
        { price: h, fetchingPrice: g, error: _ } = (0, m.R2)(f.FX),
        { entitlement: x, fetchedEntitlement: y, error: E } = (0, m.t6)(f.FX),
        v = _ || E,
        { analyticsLocations: O } = (0, c.ZP)([s.Z.HD_STREAMING_POTION_MODAL]),
        N = null != x && !x.consumed;
    (0, i.useEffect)(
        () => () => {
            v && (0, p.SN)(f.FX);
        },
        [x, t, l, v]
    );
    let j = (0, i.useCallback)(() => {
            (0, p.Zu)(t.id), (0, o.pTH)();
        }, [t.id]),
        C = (0, i.useCallback)(() => {
            (0, d.Z)({
                skuId: f.FX,
                analyticsLocations: O,
                onComplete: j,
                variantsReturnStyle: a.v.INDIVIDUAL_PRODUCTS
            });
        }, [O, j]),
        S = (0, i.useMemo)(() => () => (t.isHDStreamSplashed ? 4 : n ? ((null == x ? void 0 : x.type) === b.qc2.DEVELOPER_GIFT ? 1 : 2 * !!N) : 3), [t.isHDStreamSplashed, n, null == x ? void 0 : x.type, N]),
        T = (0, i.useMemo)(() => S(), [S]);
    return (0, r.jsx)(I, {
        channel: t,
        buttonState: T,
        price: h,
        onActionClick: () => {
            u(!0), (N ? j : C)();
        },
        loading: g || !y
    });
}
let I = (e) => {
        let { channel: t, buttonState: n, price: i, onActionClick: a, loading: l } = e;
        return l
            ? (0, r.jsx)(Z, {})
            : null == i
              ? (0, r.jsx)(w, {})
              : (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: y.modal,
                            children: [(0, r.jsx)(S, {}), (0, r.jsx)(T, { channel: t })]
                        }),
                        (0, r.jsx)(P, {
                            buttonState: n,
                            price: i,
                            onActionClick: a
                        })
                    ]
                });
    },
    S = () =>
        (0, r.jsx)('img', {
            className: y.image,
            src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
            alt: x.NW.string(x.t.DdigcX)
        }),
    T = (e) => {
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
                                    children: x.NW.string(x.t.K04rOD)
                                }),
                                (0, r.jsx)(u.Z, {})
                            ]
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: x.NW.string(x.t.lq40Pz)
                        }),
                        (0, r.jsx)(o.Text, {
                            color: 'text-link',
                            variant: 'text-sm/normal',
                            children: x.NW.format(x.t['1wV4qq'], { helpCenterLink: h.Z.getArticleURL(b.BhN.HD_STREAMING_POTION) })
                        }),
                        (0, r.jsx)(o.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/medium',
                            children: x.NW.string(x.t.qk07Mj)
                        })
                    ]
                }),
                (0, r.jsx)('div', { className: y.divider }),
                (0, r.jsxs)('div', {
                    className: y.applyingTo,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: 'eyebrow',
                            children: x.NW.string(x.t.tZyXg4)
                        }),
                        (0, r.jsx)(_.Z, { channel: t })
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
                    children: x.NW.string(x.t.Avt5KS)
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
            a = x.NW.formatToPlainString(x.t.S9LAdX, { price: (0, g.T4)(n.amount, n.currency) });
        if (3 === t || 4 === t) {
            let e = {
                3: x.NW.string(x.t.Qrh2BQ),
                4: x.NW.string(x.t.utRdl5)
            }[t];
            return (0, r.jsx)(o.ua7, {
                tooltipContentClassName: y.tooltip,
                text: e,
                children: (e) => {
                    var t, n;
                    return (0, r.jsx)(
                        o.zxk,
                        ((t = v({}, e)),
                        (n = n =
                            {
                                disabled: !0,
                                children: a
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
            0: a,
            1: x.NW.string(x.t.sl6Tcn),
            2: x.NW.string(x.t.XJ9INj)
        }[t];
        return (0, r.jsx)(o.zxk, {
            onClick: i,
            children: (0, r.jsxs)('div', {
                className: y.buttonCopy,
                children: [
                    (0, r.jsx)(o.hh5, {
                        color: l.Z.colors.WHITE,
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
                        src: E,
                        width: 178,
                        height: 190
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: x.NW.string(x.t.sIA0OD)
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
