n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(993413),
    l = n(981631),
    a = n(388032);
function o(e) {
    var t, n;
    return (0, i.jsx)(r.Z, {
        errors: e.errors,
        disabled: e.disabled,
        title: a.intl.string(a.t['9AjdkJ']),
        children: (0, i.jsx)('div', {
            children: (0, i.jsx)(s.oil, {
                placeholder: e.placeholder,
                maxLength: l.JuI,
                onChange: e.onGlobalNameChange,
                value: null !== (n = null !== (t = e.pendingGlobalName) && void 0 !== t ? t : e.currentGlobalName) && void 0 !== n ? n : ''
            })
        })
    });
}
