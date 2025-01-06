n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(236413),
    a = n(564488);
function s(e) {
    let { guildId: t, triggerType: n } = e,
        s = r.useMemo(() => () => (0, l.ep)(t, n), [t, n]),
        [o] = r.useState(s);
    return (0, i.jsx)(a.Z, { rule: o });
}
