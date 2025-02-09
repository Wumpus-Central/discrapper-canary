n.d(t, { Z: () => k }), n(47120);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(544891),
    s = n(704215),
    c = n(481060),
    d = n(937579),
    u = n(675478),
    h = n(431),
    m = n(572004),
    x = n(74538),
    _ = n(246992),
    p = n(981631),
    f = n(474936),
    b = n(617521),
    g = n(153975);
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
        } catch {
        } finally {
            await (0, d.T)();
        }
    },
    C = async (e, t) => {
        try {
            await o.tn.del({
                url: p.ANM.DELETE_USER_OFFER(e, t),
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
                url: p.ANM.UNACK_USER_OFFER(e, t),
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
    E = async () => {
        try {
            await o.tn.del({
                url: p.ANM.USER_OFFERS,
                rejectWithError: !0
            });
        } catch {
        } finally {
            await h.Z.forceReset(), await (0, d.T)();
        }
    };
function S(e) {
    var t, n, l, o;
    let { offer: s, offerOptions: u, forceRefetch: h } = e,
        [_, p] = r.useState(!1),
        [b, v] = r.useState(!1),
        [j, T] = r.useState(!1),
        [E, S] = r.useState(!1);
    r.useEffect(() => {
        j && S(!0);
        let e = setTimeout(() => {
            S(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [j]);
    let { id: y, expires_at: k, redeemed_at: I, trial_id: R, subscription_trial: O, referrer: Z } = s,
        w =
            null !==
                (n =
                    null ===
                        (t = u.find((e) => {
                            let { value: t } = e;
                            return t === R;
                        })) || void 0 === t
                        ? void 0
                        : t.label) && void 0 !== n
                ? n
                : 'Unknown';
    null != Z && (w = ''.concat(w, ' from @').concat(Z.username));
    let A = null != k,
        L = null != k && new Date(k).getTime() < Date.now(),
        P = (null == O ? void 0 : O.sku_id) === f.Si.TIER_0,
        D = async () => {
            T(!0), A ? await N(y, 'trial') : await (0, d.a)(s), h(), T(!1);
        };
    r.useEffect(() => {
        if (_) {
            let e = setTimeout(() => {
                p(!1);
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
    }, [_, b]);
    let B = 'Active';
    return (
        A && (B = 'Acknowledged'),
        L && (B = 'Expired'),
        (0, a.jsxs)('div', {
            className: i()(g.card, P ? g.gradientWrapperTier0 : g.gradientWrapperTier2),
            children: [
                (0, a.jsxs)('div', {
                    className: i()(g.row, g.nameRow),
                    children: [
                        (0, a.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            color: 'always-white',
                            children: w
                        }),
                        (0, a.jsx)(c.P3F, {
                            onClick: async () => {
                                T(!0), await C(y, 'trial'), h(), T(!1);
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
                        (0, m.JG)(y), p(!0);
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Offer: ', y]
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
                (0, a.jsxs)(c.P3F, {
                    className: i()(g.row, g.idRow),
                    onClick: () => {
                        (0, m.JG)(R), v(!0);
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Trial: ', R]
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
                                intervalType: null !== (l = null == O ? void 0 : O.interval) && void 0 !== l ? l : f.rV.MONTH,
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
                                [g.acked]: A,
                                [g.expired]: L
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
function y(e) {
    var t, n;
    let { offer: l, offerOptions: o, forceRefetch: s } = e,
        [u, h] = r.useState(!1),
        [x, _] = r.useState(!1),
        [p, f] = r.useState(!1),
        [b, v] = r.useState(!1);
    r.useEffect(() => {
        p && v(!0);
        let e = setTimeout(() => {
            v(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [p]);
    let { id: j, expires_at: T, applied_at: E, discount_id: S, discount: y } = l,
        k =
            null !==
                (n =
                    null ===
                        (t = o.find((e) => {
                            let { value: t } = e;
                            return t === S;
                        })) || void 0 === t
                        ? void 0
                        : t.label) && void 0 !== n
                ? n
                : 'Unknown',
        I = null != T,
        R = null != T && new Date(T).getTime() < Date.now(),
        O = async () => {
            f(!0), I ? await N(j, 'discount') : await (0, d.a)(void 0, l), s(), f(!1);
        };
    r.useEffect(() => {
        if (u) {
            let e = setTimeout(() => {
                h(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (x) {
            let e = setTimeout(() => {
                _(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [u, x]);
    let Z = 'Active';
    return (
        R && (Z = 'Expired'),
        I && (Z = 'Acknowledged'),
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
                                f(!0), await C(j, 'discount'), s(), f(!1);
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
                        (0, m.JG)(j), h(!0);
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
                        (0, m.JG)(S), _(!0);
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Discount: ', S]
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
                (null == y ? void 0 : y.amount) != null &&
                    (0, a.jsx)('div', {
                        children: (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: [y.amount, '% off']
                        })
                    }),
                (0, a.jsxs)('div', {
                    className: g.badgeContainer,
                    children: [
                        (0, a.jsx)(c.P3F, {
                            onClick: O,
                            className: i()(g.badge, g.clickable, {
                                [g.acked]: I,
                                [g.expired]: R
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
                    className: i()(g.loadingContainer, { [g.isLoading]: p || b }),
                    children: (0, a.jsx)(c.$jN, {})
                })
            ]
        })
    );
}
function k() {
    let [e, t] = r.useState([]),
        [n, l] = r.useState([]),
        [o, m] = r.useState(),
        [x, p] = r.useState(),
        [f, C] = r.useState([]),
        [N, k] = r.useState([]),
        [I, R] = r.useState(!0);
    r.useEffect(() => {
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
                t(n), l(a), null == o && m(n[0].value), null == x && p(a[0].value);
            });
    }, [e, n, o, x, I]),
        r.useEffect(() => {
            I &&
                (R(!1),
                h.Z.forceReset(),
                (0, d.T)(),
                T().then((e) => {
                    C(e.trial.sort((e, t) => e.id.localeCompare(t.id))), k(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [I]);
    let O = async () => {
            null != o && (await j(o, 'trial'), R(!0));
        },
        Z = async () => {
            null != x && (await j(x, 'discount'), R(!0));
        },
        w = async () => {
            await E(), R(!0);
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
                                    onClick: w,
                                    children: 'Clear all User Offers'
                                }),
                                (0, a.jsx)(c.zxk, {
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: () => (0, u.w9)(s.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
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
                                    select: (e) => m(e),
                                    popoutLayerContext: _.O$
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
                                    select: (e) => p(e),
                                    popoutLayerContext: _.O$
                                }),
                                (0, a.jsx)(c.zxk, {
                                    onClick: Z,
                                    children: 'Create'
                                })
                            ]
                        })
                    ]
                }),
                f.length > 0 &&
                    (0, a.jsxs)('section', {
                        className: g.section,
                        children: [
                            (0, a.jsx)(c.X6q, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Trial Offers'
                            }),
                            f.map((t) =>
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
                                    y,
                                    {
                                        offer: e,
                                        offerOptions: n,
                                        forceRefetch: () => R(!0)
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
