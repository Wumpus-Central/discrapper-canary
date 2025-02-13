n.d(t, { Z: () => c }), n(47120);
var i = n(200651);
n(192379);
var l = n(120356),
    s = n.n(l),
    a = n(481060),
    r = n(968437),
    o = n(388032),
    d = n(436030);
let c = (e) => {
    let { autoArchiveDuration: t, onChange: n, isDisabled: l } = e,
        c = (0, r.nt)(),
        u = (e, t) =>
            (0, i.jsx)('span', {
                className: s()(d.optionLabel, { [d.dropdownOption]: t }),
                children: e.label
            });
    return (0, i.jsx)(a.hjN, {
        title: o.intl.string(o.t.FGjMZW),
        className: d.formSection,
        children: (0, i.jsx)(a.q4e, {
            isDisabled: l,
            options: c,
            value: t,
            maxVisibleItems: c.length,
            onChange: n,
            optionClassName: d.dropdownOption,
            renderOptionLabel: (e) => u(e, !0),
            renderOptionValue: (e) => {
                let [t] = e;
                return u(t, !1);
            }
        })
    });
};
