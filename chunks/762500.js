n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    l = n(990547),
    a = n(114101),
    s = n(481060),
    o = n(906732),
    c = n(213609),
    u = n(963249),
    d = n(417183),
    p = n(825682),
    f = n(170245),
    h = n(752048),
    g = n(699516),
    m = n(626135),
    _ = n(795448),
    b = n(474936),
    E = n(981631),
    O = n(388032),
    v = n(934422);
function y(e) {
    let {
            ref: t,
            isFocused: y,
            isActive: I,
            status: C,
            activities: S,
            applicationStream: T,
            isGameRelationship: N,
            isMobile: j,
            onOtherHover: P,
            onClick: x,
            recipientUser: A,
            giftIntentType: Z,
        } = e,
        { analyticsLocations: w } = (0, o.ZP)(),
        { Component: L } = (0, a.V)();
    i.useEffect(() => {
        let e = h.Z.getUserAffinity(A.id);
        (0, c.h)({
            name: l.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: l.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: Z,
                affinity: null == e ? void 0 : e.communicationProbability,
            },
        });
    }, [A, Z]);
    let R = (e) => {
            e.stopPropagation();
            let t = h.Z.getUserAffinity(A.id);
            m.default.track(E.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                gift_intent_type: Z,
                affinity: null == t ? void 0 : t.communicationProbability,
            }),
                (0, u.Z)({
                    isGift: !0,
                    initialPlanId: null,
                    giftRecipient: A,
                    analyticsLocations: w,
                    analyticsObject: {
                        page: E.ZY5.FRIENDS_LIST,
                        section: E.jXE.FRIENDS_LIST_FRIEND_ROW,
                        object: E.qAy.BUTTON_CTA,
                        objectType: E.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: D(),
                });
        },
        D = () => (Z === b.hX.FRIEND_ANNIVERSARY ? O.intl.string(O.t.OrwKgi) : void 0);
    return (0, r.jsx)(d.Z, {
        ref: t,
        isFocused: y,
        isActive: I,
        user: A,
        onOtherHover: P,
        onClick: x,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: v.listItemContents,
                children: [
                    (0, r.jsx)(f.Z, {
                        user: A,
                        status: C,
                        isMobile: j,
                        subText: (0, r.jsx)(p.Z, {
                            hovered: e,
                            activities: S,
                            applicationStream: T,
                            status: C,
                            user: A,
                            userIgnored: g.Z.isIgnored(A.id),
                        }),
                        hovered: e,
                        showAccountIdentifier: !N && !A.isProvisional,
                    }),
                    (0, r.jsxs)("div", {
                        className: v.actions,
                        children: [
                            (0, r.jsx)(s.hU, {
                                size: "sm",
                                variant: "secondary",
                                icon: L,
                                "aria-label": O.intl.string(O.t.I61IsE),
                                onClick: () => {
                                    (0, _.PV)(A.id),
                                        (0, s.ZDy)(async () => {
                                            let { default: e } = await n.e("5890").then(n.bind(n, 171793));
                                            return (t) =>
                                                (0, r.jsx)(
                                                    e,
                                                    (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                r = Object.keys(n);
                                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                                (r = r.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(
                                                                        function (e) {
                                                                            return Object.getOwnPropertyDescriptor(n, e)
                                                                                .enumerable;
                                                                        },
                                                                    ),
                                                                )),
                                                                r.forEach(function (t) {
                                                                    var r;
                                                                    (r = n[t]),
                                                                        t in e
                                                                            ? Object.defineProperty(e, t, {
                                                                                  value: r,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0,
                                                                              })
                                                                            : (e[t] = r);
                                                                });
                                                        }
                                                        return e;
                                                    })({}, t),
                                                );
                                        });
                                },
                            }),
                            (0, r.jsx)(s.Button, {
                                size: "sm",
                                text: O.intl.string(O.t.PEjaCx),
                                icon: s.OgN,
                                "aria-label": O.intl.string(O.t.PEjaCx),
                                onClick: R,
                            }),
                        ],
                    }),
                ],
            }),
    });
}
