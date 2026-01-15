n.d(t, { Z: () => w });
var r = n(54381),
    i = n(473749),
    a = n(990547),
    o = n(442837),
    s = n(481060),
    l = n(700582),
    c = n(100527),
    u = n(906732),
    d = n(213609),
    f = n(963249),
    p = n(752048),
    _ = n(602733),
    h = n(594174),
    m = n(626135),
    g = n(479446),
    E = n(909917),
    b = n(441623),
    y = n(317271),
    O = n(474936),
    v = n(981631),
    S = n(268685),
    I = n(388032),
    T = n(558741);
function C(e, t, n) {
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
function A(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    let { giftIntentType: t, recipientUser: C, analyticsPage: N, analyticsSection: w, innerRef: R } = e,
        D = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
        { analyticsLocations: x } = (0, u.ZP)(c.Z.PREMIUM_GIFT_INTENT_CARD),
        L = (0, o.e7)([b.ZP], () => b.ZP.getFriendAnniversaryYears(C.id)),
        j = (0, _.ao)({
            location: "gift-intent-card",
            isGift: !0,
            giftRecipient: C,
        });
    i.useEffect(() => {
        (0, d.h)({
            name: a.ImpressionNames.GIFT_INTENT_CARD,
            type: a.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                num_friend_anniversaries: b.ZP.getFriendAnniversaries().length,
            },
        });
    }, [t]);
    let M = () => (t === O.hX.FRIEND_ANNIVERSARY ? I.intl.string(I.t.CeQIwZ) : (0, g.Ou)(t)),
        k = () =>
            t === O.hX.FRIEND_ANNIVERSARY ? I.intl.formatToPlainString(I.t.PpG27s, { numberOfYears: L }) : (0, g.Ou)(t),
        U = () => (t === O.hX.FRIEND_ANNIVERSARY ? I.intl.string(I.t.ilhtIa) : (0, g.Ou)(t)),
        G = (e) => {
            e.stopPropagation();
            let n = p.Z.getUserAffinity(C.id);
            m.default.track(v.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                gift_intent_type: t,
                affinity: null == n ? void 0 : n.dmProbability,
                location_stack: x,
            });
            let r = (0, y.F)(t);
            j
                ? (0, E.Z)({
                      giftRecipient: C,
                      analyticsLocations: x,
                      analyticsLocation: r.chat,
                      analyticsObject: {
                          page: N,
                          section: w,
                          object: v.qAy.BUTTON_CTA,
                          objectType: v.AnalyticsObjectTypes.GIFT,
                      },
                  })
                : (0, f.Z)({
                      isGift: !0,
                      initialPlanId: null,
                      giftRecipient: C,
                      analyticsLocation: r.chat,
                      analyticsLocations: x,
                      analyticsObject: {
                          page: N,
                          section: w,
                          object: v.qAy.BUTTON_CTA,
                          objectType: v.AnalyticsObjectTypes.GIFT,
                      },
                  });
        };
    return (0, r.jsx)("div", {
        ref: R,
        className: T.content,
        children: (0, r.jsxs)("div", {
            className: T.innerContent,
            children: [
                (0, r.jsxs)("div", {
                    className: T.subContent,
                    children: [
                        (0, r.jsxs)("div", {
                            className: T.avatars,
                            children: [
                                (0, r.jsx)(l.Z, {
                                    className: T.recipientUserAvatar,
                                    user: C,
                                    "aria-label": C.username,
                                    size: S.EF.SIZE_56,
                                }),
                                null != D &&
                                    (0, r.jsx)(l.Z, {
                                        className: T.currentUserAvatar,
                                        user: D,
                                        "aria-label": C.username,
                                        size: S.EF.SIZE_24,
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: T.textContainer,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    lineClamp: 3,
                                    children: M(),
                                }),
                                (0, r.jsxs)("div", {
                                    className: T.subHeaderContainer,
                                    children: [
                                        (0, r.jsx)(s.iFz, { size: "xs" }),
                                        (0, r.jsx)(s.Text, {
                                            className: T.subHeaderText,
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children: k(),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: T.buttonContainer,
                    children: [
                        (0, r.jsx)(s.Button, {
                            size: "sm",
                            variant: "secondary",
                            text: I.intl.string(I.t.nffuyb),
                            "aria-label": I.intl.string(I.t.nffuyb),
                            onClick: (e) => {
                                e.stopPropagation(),
                                    m.default.track(v.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: t,
                                        cta_type: "send_message",
                                        location_stack: x,
                                    }),
                                    (0, s.ZDy)(async () => {
                                        let { default: e } = await n.e("5890").then(n.bind(n, 171793));
                                        return (n) =>
                                            (0, r.jsx)(
                                                e,
                                                P(A({}, n), {
                                                    giftIntentType: t,
                                                    analyticsLocationHistory: x,
                                                }),
                                            );
                                    });
                            },
                        }),
                        (0, r.jsx)(s.Button, {
                            size: "sm",
                            variant: "expressive",
                            text: U(),
                            icon: s.OgN,
                            "aria-label": U(),
                            onClick: G,
                        }),
                    ],
                }),
            ],
        }),
    });
}
