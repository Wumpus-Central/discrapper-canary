n.d(t, {
    U: () => x,
    Z: () => L,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(990547),
    l = n(442837),
    c = n(692547),
    u = n(755721),
    d = n(481060),
    f = n(493683),
    _ = n(529103),
    p = n(700582),
    h = n(906732),
    m = n(213609),
    g = n(541716),
    E = n(28546),
    b = n(963249),
    y = n(594174),
    O = n(626135),
    v = n(51144),
    I = n(479446),
    T = n(795448),
    S = n(441623),
    A = n(317271),
    C = n(474936),
    N = n(981631),
    R = n(957825),
    P = n(268685),
    w = n(388032),
    D = n(553517),
    x = (function (e) {
        return (e.SYSTEM_MESSAGE = "system_message"), (e.COACHMARK = "coachmark"), e;
    })({});
function L(e) {
    let {
            giftIntentType: t,
            premiumGiftIntentCardType: n,
            recipientUser: a,
            onMouseEnter: x,
            onMouseLeave: L,
            popoutPosition: M,
            analyticsPage: j,
            analyticsSection: k,
            glow: U,
            giftIntentSecondaryAction: G,
        } = e,
        B = (0, l.e7)([y.default], () => y.default.getCurrentUser()),
        { analyticsLocations: Z } = (0, h.ZP)(),
        F = (0, l.e7)([S.Z], () => S.Z.getFriendAnniversaryYears(a.id));
    i.useEffect(() => {
        (0, m.h)({
            name: s.ImpressionNames.GIFT_INTENT_CARD,
            type: s.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                type: n,
                num_friend_anniversaries: S.Z.getFriendAnniversaries().length,
            },
        });
    }, [t, n]);
    let V = () =>
            t === C.hX.FRIEND_ANNIVERSARY
                ? w.intl.formatToPlainString(w.t.BWJvAK, { friendUserName: v.ZP.getName(a) })
                : (0, I.Ou)(t),
        H = () =>
            t === C.hX.FRIEND_ANNIVERSARY ? w.intl.formatToPlainString(w.t.S3fdq7, { numberOfYears: F }) : (0, I.Ou)(t),
        Y = () => {
            switch (G) {
                case C.X2.VIEW_ALL:
                    return w.intl.string(w.t.WkxniM);
                case C.X2.SEND_MESSAGE:
                    return w.intl.string(w.t.I61IsE);
                default:
                    return;
            }
        },
        W = () =>
            t === C.hX.FRIEND_ANNIVERSARY
                ? w.intl.formatToPlainString(w.t["L2s/N3"], { numberOfYears: F })
                : (0, I.Ou)(t),
        K = (e) => {
            e.stopPropagation();
            let r = (0, A.F)(t);
            (0, b.Z)({
                isGift: !0,
                initialPlanId: null,
                giftRecipient: a,
                analyticsLocation: "system_message" === n ? r.chat : r.actionButtonCoachmark,
                analyticsLocations: Z,
                analyticsObject: {
                    page: j,
                    section: k,
                    object: N.qAy.BUTTON_CTA,
                    objectType: N.AnalyticsObjectTypes.GIFT,
                },
                giftMessage: W(),
            });
        },
        z = (e) => {
            e.stopPropagation(),
                O.default.track(N.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                    gift_intent_type: t,
                    cta_type: G,
                }),
                G === C.X2.VIEW_ALL
                    ? _.Z.transitionToSection(N.pJs.ALL, { explicit: !0 })
                    : G === C.X2.SEND_MESSAGE &&
                      ((0, T.PV)(a.id),
                      f.Z.openPrivateChannel({ recipientIds: a.id }).then(() => {
                          setTimeout(() => {
                              (0, E.PG)(R.X1.GIF, g.Ie.NORMAL),
                                  setTimeout(() => {
                                      (0, E.ql)(w.intl.string(w.t.jrtJi4), !0);
                                  }, 50);
                          }, 100);
                      }));
        },
        q = "coachmark" === n,
        X = q ? D.innerContentCoachmark : D.innerContent,
        Q = q ? D.recipientUserAvatarCoachmark : D.recipientUserAvatar,
        J = q ? D.currentUserAvatarCoachmark : D.currentUserAvatar,
        $ = q ? "header-primary" : "always-white",
        ee = q ? D.subHeaderTextCoachmark : D.subHeaderText,
        et = q ? u.zx.Colors.BRAND : u.zx.Colors.WHITE,
        en = q ? c.Z.colors.WHITE : c.Z.colors.BG_BRAND,
        er = q ? D.buttonTextPrimaryCoachmark : D.buttonTextPrimary,
        ei = q ? D.buttonSecondaryCoachmark : D.buttonSecondary,
        ea = q ? D.buttonTextSecondaryCoachmark : D.buttonTextSecondary;
    return (0, r.jsx)("div", {
        className: o()(D.content, {
            [D.outerGlow]: U,
            [D.contentCoachmark]: q,
        }),
        onMouseEnter: x,
        onMouseLeave: L,
        children: (0, r.jsxs)("div", {
            className: o()(X, { [D.innerGlow]: U }),
            children: [
                (0, r.jsxs)("div", {
                    className: D.subContent,
                    children: [
                        (0, r.jsxs)("div", {
                            className: D.avatars,
                            children: [
                                (0, r.jsx)(p.Z, {
                                    className: Q,
                                    user: a,
                                    "aria-label": a.username,
                                    size: P.EF.SIZE_56,
                                }),
                                null != B &&
                                    (0, r.jsx)(p.Z, {
                                        className: J,
                                        user: B,
                                        "aria-label": a.username,
                                        size: P.EF.SIZE_24,
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: D.textContainer,
                            children: [
                                (0, r.jsx)(d.Text, {
                                    variant: "text-md/medium",
                                    color: $,
                                    lineClamp: 3,
                                    children: V(),
                                }),
                                (0, r.jsx)(d.Text, {
                                    className: ee,
                                    variant: "text-sm/normal",
                                    children: H(),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: D.buttonContainer,
                    children: [
                        null != G &&
                            (0, r.jsx)(u.zx, {
                                "data-migration-pending": !0,
                                className: o()(D.button, ei),
                                onClick: z,
                                size: u.zx.Sizes.MEDIUM,
                                color: u.zx.Colors.CUSTOM,
                                look: u.zx.Looks.OUTLINED,
                                children: (0, r.jsx)("div", {
                                    className: D.buttonContentContainer,
                                    children: (0, r.jsx)(d.Text, {
                                        variant: "text-sm/medium",
                                        className: o()(D.buttonText, ea),
                                        children: Y(),
                                    }),
                                }),
                            }),
                        (0, r.jsx)(u.zx, {
                            "data-migration-pending": !0,
                            className: D.button,
                            onClick: K,
                            size: u.zx.Sizes.MEDIUM,
                            color: et,
                            children: (0, r.jsxs)("div", {
                                className: D.buttonContentContainer,
                                children: [
                                    (0, r.jsx)(d.OgN, {
                                        color: en,
                                        size: "custom",
                                        width: "14",
                                        height: "14",
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        variant: "text-sm/medium",
                                        className: o()(D.buttonText, er),
                                        children: w.intl.string(w.t["wg/30i"]),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                null != M &&
                    (0, r.jsx)("div", {
                        className: o()(D.connector, {
                            [D.leftPopoutConnector]: "left" === M,
                            [D.rightPopoutConnector]: "right" === M,
                        }),
                    }),
            ],
        }),
    });
}
