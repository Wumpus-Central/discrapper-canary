l.d(t, { A: () => m });
var n = l(477900),
    i = l(582128),
    a = l(17928),
    r = l(363957),
    s = l(754674),
    d = l(42499),
    o = l(539888),
    u = l(721995);
function c(e) {
    let { canEdit: t, guildId: l, widget: i } = e,
        s = (0, a.bG)([r.A], () => (i.requires_hydration ? r.A.getHydration(l, i.id) : void 0), [
            l,
            i.id,
            i.requires_hydration,
        ]),
        u = (0, d.K)(l, i);
    return t || null == u
        ? (0, n.jsx)(o.P, { guildId: l, widget: i, guildSpaceMode: "view", hydration: s, lock: u })
        : null;
}
function m(e) {
    let { canEdit: t, guildId: l, widgets: a } = e,
        r = i.useMemo(() => (0, s.Rl)(a), [a]);
    return (0, n.jsx)("div", {
        className: u.V,
        children: r.map((e, i) =>
            (0, n.jsx)(
                "div",
                { className: u.f, children: e.map((e) => (0, n.jsx)(c, { canEdit: t, guildId: l, widget: e }, e.id)) },
                i,
            ),
        ),
    });
}
