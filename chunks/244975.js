t.d(n, { A: () => M, F: () => O });
var i = t(627968),
    a = t(64700),
    l = t(503698),
    s = t.n(l),
    r = t(934551),
    c = t(311907),
    o = t(421380),
    u = t(397927),
    d = t(793574),
    m = t(688810),
    f = t(323082),
    x = t(611371),
    _ = t(721923),
    h = t(954571),
    p = t(927578),
    g = t(560138),
    A = t(422936),
    E = t(234419),
    L = t(725807),
    N = t(783420),
    j = t(511484),
    v = t(811611),
    T = t(841252),
    b = t(788868),
    k = t(652215),
    I = t(985018),
    S = t(790344),
    C = t(669149);
function M(e) {
    let {
            title: n,
            type: t,
            guildBoostProps: l,
            analyticsSource: r,
            analyticsLocation: N,
            body: M,
            context: O,
            glowUp: y,
            modalClassName: P,
            modalContentClassName: R,
            artContainerClassName: U,
            artClassName: F,
            headerClassName: D,
            bodyClassName: z,
            transitionState: H,
            onClose: $,
            onSubscribeClick: w,
            onSubscribeFinish: G,
            onSecondaryClick: Q,
            secondaryCTA: V,
            secondaryCTAClassName: Y,
            subscribeButtonText: B,
            showNewBadge: X = !1,
            showBetaBadge: Z = !1,
            enableArtBoxShadow: J = !0,
            subscriptionTier: K = b.pe.TIER_2,
            isLoading: W = !1,
            hideBackButton: q,
            backButtonText: ee,
            showEnhancedUpsell: en,
            useSubscribeButtonGradient: et,
            subscribeButtonClassname: ei,
            hidePremiumOfferUpsell: ea,
            children: el,
            LeadingComponent: es,
            backgroundElements: er,
            smallText: ec = !1,
            footerClassName: eo,
            ...eu
        } = e,
        ed = null != l,
        em = (0, E.V)(),
        ef = (0, A.O)(),
        ex = !ea && (em?.subscription_trial?.sku_id === K || (0, j.U9)(ef, K)) && !ed,
        { analyticsLocations: e_ } = (0, m.Ay)(d.A.PREMIUM_UPSELL_MODAL),
        eh = { analyticsLocation: N, analyticsLocations: e_, analyticsSource: r, guildBoostProps: l, type: t },
        ep = a.useRef(eh);
    a.useEffect(() => {
        ep.current = eh;
    }),
        a.useEffect(() => {
            if (W) return;
            let {
                analyticsLocation: e,
                analyticsLocations: n,
                analyticsSource: t,
                guildBoostProps: i,
                type: a,
            } = ep.current;
            ed
                ? h.default.track(k.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: `${a} - Tier ${i?.boostedGuildTier}`,
                      guild_id: i?.guild.id,
                      channel_id: i?.channelId,
                      location: e,
                      location_stack: n,
                  })
                : h.default.track(k.HAw.PREMIUM_UPSELL_VIEWED, {
                      type: a,
                      source: t,
                      location: e,
                      location_stack: n,
                      sku_id: (0, p.mH)(K),
                  });
        }, [ed, K, W]);
    let eg = (0, c.bG)([g.A], () => g.A.affinities),
        eA =
            eg.length > 1 &&
            (function (e) {
                switch (e) {
                    case b.e.ANIMATED_AVATAR_MODAL_UPSELL:
                    case b.e.ANIMATED_BANNER_MODAL_UPSELL:
                    case b.e.PROFILE_EFFECT_MODAL_UPSELL:
                    case b.e.AVATAR_DECORATION_MODAL_UPSELL:
                    case b.e.FOR_LATER_MODAL_UPSELL:
                        return !0;
                    default:
                        return !1;
                }
            })(t),
        eE = (0, c.bG)([g.A], () => g.A.hasFetched);
    a.useEffect(() => {
        eE || f.xG();
    }, [eE]);
    let eL = J ? s()(S.JS, S.OV, U) : s()(S.JS, U),
        eN = null;
    return (
        null != eu.artURL
            ? (eN = (0, i.jsx)("img", { className: s()(F, S.Qw), alt: "", src: eu.artURL }))
            : null != eu.artElement && (eN = eu.artElement),
        (0, i.jsxs)(u.EOs, {
            "data-migration-pending": !0,
            className: s()(S.zr, !ex && P),
            "aria-label": n,
            transitionState: H,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != eN &&
                    (0, i.jsxs)("div", {
                        className: eL,
                        children: [eN, X ? (0, i.jsx)("img", { className: S.CI, alt: "", src: C }) : null],
                    }),
                (0, i.jsx)(u.$mQ, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: s()(en ? S.es : S.Qs, !ex && R),
                    children: W
                        ? (0, i.jsx)(u.y$y, {})
                        : ex
                          ? (0, i.jsx)(v.Ay, {
                                onClose: $,
                                type: t,
                                subscriptionTier: em?.subscription_trial?.sku_id ?? b.pe.TIER_2,
                                headingText: n,
                                context: O,
                                analyticsLocationObject: N,
                                discountOffer: ef,
                                trialOffer: em,
                                children: y,
                            })
                          : (0, i.jsxs)("div", {
                                className: S.hQ,
                                children: [
                                    es,
                                    (0, i.jsxs)("div", {
                                        className: S.kQ,
                                        children: [
                                            (0, i.jsxs)(u.Heading, {
                                                className: s()(S.wx, { [S.k]: en }, D),
                                                variant: "heading-xl/bold",
                                                children: [n, Z ? (0, i.jsx)(x.A, { className: S.TN }) : null],
                                            }),
                                            eA ? (0, i.jsx)(T.A, { affinities: eg }) : void 0,
                                            el,
                                            (0, i.jsx)(u.Text, {
                                                variant: ec ? "text-sm/normal" : "text-md/normal",
                                                className: s()(z, S.uI),
                                                children: M,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, i.jsxs)(u.jlY, {
                    "data-migration-pending": !0,
                    className: s()(S.qr, eo, { [S.I$]: en }),
                    children: [
                        (0, i.jsxs)("div", {
                            className: s()(S.E3, { [S.Q_]: en }),
                            children: [
                                null != V
                                    ? (0, i.jsx)(o.$n, {
                                          "data-migration-pending": !0,
                                          className: s()(S.Dc, Y, { [S.HZ]: en }),
                                          onClick: Q,
                                          size: o.$n.Sizes.SMALL,
                                          color: en ? o.$n.Colors.CUSTOM : o.$n.Colors.PRIMARY,
                                          look: o.$n.Looks.LINK,
                                          children: V,
                                      })
                                    : null,
                                (() => {
                                    if (ed)
                                        return (0, i.jsx)(_.A, { analyticsLocation: N, guild: l.guild, onClose: $ });
                                    let e = en ? I.intl.string(I.t.pj0XBN) : void 0;
                                    return (
                                        ex &&
                                            (null != em
                                                ? (e = (0, p.FY)({
                                                      intervalType: em?.subscription_trial?.interval,
                                                      intervalCount: em?.subscription_trial?.interval_count,
                                                  }))
                                                : null != ef &&
                                                  (e = I.intl.formatToPlainString(I.t.bkQ4bH, {
                                                      percent: ef.discount.amount,
                                                  }))),
                                        (0, i.jsx)(L.A, {
                                            className: ei,
                                            showGradient: en || et,
                                            premiumModalAnalyticsLocation: N,
                                            subscriptionTier: K,
                                            size: o.$n.Sizes.SMALL,
                                            color: en || et ? o.$n.Colors.CUSTOM : o.$n.Colors.GREEN,
                                            onClick: () => {
                                                w?.(), $();
                                            },
                                            onSubscribeModalClose: G,
                                            textOptions: { textOverride: B ?? e },
                                        })
                                    );
                                })(),
                            ],
                        }),
                        !q &&
                            !en &&
                            (0, i.jsx)(u.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: null != ee ? ee : I.intl.string(I.t["13/7kX"]),
                                onClick: $,
                            }),
                    ],
                }),
                en ? (0, i.jsx)(u.s_y, { "data-migration-pending": !0, onClick: $, className: S.b }) : null,
                er,
            ],
        })
    );
}
function O(e) {
    let {
            transitionState: n,
            title: t,
            subtitle: a,
            graphic: l,
            guildBoostProps: s,
            onClose: c,
            onSecondaryClick: o,
            secondaryCTA: d,
            showNewBadge: m = !1,
            showBetaBadge: f = !1,
            subscriptionTier: x = b.pe.TIER_2,
            hidePremiumOfferUpsell: _,
            children: h,
        } = e,
        g = (0, E.V)(),
        L = (0, A.O)(),
        v = !_ && (g?.subscription_trial?.sku_id === x || (0, j.U9)(L, x)) && null == s,
        T = I.intl.string(I.t.pj0XBN);
    v &&
        (null != g
            ? (T = (0, p.FY)({
                  intervalType: g?.subscription_trial?.interval,
                  intervalCount: g?.subscription_trial?.interval_count,
              }))
            : null != L && (T = I.intl.formatToPlainString(I.t.bkQ4bH, { percent: L.discount.amount })));
    let k = null;
    return (
        m ? (k = "new") : f && (k = "beta"),
        null != g && (k = "free_trial"),
        (0, i.jsx)(N.A, {
            subscriptionTier: x,
            children: (e) => {
                let { onClick: s } = e;
                return (0, i.jsx)(u.kpP, {
                    title: t,
                    subtitle: a,
                    graphic: l,
                    gradientColor: "nitro-pink",
                    transitionState: n,
                    onClose: async () => await c(),
                    actions: [
                        { text: d, variant: "secondary", size: "md", onClick: o },
                        {
                            text: T,
                            variant: "expressive",
                            size: "md",
                            onClick: async (e) => {
                                await c(), s(e);
                            },
                            icon: r.NitroWheelIcon,
                        },
                    ],
                    ...(null !== k && { badge: { type: k, variant: "expressive" } }),
                    children: h,
                });
            },
        })
    );
}
