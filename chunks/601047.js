n.d(t, {
    P1: () => c,
    PC: () => s,
    zD: () => d,
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(31457),
    o = n(260197),
    a = n(985018);

function s(e) {
    let { value: t, placeholder: n, onChange: i, disabled: a, autofocus: s } = e;
    return (0, r.jsx)(l.fs1, {
        maxLength: o.nQ,
        value: null != t ? t : "",
        placeholder: null != n ? n : "",
        onChange: i,
        disabled: a,
        autoFocus: s,
        autosize: !0,
        showRemainingCharacterCount: !a,
    });
}

function c(e) {
    let { formField: t } = e;
    return (0, r.jsx)(i._H, {
        title: t.label,
        children: (0, r.jsx)(s, {
            value: t.response,
            disabled: !0,
        }),
    });
}

function d(e) {
    let { formField: t, autofocus: n, onChange: l } = e;
    return (0, r.jsx)(i.cS, {
        title: t.label,
        children: (0, r.jsx)(s, {
            value: t.response,
            onChange: l,
            autofocus: n,
            placeholder: a.intl.string(a.t["Sqn+Wh"]),
        }),
    });
}
