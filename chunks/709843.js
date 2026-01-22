s.d(a, { default: () => b }), s(896048);
var r = s(627968),
    t = s(64700),
    i = s(311907),
    n = s(397927),
    d = s(442433),
    l = s(997509),
    c = s(576705),
    o = s(652215),
    u = s(985018);
function b(e) {
    let { guild: a, onSelect: s } = e,
        [b, p] = t.useState(a.premiumProgressBarEnabled),
        [h, g] = t.useState(!1),
        k = (0, i.bG)([c.A], () => c.A.can(o.xBc.MANAGE_GUILD, a)),
        m = async () => {
            k && (g(!0), await l.A.saveGuild(a.id, { premiumProgressBarEnabled: !b }), p(!b), g(!1));
        };
    return (0, r.jsx)(n.W1t, {
        navId: "progress-bar-context",
        onClose: d.Z_,
        "aria-label": u.intl.string(u.t["m85s/h"]),
        onSelect: s,
        children: (0, r.jsx)(n.sLh, {
            id: "progress-bar-enabled",
            label: u.intl.string(u.t["0CJWP2"]),
            checked: b,
            disabled: h,
            action: m,
        }),
    });
}
