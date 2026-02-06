n.d(t, { A: () => v });
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
    _ = n(414711),
    m = n(187696),
    p = n(723690),
    g = n(21119),
    E = n(994500),
    I = n(954571),
    f = n(45787),
    C = n(275759),
    N = n(979474),
    T = n(652215);
n(646363);
var S = n(985018),
    x = n(847295);
function v(e) {
    let {
            ref: t,
            isFocused: a,
            isActive: v,
            status: b,
            activities: y,
            applicationStream: L,
            isGameRelationship: O,
            isMobile: R,
            isVR: P,
            onOtherHover: j,
            onClick: D,
            recipientUser: w,
            giftIntentType: M,
        } = e,
        { analyticsLocations: U } = (0, A.Ay)(u.A.PREMIUM_GIFT_INTENT_FRIEND_ROW),
        { Component: G } = (0, d.V)(),
        k = (0, o.bG)([C.Ay], () => C.Ay.getFriendAnniversaryYears(w.id)),
        { openGiftModal: V } = (0, N.$)({
            giftRecipient: w,
            analyticsLocations: U,
            analyticsLocation: T.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
            analyticsObject: {
                page: T.liQ.FRIENDS_LIST,
                section: T.JJy.FRIENDS_LIST_FRIEND_ROW,
                object: T.ZSU.BUTTON_CTA,
                objectType: T.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-intent-friend-row",
        });
    r.useEffect(() => {
        let e = g.A.getUserAffinity(w.id);
        (0, h.x)({
            name: s.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: s.ImpressionTypes.VIEW,
            properties: { gift_intent_type: M, affinity: e?.communicationProbability },
        });
    }, [w, M]);
    let B = (e) => {
        e.stopPropagation();
        let t = g.A.getUserAffinity(w.id);
        I.default.track(T.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
            gift_intent_type: M,
            affinity: t?.dmProbability,
            location_stack: U,
        }),
            V();
    };
    return (0, i.jsx)(_.A, {
        ref: t,
        isFocused: a,
        isActive: v,
        user: w,
        onOtherHover: j,
        onClick: D,
        height: 72,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: l()(x.a4, x.Z$),
                children: [
                    (0, i.jsx)(p.A, {
                        className: x.Cv,
                        user: w,
                        status: b,
                        isMobile: R,
                        isVR: P,
                        subText: (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(m.A, {
                                    hovered: e,
                                    activities: y,
                                    applicationStream: L,
                                    status: b,
                                    user: w,
                                    userIgnored: E.A.isIgnored(w.id),
                                }),
                                (0, i.jsxs)("div", {
                                    className: x.K3,
                                    children: [
                                        (0, i.jsx)(c.$yI, { size: "xxs", color: "currentColor" }),
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: S.intl.formatToPlainString(S.t.S3fdq7, { numberOfYears: k }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        hovered: e,
                        showAccountIdentifier: !O && !w.isProvisional,
                    }),
                    (0, i.jsxs)("div", {
                        className: x.o1,
                        children: [
                            (0, i.jsx)(c.K0, {
                                size: "sm",
                                variant: "secondary",
                                icon: G,
                                "aria-label": S.intl.string(S.t.I61IsE),
                                onClick: () => {
                                    I.default.track(T.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: M,
                                        cta_type: "send_message",
                                        location_stack: U,
                                    }),
                                        (0, f.xs)(w.id),
                                        (0, c.mMO)(async () => {
                                            let { default: e } = await n.e("95501").then(n.bind(n, 367516));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    giftIntentType: M ?? void 0,
                                                    analyticsLocationHistory: U,
                                                });
                                        });
                                },
                            }),
                            (0, i.jsx)(c.Button, {
                                size: "sm",
                                text: S.intl.string(S.t.PEjaCx),
                                icon: c.okO,
                                "aria-label": S.intl.string(S.t.PEjaCx),
                                onClick: B,
                            }),
                        ],
                    }),
                ],
            }),
    });
}
