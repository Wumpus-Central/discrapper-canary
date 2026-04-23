s.d(a, { default: () => p });
var r = s(627968),
    t = s(64700),
    i = s(17928),
    n = s(550079),
    d = s(477782),
    l = s(442433),
    c = s(997509),
    u = s(576705),
    o = s(652215),
    b = s(985018);
function p(e) {
    let { guild: a, onSelect: s } = e,
        [p, h] = t.useState(a.premiumProgressBarEnabled),
        [g, m] = t.useState(!1),
        k = (0, i.bG)([u.A], () => u.A.can(o.xBc.MANAGE_GUILD, a)),
        A = async () => {
            k && (m(!0), await c.A.saveGuild(a.id, { premiumProgressBarEnabled: !p }), h(!p), m(!1));
        };
    return (0, r.jsx)(n.W, {
        "data-menu-migrated": !0,
        navId: "progress-bar-context",
        onClose: l.Z_,
        "aria-label": b.intl.string(b.t["m85s/h"]),
        onSelect: s,
        children: (0, r.jsx)(d.sL, {
            id: "progress-bar-enabled",
            label: b.intl.string(b.t["0CJWP2"]),
            checked: p,
            disabled: g,
            action: A,
        }),
    });
}
