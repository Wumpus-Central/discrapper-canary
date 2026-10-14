n.d(t, { A: () => m });
var l = n(477900),
    i = n(582128),
    a = n(17928),
    s = n(363957),
    r = n(754674),
    d = n(42499),
    c = n(539888),
    o = n(721995);
function u(e) {
    let { canEdit: t, guildId: n, widget: i } = e,
        r = (0, a.bG)([s.A], () => (i.requires_hydration ? s.A.getHydration(n, i.id) : void 0), [
            n,
            i.id,
            i.requires_hydration,
        ]),
        o = (0, d.K)(n, i);
    return t || null == o
        ? (0, l.jsx)(c.P, { guildId: n, widget: i, guildSpaceMode: "view", hydration: r, lock: o })
        : null;
}
function m(e) {
    let { canEdit: t, guildId: n, widgets: a } = e,
        s = i.useMemo(() => (0, r.Rl)(a), [a]);
    return (0, l.jsx)("div", {
        className: o.V,
        children: s.map((e, i) =>
            (0, l.jsx)(
                "div",
                { className: o.f, children: e.map((e) => (0, l.jsx)(u, { canEdit: t, guildId: n, widget: e }, e.id)) },
                i,
            ),
        ),
    });
}
