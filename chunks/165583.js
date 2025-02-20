n.d(t, {
    ZP: () => Z,
    dz: () => j
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(512722),
    l = n.n(s),
    c = n(913527),
    u = n.n(c),
    d = n(442837),
    f = n(952265),
    p = n(780384),
    _ = n(481060),
    h = n(410030),
    m = n(607070),
    g = n(238302),
    E = n(703656),
    v = n(483444),
    b = n(599250),
    y = n(424218),
    O = n(74538),
    S = n(960048),
    I = n(861990),
    T = n(98278),
    N = n(639119),
    A = n(197115),
    C = n(823188),
    R = n(474936),
    P = n(981631),
    w = n(388032),
    D = n(182666),
    x = n(867250);
function L(e) {
    if (null == e) return null;
    let t = u()(e),
        n = t.diff(u()(), 'h');
    if (n > 24) {
        let e = t.diff(u()(), 'd');
        return w.NW.formatToPlainString(w.t.xs9VPj, { numDays: e });
    }
    if (n > 1) return w.NW.formatToPlainString(w.t['p7KX5+'], { numHours: n });
    let r = t.diff(u()(), 'minutes');
    return w.NW.formatToPlainString(w.t['XtQ+Ag'], { numMinutes: r });
}
function M(e) {
    var t, n, i;
    let { className: o, children: s, withBottomMargin: l, discountOffer: c, trialOffer: u } = e,
        d = null !== (t = null == u ? void 0 : u.expires_at) && void 0 !== t ? t : null == c ? void 0 : c.expires_at,
        f = null == u ? void 0 : u.subscription_trial,
        p = null !== (i = null !== (n = e.subscriptionTier) && void 0 !== n ? n : null == f ? void 0 : f.sku_id) && void 0 !== i ? i : R.Si.TIER_2;
    return (0, r.jsxs)('div', {
        className: a()(o, D.gradientUpsellWrapper, {
            [D.gradientUpsellWrapperTier0]: p === R.Si.TIER_0,
            [D.gradientUpsellWrapperTier2]: p === R.Si.TIER_2,
            [D.gradientUpsellWrapperWithBottomMargin]: l
        }),
        children: [
            (0, r.jsxs)('div', {
                className: D.logo,
                children: [
                    (0, r.jsx)(_.SrA, {
                        size: 'md',
                        color: 'currentColor',
                        className: D.logoIcon
                    }),
                    p === R.Si.TIER_0 && (0, r.jsx)(b.Z, { className: D.logoWordmark }),
                    p === R.Si.TIER_2 && (0, r.jsx)(v.Z, { className: D.logoWordmark })
                ]
            }),
            (0, r.jsx)(_.Text, {
                variant: 'text-md/medium',
                className: D.copy,
                color: 'none',
                children: s
            }),
            (0, r.jsx)(C.Cy, {
                text: null != c ? w.NW.formatToPlainString(w.t.iiLbvr, { percent: c.discount.amount }) : w.NW.string(w.t.IBYG5e),
                colorOptions: p === R.Si.TIER_0 ? C.VE.PREMIUM_TIER_0_WHITE_FILL : C.VE.PREMIUM_TIER_2_WHITE_FILL
            }),
            (0, r.jsx)(_.Text, {
                variant: 'eyebrow',
                className: D.countdownText,
                children: L(d)
            })
        ]
    });
}
function k(e) {
    var t, n;
    let { className: o, onClose: a, subscriptionTier: s, analyticsLocationObject: l, trialOffer: c, discountOffer: u } = e,
        [d, f] = i.useState(!1),
        p =
            null != u
                ? w.NW.formatToPlainString(w.t.bkQ4bG, { percent: u.discount.amount })
                : (0, O.Rt)({
                      intervalType: null == c ? void 0 : null === (t = c.subscription_trial) || void 0 === t ? void 0 : t.interval,
                      intervalCount: null == c ? void 0 : null === (n = c.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                  });
    return (0, r.jsx)(A.Z, {
        className: o,
        subscriptionTier: s,
        submitting: d,
        premiumModalAnalyticsLocation: l,
        size: _.zxk.Sizes.MEDIUM,
        color: _.zxk.Colors.GREEN,
        onClick: () => {
            f(!0);
        },
        onSubscribeModalClose: (e) => {
            f(!1), e && (null == a || a());
        },
        buttonText: p
    });
}
function j(e) {
    var t, n;
    let i = null === (t = (0, N.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        o = null !== (n = null == i ? void 0 : i.sku_id) && void 0 !== n ? n : R.Si.TIER_2;
    return (0, r.jsx)(_.Text, {
        variant: 'text-xs/bold',
        className: a()(D.trialBadge, e.className, {
            [D.trialBadgeGradientTier0]: o === R.Si.TIER_0,
            [D.trialBadgeGradientTier2]: o === R.Si.TIER_2
        }),
        color: 'none',
        children: (0, O.a5)({
            intervalType: null == i ? void 0 : i.interval,
            intervalCount: null == i ? void 0 : i.interval_count
        })
    });
}
function U(e) {
    let { subscriptionTier: t, onClose: n, analyticsLocationObject: i, trialOffer: o, discountOffer: a } = e;
    return (0, r.jsxs)('div', {
        className: D.footer,
        children: [
            (0, r.jsx)(_.zxk, {
                onClick: n,
                size: _.zxk.Sizes.SMALL,
                look: _.iLD.BLANK,
                className: D.cancelButton,
                children: w.NW.string(w.t.cpT0Cg)
            }),
            (0, r.jsx)(k, {
                className: D.subscribeButton,
                subscriptionTier: t,
                analyticsLocationObject: i,
                onClose: n,
                discountOffer: a,
                trialOffer: o
            })
        ]
    });
}
function G(e) {
    let { onClose: t, analyticsLocationObject: n } = e,
        i = (0, N.N)();
    return (0, r.jsxs)('div', {
        className: D.tryOutUpsellContainer,
        children: [
            (0, r.jsx)(C.Cy, {
                className: D.topRimPill,
                text: w.NW.string(w.t['8CVUra']),
                colorOptions: C.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
            }),
            (0, r.jsx)(_.X6q, {
                variant: 'heading-md/semibold',
                color: 'text-normal',
                children: w.NW.format(w.t['fF+cgY'], { onClick: () => (0, T.z)() })
            }),
            (0, r.jsx)(k, {
                trialOffer: i,
                className: D.subscribeButtonWide,
                subscriptionTier: R.Si.TIER_2,
                analyticsLocationObject: n,
                onClose: t
            }),
            (0, r.jsx)(_.Text, {
                variant: 'eyebrow',
                className: D.countdownTextInSetting,
                children: L(null == i ? void 0 : i.expires_at)
            })
        ]
    });
}
function B(e) {
    let { headingText: t, context: n, children: i, trialOffer: o, discountOffer: a } = e;
    return (0, r.jsxs)('div', {
        className: D.contentContainer,
        children: [
            (0, r.jsx)(_.X6q, {
                variant: 'heading-xl/semibold',
                children: t
            }),
            null != n &&
                (0, r.jsx)(_.Text, {
                    className: D.context,
                    variant: 'text-md/normal',
                    children: n
                }),
            (0, r.jsx)(M, {
                trialOffer: o,
                discountOffer: a,
                children: i
            })
        ]
    });
}
function Z(e) {
    let { headingText: t, context: i, children: o, onClose: s, type: c, subscriptionTier: u, analyticsLocationObject: v, trialOffer: b, discountOffer: T } = e,
        N = (0, d.e7)([m.Z], () => m.Z.useReducedMotion),
        A = (0, h.ZP)(),
        C = (0, y.BU)(I.zz / y.XD, { useKibibytes: !0 });
    switch (c) {
        case R.cd.EMPTY_STICKER_PICKER_UPSELL:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(_.P3F, {
                        className: D.upsellClose,
                        onClick: s,
                        children: (0, r.jsx)(_.Dio, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: D.contentContainer,
                        children: [
                            (0, r.jsx)('img', {
                                className: D.upsellImage,
                                src: x,
                                alt: w.NW.string(w.t.do7AoK)
                            }),
                            (0, r.jsx)(_.X6q, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: w.NW.string(w.t.HEm04O)
                            }),
                            (0, r.jsx)(M, {
                                trialOffer: b,
                                discountOffer: T,
                                children: w.NW.format(w.t['2HoFKC'], {
                                    planName: (0, O.jP)(u),
                                    onClick: () => (0, E.uL)(P.Z5c.APPLICATION_STORE)
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(U, {
                        subscriptionTier: u,
                        onClose: s,
                        analyticsLocationObject: {
                            section: P.jXE.EXPRESSION_PICKER,
                            object: P.qAy.BUTTON_CTA
                        },
                        trialOffer: b,
                        discountOffer: T
                    })
                ]
            });
        case R.cd.STICKER_PICKER_UPSELL:
            return (
                l()(null != o, 'You must specify children for this upsell type'),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: D.contentContainer,
                            children: [
                                (0, r.jsx)('img', {
                                    className: D.upsellImage,
                                    src: x,
                                    alt: w.NW.string(w.t.do7AoK)
                                }),
                                (0, r.jsx)(_.X6q, {
                                    variant: 'heading-xl/bold',
                                    color: 'header-primary',
                                    children: w.NW.string(w.t.jJG1pq)
                                }),
                                (0, r.jsx)(M, {
                                    trialOffer: b,
                                    discountOffer: T,
                                    children: w.NW.format(w.t['2HoFKC'], {
                                        planName: (0, O.jP)(u),
                                        onClick: () => (0, E.uL)(P.Z5c.APPLICATION_STORE)
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)(U, {
                            subscriptionTier: u,
                            onClose: s,
                            analyticsLocationObject: {
                                section: P.jXE.EXPRESSION_PICKER,
                                object: P.qAy.BUTTON_CTA
                            },
                            trialOffer: b,
                            discountOffer: T
                        })
                    ]
                })
            );
        case R.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
            l()(null != o, 'You must specify children for this upsell type');
            let L = (0, p.ap)(A) ? n(537381) : n(341048);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        className: D.contentContainer,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                className: D.upsellImage,
                                src: L
                            }),
                            (0, r.jsx)(_.X6q, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: w.NW.string(w.t['1SsvhY'])
                            }),
                            (0, r.jsx)(M, {
                                trialOffer: b,
                                discountOffer: T,
                                children: w.NW.format(w.t.md4nPz, {
                                    planName: (0, O.jP)(u),
                                    onClick: () => (0, E.uL)(P.Z5c.APPLICATION_STORE)
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(U, {
                        subscriptionTier: u,
                        onClose: s,
                        analyticsLocationObject: {
                            section: P.jXE.EMOJI_PICKER_POPOUT,
                            object: P.qAy.BUTTON_CTA
                        },
                        trialOffer: b,
                        discountOffer: T
                    })
                ]
            });
        case R.cd.UPLOAD_ERROR_UPSELL:
        case R.cd.BURST_REACTION_UPSELL:
        case R.cd.STREAM_QUALITY_UPSELL:
        case R.cd.MESSAGE_LENGTH_UPSELL:
            let j;
            switch (c) {
                case R.cd.UPLOAD_ERROR_UPSELL:
                    j = w.NW.format(w.t.F4qoDw, {
                        planName: (0, O.jP)(u),
                        premiumMaxSize: u === R.Si.TIER_0 ? w.NW.string(w.t['C/Rhb2']) : C,
                        onClick: () => {
                            (0, E.uL)(P.Z5c.APPLICATION_STORE), null == s || s();
                        }
                    });
                    break;
                case R.cd.BURST_REACTION_UPSELL:
                    j = w.NW.format(w.t.poib9P, {
                        planName: (0, O.jP)(u),
                        onClick: () => {
                            (0, E.uL)(P.Z5c.APPLICATION_STORE), null == s || s();
                        }
                    });
                    break;
                case R.cd.STREAM_QUALITY_UPSELL:
                    j = w.NW.format(w.t.WspKp6, {
                        onClick: () => {
                            (0, E.uL)(P.Z5c.APPLICATION_STORE), null == s || s(), (0, f.pT)();
                        }
                    });
                    break;
                case R.cd.MESSAGE_LENGTH_UPSELL:
                    j = w.NW.format(w.t.GUHtEx, {
                        premiumMaxMessageLength: P.en1,
                        onClick: () => {
                            (0, E.uL)(P.Z5c.APPLICATION_STORE), null == s || s();
                        }
                    });
            }
            return (
                l()(null != j, 'There must be some upsell context'),
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)('div', {
                        className: D.contentContainer,
                        children: [
                            (0, r.jsx)(_.X6q, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: t
                            }),
                            (0, r.jsx)(_.Text, {
                                variant: 'text-md/normal',
                                children: i
                            }),
                            (0, r.jsx)(M, {
                                trialOffer: b,
                                discountOffer: T,
                                children: j
                            })
                        ]
                    })
                })
            );
        case R.cd.BURST_REACTION_QUICK_ACTION_UPSELL:
            return (0, r.jsxs)('div', {
                className: D.contentContainer,
                children: [
                    (0, r.jsx)(_.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        children: t
                    }),
                    (0, r.jsx)(_.Text, {
                        variant: 'text-md/normal',
                        children: i
                    }),
                    (0, r.jsx)(M, {
                        trialOffer: b,
                        discountOffer: T,
                        children: w.NW.format(w.t.poib9P, {
                            planName: (0, O.jP)(u),
                            onClick: () => (0, E.uL)(P.Z5c.APPLICATION_STORE)
                        })
                    }),
                    (0, r.jsx)(k, {
                        className: D.upsellButton,
                        subscriptionTier: u,
                        analyticsLocationObject: v,
                        onClose: s,
                        trialOffer: b,
                        discountOffer: T
                    })
                ]
            });
        case R.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
            return (
                l()(null != o, 'You must specify children for this upsell type'),
                (0, r.jsx)(M, {
                    trialOffer: b,
                    discountOffer: T,
                    children: w.NW.format(w.t['5KMAnJ'], {
                        onClick: () => {
                            (0, E.uL)(P.Z5c.APPLICATION_STORE), (0, g.Mo)();
                        }
                    })
                })
            );
        case R.cd.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
            return (0, r.jsxs)('div', {
                className: a()(D.messageLengthUpsellContainer, { [D.messageLengthUpsellAppearAnimation]: !N }),
                children: [
                    (0, r.jsx)(_.Text, {
                        variant: 'text-lg/bold',
                        color: 'status-danger',
                        children: i
                    }),
                    (0, r.jsx)(_.X6q, {
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        className: D.messageLengthUpsellHeader,
                        children: w.NW.string(w.t.ZvHg3N)
                    }),
                    (0, r.jsx)('div', { className: D.divider }),
                    (0, r.jsx)(M, {
                        trialOffer: b,
                        discountOffer: T,
                        className: D.messageLengthBrandedContainer,
                        subscriptionTier: u,
                        children: w.NW.format(w.t.GUHtEx, {
                            premiumMaxMessageLength: P.en1,
                            onClick: () => {
                                (0, E.uL)(P.Z5c.APPLICATION_STORE), null == s || s();
                            }
                        })
                    }),
                    (0, r.jsx)(k, {
                        subscriptionTier: u,
                        analyticsLocationObject: v,
                        onClose: s,
                        trialOffer: b,
                        discountOffer: T
                    })
                ]
            });
        case R.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL:
        case R.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
            return (0, r.jsx)(G, {});
        case R.cd.GUILD_CAP_MODAL_UPSELL:
        case R.cd.PREMIUM_GUILD_IDENTITY_MODAL:
        case R.cd.CUSTOM_PROFILE_UPSELL:
        case R.cd.VIDEO_BACKGROUNDS_MODAL:
        case R.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
        case R.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
        case R.cd.EMOJI_PICKER_EMOJI_CLICKED:
        case R.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
        case R.cd.APP_ICON_UPSELL:
        case R.cd.CLIENT_THEMES_UPSELL:
        case R.cd.TRY_IT_OUT_MODAL_UPSELL:
            return (0, r.jsx)(B, {
                trialOffer: b,
                discountOffer: T,
                headingText: t,
                context: i,
                children: o
            });
        default:
            return (
                S.Z.captureMessage('Possible mishandling of a PremiumUpsellType: '.concat(c)),
                (0, r.jsx)(B, {
                    headingText: t,
                    context: i,
                    children: o,
                    trialOffer: b,
                    discountOffer: T
                })
            );
    }
}
