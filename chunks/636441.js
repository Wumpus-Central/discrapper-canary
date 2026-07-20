t.d(e, { A: () => c });
var l = t(627968);
t(64700);
var n = t(772707),
    i = t(834730),
    r = t(375708),
    s = t(856e3);
function c(a) {
    let e,
        { transitionState: t, guild: c, guildBoostQuantity: o, isTransfer: h, graphic: d, onClose: u } = a,
        m = c?.name;
    e = h
        ? null == m
            ? r.intl.format(r.t.mYRfYx, {})
            : r.intl.format(r.t["Ps/5bb"], { guildName: m })
        : null == m
          ? r.intl.format(r.t["4fw/T2"], { guildSubscriptionQuantity: o })
          : r.intl.format(r.t.IeFTQu, { guildName: m, guildSubscriptionQuantity: o });
    let p = h ? r.intl.string(r.t["5uYZHN"]) : r.intl.string(r.t.mpb7t3),
        x = [{ variant: "primary", text: r.intl.string(r.t["/iTxgz"]), onClick: u }];
    return (0, l.jsx)(n.k, {
        transitionState: t,
        onClose: u,
        graphic: d,
        title: p,
        actions: x,
        children: (0, l.jsx)(i.E, { variant: "text-md/normal", className: s.x, children: e }),
    });
}
