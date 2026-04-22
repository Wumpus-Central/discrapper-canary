n.d(t, { MessageReminderEditMenu: () => A, S: () => g }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(192308),
    r = n(477782);
if (21552 == n.j) var s = n(861672);
var o = n(442433),
    d = n(164684),
    c = n(181504),
    u = n(985018);
function g(e) {
    let { createReminder: t } = e,
        s = l.useCallback(() => {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("68883"), n.e("49208")]).then(n.bind(n, 148216));
                return (n) => (0, i.jsx)(e, { ...n, createReminder: t });
            });
        }, [t]);
    return l.useMemo(() => {
        let e = c.b.map((e) => {
            let { getDueAt: n, getLabel: l } = e;
            return (0, i.jsx)(
                r.Dr,
                { id: `create-reminder-${l()}`, label: l(), action: () => t(n()) },
                `create-reminder-${l()}`,
            );
        });
        return (
            e.push(
                (0, i.jsx)(
                    r.Dr,
                    { id: "create-reminder-custom", label: u.intl.string(u.t.OLA8Zi), action: s },
                    "custom",
                ),
            ),
            e
        );
    }, [t, s]);
}
function A(e) {
    let { message: t, label: n } = e,
        l = g({ createReminder: (e) => (0, d.Y)({ channelId: t.channel_id, messageId: t.id, dueAt: e }) });
    return (0, i.jsx)(s.W, {
        "data-menu-migrated-auto": !0,
        navId: "message-reminder-create",
        onClose: o.Z_,
        "aria-label": u.intl.string(u.t.mJ3P0N),
        onSelect: () => null,
        children: (0, i.jsx)(r.rX, { label: n, children: l }),
    });
}
