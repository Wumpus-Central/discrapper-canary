t.d(e, { A: () => c });
var l = t(477900);
t(582128);
var n = t(772707),
    r = t(834730),
    s = t(375708),
    i = t(832011);
function c(a) {
    let e,
        { transitionState: t, guild: c, guildBoostQuantity: o, isTransfer: d, graphic: h, onClose: u } = a,
        m = c?.name;
    e = d
        ? null == m
            ? s.intl.format(s.t.mYRfYx, {})
            : s.intl.format(s.t["Ps/5bb"], { guildName: m })
        : null == m
          ? s.intl.format(s.t["4fw/T2"], { guildSubscriptionQuantity: o })
          : s.intl.format(s.t.IeFTQu, { guildName: m, guildSubscriptionQuantity: o });
    let p = d ? s.intl.string(s.t["5uYZHN"]) : s.intl.string(s.t.mpb7t3),
        x = [{ variant: "primary", text: s.intl.string(s.t["/iTxgz"]), onClick: u }];
    return (0, l.jsx)(n.k, {
        transitionState: t,
        onClose: u,
        graphic: h,
        title: p,
        actions: x,
        children: (0, l.jsx)(r.E, { variant: "text-md/normal", className: i.x, children: e }),
    });
}
