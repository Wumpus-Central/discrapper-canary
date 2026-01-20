n.d(t, { Z: () => o });
var l = n(54381),
    r = n(473749),
    i = n(481060),
    a = n(854698),
    s = n(388032);
function o(e) {
    let { startDate: t, recurrenceRule: n, onRecurrenceChange: o } = e,
        c = r.useMemo(() => (0, a.zi)(t, n), [n, t]),
        u = (0, a.P8)(t);
    return (0, l.jsx)(i.PhF, {
        label: s.intl.string(s.t["59TVxL"]),
        required: !0,
        placeholder: "gaming",
        options: u,
        onSelectionChange: o,
        value: c,
        selectionMode: "single",
        fullWidth: !0,
    });
}
