e.d(i, { default: () => p });
var r = e(627968),
    a = e(64700),
    n = e(189213),
    l = e(683071),
    d = e(964486),
    s = e(174459),
    u = e(427262),
    c = e(751877),
    o = e(88001),
    _ = e(652215),
    M = e(466919),
    m = e(375708);
let p = function (t) {
    let { subscriptionId: i, member: e, onClose: p, ...E } = t,
        [f, b] = (0, a.useState)(!1),
        [h, k] = (0, a.useState)(!1);
    async function w() {
        s.default.track(_.HAw.PREMIUM_GROUP_REMOVE_MEMBER_CTA_CLICKED, { subscription_id: i, member_user_id: e.id }),
            b(!0);
        let t = await (0, c.oO)(i, e.id);
        b(!1), t.ok ? p() : k(!0);
    }
    return (
        (0, d.Ay)(() => {
            s.default.track(_.HAw.PREMIUM_GROUP_REMOVE_MEMBER_MODAL_VIEWED, {
                subscription_id: i,
                member_user_id: e.id,
            });
        }),
        (0, r.jsx)(n.Modal, {
            size: "md",
            title: m.intl.string(M.default.MJIHXY),
            subtitle: m.intl.formatToPlainString(M.default.gMyQrH, {
                memberName: (0, u.$3)(e),
                premiumGroupProductName: (0, o.DP)(),
                cooldownMonths: o.wl,
            }),
            onClose: p,
            actions: [{ text: m.intl.string(M.default.dlr8CX), variant: "critical-primary", onClick: w, loading: f }],
            ...E,
            children: h && (0, r.jsx)(l.w, { type: "critical", children: m.intl.string(m.t["rTU7/z"]) }),
        })
    );
};
