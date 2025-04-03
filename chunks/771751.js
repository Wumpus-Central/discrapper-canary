n.d(t, { Z: () => O }), n(47120), n(230036);
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
    T = async () => {
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
function S(e) {
    var t, n, l, s;
    let { offer: u, offerOptions: m, forceRefetch: p } = e,
        [_, v] = a.useState(!1),
        [j, C] = a.useState(!1),
        [T, S] = a.useState(!1),
        [N, O] = a.useState(!1);
    a.useEffect(() => {
        T && O(!0);
        let e = setTimeout(() => {
            O(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [T]);
    let { id: k, expires_at: E, redeemed_at: w, trial_id: P, subscription_trial: I, referrer: Z } = u,
        R =
            null !=
            (n =
                null ==
                (t = m.find((e) => {
                    let { value: t } = e;
                    return t === P;
                }))
                    ? void 0
                    : t.label)
                ? n
                : 'Unknown';
    null != Z && (R = ''.concat(R, ' from @').concat(Z.username));
    let L = null != E,
        D = null != E && new Date(E).getTime() < Date.now(),
        A = (null == I ? void 0 : I.sku_id) === f.Si.TIER_0,
        B = async () => {
            S(!0), L ? await z({ expiresAt: null }) : await (0, d.a)(u), p(), S(!1);
        },
        z = async (e) => {
            let { expiresAt: t } = e;
            S(!0);
            try {
                await o.tn.patch({
                    url: b.ANM.UPDATE_USER_OFFER(k, 'trial'),
                    body: { expires_at: t },
                    rejectWithError: !0
                });
            } finally {
                p(), S(!1);
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
        D && (M = 'Expired'),
        (0, r.jsxs)('div', {
            className: i()(g.card, A ? g.gradientWrapperTier0 : g.gradientWrapperTier2),
            children: [
                (0, r.jsxs)('div', {
                    className: i()(g.row, g.nameRow),
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            color: 'always-white',
                            children: R
                        }),
                        (0, r.jsx)(c.P3F, {
                            onClick: async () => {
                                S(!0), await y(k, 'trial'), p(), S(!1);
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
                        (0, x.JG)(k), v(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Offer: ', k]
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
                        (0, x.JG)(P), C(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Trial: ', P]
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
                            value: null != E ? E.substring(0, 10) : '',
                            onChange: (e) => z({ expiresAt: e.target.value })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: g.badgeContainer,
                    children: [
                        (0, r.jsx)(c.P3F, {
                            onClick: B,
                            className: i()(g.badge, g.clickable, {
                                [g.acked]: L,
                                [g.expired]: D
                            }),
                            children: (0, r.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === M ? void 0 : 'always-white',
                                children: M
                            })
                        }),
                        null != w &&
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
                    className: i()(g.loadingContainer, { [g.isLoading]: T || N }),
                    children: (0, r.jsx)(c.$jN, {})
                })
            ]
        })
    );
}
function N(e) {
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
    let { id: T, expires_at: S, applied_at: N, discount_id: O, discount: k } = l,
        E =
            null !=
            (n =
                null ==
                (t = s.find((e) => {
                    let { value: t } = e;
                    return t === O;
                }))
                    ? void 0
                    : t.label)
                ? n
                : 'Unknown',
        w = null != S,
        P = null != S && new Date(S).getTime() < Date.now(),
        I = async () => {
            v(!0), w ? await Z({ expiresAt: null }) : await (0, d.a)(void 0, l), u(), v(!1);
        },
        Z = async (e) => {
            let { expiresAt: t } = e;
            v(!0);
            try {
                await o.tn.patch({
                    url: b.ANM.UPDATE_USER_OFFER(T, 'discount'),
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
    let R = 'Active';
    return (
        P && (R = 'Expired'),
        w && (R = 'Acknowledged'),
        (0, r.jsxs)('div', {
            className: i()(g.card, g.discount),
            children: [
                (0, r.jsxs)('div', {
                    className: i()(g.row, g.nameRow),
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            color: 'text-normal',
                            children: E
                        }),
                        (0, r.jsx)(c.P3F, {
                            onClick: async () => {
                                v(!0), await y(T, 'discount'), u(), v(!1);
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
                        (0, x.JG)(T), h(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Offer: ', T]
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
                        (0, x.JG)(O), f(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Discount: ', O]
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
                (null == k ? void 0 : k.amount) != null &&
                    (0, r.jsx)('div', {
                        children: (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: [k.amount, '% off']
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
                            value: null != S ? S.substring(0, 10) : '',
                            onChange: (e) => Z({ expiresAt: e.target.value })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: g.badgeContainer,
                    children: [
                        (0, r.jsx)(c.P3F, {
                            onClick: I,
                            className: i()(g.badge, g.clickable, {
                                [g.acked]: w,
                                [g.expired]: P
                            }),
                            children: (0, r.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === R ? void 0 : 'always-white',
                                children: R
                            })
                        }),
                        null != N &&
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
function O() {
    let [e, t] = a.useState([]),
        [n, l] = a.useState([]),
        [i, o] = a.useState(),
        [x, h] = a.useState(),
        [b, f] = a.useState([]),
        [y, O] = a.useState([]),
        [k, E] = a.useState(!0);
    a.useEffect(() => {
        (0 === e.length || 0 === n.length || k) &&
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
    }, [e, n, i, x, k]),
        a.useEffect(() => {
            k &&
                (E(!1),
                m.Z.forceReset(),
                (0, d.T)(),
                C().then((e) => {
                    f(e.trial.sort((e, t) => e.id.localeCompare(t.id))), O(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [k]);
    let w = async () => {
            null != i && (await j(i, 'trial'), E(!0));
        },
        P = async () => {
            null != x && (await j(x, 'discount'), E(!0));
        },
        I = async () => {
            await T(), E(!0);
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
                                    onClick: () => E(!0),
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
                                    onClick: w,
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
                                    onClick: P,
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
                                    S,
                                    {
                                        offer: t,
                                        offerOptions: e,
                                        forceRefetch: () => E(!0)
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
                                    N,
                                    {
                                        offer: e,
                                        offerOptions: n,
                                        forceRefetch: () => E(!0)
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
