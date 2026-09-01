l.d(t, { A: () => f });
var i = l(477900),
    n = l(582128),
    a = l(17928),
    s = l(363957),
    r = l(754674),
    d = l(42499),
    c = l(539888),
    u = l(721995);
function o(e) {
    let { guildId: t, widget: l } = e,
        n = (0, a.bG)([s.A], () => (l.requires_hydration ? s.A.getHydration(t, l.id) : void 0), [
            t,
            l.id,
            l.requires_hydration,
        ]),
        r = (0, d.K)(t, l);
    return (0, i.jsx)(c.P, { widget: l, guildSpaceMode: "view", hydration: n, lock: r, guildId: t });
}
function f(e) {
    let { guildId: t, widgets: l } = e,
        a = n.useMemo(() => (0, r.Rl)(l), [l]);
    return (0, i.jsx)("div", {
        className: u.V,
        children: a.map((e, l) =>
            (0, i.jsx)(
                "div",
                { className: u.f, children: e.map((e) => (0, i.jsx)(o, { guildId: t, widget: e }, e.id)) },
                l,
            ),
        ),
    });
}
