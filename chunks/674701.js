n.d(t, { Z: () => w });
var r = n(54381),
    i = n(473749),
    a = n(990547),
    o = n(442837),
    s = n(114101),
    l = n(481060),
    c = n(700582),
    u = n(100527),
    d = n(906732),
    f = n(213609),
    p = n(963249),
    _ = n(752048),
    m = n(602733),
    h = n(594174),
    g = n(626135),
    E = n(479446),
    b = n(909917),
    y = n(441623),
    O = n(317271),
    v = n(474936),
    S = n(981631),
    I = n(268685),
    T = n(388032),
    C = n(558741);
function A(e, t, n) {
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
function N(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    let { giftIntentType: t, recipientUser: A, analyticsPage: P, analyticsSection: w, innerRef: D } = e,
        x = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
        { analyticsLocations: L } = (0, d.ZP)(u.Z.PREMIUM_GIFT_INTENT_CARD),
        j = (0, o.e7)([y.ZP], () => y.ZP.getFriendAnniversaryYears(A.id)),
        { Component: M } = (0, s.V)(),
        k = (0, m.ao)({
            location: "gift-intent-card",
            isGift: !0,
            giftRecipient: A,
        });
    i.useEffect(() => {
        (0, f.h)({
            name: a.ImpressionNames.GIFT_INTENT_CARD,
            type: a.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                num_friend_anniversaries: y.ZP.getFriendAnniversaries().length,
            },
        });
    }, [t]);
    let U = () => (t === v.hX.FRIEND_ANNIVERSARY ? T.intl.string(T.t.CeQIwZ) : (0, E.Ou)(t)),
        G = () =>
            t === v.hX.FRIEND_ANNIVERSARY ? T.intl.formatToPlainString(T.t.PpG27s, { numberOfYears: j }) : (0, E.Ou)(t),
        Z = () => (t === v.hX.FRIEND_ANNIVERSARY ? T.intl.string(T.t.PEjaCx) : (0, E.Ou)(t)),
        F = (e) => {
            e.stopPropagation();
            let n = _.Z.getUserAffinity(A.id);
            g.default.track(S.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                gift_intent_type: t,
                affinity: null == n ? void 0 : n.dmProbability,
                location_stack: L,
            });
            let r = (0, O.F)(t);
            k
                ? (0, b.Z)({
                      giftRecipient: A,
                      analyticsLocations: L,
                      analyticsLocation: r.chat,
                      analyticsObject: {
                          page: P,
                          section: w,
                          object: S.qAy.BUTTON_CTA,
                          objectType: S.AnalyticsObjectTypes.GIFT,
                      },
                  })
                : (0, p.Z)({
                      isGift: !0,
                      initialPlanId: null,
                      giftRecipient: A,
                      analyticsLocation: r.chat,
                      analyticsLocations: L,
                      analyticsObject: {
                          page: P,
                          section: w,
                          object: S.qAy.BUTTON_CTA,
                          objectType: S.AnalyticsObjectTypes.GIFT,
                      },
                  });
        };
    return (0, r.jsx)("div", {
        ref: D,
        className: C.content,
        children: (0, r.jsxs)("div", {
            className: C.innerContent,
            children: [
                (0, r.jsxs)("div", {
                    className: C.subContent,
                    children: [
                        (0, r.jsxs)("div", {
                            className: C.avatars,
                            children: [
                                (0, r.jsx)(c.Z, {
                                    className: C.recipientUserAvatar,
                                    user: A,
                                    "aria-label": A.username,
                                    size: I.EF.SIZE_56,
                                }),
                                null != x &&
                                    (0, r.jsx)(c.Z, {
                                        className: C.currentUserAvatar,
                                        user: x,
                                        "aria-label": A.username,
                                        size: I.EF.SIZE_24,
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: C.textContainer,
                            children: [
                                (0, r.jsx)(l.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    lineClamp: 3,
                                    children: U(),
                                }),
                                (0, r.jsxs)("div", {
                                    className: C.subHeaderContainer,
                                    children: [
                                        (0, r.jsx)(l.iFz, { size: "xxs" }),
                                        (0, r.jsx)(l.Text, {
                                            className: C.subHeaderText,
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children: G(),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: C.buttonContainer,
                    children: [
                        (0, r.jsx)(l.hU, {
                            size: "sm",
                            variant: "secondary",
                            icon: M,
                            "aria-label": T.intl.string(T.t.I61IsE),
                            onClick: (e) => {
                                e.stopPropagation(),
                                    g.default.track(S.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: t,
                                        cta_type: "send_message",
                                        location_stack: L,
                                    }),
                                    (0, l.ZDy)(async () => {
                                        let { default: e } = await n.e("5890").then(n.bind(n, 171793));
                                        return (n) =>
                                            (0, r.jsx)(
                                                e,
                                                R(N({}, n), {
                                                    giftIntentType: t,
                                                    analyticsLocationHistory: L,
                                                }),
                                            );
                                    });
                            },
                        }),
                        (0, r.jsx)(l.Button, {
                            size: "sm",
                            variant: "expressive",
                            text: Z(),
                            icon: l.OgN,
                            "aria-label": Z(),
                            onClick: F,
                        }),
                    ],
                }),
            ],
        }),
    });
}
