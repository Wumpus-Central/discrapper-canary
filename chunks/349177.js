n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(993413),
    o = n(235433),
    s = n(981631),
    l = n(388032),
    c = n(560553);
function u(e) {
    var t, n;
    return (0, r.jsxs)(a.Z, {
        errors: e.errors,
        disabled: e.disabled,
        title: l.intl.string(l.t["9AjdkJ"]),
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)(i.oil, {
                    placeholder: e.placeholder,
                    maxLength: s.JuI,
                    onChange: e.onGlobalNameChange,
                    value: null != (n = null != (t = e.pendingGlobalName) ? t : e.currentGlobalName) ? n : "",
                }),
            }),
            (0, r.jsx)(o.Z, {
                user: e.user,
                className: c.displayNameStylesSection,
            }),
        ],
    });
}
