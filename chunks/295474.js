n.d(t, {
    Ux: () => T,
    gS: () => S,
    ww: () => p
}),
    n(997841);
var r = n(192379),
    i = n(399606),
    l = n(230711),
    o = n(18438),
    a = n(314897),
    s = n(271383),
    c = n(430824),
    u = n(496675),
    d = n(914010),
    E = n(715903),
    _ = n(981631),
    I = n(372897),
    O = n(526761),
    N = n(388032);
function T(e) {
    return (0, i.e7)(
        [a.default, s.ZP],
        () => {
            if (null == e) return !1;
            let t = a.default.getId();
            return (0, E.EY)(s.ZP.getMember(e, t));
        },
        [e]
    );
}
function S(e) {
    return (0, i.cj)(
        [a.default, s.ZP, d.Z, c.Z],
        () => {
            let t = {
                    nick: void 0,
                    bio: void 0
                },
                n = d.Z.getGuildId(),
                r = null != e ? e : n,
                i = c.Z.getGuild(r);
            if (null == i || null == r) return t;
            let l = a.default.getId(),
                o = s.ZP.getMember(r, l),
                u = (0, E.Ow)(null == o ? void 0 : o.flags);
            if (0 === u.size) return t;
            if (u.has(I.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
                if (null == e) {
                    var _;
                    t.nick = [N.NW.formatToPlainString(N.t.WBUh3N, { guildName: null != (_ = i.name) ? _ : '' })];
                } else t.nick = [N.NW.string(N.t.EPZCrK)];
            return u.has(I.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [N.NW.string(N.t.dZh1v7)]), t;
        },
        [e]
    );
}
function p(e) {
    let { guildId: t, scrollPosition: n, analyticsLocation: a, analyticsLocations: s, openWithoutBackstack: d } = e,
        E = (0, i.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        I = (0, i.e7)([u.Z], () => null != E && u.Z.can(_.Plq.CHANGE_NICKNAME, E), [E]);
    return [
        r.useCallback(() => {
            if (null == E) return;
            let e = _.oAB.PROFILE_CUSTOMIZATION,
                t = O.NB.GUILD;
            I ? (0, o.Fq)(E) : (t = O.NB.USER_PROFILE),
                l.Z.open(e, t, {
                    scrollPosition: n,
                    analyticsLocation: a,
                    analyticsLocations: s,
                    openWithoutBackstack: d
                });
        }, [I, n, a, s, d, E]),
        I
    ];
}
