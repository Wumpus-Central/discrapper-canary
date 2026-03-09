n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(757036),
    a = n(128450),
    r = n(180020),
    o = n(652215),
    d = n(788868),
    c = n(985018),
    u = n(93448);
function _(e) {
    let t = (0, l.L)(d.PremiumTypes.TIER_2);
    return (0, i.jsxs)(a.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: c.intl.string(c.t["9AjdkD"]),
        children: [
            (0, i.jsx)("div", {
                children: (0, i.jsx)(s.ksK, {
                    placeholder: e.placeholder,
                    maxLength: o.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, i.jsx)(r.A, { user: e.user, className: u.F }),
        ],
    });
}
