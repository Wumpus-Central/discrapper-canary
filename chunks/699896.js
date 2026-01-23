e.d(t, {
    default: () => o,
});
var i = e(627968);
e(64700);
var r = e(397927),
    a = e(442433),
    l = e(985018);

function o(n) {
    let { roleId: t, onLeaveRole: e, onSelect: o } = n;
    return (0, i.jsx)(
        r.W1t,
        {
            "data-menu-migration-ready": !0,
            navId: "guild-role-connections-context",
            "aria-label": l.intl.string(l.t.vytvJF),
            onClose: a.Z_,
            onSelect: o,
            children: (0, i.jsx)(r.rXV, {
                children: (0, i.jsx)(
                    r.Drp,
                    {
                        id: "guild-role-connections-leave-role",
                        label: l.intl.string(l.t.vytvJF),
                        action: e,
                        color: "danger",
                    },
                    t,
                ),
            }),
        },
        t,
    );
}
