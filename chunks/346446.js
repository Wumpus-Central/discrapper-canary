n.d(t, {
    A: () => h,
    r: () => _,
});
var r = n(627968),
    i = n(397927),
    a = n(442433),
    o = n(50268),
    s = n(700210),
    l = n(253932),
    c = n(967198),
    u = n(211401),
    d = n(500049),
    f = n(60809),
    p = n(985018);

function _(e) {
    var t;
    let { application: n } = e,
        r = null != (t = c.A.getGuildId()) ? t : void 0,
        a = () => {
            (0, i.OoC)(f.gS), (0, u.k)(d.Se.DISMISSED);
        };
    return (0, s.A)({
        application: n,
        guildId: r,
        onItemClick: a,
    });
}

function h(e) {
    let { application: t, onSelect: n } = e,
        s = l.Q_.useSetting(),
        c = (0, o.A)({
            id: t.id,
            label: p.intl.string(p.t["+NP/b2"]),
        }),
        u = _({
            application: t,
        });
    return (0, r.jsxs)(i.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "activity-shelf-item-context",
        onClose: a.Z_,
        "aria-label": p.intl.string(p.t.WkcHT9),
        onSelect: n,
        children: [
            null != u &&
                (0, r.jsx)(
                    i.rXV,
                    {
                        children: u,
                    },
                    "manage-app-actions",
                ),
            s &&
                (0, r.jsx)(
                    i.rXV,
                    {
                        children: c,
                    },
                    "developer-actions",
                ),
        ],
    });
}
