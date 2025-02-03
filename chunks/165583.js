n.d(t, {
    ZP: () => F,
    dz: () => U
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    l = n.n(o),
    u = n(913527),
    c = n.n(u),
    d = n(442837),
    f = n(952265),
    _ = n(780384),
    p = n(481060),
    h = n(410030),
    m = n(607070),
    g = n(238302),
    E = n(703656),
    v = n(483444),
    y = n(599250),
    I = n(424218),
    b = n(74538),
    T = n(960048),
    S = n(861990),
    A = n(98278),
    N = n(639119),
    C = n(197115),
    R = n(823188),
    O = n(474936),
    D = n(981631),
    x = n(388032),
    L = n(161253),
    P = n(867250);
function w(e) {
    if (null == e) return null;
    let t = c()(e),
        n = t.diff(c()(), 'h');
    if (n > 24) {
        let e = t.diff(c()(), 'd');
        return x.intl.formatToPlainString(x.t.xs9VPj, { numDays: e });
    }
    if (n > 1) return x.intl.formatToPlainString(x.t['p7KX5+'], { numHours: n });
    let i = t.diff(c()(), 'minutes');
    return x.intl.formatToPlainString(x.t['XtQ+Ag'], { numMinutes: i });
}
function M(e) {
    var t, n, r;
    let { className: a, children: o, withBottomMargin: l, discountOffer: u, trialOffer: c } = e,
        d = null !== (t = null == c ? void 0 : c.expires_at) && void 0 !== t ? t : null == u ? void 0 : u.expires_at,
        f = null == c ? void 0 : c.subscription_trial,
        _ = null !== (r = null !== (n = e.subscriptionTier) && void 0 !== n ? n : null == f ? void 0 : f.sku_id) && void 0 !== r ? r : O.Si.TIER_2;
    return (0, i.jsxs)('div', {
        className: s()(a, L.gradientUpsellWrapper, {
            [L.gradientUpsellWrapperTier0]: _ === O.Si.TIER_0,
            [L.gradientUpsellWrapperTier2]: _ === O.Si.TIER_2,
            [L.gradientUpsellWrapperWithBottomMargin]: l
        }),
        children: [
            (0, i.jsxs)('div', {
                className: L.logo,
                children: [
                    (0, i.jsx)(p.SrA, {
                        size: 'md',
                        color: 'currentColor',
                        className: L.logoIcon
                    }),
                    _ === O.Si.TIER_0 && (0, i.jsx)(y.Z, { className: L.logoWordmark }),
                    _ === O.Si.TIER_2 && (0, i.jsx)(v.Z, { className: L.logoWordmark })
                ]
            }),
            (0, i.jsx)(p.Text, {
                variant: 'text-md/medium',
                className: L.copy,
                color: 'none',
                children: o
            }),
            (0, i.jsx)(R.Cy, {
                text: null != u ? x.intl.formatToPlainString(x.t.iiLbvr, { percent: u.discount.amount }) : x.intl.string(x.t.IBYG5e),
                colorOptions: _ === O.Si.TIER_0 ? R.VE.PREMIUM_TIER_0_WHITE_FILL : R.VE.PREMIUM_TIER_2_WHITE_FILL
            }),
            (0, i.jsx)(p.Text, {
                variant: 'eyebrow',
                className: L.countdownText,
                children: w(d)
            })
        ]
    });
}
function k(e) {
    var t, n;
    let { className: a, onClose: s, subscriptionTier: o, analyticsLocationObject: l, trialOffer: u, discountOffer: c } = e,
        [d, f] = r.useState(!1),
        _ =
            null != c
                ? x.intl.formatToPlainString(x.t.bkQ4bG, { percent: c.discount.amount })
                : (0, b.Rt)({
                      intervalType: null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.interval,
                      intervalCount: null == u ? void 0 : null === (n = u.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                  });
    return (0, i.jsx)(C.Z, {
        className: a,
        subscriptionTier: o,
        submitting: d,
        premiumModalAnalyticsLocation: l,
        size: p.zxk.Sizes.MEDIUM,
        color: p.zxk.Colors.GREEN,
        onClick: () => {
            f(!0);
        },
        onSubscribeModalClose: (e) => {
            f(!1), e && (null == s || s());
        },
        buttonText: _
    });
}
function U(e) {
    var t, n;
    let r = null === (t = (0, N.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        a = null !== (n = null == r ? void 0 : r.sku_id) && void 0 !== n ? n : O.Si.TIER_2;
    return (0, i.jsx)(p.Text, {
        variant: 'text-xs/bold',
        className: s()(L.trialBadge, e.className, {
            [L.trialBadgeGradientTier0]: a === O.Si.TIER_0,
            [L.trialBadgeGradientTier2]: a === O.Si.TIER_2
        }),
        color: 'none',
        children: (0, b.a5)({
            intervalType: null == r ? void 0 : r.interval,
            intervalCount: null == r ? void 0 : r.interval_count
        })
    });
}
function G(e) {
    let { subscriptionTier: t, onClose: n, analyticsLocationObject: r, trialOffer: a, discountOffer: s } = e;
    return (0, i.jsxs)('div', {
        className: L.footer,
        children: [
            (0, i.jsx)(p.zxk, {
                onClick: n,
                size: p.zxk.Sizes.SMALL,
                look: p.iLD.BLANK,
                className: L.cancelButton,
                children: x.intl.string(x.t.cpT0Cg)
            }),
            (0, i.jsx)(k, {
                className: L.subscribeButton,
                subscriptionTier: t,
                analyticsLocationObject: r,
                onClose: n,
                discountOffer: s,
                trialOffer: a
            })
        ]
    });
}
function B(e) {
    let { onClose: t, analyticsLocationObject: n } = e,
        r = (0, N.N)();
    return (0, i.jsxs)('div', {
        className: L.tryOutUpsellContainer,
        children: [
            (0, i.jsx)(R.Cy, {
                className: L.topRimPill,
                text: x.intl.string(x.t['8CVUra']),
                colorOptions: R.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
            }),
            (0, i.jsx)(p.X6q, {
                variant: 'heading-md/semibold',
                color: 'text-normal',
                children: x.intl.format(x.t['fF+cgY'], { onClick: () => (0, A.z)() })
            }),
            (0, i.jsx)(k, {
                trialOffer: r,
                className: L.subscribeButtonWide,
                subscriptionTier: O.Si.TIER_2,
                analyticsLocationObject: n,
                onClose: t
            }),
            (0, i.jsx)(p.Text, {
                variant: 'eyebrow',
                className: L.countdownTextInSetting,
                children: w(null == r ? void 0 : r.expires_at)
            })
        ]
    });
}
function Z(e) {
    let { headingText: t, context: n, children: r, trialOffer: a, discountOffer: s } = e;
    return (0, i.jsxs)('div', {
        className: L.contentContainer,
        children: [
            (0, i.jsx)(p.X6q, {
                variant: 'heading-xl/semibold',
                children: t
            }),
            null != n &&
                (0, i.jsx)(p.Text, {
                    className: L.context,
                    variant: 'text-md/normal',
                    children: n
                }),
            (0, i.jsx)(M, {
                trialOffer: a,
                discountOffer: s,
                children: r
            })
        ]
    });
}
function F(e) {
    let { headingText: t, context: r, children: a, onClose: o, type: u, subscriptionTier: c, analyticsLocationObject: v, trialOffer: y, discountOffer: A } = e,
        N = (0, d.e7)([m.Z], () => m.Z.useReducedMotion),
        C = (0, h.ZP)(),
        R = (0, I.BU)(S.zz / I.XD, { useKibibytes: !0 });
    switch (u) {
        case O.cd.EMPTY_STICKER_PICKER_UPSELL:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(p.P3F, {
                        className: L.upsellClose,
                        onClick: o,
                        children: (0, i.jsx)(p.Dio, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: L.contentContainer,
                        children: [
                            (0, i.jsx)('img', {
                                className: L.upsellImage,
                                src: P,
                                alt: x.intl.string(x.t.do7AoK)
                            }),
                            (0, i.jsx)(p.X6q, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: x.intl.string(x.t.HEm04O)
                            }),
                            (0, i.jsx)(M, {
                                trialOffer: y,
                                discountOffer: A,
                                children: x.intl.format(x.t['2HoFKC'], {
                                    planName: (0, b.jP)(c),
                                    onClick: () => (0, E.uL)(D.Z5c.APPLICATION_STORE)
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(G, {
                        subscriptionTier: c,
                        onClose: o,
                        analyticsLocationObject: {
                            section: D.jXE.EXPRESSION_PICKER,
                            object: D.qAy.BUTTON_CTA
                        },
                        trialOffer: y,
                        discountOffer: A
                    })
                ]
            });
        case O.cd.STICKER_PICKER_UPSELL:
            return (
                l()(null != a, 'You must specify children for this upsell type'),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: L.contentContainer,
                            children: [
                                (0, i.jsx)('img', {
                                    className: L.upsellImage,
                                    src: P,
                                    alt: x.intl.string(x.t.do7AoK)
                                }),
                                (0, i.jsx)(p.X6q, {
                                    variant: 'heading-xl/bold',
                                    color: 'header-primary',
                                    children: x.intl.string(x.t.jJG1pq)
                                }),
                                (0, i.jsx)(M, {
                                    trialOffer: y,
                                    discountOffer: A,
                                    children: x.intl.format(x.t['2HoFKC'], {
                                        planName: (0, b.jP)(c),
                                        onClick: () => (0, E.uL)(D.Z5c.APPLICATION_STORE)
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(G, {
                            subscriptionTier: c,
                            onClose: o,
                            analyticsLocationObject: {
                                section: D.jXE.EXPRESSION_PICKER,
                                object: D.qAy.BUTTON_CTA
                            },
                            trialOffer: y,
                            discountOffer: A
                        })
                    ]
                })
            );
        case O.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
            l()(null != a, 'You must specify children for this upsell type');
            let w = (0, _.ap)(C) ? n(537381) : n(341048);
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)('div', {
                        className: L.contentContainer,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                className: L.upsellImage,
                                src: w
                            }),
                            (0, i.jsx)(p.X6q, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: x.intl.string(x.t['1SsvhY'])
                            }),
                            (0, i.jsx)(M, {
                                trialOffer: y,
                                discountOffer: A,
                                children: x.intl.format(x.t.md4nPz, {
                                    planName: (0, b.jP)(c),
                                    onClick: () => (0, E.uL)(D.Z5c.APPLICATION_STORE)
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(G, {
                        subscriptionTier: c,
                        onClose: o,
                        analyticsLocationObject: {
                            section: D.jXE.EMOJI_PICKER_POPOUT,
                            object: D.qAy.BUTTON_CTA
                        },
                        trialOffer: y,
                        discountOffer: A
                    })
                ]
            });
        case O.cd.UPLOAD_ERROR_UPSELL:
        case O.cd.BURST_REACTION_UPSELL:
        case O.cd.STREAM_QUALITY_UPSELL:
        case O.cd.MESSAGE_LENGTH_UPSELL:
            let U;
            switch (u) {
                case O.cd.UPLOAD_ERROR_UPSELL:
                    U = x.intl.format(x.t.F4qoDw, {
                        planName: (0, b.jP)(c),
                        premiumMaxSize: c === O.Si.TIER_0 ? x.intl.string(x.t['C/Rhb2']) : R,
                        onClick: () => {
                            (0, E.uL)(D.Z5c.APPLICATION_STORE), null == o || o();
                        }
                    });
                    break;
                case O.cd.BURST_REACTION_UPSELL:
                    U = x.intl.format(x.t.poib9P, {
                        planName: (0, b.jP)(c),
                        onClick: () => {
                            (0, E.uL)(D.Z5c.APPLICATION_STORE), null == o || o();
                        }
                    });
                    break;
                case O.cd.STREAM_QUALITY_UPSELL:
                    U = x.intl.format(x.t.WspKp6, {
                        onClick: () => {
                            (0, E.uL)(D.Z5c.APPLICATION_STORE), null == o || o(), (0, f.pT)();
                        }
                    });
                    break;
                case O.cd.MESSAGE_LENGTH_UPSELL:
                    U = x.intl.format(x.t.GUHtEx, {
                        premiumMaxMessageLength: D.en1,
                        onClick: () => {
                            (0, E.uL)(D.Z5c.APPLICATION_STORE), null == o || o();
                        }
                    });
            }
            return (
                l()(null != U, 'There must be some upsell context'),
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)('div', {
                        className: L.contentContainer,
                        children: [
                            (0, i.jsx)(p.X6q, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: t
                            }),
                            (0, i.jsx)(p.Text, {
                                variant: 'text-md/normal',
                                children: r
                            }),
                            (0, i.jsx)(M, {
                                trialOffer: y,
                                discountOffer: A,
                                children: U
                            })
                        ]
                    })
                })
            );
        case O.cd.BURST_REACTION_QUICK_ACTION_UPSELL:
            return (0, i.jsxs)('div', {
                className: L.contentContainer,
                children: [
                    (0, i.jsx)(p.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        children: t
                    }),
                    (0, i.jsx)(p.Text, {
                        variant: 'text-md/normal',
                        children: r
                    }),
                    (0, i.jsx)(M, {
                        trialOffer: y,
                        discountOffer: A,
                        children: x.intl.format(x.t.poib9P, {
                            planName: (0, b.jP)(c),
                            onClick: () => (0, E.uL)(D.Z5c.APPLICATION_STORE)
                        })
                    }),
                    (0, i.jsx)(k, {
                        className: L.upsellButton,
                        subscriptionTier: c,
                        analyticsLocationObject: v,
                        onClose: o,
                        trialOffer: y,
                        discountOffer: A
                    })
                ]
            });
        case O.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
            return (
                l()(null != a, 'You must specify children for this upsell type'),
                (0, i.jsx)(M, {
                    trialOffer: y,
                    discountOffer: A,
                    children: x.intl.format(x.t['5KMAnJ'], {
                        onClick: () => {
                            (0, E.uL)(D.Z5c.APPLICATION_STORE), (0, g.Mo)();
                        }
                    })
                })
            );
        case O.cd.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
            return (0, i.jsxs)('div', {
                className: s()(L.messageLengthUpsellContainer, { [L.messageLengthUpsellAppearAnimation]: !N }),
                children: [
                    (0, i.jsx)(p.Text, {
                        variant: 'text-lg/bold',
                        color: 'status-danger',
                        children: r
                    }),
                    (0, i.jsx)(p.X6q, {
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        className: L.messageLengthUpsellHeader,
                        children: x.intl.string(x.t.ZvHg3N)
                    }),
                    (0, i.jsx)('div', { className: L.divider }),
                    (0, i.jsx)(M, {
                        trialOffer: y,
                        discountOffer: A,
                        className: L.messageLengthBrandedContainer,
                        subscriptionTier: c,
                        children: x.intl.format(x.t.GUHtEx, {
                            premiumMaxMessageLength: D.en1,
                            onClick: () => {
                                (0, E.uL)(D.Z5c.APPLICATION_STORE), null == o || o();
                            }
                        })
                    }),
                    (0, i.jsx)(k, {
                        subscriptionTier: c,
                        analyticsLocationObject: v,
                        onClose: o,
                        trialOffer: y,
                        discountOffer: A
                    })
                ]
            });
        case O.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL:
        case O.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
            return (0, i.jsx)(B, {});
        case O.cd.GUILD_CAP_MODAL_UPSELL:
        case O.cd.PREMIUM_GUILD_IDENTITY_MODAL:
        case O.cd.CUSTOM_PROFILE_UPSELL:
        case O.cd.VIDEO_BACKGROUNDS_MODAL:
        case O.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
        case O.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
        case O.cd.EMOJI_PICKER_EMOJI_CLICKED:
        case O.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
        case O.cd.APP_ICON_UPSELL:
        case O.cd.CLIENT_THEMES_UPSELL:
        case O.cd.TRY_IT_OUT_MODAL_UPSELL:
            return (0, i.jsx)(Z, {
                trialOffer: y,
                discountOffer: A,
                headingText: t,
                context: r,
                children: a
            });
        default:
            return (
                T.Z.captureMessage('Possible mishandling of a PremiumUpsellType: '.concat(u)),
                (0, i.jsx)(Z, {
                    headingText: t,
                    context: r,
                    children: a,
                    trialOffer: y,
                    discountOffer: A
                })
            );
    }
}
