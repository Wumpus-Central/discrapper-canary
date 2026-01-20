n.d(t, { Z: () => o });
var i = n(54381);
n(473749);
var l = n(481060),
    r = n(968437),
    a = n(388032),
    s = n(349036);
let o = (e) => {
    let { autoArchiveDuration: t, onChange: n, isDisabled: o, helperText: c } = e,
        d = (0, r.nt)();
    return (0, i.jsx)("div", {
        className: s.formSection,
        children: (0, i.jsx)(l.VcW, {
            selectionMode: "single",
            label: a.intl.string(a.t.FGjMZS),
            helperText: c,
            disabled: o,
            options: d,
            value: t,
            onSelectionChange: n,
        }),
    });
};
