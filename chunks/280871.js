l.d(t, { A: () => d });
var n = l(627968),
    i = l(64700),
    s = l(691885),
    a = l(974930),
    r = l(985018);
function d(e) {
    let { startDate: t, recurrenceRule: l, onRecurrenceChange: d } = e,
        o = i.useMemo(() => (0, a.z7)(t, l), [l, t]),
        c = (0, a.Xx)(t);
    return (0, n.jsx)(s.l, {
        label: r.intl.string(r.t["59TVxL"]),
        required: !0,
        placeholder: "gaming",
        options: c,
        onSelectionChange: d,
        value: o,
        selectionMode: "single",
        fullWidth: !0,
    });
}
