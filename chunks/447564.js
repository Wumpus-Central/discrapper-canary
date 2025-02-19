n.d(t, {
    default: () => j,
    k: () => E
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(311570),
    o = n(692547),
    l = n(481060),
    s = n(100527),
    c = n(906732),
    d = n(688465),
    u = n(333867),
    p = n(980463),
    m = n(576645),
    f = n(317951),
    h = n(63063),
    g = n(937615),
    _ = n(82950),
    b = n(981631),
    v = n(388032),
    y = n(30244),
    x = n(99713);
function O(e) {
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
let E = (e, t) => {
    (0, m.mx)(t),
        (0, l.ZDy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 447564));
                return (n) => (0, r.jsx)(t, O({ channel: e }, n));
            },
            { modalKey: N }
        );
};
function j(e) {
    let { transitionState: t, channel: n } = e;
    return (0, r.jsx)(l.Y0X, {
        size: l.CgR.DYNAMIC,
        transitionState: t,
        children: (0, r.jsx)(C, { channel: n })
    });
}
let N = 'HD_STREAMING_POTION_MODAL_KEY';
function C(e) {
    let { channel: t } = e,
        n = (0, m.T$)(t),
        [o, d] = (0, i.useState)(!1),
        { price: h, fetchingPrice: g, error: _ } = (0, m.R2)(f.FX),
        { entitlement: v, fetchedEntitlement: y, error: x } = (0, m.t6)(f.FX),
        O = _ || x,
        { analyticsLocations: E } = (0, c.ZP)([s.Z.HD_STREAMING_POTION_MODAL]),
        j = null != v && !v.consumed;
    (0, i.useEffect)(
        () => () => {
            O && (0, p.SN)(f.FX);
        },
        [v, t, o, O]
    );
    let N = (0, i.useCallback)(() => {
            (0, p.Zu)(t.id), (0, l.pTH)();
        }, [t.id]),
        C = (0, i.useCallback)(() => {
            (0, u.Z)({
                skuId: f.FX,
                analyticsLocations: E,
                onComplete: N,
                variantsReturnStyle: a.v.INDIVIDUAL_PRODUCTS
            });
        }, [E, N]),
        S = (0, i.useMemo)(() => () => (t.isHDStreamSplashed ? 4 : n ? ((null == v ? void 0 : v.type) === b.qc2.DEVELOPER_GIFT ? 1 : 2 * !!j) : 3), [t.isHDStreamSplashed, n, null == v ? void 0 : v.type, j]),
        P = (0, i.useMemo)(() => S(), [S]);
    return (0, r.jsx)(I, {
        channel: t,
        buttonState: P,
        price: h,
        onActionClick: () => {
            d(!0), (j ? N : C)();
        },
        loading: g || !y
    });
}
let I = (e) => {
        let { channel: t, buttonState: n, price: i, onActionClick: a, loading: o } = e;
        return o
            ? (0, r.jsx)(Z, {})
            : null == i
              ? (0, r.jsx)(w, {})
              : (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: y.modal,
                            children: [(0, r.jsx)(S, {}), (0, r.jsx)(P, { channel: t })]
                        }),
                        (0, r.jsx)(T, {
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
            alt: v.NW.string(v.t.DdigcX)
        }),
    P = (e) => {
        let { channel: t } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: y.body,
                    children: [
                        (0, r.jsxs)('div', {
                            className: y.heading,
                            children: [
                                (0, r.jsx)(l.X6q, {
                                    variant: 'heading-lg/bold',
                                    children: v.NW.string(v.t.K04rOD)
                                }),
                                (0, r.jsx)(d.Z, {})
                            ]
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: v.NW.string(v.t.lq40Pz)
                        }),
                        (0, r.jsx)(l.Text, {
                            color: 'text-link',
                            variant: 'text-sm/normal',
                            children: v.NW.format(v.t['1wV4qq'], { helpCenterLink: h.Z.getArticleURL(b.BhN.HD_STREAMING_POTION) })
                        }),
                        (0, r.jsx)(l.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/medium',
                            children: v.NW.string(v.t.qk07Mj)
                        })
                    ]
                }),
                (0, r.jsx)('div', { className: y.divider }),
                (0, r.jsxs)('div', {
                    className: y.applyingTo,
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: 'eyebrow',
                            children: v.NW.string(v.t.tZyXg4)
                        }),
                        (0, r.jsx)(_.Z, { channel: t })
                    ]
                })
            ]
        });
    },
    T = (e) => {
        let { buttonState: t, price: n, onActionClick: i } = e;
        return (0, r.jsxs)('div', {
            className: y.footer,
            children: [
                (0, r.jsx)(l.zxk, {
                    onClick: () => {
                        (0, l.Mr3)(N);
                    },
                    color: l.zxk.Colors.PRIMARY,
                    children: v.NW.string(v.t.Avt5KS)
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
            a = v.NW.formatToPlainString(v.t.S9LAdX, { price: (0, g.T4)(n.amount, n.currency) });
        if (3 === t || 4 === t) {
            let e = {
                3: v.NW.string(v.t.Qrh2BQ),
                4: v.NW.string(v.t.utRdl5)
            }[t];
            return (0, r.jsx)(l.ua7, {
                tooltipContentClassName: y.tooltip,
                text: e,
                children: (e) => {
                    var t, n;
                    return (0, r.jsx)(
                        l.zxk,
                        ((t = O({}, e)),
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
            1: v.NW.string(v.t.sl6Tcn),
            2: v.NW.string(v.t.XJ9INj)
        }[t];
        return (0, r.jsx)(l.zxk, {
            onClick: i,
            children: (0, r.jsxs)('div', {
                className: y.buttonCopy,
                children: [
                    (0, r.jsx)(l.hh5, {
                        color: o.Z.colors.WHITE,
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
                    (0, r.jsx)(l.Eep, {
                        src: x,
                        width: 178,
                        height: 190
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: v.NW.string(v.t.sIA0OD)
                    })
                ]
            })
        }),
    Z = () =>
        (0, r.jsx)('div', {
            className: y.anomaly,
            children: (0, r.jsx)('div', {
                className: y.spinner,
                children: (0, r.jsx)(l.$jN, {})
            })
        });
