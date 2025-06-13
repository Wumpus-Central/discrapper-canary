n.d(t, { Z: () => I }), n(388685), n(642613);
var a = n(255367),
    r = n(73800),
    l = n(120356),
    i = n.n(l),
    s = n(544891),
    o = n(704215),
    c = n(481060),
    d = n(937579),
    u = n(675478),
    m = n(431),
    x = n(572004),
    p = n(74538),
    h = n(604776),
    b = n(246992),
    f = n(232867),
    v = n(981631),
    g = n(474936),
    j = n(616257),
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
    C = async (e, t) => {
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
    N = async (e, t) => {
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
    O = async () => {
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
    E = async () => {
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
    let { offer: u, offerOptions: m, forceRefetch: h } = e,
        [b, f] = r.useState(!1),
        [j, y] = r.useState(!1),
        [C, O] = r.useState(!1),
        [E, T] = r.useState(!1);
    r.useEffect(() => {
        C && T(!0);
        let e = setTimeout(() => {
            T(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [C]);
    let { id: S, expires_at: P, redeemed_at: I, trial_id: w, subscription_trial: k, referrer: R } = u,
        A =
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
    null != R && (A = ''.concat(A, ' from @').concat(R.username));
    let Z = null != P,
        L = null != P && new Date(P).getTime() < Date.now(),
        D = (null == k ? void 0 : k.sku_id) === g.Si.TIER_0,
        M = async () => {
            O(!0), Z ? await z({ expiresAt: null }) : await (0, d.a)(u), h(), O(!1);
        },
        z = async (e) => {
            let { expiresAt: t } = e;
            O(!0);
            try {
                await s.tn.patch({
                    url: v.ANM.UPDATE_USER_OFFER(S, 'trial'),
                    body: { expires_at: t },
                    rejectWithError: !0
                });
            } finally {
                h(), O(!1);
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
        if (j) {
            let e = setTimeout(() => {
                y(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [b, j]);
    let U = 'Active';
    return (
        Z && (U = 'Acked'),
        L && (U = 'Expired'),
        (0, a.jsxs)('div', {
            className: i()(_.card, D ? _.gradientWrapperTier0 : _.gradientWrapperTier2),
            children: [
                (0, a.jsx)('div', {
                    className: i()(_.row, _.nameRow),
                    children: (0, a.jsx)(c.X6q, {
                        variant: 'heading-lg/semibold',
                        color: 'always-white',
                        children: A
                    })
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
                                  className: _.icon
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
                        (0, x.JG)(w, () => y(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Trial: ', w]
                        }),
                        j
                            ? (0, a.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: _.icon
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
                            (0, p.if)({
                                intervalType: null != (l = null == k ? void 0 : k.interval) ? l : g.rV.MONTH,
                                intervalCount: null != (o = null == k ? void 0 : k.interval_count) ? o : 1,
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
                                [_.acked]: Z,
                                [_.expired]: L
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acked' === U ? void 0 : 'always-white',
                                children: U
                            })
                        }),
                        null != I &&
                            (0, a.jsx)('div', {
                                className: i()(_.badge, _.redeemed),
                                children: (0, a.jsx)(c.Text, {
                                    variant: 'eyebrow',
                                    color: 'always-white',
                                    children: 'Redeemed'
                                })
                            })
                    ]
                }),
                (0, a.jsx)(c.P3F, {
                    onClick: async () => {
                        O(!0), await N(S, 'trial'), h(), O(!1);
                    },
                    children: (0, a.jsx)(c.XHJ, {
                        size: 'md',
                        color: 'currentColor',
                        className: i()(_.icon, _.trashIcon)
                    })
                }),
                (0, a.jsx)('div', {
                    className: i()(_.loadingContainer, { [_.isLoading]: C || E }),
                    children: (0, a.jsx)(c.$jN, {})
                })
            ]
        })
    );
}
function P(e) {
    var t, n;
    let { offer: l, offerOptions: o, forceRefetch: u } = e,
        [m, p] = r.useState(!1),
        [h, b] = r.useState(!1),
        [f, g] = r.useState(!1),
        [j, y] = r.useState(!1);
    r.useEffect(() => {
        f && y(!0);
        let e = setTimeout(() => {
            y(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [f]);
    let { id: C, expires_at: O, applied_at: E, discount_id: T, discount: S } = l,
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
        I = null != O,
        w = null != O && new Date(O).getTime() < Date.now(),
        k = async () => {
            g(!0), I ? await R({ expiresAt: null }) : await (0, d.a)(void 0, l), u(), g(!1);
        },
        R = async (e) => {
            let { expiresAt: t } = e;
            g(!0);
            try {
                await s.tn.patch({
                    url: v.ANM.UPDATE_USER_OFFER(C, 'discount'),
                    body: { expires_at: t },
                    rejectWithError: !0
                });
            } finally {
                u(), g(!1);
            }
        };
    r.useEffect(() => {
        if (m) {
            let e = setTimeout(() => {
                p(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (h) {
            let e = setTimeout(() => {
                b(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [m, h]);
    let A = 'Active';
    return (
        w && (A = 'Expired'),
        I && (A = 'Acked'),
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
                                g(!0), await N(C, 'discount'), u(), g(!1);
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
                        (0, x.JG)(C, () => p(!0));
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Offer: ', C]
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
                        h
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
                            value: null != O ? O.substring(0, 10) : '',
                            onChange: (e) => R({ expiresAt: e.target.value })
                        })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: _.badgeContainer,
                    children: [
                        (0, a.jsx)(c.P3F, {
                            onClick: k,
                            className: i()(_.badge, _.clickable, {
                                [_.acked]: I,
                                [_.expired]: w
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acked' === A ? void 0 : 'always-white',
                                children: A
                            })
                        }),
                        null != E &&
                            (0, a.jsx)('div', {
                                className: i()(_.badge, _.redeemed),
                                children: (0, a.jsx)(c.Text, {
                                    variant: 'eyebrow',
                                    color: 'always-white',
                                    children: 'Applied'
                                })
                            })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: i()(_.loadingContainer, { [_.isLoading]: f || j }),
                    children: (0, a.jsx)(c.$jN, {})
                })
            ]
        })
    );
}
function I() {
    let [e, t] = r.useState([]),
        [n, l] = r.useState([]),
        [i, s] = r.useState(),
        [x, p] = r.useState(),
        [g, N] = r.useState([]),
        [I, w] = r.useState([]),
        [k, R] = r.useState(!0),
        [A, Z] = r.useState(10080),
        [L, D] = r.useState([]),
        { entitlements: M, deleteFractionalPremium: z, refreshEntitlementList: U } = (0, f.m)();
    r.useEffect(() => {
        U();
    }, [U]);
    let B = (e) => e.filter((e) => e.sourceType === v.kNB.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date());
    r.useEffect(() => {
        D(B(M));
    }, [M]),
        r.useEffect(() => {
            (0 === e.length || 0 === n.length || k) &&
                y().then((e) => {
                    let n = Object.keys(e.trial).map((t) => ({
                            label: t,
                            value: e.trial[t]
                        })),
                        a = Object.keys(e.discount).map((t) => ({
                            label: t,
                            value: e.discount[t]
                        }));
                    t(n), l(a), null == i && s(n[0].value), null == x && p(a[0].value);
                });
        }, [e, n, i, x, k]),
        r.useEffect(() => {
            k &&
                (R(!1),
                m.Z.forceReset(),
                (0, d.T)(),
                O().then((e) => {
                    N(e.trial.sort((e, t) => e.id.localeCompare(t.id))), w(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [k]);
    let F = async () => {
            null != i && (await C(i, 'trial'), R(!0));
        },
        G = async () => {
            null != x && (await C(x, 'discount'), R(!0));
        },
        V = async () => {
            await E(), R(!0);
        },
        H = async () => {
            let e = new Date(Date.now() + 60 * A * 1000).toISOString();
            await T(e), U();
        };
    return (0, a.jsx)(c.zJl, {
        className: j.panel,
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
                                    select: (e) => p(e),
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
                g.length > 0 &&
                    (0, a.jsxs)('section', {
                        className: _.section,
                        children: [
                            (0, a.jsx)(c.X6q, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Trial Offers'
                            }),
                            g.map((t) =>
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
                I.length > 0 &&
                    (0, a.jsxs)('section', {
                        className: _.section,
                        children: [
                            (0, a.jsx)(c.X6q, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Discount Offers'
                            }),
                            I.map((e) =>
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
                                    isSelected: (e) => A === e,
                                    placeholder: 'Reverse Trial Length',
                                    serialize: (e) => String(e),
                                    select: (e) => Z(e),
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
                L.length > 0 &&
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsx)(c.Text, {
                                style: { marginTop: '15px' },
                                variant: 'text-md/bold',
                                children: 'Active reverse trial'
                            }),
                            (0, a.jsx)('div', {
                                children: L.map((e) =>
                                    (0, a.jsx)(
                                        h.D,
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
