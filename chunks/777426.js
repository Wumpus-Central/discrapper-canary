n.d(t, { A: () => y });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(110259),
    o = n(311907),
    d = n(3203),
    c = n(397927),
    u = n(793574),
    A = n(688810),
    h = n(139286),
    _ = n(532794),
    m = n(414711),
    p = n(187696),
    g = n(723690),
    E = n(21119),
    f = n(594832),
    I = n(994500),
    C = n(954571),
    N = n(404036),
    T = n(45787),
    S = n(275759),
    x = n(652215);
n(646363);
var v = n(985018),
    b = n(847295);
function y(e) {
    let {
            ref: t,
            isFocused: a,
            isActive: y,
            status: L,
            activities: O,
            applicationStream: R,
            isGameRelationship: P,
            isMobile: j,
            isVR: D,
            onOtherHover: w,
            onClick: M,
            recipientUser: U,
            giftIntentType: G,
        } = e,
        { analyticsLocations: k } = (0, A.Ay)(u.A.PREMIUM_GIFT_INTENT_FRIEND_ROW),
        { Component: V } = (0, d.V)(),
        B = (0, o.bG)([S.Ay], () => S.Ay.getFriendAnniversaryYears(U.id)),
        H = (0, f.tA)({ location: "gift-intent-friend-row", isGift: !0, giftRecipient: U });
    r.useEffect(() => {
        let e = E.A.getUserAffinity(U.id);
        (0, h.x)({
            name: s.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: s.ImpressionTypes.VIEW,
            properties: { gift_intent_type: G, affinity: e?.communicationProbability },
        });
    }, [U, G]);
    let F = (e) => {
        e.stopPropagation();
        let t = E.A.getUserAffinity(U.id);
        C.default.track(x.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
            gift_intent_type: G,
            affinity: t?.dmProbability,
            location_stack: k,
        }),
            H
                ? (0, N.A)({
                      giftRecipient: U,
                      analyticsLocations: k,
                      analyticsLocation: x.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
                      analyticsObject: {
                          page: x.liQ.FRIENDS_LIST,
                          section: x.JJy.FRIENDS_LIST_FRIEND_ROW,
                          object: x.ZSU.BUTTON_CTA,
                          objectType: x.AnalyticsObjectTypes.GIFT,
                      },
                  })
                : (0, _.A)({
                      isGift: !0,
                      initialPlanId: null,
                      giftRecipient: U,
                      analyticsLocations: k,
                      analyticsLocation: x.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
                      analyticsObject: {
                          page: x.liQ.FRIENDS_LIST,
                          section: x.JJy.FRIENDS_LIST_FRIEND_ROW,
                          object: x.ZSU.BUTTON_CTA,
                          objectType: x.AnalyticsObjectTypes.GIFT,
                      },
                  });
    };
    return (0, i.jsx)(m.A, {
        ref: t,
        isFocused: a,
        isActive: y,
        user: U,
        onOtherHover: w,
        onClick: M,
        height: 72,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: l()(b.a4, b.Z$),
                children: [
                    (0, i.jsx)(g.A, {
                        className: b.Cv,
                        user: U,
                        status: L,
                        isMobile: j,
                        isVR: D,
                        subText: (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.A, {
                                    hovered: e,
                                    activities: O,
                                    applicationStream: R,
                                    status: L,
                                    user: U,
                                    userIgnored: I.A.isIgnored(U.id),
                                }),
                                (0, i.jsxs)("div", {
                                    className: b.K3,
                                    children: [
                                        (0, i.jsx)(c.$yI, { size: "xxs", color: "currentColor" }),
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: v.intl.formatToPlainString(v.t.S3fdq7, { numberOfYears: B }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        hovered: e,
                        showAccountIdentifier: !P && !U.isProvisional,
                    }),
                    (0, i.jsxs)("div", {
                        className: b.o1,
                        children: [
                            (0, i.jsx)(c.K0, {
                                size: "sm",
                                variant: "secondary",
                                icon: V,
                                "aria-label": v.intl.string(v.t.I61IsE),
                                onClick: () => {
                                    C.default.track(x.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: G,
                                        cta_type: "send_message",
                                        location_stack: k,
                                    }),
                                        (0, T.xs)(U.id),
                                        (0, c.mMO)(async () => {
                                            let { default: e } = await n.e("95501").then(n.bind(n, 367516));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    giftIntentType: G ?? void 0,
                                                    analyticsLocationHistory: k,
                                                });
                                        });
                                },
                            }),
                            (0, i.jsx)(c.Button, {
                                size: "sm",
                                text: v.intl.string(v.t.PEjaCx),
                                icon: c.okO,
                                "aria-label": v.intl.string(v.t.PEjaCx),
                                onClick: F,
                            }),
                        ],
                    }),
                ],
            }),
    });
}
