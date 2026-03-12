n.d(e, { A: () => r });
var l = n(627968);
n(64700);
var i = n(397927),
    s = n(985018),
    a = n(335431);
function r(t) {
    let e,
        { transitionState: n, guild: r, guildBoostQuantity: o, isTransfer: c, graphic: d, onClose: u } = t,
        m = r?.name;
    e = c
        ? null == m
            ? s.intl.format(s.t.mYRfYx, {})
            : s.intl.format(s.t["Ps/5bb"], { guildName: m })
        : null == m
          ? s.intl.format(s.t["4fw/T2"], { guildSubscriptionQuantity: o })
          : s.intl.format(s.t.IeFTQu, { guildName: m, guildSubscriptionQuantity: o });
    let x = c ? s.intl.string(s.t["5uYZHN"]) : s.intl.string(s.t.mpb7t3),
        h = [{ variant: "primary", text: s.intl.string(s.t["/iTxgz"]), onClick: u }];
    return (0, l.jsx)(i.kpP, {
        transitionState: n,
        onClose: u,
        graphic: d,
        title: x,
        actions: h,
        children: (0, l.jsx)(i.Text, { variant: "text-md/normal", className: a.x, children: e }),
    });
}
