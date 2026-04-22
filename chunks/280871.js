l.d(t, { A: () => o });
var n = l(627968),
    a = l(64700),
    r = l(691885),
    i = l(974930),
    s = l(985018);
function o(e) {
    let { startDate: t, recurrenceRule: l, onRecurrenceChange: o } = e,
        c = a.useMemo(() => (0, i.z7)(t, l), [l, t]),
        d = (0, i.Xx)(t);
    return (0, n.jsx)(r.l, {
        label: s.intl.string(s.t["59TVxL"]),
        required: !0,
        placeholder: "gaming",
        options: d,
        onSelectionChange: o,
        value: c,
        selectionMode: "single",
        fullWidth: !0,
    });
}
