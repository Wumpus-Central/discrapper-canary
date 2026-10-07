(r.d(t, { MessageReminderEditMenu: () => b, S: () => h }), r(321073));
var a = r(477900),
    n = r(582128),
    i = r(192308),
    s = r(477782);
if (221552 == r.j) var d = r(980707);
var l = r(442433),
    o = r(568467),
    u = r(738125),
    c = r(536637),
    g = r.n(c),
    _ = r(660183);
let m = [
    { getDueAt: () => g()().add(30, "minutes").toDate(), getLabel: () => _.intl.string(_.t["OV8l/H"]) },
    { getDueAt: () => g()().add(1, "hour").toDate(), getLabel: () => _.intl.string(_.t["zf0R+0"]) },
    { getDueAt: () => g()().add(4, "hour").toDate(), getLabel: () => _.intl.string(_.t["5gztZN"]) },
    {
        getDueAt: () => {
            let e = g()().startOf("day").add(9, "hours");
            return g()().hour() >= 9 ? e.add(1, "day").toDate() : e.toDate();
        },
        getLabel: () => (g()().hour() >= 9 ? _.intl.string(_.t["7MKr2P"]) : _.intl.string(_.t.FnFI3m)),
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
        getLabel: () => _.intl.string(_.t["q+Ls05"]),
    },
];
function h(e) {
    let { createReminder: t } = e,
        d = n.useCallback(() => {
            (0, i.openModalLazy)(async () => {
                let { default: e } = await Promise.all([r.e("406242"), r.e("549208")]).then(r.bind(r, 148216));
                return (r) => (0, a.jsx)(e, { ...r, createReminder: t });
            });
        }, [t]);
    return n.useMemo(() => {
        let e = m.map((e) => {
            let { getDueAt: r, getLabel: n } = e;
            return (0, a.jsx)(
                s.Dr,
                { id: `create-reminder-${n()}`, label: n(), action: () => t(r()) },
                `create-reminder-${n()}`,
            );
        });
        return (
            e.push(
                (0, a.jsx)(
                    s.Dr,
                    { id: "create-reminder-custom", label: _.intl.string(_.t.OLA8Zi), action: d },
                    "custom",
                ),
            ),
            e
        );
    }, [t, d]);
}
function b(e) {
    let { message: t, label: r } = e,
        n = h({
            createReminder: function (e) {
                return (0, o.Y)({ channelId: t.channel_id, messageId: t.id, dueAt: e, source: u.r.FOR_LATER_LIST });
            },
        });
    return (0, a.jsx)(d.W, {
        "data-menu-migrated-auto": !0,
        navId: "message-reminder-create",
        onClose: l.Z_,
        "aria-label": _.intl.string(_.t.mJ3P0N),
        onSelect: () => null,
        children: (0, a.jsx)(s.rX, { label: r, children: n }),
    });
}
