n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(968437),
    s = n(388032),
    a = n(830655);
let o = (e) => {
    let { autoArchiveDuration: t, onChange: n, isDisabled: o } = e,
        c = (0, r.nt)();
    return (0, i.jsx)(l.hjN, {
        title: s.intl.string(s.t.FGjMZW),
        className: a.formSection,
        children: (0, i.jsx)(l.VcW, {
            isDisabled: o,
            options: c,
            value: t,
            onChange: n,
            optionClassName: a.dropdownOption
        })
    });
};
