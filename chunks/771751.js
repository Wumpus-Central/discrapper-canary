n.d(t, { Z: () => T }), n(388685), n(642613);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(544891),
    o = n(704215),
    c = n(481060),
    d = n(937579),
    u = n(675478),
    m = n(431),
    x = n(572004),
    h = n(74538),
    p = n(246992),
    b = n(981631),
    f = n(474936),
    v = n(616257),
    g = n(173166);
let j = async () => {
        try {
            let { body: e } = await s.tn.get({
                url: b.ANM.USER_OFFER_IDS,
                rejectWithError: !0
            });
            return e;
        } catch (e) {
            return [];
        }
    },
    _ = async (e, t) => {
        try {
            await s.tn.post({
                url: b.ANM.CREATE_USER_OFFER(e, t),
                rejectWithError: !0
            });
        } catch (e) {
        } finally {
            await (0, d.T)();
        }
    },
    y = async (e, t) => {
        try {
            await s.tn.del({
                url: b.ANM.UPDATE_USER_OFFER(e, t),
                rejectWithError: !0
            });
        } catch (e) {
        } finally {
            await (0, d.T)();
        }
    },
    C = async () => {
        try {
            let { body: e } = await s.tn.get({
                url: b.ANM.USER_OFFERS,
                rejectWithError: !0
            });
            return e;
        } catch (e) {
            return {
                trial: [],
                discount: []
            };
        }
    },
    O = async () => {
        try {
            await s.tn.del({
                url: b.ANM.USER_OFFERS,
                rejectWithError: !0
            });
        } catch (e) {
        } finally {
            await m.Z.forceReset(), await (0, d.T)();
        }
    };
