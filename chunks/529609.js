l.d(t, { A: () => f });
var i = l(477900),
    n = l(582128),
    a = l(17928),
    s = l(363957),
    r = l(754674),
    c = l(42499),
    d = l(539888),
    u = l(721995);
function o(e) {
    let { canEdit: t, guildId: l, widget: n } = e,
        r = (0, a.bG)([s.A], () => (n.requires_hydration ? s.A.getHydration(l, n.id) : void 0), [
            l,
            n.id,
            n.requires_hydration,
        ]),
        u = (0, c.K)(l, n);
    return t || null == u
        ? (0, i.jsx)(d.P, { guildId: l, widget: n, guildSpaceMode: "view", hydration: r, lock: u })
        : null;
}
function f(e) {
    let { canEdit: t, guildId: l, widgets: a } = e,
        s = n.useMemo(() => (0, r.Rl)(a), [a]);
    return (0, i.jsx)("div", {
        className: u.V,
        children: s.map((e, n) =>
            (0, i.jsx)(
                "div",
                { className: u.f, children: e.map((e) => (0, i.jsx)(o, { canEdit: t, guildId: l, widget: e }, e.id)) },
                n,
            ),
        ),
    });
}
