n.d(t, { Z: () => s });
var r = n(951288),
    l = n(647438),
    i = n(481060),
    a = n(954313),
    u = n(388032);
function s(e) {
    let { startDate: t, recurrenceRule: n, onRecurrenceChange: s } = e,
        d = l.useMemo(() => (0, a.zi)(t, n), [n, t]),
        c = (0, a.P8)(t),
        o = (e) => e.toString();
    return (0, r.jsx)(i.PhF, {
        label: u.intl.string(u.t["59TVxM"]),
        required: !0,
        placeholder: "gaming",
        options: c,
        select: s,
        serialize: o,
        isSelected: (e) => null != d && o(e) === o(d),
    });
}
