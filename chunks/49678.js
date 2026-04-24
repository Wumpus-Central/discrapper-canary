n.d(t, { MessageReminderEditMenu: () => m, S: () => h }), n(321073);
var a = n(627968),
    i = n(64700),
    s = n(192308),
    l = n(477782),
    r = n(550079),
    o = n(442433),
    c = n(164684),
    d = n(181504),
    u = n(985018);
function h(e) {
    let { createReminder: t } = e,
        r = i.useCallback(() => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("68883"), n.e("49208")]).then(n.bind(n, 148216));
                return (n) => (0, a.jsx)(e, { ...n, createReminder: t });
            });
        }, [t]);
    return i.useMemo(() => {
        let e = d.b.map((e) => {
            let { getDueAt: n, getLabel: i } = e;
            return (0, a.jsx)(
                l.Dr,
                { id: `create-reminder-${i()}`, label: i(), action: () => t(n()) },
                `create-reminder-${i()}`,
            );
        });
        return (
            e.push(
                (0, a.jsx)(
                    l.Dr,
                    { id: "create-reminder-custom", label: u.intl.string(u.t.OLA8Zi), action: r },
                    "custom",
                ),
            ),
            e
        );
    }, [t, r]);
}
function m(e) {
    let { message: t, label: n } = e,
        i = h({ createReminder: (e) => (0, c.Y)({ channelId: t.channel_id, messageId: t.id, dueAt: e }) });
    return (0, a.jsx)(r.W, {
        "data-menu-migrated-auto": !0,
        navId: "message-reminder-create",
        onClose: o.Z_,
        "aria-label": u.intl.string(u.t.mJ3P0N),
        onSelect: () => null,
        children: (0, a.jsx)(l.rX, { label: n, children: i }),
    });
}
