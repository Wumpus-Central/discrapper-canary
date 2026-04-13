t.d(n, { A: () => M });
var a = t(627968),
    i = t(64700),
    s = t(503698),
    r = t.n(s),
    l = t(311907),
    c = t(421380),
    o = t(397927),
    d = t(793574),
    _ = t(688810),
    u = t(323082),
    m = t(611371),
    f = t(721923),
    h = t(954571),
    x = t(927578),
    A = t(560138),
    L = t(422936),
    g = t(234419),
    E = t(725807),
    p = t(511484),
    N = t(811611),
    b = t(841252),
    I = t(788868),
    T = t(652215),
    j = t(985018),
    C = t(790344),
    S = t(669149);
function M(e) {
    let {
            title: n,
            type: t,
            guildBoostProps: s,
            analyticsSource: M,
            analyticsLocation: k,
            body: v,
            context: O,
            glowUp: U,
            modalClassName: y,
            modalContentClassName: R,
            artContainerClassName: P,
            artClassName: D,
            headerClassName: F,
            bodyClassName: z,
            transitionState: H,
            onClose: w,
            onSubscribeClick: $,
            onSubscribeFinish: B,
            onSecondaryClick: G,
            secondaryCTA: Q,
            secondaryCTAClassName: V,
            subscribeButtonText: Y,
            showNewBadge: J = !1,
            showBetaBadge: K = !1,
            enableArtBoxShadow: Z = !0,
            subscriptionTier: X = I.pe.TIER_2,
            isLoading: W = !1,
            hideBackButton: q,
            backButtonText: ee,
            showEnhancedUpsell: en,
            useSubscribeButtonGradient: et,
            subscribeButtonClassname: ea,
            hidePremiumOfferUpsell: ei,
            children: es,
            LeadingComponent: er,
            backgroundElements: el,
            smallText: ec = !1,
            footerClassName: eo,
            ...ed
        } = e,
        e_ = null != s,
        eu = (0, g.V)(),
        em = (0, L.O)(),
        ef = !ei && (eu?.subscription_trial?.sku_id === X || (0, p.U9)(em, X)) && !e_,
        { analyticsLocations: eh } = (0, _.Ay)(d.A.PREMIUM_UPSELL_MODAL),
        ex = { analyticsLocation: k, analyticsLocations: eh, analyticsSource: M, guildBoostProps: s, type: t },
        eA = i.useRef(ex);
    i.useEffect(() => {
        eA.current = ex;
    }),
        i.useEffect(() => {
            if (W) return;
            let {
                analyticsLocation: e,
                analyticsLocations: n,
                analyticsSource: t,
                guildBoostProps: a,
                type: i,
            } = eA.current;
            e_
                ? h.default.track(T.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: `${i} - Tier ${a?.boostedGuildTier}`,
                      guild_id: a?.guild.id,
                      channel_id: a?.channelId,
                      location: e,
                      location_stack: n,
                  })
                : h.default.track(T.HAw.PREMIUM_UPSELL_VIEWED, {
                      type: i,
                      source: t,
                      location: e,
                      location_stack: n,
                      sku_id: (0, x.mH)(X),
                  });
        }, [e_, X, W]);
    let eL = (0, l.bG)([A.A], () => A.A.affinities),
        eg =
            eL.length > 1 &&
            (function (e) {
                switch (e) {
                    case I.e.ANIMATED_AVATAR_MODAL_UPSELL:
                    case I.e.ANIMATED_BANNER_MODAL_UPSELL:
                    case I.e.PROFILE_EFFECT_MODAL_UPSELL:
                    case I.e.AVATAR_DECORATION_MODAL_UPSELL:
                    case I.e.FOR_LATER_MODAL_UPSELL:
                        return !0;
                    default:
                        return !1;
                }
            })(t),
        eE = (0, l.bG)([A.A], () => A.A.hasFetched);
    i.useEffect(() => {
        eE || u.xG();
    }, [eE]);
    let ep = Z ? r()(C.JS, C.OV, P) : r()(C.JS, P),
        eN = null;
    return (
        null != ed.artURL
            ? (eN = (0, a.jsx)("img", { className: r()(D, C.Qw), alt: "", src: ed.artURL }))
            : null != ed.artElement && (eN = ed.artElement),
        (0, a.jsxs)(o.EOs, {
            "data-migration-pending": !0,
            className: r()(C.zr, !ef && y),
            "aria-label": n,
            transitionState: H,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != eN &&
                    (0, a.jsxs)("div", {
                        className: ep,
                        children: [eN, J ? (0, a.jsx)("img", { className: C.CI, alt: "", src: S }) : null],
                    }),
                (0, a.jsx)(o.$mQ, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: r()(en ? C.es : C.Qs, !ef && R),
                    children: W
                        ? (0, a.jsx)(o.y$y, {})
                        : ef
                          ? (0, a.jsx)(N.Ay, {
                                onClose: w,
                                type: t,
                                subscriptionTier: eu?.subscription_trial?.sku_id ?? I.pe.TIER_2,
                                headingText: n,
                                context: O,
                                analyticsLocationObject: k,
                                discountOffer: em,
                                trialOffer: eu,
                                children: U,
                            })
                          : (0, a.jsxs)("div", {
                                className: C.hQ,
                                children: [
                                    er,
                                    (0, a.jsxs)("div", {
                                        className: C.kQ,
                                        children: [
                                            (0, a.jsxs)(o.Heading, {
                                                className: r()(C.wx, { [C.k]: en }, F),
                                                variant: "heading-xl/bold",
                                                children: [n, K ? (0, a.jsx)(m.A, { className: C.TN }) : null],
                                            }),
                                            eg ? (0, a.jsx)(b.A, { affinities: eL }) : void 0,
                                            es,
                                            (0, a.jsx)(o.Text, {
                                                variant: ec ? "text-sm/normal" : "text-md/normal",
                                                className: r()(z, C.uI),
                                                children: v,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, a.jsxs)(o.jlY, {
                    "data-migration-pending": !0,
                    className: r()(C.qr, eo, { [C.I$]: en }),
                    children: [
                        (0, a.jsxs)("div", {
                            className: r()(C.E3, { [C.Q_]: en }),
                            children: [
                                null != Q
                                    ? (0, a.jsx)(c.$n, {
                                          "data-migration-pending": !0,
                                          className: r()(C.Dc, V, { [C.HZ]: en }),
                                          onClick: G,
                                          size: c.$n.Sizes.SMALL,
                                          color: en ? c.$n.Colors.CUSTOM : c.$n.Colors.PRIMARY,
                                          look: c.$n.Looks.LINK,
                                          children: Q,
                                      })
                                    : null,
                                (() => {
                                    if (e_)
                                        return (0, a.jsx)(f.A, { analyticsLocation: k, guild: s.guild, onClose: w });
                                    let e = en ? j.intl.string(j.t.pj0XBN) : void 0;
                                    return (
                                        ef &&
                                            (null != eu
                                                ? (e = (0, x.FY)({
                                                      intervalType: eu?.subscription_trial?.interval,
                                                      intervalCount: eu?.subscription_trial?.interval_count,
                                                  }))
                                                : null != em &&
                                                  (e = j.intl.formatToPlainString(j.t.bkQ4bH, {
                                                      percent: em.discount.amount,
                                                  }))),
                                        (0, a.jsx)(E.A, {
                                            className: ea,
                                            showGradient: en || et,
                                            premiumModalAnalyticsLocation: k,
                                            subscriptionTier: X,
                                            size: c.$n.Sizes.SMALL,
                                            color: en || et ? c.$n.Colors.CUSTOM : c.$n.Colors.GREEN,
                                            onClick: () => {
                                                $?.(), w();
                                            },
                                            onSubscribeModalClose: B,
                                            textOptions: { textOverride: Y ?? e },
                                        })
                                    );
                                })(),
                            ],
                        }),
                        !q &&
                            !en &&
                            (0, a.jsx)(o.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: null != ee ? ee : j.intl.string(j.t["13/7kX"]),
                                onClick: w,
                            }),
                    ],
                }),
                en ? (0, a.jsx)(o.s_y, { "data-migration-pending": !0, onClick: w, className: C.b }) : null,
                el,
            ],
        })
    );
}
