n.d(t, { Z: () => d }), n(361932), n(187205);
var r = n(54381),
    i = n(442837),
    l = n(481060),
    a = n(37234),
    s = n(653592),
    o = n(156142),
    c = n(594174),
    u = n(981631);
function d() {
    if (
        !(0, i.e7)([c.default], () => {
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
        l.sNh,
        {
            id: "playgrounds",
            label: "Playgrounds",
            action: () => {
                o.PlaygroundStore.setState({
                    selectedCollection: null,
                    selectedStory: null,
                }),
                    (0, a.jN)(u.S9g.COMPONENT_PLAYGROUND);
            },
            children: (0, r.jsx)(
                l.kSQ,
                {
                    children: e.map((e) =>
                        (0, r.jsx)(
                            l.sNh,
                            {
                                id: "".concat(e.id, "-playground"),
                                label: e.name,
                                action: () => {
                                    o.PlaygroundStore.setState({
                                        selectedCollection: e.id,
                                        selectedStory: null,
                                    }),
                                        (0, a.jN)(u.S9g.COMPONENT_PLAYGROUND);
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
