n.d(t, { Z: () => o });
var i = n(54381);
n(473749);
var l = n(481060),
    r = n(968437),
    s = n(388032),
    a = n(339557);
let o = (e) => {
    let { autoArchiveDuration: t, onChange: n, isDisabled: o, helperText: c } = e,
        d = (0, r.nt)();
    return (0, i.jsx)("div", {
        className: a.formSection,
        children: (0, i.jsx)(l.VcW, {
            label: s.intl.string(s.t.FGjMZS),
            helperText: c,
            isDisabled: o,
            options: d,
            value: t,
            onChange: n,
            optionClassName: a.dropdownOption,
        }),
    });
};
