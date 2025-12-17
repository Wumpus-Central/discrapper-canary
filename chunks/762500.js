n.d(t, { Z: () => x });
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
    h = n(417183),
    m = n(825682),
    b = n(170245),
    _ = n(752048),
    E = n(602733),
    O = n(699516),
    v = n(626135),
    y = n(909917),
    I = n(795448),
    C = n(441623),
    S = n(474936),
    T = n(981631),
    N = n(617015),
    j = n(388032),
    P = n(756853);
function x(e) {
    let {
            ref: t,
            isFocused: l,
            isActive: x,
            status: A,
            activities: Z,
            applicationStream: w,
            isGameRelationship: L,
            isMobile: R,
            onOtherHover: D,
            onClick: M,
            recipientUser: k,
            giftIntentType: U,
        } = e,
        { analyticsLocations: G } = (0, p.ZP)(d.Z.PREMIUM_GIFT_INTENT_FRIEND_ROW),
        { Component: H } = (0, c.V)(),
        B = (0, s.e7)([C.ZP], () => C.ZP.getFriendAnniversaryYears(k.id)),
        V = (0, E.ao)({
            location: "gift-intent-friend-row",
            isGift: !0,
            giftRecipient: k,
        });
    i.useEffect(() => {
        let e = _.Z.getUserAffinity(k.id);
        (0, f.h)({
            name: o.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: o.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: U,
                affinity: null == e ? void 0 : e.communicationProbability,
            },
        });
    }, [k, U]);
    let F = (e) => {
            e.stopPropagation();
            let t = _.Z.getUserAffinity(k.id);
            v.default.track(T.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                gift_intent_type: U,
                affinity: null == t ? void 0 : t.dmProbability,
                location_stack: G,
            }),
                V
                    ? (0, y.Z)({
                          giftRecipient: k,
                          analyticsLocations: G,
                          analyticsLocation: T.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
                          analyticsObject: {
                              page: T.ZY5.FRIENDS_LIST,
                              section: T.jXE.FRIENDS_LIST_FRIEND_ROW,
                              object: T.qAy.BUTTON_CTA,
                              objectType: T.AnalyticsObjectTypes.GIFT,
                          },
                          giftMessage: z(),
                      })
                    : (0, g.Z)({
                          isGift: !0,
                          initialPlanId: null,
                          giftRecipient: k,
                          analyticsLocations: G,
                          analyticsLocation: T.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
                          analyticsObject: {
                              page: T.ZY5.FRIENDS_LIST,
                              section: T.jXE.FRIENDS_LIST_FRIEND_ROW,
                              object: T.qAy.BUTTON_CTA,
                              objectType: T.AnalyticsObjectTypes.GIFT,
                          },
                          giftMessage: z(),
                      });
        },
        z = () => (U === S.hX.FRIEND_ANNIVERSARY ? j.intl.string(j.t.OrwKgi) : void 0);
    return (0, r.jsx)(h.Z, {
        ref: t,
        isFocused: l,
        isActive: x,
        user: k,
        onOtherHover: D,
        onClick: M,
        height: N.fJ,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: a()(P.listItemContents, P.friendAnniversaryRow),
                children: [
                    (0, r.jsx)(b.Z, {
                        className: P.userInfoCentered,
                        user: k,
                        status: A,
                        isMobile: R,
                        subText: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(m.Z, {
                                    hovered: e,
                                    activities: Z,
                                    applicationStream: w,
                                    status: A,
                                    user: k,
                                    userIgnored: O.Z.isIgnored(k.id),
                                }),
                                (0, r.jsxs)("div", {
                                    className: P.anniversarySubtext,
                                    children: [
                                        (0, r.jsx)(u.iFz, {
                                            size: "xxs",
                                            color: "currentColor",
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: j.intl.formatToPlainString(j.t.S3fdq7, { numberOfYears: B }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        hovered: e,
                        showAccountIdentifier: !L && !k.isProvisional,
                    }),
                    (0, r.jsxs)("div", {
                        className: P.actions,
                        children: [
                            (0, r.jsx)(u.hU, {
                                size: "sm",
                                variant: "secondary",
                                icon: H,
                                "aria-label": j.intl.string(j.t.I61IsE),
                                onClick: () => {
                                    v.default.track(T.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: U,
                                        cta_type: "send_message",
                                        location_stack: G,
                                    }),
                                        (0, I.PV)(k.id),
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
                                                            giftIntentType: null != U ? U : void 0,
                                                            analyticsLocationHistory: G,
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
                                text: j.intl.string(j.t.PEjaCx),
                                icon: u.OgN,
                                "aria-label": j.intl.string(j.t.PEjaCx),
                                onClick: F,
                            }),
                        ],
                    }),
                ],
            }),
    });
}
