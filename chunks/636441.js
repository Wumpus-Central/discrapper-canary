"use strict";
n.d(t, { A: () => l });
var i = n(627968);
n(64700);
var r = n(772707),
    s = n(834730),
    a = n(375708),
    o = n(561920);
function l(e) {
    let t,
        { transitionState: n, guild: l, guildBoostQuantity: u, isTransfer: c, graphic: d, onClose: _ } = e,
        h = l?.name;
    t = c
        ? null == h
            ? a.intl.format(a.t.mYRfYx, {})
            : a.intl.format(a.t["Ps/5bb"], { guildName: h })
        : null == h
          ? a.intl.format(a.t["4fw/T2"], { guildSubscriptionQuantity: u })
          : a.intl.format(a.t.IeFTQu, { guildName: h, guildSubscriptionQuantity: u });
    let f = c ? a.intl.string(a.t["5uYZHN"]) : a.intl.string(a.t.mpb7t3),
        p = [{ variant: "primary", text: a.intl.string(a.t["/iTxgz"]), onClick: _ }];
    return (0, i.jsx)(r.k, {
        transitionState: n,
        onClose: _,
        graphic: d,
        title: f,
        actions: p,
        children: (0, i.jsx)(s.E, { variant: "text-md/normal", className: o.x, children: t }),
    });
}
