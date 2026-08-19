t.d(a, { A: () => c });
var l = t(477900);
t(582128);
var n = t(772707),
    r = t(834730),
    s = t(375708),
    i = t(822264);
function c(e) {
    let a,
        { transitionState: t, guild: c, guildBoostQuantity: o, isTransfer: u, graphic: d, onClose: h } = e,
        m = c?.name;
    a = u
        ? null == m
            ? s.intl.format(s.t.mYRfYx, {})
            : s.intl.format(s.t["Ps/5bb"], { guildName: m })
        : null == m
          ? s.intl.format(s.t["4fw/T2"], { guildSubscriptionQuantity: o })
          : s.intl.format(s.t.IeFTQu, { guildName: m, guildSubscriptionQuantity: o });
    let p = u ? s.intl.string(s.t["5uYZHN"]) : s.intl.string(s.t.mpb7t3),
        x = [{ variant: "primary", text: s.intl.string(s.t["/iTxgz"]), onClick: h }];
    return (0, l.jsx)(n.k, {
        transitionState: t,
        onClose: h,
        graphic: d,
        title: p,
        actions: x,
        children: (0, l.jsx)(r.E, { variant: "text-md/normal", className: i.x, children: a }),
    });
}
