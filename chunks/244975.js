"use strict";
n.d(t, { A: () => L });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(421380),
    u = n(397927),
    c = n(384904),
    d = n(793574),
    _ = n(688810),
    f = n(611371),
    h = n(721923),
    p = n(954571),
    g = n(927578),
    E = n(560138),
    A = n(422936),
    I = n(234419),
    T = n(465794),
    y = n(511484),
    S = n(811611),
    v = n(841252),
    C = n(788868),
    b = n(652215),
    N = n(985018),
    R = n(953239),
    O = n(669149);
function D(e) {
    switch (e) {
        case C.e.ANIMATED_AVATAR_MODAL_UPSELL:
        case C.e.ANIMATED_BANNER_MODAL_UPSELL:
        case C.e.PROFILE_EFFECT_MODAL_UPSELL:
        case C.e.AVATAR_DECORATION_MODAL_UPSELL:
        case C.e.FOR_LATER_MODAL_UPSELL:
        case C.e.VOICE_FILTERS_UPSELL:
            return !0;
        default:
            return !1;
    }
}
function L(e) {
    let {
            title: t,
            type: n,
            guildBoostProps: a,
            analyticsSource: L,
            analyticsLocation: w,
            body: x,
            context: P,
            glowUp: M,
            modalClassName: k,
            modalContentClassName: U,
            artContainerClassName: G,
            artClassName: F,
            headerClassName: V,
            bodyClassName: B,
            transitionState: j,
            onClose: H,
            onSubscribeClick: Y,
            onSubscribeFinish: W,
            onSecondaryClick: K,
            secondaryCTA: $,
            secondaryCTAClassName: z,
            subscribeButtonText: q,
            showNewBadge: X = !1,
            showBetaBadge: Z = !1,
            enableArtBoxShadow: Q = !0,
            subscriptionTier: J = C.pe.TIER_2,
            isLoading: ee = !1,
            hideBackButton: et,
            backButtonText: en,
            showEnhancedUpsell: er,
            useSubscribeButtonGradient: ei,
            subscribeButtonClassname: ea,
            hidePremiumOfferUpsell: es,
            children: eo,
            LeadingComponent: el,
            backgroundElements: eu,
            smallText: ec = !1,
            footerClassName: ed,
            ...e_
        } = e,
        ef = null != a,
        eh = (0, I.V)(),
        ep = (0, A.O)(),
        em = !es && (eh?.subscription_trial?.sku_id === J || (0, y.U9)(ep, J)) && !ef,
        { analyticsLocations: eg } = (0, _.Ay)(d.A.PREMIUM_UPSELL_MODAL),
        eE = { analyticsLocation: w, analyticsLocations: eg, analyticsSource: L, guildBoostProps: a, type: n },
        eA = i.useRef(eE);
    i.useEffect(() => {
        eA.current = eE;
    }),
        i.useEffect(() => {
            if (ee) return;
            let {
                analyticsLocation: e,
                analyticsLocations: t,
                analyticsSource: n,
                guildBoostProps: r,
                type: i,
            } = eA.current;
            ef
                ? p.default.track(b.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: `${i} - Tier ${r?.boostedGuildTier}`,
                      guild_id: r?.guild.id,
                      channel_id: r?.channelId,
                      location: e,
                      location_stack: t,
                  })
                : p.default.track(b.HAw.PREMIUM_UPSELL_VIEWED, {
                      type: i,
                      source: n,
                      location: e,
                      location_stack: t,
                      sku_id: (0, g.mH)(J),
                  });
        }, [ef, J, ee]);
    let eI = (0, o.bG)([E.A], () => E.A.affinities),
        eT = eI.length > 1 && D(n),
        ey = (0, o.bG)([E.A], () => E.A.hasFetched);
    i.useEffect(() => {
        ey || c.xG();
    }, [ey]);
    let eS = () => {
            if (ef) return (0, r.jsx)(h.A, { analyticsLocation: w, guild: a.guild, onClose: H });
            let e = er ? N.intl.string(N.t.pj0XBN) : void 0;
            return (
                em &&
                    (null != eh
                        ? (e = (0, g.FY)({
                              intervalType: eh?.subscription_trial?.interval,
                              intervalCount: eh?.subscription_trial?.interval_count,
                          }))
                        : null != ep && (e = N.intl.formatToPlainString(N.t.bkQ4bH, { percent: ep.discount.amount }))),
                (0, r.jsx)(T.A, {
                    className: ea,
                    showGradient: er || ei,
                    premiumModalAnalyticsLocation: w,
                    subscriptionTier: J,
                    size: l.$n.Sizes.SMALL,
                    color: er || ei ? l.$n.Colors.CUSTOM : l.$n.Colors.GREEN,
                    onClick: () => {
                        Y?.(), H();
                    },
                    onSubscribeModalClose: W,
                    textOptions: { textOverride: q ?? e },
                })
            );
        },
        ev = Q ? s()(R.JS, R.OV, G) : s()(R.JS, G),
        eC = null;
    return (
        null != e_.artURL
            ? (eC = (0, r.jsx)("img", { className: s()(F, R.Qw), alt: "", src: e_.artURL }))
            : null != e_.artElement && (eC = e_.artElement),
        (0, r.jsxs)(u.EOs, {
            "data-migration-pending": !0,
            className: s()(R.zr, !em && k),
            "aria-label": t,
            transitionState: j,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != eC &&
                    (0, r.jsxs)("div", {
                        className: ev,
                        children: [eC, X ? (0, r.jsx)("img", { className: R.CI, alt: "", src: O }) : null],
                    }),
                (0, r.jsx)(u.$mQ, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: s()(er ? R.es : R.Qs, !em && U),
                    children: ee
                        ? (0, r.jsx)(u.y$y, {})
                        : em
                          ? (0, r.jsx)(S.Ay, {
                                onClose: H,
                                type: n,
                                subscriptionTier: eh?.subscription_trial?.sku_id ?? C.pe.TIER_2,
                                headingText: t,
                                context: P,
                                analyticsLocationObject: w,
                                discountOffer: ep,
                                trialOffer: eh,
                                children: M,
                            })
                          : (0, r.jsxs)("div", {
                                className: R.hQ,
                                children: [
                                    el,
                                    (0, r.jsxs)("div", {
                                        className: R.kQ,
                                        children: [
                                            (0, r.jsxs)(u.Heading, {
                                                className: s()(R.wx, { [R.k]: er }, V),
                                                variant: "heading-xl/bold",
                                                children: [t, Z ? (0, r.jsx)(f.A, { className: R.TN }) : null],
                                            }),
                                            eT ? (0, r.jsx)(v.A, { affinities: eI }) : void 0,
                                            eo,
                                            (0, r.jsx)(u.Text, {
                                                variant: ec ? "text-sm/normal" : "text-md/normal",
                                                className: s()(B, R.uI),
                                                children: x,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, r.jsxs)(u.jlY, {
                    "data-migration-pending": !0,
                    className: s()(R.qr, ed, { [R.I$]: er }),
                    children: [
                        (0, r.jsxs)("div", {
                            className: s()(R.E3, { [R.Q_]: er }),
                            children: [
                                null != $
                                    ? (0, r.jsx)(l.$n, {
                                          "data-migration-pending": !0,
                                          className: s()(R.Dc, z, { [R.HZ]: er }),
                                          onClick: K,
                                          size: l.$n.Sizes.SMALL,
                                          color: er ? l.$n.Colors.CUSTOM : l.$n.Colors.PRIMARY,
                                          look: l.$n.Looks.LINK,
                                          children: $,
                                      })
                                    : null,
                                eS(),
                            ],
                        }),
                        !et &&
                            !er &&
                            (0, r.jsx)(u.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: null != en ? en : N.intl.string(N.t["13/7kX"]),
                                onClick: H,
                            }),
                    ],
                }),
                er ? (0, r.jsx)(u.s_y, { "data-migration-pending": !0, onClick: H, className: R.b }) : null,
                eu,
            ],
        })
    );
}
