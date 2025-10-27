n.d(t, { Z: () => o });
var r = n(951288),
    l = n(647438),
    i = n(481060),
    a = n(954313),
    s = n(388032);
function o(e) {
    let { startDate: t, recurrenceRule: n, onRecurrenceChange: o } = e,
        c = l.useMemo(() => (0, a.zi)(t, n), [n, t]),
        u = (0, a.P8)(t),
        d = (e) => e.toString();
    return (0, r.jsx)(i.PhF, {
        label: s.intl.string(s.t["59TVxL"]),
        required: !0,
        placeholder: "gaming",
        options: u,
        select: o,
        serialize: d,
        isSelected: (e) => null != c && d(e) === d(c),
    });
}
