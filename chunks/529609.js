l.d(t, { A: () => m });
var n = l(477900),
    i = l(582128),
    s = l(17928),
    a = l(363957),
    r = l(754674),
    d = l(42499),
    c = l(539888),
    u = l(721995);
function o(e) {
    let { canEdit: t, guildId: l, widget: i } = e,
        r = (0, s.bG)([a.A], () => (i.requires_hydration ? a.A.getHydration(l, i.id) : void 0), [
            l,
            i.id,
            i.requires_hydration,
        ]),
        u = (0, d.K)(l, i);
    return t || null == u
        ? (0, n.jsx)(c.P, { guildId: l, widget: i, guildSpaceMode: "view", hydration: r, lock: u })
        : null;
}
function m(e) {
    let { canEdit: t, guildId: l, widgets: s } = e,
        a = i.useMemo(() => (0, r.Rl)(s), [s]);
    return (0, n.jsx)("div", {
        className: u.V,
        children: a.map((e, i) =>
            (0, n.jsx)(
                "div",
                { className: u.f, children: e.map((e) => (0, n.jsx)(o, { canEdit: t, guildId: l, widget: e }, e.id)) },
                i,
            ),
        ),
    });
}
