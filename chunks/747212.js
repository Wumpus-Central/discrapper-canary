n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(968437),
    s = n(388032),
    a = n(583243);
let o = (e) => {
    let { autoArchiveDuration: t, onChange: n, isDisabled: o } = e,
        c = (0, l.nt)();
    return (0, i.jsx)(r.hjN, {
        title: s.NW.string(s.t.FGjMZW),
        className: a.formSection,
        children: (0, i.jsx)(r.VcW, {
            isDisabled: o,
            options: c,
            value: t,
            onChange: n,
            optionClassName: a.dropdownOption
        })
    });
};
