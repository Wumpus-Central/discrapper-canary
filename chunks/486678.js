l.d(n, { A: () => g });
var t = l(311907),
    i = l(778712),
    r = l(919395),
    s = l(101058),
    a = l(836602),
    o = l(996988),
    d = l(985253);
let c = (0, i.FT)(d.T[o.d.MODAL_V2].avatarSize),
    u = { pendingThemeColors: void 0, avatarDecorationOverride: void 0, avatarOverride: void 0 };
function g(e) {
    let { user: n, guildId: l, allowEditingInModal: i } = e;
    return (0, t.cf)([a.A], () => {
        if (!i) return u;
        let { pendingThemeColors: e, pendingAvatarDecoration: t, pendingAvatar: o } = a.A.getPendingChanges(l);
        return {
            pendingThemeColors: e,
            avatarDecorationOverride:
                void 0 === t ? void 0 : (0, r.lw)({ userValue: n.avatarDecoration, pendingValue: t, guildId: l }),
            avatarOverride: (0, s.V7)({ userId: n.id, image: o, size: c }),
        };
    }, [n, l, i]);
}
