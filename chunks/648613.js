n.d(t, { Z: () => I });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(906732),
    s = n(543241),
    l = n(963249),
    c = n(703656),
    u = n(313789),
    d = n(518596),
    f = n(594174),
    _ = n(78839),
    p = n(639119),
    h = n(474936),
    m = n(981631);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function I(e) {
    let {
            onClick: t,
            subscriptionTier: g,
            postSuccessGuild: b,
            onSubscribeModalClose: v,
            premiumModalAnalyticsLocation: I,
            applicationId: T,
            giftMessage: S,
            confirmationFooter: A,
            isGift: C,
            children: N,
        } = e,
        R = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
        P = (0, i.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()),
        { analyticsLocations: D } = (0, o.ZP)(),
        w = (0, p.N)(),
        x = !C && null != w && null != g && h.nG[w.trial_id].skus.includes(g);
    return N({
        onClick: (e) => {
            var i;
            if ((e.preventDefault(), null == R))
                return void (0, c.uL)(m.Z5c.LOGIN, { source: "premium_subscribe_button" });
            if ((null == t || t(e), (null == P ? void 0 : P.status) === m.O0b.ACCOUNT_HOLD)) {
                (0, s.A3)(), (0, d.openUserSettings)(u.n.NITRO_PANEL, { section: m.oAB.PREMIUM }), null == v || v(!1);
                return;
            }
            if (!R.isClaimed())
                return void (0, a.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("88470"), n.e("77927"), n.e("69417")]).then(
                        n.bind(n, 918995),
                    );
                    return (t) => {
                        var { onClose: n } = t,
                            i = O(t, ["onClose"]);
                        return (0, r.jsx)(e, y(E({}, i), { onClose: n }));
                    };
                });
            if (!R.verified)
                return void (0, a.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("88470"), n.e("20102")]).then(n.bind(n, 444688));
                    return (t) => {
                        var { onClose: n } = t,
                            i = O(t, ["onClose"]);
                        return (0, r.jsx)(e, y(E({}, i), { onClose: n }));
                    };
                });
            let o = x ? (null == (i = w.subscription_trial) ? void 0 : i.id) : null,
                f = m.AnalyticsObjectTypes.BUY;
            null != o ? (f = m.AnalyticsObjectTypes.TRIAL) : C && (f = m.AnalyticsObjectTypes.GIFT),
                (0, l.Z)({
                    isGift: C,
                    initialPlanId: null,
                    subscriptionTier: g,
                    analyticsLocations: D,
                    analyticsObject: E(
                        {
                            object: m.qAy.BUTTON_CTA,
                            objectType: f,
                        },
                        I,
                    ),
                    trialId: o,
                    postSuccessGuild: b,
                    onClose: v,
                    applicationId: T,
                    giftMessage: S,
                    confirmationFooter: A,
                });
        },
    });
}
