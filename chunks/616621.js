n.d(t, { A: () => c });
var i = n(627968),
    r = n(397927),
    a = n(398590),
    l = n(790271),
    s = n(944771),
    o = n(3258),
    d = n(652215);
function c() {
    if (!(0, l.ni)("playground_menu")) return null;
    let e = s.componentPlaygroundConfigs.flatMap((e) => e.collections);
    return (0, i.jsx)(
        r.Drp,
        {
            id: "playgrounds",
            label: "Playgrounds",
            action: () => {
                o.PlaygroundStore.setState({ selectedCollection: null, selectedStory: null }),
                    (0, a.id)(d.zgK.COMPONENT_PLAYGROUND);
            },
            children: (0, i.jsx)(
                r.rXV,
                {
                    children: e.map((e) =>
                        (0, i.jsx)(
                            r.Drp,
                            {
                                id: `${e.id}-playground`,
                                label: e.name,
                                action: () => {
                                    o.PlaygroundStore.setState({ selectedCollection: e.id, selectedStory: null }),
                                        (0, a.id)(d.zgK.COMPONENT_PLAYGROUND);
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
