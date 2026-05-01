a.d(t, { MessageReminderEditMenu: () => b, S: () => h }), a(321073);
var r = a(627968),
    n = a(64700),
    i = a(192308),
    d = a(477782);
if (21552 == a.j) var l = a(980707);
var s = a(442433),
    u = a(164684),
    o = a(989349),
    c = a.n(o),
    g = a(375708);
let m = [
    { getDueAt: () => c()().add(30, "minutes").toDate(), getLabel: () => g.intl.string(g.t["OV8l/H"]) },
    { getDueAt: () => c()().add(1, "hour").toDate(), getLabel: () => g.intl.string(g.t["zf0R+0"]) },
    { getDueAt: () => c()().add(4, "hour").toDate(), getLabel: () => g.intl.string(g.t["5gztZN"]) },
    {
        getDueAt: () => {
            let e = c()().startOf("day").add(9, "hours");
            return c()().hour() >= 9 ? e.add(1, "day").toDate() : e.toDate();
        },
        getLabel: () => (c()().hour() >= 9 ? g.intl.string(g.t["7MKr2P"]) : g.intl.string(g.t.FnFI3m)),
    },
    {
        getDueAt: () => {
            let e,
                t = c()().day();
            return (
                (e = 0 === t || (1 === t && c()().startOf("day").add(9, "hours").isAfter(c()())) ? 1 : 8),
                c()().day(e).startOf("day").add(9, "hours").toDate()
            );
        },
        getLabel: () => g.intl.string(g.t["q+Ls05"]),
    },
];
function h(e) {
    let { createReminder: t } = e,
        l = n.useCallback(() => {
            (0, i.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    a.e("79093"),
                    a.e("28510"),
                    a.e("1197"),
                    a.e("61156"),
                    a.e("16767"),
                    a.e("6841"),
                    a.e("49208"),
                ]).then(a.bind(a, 148216));
                return (a) => (0, r.jsx)(e, { ...a, createReminder: t });
            });
        }, [t]);
    return n.useMemo(() => {
        let e = m.map((e) => {
            let { getDueAt: a, getLabel: n } = e;
            return (0, r.jsx)(
                d.Dr,
                { id: `create-reminder-${n()}`, label: n(), action: () => t(a()) },
                `create-reminder-${n()}`,
            );
        });
        return (
            e.push(
                (0, r.jsx)(
                    d.Dr,
                    { id: "create-reminder-custom", label: g.intl.string(g.t.OLA8Zi), action: l },
                    "custom",
                ),
            ),
            e
        );
    }, [t, l]);
}
function b(e) {
    let { message: t, label: a } = e,
        n = h({ createReminder: (e) => (0, u.Y)({ channelId: t.channel_id, messageId: t.id, dueAt: e }) });
    return (0, r.jsx)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "message-reminder-create",
        onClose: s.Z_,
        "aria-label": g.intl.string(g.t.mJ3P0N),
        onSelect: () => null,
        children: (0, r.jsx)(d.rX, { label: a, children: n }),
    });
}
