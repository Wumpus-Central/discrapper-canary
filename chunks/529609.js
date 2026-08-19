i.d(t, { A: () => o });
var n = i(477900),
    l = i(582128),
    a = i(17928),
    r = i(363957),
    s = i(754674),
    c = i(317574),
    d = i(934746);
function u(e) {
    let { guildId: t, widget: i } = e,
        l = (0, a.bG)([r.A], () => (i.requires_hydration ? r.A.getHydration(t, i.id) : void 0), [
            t,
            i.id,
            i.requires_hydration,
        ]);
    return (0, n.jsx)(c.P, { widget: i, guildSpaceMode: "view", hydration: l });
}
function o(e) {
    let { guildId: t, widgets: i } = e,
        a = l.useMemo(() => (0, s.Rl)(i), [i]);
    return (0, n.jsx)("div", {
        className: d.V,
        children: a.map((e, i) =>
            (0, n.jsx)(
                "div",
                { className: d.f, children: e.map((e) => (0, n.jsx)(u, { guildId: t, widget: e }, e.id)) },
                i,
            ),
        ),
    });
}
