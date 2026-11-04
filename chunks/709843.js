var t = s(477900),
    r = s(582128),
    n = s(855986),
    i = s(165862),
    d = s(477782),
    c = s(442433),
    l = s(727419),
    u = s(576705),
    o = s(652215),
    b = s(792996);
s.d(
    a,
    {},
    {
        default: function (e) {
            let { guild: a, onSelect: s } = e,
                [p, h] = r.useState(a.premiumProgressBarEnabled),
                [g, m] = r.useState(!1),
                k = (0, n.bG)([u.A], () => u.A.can(o.xBc.MANAGE_GUILD, a));
            return (0, t.jsx)(i.W, {
                "data-menu-migrated": !0,
                navId: "progress-bar-context",
                onClose: c.Z_,
                "aria-label": b.intl.string(b.t["m85s/h"]),
                onSelect: s,
                children: (0, t.jsx)(d.sL, {
                    id: "progress-bar-enabled",
                    label: b.intl.string(b.t["0CJWP2"]),
                    checked: p,
                    disabled: g,
                    action: async function () {
                        k && (m(!0), await l.A.saveGuild(a.id, { premiumProgressBarEnabled: !p }), h(!p), m(!1));
                    },
                }),
            });
        },
    },
);
