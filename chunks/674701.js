n.d(t, { Z: () => A });
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
    m = n(594174),
    h = n(51144),
    g = n(479446),
    E = n(441623),
    b = n(317271),
    y = n(474936),
    O = n(981631),
    v = n(268685),
    S = n(388032),
    I = n(553517);
function T(e, t, n) {
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
function C(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e) {
    let {
            giftIntentType: t,
            recipientUser: a,
            onMouseEnter: T,
            onMouseLeave: A,
            popoutPosition: N,
            analyticsPage: P,
            analyticsSection: R,
            glow: D,
            innerRef: w,
        } = e,
        x = (0, l.e7)([m.default], () => m.default.getCurrentUser()),
        { analyticsLocations: L } = (0, f.ZP)(),
        j = (0, l.e7)([E.ZP], () => E.ZP.getFriendAnniversaryYears(a.id)),
        { Component: M } = (0, c.V)();
    i.useEffect(() => {
        (0, p.h)({
            name: s.ImpressionNames.GIFT_INTENT_CARD,
            type: s.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                num_friend_anniversaries: E.ZP.getFriendAnniversaries().length,
            },
        });
    }, [t]);
    let k = () => (t === y.hX.FRIEND_ANNIVERSARY ? S.intl.string(S.t.CeQIwZ) : (0, g.Ou)(t)),
        U = () =>
            t === y.hX.FRIEND_ANNIVERSARY ? S.intl.formatToPlainString(S.t.PpG27s, { numberOfYears: j }) : (0, g.Ou)(t),
        G = () =>
            t === y.hX.FRIEND_ANNIVERSARY
                ? S.intl.formatToPlainString(S.t.W7AF4C, { friendUserName: h.ZP.getName(a) })
                : (0, g.Ou)(t),
        Z = () => (t === y.hX.FRIEND_ANNIVERSARY ? S.intl.string(S.t.OrwKgi) : (0, g.Ou)(t)),
        B = (e) => {
            e.stopPropagation();
            let n = (0, b.F)(t);
            (0, _.Z)({
                isGift: !0,
                initialPlanId: null,
                giftRecipient: a,
                analyticsLocation: n.chat,
                analyticsLocations: L,
                analyticsObject: {
                    page: P,
                    section: R,
                    object: O.qAy.BUTTON_CTA,
                    objectType: O.AnalyticsObjectTypes.GIFT,
                },
                giftMessage: Z(),
            });
        };
    return (0, r.jsx)("div", {
        ref: w,
        className: o()(I.content, { [I.outerGlow]: D }),
        onMouseEnter: T,
        onMouseLeave: A,
        children: (0, r.jsxs)("div", {
            className: o()(I.innerContent, { [I.innerGlow]: D }),
            children: [
                (0, r.jsxs)("div", {
                    className: I.subContent,
                    children: [
                        (0, r.jsxs)("div", {
                            className: I.avatars,
                            children: [
                                (0, r.jsx)(d.Z, {
                                    className: I.recipientUserAvatar,
                                    user: a,
                                    "aria-label": a.username,
                                    size: v.EF.SIZE_56,
                                }),
                                null != x &&
                                    (0, r.jsx)(d.Z, {
                                        className: I.currentUserAvatar,
                                        user: x,
                                        "aria-label": a.username,
                                        size: v.EF.SIZE_24,
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: I.textContainer,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    lineClamp: 3,
                                    children: k(),
                                }),
                                (0, r.jsxs)("div", {
                                    className: I.subHeaderContainer,
                                    children: [
                                        (0, r.jsx)(u.iFz, { size: "xxs" }),
                                        (0, r.jsx)(u.Text, {
                                            className: I.subHeaderText,
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children: U(),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: I.buttonContainer,
                    children: [
                        (0, r.jsx)(u.hU, {
                            size: "sm",
                            variant: "secondary",
                            icon: M,
                            "aria-label": S.intl.string(S.t.I61IsE),
                            onClick: () => {
                                (0, u.ZDy)(async () => {
                                    let { default: e } = await n.e("5890").then(n.bind(n, 171793));
                                    return (t) => (0, r.jsx)(e, C({}, t));
                                });
                            },
                        }),
                        (0, r.jsx)(u.Button, {
                            size: "sm",
                            variant: "expressive",
                            text: G(),
                            icon: u.OgN,
                            "aria-label": G(),
                            onClick: B,
                        }),
                    ],
                }),
                null != N &&
                    (0, r.jsx)("div", {
                        className: o()(I.connector, {
                            [I.leftPopoutConnector]: "left" === N,
                            [I.rightPopoutConnector]: "right" === N,
                        }),
                    }),
            ],
        }),
    });
}
