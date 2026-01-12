n.d(t, { Z: () => x });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(990547),
    l = n(442837),
    c = n(114101),
    u = n(481060),
    d = n(700582),
    f = n(100527),
    p = n(906732),
    _ = n(213609),
    m = n(963249),
    h = n(752048),
    g = n(602733),
    E = n(594174),
    b = n(626135),
    y = n(479446),
    O = n(909917),
    v = n(441623),
    S = n(317271),
    I = n(474936),
    T = n(981631),
    C = n(268685),
    A = n(388032),
    N = n(558741);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e) {
    let {
            giftIntentType: t,
            recipientUser: a,
            onMouseEnter: P,
            onMouseLeave: w,
            popoutPosition: x,
            analyticsPage: L,
            analyticsSection: j,
            glow: M,
            innerRef: k,
        } = e,
        U = (0, l.e7)([E.default], () => E.default.getCurrentUser()),
        { analyticsLocations: G } = (0, p.ZP)(f.Z.PREMIUM_GIFT_INTENT_CARD),
        Z = (0, l.e7)([v.ZP], () => v.ZP.getFriendAnniversaryYears(a.id)),
        { Component: F } = (0, c.V)(),
        B = (0, g.ao)({
            location: "gift-intent-card",
            isGift: !0,
            giftRecipient: a,
        });
    i.useEffect(() => {
        (0, _.h)({
            name: s.ImpressionNames.GIFT_INTENT_CARD,
            type: s.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                num_friend_anniversaries: v.ZP.getFriendAnniversaries().length,
            },
        });
    }, [t]);
    let V = () => (t === I.hX.FRIEND_ANNIVERSARY ? A.intl.string(A.t.CeQIwZ) : (0, y.Ou)(t)),
        H = () =>
            t === I.hX.FRIEND_ANNIVERSARY ? A.intl.formatToPlainString(A.t.PpG27s, { numberOfYears: Z }) : (0, y.Ou)(t),
        Y = () => (t === I.hX.FRIEND_ANNIVERSARY ? A.intl.string(A.t.PEjaCx) : (0, y.Ou)(t)),
        W = (e) => {
            e.stopPropagation();
            let n = h.Z.getUserAffinity(a.id);
            b.default.track(T.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                gift_intent_type: t,
                affinity: null == n ? void 0 : n.dmProbability,
                location_stack: G,
            });
            let r = (0, S.F)(t);
            B
                ? (0, O.Z)({
                      giftRecipient: a,
                      analyticsLocations: G,
                      analyticsLocation: r.chat,
                      analyticsObject: {
                          page: L,
                          section: j,
                          object: T.qAy.BUTTON_CTA,
                          objectType: T.AnalyticsObjectTypes.GIFT,
                      },
                  })
                : (0, m.Z)({
                      isGift: !0,
                      initialPlanId: null,
                      giftRecipient: a,
                      analyticsLocation: r.chat,
                      analyticsLocations: G,
                      analyticsObject: {
                          page: L,
                          section: j,
                          object: T.qAy.BUTTON_CTA,
                          objectType: T.AnalyticsObjectTypes.GIFT,
                      },
                  });
        };
    return (0, r.jsx)("div", {
        ref: k,
        className: o()(N.content, { [N.outerGlow]: M }),
        onMouseEnter: P,
        onMouseLeave: w,
        children: (0, r.jsxs)("div", {
            className: o()(N.innerContent, { [N.innerGlow]: M }),
            children: [
                (0, r.jsxs)("div", {
                    className: N.subContent,
                    children: [
                        (0, r.jsxs)("div", {
                            className: N.avatars,
                            children: [
                                (0, r.jsx)(d.Z, {
                                    className: N.recipientUserAvatar,
                                    user: a,
                                    "aria-label": a.username,
                                    size: C.EF.SIZE_56,
                                }),
                                null != U &&
                                    (0, r.jsx)(d.Z, {
                                        className: N.currentUserAvatar,
                                        user: U,
                                        "aria-label": a.username,
                                        size: C.EF.SIZE_24,
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: N.textContainer,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    lineClamp: 3,
                                    children: V(),
                                }),
                                (0, r.jsxs)("div", {
                                    className: N.subHeaderContainer,
                                    children: [
                                        (0, r.jsx)(u.iFz, { size: "xxs" }),
                                        (0, r.jsx)(u.Text, {
                                            className: N.subHeaderText,
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children: H(),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: N.buttonContainer,
                    children: [
                        (0, r.jsx)(u.hU, {
                            size: "sm",
                            variant: "secondary",
                            icon: F,
                            "aria-label": A.intl.string(A.t.I61IsE),
                            onClick: (e) => {
                                e.stopPropagation(),
                                    b.default.track(T.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: t,
                                        cta_type: "send_message",
                                        location_stack: G,
                                    }),
                                    (0, u.ZDy)(async () => {
                                        let { default: e } = await n.e("5890").then(n.bind(n, 171793));
                                        return (n) =>
                                            (0, r.jsx)(
                                                e,
                                                D(R({}, n), {
                                                    giftIntentType: t,
                                                    analyticsLocationHistory: G,
                                                }),
                                            );
                                    });
                            },
                        }),
                        (0, r.jsx)(u.Button, {
                            size: "sm",
                            variant: "expressive",
                            text: Y(),
                            icon: u.OgN,
                            "aria-label": Y(),
                            onClick: W,
                        }),
                    ],
                }),
                null != x &&
                    (0, r.jsx)("div", {
                        className: o()(N.connector, {
                            [N.leftPopoutConnector]: "left" === x,
                            [N.rightPopoutConnector]: "right" === x,
                        }),
                    }),
            ],
        }),
    });
}
