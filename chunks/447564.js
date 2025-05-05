n.d(t, {
    default: () => j,
    k: () => O
}),
    n(388685);
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
    h = n(63063),
    g = n(937615),
    _ = n(82950),
    b = n(981631),
    y = n(388032),
    x = n(668275),
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
            { modalKey: C }
        );
};
function j(e) {
    let { transitionState: t, channel: n } = e;
    return (0, r.jsx)(o.Y0X, {
        size: o.CgR.DYNAMIC,
        transitionState: t,
        children: (0, r.jsx)(S, { channel: n })
    });
}
let C = 'HD_STREAMING_POTION_MODAL_KEY';
function S(e) {
    let { channel: t } = e,
        n = (0, m.T$)(t),
        [a, u] = (0, i.useState)(!1),
        { price: h, fetchingPrice: g, error: _ } = (0, m.R2)(f.FX),
        { entitlement: y, fetchedEntitlement: x, error: E } = (0, m.t6)(f.FX),
        v = _ || E,
        { analyticsLocations: O } = (0, c.ZP)([s.Z.HD_STREAMING_POTION_MODAL]),
        j = null != y && !y.consumed;
    (0, i.useEffect)(
        () => () => {
            v && (0, p.SN)(f.FX);
        },
        [y, t, a, v]
    );
    let C = (0, i.useCallback)(() => {
            (0, p.Zu)(t.id), (0, o.pTH)();
        }, [t.id]),
        S = (0, i.useCallback)(() => {
            (0, d.Z)({
                skuId: f.FX,
                analyticsLocations: O,
                onComplete: C,
                variantsReturnStyle: l.v.INDIVIDUAL_PRODUCTS
            });
        }, [O, C]),
        N = (0, i.useMemo)(() => () => (t.isHDStreamSplashed ? 4 : n ? ((null == y ? void 0 : y.type) === b.qc2.DEVELOPER_GIFT ? 1 : 2 * !!j) : 3), [t.isHDStreamSplashed, n, null == y ? void 0 : y.type, j]),
        T = (0, i.useMemo)(() => N(), [N]);
    return (0, r.jsx)(I, {
        channel: t,
        buttonState: T,
        price: h,
        onActionClick: () => {
            u(!0), (j ? C : S)();
        },
        loading: g || !x
    });
}
let I = (e) => {
        let { channel: t, buttonState: n, price: i, onActionClick: l, loading: a } = e;
        return a
            ? (0, r.jsx)(Z, {})
            : null == i
              ? (0, r.jsx)(w, {})
              : (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: x.modal,
                            children: [(0, r.jsx)(N, {}), (0, r.jsx)(T, { channel: t })]
                        }),
                        (0, r.jsx)(P, {
                            buttonState: n,
                            price: i,
                            onActionClick: l
                        })
                    ]
                });
    },
    N = () =>
        (0, r.jsx)('img', {
            className: x.image,
            src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
            alt: y.intl.string(y.t.DdigcX)
        }),
    T = (e) => {
        let { channel: t } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: x.body,
                    children: [
                        (0, r.jsxs)('div', {
                            className: x.heading,
                            children: [
                                (0, r.jsx)(o.X6q, {
                                    variant: 'heading-lg/bold',
                                    children: y.intl.string(y.t.K04rOD)
                                }),
                                (0, r.jsx)(u.Z, {})
                            ]
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: y.intl.string(y.t.lq40Pz)
                        }),
                        (0, r.jsx)(o.Text, {
                            color: 'text-link',
                            variant: 'text-sm/normal',
                            children: y.intl.format(y.t['1wV4qq'], { helpCenterLink: h.Z.getArticleURL(b.BhN.HD_STREAMING_POTION) })
                        }),
                        (0, r.jsx)(o.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/medium',
                            children: y.intl.string(y.t.qk07Mj)
                        })
                    ]
                }),
                (0, r.jsx)('div', { className: x.divider }),
                (0, r.jsxs)('div', {
                    className: x.applyingTo,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: 'eyebrow',
                            children: y.intl.string(y.t.tZyXg4)
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
            className: x.footer,
            children: [
                (0, r.jsx)(o.zxk, {
                    onClick: () => {
                        (0, o.Mr3)(C);
                    },
                    color: o.zxk.Colors.PRIMARY,
                    children: y.intl.string(y.t.Avt5KS)
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
            l = y.intl.formatToPlainString(y.t.S9LAdX, { price: (0, g.T4)(n.amount, n.currency) });
        if (3 === t || 4 === t) {
            let e = {
                3: y.intl.string(y.t.Qrh2BQ),
                4: y.intl.string(y.t.utRdl5)
            }[t];
            return (0, r.jsx)(o.ua7, {
                tooltipContentClassName: x.tooltip,
                text: e,
                children: (e) => {
                    var t, n;
                    return (0, r.jsx)(
                        o.zxk,
                        ((t = v({}, e)),
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
            1: y.intl.string(y.t.sl6Tcn),
            2: y.intl.string(y.t.XJ9INj)
        }[t];
        return (0, r.jsx)(o.zxk, {
            onClick: i,
            children: (0, r.jsxs)('div', {
                className: x.buttonCopy,
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
            className: x.anomaly,
            children: (0, r.jsxs)('div', {
                className: x.error,
                children: [
                    (0, r.jsx)(o.Eep, {
                        src: E,
                        width: 178,
                        height: 190
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: y.intl.string(y.t.sIA0OD)
                    })
                ]
            })
        }),
    Z = () =>
        (0, r.jsx)('div', {
            className: x.anomaly,
            children: (0, r.jsx)('div', {
                className: x.spinner,
                children: (0, r.jsx)(o.$jN, {})
            })
        });
