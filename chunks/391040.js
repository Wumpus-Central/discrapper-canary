e.d(i, { default: () => p });
var r = e(627968),
    a = e(64700),
    l = e(189213),
    d = e(683071),
    s = e(964486),
    n = e(954571),
    u = e(427262),
    c = e(677185),
    o = e(88001),
    _ = e(652215),
    M = e(466919),
    m = e(985018);
let p = (t) => {
    let { subscriptionId: i, member: e, onClose: p, ...E } = t,
        [b, h] = (0, a.useState)(!1),
        [k, w] = (0, a.useState)(!1);
    (0, s.Ay)(() => {
        n.default.track(_.HAw.PREMIUM_GROUP_REMOVE_MEMBER_MODAL_VIEWED, { subscription_id: i, member_user_id: e.id });
    });
    let C = async () => {
        n.default.track(_.HAw.PREMIUM_GROUP_REMOVE_MEMBER_CTA_CLICKED, { subscription_id: i, member_user_id: e.id }),
            h(!0);
        let t = await (0, c.oO)(i, e.id);
        h(!1), t.ok ? p() : w(!0);
    };
    return (0, r.jsx)(l.Modal, {
        size: "md",
        title: m.intl.string(M.default.MJIHXY),
        subtitle: m.intl.formatToPlainString(M.default.gMyQrH, {
            memberName: (0, u.$3)(e),
            premiumGroupProductName: (0, o.DP)(),
            cooldownMonths: o.wl,
        }),
        onClose: p,
        actions: [{ text: m.intl.string(M.default.dlr8CX), variant: "critical-primary", onClick: C, loading: b }],
        ...E,
        children: k && (0, r.jsx)(d.w, { type: "critical", children: m.intl.string(m.t["rTU7/z"]) }),
    });
};
