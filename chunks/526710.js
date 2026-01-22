r.d(t, { default: () => y });
var n = r(627968),
    i = r(158954),
    o = r(975807),
    c = r(975571),
    a = r(783420),
    l = r(938973),
    p = r(788868),
    s = r(88001),
    u = r(652215),
    b = r(519412),
    O = r(985018),
    P = r(438705);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let y = (e) => {
    let { subscribeButtonProps: t } = (0, l.B)({
        subscriptionTier: p.pe.TIER_2,
        subscriptionPlanId: p.gD.PREMIUM_GROUP_MONTH,
    });
    return (0, n.jsx)(a.A, {
        subscriptionTier: p.pe.TIER_2,
        initialPlanId: p.gD.PREMIUM_GROUP_MONTH,
        children: (r) => {
            let { onClick: a } = r;
            return (0, n.jsx)(
                i.ExpressiveModal,
                d(f({}, e), {
                    graphic: {
                        src: P,
                        type: "image",
                    },
                    gradientColor: "nitro-pink",
                    title: O.intl.formatToPlainString(b.default.tJbHtN, { premiumGroupProductName: (0, s.DP)() }),
                    badge: {
                        type: "beta",
                        variant: "expressive",
                    },
                    subtitle: O.intl.formatToPlainString(b.default.csDq8A, {
                        premiumGroupProductName: (0, s.DP)(),
                        totalSeats: s.aw,
                    }),
                    actions: [
                        {
                            text: O.intl.string(b.default.z8re5H),
                            variant: "secondary",
                            onClick: () => void (0, o.A)(c.A.getArticleURL(u.MVz.PREMIUM_GROUP_ABOUT)),
                        },
                        d(f({}, t), {
                            onClick: (t) => {
                                var r;
                                null == a || a(t), null == (r = e.onClose) || r.call(e);
                            },
                        }),
                    ],
                }),
            );
        },
    });
};
