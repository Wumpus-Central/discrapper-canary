n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    s = n(471613),
    a = n(29605),
    o = n(345861),
    c = n(723047),
    d = n(796814),
    u = n(388032);
function m(e) {
    let { guild: t } = e,
        m = (0, r.e7)([s.Z], () => s.Z.isUploadingEmoji()),
        h = (0, d.Z)(t.id),
        g = t.getMaxRoleSubscriptionEmojiSlots() - h.length,
        x = (0, c.mY)();
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)(l.FormSection, {
            title: u.intl.string(u.t.LDT0Q0),
            disabled: x,
            children: [
                (0, i.jsx)(l.FormText, {
                    type: l.FormText.Types.DESCRIPTION,
                    disabled: x,
                    children: u.intl.format(u.t.H9Jxp6, { maxSlots: t.getMaxRoleSubscriptionEmojiSlots() })
                }),
                (0, i.jsx)(l.Spacer, { size: 16 }),
                (0, i.jsx)(o.Z, {
                    onChange: (e, r) => {
                        null != e &&
                            null != r &&
                            (0, l.openModalLazy)(async () => {
                                let { CreateEmojiWithRolesModal: l } = await n.e('9007').then(n.bind(n, 604623));
                                return (n) =>
                                    (0, i.jsx)(l, {
                                        ...n,
                                        data: e,
                                        file: r,
                                        guildId: t.id
                                    });
                            });
                    },
                    buttonCTA: u.intl.string(u.t.AuPtoq),
                    submitting: m,
                    disabled: x || m || 0 === g
                }),
                (0, i.jsx)(l.Spacer, { size: 24 }),
                (0, i.jsx)(a.L3, {
                    title: u.intl.string(u.t.lu1ZQ0),
                    maxSlots: t.getMaxRoleSubscriptionEmojiSlots(),
                    emojiCount: h.length
                }),
                (0, i.jsx)(a.FT, {
                    guild: t,
                    emojis: h,
                    onEdit: (e, t) => {
                        (0, l.openModalLazy)(async () => {
                            let { UpdateEmojiRolesModal: r } = await n.e('9007').then(n.bind(n, 604623));
                            return (n) =>
                                (0, i.jsx)(r, {
                                    ...n,
                                    emoji: e,
                                    guildId: t
                                });
                        });
                    },
                    editingDisabled: x
                })
            ]
        })
    });
}
