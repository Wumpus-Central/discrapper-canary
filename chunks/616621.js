n.d(t, { A: () => c });
var i = n(627968),
    r = n(397927),
    l = n(398590),
    a = n(790271),
    s = n(944771),
    o = n(3258),
    d = n(652215);
function c() {
    let e = (0, a.ni)("playground_menu"),
        t = (0, s.useComponentPlaygroundConfigs)(e);
    if (!e) return null;
    let n = t.flatMap((e) => e.collections);
    return (0, i.jsx)(
        r.Drp,
        {
            id: "playgrounds",
            label: "Playgrounds",
            action: () => {
                o.PlaygroundStore.setState({ selectedCollection: null, selectedStory: null }),
                    (0, l.id)(d.zgK.COMPONENT_PLAYGROUND);
            },
            children: (0, i.jsx)(
                r.rXV,
                {
                    children: n.map((e) =>
                        (0, i.jsx)(
                            r.Drp,
                            {
                                id: `${e.id}-playground`,
                                label: e.name,
                                action: () => {
                                    o.PlaygroundStore.setState({ selectedCollection: e.id, selectedStory: null }),
                                        (0, l.id)(d.zgK.COMPONENT_PLAYGROUND);
                                },
                            },
                            e.id,
                        ),
                    ),
                },
                "design-systems",
            ),
        },
        "playgrounds",
    );
}
