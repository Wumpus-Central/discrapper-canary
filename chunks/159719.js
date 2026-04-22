n.d(t, { A: () => x });
var i = n(627968),
    l = n(311907),
    s = n(192308),
    r = n(452027),
    a = n(696986),
    o = n(885617),
    d = n(314737),
    c = n(405810),
    u = n(11351),
    m = n(557300),
    g = n(534875),
    h = n(985018);
function x(e) {
    let { guild: t } = e,
        x = (0, l.bG)([o.A], () => o.A.isUploadingEmoji()),
        _ = (0, g.A)(t.id),
        p = (0, m.A)(t) - _.length,
        A = (0, u.gN)();
    return (0, i.jsxs)(r.D, {
        label: h.intl.string(h.t["LDT0Q/"]),
        disabled: A,
        description: h.intl.format(h.t.H9Jxp6, { maxSlots: (0, m.A)(t) }),
        children: [
            (0, i.jsx)(a.h, { size: 16 }),
            (0, i.jsx)(c.A, {
                onChange: (e, l) => {
                    null != e &&
                        null != l &&
                        (0, s.openModalLazy)(async () => {
                            let { CreateEmojiWithRolesModal: s } = await n.e("15224").then(n.bind(n, 429131));
                            return (n) => (0, i.jsx)(s, { ...n, data: e, file: l, guildId: t.id });
                        });
                },
                disabled: A || x || 0 === p,
                size: "md",
                variant: "primary",
                text: h.intl.string(h.t.AuPtov),
                loading: x,
            }),
            (0, i.jsx)(a.h, { size: 24 }),
            (0, i.jsx)(d.Bt, {
                title: h.intl.string(h.t.lu1ZQ2),
                maxSlots: (0, m.A)(t),
                emojiCount: _.length,
                children: (0, i.jsx)(d.zI, {
                    guild: t,
                    emojis: _,
                    onEdit: (e, t) => {
                        (0, s.openModalLazy)(async () => {
                            let { UpdateEmojiRolesModal: l } = await n.e("15224").then(n.bind(n, 429131));
                            return (n) => (0, i.jsx)(l, { ...n, emoji: e, guildId: t });
                        });
                    },
                    editingDisabled: A,
                }),
            }),
        ],
    });
}
