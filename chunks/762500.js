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
    _ = n(474936),
    b = n(981631),
    E = n(388032),
    O = n(934422);
function y(e) {
    let {
            ref: t,
            isFocused: y,
            isActive: v,
            status: I,
            activities: C,
            applicationStream: S,
            isGameRelationship: T,
            isMobile: N,
            onOtherHover: j,
            onClick: P,
            recipientUser: x,
            giftIntentType: A,
        } = e,
        { analyticsLocations: Z } = (0, o.ZP)(),
        { Component: w } = (0, a.V)();
    i.useEffect(() => {
        let e = h.Z.getUserAffinity(x.id);
        (0, c.h)({
            name: l.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: l.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: A,
                affinity: null == e ? void 0 : e.communicationProbability,
            },
        });
    }, [x, A]);
    let L = (e) => {
            e.stopPropagation();
            let t = h.Z.getUserAffinity(x.id);
            m.default.track(b.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                gift_intent_type: A,
                affinity: null == t ? void 0 : t.communicationProbability,
            }),
                (0, u.Z)({
                    isGift: !0,
                    initialPlanId: null,
                    giftRecipient: x,
                    analyticsLocations: Z,
                    analyticsObject: {
                        page: b.ZY5.FRIENDS_LIST,
                        section: b.jXE.FRIENDS_LIST_FRIEND_ROW,
                        object: b.qAy.BUTTON_CTA,
                        objectType: b.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: R(),
                });
        },
        R = () => (A === _.hX.FRIEND_ANNIVERSARY ? E.intl.string(E.t.OrwKgi) : void 0);
    return (0, r.jsx)(d.Z, {
        ref: t,
        isFocused: y,
        isActive: v,
        user: x,
        onOtherHover: j,
        onClick: P,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: O.listItemContents,
                children: [
                    (0, r.jsx)(f.Z, {
                        user: x,
                        status: I,
                        isMobile: N,
                        subText: (0, r.jsx)(p.Z, {
                            hovered: e,
                            activities: C,
                            applicationStream: S,
                            status: I,
                            user: x,
                            userIgnored: g.Z.isIgnored(x.id),
                        }),
                        hovered: e,
                        showAccountIdentifier: !T && !x.isProvisional,
                    }),
                    (0, r.jsxs)("div", {
                        className: O.actions,
                        children: [
                            (0, r.jsx)(s.hU, {
                                size: "sm",
                                variant: "secondary",
                                icon: w,
                                "aria-label": E.intl.string(E.t.I61IsE),
                                onClick: () => {
                                    (0, s.ZDy)(async () => {
                                        let { default: e } = await n.e("19345").then(n.bind(n, 171793));
                                        return (t) =>
                                            (0, r.jsx)(
                                                e,
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            r = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (r = r.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e)
                                                                        .enumerable;
                                                                }),
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
                                text: E.intl.string(E.t.PEjaCx),
                                icon: s.OgN,
                                "aria-label": E.intl.string(E.t.PEjaCx),
                                onClick: L,
                            }),
                        ],
                    }),
                ],
            }),
    });
}
