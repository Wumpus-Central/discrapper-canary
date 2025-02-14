n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(481060),
    s = n(968437),
    a = n(388032),
    r = n(436030);
let o = (e) => {
    let { autoArchiveDuration: t, onChange: n, isDisabled: o } = e,
        d = (0, s.nt)();
    return (0, i.jsx)(l.hjN, {
        title: a.intl.string(a.t.FGjMZW),
        className: r.formSection,
        children: (0, i.jsx)(l.VcW, {
            isDisabled: o,
            options: d,
            value: t,
            onChange: n,
            optionClassName: r.dropdownOption
        })
    });
};
