l.d(t, { A: () => m });
var n = l(477900),
    i = l(582128),
    a = l(17928),
    s = l(363957),
    r = l(754674),
    d = l(42499),
    c = l(539888),
    o = l(721995);
function u(e) {
    let { canEdit: t, guildId: l, widget: i } = e,
        r = (0, a.bG)([s.A], () => (i.requires_hydration ? s.A.getHydration(l, i.id) : void 0), [
            l,
            i.id,
            i.requires_hydration,
        ]),
        o = (0, d.K)(l, i);
    return t || null == o
        ? (0, n.jsx)(c.P, { guildId: l, widget: i, guildSpaceMode: "view", hydration: r, lock: o })
        : null;
}
function m(e) {
    let { canEdit: t, guildId: l, widgets: a } = e,
        s = i.useMemo(() => (0, r.Rl)(a), [a]);
    return (0, n.jsx)("div", {
        className: o.V,
        children: s.map((e, i) =>
            (0, n.jsx)(
                "div",
                { className: o.f, children: e.map((e) => (0, n.jsx)(u, { canEdit: t, guildId: l, widget: e }, e.id)) },
                i,
            ),
        ),
    });
}
