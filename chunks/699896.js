n.d(e, {
    default: () => o,
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(442433),
    a = n(985018);

function o(t) {
    let { roleId: e, onLeaveRole: n, onSelect: o } = t;
    return (0, i.jsx)(
        r.W1t,
        {
            "data-menu-migrated": !0,
            navId: "guild-role-connections-context",
            "aria-label": a.intl.string(a.t.vytvJF),
            onClose: l.Z_,
            onSelect: o,
            children: (0, i.jsx)(r.rXV, {
                children: (0, i.jsx)(
                    r.Drp,
                    {
                        id: "guild-role-connections-leave-role",
                        label: a.intl.string(a.t.vytvJF),
                        action: n,
                        color: "danger",
                    },
                    e,
                ),
            }),
        },
        e,
    );
}
