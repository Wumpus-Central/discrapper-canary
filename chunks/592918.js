l.d(e, { A: () => m }), l(321073);
var n = l(627968),
    i = l(64700),
    s = l(772707),
    r = l(834730),
    a = l(661191),
    o = l(333672),
    d = l(985018),
    c = l(211867);
let u = { type: "image", src: l(685831).A, aspectRatio: "16/9" };
function m(t) {
    let {
            transitionState: e,
            toGuild: l,
            fromGuilds: m,
            slotCount: x,
            canceledCount: h,
            isModifyingSubscription: g,
            error: C,
            onConfirm: j,
            onClose: v,
        } = t,
        f = m.length,
        p = i.useMemo(
            () => m.reduce((t, e) => (t.hasOwnProperty(e.id) || (t[e.id] = []), t[e.id].push(e), t), {}),
            [m],
        ),
        S = [{ variant: "primary", text: d.intl.string(d.t["PR0n//"]), onClick: j, loading: g, disabled: g }];
    return (0, n.jsxs)(s.k, {
        transitionState: e,
        onClose: v,
        graphic: u,
        title: d.intl.string(d.t["PR0n//"]),
        actions: S,
        children: [
            (0, n.jsx)(r.E, {
                variant: "text-md/normal",
                children: d.intl.formatToPlainString(d.t.SSA2lu, { slotCount: x, guildCount: f ?? 0 }),
            }),
            (0, n.jsx)(r.E, {
                variant: "text-xs/bold",
                className: c.bV,
                children: d.intl.format(d.t["5zQYEz"], { guildCount: f ?? 0 }),
            }),
            null != p
                ? a.default
                      .keys(p)
                      .map((t) =>
                          (0, n.jsx)(o.Ay, { className: c.A, guild: p[t][0], subscriptionChange: -1 * p[t].length }, t),
                      )
                : null,
            (0, n.jsx)(r.E, {
                variant: "text-xs/normal",
                className: c.bV,
                children: d.intl.format(d.t.ct6oxD, { slotCount: x }),
            }),
            (0, n.jsx)("div", {
                className: c.P4,
                children: (0, n.jsx)(o.Ay, { guild: l, subscriptionChange: m.length }),
            }),
            h > 0 ? (0, n.jsx)(o.ti, { canceledCount: h }) : null,
            null != C &&
                (0, n.jsx)(r.E, { color: "text-feedback-critical", variant: "text-sm/semibold", children: C.message }),
        ],
    });
}
