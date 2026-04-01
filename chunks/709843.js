s.d(a, { default: () => b });
var t = s(627968),
    r = s(64700),
    i = s(311907),
    n = s(397927),
    d = s(442433),
    l = s(997509),
    c = s(576705),
    u = s(652215),
    o = s(985018);
function b(e) {
    let { guild: a, onSelect: s } = e,
        [b, p] = r.useState(a.premiumProgressBarEnabled),
        [h, g] = r.useState(!1),
        m = (0, i.bG)([c.A], () => c.A.can(u.xBc.MANAGE_GUILD, a)),
        k = async () => {
            m && (g(!0), await l.A.saveGuild(a.id, { premiumProgressBarEnabled: !b }), p(!b), g(!1));
        };
    return (0, t.jsx)(n.W1t, {
        "data-menu-migrated": !0,
        navId: "progress-bar-context",
        onClose: d.Z_,
        "aria-label": o.intl.string(o.t["m85s/h"]),
        onSelect: s,
        children: (0, t.jsx)(n.sLh, {
            id: "progress-bar-enabled",
            label: o.intl.string(o.t["0CJWP2"]),
            checked: b,
            disabled: h,
            action: k,
        }),
    });
}
