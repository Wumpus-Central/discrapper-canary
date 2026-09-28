s.d(a, { default: () => p });
var t = s(477900),
    r = s(582128),
    n = s(17928),
    i = s(980707),
    d = s(477782),
    l = s(442433),
    c = s(468689),
    u = s(576705),
    o = s(652215),
    b = s(375708);
function p(e) {
    let { guild: a, onSelect: s } = e,
        [p, h] = r.useState(a.premiumProgressBarEnabled),
        [g, m] = r.useState(!1),
        k = (0, n.bG)([u.A], () => u.A.can(o.xBc.MANAGE_GUILD, a));
    async function f() {
        k && (m(!0), await c.default.saveGuild(a.id, { premiumProgressBarEnabled: !p }), h(!p), m(!1));
    }
    return (0, t.jsx)(i.W, {
        "data-menu-migrated": !0,
        navId: "progress-bar-context",
        onClose: l.Z_,
        "aria-label": b.intl.string(b.t["m85s/h"]),
        onSelect: s,
        children: (0, t.jsx)(d.sL, {
            id: "progress-bar-enabled",
            label: b.intl.string(b.t["0CJWP2"]),
            checked: p,
            disabled: g,
            action: f,
        }),
    });
}
