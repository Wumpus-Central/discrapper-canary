n.d(t, {
    h: () => p,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(287809),
    a = n(166403),
    s = n(203982),
    o = n(927578),
    c = n(598653),
    u = n(788868),
    d = n(652215);

function p(e) {
    let { processedCode: t, channelContext: p, customGiftMessage: m, giftInfo: f } = e,
        g = !1,
        h = null,
        _ = l.default.getCurrentUser(),
        b = (0, o.CC)(null == _ ? void 0 : _.premiumType, u.PremiumTypes.TIER_0);
    (0, i.mMO)(
        async () => {
            let { default: e } = await n.e("14439").then(n.bind(n, 67327));
            return (n) => {
                var i, l;
                return (0, r.jsx)(
                    e,
                    (function (e) {
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
                    })(
                        {
                            code: t,
                            channelContext: p,
                            customGiftMessage: m,
                            emojiName: null == f || null == (i = f.emoji) ? void 0 : i.name,
                            soundId: null == f || null == (l = f.sound) ? void 0 : l.id,
                            onComplete: (e, t) => {
                                (h = e),
                                    t &&
                                        ((g = t),
                                        e.isSubscription && null == a.A.getPremiumSubscription(!1) && (0, c.o)(!0));
                            },
                        },
                        n,
                    ),
                );
            };
        },
        {
            onCloseCallback: () => {
                var e;
                g &&
                    null != h &&
                    !b &&
                    h.isSubscription &&
                    (null == h || null == (e = h.subscriptionPlan) ? void 0 : e.premiumSubscriptionType) ===
                        u.PremiumTypes.TIER_2 &&
                    s._.dispatch(d.jej.PREMIUM_SUBSCRIPTION_CREATED);
            },
        },
    );
}
