r.d(t, { MessageReminderEditMenu: () => D, S: () => b }), r(321073);
var a = r(477900),
    n = r(582128),
    i = r(192308),
    d = r(477782);
if (221552 == r.j) var l = r(980707);
var s = r(442433),
    u = r(164684),
    o = r(738125),
    c = r(989349),
    g = r.n(c),
    m = r(375708);
let h = [
    { getDueAt: () => g()().add(30, "minutes").toDate(), getLabel: () => m.intl.string(m.t["OV8l/H"]) },
    { getDueAt: () => g()().add(1, "hour").toDate(), getLabel: () => m.intl.string(m.t["zf0R+0"]) },
    { getDueAt: () => g()().add(4, "hour").toDate(), getLabel: () => m.intl.string(m.t["5gztZN"]) },
    {
        getDueAt: () => {
            let e = g()().startOf("day").add(9, "hours");
            return g()().hour() >= 9 ? e.add(1, "day").toDate() : e.toDate();
        },
        getLabel: () => (g()().hour() >= 9 ? m.intl.string(m.t["7MKr2P"]) : m.intl.string(m.t.FnFI3m)),
    },
    {
        getDueAt: () => {
            let e,
                t = g()().day();
            return (
                (e = 0 === t || (1 === t && g()().startOf("day").add(9, "hours").isAfter(g()())) ? 1 : 8),
                g()().day(e).startOf("day").add(9, "hours").toDate()
            );
        },
        getLabel: () => m.intl.string(m.t["q+Ls05"]),
    },
];
function b(e) {
    let { createReminder: t } = e,
        l = n.useCallback(() => {
            (0, i.openModalLazy)(async () => {
                let { default: e } = await Promise.all([r.e("852789"), r.e("549208")]).then(r.bind(r, 148216));
                return (r) => (0, a.jsx)(e, { ...r, createReminder: t });
            });
        }, [t]);
    return n.useMemo(() => {
        let e = h.map((e) => {
            let { getDueAt: r, getLabel: n } = e;
            return (0, a.jsx)(
                d.Dr,
                { id: `create-reminder-${n()}`, label: n(), action: () => t(r()) },
                `create-reminder-${n()}`,
            );
        });
        return (
            e.push(
                (0, a.jsx)(
                    d.Dr,
                    { id: "create-reminder-custom", label: m.intl.string(m.t.OLA8Zi), action: l },
                    "custom",
                ),
            ),
            e
        );
    }, [t, l]);
}
function D(e) {
    let { message: t, label: r } = e,
        n = b({
            createReminder: function (e) {
                return (0, u.Y)({ channelId: t.channel_id, messageId: t.id, dueAt: e, source: o.r.FOR_LATER_LIST });
            },
        });
    return (0, a.jsx)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "message-reminder-create",
        onClose: s.Z_,
        "aria-label": m.intl.string(m.t.mJ3P0N),
        onSelect: () => null,
        children: (0, a.jsx)(d.rX, { label: r, children: n }),
    });
}
