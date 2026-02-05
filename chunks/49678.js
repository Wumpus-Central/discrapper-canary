n.d(t, { MessageReminderEditMenu: () => u, S: () => c }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(442433),
    s = n(164684),
    o = n(181504),
    d = n(985018);
function c(e) {
    let { createReminder: t } = e,
        r = l.useCallback(() => {
            (0, a.mMO)(async () => {
                let { default: e } = await n.e("49208").then(n.bind(n, 148216));
                return (n) => (0, i.jsx)(e, { ...n, createReminder: t });
            });
        }, [t]);
    return l.useMemo(() => {
        let e = o.b.map((e) => {
            let { getDueAt: n, getLabel: l } = e;
            return (0, i.jsx)(
                a.Drp,
                { id: `create-reminder-${l()}`, label: l(), action: () => t(n()) },
                `create-reminder-${l()}`,
            );
        });
        return (
            e.push(
                (0, i.jsx)(
                    a.Drp,
                    { id: "create-reminder-custom", label: d.intl.string(d.t.OLA8Zi), action: r },
                    "custom",
                ),
            ),
            e
        );
    }, [t, r]);
}
function u(e) {
    let { message: t, label: n } = e,
        l = c({ createReminder: (e) => (0, s.Y)({ channelId: t.channel_id, messageId: t.id, dueAt: e }) });
    return (0, i.jsx)(a.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "message-reminder-create",
        onClose: r.Z_,
        "aria-label": d.intl.string(d.t.mJ3P0N),
        onSelect: () => null,
        children: (0, i.jsx)(a.rXV, { label: n, children: l }),
    });
}
