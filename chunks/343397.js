n.d(t, { Z: () => d });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    s = n(481060),
    a = n(434404),
    o = n(999382),
    c = n(388032);
function d(e) {
    let { profile: t, canManageGuild: n } = e,
        d = t.id,
        u = (0, l.e7)([o.Z], () => o.Z.getError("name")),
        g = i.useCallback(
            (e) => {
                a.Z.updateGuild({ name: e }), a.Z.updateGuildProfile(d, { name: e });
            },
            [d],
        );
    return (0, r.jsx)(s.oil, {
        label: c.intl.string(c.t.X56QcH),
        type: "text",
        disabled: !n,
        value: t.name,
        maxLength: 100,
        onChange: g,
        error: u,
    });
}
