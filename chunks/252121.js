(n.d(t, { Z: () => s }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(236413),
    a = n(564488);
function s(e) {
    let { guildId: t, triggerType: n } = e,
        s = i.useMemo(() => () => (0, l.ep)(t, n), [t, n]),
        [o] = i.useState(s);
    return (0, r.jsx)(a.Z, { rule: o });
}
