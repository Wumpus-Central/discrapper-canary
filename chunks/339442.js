n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(757036),
    s = n(128450),
    o = n(180020),
    l = n(652215),
    c = n(788868),
    u = n(985018),
    d = n(93448);

function f(e) {
    var t, n;
    let f = (0, a.L)(c.PremiumTypes.TIER_2);
    return (0, r.jsxs)(s.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: u.intl.string(u.t["9AjdkD"]),
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)(i.ksK, {
                    placeholder: e.placeholder,
                    maxLength: l.zzC,
                    onChange: e.onGlobalNameChange,
                    value: null != (t = null != (n = e.pendingGlobalName) ? n : e.currentGlobalName) ? t : "",
                }),
            }),
            f &&
                (0, r.jsx)(o.A, {
                    user: e.user,
                    className: d.F,
                }),
        ],
    });
}
