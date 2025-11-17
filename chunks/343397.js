n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(434404),
    o = n(999382),
    c = n(388032);
function d(e) {
    let { profile: t, canManageGuild: n } = e,
        d = t.id,
        u = (0, l.e7)([o.Z], () => o.Z.getError("name")),
        g = i.useCallback(
            (e) => {
                s.Z.updateGuild({ name: e }), s.Z.updateGuildProfile(d, { name: e });
            },
            [d],
        );
    return (0, r.jsx)(a.oil, {
        label: c.intl.string(c.t.X56QcF),
        type: "text",
        disabled: !n,
        value: t.name,
        maxLength: 100,
        onChange: g,
        error: u,
    });
}
