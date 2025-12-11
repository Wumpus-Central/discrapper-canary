n.d(t, { Z: () => P });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(990547),
    o = n(442837),
    c = n(114101),
    u = n(481060),
    d = n(906732),
    p = n(213609),
    f = n(963249),
    g = n(417183),
    h = n(825682),
    m = n(170245),
    b = n(752048),
    _ = n(602733),
    E = n(699516),
    O = n(626135),
    v = n(909917),
    y = n(795448),
    I = n(441623),
    C = n(474936),
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
        { analyticsLocations: U } = (0, d.ZP)(),
        { Component: G } = (0, c.V)(),
        B = (0, o.e7)([I.ZP], () => I.ZP.getFriendAnniversaryYears(M.id)),
        H = (0, _.ao)({
            location: "gift-intent-friend-row",
            isGift: !0,
            giftRecipient: M,
        });
    i.useEffect(() => {
        let e = b.Z.getUserAffinity(M.id);
        (0, p.h)({
            name: s.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: s.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: k,
                affinity: null == e ? void 0 : e.communicationProbability,
            },
        });
    }, [M, k]);
    let V = (e) => {
            e.stopPropagation();
            let t = b.Z.getUserAffinity(M.id);
            O.default.track(S.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                gift_intent_type: k,
                affinity: null == t ? void 0 : t.communicationProbability,
            }),
                H
                    ? (0, v.Z)({
                          giftRecipient: M,
                          analyticsLocations: U,
                          analyticsLocation: S.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
                          analyticsObject: {
                              page: S.ZY5.FRIENDS_LIST,
                              section: S.jXE.FRIENDS_LIST_FRIEND_ROW,
                              object: S.qAy.BUTTON_CTA,
                              objectType: S.AnalyticsObjectTypes.GIFT,
                          },
                          giftMessage: F(),
                      })
                    : (0, f.Z)({
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
                          giftMessage: F(),
                      });
        },
        F = () => (k === C.hX.FRIEND_ANNIVERSARY ? N.intl.string(N.t.OrwKgi) : void 0);
    return (0, r.jsx)(g.Z, {
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
                    (0, r.jsx)(m.Z, {
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
                                    userIgnored: E.Z.isIgnored(M.id),
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
                                            children: N.intl.formatToPlainString(N.t.S3fdq7, { numberOfYears: B }),
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
                                    (0, y.PV)(M.id),
                                        (0, u.ZDy)(async () => {
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
