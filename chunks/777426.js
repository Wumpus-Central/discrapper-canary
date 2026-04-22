n.d(t, { A: () => L });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(110259),
    o = n(311907),
    c = n(3203),
    d = n(214947),
    u = n(834730),
    m = n(408278),
    A = n(192308),
    h = n(821609),
    x = n(597770),
    p = n(793574),
    g = n(688810),
    N = n(139286),
    f = n(414711),
    _ = n(187696),
    I = n(723690),
    v = n(21119),
    j = n(994500),
    C = n(954571),
    y = n(45787),
    S = n(275759),
    E = n(233971),
    T = n(652215);
n(646363);
var b = n(985018),
    P = n(728552);
function L(e) {
    let {
            ref: t,
            isFocused: l,
            isActive: L,
            status: R,
            activities: D,
            applicationStream: O,
            isGameRelationship: k,
            isMobile: F,
            isVR: w,
            onOtherHover: G,
            onClick: M,
            recipientUser: U,
            analyticsLocations: V,
            giftIntentType: Y,
        } = e,
        { analyticsLocations: $ } = (0, g.Ay)(p.A.PREMIUM_GIFT_INTENT_FRIEND_ROW),
        { Component: H } = (0, c.V)(),
        W = (0, o.bG)([S.Ay], () => S.Ay.getFriendAnniversaryYears(U.id)),
        { openGiftModal: z } = (0, E.$)({
            giftRecipient: U,
            analyticsLocations: $,
            analyticsLocation: T.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
            analyticsObject: {
                page: T.liQ.FRIENDS_LIST,
                section: T.JJy.FRIENDS_LIST_FRIEND_ROW,
                object: T.ZSU.BUTTON_CTA,
                objectType: T.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-intent-friend-row",
        });
    s.useEffect(() => {
        let e = v.A.getUserAffinity(U.id);
        (0, N.x)({
            name: r.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: r.ImpressionTypes.VIEW,
            properties: { gift_intent_type: Y, affinity: e?.communicationProbability },
        });
    }, [U, Y]);
    let q = (e) => {
        e.stopPropagation();
        let t = v.A.getUserAffinity(U.id);
        C.default.track(T.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
            gift_intent_type: Y,
            affinity: t?.dmProbability,
            location_stack: $,
        }),
            z();
    };
    return (0, i.jsx)(f.A, {
        ref: t,
        isFocused: l,
        isActive: L,
        user: U,
        analyticsLocations: V,
        onOtherHover: G,
        onClick: M,
        height: 72,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: a()(P.a4, P.Z$),
                children: [
                    (0, i.jsx)(I.A, {
                        className: P.Cv,
                        user: U,
                        status: R,
                        isMobile: F,
                        isVR: w,
                        subText: (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(_.A, {
                                    hovered: e,
                                    activities: D,
                                    applicationStream: O,
                                    status: R,
                                    user: U,
                                    userIgnored: j.A.isIgnored(U.id),
                                }),
                                (0, i.jsxs)("div", {
                                    className: P.K3,
                                    children: [
                                        (0, i.jsx)(d.$, { size: "xxs", color: "currentColor" }),
                                        (0, i.jsx)(u.E, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: b.intl.formatToPlainString(b.t.S3fdq7, { numberOfYears: W }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        hovered: e,
                        showAccountIdentifier: !k && !U.isProvisional,
                    }),
                    (0, i.jsxs)("div", {
                        className: P.o1,
                        children: [
                            (0, i.jsx)(m.K, {
                                size: "sm",
                                variant: "secondary",
                                icon: H,
                                "aria-label": b.intl.string(b.t.I61IsE),
                                onClick: () => {
                                    C.default.track(T.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: Y,
                                        cta_type: "send_message",
                                        location_stack: $,
                                    }),
                                        (0, y.xs)(U.id),
                                        (0, A.openModalLazy)(async () => {
                                            let { default: e } = await n.e("17882").then(n.bind(n, 367516));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    giftIntentType: Y ?? void 0,
                                                    analyticsLocationHistory: $,
                                                });
                                        });
                                },
                            }),
                            (0, i.jsx)(h.$, {
                                size: "sm",
                                text: b.intl.string(b.t.PEjaCx),
                                icon: x.o,
                                "aria-label": b.intl.string(b.t.PEjaCx),
                                onClick: q,
                            }),
                        ],
                    }),
                ],
            }),
    });
}
