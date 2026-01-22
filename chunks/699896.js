e.d(t, {
    default: () => c,
});
var i = e(627968);
e(64700);
var l = e(397927),
    r = e(442433),
    o = e(985018);

function c(n) {
    let { roleId: t, onLeaveRole: e, onSelect: c } = n;
    return (0, i.jsx)(
        l.W1t,
        {
            navId: "guild-role-connections-context",
            "aria-label": o.intl.string(o.t.vytvJF),
            onClose: r.Z_,
            onSelect: c,
            children: (0, i.jsx)(l.rXV, {
                children: (0, i.jsx)(
                    l.Drp,
                    {
                        id: "guild-role-connections-leave-role",
                        label: o.intl.string(o.t.vytvJF),
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
