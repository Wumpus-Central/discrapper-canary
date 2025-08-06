n.d(e, { Z: () => a }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(481060),
    c = n(388032);
function a() {
    let [t, e] = i.useState(!1);
    return (0, r.jsx)(o.S89, {
        id: "mute-game",
        label: c.intl.string(c.t["6EwEws"]),
        checked: t,
        action: () => {
            e(!t);
        },
    });
}
