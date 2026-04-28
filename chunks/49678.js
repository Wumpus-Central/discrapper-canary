a.d(r, { MessageReminderEditMenu: () => h, S: () => o }), a(321073);
var n = a(627968),
    t = a(64700),
    i = a(192308),
    l = a(477782);
if (21552 == a.j) var s = a(550079);
var d = a(442433),
    c = a(164684),
    u = a(181504),
    m = a(985018);
function o(e) {
    let { createReminder: r } = e,
        s = t.useCallback(() => {
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
                return (a) => (0, n.jsx)(e, { ...a, createReminder: r });
            });
        }, [r]);
    return t.useMemo(() => {
        let e = u.b.map((e) => {
            let { getDueAt: a, getLabel: t } = e;
            return (0, n.jsx)(
                l.Dr,
                { id: `create-reminder-${t()}`, label: t(), action: () => r(a()) },
                `create-reminder-${t()}`,
            );
        });
        return (
            e.push(
                (0, n.jsx)(
                    l.Dr,
                    { id: "create-reminder-custom", label: m.intl.string(m.t.OLA8Zi), action: s },
                    "custom",
                ),
            ),
            e
        );
    }, [r, s]);
}
function h(e) {
    let { message: r, label: a } = e,
        t = o({ createReminder: (e) => (0, c.Y)({ channelId: r.channel_id, messageId: r.id, dueAt: e }) });
    return (0, n.jsx)(s.W, {
        "data-menu-migrated-auto": !0,
        navId: "message-reminder-create",
        onClose: d.Z_,
        "aria-label": m.intl.string(m.t.mJ3P0N),
        onSelect: () => null,
        children: (0, n.jsx)(l.rX, { label: a, children: t }),
    });
}
