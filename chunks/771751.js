n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
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
    f = n(246992),
    p = n(981631),
    b = n(474936),
    g = n(941469),
    v = n(509345);
let j = async () => {
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
    _ = async (e, t) => {
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
    T = async (e, t) => {
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
    S = async () => {
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
function y(e) {
    var t, n, l, o;
    let { offer: s, offerOptions: u, forceRefetch: h } = e,
        [f, p] = r.useState(!1),
        [g, j] = r.useState(!1),
        [_, N] = r.useState(!1),
        [S, y] = r.useState(!1);
    r.useEffect(() => {
        _ && y(!0);
        let e = setTimeout(() => {
            y(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [_]);
    let { id: I, expires_at: E, redeemed_at: Z, trial_id: w, subscription_trial: k, referrer: O } = s,
        R =
            null !==
                (n =
                    null ===
                        (t = u.find((e) => {
                            let { value: t } = e;
                            return t === w;
                        })) || void 0 === t
                        ? void 0
                        : t.label) && void 0 !== n
                ? n
                : 'Unknown';
    null != O && (R = ''.concat(R, ' from @').concat(O.username));
    let B = null != E,
        P = null != E && new Date(E).getTime() < Date.now(),
        L = (null == k ? void 0 : k.sku_id) === b.Si.TIER_0,
        A = async () => {
            N(!0), B ? await T(I, 'trial') : await (0, d.a)(s), h(), N(!1);
        };
    r.useEffect(() => {
        if (f) {
            let e = setTimeout(() => {
                p(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
        if (g) {
            let e = setTimeout(() => {
                j(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [f, g]);
    let D = 'Active';
    return (
        B && (D = 'Acknowledged'),
        P && (D = 'Expired'),
        (0, a.jsxs)('div', {
            className: i()(v.card, L ? v.gradientWrapperTier0 : v.gradientWrapperTier2),
            children: [
                (0, a.jsxs)('div', {
                    className: i()(v.row, v.nameRow),
                    children: [
                        (0, a.jsx)(c.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'always-white',
                            children: R
                        }),
                        (0, a.jsx)(c.Clickable, {
                            onClick: async () => {
                                N(!0), await C(I, 'trial'), h(), N(!1);
                            },
                            children: (0, a.jsx)(c.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: i()(v.icon, v.trashIcon)
                            })
                        })
                    ]
                }),
                (0, a.jsxs)(c.Clickable, {
                    className: i()(v.row, v.idRow),
                    onClick: () => {
                        (0, m.JG)(I), p(!0);
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Offer: ', I]
                        }),
                        f
                            ? (0, a.jsx)(c.CheckmarkLargeIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(v.icon, v.noMargin)
                              })
                            : (0, a.jsx)(c.CopyIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: v.icon
                              })
                    ]
                }),
                (0, a.jsxs)(c.Clickable, {
                    className: i()(v.row, v.idRow),
                    onClick: () => {
                        (0, m.JG)(w), j(!0);
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: ['Trial: ', w]
                        }),
                        g
                            ? (0, a.jsx)(c.CheckmarkLargeIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(v.icon, v.noMargin)
                              })
                            : (0, a.jsx)(c.CopyIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: v.icon
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
                                intervalType: null !== (l = null == k ? void 0 : k.interval) && void 0 !== l ? l : b.rV.MONTH,
                                intervalCount: null !== (o = null == k ? void 0 : k.interval_count) && void 0 !== o ? o : 1,
                                capitalize: !1
                            })
                        ]
                    })
                }),
                (0, a.jsxs)('div', {
                    className: v.badgeContainer,
                    children: [
                        (0, a.jsx)(c.Clickable, {
                            onClick: A,
                            className: i()(v.badge, v.clickable, {
                                [v.acked]: B,
                                [v.expired]: P
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === D ? void 0 : 'always-white',
                                children: D
                            })
                        }),
                        null != Z &&
                            (0, a.jsx)('div', {
                                className: i()(v.badge, v.__invalid_badgeBottom, v.redeemed),
                                children: (0, a.jsx)(c.Text, {
                                    variant: 'eyebrow',
                                    color: 'always-white',
                                    children: 'Redeemed'
                                })
                            })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: i()(v.loadingContainer, { [v.isLoading]: _ || S }),
                    children: (0, a.jsx)(c.Spinner, {})
                })
            ]
        })
    );
}
function I(e) {
    var t, n;
    let { offer: l, offerOptions: o, forceRefetch: s } = e,
        [u, h] = r.useState(!1),
        [x, f] = r.useState(!1),
        [p, b] = r.useState(!1),
        [g, j] = r.useState(!1);
    r.useEffect(() => {
        p && j(!0);
        let e = setTimeout(() => {
            j(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [p]);
    let { id: _, expires_at: N, applied_at: S, discount_id: y, discount: I } = l,
        E =
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
        Z = null != N,
        w = null != N && new Date(N).getTime() < Date.now(),
        k = async () => {
            b(!0), Z ? await T(_, 'discount') : await (0, d.a)(void 0, l), s(), b(!1);
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
                f(!1);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }
    }, [u, x]);
    let O = 'Active';
    return (
        w && (O = 'Expired'),
        Z && (O = 'Acknowledged'),
        (0, a.jsxs)('div', {
            className: i()(v.card, v.discount),
            children: [
                (0, a.jsxs)('div', {
                    className: i()(v.row, v.nameRow),
                    children: [
                        (0, a.jsx)(c.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'text-normal',
                            children: E
                        }),
                        (0, a.jsx)(c.Clickable, {
                            onClick: async () => {
                                b(!0), await C(_, 'discount'), s(), b(!1);
                            },
                            children: (0, a.jsx)(c.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: i()(v.icon, v.trashIcon)
                            })
                        })
                    ]
                }),
                (0, a.jsxs)(c.Clickable, {
                    className: i()(v.row, v.idRow),
                    onClick: () => {
                        (0, m.JG)(_), h(!0);
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Offer: ', _]
                        }),
                        u
                            ? (0, a.jsx)(c.CheckmarkLargeIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(v.icon, v.noMargin)
                              })
                            : (0, a.jsx)(c.CopyIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: v.icon
                              })
                    ]
                }),
                (0, a.jsxs)(c.Clickable, {
                    className: i()(v.row, v.idRow),
                    onClick: () => {
                        (0, m.JG)(y), f(!0);
                    },
                    children: [
                        (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: ['Discount: ', y]
                        }),
                        x
                            ? (0, a.jsx)(c.CheckmarkLargeIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: i()(v.icon, v.noMargin)
                              })
                            : (0, a.jsx)(c.CopyIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: v.icon
                              })
                    ]
                }),
                (null == I ? void 0 : I.amount) != null &&
                    (0, a.jsx)('div', {
                        children: (0, a.jsxs)(c.Text, {
                            variant: 'eyebrow',
                            color: 'text-normal',
                            children: [I.amount, '% off']
                        })
                    }),
                (0, a.jsxs)('div', {
                    className: v.badgeContainer,
                    children: [
                        (0, a.jsx)(c.Clickable, {
                            onClick: k,
                            className: i()(v.badge, v.clickable, {
                                [v.acked]: Z,
                                [v.expired]: w
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'Acknowledged' === O ? void 0 : 'always-white',
                                children: O
                            })
                        }),
                        null != S &&
                            (0, a.jsx)('div', {
                                className: i()(v.badge, v.__invalid_badgeBottom, v.redeemed),
                                children: (0, a.jsx)(c.Text, {
                                    variant: 'eyebrow',
                                    color: 'always-white',
                                    children: 'Applied'
                                })
                            })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: i()(v.loadingContainer, { [v.isLoading]: p || g }),
                    children: (0, a.jsx)(c.Spinner, {})
                })
            ]
        })
    );
}
function E() {
    let [e, t] = r.useState([]),
        [n, l] = r.useState([]),
        [o, m] = r.useState(),
        [x, p] = r.useState(),
        [b, C] = r.useState([]),
        [T, E] = r.useState([]),
        [Z, w] = r.useState(!0);
    r.useEffect(() => {
        (0 === e.length || 0 === n.length || Z) &&
            j().then((e) => {
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
    }, [e, n, o, x, Z]),
        r.useEffect(() => {
            Z &&
                (w(!1),
                h.Z.forceReset(),
                (0, d.T)(),
                N().then((e) => {
                    C(e.trial.sort((e, t) => e.id.localeCompare(t.id))), E(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [Z]);
    let k = async () => {
            null != o && (await _(o, 'trial'), w(!0));
        },
        O = async () => {
            null != x && (await _(x, 'discount'), w(!0));
        },
        R = async () => {
            await S(), w(!0);
        };
    return (0, a.jsx)(c.ScrollerThin, {
        className: i()(g.panel),
        children: (0, a.jsxs)('div', {
            className: v.panelInner,
            children: [
                (0, a.jsxs)('section', {
                    className: v.section,
                    children: [
                        (0, a.jsx)(c.Heading, {
                            variant: 'heading-md/semibold',
                            children: 'Utils'
                        }),
                        (0, a.jsxs)('div', {
                            className: v.buttons,
                            children: [
                                (0, a.jsx)(c.Button, {
                                    size: c.Button.Sizes.SMALL,
                                    onClick: R,
                                    children: 'Clear all User Offers'
                                }),
                                (0, a.jsx)(c.Button, {
                                    size: c.Button.Sizes.SMALL,
                                    onClick: () => (0, u.w9)(s.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    children: 'Clear Mobile Trials DismissibleContent'
                                }),
                                (0, a.jsx)(c.Button, {
                                    size: c.Button.Sizes.SMALL,
                                    onClick: () => w(!0),
                                    children: 'Refresh DevTools'
                                })
                            ]
                        })
                    ]
                }),
                (0, a.jsxs)('section', {
                    className: v.section,
                    children: [
                        (0, a.jsx)(c.Heading, {
                            variant: 'heading-md/semibold',
                            children: 'Create a Trial Offer'
                        }),
                        (0, a.jsxs)('div', {
                            className: v.inputRow,
                            children: [
                                (0, a.jsx)(c.Select, {
                                    className: v.input,
                                    options: e,
                                    isSelected: (e) => o === e,
                                    placeholder: 'Trial Type',
                                    serialize: (e) => String(e),
                                    select: (e) => m(e),
                                    popoutLayerContext: f.O$
                                }),
                                (0, a.jsx)(c.Button, {
                                    onClick: k,
                                    children: 'Create'
                                })
                            ]
                        })
                    ]
                }),
                (0, a.jsxs)('section', {
                    className: v.section,
                    children: [
                        (0, a.jsx)(c.Heading, {
                            variant: 'heading-md/semibold',
                            children: 'Create a Discount Offer'
                        }),
                        (0, a.jsxs)('div', {
                            className: v.inputRow,
                            children: [
                                (0, a.jsx)(c.Select, {
                                    className: v.input,
                                    options: n,
                                    isSelected: (e) => x === e,
                                    placeholder: 'Discount Type',
                                    serialize: (e) => String(e),
                                    select: (e) => p(e),
                                    popoutLayerContext: f.O$
                                }),
                                (0, a.jsx)(c.Button, {
                                    onClick: O,
                                    children: 'Create'
                                })
                            ]
                        })
                    ]
                }),
                b.length > 0 &&
                    (0, a.jsxs)('section', {
                        className: v.section,
                        children: [
                            (0, a.jsx)(c.Heading, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Trial Offers'
                            }),
                            b.map((t) =>
                                (0, a.jsx)(
                                    y,
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
                T.length > 0 &&
                    (0, a.jsxs)('section', {
                        className: v.section,
                        children: [
                            (0, a.jsx)(c.Heading, {
                                variant: 'heading-md/semibold',
                                children: 'Existing Discount Offers'
                            }),
                            T.map((e) =>
                                (0, a.jsx)(
                                    I,
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
