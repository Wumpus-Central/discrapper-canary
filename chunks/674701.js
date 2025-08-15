n.d(t, {
    U: () => R,
    Z: () => L,
});
var r,
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(990547),
    c = n(442837),
    u = n(692547),
    d = n(755721),
    p = n(481060),
    m = n(493683),
    f = n(529103),
    _ = n(700582),
    g = n(906732),
    h = n(213609),
    b = n(541716),
    E = n(28546),
    C = n(963249),
    v = n(594174),
    O = n(626135),
    y = n(51144),
    x = n(479446),
    j = n(795448),
    I = n(441623),
    S = n(317271),
    T = n(474936),
    P = n(981631),
    N = n(182294),
    A = n(957825),
    w = n(388032),
    Z = n(553517),
    R = (((r = {}).SYSTEM_MESSAGE = "system_message"), (r.COACHMARK = "coachmark"), r);
function L(e) {
    let {
            giftIntentType: t,
            premiumGiftIntentCardType: n,
            recipientUser: r,
            onMouseEnter: a,
            onMouseLeave: R,
            popoutPosition: L,
            analyticsPage: D,
            analyticsSection: M,
            glow: k,
            giftIntentSecondaryAction: U,
        } = e,
        F = (0, c.e7)([v.default], () => v.default.getCurrentUser()),
        { analyticsLocations: B } = (0, g.ZP)(),
        G = (0, c.e7)([I.Z], () => I.Z.getFriendAnniversaryYears(r.id));
    l.useEffect(() => {
        (0, h.h)({
            name: s.ImpressionNames.GIFT_INTENT_CARD,
            type: s.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                type: n,
                num_friend_anniversaries: I.Z.getFriendAnniversaries().length,
            },
        });
    }, [t, n]);
    let H = "coachmark" === n,
        V = H ? Z.innerContentCoachmark : Z.innerContent,
        z = H ? Z.recipientUserAvatarCoachmark : Z.recipientUserAvatar,
        W = H ? Z.currentUserAvatarCoachmark : Z.currentUserAvatar,
        Y = H ? Z.subHeaderTextCoachmark : Z.subHeaderText,
        K = H ? d.zx.Colors.BRAND : d.zx.Colors.WHITE,
        X = H ? u.Z.colors.WHITE : u.Z.colors.BG_BRAND,
        q = H ? Z.buttonTextPrimaryCoachmark : Z.buttonTextPrimary,
        Q = H ? Z.buttonSecondaryCoachmark : Z.buttonSecondary,
        J = H ? Z.buttonTextSecondaryCoachmark : Z.buttonTextSecondary;
    return (0, i.jsx)("div", {
        className: o()(Z.content, {
            [Z.outerGlow]: k,
            [Z.contentCoachmark]: H,
        }),
        onMouseEnter: a,
        onMouseLeave: R,
        children: (0, i.jsxs)("div", {
            className: o()(V, { [Z.innerGlow]: k }),
            children: [
                (0, i.jsxs)("div", {
                    className: Z.subContent,
                    children: [
                        (0, i.jsxs)("div", {
                            className: Z.avatars,
                            children: [
                                (0, i.jsx)(_.Z, {
                                    className: z,
                                    user: r,
                                    "aria-label": r.username,
                                    size: N.EF.SIZE_56,
                                }),
                                null != F &&
                                    (0, i.jsx)(_.Z, {
                                        className: W,
                                        user: F,
                                        "aria-label": r.username,
                                        size: N.EF.SIZE_24,
                                    }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: Z.textContainer,
                            children: [
                                (0, i.jsx)(p.Text, {
                                    variant: "text-md/medium",
                                    color: H ? "header-primary" : "always-white",
                                    lineClamp: 3,
                                    children:
                                        t === T.hX.FRIEND_ANNIVERSARY
                                            ? w.intl.formatToPlainString(w.t.BWJvAA, {
                                                  friendUserName: y.ZP.getName(r),
                                              })
                                            : (0, x.Ou)(t),
                                }),
                                (0, i.jsx)(p.Text, {
                                    className: Y,
                                    variant: "text-sm/normal",
                                    children:
                                        t === T.hX.FRIEND_ANNIVERSARY
                                            ? w.intl.formatToPlainString(w.t.S3fdq6, { numberOfYears: G })
                                            : (0, x.Ou)(t),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: Z.buttonContainer,
                    children: [
                        null != U &&
                            (0, i.jsx)(d.zx, {
                                className: o()(Z.button, Q),
                                onClick: (e) => {
                                    e.stopPropagation(),
                                        O.default.track(P.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                            gift_intent_type: t,
                                            cta_type: U,
                                        }),
                                        U === T.X2.VIEW_ALL
                                            ? f.Z.transitionToSection(P.pJs.ALL, { explicit: !0 })
                                            : U === T.X2.SEND_MESSAGE &&
                                              ((0, j.PV)(r.id),
                                              m.Z.openPrivateChannel({ recipientIds: r.id }).then(() => {
                                                  setTimeout(() => {
                                                      (0, E.PG)(A.X1.GIF, b.Ie.NORMAL),
                                                          setTimeout(() => {
                                                              (0, E.ql)(w.intl.string(w.t.jrtJi4), !0);
                                                          }, 50);
                                                  }, 100);
                                              }));
                                },
                                size: d.zx.Sizes.MEDIUM,
                                color: d.zx.Colors.CUSTOM,
                                look: d.zx.Looks.OUTLINED,
                                children: (0, i.jsx)("div", {
                                    className: Z.buttonContentContainer,
                                    children: (0, i.jsx)(p.Text, {
                                        variant: "text-sm/medium",
                                        className: o()(Z.buttonText, J),
                                        children: (() => {
                                            switch (U) {
                                                case T.X2.VIEW_ALL:
                                                    return w.intl.string(w.t.WkxniI);
                                                case T.X2.SEND_MESSAGE:
                                                    return w.intl.string(w.t.I61IsL);
                                                default:
                                                    return;
                                            }
                                        })(),
                                    }),
                                }),
                            }),
                        (0, i.jsx)(d.zx, {
                            className: Z.button,
                            onClick: (e) => {
                                e.stopPropagation();
                                let i = (0, S.F)(t);
                                (0, C.Z)({
                                    isGift: !0,
                                    initialPlanId: null,
                                    giftRecipient: r,
                                    analyticsLocation: "system_message" === n ? i.chat : i.actionButtonCoachmark,
                                    analyticsLocations: B,
                                    analyticsObject: {
                                        page: D,
                                        section: M,
                                        object: P.qAy.BUTTON_CTA,
                                        objectType: P.Qqv.GIFT,
                                    },
                                    giftMessage:
                                        t === T.hX.FRIEND_ANNIVERSARY
                                            ? w.intl.formatToPlainString(w.t["L2s/Nz"], { numberOfYears: G })
                                            : (0, x.Ou)(t),
                                });
                            },
                            size: d.zx.Sizes.MEDIUM,
                            color: K,
                            children: (0, i.jsxs)("div", {
                                className: Z.buttonContentContainer,
                                children: [
                                    (0, i.jsx)(p.OgN, {
                                        color: X,
                                        size: "custom",
                                        width: "14",
                                        height: "14",
                                    }),
                                    (0, i.jsx)(p.Text, {
                                        variant: "text-sm/medium",
                                        className: o()(Z.buttonText, q),
                                        children: w.intl.string(w.t["wg/30t"]),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                null != L &&
                    (0, i.jsx)("div", {
                        className: o()(Z.connector, {
                            [Z.leftPopoutConnector]: "left" === L,
                            [Z.rightPopoutConnector]: "right" === L,
                        }),
                    }),
            ],
        }),
    });
}
