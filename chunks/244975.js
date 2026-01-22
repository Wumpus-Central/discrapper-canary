n.d(t, {
    A: () => D,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(421380),
    c = n(397927),
    u = n(384904),
    d = n(793574),
    f = n(688810),
    p = n(611371),
    _ = n(721923),
    h = n(954571),
    m = n(927578),
    g = n(560138),
    E = n(422936),
    b = n(234419),
    y = n(465794),
    O = n(511484),
    A = n(811611),
    v = n(841252),
    S = n(788868),
    I = n(652215),
    T = n(985018),
    C = n(953239),
    N = n(669149);

function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = w(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function P(e) {
    switch (e) {
        case S.e.ANIMATED_AVATAR_MODAL_UPSELL:
        case S.e.ANIMATED_BANNER_MODAL_UPSELL:
        case S.e.PROFILE_EFFECT_MODAL_UPSELL:
        case S.e.AVATAR_DECORATION_MODAL_UPSELL:
        case S.e.FOR_LATER_MODAL_UPSELL:
        case S.e.VOICE_FILTERS_UPSELL:
            return !0;
        default:
            return !1;
    }
}

function D(e) {
    var t, n, a;
    let {
            title: w,
            type: D,
            guildBoostProps: x,
            analyticsSource: L,
            analyticsLocation: j,
            body: M,
            context: k,
            glowUp: U,
            modalClassName: G,
            modalContentClassName: V,
            artContainerClassName: F,
            artClassName: B,
            headerClassName: H,
            bodyClassName: Y,
            transitionState: W,
            onClose: K,
            onSubscribeClick: z,
            onSubscribeFinish: q,
            onSecondaryClick: X,
            secondaryCTA: Z,
            secondaryCTAClassName: Q,
            subscribeButtonText: $,
            showNewBadge: J = !1,
            showBetaBadge: ee = !1,
            enableArtBoxShadow: et = !0,
            subscriptionTier: en = S.pe.TIER_2,
            isLoading: er = !1,
            hideBackButton: ei,
            backButtonText: ea,
            showEnhancedUpsell: es,
            useSubscribeButtonGradient: eo,
            subscribeButtonClassname: el,
            hidePremiumOfferUpsell: ec,
            children: eu,
            LeadingComponent: ed,
            backgroundElements: ef,
            smallText: ep = !1,
            footerClassName: e_,
        } = e,
        eh = R(e, [
            "title",
            "type",
            "guildBoostProps",
            "analyticsSource",
            "analyticsLocation",
            "body",
            "context",
            "glowUp",
            "modalClassName",
            "modalContentClassName",
            "artContainerClassName",
            "artClassName",
            "headerClassName",
            "bodyClassName",
            "transitionState",
            "onClose",
            "onSubscribeClick",
            "onSubscribeFinish",
            "onSecondaryClick",
            "secondaryCTA",
            "secondaryCTAClassName",
            "subscribeButtonText",
            "showNewBadge",
            "showBetaBadge",
            "enableArtBoxShadow",
            "subscriptionTier",
            "isLoading",
            "hideBackButton",
            "backButtonText",
            "showEnhancedUpsell",
            "useSubscribeButtonGradient",
            "subscribeButtonClassname",
            "hidePremiumOfferUpsell",
            "children",
            "LeadingComponent",
            "backgroundElements",
            "smallText",
            "footerClassName",
        ]),
        em = null != x,
        eg = (0, b.V)(),
        eE = (0, E.O)(),
        eb =
            !ec &&
            ((null == eg || null == (n = eg.subscription_trial) ? void 0 : n.sku_id) === en || (0, O.U9)(eE, en)) &&
            !em,
        { analyticsLocations: ey } = (0, f.Ay)(d.A.PREMIUM_UPSELL_MODAL),
        eO = {
            analyticsLocation: j,
            analyticsLocations: ey,
            analyticsSource: L,
            guildBoostProps: x,
            type: D,
        },
        eA = i.useRef(eO);
    i.useEffect(() => {
        eA.current = eO;
    }),
        i.useEffect(() => {
            if (er) return;
            let {
                analyticsLocation: e,
                analyticsLocations: t,
                analyticsSource: n,
                guildBoostProps: r,
                type: i,
            } = eA.current;
            em
                ? h.default.track(I.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: "".concat(i, " - Tier ").concat(null == r ? void 0 : r.boostedGuildTier),
                      guild_id: null == r ? void 0 : r.guild.id,
                      channel_id: null == r ? void 0 : r.channelId,
                      location: e,
                      location_stack: t,
                  })
                : h.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                      type: i,
                      source: n,
                      location: e,
                      location_stack: t,
                      sku_id: (0, m.mH)(en),
                  });
        }, [em, en, er]);
    let ev = (0, o.bG)([g.A], () => g.A.affinities),
        eS = ev.length > 1 && P(D),
        eI = (0, o.bG)([g.A], () => g.A.hasFetched);
    i.useEffect(() => {
        eI || u.xG();
    }, [eI]);
    let eT = () => {
            if (em)
                return (0, r.jsx)(_.A, {
                    analyticsLocation: j,
                    guild: x.guild,
                    onClose: K,
                });
            let e = es ? T.intl.string(T.t.pj0XBN) : void 0;
            if (eb)
                if (null != eg) {
                    var t, n;
                    e = (0, m.FY)({
                        intervalType: null == eg || null == (t = eg.subscription_trial) ? void 0 : t.interval,
                        intervalCount: null == eg || null == (n = eg.subscription_trial) ? void 0 : n.interval_count,
                    });
                } else
                    null != eE &&
                        (e = T.intl.formatToPlainString(T.t.bkQ4bH, {
                            percent: eE.discount.amount,
                        }));
            return (0, r.jsx)(y.A, {
                className: el,
                showGradient: es || eo,
                premiumModalAnalyticsLocation: j,
                subscriptionTier: en,
                size: l.$n.Sizes.SMALL,
                color: es || eo ? l.$n.Colors.CUSTOM : l.$n.Colors.GREEN,
                onClick: () => {
                    null == z || z(), K();
                },
                onSubscribeModalClose: q,
                textOptions: {
                    textOverride: null != $ ? $ : e,
                },
            });
        },
        eC = et ? s()(C.JS, C.OV, F) : s()(C.JS, F),
        eN = null;
    return (
        null != eh.artURL
            ? (eN = (0, r.jsx)("img", {
                  className: s()(B, C.Qw),
                  alt: "",
                  src: eh.artURL,
              }))
            : null != eh.artElement && (eN = eh.artElement),
        (0, r.jsxs)(c.EOs, {
            "data-migration-pending": !0,
            className: s()(C.zr, !eb && G),
            "aria-label": w,
            transitionState: W,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != eN &&
                    (0, r.jsxs)("div", {
                        className: eC,
                        children: [
                            eN,
                            J
                                ? (0, r.jsx)("img", {
                                      className: C.CI,
                                      alt: "",
                                      src: N,
                                  })
                                : null,
                        ],
                    }),
                (0, r.jsx)(c.$mQ, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: s()(es ? C.es : C.Qs, !eb && V),
                    children: er
                        ? (0, r.jsx)(c.y$y, {})
                        : eb
                          ? (0, r.jsx)(A.Ay, {
                                onClose: K,
                                type: D,
                                subscriptionTier:
                                    null != (t = null == eg || null == (a = eg.subscription_trial) ? void 0 : a.sku_id)
                                        ? t
                                        : S.pe.TIER_2,
                                headingText: w,
                                context: k,
                                analyticsLocationObject: j,
                                discountOffer: eE,
                                trialOffer: eg,
                                children: U,
                            })
                          : (0, r.jsxs)("div", {
                                className: C.hQ,
                                children: [
                                    ed,
                                    (0, r.jsxs)("div", {
                                        className: C.kQ,
                                        children: [
                                            (0, r.jsxs)(c.Heading, {
                                                className: s()(
                                                    C.wx,
                                                    {
                                                        [C.k]: es,
                                                    },
                                                    H,
                                                ),
                                                variant: "heading-xl/bold",
                                                children: [
                                                    w,
                                                    ee
                                                        ? (0, r.jsx)(p.A, {
                                                              className: C.TN,
                                                          })
                                                        : null,
                                                ],
                                            }),
                                            eS
                                                ? (0, r.jsx)(v.A, {
                                                      affinities: ev,
                                                  })
                                                : void 0,
                                            eu,
                                            (0, r.jsx)(c.Text, {
                                                variant: ep ? "text-sm/normal" : "text-md/normal",
                                                className: s()(Y, C.uI),
                                                children: M,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, r.jsxs)(c.jlY, {
                    "data-migration-pending": !0,
                    className: s()(C.qr, e_, {
                        [C.I$]: es,
                    }),
                    children: [
                        (0, r.jsxs)("div", {
                            className: s()(C.E3, {
                                [C.Q_]: es,
                            }),
                            children: [
                                null != Z
                                    ? (0, r.jsx)(l.$n, {
                                          "data-migration-pending": !0,
                                          className: s()(C.Dc, Q, {
                                              [C.HZ]: es,
                                          }),
                                          onClick: X,
                                          size: l.$n.Sizes.SMALL,
                                          color: es ? l.$n.Colors.CUSTOM : l.$n.Colors.PRIMARY,
                                          look: l.$n.Looks.LINK,
                                          children: Z,
                                      })
                                    : null,
                                eT(),
                            ],
                        }),
                        !ei &&
                            !es &&
                            (0, r.jsx)(c.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: null != ea ? ea : T.intl.string(T.t["13/7kX"]),
                                onClick: K,
                            }),
                    ],
                }),
                es
                    ? (0, r.jsx)(c.s_y, {
                          "data-migration-pending": !0,
                          onClick: K,
                          className: C.b,
                      })
                    : null,
                ef,
            ],
        })
    );
}
