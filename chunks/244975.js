t.d(n, { A: () => S });
var a = t(627968),
    s = t(64700),
    i = t(503698),
    l = t.n(i),
    r = t(421380),
    c = t(397927),
    o = t(793574),
    d = t(688810),
    _ = t(611371),
    u = t(721923),
    m = t(954571),
    A = t(927578),
    x = t(848245),
    p = t(422936),
    L = t(234419),
    h = t(725807),
    f = t(511484),
    g = t(811611),
    C = t(841252),
    E = t(788868),
    N = t(652215),
    b = t(985018),
    j = t(535192),
    k = t(669149);
function S(e) {
    let {
            title: n,
            type: t,
            guildBoostProps: i,
            analyticsSource: S,
            analyticsLocation: M,
            body: T,
            context: v,
            glowUp: y,
            modalClassName: I,
            modalContentClassName: U,
            artContainerClassName: O,
            artClassName: D,
            headerClassName: P,
            bodyClassName: R,
            transitionState: w,
            onClose: $,
            onSubscribeClick: H,
            onSubscribeFinish: Q,
            onSecondaryClick: z,
            secondaryCTA: B,
            secondaryCTAClassName: F,
            subscribeButtonText: V,
            showNewBadge: q = !1,
            showBetaBadge: G = !1,
            enableArtBoxShadow: X = !0,
            subscriptionTier: Y = E.pe.TIER_2,
            isLoading: J = !1,
            hideBackButton: Z,
            backButtonText: W,
            showEnhancedUpsell: K,
            useSubscribeButtonGradient: ee,
            subscribeButtonClassname: en,
            hidePremiumOfferUpsell: et,
            children: ea,
            LeadingComponent: es,
            backgroundElements: ei,
            smallText: el = !1,
            footerClassName: er,
            ...ec
        } = e,
        eo = null != i,
        ed = (0, L.V)(),
        e_ = (0, p.O)(),
        eu = !et && (ed?.subscription_trial?.sku_id === Y || (0, f.U9)(e_, Y)) && !eo,
        { analyticsLocations: em } = (0, d.Ay)(o.A.PREMIUM_UPSELL_MODAL),
        eA = { analyticsLocation: M, analyticsLocations: em, analyticsSource: S, guildBoostProps: i, type: t },
        ex = s.useRef(eA);
    s.useEffect(() => {
        ex.current = eA;
    }),
        s.useEffect(() => {
            if (J) return;
            let {
                analyticsLocation: e,
                analyticsLocations: n,
                analyticsSource: t,
                guildBoostProps: a,
                type: s,
            } = ex.current;
            eo
                ? m.default.track(N.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: `${s} - Tier ${a?.boostedGuildTier}`,
                      guild_id: a?.guild.id,
                      channel_id: a?.channelId,
                      location: e,
                      location_stack: n,
                  })
                : m.default.track(N.HAw.PREMIUM_UPSELL_VIEWED, {
                      type: s,
                      source: t,
                      location: e,
                      location_stack: n,
                      sku_id: (0, A.mH)(Y),
                  });
        }, [eo, Y, J]);
    let ep = (0, x.b)(),
        eL =
            ep.length > 1 &&
            (function (e) {
                switch (e) {
                    case E.e.ANIMATED_AVATAR_MODAL_UPSELL:
                    case E.e.ANIMATED_BANNER_MODAL_UPSELL:
                    case E.e.PROFILE_EFFECT_MODAL_UPSELL:
                    case E.e.AVATAR_DECORATION_MODAL_UPSELL:
                    case E.e.FOR_LATER_MODAL_UPSELL:
                        return !0;
                    default:
                        return !1;
                }
            })(t),
        eh = X ? l()(j.JS, j.OV, O) : l()(j.JS, O),
        ef = null;
    return (
        null != ec.artURL
            ? (ef = (0, a.jsx)("img", { className: l()(D, j.Qw), alt: "", src: ec.artURL }))
            : null != ec.artElement && (ef = ec.artElement),
        (0, a.jsxs)(c.EOs, {
            "data-migration-pending": !0,
            className: l()(j.zr, !eu && I),
            "aria-label": n,
            transitionState: w,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != ef &&
                    (0, a.jsxs)("div", {
                        className: eh,
                        children: [ef, q ? (0, a.jsx)("img", { className: j.CI, alt: "", src: k }) : null],
                    }),
                (0, a.jsx)(c.$mQ, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: l()(K ? j.es : j.Qs, !eu && U),
                    children: J
                        ? (0, a.jsx)(c.y$y, {})
                        : eu
                          ? (0, a.jsx)(g.Ay, {
                                onClose: $,
                                type: t,
                                subscriptionTier: ed?.subscription_trial?.sku_id ?? E.pe.TIER_2,
                                headingText: n,
                                context: v,
                                analyticsLocationObject: M,
                                discountOffer: e_,
                                trialOffer: ed,
                                children: y,
                            })
                          : (0, a.jsxs)("div", {
                                className: j.hQ,
                                children: [
                                    es,
                                    (0, a.jsxs)("div", {
                                        className: j.kQ,
                                        children: [
                                            (0, a.jsxs)(c.Heading, {
                                                className: l()(j.wx, { [j.k]: K }, P),
                                                variant: "heading-xl/bold",
                                                children: [n, G ? (0, a.jsx)(_.A, { className: j.TN }) : null],
                                            }),
                                            eL ? (0, a.jsx)(C.A, { affinities: ep }) : void 0,
                                            ea,
                                            (0, a.jsx)(c.Text, {
                                                variant: el ? "text-sm/normal" : "text-md/normal",
                                                className: l()(R, j.uI),
                                                children: T,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, a.jsxs)(c.jlY, {
                    "data-migration-pending": !0,
                    className: l()(j.qr, er, { [j.I$]: K }),
                    children: [
                        (0, a.jsxs)("div", {
                            className: l()(j.E3, { [j.Q_]: K }),
                            children: [
                                null != B
                                    ? (0, a.jsx)(r.$n, {
                                          "data-migration-pending": !0,
                                          className: l()(j.Dc, F, { [j.HZ]: K }),
                                          onClick: z,
                                          size: r.$n.Sizes.SMALL,
                                          color: K ? r.$n.Colors.CUSTOM : r.$n.Colors.PRIMARY,
                                          look: r.$n.Looks.LINK,
                                          children: B,
                                      })
                                    : null,
                                (() => {
                                    if (eo)
                                        return (0, a.jsx)(u.A, { analyticsLocation: M, guild: i.guild, onClose: $ });
                                    let e = K ? b.intl.string(b.t.pj0XBN) : void 0;
                                    return (
                                        eu &&
                                            (null != ed
                                                ? (e = (0, A.FY)({
                                                      intervalType: ed?.subscription_trial?.interval,
                                                      intervalCount: ed?.subscription_trial?.interval_count,
                                                  }))
                                                : null != e_ &&
                                                  (e = b.intl.formatToPlainString(b.t.bkQ4bH, {
                                                      percent: e_.discount.amount,
                                                  }))),
                                        (0, a.jsx)(h.A, {
                                            className: en,
                                            showGradient: K || ee,
                                            premiumModalAnalyticsLocation: M,
                                            subscriptionTier: Y,
                                            size: r.$n.Sizes.SMALL,
                                            color: K || ee ? r.$n.Colors.CUSTOM : r.$n.Colors.GREEN,
                                            onClick: () => {
                                                H?.(), $();
                                            },
                                            onSubscribeModalClose: Q,
                                            textOptions: { textOverride: V ?? e },
                                        })
                                    );
                                })(),
                            ],
                        }),
                        !Z &&
                            !K &&
                            (0, a.jsx)(c.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: null != W ? W : b.intl.string(b.t["13/7kX"]),
                                onClick: $,
                            }),
                    ],
                }),
                K ? (0, a.jsx)(c.s_y, { "data-migration-pending": !0, onClick: $, className: j.b }) : null,
                ei,
            ],
        })
    );
}
