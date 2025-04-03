n.d(t, { Z: () => l }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(236413),
    a = n(564488);
function l(e) {
    let { guildId: t, triggerType: n } = e,
        l = i.useMemo(() => () => (0, s.ep)(t, n), [t, n]),
        [o] = i.useState(l);
    return (0, r.jsx)(a.Z, { rule: o });
}
