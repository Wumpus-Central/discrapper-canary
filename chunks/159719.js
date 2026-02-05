"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(311907),
    l = n(397927),
    r = n(885617),
    a = n(314737),
    o = n(405810),
    d = n(11351),
    c = n(557300),
    u = n(534875),
    m = n(985018);
function g(e) {
    let { guild: t } = e,
        g = (0, s.bG)([r.A], () => r.A.isUploadingEmoji()),
        x = (0, u.A)(t.id),
        h = (0, c.A)(t) - x.length,
        _ = (0, d.gN)();
    return (0, i.jsxs)(l.D0$, {
        label: m.intl.string(m.t["LDT0Q/"]),
        disabled: _,
        description: m.intl.format(m.t.H9Jxp6, { maxSlots: (0, c.A)(t) }),
        children: [
            (0, i.jsx)(l.hKd, { size: 16 }),
            (0, i.jsx)(o.A, {
                onChange: (e, s) => {
                    null != e &&
                        null != s &&
                        (0, l.mMO)(async () => {
                            let { CreateEmojiWithRolesModal: l } = await n.e("15224").then(n.bind(n, 429131));
                            return (n) => (0, i.jsx)(l, { ...n, data: e, file: s, guildId: t.id });
                        });
                },
                disabled: _ || g || 0 === h,
                size: "md",
                variant: "primary",
                text: m.intl.string(m.t.AuPtov),
                loading: g,
            }),
            (0, i.jsx)(l.hKd, { size: 24 }),
            (0, i.jsx)(a.Bt, {
                title: m.intl.string(m.t.lu1ZQ2),
                maxSlots: (0, c.A)(t),
                emojiCount: x.length,
                children: (0, i.jsx)(a.zI, {
                    guild: t,
                    emojis: x,
                    onEdit: (e, t) => {
                        (0, l.mMO)(async () => {
                            let { UpdateEmojiRolesModal: s } = await n.e("15224").then(n.bind(n, 429131));
                            return (n) => (0, i.jsx)(s, { ...n, emoji: e, guildId: t });
                        });
                    },
                    editingDisabled: _,
                }),
            }),
        ],
    });
}
