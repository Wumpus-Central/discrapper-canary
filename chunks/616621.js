n.d(l, { A: () => u });
var t = n(627968),
    o = n(477782),
    d = n(783977),
    i = n(398590),
    s = n(790271),
    r = n(944771),
    a = n(848281),
    c = n(652215);
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        l = (0, s.ni)("playground_menu"),
        n = (0, r.useComponentPlaygroundConfigs)(l);
    if (!l) return null;
    let u = n.flatMap((e) => e.collections);
    return (0, t.jsx)(
        o.Dr,
        {
            id: "playgrounds",
            label: "Playgrounds",
            leadingAccessory: e ? { type: "icon", icon: d.R } : void 0,
            action: () => {
                a.PlaygroundStore.setState({ selectedCollection: null, selectedStory: null }),
                    (0, i.id)(c.zgK.COMPONENT_PLAYGROUND);
            },
            children: (0, t.jsx)(
                o.rX,
                {
                    children: u.map((e) =>
                        (0, t.jsx)(
                            o.Dr,
                            {
                                id: `${e.id}-playground`,
                                label: e.name,
                                action: () => {
                                    a.PlaygroundStore.setState({ selectedCollection: e.id, selectedStory: null }),
                                        (0, i.id)(c.zgK.COMPONENT_PLAYGROUND);
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
