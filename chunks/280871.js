n.d(t, { A: () => o });
var l = n(627968),
    r = n(64700),
    i = n(397927),
    s = n(974930),
    a = n(985018);
function o(e) {
    let { startDate: t, recurrenceRule: n, onRecurrenceChange: o } = e,
        c = r.useMemo(() => (0, s.z7)(t, n), [n, t]),
        u = (0, s.Xx)(t);
    return (0, l.jsx)(i.l6P, {
        label: a.intl.string(a.t["59TVxL"]),
        required: !0,
        placeholder: "gaming",
        options: u,
        onSelectionChange: o,
        value: c,
        selectionMode: "single",
        fullWidth: !0,
    });
}
