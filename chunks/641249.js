n.d(t, { Z: () => p }), n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    s = n(430824),
    a = n(723047),
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
        [p, _] = c.XZ(e, t),
        C = (0, d.Z)(t, e),
        { setCurrentTab: f } = (0, h.dw)(),
        v = () => f(h.ue.EMOJIS),
        N = (0, r.e7)([s.Z], () => s.Z.getGuild(t)),
        j = null == N ? void 0 : N.getMaxRoleSubscriptionEmojiSlots();
    function I(e) {
        null == p ? _(new Set(e)) : _(new Set([...p, ...e]));
    }
    function E(e) {
        let t = new Set(p);
        t.delete(e), _(t);
    }
    let b = (0, a.mY)();
    return (0, i.jsxs)(l.hjN, {
        title: g.intl.string(g.t.D0qeOz),
        disabled: b,
        children: [
            (0, i.jsxs)(l.R94, {
                type: l.R94.Types.DESCRIPTION,
                className: x.formDescription,
                disabled: b,
                children: [g.intl.format(g.t.zuwel5, { premiumEmojiMaximum: j }), (0, i.jsx)('br', {}), g.intl.format(g.t.sEkgBg, { handleTransitionToManageEmoji: v })]
            }),
            (0, i.jsx)(m.E, {
                tierEmojiIds: p,
                guildId: t,
                onRemoveEmoji: function (e) {
                    e.roles.filter((e) => e !== (null == C ? void 0 : C.id)).length > 0
                        ? E(e.id)
                        : (0, l.ZDy)(async () => {
                              let { default: t } = await n.e('59128').then(n.bind(n, 28564));
                              return (n) =>
                                  (0, i.jsx)(t, {
                                      ...n,
                                      onConfirmDelete: () => {
                                          E(e.id), n.onClose();
                                      }
                                  });
                          });
                }
            }),
            null != p && p.size > 0 ? (0, i.jsx)(l.LZC, { size: 8 }) : null,
            (0, i.jsx)(u.s, {
                onClick: function () {
                    (0, l.ZDy)(async () => {
                        let { EmojiAddModal: e } = await n.e('21112').then(n.bind(n, 301160));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guildId: t,
                                initialTierEmojiIds: p,
                                onSubmit: I,
                                transitionToManageEmoji: () => {
                                    v(), n.onClose();
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
