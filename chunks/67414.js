"use strict";
n.d(t, { A: () => O });
var i = n(627968),
    r = n(64700),
    s = n(110259),
    l = n(311907),
    a = n(397927),
    c = n(966327),
    o = n(793574),
    u = n(688810),
    d = n(139286),
    _ = n(21119),
    E = n(287809),
    A = n(954571),
    m = n(242874),
    I = n(275759),
    T = n(51501),
    g = n(233971),
    N = n(788868),
    f = n(652215),
    p = n(778712),
    C = n(985018),
    h = n(478169);
let S = (0, a.FT9)(p._3.SIZE_56),
    R = (0, a.FT9)(p._3.SIZE_24);
function x(e) {
    let { user: t, ariaLabel: n, showCutout: s } = e,
        l = r.useId(),
        a = "u" > typeof document && document.documentElement?.dir === "rtl" ? -2 : S - R - -2,
        o = S - R - -3;
    return (0, i.jsxs)("svg", {
        width: S,
        height: S,
        viewBox: `0 0 ${S} ${S}`,
        className: h.XH,
        children: [
            s &&
                (0, i.jsxs)("mask", {
                    id: l,
                    maskUnits: "userSpaceOnUse",
                    children: [
                        (0, i.jsx)("rect", { x: 0, y: 0, width: S, height: S, fill: "white" }),
                        (0, i.jsx)("circle", { cx: a + R / 2, cy: o + R / 2, r: R / 2 + 2, fill: "black" }),
                    ],
                }),
            (0, i.jsx)("foreignObject", {
                x: 0,
                y: 0,
                width: S,
                height: S,
                mask: s ? `url(#${l})` : void 0,
                children: (0, i.jsx)(c.A, { className: h.A6, user: t, "aria-label": n, size: p._3.SIZE_56 }),
            }),
        ],
    });
}
function O(e) {
    let { giftIntentType: t, recipientUser: S, analyticsPage: R, analyticsSection: O, innerRef: M } = e,
        D = (0, l.bG)([E.default], () => E.default.getCurrentUser()),
        { analyticsLocations: U } = (0, u.Ay)(o.A.PREMIUM_GIFT_INTENT_CARD),
        P = (0, l.bG)([I.Ay], () => I.Ay.getFriendAnniversaryYears(S.id)),
        L = (0, T.$)(t),
        { openGiftModal: v } = (0, g.$)({
            giftRecipient: S,
            analyticsLocations: U,
            analyticsLocation: L.chat,
            analyticsObject: { page: R, section: O, object: f.ZSU.BUTTON_CTA, objectType: f.AnalyticsObjectTypes.GIFT },
            location: "gift-intent-card",
        });
    r.useEffect(() => {
        (0, d.x)({
            name: s.ImpressionNames.GIFT_INTENT_CARD,
            type: s.ImpressionTypes.VIEW,
            properties: { gift_intent_type: t, num_friend_anniversaries: I.Ay.getFriendAnniversaries().length },
        });
    }, [t]);
    let y = () => (t === N.np.FRIEND_ANNIVERSARY ? C.intl.string(C.t.ilhtIa) : (0, m.yE)(t));
    return (0, i.jsx)("div", {
        ref: M,
        className: h.Qs,
        children: (0, i.jsxs)("div", {
            className: h.gx,
            children: [
                (0, i.jsxs)("div", {
                    className: h.ou,
                    children: [
                        (0, i.jsxs)("div", {
                            className: h.HD,
                            children: [
                                (0, i.jsx)(x, { user: S, ariaLabel: S.username, showCutout: null != D }),
                                null != D &&
                                    (0, i.jsx)(c.A, {
                                        className: h.GM,
                                        user: D,
                                        "aria-label": S.username,
                                        size: p._3.SIZE_24,
                                    }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: h.FS,
                            children: [
                                (0, i.jsx)(a.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    lineClamp: 3,
                                    children: t === N.np.FRIEND_ANNIVERSARY ? C.intl.string(C.t.CeQIwZ) : (0, m.yE)(t),
                                }),
                                (0, i.jsxs)("div", {
                                    className: h.jA,
                                    children: [
                                        (0, i.jsx)(a.$yI, { size: "xs" }),
                                        (0, i.jsx)(a.Text, {
                                            className: h.Tm,
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children:
                                                t === N.np.FRIEND_ANNIVERSARY
                                                    ? C.intl.formatToPlainString(C.t.PpG27s, { numberOfYears: P })
                                                    : (0, m.yE)(t),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: h.UD,
                    children: [
                        (0, i.jsx)(a.Button, {
                            size: "sm",
                            variant: "secondary",
                            text: C.intl.string(C.t.nffuyb),
                            "aria-label": C.intl.string(C.t.nffuyb),
                            onClick: (e) => {
                                e.stopPropagation(),
                                    A.default.track(f.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: t,
                                        cta_type: "send_message",
                                        location_stack: U,
                                    }),
                                    (0, a.mMO)(async () => {
                                        let { default: e } = await n.e("95501").then(n.bind(n, 367516));
                                        return (n) =>
                                            (0, i.jsx)(e, { ...n, giftIntentType: t, analyticsLocationHistory: U });
                                    });
                            },
                        }),
                        (0, i.jsx)(a.Button, {
                            size: "sm",
                            variant: "expressive",
                            text: y(),
                            icon: a.okO,
                            "aria-label": y(),
                            onClick: (e) => {
                                e.stopPropagation();
                                let n = _.A.getUserAffinity(S.id);
                                A.default.track(f.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                                    gift_intent_type: t,
                                    affinity: n?.dmProbability,
                                    location_stack: U,
                                }),
                                    v();
                            },
                        }),
                    ],
                }),
            ],
        }),
    });
}
