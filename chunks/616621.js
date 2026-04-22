n.d(t, { A: () => u });
var i = n(627968),
    a = n(477782),
    l = n(783977),
    s = n(398590),
    r = n(790271),
    o = n(944771),
    c = n(3258),
    d = n(652215);
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, r.ni)("playground_menu"),
        n = (0, o.useComponentPlaygroundConfigs)(t);
    if (!t) return null;
    let u = n.flatMap((e) => e.collections);
    return (0, i.jsx)(
        a.Dr,
        {
            id: "playgrounds",
            label: "Playgrounds",
            leadingAccessory: e ? { type: "icon", icon: l.R } : void 0,
            action: () => {
                c.PlaygroundStore.setState({ selectedCollection: null, selectedStory: null }),
                    (0, s.id)(d.zgK.COMPONENT_PLAYGROUND);
            },
            children: (0, i.jsx)(
                a.rX,
                {
                    children: u.map((e) =>
                        (0, i.jsx)(
                            a.Dr,
                            {
                                id: `${e.id}-playground`,
                                label: e.name,
                                action: () => {
                                    c.PlaygroundStore.setState({ selectedCollection: e.id, selectedStory: null }),
                                        (0, s.id)(d.zgK.COMPONENT_PLAYGROUND);
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
