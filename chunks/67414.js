n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    a = n(110259),
    r = n(311907),
    s = n(397927),
    o = n(966327),
    d = n(793574),
    c = n(688810),
    u = n(139286),
    m = n(21119),
    _ = n(287809),
    h = n(954571),
    p = n(242874),
    g = n(275759),
    A = n(979474),
    f = n(51501),
    x = n(788868),
    E = n(652215),
    C = n(778712),
    I = n(985018),
    T = n(989712);
let v = (0, s.FT9)(C._3.SIZE_56),
    N = (0, s.FT9)(C._3.SIZE_24);
function S(e) {
    let { user: t, ariaLabel: n, showCutout: a } = e,
        r = l.useId(),
        s = "u" > typeof document && document.documentElement?.dir === "rtl" ? -2 : v - N - -2,
        d = v - N - -3;
    return (0, i.jsxs)("svg", {
        width: v,
        height: v,
        viewBox: `0 0 ${v} ${v}`,
        className: T.XH,
        children: [
            a &&
                (0, i.jsxs)("mask", {
                    id: r,
                    maskUnits: "userSpaceOnUse",
                    children: [
                        (0, i.jsx)("rect", { x: 0, y: 0, width: v, height: v, fill: "white" }),
                        (0, i.jsx)("circle", { cx: s + N / 2, cy: d + N / 2, r: N / 2 + 2, fill: "black" }),
                    ],
                }),
            (0, i.jsx)("foreignObject", {
                x: 0,
                y: 0,
                width: v,
                height: v,
                mask: a ? `url(#${r})` : void 0,
                children: (0, i.jsx)(o.A, { className: T.A6, user: t, "aria-label": n, size: C._3.SIZE_56 }),
            }),
        ],
    });
}
function b(e) {
    let { giftIntentType: t, recipientUser: v, analyticsPage: N, analyticsSection: b, innerRef: j } = e,
        y = (0, r.bG)([_.default], () => _.default.getCurrentUser()),
        { analyticsLocations: R } = (0, c.Ay)(d.A.PREMIUM_GIFT_INTENT_CARD),
        L = (0, r.bG)([g.Ay], () => g.Ay.getFriendAnniversaryYears(v.id)),
        M = (0, f.$)(t),
        { openGiftModal: O } = (0, A.$)({
            giftRecipient: v,
            analyticsLocations: R,
            analyticsLocation: M.chat,
            analyticsObject: { page: N, section: b, object: E.ZSU.BUTTON_CTA, objectType: E.AnalyticsObjectTypes.GIFT },
            location: "gift-intent-card",
        });
    l.useEffect(() => {
        (0, u.x)({
            name: a.ImpressionNames.GIFT_INTENT_CARD,
            type: a.ImpressionTypes.VIEW,
            properties: { gift_intent_type: t, num_friend_anniversaries: g.Ay.getFriendAnniversaries().length },
        });
    }, [t]);
    let D = () => (t === x.np.FRIEND_ANNIVERSARY ? I.intl.string(I.t.ilhtIa) : (0, p.yE)(t));
    return (0, i.jsx)("div", {
        ref: j,
        className: T.Qs,
        children: (0, i.jsxs)("div", {
            className: T.gx,
            children: [
                (0, i.jsxs)("div", {
                    className: T.ou,
                    children: [
                        (0, i.jsxs)("div", {
                            className: T.HD,
                            children: [
                                (0, i.jsx)(S, { user: v, ariaLabel: v.username, showCutout: null != y }),
                                null != y &&
                                    (0, i.jsx)(o.A, {
                                        className: T.GM,
                                        user: y,
                                        "aria-label": v.username,
                                        size: C._3.SIZE_24,
                                    }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: T.FS,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    lineClamp: 3,
                                    children: t === x.np.FRIEND_ANNIVERSARY ? I.intl.string(I.t.CeQIwZ) : (0, p.yE)(t),
                                }),
                                (0, i.jsxs)("div", {
                                    className: T.jA,
                                    children: [
                                        (0, i.jsx)(s.$yI, { size: "xs" }),
                                        (0, i.jsx)(s.Text, {
                                            className: T.Tm,
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children:
                                                t === x.np.FRIEND_ANNIVERSARY
                                                    ? I.intl.formatToPlainString(I.t.PpG27s, { numberOfYears: L })
                                                    : (0, p.yE)(t),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: T.UD,
                    children: [
                        (0, i.jsx)(s.Button, {
                            size: "sm",
                            variant: "secondary",
                            text: I.intl.string(I.t.nffuyb),
                            "aria-label": I.intl.string(I.t.nffuyb),
                            onClick: (e) => {
                                e.stopPropagation(),
                                    h.default.track(E.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: t,
                                        cta_type: "send_message",
                                        location_stack: R,
                                    }),
                                    (0, s.mMO)(async () => {
                                        let { default: e } = await n.e("95501").then(n.bind(n, 367516));
                                        return (n) =>
                                            (0, i.jsx)(e, { ...n, giftIntentType: t, analyticsLocationHistory: R });
                                    });
                            },
                        }),
                        (0, i.jsx)(s.Button, {
                            size: "sm",
                            variant: "expressive",
                            text: D(),
                            icon: s.okO,
                            "aria-label": D(),
                            onClick: (e) => {
                                e.stopPropagation();
                                let n = m.A.getUserAffinity(v.id);
                                h.default.track(E.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                                    gift_intent_type: t,
                                    affinity: n?.dmProbability,
                                    location_stack: R,
                                }),
                                    O();
                            },
                        }),
                    ],
                }),
            ],
        }),
    });
}
