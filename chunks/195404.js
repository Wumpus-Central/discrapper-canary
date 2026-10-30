(n.d(e, { MessageReminderEditMenu: () => A, S: () => b }), n(321073));
var a = n(477900),
    r = n(582128),
    i = n(192308),
    l = n(477782);
if (221552 == n.j) var s = n(980707);
var d = n(442433),
    o = n(568467),
    u = n(738125),
    c = n(536637),
    g = n.n(c),
    m = n(105292);
let _ = [
    { getDueAt: () => g()().add(30, "minutes").toDate(), getLabel: () => m.intl.string(m.t["OV8l/H"]) },
    { getDueAt: () => g()().add(1, "hour").toDate(), getLabel: () => m.intl.string(m.t["zf0R+0"]) },
    { getDueAt: () => g()().add(4, "hour").toDate(), getLabel: () => m.intl.string(m.t["5gztZN"]) },
    {
        getDueAt: () => {
            let t = g()().startOf("day").add(9, "hours");
            return g()().hour() >= 9 ? t.add(1, "day").toDate() : t.toDate();
        },
        getLabel: () => (g()().hour() >= 9 ? m.intl.string(m.t["7MKr2P"]) : m.intl.string(m.t.FnFI3m)),
    },
    {
        getDueAt: () => {
            let t,
                e = g()().day();
            return (
                (t = 0 === e || (1 === e && g()().startOf("day").add(9, "hours").isAfter(g()())) ? 1 : 8),
                g()().day(t).startOf("day").add(9, "hours").toDate()
            );
        },
        getLabel: () => m.intl.string(m.t["q+Ls05"]),
    },
];
function b(t) {
    let { createReminder: e } = t,
        s = r.useCallback(() => {
            (0, i.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("406242"), n.e("549208")]).then(n.bind(n, 148216));
                return (n) => (0, a.jsx)(t, { ...n, createReminder: e });
            });
        }, [e]);
    return r.useMemo(() => {
        let t = _.map((t) => {
            let { getDueAt: n, getLabel: r } = t;
            return (0, a.jsx)(
                l.Dr,
                { id: `create-reminder-${r()}`, label: r(), action: () => e(n()) },
                `create-reminder-${r()}`,
            );
        });
        return (
            t.push(
                (0, a.jsx)(
                    l.Dr,
                    { id: "create-reminder-custom", label: m.intl.string(m.t.OLA8Zi), action: s },
                    "custom",
                ),
            ),
            t
        );
    }, [e, s]);
}
function A(t) {
    let { message: e, label: n } = t,
        r = b({
            createReminder: function (t) {
                return (0, o.Y)({ channelId: e.channel_id, messageId: e.id, dueAt: t, source: u.r.FOR_LATER_LIST });
            },
        });
    return (0, a.jsx)(s.W, {
        "data-menu-migrated-auto": !0,
        navId: "message-reminder-create",
        onClose: d.Z_,
        "aria-label": m.intl.string(m.t.mJ3P0N),
        onSelect: () => null,
        children: (0, a.jsx)(l.rX, { label: n, children: r }),
    });
}
