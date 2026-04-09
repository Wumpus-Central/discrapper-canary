n.d(t, { A: () => v });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(110259),
    o = n(311907),
    d = n(3203),
    c = n(397927),
    u = n(793574),
    A = n(688810),
    h = n(139286),
    _ = n(414711),
    m = n(187696),
    g = n(723690),
    p = n(21119),
    E = n(994500),
    I = n(954571),
    f = n(45787),
    C = n(275759),
    T = n(233971),
    N = n(652215);
n(646363);
var S = n(985018),
    x = n(955017);
function v(e) {
    let {
            ref: t,
            isFocused: l,
            isActive: v,
            status: b,
            activities: y,
            applicationStream: O,
            isGameRelationship: L,
            isMobile: R,
            isVR: P,
            onOtherHover: D,
            onClick: j,
            recipientUser: M,
            analyticsLocations: w,
            giftIntentType: U,
        } = e,
        { analyticsLocations: G } = (0, A.Ay)(u.A.PREMIUM_GIFT_INTENT_FRIEND_ROW),
        { Component: k } = (0, d.V)(),
        V = (0, o.bG)([C.Ay], () => C.Ay.getFriendAnniversaryYears(M.id)),
        { openGiftModal: B } = (0, T.$)({
            giftRecipient: M,
            analyticsLocations: G,
            analyticsLocation: N.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
            analyticsObject: {
                page: N.liQ.FRIENDS_LIST,
                section: N.JJy.FRIENDS_LIST_FRIEND_ROW,
                object: N.ZSU.BUTTON_CTA,
                objectType: N.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-intent-friend-row",
        });
    a.useEffect(() => {
        let e = p.A.getUserAffinity(M.id);
        (0, h.x)({
            name: s.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: s.ImpressionTypes.VIEW,
            properties: { gift_intent_type: U, affinity: e?.communicationProbability },
        });
    }, [M, U]);
    let H = (e) => {
        e.stopPropagation();
        let t = p.A.getUserAffinity(M.id);
        I.default.track(N.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
            gift_intent_type: U,
            affinity: t?.dmProbability,
            location_stack: G,
        }),
            B();
    };
    return (0, i.jsx)(_.A, {
        ref: t,
        isFocused: l,
        isActive: v,
        user: M,
        analyticsLocations: w,
        onOtherHover: D,
        onClick: j,
        height: 72,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: r()(x.a4, x.Z$),
                children: [
                    (0, i.jsx)(g.A, {
                        className: x.Cv,
                        user: M,
                        status: b,
                        isMobile: R,
                        isVR: P,
                        subText: (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(m.A, {
                                    hovered: e,
                                    activities: y,
                                    applicationStream: O,
                                    status: b,
                                    user: M,
                                    userIgnored: E.A.isIgnored(M.id),
                                }),
                                (0, i.jsxs)("div", {
                                    className: x.K3,
                                    children: [
                                        (0, i.jsx)(c.$yI, { size: "xxs", color: "currentColor" }),
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: S.intl.formatToPlainString(S.t.S3fdq7, { numberOfYears: V }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        hovered: e,
                        showAccountIdentifier: !L && !M.isProvisional,
                    }),
                    (0, i.jsxs)("div", {
                        className: x.o1,
                        children: [
                            (0, i.jsx)(c.K0, {
                                size: "sm",
                                variant: "secondary",
                                icon: k,
                                "aria-label": S.intl.string(S.t.I61IsE),
                                onClick: () => {
                                    I.default.track(N.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: U,
                                        cta_type: "send_message",
                                        location_stack: G,
                                    }),
                                        (0, f.xs)(M.id),
                                        (0, c.mMO)(async () => {
                                            let { default: e } = await n.e("95501").then(n.bind(n, 367516));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    giftIntentType: U ?? void 0,
                                                    analyticsLocationHistory: G,
                                                });
                                        });
                                },
                            }),
                            (0, i.jsx)(c.Button, {
                                size: "sm",
                                text: S.intl.string(S.t.PEjaCx),
                                icon: c.okO,
                                "aria-label": S.intl.string(S.t.PEjaCx),
                                onClick: H,
                            }),
                        ],
                    }),
                ],
            }),
    });
}
