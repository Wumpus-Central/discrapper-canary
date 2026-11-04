var r = n(477900);
n(582128);
var l = n(103557),
    a = n(31457);
n(260197);
var t = n(792996);
function o(e) {
    let { value: s, placeholder: n, onChange: a, disabled: t, autofocus: o } = e;
    return (0, r.jsx)(l.f, {
        maxLength: 1e3,
        value: s ?? "",
        placeholder: n ?? "",
        onChange: a,
        disabled: t,
        autoFocus: o,
        autosize: !0,
        showRemainingCharacterCount: !t,
    });
}
n.d(
    s,
    {},
    {
        P1: function (e) {
            let { formField: s } = e;
            return (0, r.jsx)(a._H, { title: s.label, children: (0, r.jsx)(o, { value: s.response, disabled: !0 }) });
        },
        zD: function (e) {
            let { formField: s, autofocus: n, onChange: l } = e;
            return (0, r.jsx)(a.cS, {
                title: s.label,
                children: (0, r.jsx)(o, {
                    value: s.response,
                    onChange: l,
                    autofocus: n,
                    placeholder: t.intl.string(t.t["Sqn+Wh"]),
                }),
            });
        },
    },
);
