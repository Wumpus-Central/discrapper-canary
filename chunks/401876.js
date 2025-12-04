n.d(t, { Z: () => o });
var l = n(54381),
    r = n(473749),
    i = n(199849),
    a = n(854698),
    s = n(388032);
function o(e) {
    let { startDate: t, recurrenceRule: n, onRecurrenceChange: o } = e,
        c = r.useMemo(() => (0, a.zi)(t, n), [n, t]),
        u = (0, a.P8)(t),
        d = (e) => e.toString();
    return (0, l.jsx)(i.B6, {
        label: s.intl.string(s.t["59TVxL"]),
        required: !0,
        placeholder: "gaming",
        options: u,
        select: o,
        serialize: d,
        isSelected: (e) => null != c && d(e) === d(c),
    });
}
