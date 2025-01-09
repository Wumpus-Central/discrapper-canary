n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(236413),
    s = n(564488);
function a(e) {
    let { guildId: t, triggerType: n } = e,
        a = r.useMemo(() => () => (0, l.ep)(t, n), [t, n]),
        [o] = r.useState(a);
    return (0, i.jsx)(s.Z, { rule: o });
}
