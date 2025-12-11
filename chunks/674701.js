n.d(t, { Z: () => P });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(990547),
    l = n(442837),
    c = n(114101),
    u = n(481060),
    d = n(700582),
    f = n(906732),
    p = n(213609),
    _ = n(963249),
    m = n(602733),
    h = n(594174),
    g = n(51144),
    E = n(479446),
    b = n(909917),
    y = n(441623),
    O = n(317271),
    v = n(474936),
    S = n(981631),
    I = n(268685),
    T = n(388032),
    C = n(553517);
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
function P(e) {
    let {
            giftIntentType: t,
            recipientUser: a,
            onMouseEnter: A,
            onMouseLeave: P,
            popoutPosition: R,
            analyticsPage: w,
            analyticsSection: D,
            glow: x,
            innerRef: L,
        } = e,
        j = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        { analyticsLocations: M } = (0, f.ZP)(),
        k = (0, l.e7)([y.ZP], () => y.ZP.getFriendAnniversaryYears(a.id)),
        { Component: U } = (0, c.V)(),
        G = (0, m.ao)({
            location: "gift-intent-card",
            isGift: !0,
            giftRecipient: a,
        });
    i.useEffect(() => {
        (0, p.h)({
            name: s.ImpressionNames.GIFT_INTENT_CARD,
            type: s.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                num_friend_anniversaries: y.ZP.getFriendAnniversaries().length,
            },
        });
    }, [t]);
    let Z = () => (t === v.hX.FRIEND_ANNIVERSARY ? T.intl.string(T.t.CeQIwZ) : (0, E.Ou)(t)),
        B = () =>
            t === v.hX.FRIEND_ANNIVERSARY ? T.intl.formatToPlainString(T.t.PpG27s, { numberOfYears: k }) : (0, E.Ou)(t),
        F = () =>
            t === v.hX.FRIEND_ANNIVERSARY
                ? T.intl.formatToPlainString(T.t.W7AF4C, { friendUserName: g.ZP.getName(a) })
                : (0, E.Ou)(t),
        V = () => (t === v.hX.FRIEND_ANNIVERSARY ? T.intl.string(T.t.OrwKgi) : (0, E.Ou)(t)),
        H = (e) => {
            e.stopPropagation();
            let n = (0, O.F)(t);
            G
                ? (0, b.Z)({
                      giftRecipient: a,
                      analyticsLocations: M,
                      analyticsLocation: n.chat,
                      analyticsObject: {
                          page: w,
                          section: D,
                          object: S.qAy.BUTTON_CTA,
                          objectType: S.AnalyticsObjectTypes.GIFT,
                      },
                      giftMessage: V(),
                  })
                : (0, _.Z)({
                      isGift: !0,
                      initialPlanId: null,
                      giftRecipient: a,
                      analyticsLocation: n.chat,
                      analyticsLocations: M,
                      analyticsObject: {
                          page: w,
                          section: D,
                          object: S.qAy.BUTTON_CTA,
                          objectType: S.AnalyticsObjectTypes.GIFT,
                      },
                      giftMessage: V(),
                  });
        };
    return (0, r.jsx)("div", {
        ref: L,
        className: o()(C.content, { [C.outerGlow]: x }),
        onMouseEnter: A,
        onMouseLeave: P,
        children: (0, r.jsxs)("div", {
            className: o()(C.innerContent, { [C.innerGlow]: x }),
            children: [
                (0, r.jsxs)("div", {
                    className: C.subContent,
                    children: [
                        (0, r.jsxs)("div", {
                            className: C.avatars,
                            children: [
                                (0, r.jsx)(d.Z, {
                                    className: C.recipientUserAvatar,
                                    user: a,
                                    "aria-label": a.username,
                                    size: I.EF.SIZE_56,
                                }),
                                null != j &&
                                    (0, r.jsx)(d.Z, {
                                        className: C.currentUserAvatar,
                                        user: j,
                                        "aria-label": a.username,
                                        size: I.EF.SIZE_24,
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: C.textContainer,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    lineClamp: 3,
                                    children: Z(),
                                }),
                                (0, r.jsxs)("div", {
                                    className: C.subHeaderContainer,
                                    children: [
                                        (0, r.jsx)(u.iFz, { size: "xxs" }),
                                        (0, r.jsx)(u.Text, {
                                            className: C.subHeaderText,
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children: B(),
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
                        (0, r.jsx)(u.hU, {
                            size: "sm",
                            variant: "secondary",
                            icon: U,
                            "aria-label": T.intl.string(T.t.I61IsE),
                            onClick: () => {
                                (0, u.ZDy)(async () => {
                                    let { default: e } = await n.e("5890").then(n.bind(n, 171793));
                                    return (t) => (0, r.jsx)(e, N({}, t));
                                });
                            },
                        }),
                        (0, r.jsx)(u.Button, {
                            size: "sm",
                            variant: "expressive",
                            text: F(),
                            icon: u.OgN,
                            "aria-label": F(),
                            onClick: H,
                        }),
                    ],
                }),
                null != R &&
                    (0, r.jsx)("div", {
                        className: o()(C.connector, {
                            [C.leftPopoutConnector]: "left" === R,
                            [C.rightPopoutConnector]: "right" === R,
                        }),
                    }),
            ],
        }),
    });
}
