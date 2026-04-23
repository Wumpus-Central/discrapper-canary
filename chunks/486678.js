t.d(n, { A: () => g });
var l = t(311907),
    i = t(778712),
    r = t(919395),
    a = t(101058),
    s = t(836602),
    o = t(996988),
    d = t(985253);
let u = (0, i.FT)(d.T[o.d.MODAL_V2].avatarSize),
    c = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        profileEffectOverride: void 0,
    };
function g(e) {
    let { user: n, guildId: t, allowEditingInModal: i } = e;
    return (0, l.cf)([s.A], () => {
        if (!i) return c;
        let {
            pendingThemeColors: e,
            pendingAvatarDecoration: l,
            pendingAvatar: o,
            pendingBanner: d,
            pendingProfileEffect: g,
        } = s.A.getPendingChanges(t);
        return {
            pendingThemeColors: e,
            avatarDecorationOverride:
                void 0 === l ? void 0 : (0, r.lw)({ userValue: n.avatarDecoration, pendingValue: l, guildId: t }),
            avatarOverride: (0, a.V7)({ userId: n.id, image: o, size: u }),
            bannerOverride: d,
            profileEffectOverride: g,
        };
    }, [n, t, i]);
}
