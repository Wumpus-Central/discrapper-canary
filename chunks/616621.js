n.d(t, { A: () => u });
var i = n(627968),
    r = n(311907),
    a = n(397927),
    l = n(398590),
    s = n(944771),
    o = n(3258),
    d = n(287809),
    c = n(652215);
function u() {
    if (
        !(0, r.bG)(
            [d.default],
            () => d.default.getCurrentUser()?.isStaff() === !0 || d.default.getCurrentUser()?.isStaffPersonal() === !0,
        )
    )
        return null;
    let e = s.componentPlaygroundConfigs.flatMap((e) => e.collections);
    return (0, i.jsx)(
        a.Drp,
        {
            id: "playgrounds",
            label: "Playgrounds",
            action: () => {
                o.PlaygroundStore.setState({ selectedCollection: null, selectedStory: null }),
                    (0, l.id)(c.zgK.COMPONENT_PLAYGROUND);
            },
            children: (0, i.jsx)(
                a.rXV,
                {
                    children: e.map((e) =>
                        (0, i.jsx)(
                            a.Drp,
                            {
                                id: `${e.id}-playground`,
                                label: e.name,
                                action: () => {
                                    o.PlaygroundStore.setState({ selectedCollection: e.id, selectedStory: null }),
                                        (0, l.id)(c.zgK.COMPONENT_PLAYGROUND);
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
