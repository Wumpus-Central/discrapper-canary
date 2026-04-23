n.d(t, { A: () => d });
var a = n(627968);
n(64700);
var c = n(772707),
    i = n(834730),
    r = n(985018),
    s = n(561920);
function d(e) {
    let t,
        { transitionState: n, guild: d, guildBoostQuantity: l, isTransfer: o, graphic: b, onClose: u } = e,
        p = d?.name;
    t = o
        ? null == p
            ? r.intl.format(r.t.mYRfYx, {})
            : r.intl.format(r.t["Ps/5bb"], { guildName: p })
        : null == p
          ? r.intl.format(r.t["4fw/T2"], { guildSubscriptionQuantity: l })
          : r.intl.format(r.t.IeFTQu, { guildName: p, guildSubscriptionQuantity: l });
    let f = o ? r.intl.string(r.t["5uYZHN"]) : r.intl.string(r.t.mpb7t3),
        m = [{ variant: "primary", text: r.intl.string(r.t["/iTxgz"]), onClick: u }];
    return (0, a.jsx)(c.k, {
        transitionState: n,
        onClose: u,
        graphic: b,
        title: f,
        actions: m,
        children: (0, a.jsx)(i.E, { variant: "text-md/normal", className: s.x, children: t }),
    });
}
