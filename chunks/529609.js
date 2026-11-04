var n = l(477900),
    i = l(582128),
    s = l(855986),
    a = l(363957),
    r = l(754674),
    d = l(42499),
    o = l(904109),
    c = l(721995);
function u(e) {
    let { canEdit: t, guildId: l, widget: i } = e,
        r = (0, s.bG)([a.A], () => (i.requires_hydration ? a.A.getHydration(l, i.id) : void 0), [
            l,
            i.id,
            i.requires_hydration,
        ]),
        c = (0, d.K)(l, i);
    return t || null == c
        ? (0, n.jsx)(o.P, { guildId: l, widget: i, guildSpaceMode: "view", hydration: r, lock: c })
        : null;
}
l.d(
    t,
    {},
    {
        A: function (e) {
            let { canEdit: t, guildId: l, widgets: s } = e,
                a = i.useMemo(() => (0, r.Rl)(s), [s]);
            return (0, n.jsx)("div", {
                className: c.V,
                children: a.map((e, i) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: c.f,
                            children: e.map((e) => (0, n.jsx)(u, { canEdit: t, guildId: l, widget: e }, e.id)),
                        },
                        i,
                    ),
                ),
            });
        },
    },
);
