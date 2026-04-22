t.d(n, { default: () => c });
var i = t(627968);
t(64700);
var r = t(861672),
    l = t(477782),
    a = t(442433),
    o = t(985018);
function c(e) {
    let { roleId: n, onLeaveRole: t, onSelect: c } = e;
    return (0, i.jsx)(
        r.W,
        {
            "data-menu-migrated": !0,
            navId: "guild-role-connections-context",
            "aria-label": o.intl.string(o.t.vytvJF),
            onClose: a.Z_,
            onSelect: c,
            children: (0, i.jsx)(l.rX, {
                children: (0, i.jsx)(
                    l.Dr,
                    {
                        id: "guild-role-connections-leave-role",
                        label: o.intl.string(o.t.vytvJF),
                        action: t,
                        color: "danger",
                    },
                    n,
                ),
            }),
        },
        n,
    );
}
