n.d(t, {
    h: () => _,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(287809),
    s = n(166403),
    o = n(203982),
    l = n(927578),
    c = n(598653),
    u = n(788868),
    d = n(652215);

function f(e, t, n) {
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

function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}

function _(e) {
    let { processedCode: t, channelContext: f, customGiftMessage: _, giftInfo: h } = e,
        m = !1,
        g = null,
        E = a.default.getCurrentUser(),
        b = (0, l.CC)(null == E ? void 0 : E.premiumType, u.PremiumTypes.TIER_0);
    (0, i.mMO)(
        async () => {
            let { default: e } = await n.e("14439").then(n.bind(n, 67327));
            return (n) => {
                var i, a;
                return (0, r.jsx)(
                    e,
                    p(
                        {
                            code: t,
                            channelContext: f,
                            customGiftMessage: _,
                            emojiName: null == h || null == (i = h.emoji) ? void 0 : i.name,
                            soundId: null == h || null == (a = h.sound) ? void 0 : a.id,
                            onComplete: (e, t) => {
                                (g = e),
                                    t &&
                                        ((m = t),
                                        e.isSubscription && null == s.A.getPremiumSubscription(!1) && (0, c.o)(!0));
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
                m &&
                    null != g &&
                    !b &&
                    g.isSubscription &&
                    (null == g || null == (e = g.subscriptionPlan) ? void 0 : e.premiumSubscriptionType) ===
                        u.PremiumTypes.TIER_2 &&
                    o._.dispatch(d.jej.PREMIUM_SUBSCRIPTION_CREATED);
            },
        },
    );
}