function N(e) {
    var t, n, l, o;
    let { offer: u, offerOptions: m, forceRefetch: p } = e,
        [v, j] = r.useState(!1),
        [_, C] = r.useState(!1),
        [O, N] = r.useState(!1),
        [E, T] = r.useState(!1);
    r.useEffect(() => {
        O && T(!0);
        let e = setTimeout(() => {
            T(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [O]);
    let { id: S, expires_at: P, redeemed_at: w, trial_id: k, subscription_trial: I, referrer: R } = u,
        Z =
            null !=
            (n =
                null ==
                (t = m.find((e) => {
                    let { value: t } = e;
                    return t === k;
                }))
                    ? void 0
                    : t.label)
                ? n
                : 'Unknown';
    null != R && (Z = ''.concat(Z, ' from @').concat(R.username));
    let L = null != P,
        A = null != P && new Date(P).getTime() < Date.now(),
        D = (null == I ? void 0 : I.sku_id) === f.Si.TIER_0,
        z = async () => {
            N(!0), L ? await M({ expiresAt: null }) : await (0, d.a)(u), p(), N(!1);
        },
        M = async (e) => {
            let { expiresAt: t } = e;
            N(!0);
            try {
                await s.tn.patch({
                    url: b.ANM.UPDATE_USER_OFFER(S, 'trial'),
                    body: { expires_at: t },
                    rejectWithError: !0
                });
            } finally {
                p(), N(!1);
            }
        };
    r.useEffect(() => {
        if (v) {
            let e = setTimeout(() => {
                j(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (_) {
            let e = setTimeout(() => {
                C(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [v, _]);
    let B = 'Active';
    return (
        L && (B = 'Acknowledged'),
        A && (B = 'Expired'),
        (0, a.jsxs)('div', {
            className: i()(g.card, D ? g.gradientWrapperTier0 : g.gradientWrapperTier2),
            children: [
                (0, a.jsxs)('div', {
                    className: i()(g.row, g.nameRow),
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            color: 'always-white',
                            children: Z
                        }),
                        (0, a.jsx)(c.P3F, {
                            onClick: async () => {
                                N(!0), await y(S, 'trial'), p(), N(!1);
                            },
                            children: (0, a.jsx)(c.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                className: i()(g.icon, g.trashIcon)
                            })
                        })
                    ]
                }),
                (0, a.jsxs)(c.P3F, {
                    className: i()(g.row, g.idRow),
                    onClick: () => {
                        (0, x.JG)(S, () => j(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Offer: ', S]
                        }),
                        v
                            ? (0, a.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(g.icon, g.noMargin)
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: g.icon
                              })
                    ]
                }),
                (0, a.jsxs)(c.P3F, {
                    className: i()(g.row, g.idRow),
                    onClick: () => {
                        (0, x.JG)(k, () => C(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Trial: ', k]
                        }),
                        _
                            ? (0, a.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(g.icon, g.noMargin)
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: g.icon
                              })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: g.row,
                    children: (0, a.jsxs)(c.Text, {
                        variant: 'eyebrow',
                        color: 'always-white',
                        children: [
                            'Trial Length:',
                            ' ',
                            (0, h.if)({
                                intervalType: null != (l = null == I ? void 0 : I.interval) ? l : f.rV.MONTH,
                                intervalCount: null != (o = null == I ? void 0 : I.interval_count) ? o : 1,
                                capitalize: !1
                            })
                        ]
                    })
                }),
                (0, a.jsxs)('div', {
                    className: g.row,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: 'Expires:'
                        }),
                        (0, a.jsx)('input', {
                            type: 'date',
                            value: null != P ? P.substring(0, 10) : '',
                            onChange: (e) => M({ expiresAt: e.target.value })
                        })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: g.badgeContainer,
                    children: [
                        (0, a.jsx)(c.P3F, {
                            onClick: z,
                            className: i()(g.badge, g.clickable, {
                                [g.acked]: L,
                                [g.expired]: A
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === B ? void 0 : 'always-white',
                                children: B
                            })
                        }),
                        null != w &&
                            (0, a.jsx)('div', {
                                className: i()(g.badge, g.__invalid_badgeBottom, g.redeemed),
                                children: (0, a.jsx)(c.Text, {
                                    variant: 'eyebrow',
                                    color: 'always-white',
                                    children: 'Redeemed'
                                })
                            })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: i()(g.loadingContainer, { [g.isLoading]: O || E }),
                    children: (0, a.jsx)(c.$jN, {})
                })
            ]
        })
    );
}
function E(e) {
    var t, n;
    let { offer: l, offerOptions: o, forceRefetch: u } = e,
        [m, h] = r.useState(!1),
        [p, f] = r.useState(!1),
        [v, j] = r.useState(!1),
        [_, C] = r.useState(!1);
    r.useEffect(() => {
        v && C(!0);
        let e = setTimeout(() => {
            C(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [v]);
    let { id: O, expires_at: N, applied_at: E, discount_id: T, discount: S } = l,
        P =
            null !=
            (n =
                null ==
                (t = o.find((e) => {
                    let { value: t } = e;
                    return t === T;
                }))
                    ? void 0
                    : t.label)
                ? n
                : 'Unknown',
        w = null != N,
        k = null != N && new Date(N).getTime() < Date.now(),
        I = async () => {
            j(!0), w ? await R({ expiresAt: null }) : await (0, d.a)(void 0, l), u(), j(!1);
        },
        R = async (e) => {
            let { expiresAt: t } = e;
            j(!0);
            try {
                await s.tn.patch({
                    url: b.ANM.UPDATE_USER_OFFER(O, 'discount'),
                    body: { expires_at: t },
                    rejectWithError: !0
                });
            } finally {
                u(), j(!1);
            }
        };
    r.useEffect(() => {
        if (m) {
            let e = setTimeout(() => {
                h(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (p) {
            let e = setTimeout(() => {
                f(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [m, p]);
    let Z = 'Active';
    return (
        k && (Z = 'Expired'),
        w && (Z = 'Acknowledged'),
        (0, a.jsxs)('div', {
            className: i()(g.card, g.discount),
            children: [
                (0, a.jsxs)('div', {
                    className: i()(g.row, g.nameRow),
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            color: 'text-normal',
                            children: P
                        }),
                        (0, a.jsx)(c.P3F, {
                            onClick: async () => {
                                j(!0), await y(O, 'discount'), u(), j(!1);
                            },
                            children: (0, a.jsx)(c.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                className: i()(g.icon, g.trashIcon)
                            })
                        })
                    ]
                }),
                (0, a.jsxs)(c.P3F, {
                    className: i()(g.row, g.idRow),
                    onClick: () => {
                        (0, x.JG)(O, () => h(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Offer: ', O]
                        }),
                        m
                            ? (0, a.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(g.icon, g.noMargin)
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: g.icon
                              })
                    ]
                }),
                (0, a.jsxs)(c.P3F, {
                    className: i()(g.row, g.idRow),
                    onClick: () => {
                        (0, x.JG)(T, () => f(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Discount: ', T]
                        }),
                        p
                            ? (0, a.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(g.icon, g.noMargin)
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: g.icon
                              })
                    ]
                }),
                (null == S ? void 0 : S.amount) != null &&
                    (0, a.jsx)('div', {
                        children: (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: [S.amount, '% off']
                        })
                    }),
                (0, a.jsxs)('div', {
                    className: g.row,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: 'Expires:'
                        }),
                        (0, a.jsx)('input', {
                            type: 'date',
                            value: null != N ? N.substring(0, 10) : '',
                            onChange: (e) => R({ expiresAt: e.target.value })
                        })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: g.badgeContainer,
                    children: [
                        (0, a.jsx)(c.P3F, {
                            onClick: I,
                            className: i()(g.badge, g.clickable, {
                                [g.acked]: w,
                                [g.expired]: k
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === Z ? void 0 : 'always-white',
                                children: Z
                            })
                        }),
                        null != E &&
                            (0, a.jsx)('div', {
                                className: i()(g.badge, g.__invalid_badgeBottom, g.redeemed),
                                children: (0, a.jsx)(c.Text, {
                                    variant: 'eyebrow',
                                    color: 'always-white',
                                    children: 'Applied'
                                })
                            })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: i()(g.loadingContainer, { [g.isLoading]: v || _ }),
                    children: (0, a.jsx)(c.$jN, {})
                })
            ]
        })
    );
}
function T() {
    let [e, t] = r.useState([]),
        [n, l] = r.useState([]),
        [i, s] = r.useState(),
        [x, h] = r.useState(),
        [b, f] = r.useState([]),
        [y, T] = r.useState([]),
        [S, P] = r.useState(!0);
    r.useEffect(() => {
        (0 === e.length || 0 === n.length || S) &&
            j().then((e) => {
                let n = Object.keys(e.trial).map((t) => ({
                        label: t,
                        value: e.trial[t]
                    })),
                    a = Object.keys(e.discount).map((t) => ({
                        label: t,
                        value: e.discount[t]
                    }));
                t(n), l(a), null == i && s(n[0].value), null == x && h(a[0].value);
            });
    }, [e, n, i, x, S]),
        r.useEffect(() => {
            S &&
                (P(!1),
                m.Z.forceReset(),
                (0, d.T)(),
                C().then((e) => {
                    f(e.trial.sort((e, t) => e.id.localeCompare(t.id))), T(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [S]);
    let w = async () => {
            null != i && (await _(i, 'trial'), P(!0));
        },
        k = async () => {
            null != x && (await _(x, 'discount'), P(!0));
        },
        I = async () => {
            await O(), P(!0);
        };
    return (0, a.jsx)(c.zJl, {
        className: v.panel,
        children: (0, a.jsxs)('div', {
            className: g.panelInner,
            children: [
                (0, a.jsxs)('section', {
                    className: g.section,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Utils'
                        }),
                        (0, a.jsxs)('div', {
                            className: g.buttons,
                            children: [
                                (0, a.jsx)(c.zxk, {
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: I,
                                    children: 'Clear all User Offers'
                                }),
                                (0, a.jsx)(c.zxk, {
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: () => (0, u.w9)(o.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    children: 'Clear Mobile Trials DismissibleContent'
                                }),
                                (0, a.jsx)(c.zxk, {
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: () => P(!0),
                                    children: 'Refresh DevTools'
                                })
                            ]
                        })
                    ]
                }),
                (0, a.jsxs)('section', {
                    className: g.section,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Create a Trial Offer'
                        }),
                        (0, a.jsxs)('div', {
                            className: g.inputRow,
                            children: [
                                (0, a.jsx)(c.PhF, {
                                    className: g.input,
                                    options: e,
                                    isSelected: (e) => i === e,
                                    placeholder: 'Trial Type',
                                    serialize: (e) => String(e),
                                    select: (e) => s(e),
                                    popoutLayerContext: p.O$
                                }),
                                (0, a.jsx)(c.zxk, {
                                    onClick: w,
                                    children: 'Create'
                                })
                            ]
                        })
                    ]
                }),
                (0, a.jsxs)('section', {
                    className: g.section,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Create a Discount Offer'
                        }),
                        (0, a.jsxs)('div', {
                            className: g.inputRow,
                            children: [
                                (0, a.jsx)(c.PhF, {
                                    className: g.input,
                                    options: n,
                                    isSelected: (e) => x === e,
                                    placeholder: 'Discount Type',
                                    serialize: (e) => String(e),
                                    select: (e) => h(e),
                                    popoutLayerContext: p.O$
                                }),
                                (0, a.jsx)(c.zxk, {
                                    onClick: k,
                                    children: 'Create'
                                })
                            ]
                        })
                    ]
                }),
                b.length > 0 &&
                    (0, a.jsxs)('section', {
                        className: g.section,
                        children: [
                            (0, a.jsx)(c.X6q, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Trial Offers'
                            }),
                            b.map((t) =>
                                (0, a.jsx)(
                                    N,
                                    {
                                        offer: t,
                                        offerOptions: e,
                                        forceRefetch: () => P(!0)
                                    },
                                    t.id
                                )
                            )
                        ]
                    }),
                y.length > 0 &&
                    (0, a.jsxs)('section', {
                        className: g.section,
                        children: [
                            (0, a.jsx)(c.X6q, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Discount Offers'
                            }),
                            y.map((e) =>
                                (0, a.jsx)(
                                    E,
                                    {
                                        offer: e,
                                        offerOptions: n,
                                        forceRefetch: () => P(!0)
                                    },
                                    e.id
                                )
                            )
                        ]
                    })
            ]
        })
    });
}
