n.d(t, {
    ZP: () => F,
    dz: () => U,
    eQ: () => j,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(913527),
    u = n.n(c),
    d = n(442837),
    f = n(952265),
    p = n(780384),
    _ = n(755721),
    m = n(481060),
    h = n(410030),
    g = n(607070),
    E = n(55358),
    b = n(703656),
    y = n(483444),
    O = n(599250),
    v = n(424218),
    S = n(74538),
    I = n(960048),
    T = n(861990),
    A = n(98278),
    C = n(639119),
    N = n(767714),
    P = n(382791),
    R = n(474936),
    w = n(981631),
    D = n(388032),
    x = n(717582),
    L = n(867250);
function j(e) {
    if (null == e) return null;
    let t = u()(e),
        n = t.diff(u()(), "h");
    if (n > 24) {
        let e = t.diff(u()(), "d");
        return D.intl.formatToPlainString(D.t.xs9VPm, { numDays: e });
    }
    if (n > 1) return D.intl.formatToPlainString(D.t.p7KX59, { numHours: n });
    let r = t.diff(u()(), "minutes");
    return D.intl.formatToPlainString(D.t["XtQ+Ap"], { numMinutes: r });
}
function M(e) {
    var t, n, i;
    let { className: a, children: s, withBottomMargin: l, discountOffer: c, trialOffer: u } = e,
        d = null != (t = null == u ? void 0 : u.expires_at) ? t : null == c ? void 0 : c.expires_at,
        f = null == u ? void 0 : u.subscription_trial,
        p = null != (i = null != (n = e.subscriptionTier) ? n : null == f ? void 0 : f.sku_id) ? i : R.Si.TIER_2;
    return (0, r.jsxs)("div", {
        className: o()(a, x.gradientUpsellWrapper, {
            [x.gradientUpsellWrapperTier0]: p === R.Si.TIER_0,
            [x.gradientUpsellWrapperTier2]: p === R.Si.TIER_2,
            [x.gradientUpsellWrapperWithBottomMargin]: l,
        }),
        children: [
            (0, r.jsxs)("div", {
                className: x.logo,
                children: [
                    (0, r.jsx)(m.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: x.logoIcon,
                    }),
                    p === R.Si.TIER_0 && (0, r.jsx)(O.Z, { className: x.logoWordmark }),
                    p === R.Si.TIER_2 && (0, r.jsx)(y.Z, { className: x.logoWordmark }),
                ],
            }),
            (0, r.jsx)(m.Text, {
                variant: "text-md/medium",
                className: x.copy,
                color: "none",
                children: s,
            }),
            (0, r.jsx)(P.Cy, {
                text:
                    null != c
                        ? D.intl.formatToPlainString(D.t.iiLbvu, { percent: c.discount.amount })
                        : D.intl.string(D.t.IBYG5U),
                colorOptions: p === R.Si.TIER_0 ? P.VE.PREMIUM_TIER_0_WHITE_FILL : P.VE.PREMIUM_TIER_2_WHITE_FILL,
            }),
            (0, r.jsx)(m.Text, {
                variant: "eyebrow",
                className: x.countdownText,
                children: j(d),
            }),
        ],
    });
}
function k(e) {
    var t, n;
    let {
            className: a,
            onClose: o,
            subscriptionTier: s,
            analyticsLocationObject: l,
            trialOffer: c,
            discountOffer: u,
        } = e,
        [d, f] = i.useState(!1),
        p =
            null != u
                ? D.intl.formatToPlainString(D.t.bkQ4bH, { percent: u.discount.amount })
                : (0, S.Rt)({
                      intervalType: null == c || null == (t = c.subscription_trial) ? void 0 : t.interval,
                      intervalCount: null == c || null == (n = c.subscription_trial) ? void 0 : n.interval_count,
                  });
    return (0, r.jsx)(N.Z, {
        className: a,
        subscriptionTier: s,
        submitting: d,
        premiumModalAnalyticsLocation: l,
        size: _.zx.Sizes.MEDIUM,
        color: _.zx.Colors.GREEN,
        onClick: () => {
            f(!0);
        },
        onSubscribeModalClose: (e) => {
            f(!1), e && (null == o || o());
        },
        textOptions: { textOverride: p },
    });
}
function U(e) {
    var t, n;
    let i = null == (t = (0, C.N)()) ? void 0 : t.subscription_trial,
        a = null != (n = null == i ? void 0 : i.sku_id) ? n : R.Si.TIER_2;
    return (0, r.jsx)(m.Text, {
        variant: "text-xs/bold",
        className: o()(x.trialBadge, e.className, {
            [x.trialBadgeGradientTier0]: a === R.Si.TIER_0,
            [x.trialBadgeGradientTier2]: a === R.Si.TIER_2,
        }),
        color: "none",
        children: (0, S.a5)({
            intervalType: null == i ? void 0 : i.interval,
            intervalCount: null == i ? void 0 : i.interval_count,
        }),
    });
}
function G(e) {
    let { subscriptionTier: t, onClose: n, analyticsLocationObject: i, trialOffer: a, discountOffer: o } = e;
    return (0, r.jsxs)("div", {
        className: x.footer,
        children: [
            (0, r.jsx)(_.zx, {
                "data-migration-pending": !0,
                onClick: n,
                size: _.zx.Sizes.SMALL,
                look: _.iL.BLANK,
                className: x.cancelButton,
                children: D.intl.string(D.t.cpT0Cq),
            }),
            (0, r.jsx)(k, {
                className: x.subscribeButton,
                subscriptionTier: t,
                analyticsLocationObject: i,
                onClose: n,
                discountOffer: o,
                trialOffer: a,
            }),
        ],
    });
}
function Z(e) {
    let { onClose: t, analyticsLocationObject: n } = e,
        i = (0, C.N)();
    return (0, r.jsxs)("div", {
        className: x.tryOutUpsellContainer,
        children: [
            (0, r.jsx)(P.Cy, {
                className: x.topRimPill,
                text: D.intl.string(D.t["8CVUrV"]),
                colorOptions: P.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL,
            }),
            (0, r.jsx)(m.Heading, {
                variant: "heading-md/semibold",
                color: "text-default",
                children: D.intl.format(D.t["fF+cgd"], { onClick: () => (0, A.z)() }),
            }),
            (0, r.jsx)(k, {
                trialOffer: i,
                className: x.subscribeButtonWide,
                subscriptionTier: R.Si.TIER_2,
                analyticsLocationObject: n,
                onClose: t,
            }),
            (0, r.jsx)(m.Text, {
                variant: "eyebrow",
                className: x.countdownTextInSetting,
                children: j(null == i ? void 0 : i.expires_at),
            }),
        ],
    });
}
function B(e) {
    let { headingText: t, context: n, children: i, trialOffer: a, discountOffer: o } = e;
    return (0, r.jsxs)("div", {
        className: x.contentContainer,
        children: [
            (0, r.jsx)(m.Heading, {
                variant: "heading-xl/semibold",
                children: t,
            }),
            null != n &&
                (0, r.jsx)(m.Text, {
                    className: x.context,
                    variant: "text-md/normal",
                    children: n,
                }),
            (0, r.jsx)(M, {
                trialOffer: a,
                discountOffer: o,
                children: i,
            }),
        ],
    });
}
function F(e) {
    let {
            headingText: t,
            context: i,
            children: a,
            onClose: s,
            type: c,
            subscriptionTier: u,
            analyticsLocationObject: _,
            trialOffer: y,
            discountOffer: O,
        } = e,
        A = (0, d.e7)([g.Z], () => g.Z.useReducedMotion),
        C = (0, h.ZP)(),
        N = (0, v.BU)(T.zz / v.XD, { useKibibytes: !0 });
    switch (c) {
        case R.cd.EMPTY_STICKER_PICKER_UPSELL:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(m.P3F, {
                        className: x.upsellClose,
                        onClick: s,
                        children: (0, r.jsx)(m.Dio, {
                            size: "md",
                            color: "currentColor",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: x.contentContainer,
                        children: [
                            (0, r.jsx)("img", {
                                className: x.upsellImage,
                                src: L,
                                alt: D.intl.string(D.t.do7AoM),
                            }),
                            (0, r.jsx)(m.Heading, {
                                variant: "heading-xl/bold",
                                color: "header-primary",
                                children: D.intl.string(D.t.HEm04J),
                            }),
                            (0, r.jsx)(M, {
                                trialOffer: y,
                                discountOffer: O,
                                children: D.intl.format(D.t["2HoFKF"], {
                                    planName: (0, S.jP)(u),
                                    onClick: () => (0, b.uL)(w.Z5c.APPLICATION_STORE),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(G, {
                        subscriptionTier: u,
                        onClose: s,
                        analyticsLocationObject: {
                            section: w.jXE.EXPRESSION_PICKER,
                            object: w.qAy.BUTTON_CTA,
                        },
                        trialOffer: y,
                        discountOffer: O,
                    }),
                ],
            });
        case R.cd.STICKER_PICKER_UPSELL:
            return (
                l()(null != a, "You must specify children for this upsell type"),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: x.contentContainer,
                            children: [
                                (0, r.jsx)("img", {
                                    className: x.upsellImage,
                                    src: L,
                                    alt: D.intl.string(D.t.do7AoM),
                                }),
                                (0, r.jsx)(m.Heading, {
                                    variant: "heading-xl/bold",
                                    color: "header-primary",
                                    children: D.intl.string(D.t.jJG1pl),
                                }),
                                (0, r.jsx)(M, {
                                    trialOffer: y,
                                    discountOffer: O,
                                    children: D.intl.format(D.t["2HoFKF"], {
                                        planName: (0, S.jP)(u),
                                        onClick: () => (0, b.uL)(w.Z5c.APPLICATION_STORE),
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(G, {
                            subscriptionTier: u,
                            onClose: s,
                            analyticsLocationObject: {
                                section: w.jXE.EXPRESSION_PICKER,
                                object: w.qAy.BUTTON_CTA,
                            },
                            trialOffer: y,
                            discountOffer: O,
                        }),
                    ],
                })
            );
        case R.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
            l()(null != a, "You must specify children for this upsell type");
            let P = (0, p.ap)(C) ? n(537381) : n(341048);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: x.contentContainer,
                        children: [
                            (0, r.jsx)("img", {
                                alt: "",
                                className: x.upsellImage,
                                src: P,
                            }),
                            (0, r.jsx)(m.Heading, {
                                variant: "heading-xl/bold",
                                color: "header-primary",
                                children: D.intl.string(D.t["1SsvhY"]),
                            }),
                            (0, r.jsx)(M, {
                                trialOffer: y,
                                discountOffer: O,
                                children: D.intl.format(D.t.md4nP5, {
                                    planName: (0, S.jP)(u),
                                    onClick: () => (0, b.uL)(w.Z5c.APPLICATION_STORE),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(G, {
                        subscriptionTier: u,
                        onClose: s,
                        analyticsLocationObject: {
                            section: w.jXE.EMOJI_PICKER_POPOUT,
                            object: w.qAy.BUTTON_CTA,
                        },
                        trialOffer: y,
                        discountOffer: O,
                    }),
                ],
            });
        case R.cd.UPLOAD_ERROR_UPSELL:
        case R.cd.BURST_REACTION_UPSELL:
        case R.cd.STREAM_QUALITY_UPSELL:
        case R.cd.MESSAGE_LENGTH_UPSELL:
            let j;
            switch (c) {
                case R.cd.UPLOAD_ERROR_UPSELL:
                    j = D.intl.format(D.t.F4qoD7, {
                        planName: (0, S.jP)(u),
                        premiumMaxSize: u === R.Si.TIER_0 ? D.intl.string(D.t["C/Rhb9"]) : N,
                        onClick: () => {
                            (0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s();
                        },
                    });
                    break;
                case R.cd.BURST_REACTION_UPSELL:
                    j = D.intl.format(D.t.poib9C, {
                        planName: (0, S.jP)(u),
                        onClick: () => {
                            (0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s();
                        },
                    });
                    break;
                case R.cd.STREAM_QUALITY_UPSELL:
                    j = D.intl.format(D.t.WspKp9, {
                        onClick: () => {
                            (0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s(), (0, f.pT)();
                        },
                    });
                    break;
                case R.cd.MESSAGE_LENGTH_UPSELL:
                    j = D.intl.format(D.t.GUHtE3, {
                        premiumMaxMessageLength: w.en1,
                        onClick: () => {
                            (0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s();
                        },
                    });
            }
            return (
                l()(null != j, "There must be some upsell context"),
                (0, r.jsxs)("div", {
                    className: x.contentContainer,
                    children: [
                        (0, r.jsx)(m.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: t,
                        }),
                        (0, r.jsx)(m.Text, {
                            variant: "text-md/normal",
                            children: i,
                        }),
                        (0, r.jsx)(M, {
                            trialOffer: y,
                            discountOffer: O,
                            children: j,
                        }),
                    ],
                })
            );
        case R.cd.BURST_REACTION_QUICK_ACTION_UPSELL:
            return (0, r.jsxs)("div", {
                className: x.contentContainer,
                children: [
                    (0, r.jsx)(m.Heading, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        children: t,
                    }),
                    (0, r.jsx)(m.Text, {
                        variant: "text-md/normal",
                        children: i,
                    }),
                    (0, r.jsx)(M, {
                        trialOffer: y,
                        discountOffer: O,
                        children: D.intl.format(D.t.poib9C, {
                            planName: (0, S.jP)(u),
                            onClick: () => (0, b.uL)(w.Z5c.APPLICATION_STORE),
                        }),
                    }),
                    (0, r.jsx)(k, {
                        className: x.upsellButton,
                        subscriptionTier: u,
                        analyticsLocationObject: _,
                        onClose: s,
                        trialOffer: y,
                        discountOffer: O,
                    }),
                ],
            });
        case R.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
            return (
                l()(null != a, "You must specify children for this upsell type"),
                (0, r.jsx)(M, {
                    trialOffer: y,
                    discountOffer: O,
                    children: D.intl.format(D.t["5KMAnK"], {
                        onClick: () => {
                            (0, b.uL)(w.Z5c.APPLICATION_STORE), (0, E.C)();
                        },
                    }),
                })
            );
        case R.cd.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
            return (0, r.jsxs)("div", {
                className: o()(x.messageLengthUpsellContainer, { [x.messageLengthUpsellAppearAnimation]: !A }),
                children: [
                    (0, r.jsx)(m.Text, {
                        variant: "text-lg/bold",
                        color: "status-danger",
                        children: i,
                    }),
                    (0, r.jsx)(m.Heading, {
                        variant: "heading-lg/extrabold",
                        color: "header-primary",
                        className: x.messageLengthUpsellHeader,
                        children: D.intl.string(D.t.ZvHg3N),
                    }),
                    (0, r.jsx)("div", { className: x.divider }),
                    (0, r.jsx)(M, {
                        trialOffer: y,
                        discountOffer: O,
                        className: x.messageLengthBrandedContainer,
                        subscriptionTier: u,
                        children: D.intl.format(D.t.GUHtE3, {
                            premiumMaxMessageLength: w.en1,
                            onClick: () => {
                                (0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s();
                            },
                        }),
                    }),
                    (0, r.jsx)(k, {
                        subscriptionTier: u,
                        analyticsLocationObject: _,
                        onClose: s,
                        trialOffer: y,
                        discountOffer: O,
                    }),
                ],
            });
        case R.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL:
        case R.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
            return (0, r.jsx)(Z, {});
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
        case R.cd.VOICE_FILTERS_UPSELL:
            return (0, r.jsx)(B, {
                trialOffer: y,
                discountOffer: O,
                headingText: t,
                context: i,
                children: a,
            });
        default:
            return (
                I.Z.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(c)),
                (0, r.jsx)(B, {
                    headingText: t,
                    context: i,
                    children: a,
                    trialOffer: y,
                    discountOffer: O,
                })
            );
    }
}
