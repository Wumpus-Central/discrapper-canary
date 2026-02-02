t.d(a, {
    default: () => p,
}),
    t(896048);
var s = t(627968),
    n = t(64700),
    r = t(311907),
    i = t(397927),
    d = t(442433),
    c = t(997509),
    l = t(576705),
    o = t(903223),
    u = t(652215),
    b = t(985018);

function p(e) {
    let { guild: a, onSelect: t } = e,
        p = (0, o.ws)(a, {
            location: "boost-bar-context-menu",
        }),
        [h, g] = n.useState(p),
        [m, k] = n.useState(!1),
        x = (0, r.bG)([l.A], () => l.A.can(u.xBc.MANAGE_GUILD, a)),
        A = async () => {
            x &&
                (k(!0),
                await c.A.saveGuild(a.id, {
                    premiumProgressBarEnabled: !h,
                }),
                g(!h),
                k(!1));
        };
    return (0, s.jsx)(i.W1t, {
        "data-menu-migrated": !0,
        navId: "progress-bar-context",
        onClose: d.Z_,
        "aria-label": b.intl.string(b.t["m85s/h"]),
        onSelect: t,
        children: (0, s.jsx)(i.sLh, {
            id: "progress-bar-enabled",
            label: b.intl.string(b.t["0CJWP2"]),
            checked: h,
            disabled: m,
            action: A,
        }),
    });
}
