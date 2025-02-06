n.d(t, { Z: () => k }), n(47120);
var a = n(200651),
    l = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(544891),
    s = n(704215),
    c = n(481060),
    d = n(937579),
    u = n(675478),
    m = n(431),
    h = n(572004),
    x = n(74538),
    p = n(246992),
    f = n(981631),
    _ = n(474936),
    b = n(941469),
    g = n(509345);
let v = async () => {
        try {
            let { body: e } = await o.tn.get({
                url: f.ANM.USER_OFFER_IDS,
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
                url: f.ANM.CREATE_USER_OFFER(e, t),
                rejectWithError: !0
            });
        } catch {
        } finally {
            await (0, d.T)();
        }
    },
    C = async (e, t) => {
        try {
            await o.tn.del({
                url: f.ANM.DELETE_USER_OFFER(e, t),
                rejectWithError: !0
            });
        } catch {
        } finally {
            await (0, d.T)();
        }
    },
    N = async (e, t) => {
        try {
            await o.tn.post({
                url: f.ANM.UNACK_USER_OFFER(e, t),
                rejectWithError: !0
            });
        } catch {
        } finally {
            await (0, d.T)();
        }
    },
    T = async () => {
        try {
            let { body: e } = await o.tn.get({
                url: f.ANM.USER_OFFERS,
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
            await o.tn.del({
                url: f.ANM.USER_OFFERS,
                rejectWithError: !0
            });
        } catch {
        } finally {
            await m.Z.forceReset(), await (0, d.T)();
        }
    };
function y(e) {
    var t, n, r, o;
    let { offer: s, offerOptions: u, forceRefetch: m } = e,
        [p, f] = l.useState(!1),
        [b, v] = l.useState(!1),
        [j, T] = l.useState(!1),
        [E, y] = l.useState(!1);
    l.useEffect(() => {
        j && y(!0);
        let e = setTimeout(() => {
            y(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [j]);
    let { id: S, expires_at: k, redeemed_at: I, trial_id: Z, subscription_trial: O, referrer: w } = s,
        R =
            null !==
                (n =
                    null ===
                        (t = u.find((e) => {
                            let { value: t } = e;
                            return t === Z;
                        })) || void 0 === t
                        ? void 0
                        : t.label) && void 0 !== n
                ? n
                : 'Unknown';
    null != w && (R = ''.concat(R, ' from @').concat(w.username));
    let P = null != k,
        A = null != k && new Date(k).getTime() < Date.now(),
        L = (null == O ? void 0 : O.sku_id) === _.Si.TIER_0,
        D = async () => {
            T(!0), P ? await N(S, 'trial') : await (0, d.a)(s), m(), T(!1);
        };
    l.useEffect(() => {
        if (p) {
            let e = setTimeout(() => {
                f(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (b) {
            let e = setTimeout(() => {
                v(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [p, b]);
    let B = 'Active';
    return (
        P && (B = 'Acknowledged'),
        A && (B = 'Expired'),
        (0, a.jsxs)('div', {
            className: i()(g.card, L ? g.gradientWrapperTier0 : g.gradientWrapperTier2),
            children: [
                (0, a.jsxs)('div', {
                    className: i()(g.row, g.nameRow),
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            color: 'always-white',
                            children: R
                        }),
                        (0, a.jsx)(c.P3F, {
                            onClick: async () => {
                                T(!0), await C(S, 'trial'), m(), T(!1);
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
                        (0, h.JG)(S), f(!0);
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Offer: ', S]
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
                (0, a.jsxs)(c.P3F, {
                    className: i()(g.row, g.idRow),
                    onClick: () => {
                        (0, h.JG)(Z), v(!0);
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Trial: ', Z]
                        }),
                        b
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
                    children: (0, a.jsxs)(c.Text, {
                        variant: 'eyebrow',
                        color: 'always-white',
                        children: [
                            'Trial Length:',
                            ' ',
                            (0, x.if)({
                                intervalType: null !== (r = null == O ? void 0 : O.interval) && void 0 !== r ? r : _.rV.MONTH,
                                intervalCount: null !== (o = null == O ? void 0 : O.interval_count) && void 0 !== o ? o : 1,
                                capitalize: !1
                            })
                        ]
                    })
                }),
                (0, a.jsxs)('div', {
                    className: g.badgeContainer,
                    children: [
                        (0, a.jsx)(c.P3F, {
                            onClick: D,
                            className: i()(g.badge, g.clickable, {
                                [g.acked]: P,
                                [g.expired]: A
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === B ? void 0 : 'always-white',
                                children: B
                            })
                        }),
                        null != I &&
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
                    className: i()(g.loadingContainer, { [g.isLoading]: j || E }),
                    children: (0, a.jsx)(c.$jN, {})
                })
            ]
        })
    );
}
function S(e) {
    var t, n;
    let { offer: r, offerOptions: o, forceRefetch: s } = e,
        [u, m] = l.useState(!1),
        [x, p] = l.useState(!1),
        [f, _] = l.useState(!1),
        [b, v] = l.useState(!1);
    l.useEffect(() => {
        f && v(!0);
        let e = setTimeout(() => {
            v(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [f]);
    let { id: j, expires_at: T, applied_at: E, discount_id: y, discount: S } = r,
        k =
            null !==
                (n =
                    null ===
                        (t = o.find((e) => {
                            let { value: t } = e;
                            return t === y;
                        })) || void 0 === t
                        ? void 0
                        : t.label) && void 0 !== n
                ? n
                : 'Unknown',
        I = null != T,
        Z = null != T && new Date(T).getTime() < Date.now(),
        O = async () => {
            _(!0), I ? await N(j, 'discount') : await (0, d.a)(void 0, r), s(), _(!1);
        };
    l.useEffect(() => {
        if (u) {
            let e = setTimeout(() => {
                m(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (x) {
            let e = setTimeout(() => {
                p(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [u, x]);
    let w = 'Active';
    return (
        Z && (w = 'Expired'),
        I && (w = 'Acknowledged'),
        (0, a.jsxs)('div', {
            className: i()(g.card, g.discount),
            children: [
                (0, a.jsxs)('div', {
                    className: i()(g.row, g.nameRow),
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            color: 'text-normal',
                            children: k
                        }),
                        (0, a.jsx)(c.P3F, {
                            onClick: async () => {
                                _(!0), await C(j, 'discount'), s(), _(!1);
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
                        (0, h.JG)(j), m(!0);
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Offer: ', j]
                        }),
                        u
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
                        (0, h.JG)(y), p(!0);
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Discount: ', y]
                        }),
                        x
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
                    className: g.badgeContainer,
                    children: [
                        (0, a.jsx)(c.P3F, {
                            onClick: O,
                            className: i()(g.badge, g.clickable, {
                                [g.acked]: I,
                                [g.expired]: Z
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === w ? void 0 : 'always-white',
                                children: w
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
                    className: i()(g.loadingContainer, { [g.isLoading]: f || b }),
                    children: (0, a.jsx)(c.$jN, {})
                })
            ]
        })
    );
}
function k() {
    let [e, t] = l.useState([]),
        [n, r] = l.useState([]),
        [o, h] = l.useState(),
        [x, f] = l.useState(),
        [_, C] = l.useState([]),
        [N, k] = l.useState([]),
        [I, Z] = l.useState(!0);
    l.useEffect(() => {
        (0 === e.length || 0 === n.length || I) &&
            v().then((e) => {
                let n = Object.keys(e.trial).map((t) => ({
                        label: t,
                        value: e.trial[t]
                    })),
                    a = Object.keys(e.discount).map((t) => ({
                        label: t,
                        value: e.discount[t]
                    }));
                t(n), r(a), null == o && h(n[0].value), null == x && f(a[0].value);
            });
    }, [e, n, o, x, I]),
        l.useEffect(() => {
            I &&
                (Z(!1),
                m.Z.forceReset(),
                (0, d.T)(),
                T().then((e) => {
                    C(e.trial.sort((e, t) => e.id.localeCompare(t.id))), k(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [I]);
    let O = async () => {
            null != o && (await j(o, 'trial'), Z(!0));
        },
        w = async () => {
            null != x && (await j(x, 'discount'), Z(!0));
        },
        R = async () => {
            await E(), Z(!0);
        };
    return (0, a.jsx)(c.zJl, {
        className: i()(b.panel),
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
                                    onClick: R,
                                    children: 'Clear all User Offers'
                                }),
                                (0, a.jsx)(c.zxk, {
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: () => (0, u.w9)(s.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    children: 'Clear Mobile Trials DismissibleContent'
                                }),
                                (0, a.jsx)(c.zxk, {
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: () => Z(!0),
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
                                    isSelected: (e) => o === e,
                                    placeholder: 'Trial Type',
                                    serialize: (e) => String(e),
                                    select: (e) => h(e),
                                    popoutLayerContext: p.O$
                                }),
                                (0, a.jsx)(c.zxk, {
                                    onClick: O,
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
                                    select: (e) => f(e),
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
                _.length > 0 &&
                    (0, a.jsxs)('section', {
                        className: g.section,
                        children: [
                            (0, a.jsx)(c.X6q, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Trial Offers'
                            }),
                            _.map((t) =>
                                (0, a.jsx)(
                                    y,
                                    {
                                        offer: t,
                                        offerOptions: e,
                                        forceRefetch: () => Z(!0)
                                    },
                                    t.id
                                )
                            )
                        ]
                    }),
                N.length > 0 &&
                    (0, a.jsxs)('section', {
                        className: g.section,
                        children: [
                            (0, a.jsx)(c.X6q, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Discount Offers'
                            }),
                            N.map((e) =>
                                (0, a.jsx)(
                                    S,
                                    {
                                        offer: e,
                                        offerOptions: n,
                                        forceRefetch: () => Z(!0)
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
