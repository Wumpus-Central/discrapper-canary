t.d(l, { A: () => m });
var n = t(311907),
    i = t(397927),
    s = t(919395),
    a = t(101058),
    r = t(836602),
    o = t(996988),
    d = t(985253);
let c = (0, i.FT9)(d.T[o.d.MODAL_V2].avatarSize),
    u = { pendingThemeColors: void 0, avatarDecorationOverride: void 0, avatarOverride: void 0 };
function m(e) {
    let { user: l, guildId: t, allowEditingInModal: i } = e;
    return (0, n.cf)([r.A], () => {
        if (!i) return u;
        let { pendingThemeColors: e, pendingAvatarDecoration: n, pendingAvatar: o } = r.A.getPendingChanges(t);
        return {
            pendingThemeColors: e,
            avatarDecorationOverride:
                void 0 === n ? void 0 : (0, s.lw)({ userValue: l.avatarDecoration, pendingValue: n, guildId: t }),
            avatarOverride: (0, a.V7)({ userId: l.id, image: o, size: c }),
        };
    }, [l, t, i]);
}
