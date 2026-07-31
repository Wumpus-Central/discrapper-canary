i.d(t, { A: () => u });
var n = i(477900),
    l = i(582128),
    r = i(17928),
    s = i(363957),
    a = i(754674),
    d = i(770224),
    c = i(934746);
function o(e) {
    let { guildId: t, widget: i } = e,
        l = (0, r.bG)([s.A], () => (i.requires_hydration ? s.A.getHydration(t, i.id) : void 0), [
            t,
            i.id,
            i.requires_hydration,
        ]);
    return (0, n.jsx)(d.P, { widget: i, guildSpaceMode: "view", hydration: l });
}
function u(e) {
    let { guildId: t, widgets: i } = e,
        r = l.useMemo(() => (0, a.Rl)(i), [i]);
    return (0, n.jsx)("div", {
        className: c.V,
        children: r.map((e, i) =>
            (0, n.jsx)(
                "div",
                { className: c.f, children: e.map((e) => (0, n.jsx)(o, { guildId: t, widget: e }, e.id)) },
                i,
            ),
        ),
    });
}
