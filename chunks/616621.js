n.d(t, { A: () => c });
var i = n(627968),
    r = n(397927),
    l = n(398590),
    a = n(790271),
    s = n(944771),
    o = n(3258),
    d = n(652215);
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, a.ni)("playground_menu"),
        n = (0, s.useComponentPlaygroundConfigs)(t);
    if (!t) return null;
    let c = n.flatMap((e) => e.collections);
    return (0, i.jsx)(
        r.Drp,
        {
            id: "playgrounds",
            label: "Playgrounds",
            leadingAccessory: e ? { type: "icon", icon: r.RgP } : void 0,
            action: () => {
                o.PlaygroundStore.setState({ selectedCollection: null, selectedStory: null }),
                    (0, l.id)(d.zgK.COMPONENT_PLAYGROUND);
            },
            children: (0, i.jsx)(
                r.rXV,
                {
                    children: c.map((e) =>
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
