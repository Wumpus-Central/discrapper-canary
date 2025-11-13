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
    D = n(388032),
    w = n(553517),
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
                ? D.intl.formatToPlainString(D.t.BWJvAK, { friendUserName: v.ZP.getName(a) })
                : (0, I.Ou)(t),
        H = () =>
            t === C.hX.FRIEND_ANNIVERSARY ? D.intl.formatToPlainString(D.t.S3fdq7, { numberOfYears: F }) : (0, I.Ou)(t),
        Y = () => {
            switch (G) {
                case C.X2.VIEW_ALL:
                    return D.intl.string(D.t.WkxniM);
                case C.X2.SEND_MESSAGE:
                    return D.intl.string(D.t.I61IsE);
                default:
                    return;
            }
        },
        W = () =>
            t === C.hX.FRIEND_ANNIVERSARY
                ? D.intl.formatToPlainString(D.t["L2s/N3"], { numberOfYears: F })
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
                                      (0, E.ql)(D.intl.string(D.t.jrtJi4), !0);
                                  }, 50);
                          }, 100);
                      }));
        },
        q = "coachmark" === n,
        X = q ? w.innerContentCoachmark : w.innerContent,
        Q = q ? w.recipientUserAvatarCoachmark : w.recipientUserAvatar,
        J = q ? w.currentUserAvatarCoachmark : w.currentUserAvatar,
        $ = q ? "header-primary" : "always-white",
        ee = q ? w.subHeaderTextCoachmark : w.subHeaderText,
        et = q ? u.zx.Colors.BRAND : u.zx.Colors.WHITE,
        en = q ? c.Z.colors.WHITE : c.Z.colors.BG_BRAND,
        er = q ? w.buttonTextPrimaryCoachmark : w.buttonTextPrimary,
        ei = q ? w.buttonSecondaryCoachmark : w.buttonSecondary,
        ea = q ? w.buttonTextSecondaryCoachmark : w.buttonTextSecondary;
    return (0, r.jsx)("div", {
        className: o()(w.content, {
            [w.outerGlow]: U,
            [w.contentCoachmark]: q,
        }),
        onMouseEnter: x,
        onMouseLeave: L,
        children: (0, r.jsxs)("div", {
            className: o()(X, { [w.innerGlow]: U }),
            children: [
                (0, r.jsxs)("div", {
                    className: w.subContent,
                    children: [
                        (0, r.jsxs)("div", {
                            className: w.avatars,
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
                            className: w.textContainer,
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
                    className: w.buttonContainer,
                    children: [
                        null != G &&
                            (0, r.jsx)(u.zx, {
                                "data-migration-pending": !0,
                                className: o()(w.button, ei),
                                onClick: z,
                                size: u.zx.Sizes.MEDIUM,
                                color: u.zx.Colors.CUSTOM,
                                look: u.zx.Looks.OUTLINED,
                                children: (0, r.jsx)("div", {
                                    className: w.buttonContentContainer,
                                    children: (0, r.jsx)(d.Text, {
                                        variant: "text-sm/medium",
                                        className: o()(w.buttonText, ea),
                                        children: Y(),
                                    }),
                                }),
                            }),
                        (0, r.jsx)(u.zx, {
                            "data-migration-pending": !0,
                            className: w.button,
                            onClick: K,
                            size: u.zx.Sizes.MEDIUM,
                            color: et,
                            children: (0, r.jsxs)("div", {
                                className: w.buttonContentContainer,
                                children: [
                                    (0, r.jsx)(d.OgN, {
                                        color: en,
                                        size: "custom",
                                        width: "14",
                                        height: "14",
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        variant: "text-sm/medium",
                                        className: o()(w.buttonText, er),
                                        children: D.intl.string(D.t["wg/30i"]),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                null != M &&
                    (0, r.jsx)("div", {
                        className: o()(w.connector, {
                            [w.leftPopoutConnector]: "left" === M,
                            [w.rightPopoutConnector]: "right" === M,
                        }),
                    }),
            ],
        }),
    });
}
