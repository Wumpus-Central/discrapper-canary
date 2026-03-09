l.d(e, { A: () => u }), l(321073);
var n = l(627968),
    i = l(64700),
    s = l(397927),
    r = l(661191),
    a = l(333672),
    o = l(985018),
    d = l(2404);
let c = { type: "image", src: l(685831).A, aspectRatio: "16/9" };
function u(t) {
    let {
            transitionState: e,
            toGuild: l,
            fromGuilds: u,
            slotCount: x,
            canceledCount: m,
            isModifyingSubscription: h,
            error: g,
            onConfirm: C,
            onClose: j,
        } = t,
        v = u.length,
        p = i.useMemo(
            () => u.reduce((t, e) => (t.hasOwnProperty(e.id) || (t[e.id] = []), t[e.id].push(e), t), {}),
            [u],
        ),
        f = [{ variant: "primary", text: o.intl.string(o.t["PR0n//"]), onClick: C, loading: h, disabled: h }];
    return (0, n.jsxs)(s.kpP, {
        transitionState: e,
        onClose: j,
        graphic: c,
        title: o.intl.string(o.t["PR0n//"]),
        actions: f,
        children: [
            (0, n.jsx)(s.Text, {
                variant: "text-md/normal",
                children: o.intl.formatToPlainString(o.t.SSA2lu, { slotCount: x, guildCount: v ?? 0 }),
            }),
            (0, n.jsx)(s.Text, {
                variant: "text-xs/bold",
                className: d.bV,
                children: o.intl.format(o.t["5zQYEz"], { guildCount: v ?? 0 }),
            }),
            null != p
                ? r.default
                      .keys(p)
                      .map((t) =>
                          (0, n.jsx)(a.Ay, { className: d.A, guild: p[t][0], subscriptionChange: -1 * p[t].length }, t),
                      )
                : null,
            (0, n.jsx)(s.Text, {
                variant: "text-xs/normal",
                className: d.bV,
                children: o.intl.format(o.t.ct6oxD, { slotCount: x }),
            }),
            (0, n.jsx)("div", {
                className: d.P4,
                children: (0, n.jsx)(a.Ay, { guild: l, subscriptionChange: u.length }),
            }),
            m > 0 ? (0, n.jsx)(a.ti, { canceledCount: m }) : null,
            null != g &&
                (0, n.jsx)(s.Text, {
                    color: "text-feedback-critical",
                    variant: "text-sm/semibold",
                    children: g.message,
                }),
        ],
    });
}
