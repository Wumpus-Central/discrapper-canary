n.d(t, { Z: () => d });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(993413),
    a = n(235433),
    l = n(981631),
    o = n(388032),
    c = n(262762);
function d(e) {
    var t, n;
    return (0, i.jsxs)(s.Z, {
        errors: e.errors,
        disabled: e.disabled,
        title: o.intl.string(o.t['9AjdkJ']),
        children: [
            (0, i.jsx)('div', {
                children: (0, i.jsx)(r.oil, {
                    placeholder: e.placeholder,
                    maxLength: l.JuI,
                    onChange: e.onGlobalNameChange,
                    value: null != (n = null != (t = e.pendingGlobalName) ? t : e.currentGlobalName) ? n : ''
                })
            }),
            (0, i.jsx)(a.Z, {
                user: e.user,
                className: c.displayNameStylesSection
            })
        ]
    });
}
