i.d(e, { A: () => f });
var n = i(477900),
    l = i(582128),
    a = i(17928),
    r = i(363957),
    s = i(754674),
    c = i(42499),
    d = i(539888),
    u = i(721995);
function o(t) {
    let { guildId: e, widget: i } = t,
        l = (0, a.bG)([r.A], () => (i.requires_hydration ? r.A.getHydration(e, i.id) : void 0), [
            e,
            i.id,
            i.requires_hydration,
        ]),
        s = (0, c.K)(e, i);
    return (0, n.jsx)(d.P, { widget: i, guildSpaceMode: "view", hydration: l, lock: s });
}
function f(t) {
    let { guildId: e, widgets: i } = t,
        a = l.useMemo(() => (0, s.Rl)(i), [i]);
    return (0, n.jsx)("div", {
        className: u.V,
        children: a.map((t, i) =>
            (0, n.jsx)(
                "div",
                { className: u.f, children: t.map((t) => (0, n.jsx)(o, { guildId: e, widget: t }, t.id)) },
                i,
            ),
        ),
    });
}
