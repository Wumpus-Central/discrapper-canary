"use strict";
n.d(t, { A: () => U });
var i = n(627968),
    r = n(64700),
    l = n(110259),
    s = n(311907),
    a = n(778712),
    o = n(834730),
    c = n(214947),
    u = n(821609),
    d = n(192308),
    _ = n(597770),
    E = n(966327),
    A = n(793574),
    m = n(688810),
    I = n(139286),
    T = n(21119),
    N = n(287809),
    g = n(954571),
    p = n(242874),
    C = n(275759),
    f = n(51501),
    h = n(233971),
    R = n(788868),
    S = n(652215),
    O = n(985018),
    x = n(742345);
let M = (0, a.FT)(a._3.SIZE_56),
    D = (0, a.FT)(a._3.SIZE_24);
function P(e) {
    let { user: t, ariaLabel: n, showCutout: l } = e,
        s = r.useId(),
        o = "u" > typeof document && document.documentElement?.dir === "rtl" ? -2 : M - D - -2,
        c = M - D - -3;
    return (0, i.jsxs)("svg", {
        width: M,
        height: M,
        viewBox: `0 0 ${M} ${M}`,
        className: x.XH,
        children: [
            l &&
                (0, i.jsxs)("mask", {
                    id: s,
                    maskUnits: "userSpaceOnUse",
                    children: [
                        (0, i.jsx)("rect", { x: 0, y: 0, width: M, height: M, fill: "white" }),
                        (0, i.jsx)("circle", { cx: o + D / 2, cy: c + D / 2, r: D / 2 + 2, fill: "black" }),
                    ],
                }),
            (0, i.jsx)("foreignObject", {
                x: 0,
                y: 0,
                width: M,
                height: M,
                mask: l ? `url(#${s})` : void 0,
                children: (0, i.jsx)(E.A, { className: x.A6, user: t, "aria-label": n, size: a._3.SIZE_56 }),
            }),
        ],
    });
}
function U(e) {
    let { giftIntentType: t, recipientUser: M, analyticsPage: D, analyticsSection: U, innerRef: y } = e,
        L = (0, s.bG)([N.default], () => N.default.getCurrentUser()),
        { analyticsLocations: v } = (0, m.Ay)(A.A.PREMIUM_GIFT_INTENT_CARD),
        j = (0, s.bG)([C.Ay], () => C.Ay.getFriendAnniversaryYears(M.id)),
        k = (0, f.$)(t),
        { openGiftModal: b } = (0, h.$)({
            giftRecipient: M,
            analyticsLocations: v,
            analyticsLocation: k.chat,
            analyticsObject: { page: D, section: U, object: S.ZSU.BUTTON_CTA, objectType: S.AnalyticsObjectTypes.GIFT },
            location: "gift-intent-card",
        });
    r.useEffect(() => {
        (0, I.x)({
            name: l.ImpressionNames.GIFT_INTENT_CARD,
            type: l.ImpressionTypes.VIEW,
            properties: { gift_intent_type: t, num_friend_anniversaries: C.Ay.getFriendAnniversaries().length },
        });
    }, [t]);
    let G = () => (t === R.np.FRIEND_ANNIVERSARY ? O.intl.string(O.t.ilhtIa) : (0, p.yE)(t));
    return (0, i.jsx)("div", {
        ref: y,
        className: x.Qs,
        children: (0, i.jsxs)("div", {
            className: x.gx,
            children: [
                (0, i.jsxs)("div", {
                    className: x.ou,
                    children: [
                        (0, i.jsxs)("div", {
                            className: x.HD,
                            children: [
                                (0, i.jsx)(P, { user: M, ariaLabel: M.username, showCutout: null != L }),
                                null != L &&
                                    (0, i.jsx)(E.A, {
                                        className: x.GM,
                                        user: L,
                                        "aria-label": M.username,
                                        size: a._3.SIZE_24,
                                    }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: x.FS,
                            children: [
                                (0, i.jsx)(o.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    lineClamp: 3,
                                    children: t === R.np.FRIEND_ANNIVERSARY ? O.intl.string(O.t.CeQIwZ) : (0, p.yE)(t),
                                }),
                                (0, i.jsxs)("div", {
                                    className: x.jA,
                                    children: [
                                        (0, i.jsx)(c.$, { size: "xs" }),
                                        (0, i.jsx)(o.E, {
                                            className: x.Tm,
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children:
                                                t === R.np.FRIEND_ANNIVERSARY
                                                    ? O.intl.formatToPlainString(O.t.PpG27s, { numberOfYears: j })
                                                    : (0, p.yE)(t),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: x.UD,
                    children: [
                        (0, i.jsx)(u.$, {
                            size: "sm",
                            variant: "secondary",
                            text: O.intl.string(O.t.nffuyb),
                            "aria-label": O.intl.string(O.t.nffuyb),
                            onClick: (e) => {
                                e.stopPropagation(),
                                    g.default.track(S.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: t,
                                        cta_type: "send_message",
                                        location_stack: v,
                                    }),
                                    (0, d.openModalLazy)(async () => {
                                        let { default: e } = await n.e("17882").then(n.bind(n, 367516));
                                        return (n) =>
                                            (0, i.jsx)(e, { ...n, giftIntentType: t, analyticsLocationHistory: v });
                                    });
                            },
                        }),
                        (0, i.jsx)(u.$, {
                            size: "sm",
                            variant: "expressive",
                            text: G(),
                            icon: _.o,
                            "aria-label": G(),
                            onClick: (e) => {
                                e.stopPropagation();
                                let n = T.A.getUserAffinity(M.id);
                                g.default.track(S.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                                    gift_intent_type: t,
                                    affinity: n?.dmProbability,
                                    location_stack: v,
                                }),
                                    b();
                            },
                        }),
                    ],
                }),
            ],
        }),
    });
}
