n.d(t, { Z: () => P });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(990547),
    s = n(442837),
    c = n(114101),
    u = n(481060),
    d = n(100527),
    p = n(906732),
    f = n(213609),
    g = n(963249),
    m = n(417183),
    h = n(825682),
    b = n(170245),
    _ = n(752048),
    E = n(602733),
    O = n(699516),
    v = n(626135),
    y = n(909917),
    I = n(795448),
    C = n(441623),
    S = n(981631),
    T = n(617015),
    N = n(388032),
    j = n(756853);
function P(e) {
    let {
            ref: t,
            isFocused: l,
            isActive: P,
            status: x,
            activities: A,
            applicationStream: Z,
            isGameRelationship: w,
            isMobile: L,
            onOtherHover: R,
            onClick: D,
            recipientUser: M,
            giftIntentType: k,
        } = e,
        { analyticsLocations: U } = (0, p.ZP)(d.Z.PREMIUM_GIFT_INTENT_FRIEND_ROW),
        { Component: G } = (0, c.V)(),
        H = (0, s.e7)([C.ZP], () => C.ZP.getFriendAnniversaryYears(M.id)),
        B = (0, E.ao)({
            location: "gift-intent-friend-row",
            isGift: !0,
            giftRecipient: M,
        });
    i.useEffect(() => {
        let e = _.Z.getUserAffinity(M.id);
        (0, f.h)({
            name: o.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: o.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: k,
                affinity: null == e ? void 0 : e.communicationProbability,
            },
        });
    }, [M, k]);
    let V = (e) => {
        e.stopPropagation();
        let t = _.Z.getUserAffinity(M.id);
        v.default.track(S.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
            gift_intent_type: k,
            affinity: null == t ? void 0 : t.dmProbability,
            location_stack: U,
        }),
            B
                ? (0, y.Z)({
                      giftRecipient: M,
                      analyticsLocations: U,
                      analyticsLocation: S.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
                      analyticsObject: {
                          page: S.ZY5.FRIENDS_LIST,
                          section: S.jXE.FRIENDS_LIST_FRIEND_ROW,
                          object: S.qAy.BUTTON_CTA,
                          objectType: S.AnalyticsObjectTypes.GIFT,
                      },
                  })
                : (0, g.Z)({
                      isGift: !0,
                      initialPlanId: null,
                      giftRecipient: M,
                      analyticsLocations: U,
                      analyticsLocation: S.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
                      analyticsObject: {
                          page: S.ZY5.FRIENDS_LIST,
                          section: S.jXE.FRIENDS_LIST_FRIEND_ROW,
                          object: S.qAy.BUTTON_CTA,
                          objectType: S.AnalyticsObjectTypes.GIFT,
                      },
                  });
    };
    return (0, r.jsx)(m.Z, {
        ref: t,
        isFocused: l,
        isActive: P,
        user: M,
        onOtherHover: R,
        onClick: D,
        height: T.fJ,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: a()(j.listItemContents, j.friendAnniversaryRow),
                children: [
                    (0, r.jsx)(b.Z, {
                        className: j.userInfoCentered,
                        user: M,
                        status: x,
                        isMobile: L,
                        subText: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(h.Z, {
                                    hovered: e,
                                    activities: A,
                                    applicationStream: Z,
                                    status: x,
                                    user: M,
                                    userIgnored: O.Z.isIgnored(M.id),
                                }),
                                (0, r.jsxs)("div", {
                                    className: j.anniversarySubtext,
                                    children: [
                                        (0, r.jsx)(u.iFz, {
                                            size: "xxs",
                                            color: "currentColor",
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: N.intl.formatToPlainString(N.t.S3fdq7, { numberOfYears: H }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        hovered: e,
                        showAccountIdentifier: !w && !M.isProvisional,
                    }),
                    (0, r.jsxs)("div", {
                        className: j.actions,
                        children: [
                            (0, r.jsx)(u.hU, {
                                size: "sm",
                                variant: "secondary",
                                icon: G,
                                "aria-label": N.intl.string(N.t.I61IsE),
                                onClick: () => {
                                    v.default.track(S.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: k,
                                        cta_type: "send_message",
                                        location_stack: U,
                                    }),
                                        (0, I.PV)(M.id),
                                        (0, u.ZDy)(async () => {
                                            let { default: e } = await n.e("5890").then(n.bind(n, 171793));
                                            return (t) => {
                                                var n, i;
                                                return (0, r.jsx)(
                                                    e,
                                                    ((n = (function (e) {
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
                                                    })({}, t)),
                                                    (i = i =
                                                        {
                                                            giftIntentType: null != k ? k : void 0,
                                                            analyticsLocationHistory: U,
                                                        }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(
                                                              n,
                                                              Object.getOwnPropertyDescriptors(i),
                                                          )
                                                        : (function (e, t) {
                                                              var n = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var r = Object.getOwnPropertySymbols(e);
                                                                  n.push.apply(n, r);
                                                              }
                                                              return n;
                                                          })(Object(i)).forEach(function (e) {
                                                              Object.defineProperty(
                                                                  n,
                                                                  e,
                                                                  Object.getOwnPropertyDescriptor(i, e),
                                                              );
                                                          }),
                                                    n),
                                                );
                                            };
                                        });
                                },
                            }),
                            (0, r.jsx)(u.Button, {
                                size: "sm",
                                text: N.intl.string(N.t.PEjaCx),
                                icon: u.OgN,
                                "aria-label": N.intl.string(N.t.PEjaCx),
                                onClick: V,
                            }),
                        ],
                    }),
                ],
            }),
    });
}
