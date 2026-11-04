var t = s(477900);
s(582128);
var n = s(95477),
    i = s(103557),
    r = s(31457);
s(260197);
var a = s(792996);
function d(e) {
    let { value: l, placeholder: s, onChange: i, disabled: r, autofocus: a } = e;
    return (0, t.jsx)(n.k, { maxLength: 150, value: l ?? "", placeholder: s, onChange: i, disabled: r, autoFocus: a });
}
s.d(
    l,
    {},
    {
        _V: d,
        aS: function (e) {
            let { formField: l } = e;
            return (0, t.jsx)(r._H, { title: l.label, children: (0, t.jsx)(i.f, { value: l.response, disabled: !0 }) });
        },
        y4: function (e) {
            let { formField: l, autofocus: s, onChange: n } = e;
            return (0, t.jsx)(r.cS, {
                title: l.label,
                children: (0, t.jsx)(d, {
                    onChange: n,
                    value: l.response,
                    autofocus: s,
                    placeholder: a.intl.string(a.t["Sqn+Wh"]),
                }),
            });
        },
    },
);
