n.d(t, { Z: () => T }), n(388685), n(642613);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(544891),
    s = n(704215),
    c = n(481060),
    d = n(937579),
    u = n(675478),
    m = n(431),
    x = n(572004),
    h = n(74538),
    p = n(246992),
    b = n(981631),
    f = n(474936),
    _ = n(616257),
    g = n(173166);
let v = async () => {
        try {
            let { body: e } = await o.tn.get({
                url: b.ANM.USER_OFFER_IDS,
                rejectWithError: !0
            });
            return e;
        } catch (e) {
            return [];
        }
    },
    j = async (e, t) => {
        try {
            await o.tn.post({
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
            await o.tn.del({
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
            let { body: e } = await o.tn.get({
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
            await o.tn.del({
                url: b.ANM.USER_OFFERS,
                rejectWithError: !0
            });
        } catch (e) {
        } finally {
            await m.Z.forceReset(), await (0, d.T)();
        }
    };
function N(e) {
    var t, n, l, s;
    let { offer: u, offerOptions: m, forceRefetch: p } = e,
        [_, v] = a.useState(!1),
        [j, C] = a.useState(!1),
        [O, N] = a.useState(!1),
        [S, T] = a.useState(!1);
    a.useEffect(() => {
        O && T(!0);
        let e = setTimeout(() => {
            T(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [O]);
    let { id: E, expires_at: k, redeemed_at: P, trial_id: w, subscription_trial: I, referrer: R } = u,
        Z =
            null !=
            (n =
                null ==
                (t = m.find((e) => {
                    let { value: t } = e;
                    return t === w;
                }))
                    ? void 0
                    : t.label)
                ? n
                : 'Unknown';
    null != R && (Z = ''.concat(Z, ' from @').concat(R.username));
    let L = null != k,
        A = null != k && new Date(k).getTime() < Date.now(),
        D = (null == I ? void 0 : I.sku_id) === f.Si.TIER_0,
        z = async () => {
            N(!0), L ? await B({ expiresAt: null }) : await (0, d.a)(u), p(), N(!1);
        },
        B = async (e) => {
            let { expiresAt: t } = e;
            N(!0);
            try {
                await o.tn.patch({
                    url: b.ANM.UPDATE_USER_OFFER(E, 'trial'),
                    body: { expires_at: t },
                    rejectWithError: !0
                });
            } finally {
                p(), N(!1);
            }
        };
    a.useEffect(() => {
        if (_) {
            let e = setTimeout(() => {
                v(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (j) {
            let e = setTimeout(() => {
                C(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [_, j]);
    let M = 'Active';
    return (
        L && (M = 'Acknowledged'),
        A && (M = 'Expired'),
        (0, r.jsxs)('div', {
            className: i()(g.card, D ? g.gradientWrapperTier0 : g.gradientWrapperTier2),
            children: [
                (0, r.jsxs)('div', {
                    className: i()(g.row, g.nameRow),
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            color: 'always-white',
                            children: Z
                        }),
                        (0, r.jsx)(c.P3F, {
                            onClick: async () => {
                                N(!0), await y(E, 'trial'), p(), N(!1);
                            },
                            children: (0, r.jsx)(c.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                className: i()(g.icon, g.trashIcon)
                            })
                        })
                    ]
                }),
                (0, r.jsxs)(c.P3F, {
                    className: i()(g.row, g.idRow),
                    onClick: () => {
                        (0, x.JG)(E), v(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Offer: ', E]
                        }),
                        _
                            ? (0, r.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(g.icon, g.noMargin)
                              })
                            : (0, r.jsx)(c.TIy, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: g.icon
                              })
                    ]
                }),
                (0, r.jsxs)(c.P3F, {
                    className: i()(g.row, g.idRow),
                    onClick: () => {
                        (0, x.JG)(w), C(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Trial: ', w]
                        }),
                        j
                            ? (0, r.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(g.icon, g.noMargin)
                              })
                            : (0, r.jsx)(c.TIy, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: g.icon
                              })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: g.row,
                    children: (0, r.jsxs)(c.Text, {
                        variant: 'eyebrow',
                        color: 'always-white',
                        children: [
                            'Trial Length:',
                            ' ',
                            (0, h.if)({
                                intervalType: null != (l = null == I ? void 0 : I.interval) ? l : f.rV.MONTH,
                                intervalCount: null != (s = null == I ? void 0 : I.interval_count) ? s : 1,
                                capitalize: !1
                            })
                        ]
                    })
                }),
                (0, r.jsxs)('div', {
                    className: g.row,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: 'Expires:'
                        }),
                        (0, r.jsx)('input', {
                            type: 'date',
                            value: null != k ? k.substring(0, 10) : '',
                            onChange: (e) => B({ expiresAt: e.target.value })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: g.badgeContainer,
                    children: [
                        (0, r.jsx)(c.P3F, {
                            onClick: z,
                            className: i()(g.badge, g.clickable, {
                                [g.acked]: L,
                                [g.expired]: A
                            }),
                            children: (0, r.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === M ? void 0 : 'always-white',
                                children: M
                            })
                        }),
                        null != P &&
                            (0, r.jsx)('div', {
                                className: i()(g.badge, g.__invalid_badgeBottom, g.redeemed),
                                children: (0, r.jsx)(c.Text, {
                                    variant: 'eyebrow',
                                    color: 'always-white',
                                    children: 'Redeemed'
                                })
                            })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: i()(g.loadingContainer, { [g.isLoading]: O || S }),
                    children: (0, r.jsx)(c.$jN, {})
                })
            ]
        })
    );
}
function S(e) {
    var t, n;
    let { offer: l, offerOptions: s, forceRefetch: u } = e,
        [m, h] = a.useState(!1),
        [p, f] = a.useState(!1),
        [_, v] = a.useState(!1),
        [j, C] = a.useState(!1);
    a.useEffect(() => {
        _ && C(!0);
        let e = setTimeout(() => {
            C(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [_]);
    let { id: O, expires_at: N, applied_at: S, discount_id: T, discount: E } = l,
        k =
            null !=
            (n =
                null ==
                (t = s.find((e) => {
                    let { value: t } = e;
                    return t === T;
                }))
                    ? void 0
                    : t.label)
                ? n
                : 'Unknown',
        P = null != N,
        w = null != N && new Date(N).getTime() < Date.now(),
        I = async () => {
            v(!0), P ? await R({ expiresAt: null }) : await (0, d.a)(void 0, l), u(), v(!1);
        },
        R = async (e) => {
            let { expiresAt: t } = e;
            v(!0);
            try {
                await o.tn.patch({
                    url: b.ANM.UPDATE_USER_OFFER(O, 'discount'),
                    body: { expires_at: t },
                    rejectWithError: !0
                });
            } finally {
                u(), v(!1);
            }
        };
    a.useEffect(() => {
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
        w && (Z = 'Expired'),
        P && (Z = 'Acknowledged'),
        (0, r.jsxs)('div', {
            className: i()(g.card, g.discount),
            children: [
                (0, r.jsxs)('div', {
                    className: i()(g.row, g.nameRow),
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            color: 'text-normal',
                            children: k
                        }),
                        (0, r.jsx)(c.P3F, {
                            onClick: async () => {
                                v(!0), await y(O, 'discount'), u(), v(!1);
                            },
                            children: (0, r.jsx)(c.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                className: i()(g.icon, g.trashIcon)
                            })
                        })
                    ]
                }),
                (0, r.jsxs)(c.P3F, {
                    className: i()(g.row, g.idRow),
                    onClick: () => {
                        (0, x.JG)(O), h(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Offer: ', O]
                        }),
                        m
                            ? (0, r.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(g.icon, g.noMargin)
                              })
                            : (0, r.jsx)(c.TIy, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: g.icon
                              })
                    ]
                }),
                (0, r.jsxs)(c.P3F, {
                    className: i()(g.row, g.idRow),
                    onClick: () => {
                        (0, x.JG)(T), f(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Discount: ', T]
                        }),
                        p
                            ? (0, r.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(g.icon, g.noMargin)
                              })
                            : (0, r.jsx)(c.TIy, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: g.icon
                              })
                    ]
                }),
                (null == E ? void 0 : E.amount) != null &&
                    (0, r.jsx)('div', {
                        children: (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: [E.amount, '% off']
                        })
                    }),
                (0, r.jsxs)('div', {
                    className: g.row,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: 'Expires:'
                        }),
                        (0, r.jsx)('input', {
                            type: 'date',
                            value: null != N ? N.substring(0, 10) : '',
                            onChange: (e) => R({ expiresAt: e.target.value })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: g.badgeContainer,
                    children: [
                        (0, r.jsx)(c.P3F, {
                            onClick: I,
                            className: i()(g.badge, g.clickable, {
                                [g.acked]: P,
                                [g.expired]: w
                            }),
                            children: (0, r.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === Z ? void 0 : 'always-white',
                                children: Z
                            })
                        }),
                        null != S &&
                            (0, r.jsx)('div', {
                                className: i()(g.badge, g.__invalid_badgeBottom, g.redeemed),
                                children: (0, r.jsx)(c.Text, {
                                    variant: 'eyebrow',
                                    color: 'always-white',
                                    children: 'Applied'
                                })
                            })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: i()(g.loadingContainer, { [g.isLoading]: _ || j }),
                    children: (0, r.jsx)(c.$jN, {})
                })
            ]
        })
    );
}
function T() {
    let [e, t] = a.useState([]),
        [n, l] = a.useState([]),
        [i, o] = a.useState(),
        [x, h] = a.useState(),
        [b, f] = a.useState([]),
        [y, T] = a.useState([]),
        [E, k] = a.useState(!0);
    a.useEffect(() => {
        (0 === e.length || 0 === n.length || E) &&
            v().then((e) => {
                let n = Object.keys(e.trial).map((t) => ({
                        label: t,
                        value: e.trial[t]
                    })),
                    r = Object.keys(e.discount).map((t) => ({
                        label: t,
                        value: e.discount[t]
                    }));
                t(n), l(r), null == i && o(n[0].value), null == x && h(r[0].value);
            });
    }, [e, n, i, x, E]),
        a.useEffect(() => {
            E &&
                (k(!1),
                m.Z.forceReset(),
                (0, d.T)(),
                C().then((e) => {
                    f(e.trial.sort((e, t) => e.id.localeCompare(t.id))), T(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [E]);
    let P = async () => {
            null != i && (await j(i, 'trial'), k(!0));
        },
        w = async () => {
            null != x && (await j(x, 'discount'), k(!0));
        },
        I = async () => {
            await O(), k(!0);
        };
    return (0, r.jsx)(c.zJl, {
        className: _.panel,
        children: (0, r.jsxs)('div', {
            className: g.panelInner,
            children: [
                (0, r.jsxs)('section', {
                    className: g.section,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Utils'
                        }),
                        (0, r.jsxs)('div', {
                            className: g.buttons,
                            children: [
                                (0, r.jsx)(c.zxk, {
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: I,
                                    children: 'Clear all User Offers'
                                }),
                                (0, r.jsx)(c.zxk, {
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: () => (0, u.w9)(s.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    children: 'Clear Mobile Trials DismissibleContent'
                                }),
                                (0, r.jsx)(c.zxk, {
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: () => k(!0),
                                    children: 'Refresh DevTools'
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)('section', {
                    className: g.section,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Create a Trial Offer'
                        }),
                        (0, r.jsxs)('div', {
                            className: g.inputRow,
                            children: [
                                (0, r.jsx)(c.PhF, {
                                    className: g.input,
                                    options: e,
                                    isSelected: (e) => i === e,
                                    placeholder: 'Trial Type',
                                    serialize: (e) => String(e),
                                    select: (e) => o(e),
                                    popoutLayerContext: p.O$
                                }),
                                (0, r.jsx)(c.zxk, {
                                    onClick: P,
                                    children: 'Create'
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)('section', {
                    className: g.section,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Create a Discount Offer'
                        }),
                        (0, r.jsxs)('div', {
                            className: g.inputRow,
                            children: [
                                (0, r.jsx)(c.PhF, {
                                    className: g.input,
                                    options: n,
                                    isSelected: (e) => x === e,
                                    placeholder: 'Discount Type',
                                    serialize: (e) => String(e),
                                    select: (e) => h(e),
                                    popoutLayerContext: p.O$
                                }),
                                (0, r.jsx)(c.zxk, {
                                    onClick: w,
                                    children: 'Create'
                                })
                            ]
                        })
                    ]
                }),
                b.length > 0 &&
                    (0, r.jsxs)('section', {
                        className: g.section,
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Trial Offers'
                            }),
                            b.map((t) =>
                                (0, r.jsx)(
                                    N,
                                    {
                                        offer: t,
                                        offerOptions: e,
                                        forceRefetch: () => k(!0)
                                    },
                                    t.id
                                )
                            )
                        ]
                    }),
                y.length > 0 &&
                    (0, r.jsxs)('section', {
                        className: g.section,
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Discount Offers'
                            }),
                            y.map((e) =>
                                (0, r.jsx)(
                                    S,
                                    {
                                        offer: e,
                                        offerOptions: n,
                                        forceRefetch: () => k(!0)
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
