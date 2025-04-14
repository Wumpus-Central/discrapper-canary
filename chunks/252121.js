n.d(t, { Z: () => a }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(236413),
    l = n(564488);
function a(e) {
    let { guildId: t, triggerType: n } = e,
        a = i.useMemo(() => () => (0, s.ep)(t, n), [t, n]),
        [o] = i.useState(a);
    return (0, r.jsx)(l.Z, { rule: o });
}
