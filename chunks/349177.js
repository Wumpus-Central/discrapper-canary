n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(993413),
    a = n(981631),
    l = n(388032);
function o(e) {
    var t, n;
    return (0, i.jsx)(r.Z, {
        errors: e.errors,
        disabled: e.disabled,
        title: l.intl.string(l.t['9AjdkJ']),
        children: (0, i.jsx)('div', {
            children: (0, i.jsx)(s.TextInput, {
                placeholder: e.placeholder,
                maxLength: a.JuI,
                onChange: e.onGlobalNameChange,
                value: null !== (n = null !== (t = e.pendingGlobalName) && void 0 !== t ? t : e.currentGlobalName) && void 0 !== n ? n : ''
            })
        })
    });
}
