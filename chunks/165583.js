r.d(n, {
    ZP: function () {
        return j;
    },
    dz: function () {
        return G;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(512722),
    c = r.n(u),
    d = r(913527),
    f = r.n(d),
    _ = r(442837),
    h = r(952265),
    p = r(780384),
    m = r(481060),
    g = r(410030),
    E = r(607070),
    v = r(238302),
    I = r(703656),
    T = r(483444),
    b = r(599250),
    y = r(424218),
    S = r(74538),
    A = r(960048),
    N = r(861990),
    C = r(98278),
    R = r(639119),
    O = r(197115),
    D = r(823188),
    L = r(474936),
    x = r(981631),
    w = r(388032),
    P = r(161253),
    M = r(867250);
function k(e) {
    if (null == e) return null;
    let n = f()(e),
        r = n.diff(f()(), 'h');
    if (r > 24) {
        let e = n.diff(f()(), 'd');
        return w.intl.formatToPlainString(w.t.xs9VPj, { numDays: e });
    }
    if (r > 1) return w.intl.formatToPlainString(w.t['p7KX5+'], { numHours: r });
    let i = n.diff(f()(), 'minutes');
    return w.intl.formatToPlainString(w.t['XtQ+Ag'], { numMinutes: i });
}
function U(e) {
    var n, r, i;
    let { className: s, children: o, withBottomMargin: u, discountOffer: c, trialOffer: d } = e,
        f = null !== (n = null == d ? void 0 : d.expires_at) && void 0 !== n ? n : null == c ? void 0 : c.expires_at,
        _ = null == d ? void 0 : d.subscription_trial,
        h = null !== (i = null !== (r = e.subscriptionTier) && void 0 !== r ? r : null == _ ? void 0 : _.sku_id) && void 0 !== i ? i : L.Si.TIER_2;
    return (0, a.jsxs)('div', {
        className: l()(s, P.gradientUpsellWrapper, {
            [P.gradientUpsellWrapperTier0]: h === L.Si.TIER_0,
            [P.gradientUpsellWrapperTier2]: h === L.Si.TIER_2,
            [P.gradientUpsellWrapperWithBottomMargin]: u
        }),
        children: [
            (0, a.jsxs)('div', {
                className: P.logo,
                children: [
                    (0, a.jsx)(m.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: P.logoIcon
                    }),
                    h === L.Si.TIER_0 && (0, a.jsx)(b.Z, { className: P.logoWordmark }),
                    h === L.Si.TIER_2 && (0, a.jsx)(T.Z, { className: P.logoWordmark })
                ]
            }),
            (0, a.jsx)(m.Text, {
                variant: 'text-md/medium',
                className: P.copy,
                color: 'none',
                children: o
            }),
            (0, a.jsx)(D.Cy, {
                text: null != c ? w.intl.formatToPlainString(w.t.iiLbvr, { percent: c.discount.amount }) : w.intl.string(w.t.IBYG5e),
                colorOptions: h === L.Si.TIER_0 ? D.VE.PREMIUM_TIER_0_WHITE_FILL : D.VE.PREMIUM_TIER_2_WHITE_FILL
            }),
            (0, a.jsx)(m.Text, {
                variant: 'eyebrow',
                className: P.countdownText,
                children: k(f)
            })
        ]
    });
}
function B(e) {
    var n, r;
    let { className: i, onClose: o, subscriptionTier: l, analyticsLocationObject: u, trialOffer: c, discountOffer: d } = e,
        [f, _] = s.useState(!1),
        h =
            null != d
                ? w.intl.formatToPlainString(w.t.bkQ4bG, { percent: d.discount.amount })
                : (0, S.Rt)({
                      intervalType: null == c ? void 0 : null === (n = c.subscription_trial) || void 0 === n ? void 0 : n.interval,
                      intervalCount: null == c ? void 0 : null === (r = c.subscription_trial) || void 0 === r ? void 0 : r.interval_count
                  });
    return (0, a.jsx)(O.Z, {
        className: i,
        subscriptionTier: l,
        submitting: f,
        premiumModalAnalyticsLocation: u,
        size: m.Button.Sizes.MEDIUM,
        color: m.Button.Colors.GREEN,
        onClick: () => {
            _(!0);
        },
        onSubscribeModalClose: (e) => {
            _(!1), e && (null == o || o());
        },
        buttonText: h
    });
}
function G(e) {
    var n, r;
    let i = null === (n = (0, R.N)()) || void 0 === n ? void 0 : n.subscription_trial,
        s = null !== (r = null == i ? void 0 : i.sku_id) && void 0 !== r ? r : L.Si.TIER_2;
    return (0, a.jsx)(m.Text, {
        variant: 'text-xs/bold',
        className: l()(P.trialBadge, e.className, {
            [P.trialBadgeGradientTier0]: s === L.Si.TIER_0,
            [P.trialBadgeGradientTier2]: s === L.Si.TIER_2
        }),
        color: 'none',
        children: (0, S.a5)({
            intervalType: null == i ? void 0 : i.interval,
            intervalCount: null == i ? void 0 : i.interval_count
        })
    });
}
function Z(e) {
    let { subscriptionTier: n, onClose: r, analyticsLocationObject: i, trialOffer: s, discountOffer: o } = e;
    return (0, a.jsxs)('div', {
        className: P.footer,
        children: [
            (0, a.jsx)(m.Button, {
                onClick: r,
                size: m.Button.Sizes.SMALL,
                look: m.ButtonLooks.BLANK,
                className: P.cancelButton,
                children: w.intl.string(w.t.cpT0Cg)
            }),
            (0, a.jsx)(B, {
                className: P.subscribeButton,
                subscriptionTier: n,
                analyticsLocationObject: i,
                onClose: r,
                discountOffer: o,
                trialOffer: s
            })
        ]
    });
}
function F(e) {
    let { onClose: n, analyticsLocationObject: r } = e,
        i = (0, R.N)();
    return (0, a.jsxs)('div', {
        className: P.tryOutUpsellContainer,
        children: [
            (0, a.jsx)(D.Cy, {
                className: P.topRimPill,
                text: w.intl.string(w.t['8CVUra']),
                colorOptions: D.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
            }),
            (0, a.jsx)(m.Heading, {
                variant: 'heading-md/semibold',
                color: 'text-normal',
                children: w.intl.format(w.t['fF+cgY'], { onClick: () => (0, C.z)() })
            }),
            (0, a.jsx)(B, {
                trialOffer: i,
                className: P.subscribeButtonWide,
                subscriptionTier: L.Si.TIER_2,
                analyticsLocationObject: r,
                onClose: n
            }),
            (0, a.jsx)(m.Text, {
                variant: 'eyebrow',
                className: P.countdownTextInSetting,
                children: k(null == i ? void 0 : i.expires_at)
            })
        ]
    });
}
function V(e) {
    let { headingText: n, context: r, children: i, trialOffer: s, discountOffer: o } = e;
    return (0, a.jsxs)('div', {
        className: P.contentContainer,
        children: [
            (0, a.jsx)(m.Heading, {
                variant: 'heading-xl/semibold',
                children: n
            }),
            null != r &&
                (0, a.jsx)(m.Text, {
                    className: P.context,
                    variant: 'text-md/normal',
                    children: r
                }),
            (0, a.jsx)(U, {
                trialOffer: s,
                discountOffer: o,
                children: i
            })
        ]
    });
}
function j(e) {
    let { headingText: n, context: i, children: s, onClose: o, type: u, subscriptionTier: d, analyticsLocationObject: f, trialOffer: T, discountOffer: b } = e,
        C = (0, _.e7)([E.Z], () => E.Z.useReducedMotion),
        R = (0, g.ZP)(),
        O = (0, y.BU)(N.zz / y.XD, { useKibibytes: !0 });
    switch (u) {
        case L.cd.EMPTY_STICKER_PICKER_UPSELL:
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(m.Clickable, {
                        className: P.upsellClose,
                        onClick: o,
                        children: (0, a.jsx)(m.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    }),
                    (0, a.jsxs)('div', {
                        className: P.contentContainer,
                        children: [
                            (0, a.jsx)('img', {
                                className: P.upsellImage,
                                src: M,
                                alt: w.intl.string(w.t.do7AoK)
                            }),
                            (0, a.jsx)(m.Heading, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: w.intl.string(w.t.HEm04O)
                            }),
                            (0, a.jsx)(U, {
                                trialOffer: T,
                                discountOffer: b,
                                children: w.intl.format(w.t['2HoFKC'], {
                                    planName: (0, S.jP)(d),
                                    onClick: () => (0, I.uL)(x.Z5c.APPLICATION_STORE)
                                })
                            })
                        ]
                    }),
                    (0, a.jsx)(Z, {
                        subscriptionTier: d,
                        onClose: o,
                        analyticsLocationObject: {
                            section: x.jXE.EXPRESSION_PICKER,
                            object: x.qAy.BUTTON_CTA
                        },
                        trialOffer: T,
                        discountOffer: b
                    })
                ]
            });
        case L.cd.STICKER_PICKER_UPSELL:
            return (
                c()(null != s, 'You must specify children for this upsell type'),
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)('div', {
                            className: P.contentContainer,
                            children: [
                                (0, a.jsx)('img', {
                                    className: P.upsellImage,
                                    src: M,
                                    alt: w.intl.string(w.t.do7AoK)
                                }),
                                (0, a.jsx)(m.Heading, {
                                    variant: 'heading-xl/bold',
                                    color: 'header-primary',
                                    children: w.intl.string(w.t.jJG1pq)
                                }),
                                (0, a.jsx)(U, {
                                    trialOffer: T,
                                    discountOffer: b,
                                    children: w.intl.format(w.t['2HoFKC'], {
                                        planName: (0, S.jP)(d),
                                        onClick: () => (0, I.uL)(x.Z5c.APPLICATION_STORE)
                                    })
                                })
                            ]
                        }),
                        (0, a.jsx)(Z, {
                            subscriptionTier: d,
                            onClose: o,
                            analyticsLocationObject: {
                                section: x.jXE.EXPRESSION_PICKER,
                                object: x.qAy.BUTTON_CTA
                            },
                            trialOffer: T,
                            discountOffer: b
                        })
                    ]
                })
            );
        case L.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
            c()(null != s, 'You must specify children for this upsell type');
            let D = (0, p.ap)(R) ? r(537381) : r(341048);
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsxs)('div', {
                        className: P.contentContainer,
                        children: [
                            (0, a.jsx)('img', {
                                alt: '',
                                className: P.upsellImage,
                                src: D
                            }),
                            (0, a.jsx)(m.Heading, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: w.intl.string(w.t['1SsvhY'])
                            }),
                            (0, a.jsx)(U, {
                                trialOffer: T,
                                discountOffer: b,
                                children: w.intl.format(w.t.md4nPz, {
                                    planName: (0, S.jP)(d),
                                    onClick: () => (0, I.uL)(x.Z5c.APPLICATION_STORE)
                                })
                            })
                        ]
                    }),
                    (0, a.jsx)(Z, {
                        subscriptionTier: d,
                        onClose: o,
                        analyticsLocationObject: {
                            section: x.jXE.EMOJI_PICKER_POPOUT,
                            object: x.qAy.BUTTON_CTA
                        },
                        trialOffer: T,
                        discountOffer: b
                    })
                ]
            });
        case L.cd.UPLOAD_ERROR_UPSELL:
        case L.cd.BURST_REACTION_UPSELL:
        case L.cd.STREAM_QUALITY_UPSELL:
        case L.cd.MESSAGE_LENGTH_UPSELL:
            let k;
            switch (u) {
                case L.cd.UPLOAD_ERROR_UPSELL:
                    k = w.intl.format(w.t.F4qoDw, {
                        planName: (0, S.jP)(d),
                        premiumMaxSize: d === L.Si.TIER_0 ? w.intl.string(w.t['C/Rhb2']) : O,
                        onClick: () => {
                            (0, I.uL)(x.Z5c.APPLICATION_STORE), null == o || o();
                        }
                    });
                    break;
                case L.cd.BURST_REACTION_UPSELL:
                    k = w.intl.format(w.t.poib9P, {
                        planName: (0, S.jP)(d),
                        onClick: () => {
                            (0, I.uL)(x.Z5c.APPLICATION_STORE), null == o || o();
                        }
                    });
                    break;
                case L.cd.STREAM_QUALITY_UPSELL:
                    k = w.intl.format(w.t.WspKp6, {
                        onClick: () => {
                            (0, I.uL)(x.Z5c.APPLICATION_STORE), null == o || o(), (0, h.pT)();
                        }
                    });
                    break;
                case L.cd.MESSAGE_LENGTH_UPSELL:
                    k = w.intl.format(w.t.GUHtEx, {
                        premiumMaxMessageLength: x.en1,
                        onClick: () => {
                            (0, I.uL)(x.Z5c.APPLICATION_STORE), null == o || o();
                        }
                    });
            }
            return (
                c()(null != k, 'There must be some upsell context'),
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)('div', {
                        className: P.contentContainer,
                        children: [
                            (0, a.jsx)(m.Heading, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: n
                            }),
                            (0, a.jsx)(m.Text, {
                                variant: 'text-md/normal',
                                children: i
                            }),
                            (0, a.jsx)(U, {
                                trialOffer: T,
                                discountOffer: b,
                                children: k
                            })
                        ]
                    })
                })
            );
        case L.cd.BURST_REACTION_QUICK_ACTION_UPSELL:
            return (0, a.jsxs)('div', {
                className: P.contentContainer,
                children: [
                    (0, a.jsx)(m.Heading, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        children: n
                    }),
                    (0, a.jsx)(m.Text, {
                        variant: 'text-md/normal',
                        children: i
                    }),
                    (0, a.jsx)(U, {
                        trialOffer: T,
                        discountOffer: b,
                        children: w.intl.format(w.t.poib9P, {
                            planName: (0, S.jP)(d),
                            onClick: () => (0, I.uL)(x.Z5c.APPLICATION_STORE)
                        })
                    }),
                    (0, a.jsx)(B, {
                        className: P.upsellButton,
                        subscriptionTier: d,
                        analyticsLocationObject: f,
                        onClose: o,
                        trialOffer: T,
                        discountOffer: b
                    })
                ]
            });
        case L.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
            return (
                c()(null != s, 'You must specify children for this upsell type'),
                (0, a.jsx)(U, {
                    trialOffer: T,
                    discountOffer: b,
                    children: w.intl.format(w.t['5KMAnJ'], {
                        onClick: () => {
                            (0, I.uL)(x.Z5c.APPLICATION_STORE), (0, v.Mo)();
                        }
                    })
                })
            );
        case L.cd.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
            return (0, a.jsxs)('div', {
                className: l()(P.messageLengthUpsellContainer, { [P.messageLengthUpsellAppearAnimation]: !C }),
                children: [
                    (0, a.jsx)(m.Text, {
                        variant: 'text-lg/bold',
                        color: 'status-danger',
                        children: i
                    }),
                    (0, a.jsx)(m.Heading, {
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        className: P.messageLengthUpsellHeader,
                        children: w.intl.string(w.t.ZvHg3N)
                    }),
                    (0, a.jsx)('div', { className: P.divider }),
                    (0, a.jsx)(U, {
                        trialOffer: T,
                        discountOffer: b,
                        className: P.messageLengthBrandedContainer,
                        subscriptionTier: d,
                        children: w.intl.format(w.t.GUHtEx, {
                            premiumMaxMessageLength: x.en1,
                            onClick: () => {
                                (0, I.uL)(x.Z5c.APPLICATION_STORE), null == o || o();
                            }
                        })
                    }),
                    (0, a.jsx)(B, {
                        subscriptionTier: d,
                        analyticsLocationObject: f,
                        onClose: o,
                        trialOffer: T,
                        discountOffer: b
                    })
                ]
            });
        case L.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL:
        case L.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
            return (0, a.jsx)(F, {});
        case L.cd.GUILD_CAP_MODAL_UPSELL:
        case L.cd.PREMIUM_GUILD_IDENTITY_MODAL:
        case L.cd.CUSTOM_PROFILE_UPSELL:
        case L.cd.VIDEO_BACKGROUNDS_MODAL:
        case L.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
        case L.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
        case L.cd.EMOJI_PICKER_EMOJI_CLICKED:
        case L.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
        case L.cd.APP_ICON_UPSELL:
        case L.cd.CLIENT_THEMES_UPSELL:
        case L.cd.TRY_IT_OUT_MODAL_UPSELL:
            return (0, a.jsx)(V, {
                trialOffer: T,
                discountOffer: b,
                headingText: n,
                context: i,
                children: s
            });
        default:
            return (
                A.Z.captureMessage('Possible mishandling of a PremiumUpsellType: '.concat(u)),
                (0, a.jsx)(V, {
                    headingText: n,
                    context: i,
                    children: s,
                    trialOffer: T,
                    discountOffer: b
                })
            );
    }
}
