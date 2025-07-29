(n.d(t, {
    ZP: () => F,
    dz: () => U
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(913527),
    u = n.n(c),
    d = n(442837),
    _ = n(952265),
    f = n(780384),
    p = n(755721),
    h = n(481060),
    m = n(410030),
    g = n(607070),
    E = n(55358),
    b = n(703656),
    y = n(483444),
    O = n(599250),
    v = n(424218),
    I = n(74538),
    T = n(960048),
    S = n(861990),
    A = n(98278),
    N = n(639119),
    C = n(767714),
    R = n(382791),
    P = n(474936),
    w = n(981631),
    D = n(388032),
    L = n(110588),
    x = n(867250);
function M(e) {
    if (null == e) return null;
    let t = u()(e),
        n = t.diff(u()(), 'h');
    if (n > 24) {
        let e = t.diff(u()(), 'd');
        return D.intl.formatToPlainString(D.t.xs9VPj, { numDays: e });
    }
    if (n > 1) return D.intl.formatToPlainString(D.t['p7KX5+'], { numHours: n });
    let r = t.diff(u()(), 'minutes');
    return D.intl.formatToPlainString(D.t['XtQ+Ag'], { numMinutes: r });
}
function k(e) {
    var t, n, i;
    let { className: a, children: s, withBottomMargin: l, discountOffer: c, trialOffer: u } = e,
        d = null != (t = null == u ? void 0 : u.expires_at) ? t : null == c ? void 0 : c.expires_at,
        _ = null == u ? void 0 : u.subscription_trial,
        f = null != (i = null != (n = e.subscriptionTier) ? n : null == _ ? void 0 : _.sku_id) ? i : P.Si.TIER_2;
    return (0, r.jsxs)('div', {
        className: o()(a, L.gradientUpsellWrapper, {
            [L.gradientUpsellWrapperTier0]: f === P.Si.TIER_0,
            [L.gradientUpsellWrapperTier2]: f === P.Si.TIER_2,
            [L.gradientUpsellWrapperWithBottomMargin]: l
        }),
        children: [
            (0, r.jsxs)('div', {
                className: L.logo,
                children: [
                    (0, r.jsx)(h.SrA, {
                        size: 'md',
                        color: 'currentColor',
                        className: L.logoIcon
                    }),
                    f === P.Si.TIER_0 && (0, r.jsx)(O.Z, { className: L.logoWordmark }),
                    f === P.Si.TIER_2 && (0, r.jsx)(y.Z, { className: L.logoWordmark })
                ]
            }),
            (0, r.jsx)(h.Text, {
                variant: 'text-md/medium',
                className: L.copy,
                color: 'none',
                children: s
            }),
            (0, r.jsx)(R.Cy, {
                text: null != c ? D.intl.formatToPlainString(D.t.iiLbvr, { percent: c.discount.amount }) : D.intl.string(D.t.IBYG5e),
                colorOptions: f === P.Si.TIER_0 ? R.VE.PREMIUM_TIER_0_WHITE_FILL : R.VE.PREMIUM_TIER_2_WHITE_FILL
            }),
            (0, r.jsx)(h.Text, {
                variant: 'eyebrow',
                className: L.countdownText,
                children: M(d)
            })
        ]
    });
}
function j(e) {
    var t, n;
    let { className: a, onClose: o, subscriptionTier: s, analyticsLocationObject: l, trialOffer: c, discountOffer: u } = e,
        [d, _] = i.useState(!1),
        f =
            null != u
                ? D.intl.formatToPlainString(D.t.bkQ4bG, { percent: u.discount.amount })
                : (0, I.Rt)({
                      intervalType: null == c || null == (t = c.subscription_trial) ? void 0 : t.interval,
                      intervalCount: null == c || null == (n = c.subscription_trial) ? void 0 : n.interval_count
                  });
    return (0, r.jsx)(C.Z, {
        className: a,
        subscriptionTier: s,
        submitting: d,
        premiumModalAnalyticsLocation: l,
        size: p.zx.Sizes.MEDIUM,
        color: p.zx.Colors.GREEN,
        onClick: () => {
            _(!0);
        },
        onSubscribeModalClose: (e) => {
            (_(!1), e && (null == o || o()));
        },
        textOptions: { textOverride: f }
    });
}
function U(e) {
    var t, n;
    let i = null == (t = (0, N.N)()) ? void 0 : t.subscription_trial,
        a = null != (n = null == i ? void 0 : i.sku_id) ? n : P.Si.TIER_2;
    return (0, r.jsx)(h.Text, {
        variant: 'text-xs/bold',
        className: o()(L.trialBadge, e.className, {
            [L.trialBadgeGradientTier0]: a === P.Si.TIER_0,
            [L.trialBadgeGradientTier2]: a === P.Si.TIER_2
        }),
        color: 'none',
        children: (0, I.a5)({
            intervalType: null == i ? void 0 : i.interval,
            intervalCount: null == i ? void 0 : i.interval_count
        })
    });
}
function G(e) {
    let { subscriptionTier: t, onClose: n, analyticsLocationObject: i, trialOffer: a, discountOffer: o } = e;
    return (0, r.jsxs)('div', {
        className: L.footer,
        children: [
            (0, r.jsx)(p.zx, {
                onClick: n,
                size: p.zx.Sizes.SMALL,
                look: p.iL.BLANK,
                className: L.cancelButton,
                children: D.intl.string(D.t.cpT0Cg)
            }),
            (0, r.jsx)(j, {
                className: L.subscribeButton,
                subscriptionTier: t,
                analyticsLocationObject: i,
                onClose: n,
                discountOffer: o,
                trialOffer: a
            })
        ]
    });
}
function B(e) {
    let { onClose: t, analyticsLocationObject: n } = e,
        i = (0, N.N)();
    return (0, r.jsxs)('div', {
        className: L.tryOutUpsellContainer,
        children: [
            (0, r.jsx)(R.Cy, {
                className: L.topRimPill,
                text: D.intl.string(D.t['8CVUra']),
                colorOptions: R.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
            }),
            (0, r.jsx)(h.X6q, {
                variant: 'heading-md/semibold',
                color: 'text-default',
                children: D.intl.format(D.t['fF+cgY'], { onClick: () => (0, A.z)() })
            }),
            (0, r.jsx)(j, {
                trialOffer: i,
                className: L.subscribeButtonWide,
                subscriptionTier: P.Si.TIER_2,
                analyticsLocationObject: n,
                onClose: t
            }),
            (0, r.jsx)(h.Text, {
                variant: 'eyebrow',
                className: L.countdownTextInSetting,
                children: M(null == i ? void 0 : i.expires_at)
            })
        ]
    });
}
function V(e) {
    let { headingText: t, context: n, children: i, trialOffer: a, discountOffer: o } = e;
    return (0, r.jsxs)('div', {
        className: L.contentContainer,
        children: [
            (0, r.jsx)(h.X6q, {
                variant: 'heading-xl/semibold',
                children: t
            }),
            null != n &&
                (0, r.jsx)(h.Text, {
                    className: L.context,
                    variant: 'text-md/normal',
                    children: n
                }),
            (0, r.jsx)(k, {
                trialOffer: a,
                discountOffer: o,
                children: i
            })
        ]
    });
}
function F(e) {
    let { headingText: t, context: i, children: a, onClose: s, type: c, subscriptionTier: u, analyticsLocationObject: p, trialOffer: y, discountOffer: O } = e,
        A = (0, d.e7)([g.Z], () => g.Z.useReducedMotion),
        N = (0, m.ZP)(),
        C = (0, v.BU)(S.zz / v.XD, { useKibibytes: !0 });
    switch (c) {
        case P.cd.EMPTY_STICKER_PICKER_UPSELL:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(h.P3F, {
                        className: L.upsellClose,
                        onClick: s,
                        children: (0, r.jsx)(h.Dio, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: L.contentContainer,
                        children: [
                            (0, r.jsx)('img', {
                                className: L.upsellImage,
                                src: x,
                                alt: D.intl.string(D.t.do7AoK)
                            }),
                            (0, r.jsx)(h.X6q, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: D.intl.string(D.t.HEm04O)
                            }),
                            (0, r.jsx)(k, {
                                trialOffer: y,
                                discountOffer: O,
                                children: D.intl.format(D.t['2HoFKC'], {
                                    planName: (0, I.jP)(u),
                                    onClick: () => (0, b.uL)(w.Z5c.APPLICATION_STORE)
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(G, {
                        subscriptionTier: u,
                        onClose: s,
                        analyticsLocationObject: {
                            section: w.jXE.EXPRESSION_PICKER,
                            object: w.qAy.BUTTON_CTA
                        },
                        trialOffer: y,
                        discountOffer: O
                    })
                ]
            });
        case P.cd.STICKER_PICKER_UPSELL:
            return (
                l()(null != a, 'You must specify children for this upsell type'),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: L.contentContainer,
                            children: [
                                (0, r.jsx)('img', {
                                    className: L.upsellImage,
                                    src: x,
                                    alt: D.intl.string(D.t.do7AoK)
                                }),
                                (0, r.jsx)(h.X6q, {
                                    variant: 'heading-xl/bold',
                                    color: 'header-primary',
                                    children: D.intl.string(D.t.jJG1pq)
                                }),
                                (0, r.jsx)(k, {
                                    trialOffer: y,
                                    discountOffer: O,
                                    children: D.intl.format(D.t['2HoFKC'], {
                                        planName: (0, I.jP)(u),
                                        onClick: () => (0, b.uL)(w.Z5c.APPLICATION_STORE)
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)(G, {
                            subscriptionTier: u,
                            onClose: s,
                            analyticsLocationObject: {
                                section: w.jXE.EXPRESSION_PICKER,
                                object: w.qAy.BUTTON_CTA
                            },
                            trialOffer: y,
                            discountOffer: O
                        })
                    ]
                })
            );
        case P.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
            l()(null != a, 'You must specify children for this upsell type');
            let R = (0, f.ap)(N) ? n(537381) : n(341048);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        className: L.contentContainer,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                className: L.upsellImage,
                                src: R
                            }),
                            (0, r.jsx)(h.X6q, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: D.intl.string(D.t['1SsvhY'])
                            }),
                            (0, r.jsx)(k, {
                                trialOffer: y,
                                discountOffer: O,
                                children: D.intl.format(D.t.md4nPz, {
                                    planName: (0, I.jP)(u),
                                    onClick: () => (0, b.uL)(w.Z5c.APPLICATION_STORE)
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(G, {
                        subscriptionTier: u,
                        onClose: s,
                        analyticsLocationObject: {
                            section: w.jXE.EMOJI_PICKER_POPOUT,
                            object: w.qAy.BUTTON_CTA
                        },
                        trialOffer: y,
                        discountOffer: O
                    })
                ]
            });
        case P.cd.UPLOAD_ERROR_UPSELL:
        case P.cd.BURST_REACTION_UPSELL:
        case P.cd.STREAM_QUALITY_UPSELL:
        case P.cd.MESSAGE_LENGTH_UPSELL:
            let M;
            switch (c) {
                case P.cd.UPLOAD_ERROR_UPSELL:
                    M = D.intl.format(D.t.F4qoDw, {
                        planName: (0, I.jP)(u),
                        premiumMaxSize: u === P.Si.TIER_0 ? D.intl.string(D.t['C/Rhb2']) : C,
                        onClick: () => {
                            ((0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s());
                        }
                    });
                    break;
                case P.cd.BURST_REACTION_UPSELL:
                    M = D.intl.format(D.t.poib9P, {
                        planName: (0, I.jP)(u),
                        onClick: () => {
                            ((0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s());
                        }
                    });
                    break;
                case P.cd.STREAM_QUALITY_UPSELL:
                    M = D.intl.format(D.t.WspKp6, {
                        onClick: () => {
                            ((0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s(), (0, _.pT)());
                        }
                    });
                    break;
                case P.cd.MESSAGE_LENGTH_UPSELL:
                    M = D.intl.format(D.t.GUHtEx, {
                        premiumMaxMessageLength: w.en1,
                        onClick: () => {
                            ((0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s());
                        }
                    });
            }
            return (
                l()(null != M, 'There must be some upsell context'),
                (0, r.jsxs)('div', {
                    className: L.contentContainer,
                    children: [
                        (0, r.jsx)(h.X6q, {
                            variant: 'heading-xl/bold',
                            color: 'header-primary',
                            children: t
                        }),
                        (0, r.jsx)(h.Text, {
                            variant: 'text-md/normal',
                            children: i
                        }),
                        (0, r.jsx)(k, {
                            trialOffer: y,
                            discountOffer: O,
                            children: M
                        })
                    ]
                })
            );
        case P.cd.BURST_REACTION_QUICK_ACTION_UPSELL:
            return (0, r.jsxs)('div', {
                className: L.contentContainer,
                children: [
                    (0, r.jsx)(h.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        children: t
                    }),
                    (0, r.jsx)(h.Text, {
                        variant: 'text-md/normal',
                        children: i
                    }),
                    (0, r.jsx)(k, {
                        trialOffer: y,
                        discountOffer: O,
                        children: D.intl.format(D.t.poib9P, {
                            planName: (0, I.jP)(u),
                            onClick: () => (0, b.uL)(w.Z5c.APPLICATION_STORE)
                        })
                    }),
                    (0, r.jsx)(j, {
                        className: L.upsellButton,
                        subscriptionTier: u,
                        analyticsLocationObject: p,
                        onClose: s,
                        trialOffer: y,
                        discountOffer: O
                    })
                ]
            });
        case P.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
            return (
                l()(null != a, 'You must specify children for this upsell type'),
                (0, r.jsx)(k, {
                    trialOffer: y,
                    discountOffer: O,
                    children: D.intl.format(D.t['5KMAnJ'], {
                        onClick: () => {
                            ((0, b.uL)(w.Z5c.APPLICATION_STORE), (0, E.C)());
                        }
                    })
                })
            );
        case P.cd.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
            return (0, r.jsxs)('div', {
                className: o()(L.messageLengthUpsellContainer, { [L.messageLengthUpsellAppearAnimation]: !A }),
                children: [
                    (0, r.jsx)(h.Text, {
                        variant: 'text-lg/bold',
                        color: 'status-danger',
                        children: i
                    }),
                    (0, r.jsx)(h.X6q, {
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        className: L.messageLengthUpsellHeader,
                        children: D.intl.string(D.t.ZvHg3N)
                    }),
                    (0, r.jsx)('div', { className: L.divider }),
                    (0, r.jsx)(k, {
                        trialOffer: y,
                        discountOffer: O,
                        className: L.messageLengthBrandedContainer,
                        subscriptionTier: u,
                        children: D.intl.format(D.t.GUHtEx, {
                            premiumMaxMessageLength: w.en1,
                            onClick: () => {
                                ((0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s());
                            }
                        })
                    }),
                    (0, r.jsx)(j, {
                        subscriptionTier: u,
                        analyticsLocationObject: p,
                        onClose: s,
                        trialOffer: y,
                        discountOffer: O
                    })
                ]
            });
        case P.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL:
        case P.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
            return (0, r.jsx)(B, {});
        case P.cd.GUILD_CAP_MODAL_UPSELL:
        case P.cd.PREMIUM_GUILD_IDENTITY_MODAL:
        case P.cd.CUSTOM_PROFILE_UPSELL:
        case P.cd.VIDEO_BACKGROUNDS_MODAL:
        case P.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
        case P.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
        case P.cd.EMOJI_PICKER_EMOJI_CLICKED:
        case P.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
        case P.cd.APP_ICON_UPSELL:
        case P.cd.CLIENT_THEMES_UPSELL:
        case P.cd.TRY_IT_OUT_MODAL_UPSELL:
        case P.cd.VOICE_FILTERS_UPSELL:
            return (0, r.jsx)(V, {
                trialOffer: y,
                discountOffer: O,
                headingText: t,
                context: i,
                children: a
            });
        default:
            return (
                T.Z.captureMessage('Possible mishandling of a PremiumUpsellType: '.concat(c)),
                (0, r.jsx)(V, {
                    headingText: t,
                    context: i,
                    children: a,
                    trialOffer: y,
                    discountOffer: O
                })
            );
    }
}
