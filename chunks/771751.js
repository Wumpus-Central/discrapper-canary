n.d(t, { Z: () => S }), n(47120), n(230036);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(544891),
    s = n(704215),
    c = n(481060),
    d = n(937579),
    u = n(675478),
    h = n(431),
    m = n(572004),
    x = n(74538),
    p = n(246992),
    f = n(981631),
    b = n(474936),
    _ = n(841699),
    g = n(833154);
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
        } catch (e) {
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
        } catch (e) {
        } finally {
            await (0, d.T)();
        }
    },
    y = async (e, t) => {
        try {
            await o.tn.post({
                url: f.ANM.UNACK_USER_OFFER(e, t),
                rejectWithError: !0
            });
        } catch (e) {
        } finally {
            await (0, d.T)();
        }
    },
    O = async () => {
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
    N = async () => {
        try {
            await o.tn.del({
                url: f.ANM.USER_OFFERS,
                rejectWithError: !0
            });
        } catch (e) {
        } finally {
            await h.Z.forceReset(), await (0, d.T)();
        }
    };
function T(e) {
    var t, n, i, o;
    let { offer: s, offerOptions: u, forceRefetch: h } = e,
        [p, f] = a.useState(!1),
        [_, v] = a.useState(!1),
        [j, O] = a.useState(!1),
        [N, T] = a.useState(!1);
    a.useEffect(() => {
        j && T(!0);
        let e = setTimeout(() => {
            T(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [j]);
    let { id: E, expires_at: S, redeemed_at: k, trial_id: I, subscription_trial: w, referrer: R } = s,
        Z =
            null !==
                (n =
                    null ===
                        (t = u.find((e) => {
                            let { value: t } = e;
                            return t === I;
                        })) || void 0 === t
                        ? void 0
                        : t.label) && void 0 !== n
                ? n
                : 'Unknown';
    null != R && (Z = ''.concat(Z, ' from @').concat(R.username));
    let P = null != S,
        A = null != S && new Date(S).getTime() < Date.now(),
        L = (null == w ? void 0 : w.sku_id) === b.Si.TIER_0,
        D = async () => {
            O(!0), P ? await y(E, 'trial') : await (0, d.a)(s), h(), O(!1);
        };
    a.useEffect(() => {
        if (p) {
            let e = setTimeout(() => {
                f(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (_) {
            let e = setTimeout(() => {
                v(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [p, _]);
    let B = 'Active';
    return (
        P && (B = 'Acknowledged'),
        A && (B = 'Expired'),
        (0, r.jsxs)('div', {
            className: l()(g.card, L ? g.gradientWrapperTier0 : g.gradientWrapperTier2),
            children: [
                (0, r.jsxs)('div', {
                    className: l()(g.row, g.nameRow),
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            color: 'always-white',
                            children: Z
                        }),
                        (0, r.jsx)(c.P3F, {
                            onClick: async () => {
                                O(!0), await C(E, 'trial'), h(), O(!1);
                            },
                            children: (0, r.jsx)(c.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                className: l()(g.icon, g.trashIcon)
                            })
                        })
                    ]
                }),
                (0, r.jsxs)(c.P3F, {
                    className: l()(g.row, g.idRow),
                    onClick: () => {
                        (0, m.JG)(E), f(!0);
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
                                  className: l()(g.icon, g.noMargin)
                              })
                            : (0, r.jsx)(c.TIy, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: g.icon
                              })
                    ]
                }),
                (0, r.jsxs)(c.P3F, {
                    className: l()(g.row, g.idRow),
                    onClick: () => {
                        (0, m.JG)(I), v(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Trial: ', I]
                        }),
                        _
                            ? (0, r.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: l()(g.icon, g.noMargin)
                              })
                            : (0, r.jsx)(c.TIy, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: g.icon
                              })
                    ]
                }),
                (0, r.jsx)('div', {
                    children: (0, r.jsxs)(c.Text, {
                        variant: 'eyebrow',
                        color: 'always-white',
                        children: [
                            'Trial Length:',
                            ' ',
                            (0, x.if)({
                                intervalType: null !== (i = null == w ? void 0 : w.interval) && void 0 !== i ? i : b.rV.MONTH,
                                intervalCount: null !== (o = null == w ? void 0 : w.interval_count) && void 0 !== o ? o : 1,
                                capitalize: !1
                            })
                        ]
                    })
                }),
                (0, r.jsxs)('div', {
                    className: g.badgeContainer,
                    children: [
                        (0, r.jsx)(c.P3F, {
                            onClick: D,
                            className: l()(g.badge, g.clickable, {
                                [g.acked]: P,
                                [g.expired]: A
                            }),
                            children: (0, r.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === B ? void 0 : 'always-white',
                                children: B
                            })
                        }),
                        null != k &&
                            (0, r.jsx)('div', {
                                className: l()(g.badge, g.__invalid_badgeBottom, g.redeemed),
                                children: (0, r.jsx)(c.Text, {
                                    variant: 'eyebrow',
                                    color: 'always-white',
                                    children: 'Redeemed'
                                })
                            })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: l()(g.loadingContainer, { [g.isLoading]: j || N }),
                    children: (0, r.jsx)(c.$jN, {})
                })
            ]
        })
    );
}
function E(e) {
    var t, n;
    let { offer: i, offerOptions: o, forceRefetch: s } = e,
        [u, h] = a.useState(!1),
        [x, p] = a.useState(!1),
        [f, b] = a.useState(!1),
        [_, v] = a.useState(!1);
    a.useEffect(() => {
        f && v(!0);
        let e = setTimeout(() => {
            v(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [f]);
    let { id: j, expires_at: O, applied_at: N, discount_id: T, discount: E } = i,
        S =
            null !==
                (n =
                    null ===
                        (t = o.find((e) => {
                            let { value: t } = e;
                            return t === T;
                        })) || void 0 === t
                        ? void 0
                        : t.label) && void 0 !== n
                ? n
                : 'Unknown',
        k = null != O,
        I = null != O && new Date(O).getTime() < Date.now(),
        w = async () => {
            b(!0), k ? await y(j, 'discount') : await (0, d.a)(void 0, i), s(), b(!1);
        };
    a.useEffect(() => {
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
                p(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [u, x]);
    let R = 'Active';
    return (
        I && (R = 'Expired'),
        k && (R = 'Acknowledged'),
        (0, r.jsxs)('div', {
            className: l()(g.card, g.discount),
            children: [
                (0, r.jsxs)('div', {
                    className: l()(g.row, g.nameRow),
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            color: 'text-normal',
                            children: S
                        }),
                        (0, r.jsx)(c.P3F, {
                            onClick: async () => {
                                b(!0), await C(j, 'discount'), s(), b(!1);
                            },
                            children: (0, r.jsx)(c.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                className: l()(g.icon, g.trashIcon)
                            })
                        })
                    ]
                }),
                (0, r.jsxs)(c.P3F, {
                    className: l()(g.row, g.idRow),
                    onClick: () => {
                        (0, m.JG)(j), h(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Offer: ', j]
                        }),
                        u
                            ? (0, r.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: l()(g.icon, g.noMargin)
                              })
                            : (0, r.jsx)(c.TIy, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: g.icon
                              })
                    ]
                }),
                (0, r.jsxs)(c.P3F, {
                    className: l()(g.row, g.idRow),
                    onClick: () => {
                        (0, m.JG)(T), p(!0);
                    },
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Discount: ', T]
                        }),
                        x
                            ? (0, r.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: l()(g.icon, g.noMargin)
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
                    className: g.badgeContainer,
                    children: [
                        (0, r.jsx)(c.P3F, {
                            onClick: w,
                            className: l()(g.badge, g.clickable, {
                                [g.acked]: k,
                                [g.expired]: I
                            }),
                            children: (0, r.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === R ? void 0 : 'always-white',
                                children: R
                            })
                        }),
                        null != N &&
                            (0, r.jsx)('div', {
                                className: l()(g.badge, g.__invalid_badgeBottom, g.redeemed),
                                children: (0, r.jsx)(c.Text, {
                                    variant: 'eyebrow',
                                    color: 'always-white',
                                    children: 'Applied'
                                })
                            })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: l()(g.loadingContainer, { [g.isLoading]: f || _ }),
                    children: (0, r.jsx)(c.$jN, {})
                })
            ]
        })
    );
}
function S() {
    let [e, t] = a.useState([]),
        [n, i] = a.useState([]),
        [o, m] = a.useState(),
        [x, f] = a.useState(),
        [b, C] = a.useState([]),
        [y, S] = a.useState([]),
        [k, I] = a.useState(!0);
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
                t(n), i(r), null == o && m(n[0].value), null == x && f(r[0].value);
            });
    }, [e, n, o, x, k]),
        a.useEffect(() => {
            k &&
                (I(!1),
                h.Z.forceReset(),
                (0, d.T)(),
                O().then((e) => {
                    C(e.trial.sort((e, t) => e.id.localeCompare(t.id))), S(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [k]);
    let w = async () => {
            null != o && (await j(o, 'trial'), I(!0));
        },
        R = async () => {
            null != x && (await j(x, 'discount'), I(!0));
        },
        Z = async () => {
            await N(), I(!0);
        };
    return (0, r.jsx)(c.zJl, {
        className: l()(_.panel),
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
                                    onClick: Z,
                                    children: 'Clear all User Offers'
                                }),
                                (0, r.jsx)(c.zxk, {
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: () => (0, u.w9)(s.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    children: 'Clear Mobile Trials DismissibleContent'
                                }),
                                (0, r.jsx)(c.zxk, {
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: () => I(!0),
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
                                    select: (e) => m(e),
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
                                    select: (e) => f(e),
                                    popoutLayerContext: p.O$
                                }),
                                (0, r.jsx)(c.zxk, {
                                    onClick: R,
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
                                        forceRefetch: () => I(!0)
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
                                    E,
                                    {
                                        offer: e,
                                        offerOptions: n,
                                        forceRefetch: () => I(!0)
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
