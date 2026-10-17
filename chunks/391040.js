e.d(i, { default: () => p });
var r = e(477900),
    a = e(582128),
    s = e(189213),
    l = e(683071),
    n = e(964486),
    d = e(174459),
    u = e(427262),
    o = e(751877),
    c = e(88001),
    _ = e(652215),
    m = e(259589),
    M = e(105292);
let p = function (t) {
    let { subscriptionId: i, member: e, onClose: p, ...E } = t,
        [f, b] = (0, a.useState)(!1),
        [k, w] = (0, a.useState)(!1);
    async function C() {
        (d.default.track(_.HAw.PREMIUM_GROUP_REMOVE_MEMBER_CTA_CLICKED, { subscription_id: i, member_user_id: e.id }),
            b(!0));
        let t = await (0, o.oO)(i, e.id);
        (b(!1), t.ok ? p() : w(!0));
    }
    return (
        (0, n.Ay)(() => {
            d.default.track(_.HAw.PREMIUM_GROUP_REMOVE_MEMBER_MODAL_VIEWED, {
                subscription_id: i,
                member_user_id: e.id,
            });
        }),
        (0, r.jsx)(s.a, {
            size: "md",
            title: M.intl.string(m.default.MJIHXY),
            subtitle: M.intl.formatToPlainString(m.default.gMyQrH, {
                memberName: (0, u.$3)(e),
                premiumGroupProductName: (0, c.DP)(),
                cooldownMonths: c.wl,
            }),
            onClose: p,
            actions: [{ text: M.intl.string(m.default.dlr8CX), variant: "critical-primary", onClick: C, loading: f }],
            ...E,
            children: k && (0, r.jsx)(l.w, { type: "critical", message: M.intl.string(M.t["rTU7/z"]), role: "alert" }),
        })
    );
};
