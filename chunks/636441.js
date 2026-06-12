n.d(t, { A: () => l });
var a = n(627968);
n(64700);
var c = n(772707),
    i = n(834730),
    r = n(375708),
    s = n(561920);
function l(e) {
    let t,
        { transitionState: n, guild: l, guildBoostQuantity: d, isTransfer: o, graphic: u, onClose: b } = e,
        p = l?.name;
    t = o
        ? null == p
            ? r.intl.format(r.t.mYRfYx, {})
            : r.intl.format(r.t["Ps/5bb"], { guildName: p })
        : null == p
          ? r.intl.format(r.t["4fw/T2"], { guildSubscriptionQuantity: d })
          : r.intl.format(r.t.IeFTQu, { guildName: p, guildSubscriptionQuantity: d });
    let f = o ? r.intl.string(r.t["5uYZHN"]) : r.intl.string(r.t.mpb7t3),
        m = [{ variant: "primary", text: r.intl.string(r.t["/iTxgz"]), onClick: b }];
    return (0, a.jsx)(c.k, {
        transitionState: n,
        onClose: b,
        graphic: u,
        title: f,
        actions: m,
        children: (0, a.jsx)(i.E, { variant: "text-md/normal", className: s.x, children: t }),
    });
}
