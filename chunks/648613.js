n.d(t, { Z: () => v });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(230711),
    s = n(906732),
    l = n(543241),
    c = n(963249),
    u = n(703656),
    d = n(594174),
    f = n(78839),
    _ = n(639119),
    p = n(474936),
    h = n(981631);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function v(e) {
    let { onClick: t, subscriptionTier: m, postSuccessGuild: E, onSubscribeModalClose: O, premiumModalAnalyticsLocation: v, applicationId: I, giftMessage: T, confirmationFooter: S, paymentModalBanner: A, isGift: N, children: C } = e,
        R = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
        P = (0, i.e7)([f.Z], () => f.Z.getPremiumTypeSubscription()),
        { analyticsLocations: w } = (0, s.ZP)(),
        D = (0, _.N)(),
        L = !N && null != D && null != m && p.nG[D.trial_id].skus.includes(m);
    return C({
        onClick: (e) => {
            var i;
            if ((e.preventDefault(), null == R)) return void (0, u.uL)(h.Z5c.LOGIN, { source: 'premium_subscribe_button' });
            if ((null == t || t(e), (null == P ? void 0 : P.status) === h.O0b.ACCOUNT_HOLD)) {
                ((0, l.A3)(), o.Z.open(h.oAB.PREMIUM), null == O || O(!1));
                return;
            }
            if (!R.isClaimed())
                return void (0, a.ZDy)(async () => {
                    let { default: e } = await n.e('69417').then(n.bind(n, 918995));
                    return (t) => {
                        var { onClose: n } = t,
                            i = y(t, ['onClose']);
                        return (0, r.jsx)(e, b(g({}, i), { onClose: n }));
                    };
                });
            if (!R.verified)
                return void (0, a.ZDy)(async () => {
                    let { default: e } = await n.e('20102').then(n.bind(n, 444688));
                    return (t) => {
                        var { onClose: n } = t,
                            i = y(t, ['onClose']);
                        return (0, r.jsx)(e, b(g({}, i), { onClose: n }));
                    };
                });
            let s = L ? (null == (i = D.subscription_trial) ? void 0 : i.id) : null,
                d = h.Qqv.BUY;
            (null != s ? (d = h.Qqv.TRIAL) : N && (d = h.Qqv.GIFT),
                (0, c.Z)({
                    isGift: N,
                    initialPlanId: null,
                    subscriptionTier: m,
                    analyticsLocations: w,
                    analyticsObject: g(
                        {
                            object: h.qAy.BUTTON_CTA,
                            objectType: d
                        },
                        v
                    ),
                    trialId: s,
                    postSuccessGuild: E,
                    onClose: O,
                    applicationId: I,
                    giftMessage: T,
                    confirmationFooter: S,
                    paymentModalBanner: A
                }));
        }
    });
}
