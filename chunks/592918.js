n.d(e, { A: () => u }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(661191),
    r = n(333672),
    o = n(985018),
    c = n(157190);
let d = { type: "image", src: n(685831).A, aspectRatio: "16/9" };
function u(t) {
    let {
            transitionState: e,
            toGuild: n,
            fromGuilds: u,
            slotCount: m,
            canceledCount: x,
            isModifyingSubscription: h,
            error: g,
            onConfirm: p,
            onClose: f,
        } = t,
        b = u.length,
        j = i.useMemo(
            () => u.reduce((t, e) => (t.hasOwnProperty(e.id) || (t[e.id] = []), t[e.id].push(e), t), {}),
            [u],
        ),
        v = [{ variant: "primary", text: o.intl.string(o.t["PR0n//"]), onClick: p, loading: h, disabled: h }];
    return (0, l.jsxs)(s.kpP, {
        transitionState: e,
        onClose: f,
        graphic: d,
        title: o.intl.string(o.t["PR0n//"]),
        actions: v,
        children: [
            (0, l.jsx)(s.Text, {
                variant: "text-md/normal",
                children: o.intl.formatToPlainString(o.t.SSA2lu, { slotCount: m, guildCount: b ?? 0 }),
            }),
            (0, l.jsx)(s.Text, {
                variant: "text-xs/bold",
                className: c.bV,
                children: o.intl.format(o.t["5zQYEz"], { guildCount: b ?? 0 }),
            }),
            null != j
                ? a.default
                      .keys(j)
                      .map((t) =>
                          (0, l.jsx)(r.Ay, { className: c.A, guild: j[t][0], subscriptionChange: -1 * j[t].length }, t),
                      )
                : null,
            (0, l.jsx)(s.Text, {
                variant: "text-xs/normal",
                className: c.bV,
                children: o.intl.format(o.t.ct6oxD, { slotCount: m }),
            }),
            (0, l.jsx)("div", {
                className: c.P4,
                children: (0, l.jsx)(r.Ay, { guild: n, subscriptionChange: u.length }),
            }),
            x > 0 ? (0, l.jsx)(r.ti, { canceledCount: x }) : null,
            null != g &&
                (0, l.jsx)(s.Text, {
                    color: "text-feedback-critical",
                    variant: "text-sm/semibold",
                    children: g.message,
                }),
        ],
    });
}
