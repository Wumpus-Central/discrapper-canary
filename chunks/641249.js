n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(430824),
    s = n(723047),
    o = n(727843),
    c = n(290348),
    d = n(971792),
    u = n(155758),
    m = n(331146),
    h = n(798680),
    g = n(388032),
    x = n(83701);
function p() {
    let { editStateId: e, guildId: t } = (0, o.N)(),
        [p, f] = c.XZ(e, t),
        C = (0, d.Z)(t, e),
        { setCurrentTab: v } = (0, h.dw)(),
        _ = () => v(h.ue.EMOJIS),
        N = (0, r.e7)([a.Z], () => a.Z.getGuild(t)),
        I = null == N ? void 0 : N.getMaxRoleSubscriptionEmojiSlots();
    function T(e) {
        null == p ? f(new Set(e)) : f(new Set([...p, ...e]));
    }
    function j(e) {
        let t = new Set(p);
        t.delete(e), f(t);
    }
    let b = (0, s.mY)();
    return (0, i.jsxs)(l.FormSection, {
        title: g.intl.string(g.t.D0qeOz),
        disabled: b,
        children: [
            (0, i.jsxs)(l.FormText, {
                type: l.FormText.Types.DESCRIPTION,
                className: x.formDescription,
                disabled: b,
                children: [g.intl.format(g.t.zuwel5, { premiumEmojiMaximum: I }), (0, i.jsx)('br', {}), g.intl.format(g.t.sEkgBg, { handleTransitionToManageEmoji: _ })]
            }),
            (0, i.jsx)(m.E, {
                tierEmojiIds: p,
                guildId: t,
                onRemoveEmoji: function (e) {
                    e.roles.filter((e) => e !== (null == C ? void 0 : C.id)).length > 0
                        ? j(e.id)
                        : (0, l.openModalLazy)(async () => {
                              let { default: t } = await n.e('59128').then(n.bind(n, 28564));
                              return (n) =>
                                  (0, i.jsx)(t, {
                                      ...n,
                                      onConfirmDelete: () => {
                                          j(e.id), n.onClose();
                                      }
                                  });
                          });
                }
            }),
            null != p && p.size > 0 ? (0, i.jsx)(l.Spacer, { size: 8 }) : null,
            (0, i.jsx)(u.s, {
                onClick: function () {
                    (0, l.openModalLazy)(async () => {
                        let { EmojiAddModal: e } = await n.e('21112').then(n.bind(n, 301160));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guildId: t,
                                initialTierEmojiIds: p,
                                onSubmit: T,
                                transitionToManageEmoji: () => {
                                    _(), n.onClose();
                                }
                            });
                    });
                },
                disabled: b,
                children: g.intl.string(g.t.ouOOV1)
            })
        ]
    });
}
