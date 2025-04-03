n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(968437),
    s = n(388032),
    a = n(830655);
let o = (e) => {
    let { autoArchiveDuration: t, onChange: n, isDisabled: o } = e,
        c = (0, l.nt)();
    return (0, r.jsx)(i.hjN, {
        title: s.NW.string(s.t.FGjMZW),
        className: a.formSection,
        children: (0, r.jsx)(i.VcW, {
            isDisabled: o,
            options: c,
            value: t,
            onChange: n,
            optionClassName: a.dropdownOption
        })
    });
};
