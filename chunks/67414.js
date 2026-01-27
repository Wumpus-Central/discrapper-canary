n.d(t, {
    A: () => C,
});
var r = n(627968),
    i = n(64700),
    l = n(110259),
    a = n(311907),
    s = n(397927),
    o = n(966327),
    c = n(793574),
    u = n(688810),
    d = n(139286),
    p = n(532794),
    m = n(21119),
    f = n(594832),
    g = n(287809),
    h = n(954571),
    _ = n(242874),
    b = n(404036),
    A = n(275759),
    y = n(51501),
    v = n(788868),
    x = n(652215),
    O = n(778712),
    E = n(985018),
    j = n(989712);

function C(e) {
    let { giftIntentType: t, recipientUser: C, analyticsPage: I, analyticsSection: S, innerRef: T } = e,
        N = (0, a.bG)([g.default], () => g.default.getCurrentUser()),
        { analyticsLocations: P } = (0, u.Ay)(c.A.PREMIUM_GIFT_INTENT_CARD),
        w = (0, a.bG)([A.Ay], () => A.Ay.getFriendAnniversaryYears(C.id)),
        R = (0, f.tA)({
            location: "gift-intent-card",
            isGift: !0,
            giftRecipient: C,
        });
    i.useEffect(() => {
        (0, d.x)({
            name: l.ImpressionNames.GIFT_INTENT_CARD,
            type: l.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                num_friend_anniversaries: A.Ay.getFriendAnniversaries().length,
            },
        });
    }, [t]);
    let D = () => (t === v.np.FRIEND_ANNIVERSARY ? E.intl.string(E.t.ilhtIa) : (0, _.yE)(t));
    return (0, r.jsx)("div", {
        ref: T,
        className: j.Qs,
        children: (0, r.jsxs)("div", {
            className: j.gx,
            children: [
                (0, r.jsxs)("div", {
                    className: j.ou,
                    children: [
                        (0, r.jsxs)("div", {
                            className: j.HD,
                            children: [
                                (0, r.jsx)(o.A, {
                                    className: j.A6,
                                    user: C,
                                    "aria-label": C.username,
                                    size: O._3.SIZE_56,
                                }),
                                null != N &&
                                    (0, r.jsx)(o.A, {
                                        className: j.GM,
                                        user: N,
                                        "aria-label": C.username,
                                        size: O._3.SIZE_24,
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: j.FS,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    lineClamp: 3,
                                    children: t === v.np.FRIEND_ANNIVERSARY ? E.intl.string(E.t.CeQIwZ) : (0, _.yE)(t),
                                }),
                                (0, r.jsxs)("div", {
                                    className: j.jA,
                                    children: [
                                        (0, r.jsx)(s.$yI, {
                                            size: "xs",
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            className: j.Tm,
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children:
                                                t === v.np.FRIEND_ANNIVERSARY
                                                    ? E.intl.formatToPlainString(E.t.PpG27s, {
                                                          numberOfYears: w,
                                                      })
                                                    : (0, _.yE)(t),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: j.UD,
                    children: [
                        (0, r.jsx)(s.Button, {
                            size: "sm",
                            variant: "secondary",
                            text: E.intl.string(E.t.nffuyb),
                            "aria-label": E.intl.string(E.t.nffuyb),
                            onClick: (e) => {
                                e.stopPropagation(),
                                    h.default.track(x.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: t,
                                        cta_type: "send_message",
                                        location_stack: P,
                                    }),
                                    (0, s.mMO)(async () => {
                                        let { default: e } = await n.e("95501").then(n.bind(n, 367516));
                                        return (n) => {
                                            var i, l;
                                            return (0, r.jsx)(
                                                e,
                                                ((i = (function (e) {
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
                                                })({}, n)),
                                                (l = l =
                                                    {
                                                        giftIntentType: t,
                                                        analyticsLocationHistory: P,
                                                    }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                                    : (function (e, t) {
                                                          var n = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var r = Object.getOwnPropertySymbols(e);
                                                              n.push.apply(n, r);
                                                          }
                                                          return n;
                                                      })(Object(l)).forEach(function (e) {
                                                          Object.defineProperty(
                                                              i,
                                                              e,
                                                              Object.getOwnPropertyDescriptor(l, e),
                                                          );
                                                      }),
                                                i),
                                            );
                                        };
                                    });
                            },
                        }),
                        (0, r.jsx)(s.Button, {
                            size: "sm",
                            variant: "expressive",
                            text: D(),
                            icon: s.okO,
                            "aria-label": D(),
                            onClick: (e) => {
                                e.stopPropagation();
                                let n = m.A.getUserAffinity(C.id);
                                h.default.track(x.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                                    gift_intent_type: t,
                                    affinity: null == n ? void 0 : n.dmProbability,
                                    location_stack: P,
                                });
                                let r = (0, y.$)(t);
                                R
                                    ? (0, b.A)({
                                          giftRecipient: C,
                                          analyticsLocations: P,
                                          analyticsLocation: r.chat,
                                          analyticsObject: {
                                              page: I,
                                              section: S,
                                              object: x.ZSU.BUTTON_CTA,
                                              objectType: x.AnalyticsObjectTypes.GIFT,
                                          },
                                      })
                                    : (0, p.A)({
                                          isGift: !0,
                                          initialPlanId: null,
                                          giftRecipient: C,
                                          analyticsLocation: r.chat,
                                          analyticsLocations: P,
                                          analyticsObject: {
                                              page: I,
                                              section: S,
                                              object: x.ZSU.BUTTON_CTA,
                                              objectType: x.AnalyticsObjectTypes.GIFT,
                                          },
                                      });
                            },
                        }),
                    ],
                }),
            ],
        }),
    });
}
