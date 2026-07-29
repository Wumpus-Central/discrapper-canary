i.d(t, { A: () => u });
var n = i(477900),
    s = i(582128),
    l = i(17928),
    r = i(363957),
    a = i(770224),
    d = i(934746);
function c(e, t) {
    return e.position.order - t.position.order;
}
function o(e) {
    let { guildId: t, widget: i } = e,
        s = (0, l.bG)([r.A], () => (i.requires_hydration ? r.A.getHydration(t, i.id) : void 0), [
            t,
            i.id,
            i.requires_hydration,
        ]);
    return (0, n.jsx)(a.P, { type: i.type, config: i.config, guildSpaceMode: "view", hydration: s });
}
function u(e) {
    let { guildId: t, widgets: i } = e,
        [l, r] = s.useMemo(
            () => [
                i
                    .filter((e) => {
                        let { position: t } = e;
                        return 1 !== t.column;
                    })
                    .sort(c),
                i
                    .filter((e) => {
                        let { position: t } = e;
                        return 1 === t.column;
                    })
                    .sort(c),
            ],
            [i],
        );
    return (0, n.jsx)("div", {
        className: d.V,
        children: [l, r].map((e, i) =>
            (0, n.jsx)(
                "div",
                { className: d.f, children: e.map((e) => (0, n.jsx)(o, { guildId: t, widget: e }, e.id)) },
                i,
            ),
        ),
    });
}
