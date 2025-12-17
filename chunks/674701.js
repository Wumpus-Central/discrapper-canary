n.d(t, { Z: () => L });
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
    y = n(51144),
    O = n(479446),
    v = n(909917),
    S = n(441623),
    I = n(317271),
    T = n(474936),
    C = n(981631),
    A = n(268685),
    N = n(388032),
    P = n(558741);
function R(e, t, n) {
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
function w(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L(e) {
    let {
            giftIntentType: t,
            recipientUser: a,
            onMouseEnter: R,
            onMouseLeave: D,
            popoutPosition: L,
            analyticsPage: j,
            analyticsSection: M,
            glow: k,
            innerRef: U,
        } = e,
        G = (0, l.e7)([E.default], () => E.default.getCurrentUser()),
        { analyticsLocations: Z } = (0, p.ZP)(f.Z.PREMIUM_GIFT_INTENT_CARD),
        F = (0, l.e7)([S.ZP], () => S.ZP.getFriendAnniversaryYears(a.id)),
        { Component: B } = (0, c.V)(),
        V = (0, g.ao)({
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
                num_friend_anniversaries: S.ZP.getFriendAnniversaries().length,
            },
        });
    }, [t]);
    let H = () => (t === T.hX.FRIEND_ANNIVERSARY ? N.intl.string(N.t.CeQIwZ) : (0, O.Ou)(t)),
        Y = () =>
            t === T.hX.FRIEND_ANNIVERSARY ? N.intl.formatToPlainString(N.t.PpG27s, { numberOfYears: F }) : (0, O.Ou)(t),
        W = () =>
            t === T.hX.FRIEND_ANNIVERSARY
                ? N.intl.formatToPlainString(N.t.W7AF4C, { friendUserName: y.ZP.getName(a) })
                : (0, O.Ou)(t),
        K = () => (t === T.hX.FRIEND_ANNIVERSARY ? N.intl.string(N.t.OrwKgi) : (0, O.Ou)(t)),
        z = (e) => {
            e.stopPropagation();
            let n = h.Z.getUserAffinity(a.id);
            b.default.track(C.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                gift_intent_type: t,
                affinity: null == n ? void 0 : n.dmProbability,
                location_stack: Z,
            });
            let r = (0, I.F)(t);
            V
                ? (0, v.Z)({
                      giftRecipient: a,
                      analyticsLocations: Z,
                      analyticsLocation: r.chat,
                      analyticsObject: {
                          page: j,
                          section: M,
                          object: C.qAy.BUTTON_CTA,
                          objectType: C.AnalyticsObjectTypes.GIFT,
                      },
                      giftMessage: K(),
                  })
                : (0, m.Z)({
                      isGift: !0,
                      initialPlanId: null,
                      giftRecipient: a,
                      analyticsLocation: r.chat,
                      analyticsLocations: Z,
                      analyticsObject: {
                          page: j,
                          section: M,
                          object: C.qAy.BUTTON_CTA,
                          objectType: C.AnalyticsObjectTypes.GIFT,
                      },
                      giftMessage: K(),
                  });
        };
    return (0, r.jsx)("div", {
        ref: U,
        className: o()(P.content, { [P.outerGlow]: k }),
        onMouseEnter: R,
        onMouseLeave: D,
        children: (0, r.jsxs)("div", {
            className: o()(P.innerContent, { [P.innerGlow]: k }),
            children: [
                (0, r.jsxs)("div", {
                    className: P.subContent,
                    children: [
                        (0, r.jsxs)("div", {
                            className: P.avatars,
                            children: [
                                (0, r.jsx)(d.Z, {
                                    className: P.recipientUserAvatar,
                                    user: a,
                                    "aria-label": a.username,
                                    size: A.EF.SIZE_56,
                                }),
                                null != G &&
                                    (0, r.jsx)(d.Z, {
                                        className: P.currentUserAvatar,
                                        user: G,
                                        "aria-label": a.username,
                                        size: A.EF.SIZE_24,
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: P.textContainer,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    lineClamp: 3,
                                    children: H(),
                                }),
                                (0, r.jsxs)("div", {
                                    className: P.subHeaderContainer,
                                    children: [
                                        (0, r.jsx)(u.iFz, { size: "xxs" }),
                                        (0, r.jsx)(u.Text, {
                                            className: P.subHeaderText,
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children: Y(),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: P.buttonContainer,
                    children: [
                        (0, r.jsx)(u.hU, {
                            size: "sm",
                            variant: "secondary",
                            icon: B,
                            "aria-label": N.intl.string(N.t.I61IsE),
                            onClick: (e) => {
                                e.stopPropagation(),
                                    b.default.track(C.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: t,
                                        cta_type: "send_message",
                                        location_stack: Z,
                                    }),
                                    (0, u.ZDy)(async () => {
                                        let { default: e } = await n.e("5890").then(n.bind(n, 171793));
                                        return (n) =>
                                            (0, r.jsx)(
                                                e,
                                                x(w({}, n), {
                                                    giftIntentType: t,
                                                    analyticsLocationHistory: Z,
                                                }),
                                            );
                                    });
                            },
                        }),
                        (0, r.jsx)(u.Button, {
                            size: "sm",
                            variant: "expressive",
                            text: W(),
                            icon: u.OgN,
                            "aria-label": W(),
                            onClick: z,
                        }),
                    ],
                }),
                null != L &&
                    (0, r.jsx)("div", {
                        className: o()(P.connector, {
                            [P.leftPopoutConnector]: "left" === L,
                            [P.rightPopoutConnector]: "right" === L,
                        }),
                    }),
            ],
        }),
    });
}
