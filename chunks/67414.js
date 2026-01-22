n.d(t, { A: () => w });
var r = n(627968),
    i = n(64700),
    a = n(110259),
    s = n(311907),
    o = n(397927),
    l = n(966327),
    c = n(793574),
    u = n(688810),
    d = n(139286),
    f = n(532794),
    p = n(21119),
    _ = n(594832),
    h = n(287809),
    m = n(954571),
    g = n(242874),
    E = n(404036),
    b = n(275759),
    y = n(51501),
    O = n(788868),
    A = n(652215),
    v = n(778712),
    S = n(985018),
    I = n(989712);
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
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    let { giftIntentType: t, recipientUser: T, analyticsPage: N, analyticsSection: w, innerRef: P } = e,
        D = (0, s.bG)([h.default], () => h.default.getCurrentUser()),
        { analyticsLocations: x } = (0, u.Ay)(c.A.PREMIUM_GIFT_INTENT_CARD),
        L = (0, s.bG)([b.Ay], () => b.Ay.getFriendAnniversaryYears(T.id)),
        j = (0, _.tA)({
            location: "gift-intent-card",
            isGift: !0,
            giftRecipient: T,
        });
    i.useEffect(() => {
        (0, d.x)({
            name: a.ImpressionNames.GIFT_INTENT_CARD,
            type: a.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                num_friend_anniversaries: b.Ay.getFriendAnniversaries().length,
            },
        });
    }, [t]);
    let M = () => (t === O.np.FRIEND_ANNIVERSARY ? S.intl.string(S.t.CeQIwZ) : (0, g.yE)(t)),
        k = () =>
            t === O.np.FRIEND_ANNIVERSARY ? S.intl.formatToPlainString(S.t.PpG27s, { numberOfYears: L }) : (0, g.yE)(t),
        U = () => (t === O.np.FRIEND_ANNIVERSARY ? S.intl.string(S.t.ilhtIa) : (0, g.yE)(t)),
        G = (e) => {
            e.stopPropagation();
            let n = p.A.getUserAffinity(T.id);
            m.default.track(A.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                gift_intent_type: t,
                affinity: null == n ? void 0 : n.dmProbability,
                location_stack: x,
            });
            let r = (0, y.$)(t);
            j
                ? (0, E.A)({
                      giftRecipient: T,
                      analyticsLocations: x,
                      analyticsLocation: r.chat,
                      analyticsObject: {
                          page: N,
                          section: w,
                          object: A.ZSU.BUTTON_CTA,
                          objectType: A.AnalyticsObjectTypes.GIFT,
                      },
                  })
                : (0, f.A)({
                      isGift: !0,
                      initialPlanId: null,
                      giftRecipient: T,
                      analyticsLocation: r.chat,
                      analyticsLocations: x,
                      analyticsObject: {
                          page: N,
                          section: w,
                          object: A.ZSU.BUTTON_CTA,
                          objectType: A.AnalyticsObjectTypes.GIFT,
                      },
                  });
        };
    return (0, r.jsx)("div", {
        ref: P,
        className: I.Qs,
        children: (0, r.jsxs)("div", {
            className: I.gx,
            children: [
                (0, r.jsxs)("div", {
                    className: I.ou,
                    children: [
                        (0, r.jsxs)("div", {
                            className: I.HD,
                            children: [
                                (0, r.jsx)(l.A, {
                                    className: I.A6,
                                    user: T,
                                    "aria-label": T.username,
                                    size: v._3.SIZE_56,
                                }),
                                null != D &&
                                    (0, r.jsx)(l.A, {
                                        className: I.GM,
                                        user: D,
                                        "aria-label": T.username,
                                        size: v._3.SIZE_24,
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: I.FS,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    lineClamp: 3,
                                    children: M(),
                                }),
                                (0, r.jsxs)("div", {
                                    className: I.jA,
                                    children: [
                                        (0, r.jsx)(o.$yI, { size: "xs" }),
                                        (0, r.jsx)(o.Text, {
                                            className: I.Tm,
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children: k(),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: I.UD,
                    children: [
                        (0, r.jsx)(o.Button, {
                            size: "sm",
                            variant: "secondary",
                            text: S.intl.string(S.t.nffuyb),
                            "aria-label": S.intl.string(S.t.nffuyb),
                            onClick: (e) => {
                                e.stopPropagation(),
                                    m.default.track(A.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: t,
                                        cta_type: "send_message",
                                        location_stack: x,
                                    }),
                                    (0, o.mMO)(async () => {
                                        let { default: e } = await n.e("95501").then(n.bind(n, 367516));
                                        return (n) =>
                                            (0, r.jsx)(
                                                e,
                                                R(C({}, n), {
                                                    giftIntentType: t,
                                                    analyticsLocationHistory: x,
                                                }),
                                            );
                                    });
                            },
                        }),
                        (0, r.jsx)(o.Button, {
                            size: "sm",
                            variant: "expressive",
                            text: U(),
                            icon: o.okO,
                            "aria-label": U(),
                            onClick: G,
                        }),
                    ],
                }),
            ],
        }),
    });
}
