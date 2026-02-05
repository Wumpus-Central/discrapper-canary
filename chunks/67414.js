n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    a = n(110259),
    r = n(311907),
    s = n(397927),
    o = n(966327),
    d = n(793574),
    c = n(688810),
    u = n(139286),
    m = n(532794),
    _ = n(21119),
    h = n(594832),
    p = n(287809),
    g = n(954571),
    A = n(242874),
    f = n(404036),
    x = n(275759),
    E = n(51501),
    C = n(788868),
    I = n(652215),
    T = n(778712),
    v = n(985018),
    N = n(989712);
function S(e) {
    let { giftIntentType: t, recipientUser: S, analyticsPage: b, analyticsSection: y, innerRef: j } = e,
        R = (0, r.bG)([p.default], () => p.default.getCurrentUser()),
        { analyticsLocations: L } = (0, c.Ay)(d.A.PREMIUM_GIFT_INTENT_CARD),
        M = (0, r.bG)([x.Ay], () => x.Ay.getFriendAnniversaryYears(S.id)),
        O = (0, h.tA)({ location: "gift-intent-card", isGift: !0, giftRecipient: S });
    l.useEffect(() => {
        (0, u.x)({
            name: a.ImpressionNames.GIFT_INTENT_CARD,
            type: a.ImpressionTypes.VIEW,
            properties: { gift_intent_type: t, num_friend_anniversaries: x.Ay.getFriendAnniversaries().length },
        });
    }, [t]);
    let P = () => (t === C.np.FRIEND_ANNIVERSARY ? v.intl.string(v.t.ilhtIa) : (0, A.yE)(t));
    return (0, i.jsx)("div", {
        ref: j,
        className: N.Qs,
        children: (0, i.jsxs)("div", {
            className: N.gx,
            children: [
                (0, i.jsxs)("div", {
                    className: N.ou,
                    children: [
                        (0, i.jsxs)("div", {
                            className: N.HD,
                            children: [
                                (0, i.jsx)(o.A, {
                                    className: N.A6,
                                    user: S,
                                    "aria-label": S.username,
                                    size: T._3.SIZE_56,
                                }),
                                null != R &&
                                    (0, i.jsx)(o.A, {
                                        className: N.GM,
                                        user: R,
                                        "aria-label": S.username,
                                        size: T._3.SIZE_24,
                                    }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: N.FS,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    lineClamp: 3,
                                    children: t === C.np.FRIEND_ANNIVERSARY ? v.intl.string(v.t.CeQIwZ) : (0, A.yE)(t),
                                }),
                                (0, i.jsxs)("div", {
                                    className: N.jA,
                                    children: [
                                        (0, i.jsx)(s.$yI, { size: "xs" }),
                                        (0, i.jsx)(s.Text, {
                                            className: N.Tm,
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children:
                                                t === C.np.FRIEND_ANNIVERSARY
                                                    ? v.intl.formatToPlainString(v.t.PpG27s, { numberOfYears: M })
                                                    : (0, A.yE)(t),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: N.UD,
                    children: [
                        (0, i.jsx)(s.Button, {
                            size: "sm",
                            variant: "secondary",
                            text: v.intl.string(v.t.nffuyb),
                            "aria-label": v.intl.string(v.t.nffuyb),
                            onClick: (e) => {
                                e.stopPropagation(),
                                    g.default.track(I.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: t,
                                        cta_type: "send_message",
                                        location_stack: L,
                                    }),
                                    (0, s.mMO)(async () => {
                                        let { default: e } = await n.e("95501").then(n.bind(n, 367516));
                                        return (n) =>
                                            (0, i.jsx)(e, { ...n, giftIntentType: t, analyticsLocationHistory: L });
                                    });
                            },
                        }),
                        (0, i.jsx)(s.Button, {
                            size: "sm",
                            variant: "expressive",
                            text: P(),
                            icon: s.okO,
                            "aria-label": P(),
                            onClick: (e) => {
                                e.stopPropagation();
                                let n = _.A.getUserAffinity(S.id);
                                g.default.track(I.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                                    gift_intent_type: t,
                                    affinity: n?.dmProbability,
                                    location_stack: L,
                                });
                                let i = (0, E.$)(t);
                                O
                                    ? (0, f.A)({
                                          giftRecipient: S,
                                          analyticsLocations: L,
                                          analyticsLocation: i.chat,
                                          analyticsObject: {
                                              page: b,
                                              section: y,
                                              object: I.ZSU.BUTTON_CTA,
                                              objectType: I.AnalyticsObjectTypes.GIFT,
                                          },
                                      })
                                    : (0, m.A)({
                                          isGift: !0,
                                          initialPlanId: null,
                                          giftRecipient: S,
                                          analyticsLocation: i.chat,
                                          analyticsLocations: L,
                                          analyticsObject: {
                                              page: b,
                                              section: y,
                                              object: I.ZSU.BUTTON_CTA,
                                              objectType: I.AnalyticsObjectTypes.GIFT,
                                          },
                                      });
                            },
                        }),
                    ],
                }),
            ],
        }),
    });
}
