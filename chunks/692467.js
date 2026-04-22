n.d(t, { A: () => a });
var i = n(627968),
    l = n(64700),
    s = n(627794),
    r = n(690420);
function a(e) {
    let { guildId: t, triggerType: n } = e,
        a = l.useMemo(() => () => (0, s._I)(t, n), [t, n]),
        [o] = l.useState(a);
    return (0, i.jsx)(r.A, { rule: o });
}
