n.d(t, { A: () => l });
var a = n(477900);
n(582128);
var i = n(772707),
    c = n(834730),
    r = n(375708),
    s = n(832011);
function l(e) {
    let t,
        { transitionState: n, guild: l, guildBoostQuantity: o, isTransfer: d, graphic: u, onClose: b } = e,
        p = l?.name;
    t = d
        ? null == p
            ? r.intl.format(r.t.mYRfYx, {})
            : r.intl.format(r.t["Ps/5bb"], { guildName: p })
        : null == p
          ? r.intl.format(r.t["4fw/T2"], { guildSubscriptionQuantity: o })
          : r.intl.format(r.t.IeFTQu, { guildName: p, guildSubscriptionQuantity: o });
    let f = d ? r.intl.string(r.t["5uYZHN"]) : r.intl.string(r.t.mpb7t3),
        m = [{ variant: "primary", text: r.intl.string(r.t["/iTxgz"]), onClick: b }];
    return (0, a.jsx)(i.k, {
        transitionState: n,
        onClose: b,
        graphic: u,
        title: f,
        actions: m,
        children: (0, a.jsx)(c.E, { variant: "text-md/normal", className: s.x, children: t }),
    });
}
