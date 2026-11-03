(n.d(e, { MessageReminderEditMenu: () => _, S: () => A }), n(321073));
var i = n(477900),
    a = n(582128),
    r = n(192308),
    l = n(477782);
if (221552 == n.j) var s = n(980707);
var c = n(442433),
    d = n(568467),
    o = n(738125),
    u = n(536637),
    g = n.n(u),
    m = n(105292);
let b = [
    {
        getDueAt: () => g()().add(30, "minutes").toDate(),
        getLabel: () => m.intl.string(m.t["OV8l/H"]),
        getAccessibilityLabel: () => m.intl.string(m.t.cYg9Kf),
    },
    {
        getDueAt: () => g()().add(1, "hour").toDate(),
        getLabel: () => m.intl.string(m.t["zf0R+0"]),
        getAccessibilityLabel: () => m.intl.string(m.t.MEaSRh),
    },
    {
        getDueAt: () => g()().add(4, "hour").toDate(),
        getLabel: () => m.intl.string(m.t["5gztZN"]),
        getAccessibilityLabel: () => m.intl.string(m.t.uxZblT),
    },
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
function A(t) {
    let { createReminder: e } = t,
        s = a.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("406242"), n.e("549208")]).then(n.bind(n, 148216));
                return (n) => (0, i.jsx)(t, { ...n, createReminder: e });
            });
        }, [e]);
    return a.useMemo(() => {
        let t = b.map((t) => {
            let { getDueAt: n, getLabel: a } = t;
            return (0, i.jsx)(
                l.Dr,
                { id: `create-reminder-${a()}`, label: a(), action: () => e(n()) },
                `create-reminder-${a()}`,
            );
        });
        return (
            t.push(
                (0, i.jsx)(
                    l.Dr,
                    { id: "create-reminder-custom", label: m.intl.string(m.t.OLA8Zi), action: s },
                    "custom",
                ),
            ),
            t
        );
    }, [e, s]);
}
function _(t) {
    let { message: e, label: n } = t,
        a = A({
            createReminder: function (t) {
                return (0, d.Y)({ channelId: e.channel_id, messageId: e.id, dueAt: t, source: o.r.FOR_LATER_LIST });
            },
        });
    return (0, i.jsx)(s.W, {
        "data-menu-migrated-auto": !0,
        navId: "message-reminder-create",
        onClose: c.Z_,
        "aria-label": m.intl.string(m.t.mJ3P0N),
        onSelect: () => null,
        children: (0, i.jsx)(l.rX, { label: n, children: a }),
    });
}
