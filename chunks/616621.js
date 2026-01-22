n.d(t, {
    A: () => d,
}),
    n(114821),
    n(339614);
var r = n(627968),
    i = n(311907),
    l = n(397927),
    a = n(398590),
    s = n(944771),
    o = n(3258),
    c = n(287809),
    u = n(652215);

function d() {
    if (
        !(0, i.bG)([c.default], () => {
            var e, t;
            return (
                (null == (e = c.default.getCurrentUser()) ? void 0 : e.isStaff()) === !0 ||
                (null == (t = c.default.getCurrentUser()) ? void 0 : t.isStaffPersonal()) === !0
            );
        })
    )
        return null;
    let e = s.componentPlaygroundConfigs.flatMap((e) => e.collections);
    return (0, r.jsx)(
        l.Drp,
        {
            id: "playgrounds",
            label: "Playgrounds",
            action: () => {
                o.PlaygroundStore.setState({
                    selectedCollection: null,
                    selectedStory: null,
                }),
                    (0, a.id)(u.zgK.COMPONENT_PLAYGROUND);
            },
            children: (0, r.jsx)(
                l.rXV,
                {
                    children: e.map((e) =>
                        (0, r.jsx)(
                            l.Drp,
                            {
                                id: "".concat(e.id, "-playground"),
                                label: e.name,
                                action: () => {
                                    o.PlaygroundStore.setState({
                                        selectedCollection: e.id,
                                        selectedStory: null,
                                    }),
                                        (0, a.id)(u.zgK.COMPONENT_PLAYGROUND);
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
