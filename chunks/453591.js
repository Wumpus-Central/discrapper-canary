n.d(t, { h: () => m }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(78839),
    l = n(960048),
    c = n(538981),
    u = n(29920),
    d = n(219333),
    f = n(304426);
function _(e, t, n) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h() {
    (0, o.ZDy)(async () => {
        let { default: e } = await n.e("75056").then(n.bind(n, 16919));
        return (t) => (0, r.jsx)(e, p({}, t));
    });
}
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, a.e7)([s.Z], () => s.Z.getPremiumSubscription()),
        n = (0, c.r)(),
        [r, o] = (0, i.useState)(!1);
    return {
        redeemReward: async () => {
            o(!0);
            try {
                var r;
                let i = await (0, u.Ul)({ subscriptionId: null != (r = null == t ? void 0 : t.id) ? r : "" });
                (null == i ? void 0 : i.entitlement)
                    ? ((0, d.j)({ campaignID: f.C }), null == n || n(i.entitlement))
                    : (e || h(),
                      l.Z.captureException(Error("Failed to redeem September 2025 Marketing Moment reward")));
            } catch (e) {
                l.Z.captureException(e);
            } finally {
                o(!1);
            }
        },
        isLoading: r,
    };
}
