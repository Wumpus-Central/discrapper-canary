n.d(t, { Z: () => C });
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
    _ = n(213609),
    p = n(963249),
    h = n(594174),
    m = n(51144),
    g = n(479446),
    E = n(441623),
    b = n(317271),
    y = n(474936),
    O = n(981631),
    v = n(268685),
    I = n(388032),
    T = n(553517);
function S(e, t, n) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function C(e) {
    let {
            giftIntentType: t,
            recipientUser: a,
            onMouseEnter: S,
            onMouseLeave: C,
            popoutPosition: N,
            analyticsPage: R,
            analyticsSection: P,
            glow: D,
            innerRef: w,
        } = e,
        L = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        { analyticsLocations: x } = (0, f.ZP)(),
        M = (0, l.e7)([E.ZP], () => E.ZP.getFriendAnniversaryYears(a.id)),
        { Component: k } = (0, c.V)();
    i.useEffect(() => {
        (0, _.h)({
            name: s.ImpressionNames.GIFT_INTENT_CARD,
            type: s.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                num_friend_anniversaries: E.ZP.getFriendAnniversaries().length,
            },
        });
    }, [t]);
    let j = () =>
            t === y.hX.FRIEND_ANNIVERSARY
                ? I.intl.formatToPlainString(I.t.rtRr04, { friendUserName: m.ZP.getName(a) })
                : (0, g.Ou)(t),
        U = () =>
            t === y.hX.FRIEND_ANNIVERSARY ? I.intl.formatToPlainString(I.t.PpG27s, { numberOfYears: M }) : (0, g.Ou)(t),
        G = () =>
            t === y.hX.FRIEND_ANNIVERSARY
                ? I.intl.formatToPlainString(I.t.W7AF4C, { friendUserName: m.ZP.getName(a) })
                : (0, g.Ou)(t),
        B = () => (t === y.hX.FRIEND_ANNIVERSARY ? I.intl.string(I.t.OrwKgi) : (0, g.Ou)(t)),
        Z = (e) => {
            e.stopPropagation();
            let n = (0, b.F)(t);
            (0, p.Z)({
                isGift: !0,
                initialPlanId: null,
                giftRecipient: a,
                analyticsLocation: n.chat,
                analyticsLocations: x,
                analyticsObject: {
                    page: R,
                    section: P,
                    object: O.qAy.BUTTON_CTA,
                    objectType: O.AnalyticsObjectTypes.GIFT,
                },
                giftMessage: B(),
            });
        };
    return (0, r.jsx)("div", {
        ref: w,
        className: o()(T.content, { [T.outerGlow]: D }),
        onMouseEnter: S,
        onMouseLeave: C,
        children: (0, r.jsxs)("div", {
            className: o()(T.innerContent, { [T.innerGlow]: D }),
            children: [
                (0, r.jsxs)("div", {
                    className: T.subContent,
                    children: [
                        (0, r.jsxs)("div", {
                            className: T.avatars,
                            children: [
                                (0, r.jsx)(d.Z, {
                                    className: T.recipientUserAvatar,
                                    user: a,
                                    "aria-label": a.username,
                                    size: v.EF.SIZE_56,
                                }),
                                null != L &&
                                    (0, r.jsx)(d.Z, {
                                        className: T.currentUserAvatar,
                                        user: L,
                                        "aria-label": a.username,
                                        size: v.EF.SIZE_24,
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: T.textContainer,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: "text-md/medium",
                                    color: "text-primary",
                                    lineClamp: 3,
                                    children: j(),
                                }),
                                (0, r.jsxs)("div", {
                                    className: T.subHeaderContainer,
                                    children: [
                                        (0, r.jsx)(u.iFz, { size: "xs" }),
                                        (0, r.jsx)(u.Text, {
                                            className: T.subHeaderText,
                                            variant: "text-sm/normal",
                                            color: "text-secondary",
                                            children: U(),
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
                        (0, r.jsx)(u.hU, {
                            size: "sm",
                            variant: "secondary",
                            icon: k,
                            "aria-label": I.intl.string(I.t.I61IsE),
                            onClick: () => {
                                (0, u.ZDy)(async () => {
                                    let { default: e } = await n.e("5890").then(n.bind(n, 171793));
                                    return (t) => (0, r.jsx)(e, A({}, t));
                                });
                            },
                        }),
                        (0, r.jsx)(u.Button, {
                            size: "sm",
                            variant: "expressive",
                            text: G(),
                            icon: u.OgN,
                            "aria-label": G(),
                            onClick: Z,
                        }),
                    ],
                }),
                null != N &&
                    (0, r.jsx)("div", {
                        className: o()(T.connector, {
                            [T.leftPopoutConnector]: "left" === N,
                            [T.rightPopoutConnector]: "right" === N,
                        }),
                    }),
            ],
        }),
    });
}
