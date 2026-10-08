a.d(t, { A: () => o });
var c = a(477900);
a(582128);
var n = a(772707),
    i = a(834730),
    r = a(660183),
    d = a(832011);
function o(e) {
    let t,
        { transitionState: a, guild: o, guildBoostQuantity: s, isTransfer: l, graphic: b, onClose: p } = e,
        u = o?.name;
    t = l
        ? null == u
            ? r.intl.format(r.t.mYRfYx, {})
            : r.intl.format(r.t["Ps/5bb"], { guildName: u })
        : null == u
          ? r.intl.format(r.t["4fw/T2"], { guildSubscriptionQuantity: s })
          : r.intl.format(r.t.IeFTQu, { guildName: u, guildSubscriptionQuantity: s });
    let f = l ? r.intl.string(r.t["5uYZHN"]) : r.intl.string(r.t.mpb7t3),
        m = [{ variant: "primary", text: r.intl.string(r.t["/iTxgz"]), onClick: p }];
    return (0, c.jsx)(n.k, {
        transitionState: a,
        onClose: p,
        graphic: b,
        title: f,
        actions: m,
        children: (0, c.jsx)(i.E, { variant: "text-md/normal", className: d.x, children: t }),
    });
}
