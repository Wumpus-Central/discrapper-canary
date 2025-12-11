n.d(t, { Z: () => C });
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
    g = n(752048),
    h = n(602733),
    m = n(699516),
    _ = n(626135),
    b = n(909917),
    E = n(795448),
    O = n(474936),
    v = n(981631),
    y = n(388032),
    I = n(934422);
function C(e) {
    let {
            ref: t,
            isFocused: C,
            isActive: S,
            status: T,
            activities: N,
            applicationStream: j,
            isGameRelationship: P,
            isMobile: x,
            onOtherHover: A,
            onClick: Z,
            recipientUser: w,
            giftIntentType: L,
        } = e,
        { analyticsLocations: R } = (0, o.ZP)(),
        { Component: D } = (0, a.V)(),
        M = (0, h.ao)({
            location: "gift-intent-friend-row",
            isGift: !0,
            giftRecipient: w,
        });
    i.useEffect(() => {
        let e = g.Z.getUserAffinity(w.id);
        (0, c.h)({
            name: l.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: l.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: L,
                affinity: null == e ? void 0 : e.communicationProbability,
            },
        });
    }, [w, L]);
    let k = (e) => {
            e.stopPropagation();
            let t = g.Z.getUserAffinity(w.id);
            _.default.track(v.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                gift_intent_type: L,
                affinity: null == t ? void 0 : t.communicationProbability,
            }),
                M
                    ? (0, b.Z)({
                          giftRecipient: w,
                          analyticsLocations: R,
                          analyticsLocation: v.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
                          analyticsObject: {
                              page: v.ZY5.FRIENDS_LIST,
                              section: v.jXE.FRIENDS_LIST_FRIEND_ROW,
                              object: v.qAy.BUTTON_CTA,
                              objectType: v.AnalyticsObjectTypes.GIFT,
                          },
                          giftMessage: U(),
                      })
                    : (0, u.Z)({
                          isGift: !0,
                          initialPlanId: null,
                          giftRecipient: w,
                          analyticsLocations: R,
                          analyticsLocation: v.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
                          analyticsObject: {
                              page: v.ZY5.FRIENDS_LIST,
                              section: v.jXE.FRIENDS_LIST_FRIEND_ROW,
                              object: v.qAy.BUTTON_CTA,
                              objectType: v.AnalyticsObjectTypes.GIFT,
                          },
                          giftMessage: U(),
                      });
        },
        U = () => (L === O.hX.FRIEND_ANNIVERSARY ? y.intl.string(y.t.OrwKgi) : void 0);
    return (0, r.jsx)(d.Z, {
        ref: t,
        isFocused: C,
        isActive: S,
        user: w,
        onOtherHover: A,
        onClick: Z,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: I.listItemContents,
                children: [
                    (0, r.jsx)(f.Z, {
                        user: w,
                        status: T,
                        isMobile: x,
                        subText: (0, r.jsx)(p.Z, {
                            hovered: e,
                            activities: N,
                            applicationStream: j,
                            status: T,
                            user: w,
                            userIgnored: m.Z.isIgnored(w.id),
                        }),
                        hovered: e,
                        showAccountIdentifier: !P && !w.isProvisional,
                    }),
                    (0, r.jsxs)("div", {
                        className: I.actions,
                        children: [
                            (0, r.jsx)(s.hU, {
                                size: "sm",
                                variant: "secondary",
                                icon: D,
                                "aria-label": y.intl.string(y.t.I61IsE),
                                onClick: () => {
                                    (0, E.PV)(w.id),
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
                                text: y.intl.string(y.t.PEjaCx),
                                icon: s.OgN,
                                "aria-label": y.intl.string(y.t.PEjaCx),
                                onClick: k,
                            }),
                        ],
                    }),
                ],
            }),
    });
}
