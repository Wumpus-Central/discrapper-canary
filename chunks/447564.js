n.d(t, {
    default: () => N,
    k: () => I
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(311570),
    r = n(692547),
    s = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(688465),
    u = n(333867),
    m = n(980463),
    h = n(576645),
    _ = n(317951),
    p = n(63063),
    g = n(937615),
    f = n(82950),
    x = n(981631),
    E = n(388032),
    C = n(588973),
    v = n(99713);
let I = (e, t) => {
    (0, h.mx)(t),
        (0, s.ZDy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 447564));
                return (n) =>
                    (0, i.jsx)(t, {
                        channel: e,
                        ...n
                    });
            },
            { modalKey: S }
        );
};
function N(e) {
    let { transitionState: t, channel: n } = e;
    return (0, i.jsx)(s.Y0X, {
        size: s.CgR.DYNAMIC,
        transitionState: t,
        children: (0, i.jsx)(T, { channel: n })
    });
}
let S = 'HD_STREAMING_POTION_MODAL_KEY';
function T(e) {
    let { channel: t } = e,
        n = (0, h.T$)(t),
        [r, d] = (0, l.useState)(!1),
        { price: p, fetchingPrice: g, error: f } = (0, h.R2)(_.FX),
        { entitlement: E, fetchedEntitlement: C, error: v } = (0, h.t6)(_.FX),
        I = f || v,
        { analyticsLocations: N } = (0, c.ZP)([o.Z.HD_STREAMING_POTION_MODAL]),
        S = null != E && !E.consumed;
    (0, l.useEffect)(
        () => () => {
            I && (0, m.SN)(_.FX);
        },
        [E, t, r, I]
    );
    let T = (0, l.useCallback)(() => {
            (0, m.Zu)(t.id), (0, s.pTH)();
        }, [t.id]),
        A = (0, l.useCallback)(() => {
            (0, u.Z)({
                skuId: _.FX,
                analyticsLocations: N,
                onComplete: T,
                variantsReturnStyle: a.v.INDIVIDUAL_PRODUCTS
            });
        }, [N, T]),
        j = (0, l.useMemo)(() => () => (t.isHDStreamSplashed ? 4 : n ? ((null == E ? void 0 : E.type) === x.qc2.DEVELOPER_GIFT ? 1 : S ? 2 : 0) : 3), [t.isHDStreamSplashed, n, null == E ? void 0 : E.type, S]),
        y = (0, l.useMemo)(() => j(), [j]);
    return (0, i.jsx)(b, {
        channel: t,
        buttonState: y,
        price: p,
        onActionClick: () => {
            d(!0), (S ? T : A)();
        },
        loading: g || !C
    });
}
let b = (e) => {
        let { channel: t, buttonState: n, price: l, onActionClick: a, loading: r } = e;
        return r
            ? (0, i.jsx)(L, {})
            : null == l
              ? (0, i.jsx)(R, {})
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: C.modal,
                            children: [(0, i.jsx)(A, {}), (0, i.jsx)(j, { channel: t })]
                        }),
                        (0, i.jsx)(y, {
                            buttonState: n,
                            price: l,
                            onActionClick: a
                        })
                    ]
                });
    },
    A = () =>
        (0, i.jsx)('img', {
            className: C.image,
            src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
            alt: E.intl.string(E.t.DdigcX)
        }),
    j = (e) => {
        let { channel: t } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: C.body,
                    children: [
                        (0, i.jsxs)('div', {
                            className: C.heading,
                            children: [
                                (0, i.jsx)(s.X6q, {
                                    variant: 'heading-lg/bold',
                                    children: E.intl.string(E.t.K04rOD)
                                }),
                                (0, i.jsx)(d.Z, {})
                            ]
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: E.intl.string(E.t.lq40Pz)
                        }),
                        (0, i.jsx)(s.Text, {
                            color: 'text-link',
                            variant: 'text-sm/normal',
                            children: E.intl.format(E.t['1wV4qq'], { helpCenterLink: p.Z.getArticleURL(x.BhN.HD_STREAMING_POTION) })
                        }),
                        (0, i.jsx)(s.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/medium',
                            children: E.intl.string(E.t.qk07Mj)
                        })
                    ]
                }),
                (0, i.jsx)('div', { className: C.divider }),
                (0, i.jsxs)('div', {
                    className: C.applyingTo,
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: 'eyebrow',
                            children: E.intl.string(E.t.tZyXg4)
                        }),
                        (0, i.jsx)(f.Z, { channel: t })
                    ]
                })
            ]
        });
    },
    y = (e) => {
        let { buttonState: t, price: n, onActionClick: l } = e;
        return (0, i.jsxs)('div', {
            className: C.footer,
            children: [
                (0, i.jsx)(s.zxk, {
                    onClick: () => {
                        (0, s.Mr3)(S);
                    },
                    color: s.zxk.Colors.PRIMARY,
                    children: E.intl.string(E.t.Avt5KS)
                }),
                (0, i.jsx)(Z, {
                    buttonState: t,
                    price: n,
                    onActionClick: l
                })
            ]
        });
    },
    Z = (e) => {
        let { buttonState: t, price: n, onActionClick: l } = e,
            a = E.intl.formatToPlainString(E.t.S9LAdX, { price: (0, g.T4)(n.amount, n.currency) });
        if (3 === t || 4 === t) {
            let e = {
                3: E.intl.string(E.t.Qrh2BQ),
                4: E.intl.string(E.t.utRdl5)
            }[t];
            return (0, i.jsx)(s.ua7, {
                tooltipContentClassName: C.tooltip,
                text: e,
                children: (e) =>
                    (0, i.jsx)(s.zxk, {
                        ...e,
                        disabled: !0,
                        children: a
                    })
            });
        }
        let o = {
            0: a,
            1: E.intl.string(E.t.sl6Tcn),
            2: E.intl.string(E.t.XJ9INj)
        }[t];
        return (0, i.jsx)(s.zxk, {
            onClick: l,
            children: (0, i.jsxs)('div', {
                className: C.buttonCopy,
                children: [
                    (0, i.jsx)(s.hh5, {
                        color: r.Z.colors.WHITE,
                        size: 'sm'
                    }),
                    o
                ]
            })
        });
    },
    R = () =>
        (0, i.jsx)('div', {
            className: C.anomaly,
            children: (0, i.jsxs)('div', {
                className: C.error,
                children: [
                    (0, i.jsx)(s.Eep, {
                        src: v,
                        width: 178,
                        height: 190
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: E.intl.string(E.t.sIA0OD)
                    })
                ]
            })
        }),
    L = () =>
        (0, i.jsx)('div', {
            className: C.anomaly,
            children: (0, i.jsx)('div', {
                className: C.spinner,
                children: (0, i.jsx)(s.$jN, {})
            })
        });
