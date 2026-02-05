n.d(t, { A: () => d });
var l = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(974930),
    r = n(985018);
function d(e) {
    let { startDate: t, recurrenceRule: n, onRecurrenceChange: d } = e,
        c = i.useMemo(() => (0, a.z7)(t, n), [n, t]),
        o = (0, a.Xx)(t);
    return (0, l.jsx)(s.l6P, {
        label: r.intl.string(r.t["59TVxL"]),
        required: !0,
        placeholder: "gaming",
        options: o,
        onSelectionChange: d,
        value: c,
        selectionMode: "single",
        fullWidth: !0,
    });
}
