n.d(t, { Z: () => w }), n(388685), n(642613);
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
    p = n(604776),
    b = n(246992),
    f = n(232867),
    v = n(981631),
    j = n(474936),
    g = n(616257),
    _ = n(173166);
let y = async () => {
        try {
            let { body: e } = await s.tn.get({
                url: v.ANM.USER_OFFER_IDS,
                rejectWithError: !0
            });
            return e;
        } catch (e) {
            return [];
        }
    },
    O = async (e, t) => {
        try {
            await s.tn.post({
                url: v.ANM.CREATE_USER_OFFER(e, t),
                rejectWithError: !0
            });
        } catch (e) {
        } finally {
            await (0, d.T)();
        }
    },
    C = async (e, t) => {
        try {
            await s.tn.del({
                url: v.ANM.UPDATE_USER_OFFER(e, t),
                rejectWithError: !0
            });
        } catch (e) {
        } finally {
            await (0, d.T)();
        }
    },
    E = async () => {
        try {
            let { body: e } = await s.tn.get({
                url: v.ANM.USER_OFFERS,
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
    N = async () => {
        try {
            await s.tn.del({
                url: v.ANM.USER_OFFERS,
                rejectWithError: !0
            });
        } catch (e) {
        } finally {
            await m.Z.forceReset(), await (0, d.T)();
        }
    },
    T = async (e) => {
        await s.tn.post({
            url: v.ANM.CREATE_REVERSE_TRIAL,
            body: { ends_at: e },
            rejectWithError: !0
        });
    };
function S(e) {
    var t, n, l, o;
    let { offer: u, offerOptions: m, forceRefetch: p } = e,
        [b, f] = r.useState(!1),
        [g, y] = r.useState(!1),
        [O, E] = r.useState(!1),
        [N, T] = r.useState(!1);
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
        D = (null == I ? void 0 : I.sku_id) === j.Si.TIER_0,
        M = async () => {
            E(!0), L ? await z({ expiresAt: null }) : await (0, d.a)(u), p(), E(!1);
        },
        z = async (e) => {
            let { expiresAt: t } = e;
            E(!0);
            try {
                await s.tn.patch({
                    url: v.ANM.UPDATE_USER_OFFER(S, 'trial'),
                    body: { expires_at: t },
                    rejectWithError: !0
                });
            } finally {
                p(), E(!1);
            }
        };
    r.useEffect(() => {
        if (b) {
            let e = setTimeout(() => {
                f(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (g) {
            let e = setTimeout(() => {
                y(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [b, g]);
    let U = 'Active';
    return (
        L && (U = 'Acknowledged'),
        A && (U = 'Expired'),
        (0, a.jsxs)('div', {
            className: i()(_.card, D ? _.gradientWrapperTier0 : _.gradientWrapperTier2),
            children: [
                (0, a.jsxs)('div', {
                    className: i()(_.row, _.nameRow),
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            color: 'always-white',
                            children: Z
                        }),
                        (0, a.jsx)(c.P3F, {
                            onClick: async () => {
                                E(!0), await C(S, 'trial'), p(), E(!1);
                            },
                            children: (0, a.jsx)(c.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                className: i()(_.icon, _.trashIcon)
                            })
                        })
                    ]
                }),
                (0, a.jsxs)(c.P3F, {
                    className: i()(_.row, _.idRow),
                    onClick: () => {
                        (0, x.JG)(S, () => f(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Offer: ', S]
                        }),
                        b
                            ? (0, a.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(_.icon, _.noMargin)
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: _.icon
                              })
                    ]
                }),
                (0, a.jsxs)(c.P3F, {
                    className: i()(_.row, _.idRow),
                    onClick: () => {
                        (0, x.JG)(k, () => y(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Trial: ', k]
                        }),
                        g
                            ? (0, a.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(_.icon, _.noMargin)
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: _.icon
                              })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: _.row,
                    children: (0, a.jsxs)(c.Text, {
                        variant: 'eyebrow',
                        color: 'always-white',
                        children: [
                            'Trial Length:',
                            ' ',
                            (0, h.if)({
                                intervalType: null != (l = null == I ? void 0 : I.interval) ? l : j.rV.MONTH,
                                intervalCount: null != (o = null == I ? void 0 : I.interval_count) ? o : 1,
                                capitalize: !1
                            })
                        ]
                    })
                }),
                (0, a.jsxs)('div', {
                    className: _.row,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: 'Expires:'
                        }),
                        (0, a.jsx)('input', {
                            type: 'date',
                            value: null != P ? P.substring(0, 10) : '',
                            onChange: (e) => z({ expiresAt: e.target.value })
                        })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: _.badgeContainer,
                    children: [
                        (0, a.jsx)(c.P3F, {
                            onClick: M,
                            className: i()(_.badge, _.clickable, {
                                [_.acked]: L,
                                [_.expired]: A
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === U ? void 0 : 'always-white',
                                children: U
                            })
                        }),
                        null != w &&
                            (0, a.jsx)('div', {
                                className: i()(_.badge, _.__invalid_badgeBottom, _.redeemed),
                                children: (0, a.jsx)(c.Text, {
                                    variant: 'eyebrow',
                                    color: 'always-white',
                                    children: 'Redeemed'
                                })
                            })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: i()(_.loadingContainer, { [_.isLoading]: O || N }),
                    children: (0, a.jsx)(c.$jN, {})
                })
            ]
        })
    );
}
function P(e) {
    var t, n;
    let { offer: l, offerOptions: o, forceRefetch: u } = e,
        [m, h] = r.useState(!1),
        [p, b] = r.useState(!1),
        [f, j] = r.useState(!1),
        [g, y] = r.useState(!1);
    r.useEffect(() => {
        f && y(!0);
        let e = setTimeout(() => {
            y(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [f]);
    let { id: O, expires_at: E, applied_at: N, discount_id: T, discount: S } = l,
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
        w = null != E,
        k = null != E && new Date(E).getTime() < Date.now(),
        I = async () => {
            j(!0), w ? await R({ expiresAt: null }) : await (0, d.a)(void 0, l), u(), j(!1);
        },
        R = async (e) => {
            let { expiresAt: t } = e;
            j(!0);
            try {
                await s.tn.patch({
                    url: v.ANM.UPDATE_USER_OFFER(O, 'discount'),
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
                b(!1);
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
            className: i()(_.card, _.discount),
            children: [
                (0, a.jsxs)('div', {
                    className: i()(_.row, _.nameRow),
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            color: 'text-normal',
                            children: P
                        }),
                        (0, a.jsx)(c.P3F, {
                            onClick: async () => {
                                j(!0), await C(O, 'discount'), u(), j(!1);
                            },
                            children: (0, a.jsx)(c.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                className: i()(_.icon, _.trashIcon)
                            })
                        })
                    ]
                }),
                (0, a.jsxs)(c.P3F, {
                    className: i()(_.row, _.idRow),
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
                                  className: i()(_.icon, _.noMargin)
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: _.icon
                              })
                    ]
                }),
                (0, a.jsxs)(c.P3F, {
                    className: i()(_.row, _.idRow),
                    onClick: () => {
                        (0, x.JG)(T, () => b(!0));
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
                                  className: i()(_.icon, _.noMargin)
                              })
                            : (0, a.jsx)(c.TIy, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: _.icon
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
                    className: _.row,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: 'Expires:'
                        }),
                        (0, a.jsx)('input', {
                            type: 'date',
                            value: null != E ? E.substring(0, 10) : '',
                            onChange: (e) => R({ expiresAt: e.target.value })
                        })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: _.badgeContainer,
                    children: [
                        (0, a.jsx)(c.P3F, {
                            onClick: I,
                            className: i()(_.badge, _.clickable, {
                                [_.acked]: w,
                                [_.expired]: k
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === Z ? void 0 : 'always-white',
                                children: Z
                            })
                        }),
                        null != N &&
                            (0, a.jsx)('div', {
                                className: i()(_.badge, _.__invalid_badgeBottom, _.redeemed),
                                children: (0, a.jsx)(c.Text, {
                                    variant: 'eyebrow',
                                    color: 'always-white',
                                    children: 'Applied'
                                })
                            })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: i()(_.loadingContainer, { [_.isLoading]: f || g }),
                    children: (0, a.jsx)(c.$jN, {})
                })
            ]
        })
    );
}
function w() {
    let [e, t] = r.useState([]),
        [n, l] = r.useState([]),
        [i, s] = r.useState(),
        [x, h] = r.useState(),
        [j, C] = r.useState([]),
        [w, k] = r.useState([]),
        [I, R] = r.useState(!0),
        [Z, L] = r.useState(10080),
        [A, D] = r.useState([]),
        { entitlements: M, deleteFractionalPremium: z, refreshEntitlementList: U } = (0, f.m)();
    r.useEffect(() => {
        U();
    }, [U]);
    let B = (e) => e.filter((e) => e.sourceType === v.kNB.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date());
    r.useEffect(() => {
        D(B(M));
    }, [M]),
        r.useEffect(() => {
            (0 === e.length || 0 === n.length || I) &&
                y().then((e) => {
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
        }, [e, n, i, x, I]),
        r.useEffect(() => {
            I &&
                (R(!1),
                m.Z.forceReset(),
                (0, d.T)(),
                E().then((e) => {
                    C(e.trial.sort((e, t) => e.id.localeCompare(t.id))), k(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [I]);
    let F = async () => {
            null != i && (await O(i, 'trial'), R(!0));
        },
        G = async () => {
            null != x && (await O(x, 'discount'), R(!0));
        },
        V = async () => {
            await N(), R(!0);
        },
        H = async () => {
            let e = new Date(Date.now() + 60 * Z * 1000).toISOString();
            await T(e), U();
        };
    return (0, a.jsx)(c.zJl, {
        className: g.panel,
        children: (0, a.jsxs)('div', {
            className: _.panelInner,
            children: [
                (0, a.jsxs)('section', {
                    className: _.section,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Utils'
                        }),
                        (0, a.jsxs)('div', {
                            className: _.buttons,
                            children: [
                                (0, a.jsx)(c.zxk, {
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: V,
                                    children: 'Clear all User Offers'
                                }),
                                (0, a.jsx)(c.zxk, {
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: () => (0, u.w9)(o.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    children: 'Clear Mobile Trials DismissibleContent'
                                }),
                                (0, a.jsx)(c.zxk, {
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: () => R(!0),
                                    children: 'Refresh DevTools'
                                })
                            ]
                        })
                    ]
                }),
                (0, a.jsxs)('section', {
                    className: _.section,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Create a Trial Offer'
                        }),
                        (0, a.jsxs)('div', {
                            className: _.inputRow,
                            children: [
                                (0, a.jsx)(c.PhF, {
                                    className: _.input,
                                    options: e,
                                    isSelected: (e) => i === e,
                                    placeholder: 'Trial Type',
                                    serialize: (e) => String(e),
                                    select: (e) => s(e),
                                    popoutLayerContext: b.O$
                                }),
                                (0, a.jsx)(c.zxk, {
                                    onClick: F,
                                    children: 'Create'
                                })
                            ]
                        })
                    ]
                }),
                (0, a.jsxs)('section', {
                    className: _.section,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Create a Discount Offer'
                        }),
                        (0, a.jsxs)('div', {
                            className: _.inputRow,
                            children: [
                                (0, a.jsx)(c.PhF, {
                                    className: _.input,
                                    options: n,
                                    isSelected: (e) => x === e,
                                    placeholder: 'Discount Type',
                                    serialize: (e) => String(e),
                                    select: (e) => h(e),
                                    popoutLayerContext: b.O$
                                }),
                                (0, a.jsx)(c.zxk, {
                                    onClick: G,
                                    children: 'Create'
                                })
                            ]
                        })
                    ]
                }),
                j.length > 0 &&
                    (0, a.jsxs)('section', {
                        className: _.section,
                        children: [
                            (0, a.jsx)(c.X6q, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Trial Offers'
                            }),
                            j.map((t) =>
                                (0, a.jsx)(
                                    S,
                                    {
                                        offer: t,
                                        offerOptions: e,
                                        forceRefetch: () => R(!0)
                                    },
                                    t.id
                                )
                            )
                        ]
                    }),
                w.length > 0 &&
                    (0, a.jsxs)('section', {
                        className: _.section,
                        children: [
                            (0, a.jsx)(c.X6q, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Discount Offers'
                            }),
                            w.map((e) =>
                                (0, a.jsx)(
                                    P,
                                    {
                                        offer: e,
                                        offerOptions: n,
                                        forceRefetch: () => R(!0)
                                    },
                                    e.id
                                )
                            )
                        ]
                    }),
                (0, a.jsxs)('section', {
                    className: _.section,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Create a Reverse Trial Entitlement'
                        }),
                        (0, a.jsxs)('div', {
                            className: _.inputRow,
                            children: [
                                (0, a.jsx)(c.PhF, {
                                    className: _.input,
                                    options: [
                                        {
                                            label: '5 minutes',
                                            value: 5
                                        },
                                        {
                                            label: '1 hour',
                                            value: 60
                                        },
                                        {
                                            label: '1 day',
                                            value: 1440
                                        },
                                        {
                                            label: '1 week',
                                            value: 10080
                                        }
                                    ],
                                    isSelected: (e) => Z === e,
                                    placeholder: 'Reverse Trial Length',
                                    serialize: (e) => String(e),
                                    select: (e) => L(e),
                                    popoutLayerContext: b.O$
                                }),
                                (0, a.jsx)(c.zxk, {
                                    onClick: H,
                                    children: 'Create'
                                })
                            ]
                        })
                    ]
                }),
                A.length > 0 &&
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsx)(c.Text, {
                                style: { marginTop: '15px' },
                                variant: 'text-md/bold',
                                children: 'Active reverse trial'
                            }),
                            (0, a.jsx)('div', {
                                children: A.map((e) =>
                                    (0, a.jsx)(
                                        p.D,
                                        {
                                            entitlement: e,
                                            active: !0,
                                            onDelete: () => z(e.id)
                                        },
                                        e.id
                                    )
                                )
                            })
                        ]
                    })
            ]
        })
    });
}
