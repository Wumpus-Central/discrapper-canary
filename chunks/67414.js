n.d(t, { A: () => y });
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
let S = (0, s.FT9)(T._3.SIZE_56),
    b = (0, s.FT9)(T._3.SIZE_24);
function j(e) {
    let { user: t, ariaLabel: n, showCutout: a } = e,
        r = l.useId(),
        s = "u" > typeof document && document.documentElement?.dir === "rtl" ? -2 : S - b - -2,
        d = S - b - -3;
    return (0, i.jsxs)("svg", {
        width: S,
        height: S,
        viewBox: `0 0 ${S} ${S}`,
        className: N.XH,
        children: [
            a &&
                (0, i.jsxs)("mask", {
                    id: r,
                    maskUnits: "userSpaceOnUse",
                    children: [
                        (0, i.jsx)("rect", { x: 0, y: 0, width: S, height: S, fill: "white" }),
                        (0, i.jsx)("circle", { cx: s + b / 2, cy: d + b / 2, r: b / 2 + 2, fill: "black" }),
                    ],
                }),
            (0, i.jsx)("foreignObject", {
                x: 0,
                y: 0,
                width: S,
                height: S,
                mask: a ? `url(#${r})` : void 0,
                children: (0, i.jsx)(o.A, { className: N.A6, user: t, "aria-label": n, size: T._3.SIZE_56 }),
            }),
        ],
    });
}
function y(e) {
    let { giftIntentType: t, recipientUser: S, analyticsPage: b, analyticsSection: y, innerRef: R } = e,
        L = (0, r.bG)([p.default], () => p.default.getCurrentUser()),
        { analyticsLocations: M } = (0, c.Ay)(d.A.PREMIUM_GIFT_INTENT_CARD),
        O = (0, r.bG)([x.Ay], () => x.Ay.getFriendAnniversaryYears(S.id)),
        D = (0, h.tA)({ location: "gift-intent-card", isGift: !0, giftRecipient: S });
    l.useEffect(() => {
        (0, u.x)({
            name: a.ImpressionNames.GIFT_INTENT_CARD,
            type: a.ImpressionTypes.VIEW,
            properties: { gift_intent_type: t, num_friend_anniversaries: x.Ay.getFriendAnniversaries().length },
        });
    }, [t]);
    let P = () => (t === C.np.FRIEND_ANNIVERSARY ? v.intl.string(v.t.ilhtIa) : (0, A.yE)(t));
    return (0, i.jsx)("div", {
        ref: R,
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
                                (0, i.jsx)(j, { user: S, ariaLabel: S.username, showCutout: null != L }),
                                null != L &&
                                    (0, i.jsx)(o.A, {
                                        className: N.GM,
                                        user: L,
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
                                                    ? v.intl.formatToPlainString(v.t.PpG27s, { numberOfYears: O })
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
                                        location_stack: M,
                                    }),
                                    (0, s.mMO)(async () => {
                                        let { default: e } = await n.e("95501").then(n.bind(n, 367516));
                                        return (n) =>
                                            (0, i.jsx)(e, { ...n, giftIntentType: t, analyticsLocationHistory: M });
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
                                    location_stack: M,
                                });
                                let i = (0, E.$)(t);
                                D
                                    ? (0, f.A)({
                                          giftRecipient: S,
                                          analyticsLocations: M,
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
                                          analyticsLocations: M,
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
