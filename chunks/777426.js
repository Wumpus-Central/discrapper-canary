n.d(t, {
    A: () => T,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(110259),
    o = n(311907),
    c = n(3203),
    u = n(397927),
    d = n(793574),
    p = n(688810),
    h = n(139286),
    g = n(532794),
    m = n(414711),
    f = n(187696),
    A = n(723690),
    _ = n(21119),
    b = n(594832),
    E = n(994500),
    O = n(954571),
    y = n(404036),
    I = n(45787),
    v = n(275759),
    S = n(652215);
n(646363);
var C = n(985018),
    N = n(847295);

function T(e) {
    let {
            ref: t,
            isFocused: l,
            isActive: T,
            status: j,
            activities: x,
            applicationStream: P,
            isGameRelationship: w,
            isMobile: L,
            isVR: R,
            onOtherHover: D,
            onClick: M,
            recipientUser: k,
            giftIntentType: U,
        } = e,
        { analyticsLocations: G } = (0, p.Ay)(d.A.PREMIUM_GIFT_INTENT_FRIEND_ROW),
        { Component: V } = (0, c.V)(),
        B = (0, o.bG)([v.Ay], () => v.Ay.getFriendAnniversaryYears(k.id)),
        H = (0, b.tA)({
            location: "gift-intent-friend-row",
            isGift: !0,
            giftRecipient: k,
        });
    i.useEffect(() => {
        let e = _.A.getUserAffinity(k.id);
        (0, h.x)({
            name: s.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: s.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: U,
                affinity: null == e ? void 0 : e.communicationProbability,
            },
        });
    }, [k, U]);
    let F = (e) => {
        e.stopPropagation();
        let t = _.A.getUserAffinity(k.id);
        O.default.track(S.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
            gift_intent_type: U,
            affinity: null == t ? void 0 : t.dmProbability,
            location_stack: G,
        }),
            H
                ? (0, y.A)({
                      giftRecipient: k,
                      analyticsLocations: G,
                      analyticsLocation: S.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
                      analyticsObject: {
                          page: S.liQ.FRIENDS_LIST,
                          section: S.JJy.FRIENDS_LIST_FRIEND_ROW,
                          object: S.ZSU.BUTTON_CTA,
                          objectType: S.AnalyticsObjectTypes.GIFT,
                      },
                  })
                : (0, g.A)({
                      isGift: !0,
                      initialPlanId: null,
                      giftRecipient: k,
                      analyticsLocations: G,
                      analyticsLocation: S.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
                      analyticsObject: {
                          page: S.liQ.FRIENDS_LIST,
                          section: S.JJy.FRIENDS_LIST_FRIEND_ROW,
                          object: S.ZSU.BUTTON_CTA,
                          objectType: S.AnalyticsObjectTypes.GIFT,
                      },
                  });
    };
    return (0, r.jsx)(m.A, {
        ref: t,
        isFocused: l,
        isActive: T,
        user: k,
        onOtherHover: D,
        onClick: M,
        height: 72,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: a()(N.a4, N.Z$),
                children: [
                    (0, r.jsx)(A.A, {
                        className: N.Cv,
                        user: k,
                        status: j,
                        isMobile: L,
                        isVR: R,
                        subText: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(f.A, {
                                    hovered: e,
                                    activities: x,
                                    applicationStream: P,
                                    status: j,
                                    user: k,
                                    userIgnored: E.A.isIgnored(k.id),
                                }),
                                (0, r.jsxs)("div", {
                                    className: N.K3,
                                    children: [
                                        (0, r.jsx)(u.$yI, {
                                            size: "xxs",
                                            color: "currentColor",
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: C.intl.formatToPlainString(C.t.S3fdq7, {
                                                numberOfYears: B,
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        hovered: e,
                        showAccountIdentifier: !w && !k.isProvisional,
                    }),
                    (0, r.jsxs)("div", {
                        className: N.o1,
                        children: [
                            (0, r.jsx)(u.K0, {
                                size: "sm",
                                variant: "secondary",
                                icon: V,
                                "aria-label": C.intl.string(C.t.I61IsE),
                                onClick: () => {
                                    O.default.track(S.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: U,
                                        cta_type: "send_message",
                                        location_stack: G,
                                    }),
                                        (0, I.xs)(k.id),
                                        (0, u.mMO)(async () => {
                                            let { default: e } = await n.e("95501").then(n.bind(n, 367516));
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
                                text: C.intl.string(C.t.PEjaCx),
                                icon: u.okO,
                                "aria-label": C.intl.string(C.t.PEjaCx),
                                onClick: F,
                            }),
                        ],
                    }),
                ],
            }),
    });
}
