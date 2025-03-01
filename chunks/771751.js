n.d(t, { Z: () => E }), n(47120), n(230036);
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
    h = n(572004),
    x = n(74538),
    f = n(246992),
    p = n(981631),
    b = n(474936),
    _ = n(710662),
    g = n(536465);
let v = async () => {
        try {
            let { body: e } = await o.tn.get({
                url: p.ANM.USER_OFFER_IDS,
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
                url: p.ANM.CREATE_USER_OFFER(e, t),
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
                url: p.ANM.DELETE_USER_OFFER(e, t),
                rejectWithError: !0
            });
        } catch (e) {
        } finally {
            await (0, d.T)();
        }
    },
    C = async (e, t) => {
        try {
            await o.tn.post({
                url: p.ANM.UNACK_USER_OFFER(e, t),
                rejectWithError: !0
            });
        } catch (e) {
        } finally {
            await (0, d.T)();
        }
    },
    N = async () => {
        try {
            let { body: e } = await o.tn.get({
                url: p.ANM.USER_OFFERS,
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
                url: p.ANM.USER_OFFERS,
                rejectWithError: !0
            });
        } catch (e) {
        } finally {
            await m.Z.forceReset(), await (0, d.T)();
        }
    };
function T(e) {
    var t, n, l, s;
    let { offer: u, offerOptions: m, forceRefetch: f } = e,
        [p, _] = a.useState(!1),
        [v, j] = a.useState(!1),
        [N, O] = a.useState(!1),
        [T, S] = a.useState(!1);
    a.useEffect(() => {
        N && S(!0);
        let e = setTimeout(() => {
            S(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [N]);
    let { id: E, expires_at: k, redeemed_at: w, trial_id: I, subscription_trial: Z, referrer: P } = u,
        R =
            null !==
                (n =
                    null ===
                        (t = m.find((e) => {
                            let { value: t } = e;
                            return t === I;
                        })) || void 0 === t
                        ? void 0
                        : t.label) && void 0 !== n
                ? n
                : 'Unknown';
    null != P && (R = ''.concat(R, ' from @').concat(P.username));
    let L = null != k,
        A = null != k && new Date(k).getTime() < Date.now(),
        D = (null == Z ? void 0 : Z.sku_id) === b.Si.TIER_0,
        B = async () => {
            O(!0), L ? await C(E, 'trial') : await (0, d.a)(u), f(), O(!1);
        },
        M = async (e) => {
            let { expiresAt: t } = e;
            O(!0);
            try {
                await o.tn.patch({
                    url: '/user-offers/trial/'.concat(E),
                    body: { expires_at: t },
                    rejectWithError: !0
                });
            } finally {
                f(), O(!1);
            }
        };
    a.useEffect(() => {
        if (p) {
            let e = setTimeout(() => {
                _(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (v) {
            let e = setTimeout(() => {
                j(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [p, v]);
    let z = 'Active';
    return (
        L && (z = 'Acknowledged'),
        A && (z = 'Expired'),
        (0, r.jsxs)('div', {
            className: i()(g.card, D ? g.gradientWrapperTier0 : g.gradientWrapperTier2),
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
                                O(!0), await y(E, 'trial'), f(), O(!1);
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
                        (0, h.JG)(E), _(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Offer: ', E]
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
                (0, r.jsxs)(c.P3F, {
                    className: i()(g.row, g.idRow),
                    onClick: () => {
                        (0, h.JG)(I), j(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Trial: ', I]
                        }),
                        v
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
                            (0, x.if)({
                                intervalType: null !== (l = null == Z ? void 0 : Z.interval) && void 0 !== l ? l : b.rV.MONTH,
                                intervalCount: null !== (s = null == Z ? void 0 : Z.interval_count) && void 0 !== s ? s : 1,
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
                            onChange: (e) => M({ expiresAt: e.target.value })
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
                                [g.expired]: A
                            }),
                            children: (0, r.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === z ? void 0 : 'always-white',
                                children: z
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
                    className: i()(g.loadingContainer, { [g.isLoading]: N || T }),
                    children: (0, r.jsx)(c.$jN, {})
                })
            ]
        })
    );
}
function S(e) {
    var t, n;
    let { offer: l, offerOptions: s, forceRefetch: u } = e,
        [m, x] = a.useState(!1),
        [f, p] = a.useState(!1),
        [b, _] = a.useState(!1),
        [v, j] = a.useState(!1);
    a.useEffect(() => {
        b && j(!0);
        let e = setTimeout(() => {
            j(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [b]);
    let { id: N, expires_at: O, applied_at: T, discount_id: S, discount: E } = l,
        k =
            null !==
                (n =
                    null ===
                        (t = s.find((e) => {
                            let { value: t } = e;
                            return t === S;
                        })) || void 0 === t
                        ? void 0
                        : t.label) && void 0 !== n
                ? n
                : 'Unknown',
        w = null != O,
        I = null != O && new Date(O).getTime() < Date.now(),
        Z = async () => {
            _(!0), w ? await C(N, 'discount') : await (0, d.a)(void 0, l), u(), _(!1);
        },
        P = async (e) => {
            let { expiresAt: t } = e;
            _(!0);
            try {
                await o.tn.patch({
                    url: '/user-offers/discount/'.concat(N),
                    body: { expires_at: t },
                    rejectWithError: !0
                });
            } finally {
                u(), _(!1);
            }
        };
    a.useEffect(() => {
        if (m) {
            let e = setTimeout(() => {
                x(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (f) {
            let e = setTimeout(() => {
                p(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [m, f]);
    let R = 'Active';
    return (
        I && (R = 'Expired'),
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
                            children: k
                        }),
                        (0, r.jsx)(c.P3F, {
                            onClick: async () => {
                                _(!0), await y(N, 'discount'), u(), _(!1);
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
                        (0, h.JG)(N), x(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Offer: ', N]
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
                        (0, h.JG)(S), p(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Discount: ', S]
                        }),
                        f
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
                            value: null != O ? O.substring(0, 10) : '',
                            onChange: (e) => P({ expiresAt: e.target.value })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: g.badgeContainer,
                    children: [
                        (0, r.jsx)(c.P3F, {
                            onClick: Z,
                            className: i()(g.badge, g.clickable, {
                                [g.acked]: w,
                                [g.expired]: I
                            }),
                            children: (0, r.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === R ? void 0 : 'always-white',
                                children: R
                            })
                        }),
                        null != T &&
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
                    className: i()(g.loadingContainer, { [g.isLoading]: b || v }),
                    children: (0, r.jsx)(c.$jN, {})
                })
            ]
        })
    );
}
function E() {
    let [e, t] = a.useState([]),
        [n, l] = a.useState([]),
        [o, h] = a.useState(),
        [x, p] = a.useState(),
        [b, y] = a.useState([]),
        [C, E] = a.useState([]),
        [k, w] = a.useState(!0);
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
                t(n), l(r), null == o && h(n[0].value), null == x && p(r[0].value);
            });
    }, [e, n, o, x, k]),
        a.useEffect(() => {
            k &&
                (w(!1),
                m.Z.forceReset(),
                (0, d.T)(),
                N().then((e) => {
                    y(e.trial.sort((e, t) => e.id.localeCompare(t.id))), E(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [k]);
    let I = async () => {
            null != o && (await j(o, 'trial'), w(!0));
        },
        Z = async () => {
            null != x && (await j(x, 'discount'), w(!0));
        },
        P = async () => {
            await O(), w(!0);
        };
    return (0, r.jsx)(c.zJl, {
        className: i()(_.panel),
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
                                    onClick: P,
                                    children: 'Clear all User Offers'
                                }),
                                (0, r.jsx)(c.zxk, {
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: () => (0, u.w9)(s.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    children: 'Clear Mobile Trials DismissibleContent'
                                }),
                                (0, r.jsx)(c.zxk, {
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: () => w(!0),
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
                                    isSelected: (e) => o === e,
                                    placeholder: 'Trial Type',
                                    serialize: (e) => String(e),
                                    select: (e) => h(e),
                                    popoutLayerContext: f.O$
                                }),
                                (0, r.jsx)(c.zxk, {
                                    onClick: I,
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
                                    select: (e) => p(e),
                                    popoutLayerContext: f.O$
                                }),
                                (0, r.jsx)(c.zxk, {
                                    onClick: Z,
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
                                    T,
                                    {
                                        offer: t,
                                        offerOptions: e,
                                        forceRefetch: () => w(!0)
                                    },
                                    t.id
                                )
                            )
                        ]
                    }),
                C.length > 0 &&
                    (0, r.jsxs)('section', {
                        className: g.section,
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Discount Offers'
                            }),
                            C.map((e) =>
                                (0, r.jsx)(
                                    S,
                                    {
                                        offer: e,
                                        offerOptions: n,
                                        forceRefetch: () => w(!0)
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
