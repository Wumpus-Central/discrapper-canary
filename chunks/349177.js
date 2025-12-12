n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(481060),
    o = n(612659),
    a = n(993413),
    s = n(235433),
    l = n(981631),
    c = n(474936),
    u = n(388032),
    d = n(560553);
function f(e) {
    var t, n;
    let f = (0, o.m)(c.PremiumTypes.TIER_2);
    return (0, r.jsxs)(a.Z, {
        errors: e.errors,
        disabled: e.disabled,
        title: u.intl.string(u.t["9AjdkD"]),
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)(i.oil, {
                    placeholder: e.placeholder,
                    maxLength: l.JuI,
                    onChange: e.onGlobalNameChange,
                    value: null != (n = null != (t = e.pendingGlobalName) ? t : e.currentGlobalName) ? n : "",
                }),
            }),
            f &&
                (0, r.jsx)(s.Z, {
                    user: e.user,
                    className: d.displayNameStylesSection,
                }),
        ],
    });
}
