n.d(t, {
    Ux: () => S,
    gS: () => p,
    ww: () => A
}),
    n(997841);
var r = n(192379),
    i = n(399606),
    l = n(230711),
    o = n(906732),
    a = n(18438),
    s = n(314897),
    c = n(271383),
    u = n(430824),
    d = n(496675),
    E = n(914010),
    _ = n(715903),
    I = n(981631),
    O = n(372897),
    N = n(526761),
    T = n(388032);
function S(e) {
    return (0, i.e7)(
        [s.default, c.ZP],
        () => {
            if (null == e) return !1;
            let t = s.default.getId();
            return (0, _.EY)(c.ZP.getMember(e, t));
        },
        [e]
    );
}
function p(e) {
    return (0, i.cj)(
        [s.default, c.ZP, E.Z, u.Z],
        () => {
            let t = {
                    nick: void 0,
                    bio: void 0
                },
                n = E.Z.getGuildId(),
                r = null != e ? e : n,
                i = u.Z.getGuild(r);
            if (null == i || null == r) return t;
            let l = s.default.getId(),
                o = c.ZP.getMember(r, l),
                a = (0, _.Ow)(null == o ? void 0 : o.flags);
            if (0 === a.size) return t;
            if (a.has(O.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
                if (null == e) {
                    var d;
                    t.nick = [T.NW.formatToPlainString(T.t.WBUh3N, { guildName: null != (d = i.name) ? d : '' })];
                } else t.nick = [T.NW.string(T.t.EPZCrK)];
            return a.has(O.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [T.NW.string(T.t.dZh1v7)]), t;
        },
        [e]
    );
}
function A(e) {
    let { guildId: t, scrollPosition: n, analyticsLocation: s, analyticsLocations: c, openWithoutBackstack: E } = e,
        { analyticsLocations: _ } = (0, o.ZP)(),
        O = (0, i.e7)([u.Z], () => u.Z.getGuild(t), [t]),
        T = (0, i.e7)([d.Z], () => null != O && d.Z.can(I.Plq.CHANGE_NICKNAME, O), [O]);
    return [
        r.useCallback(() => {
            if (null == O) return;
            let e = I.oAB.PROFILE_CUSTOMIZATION,
                t = N.NB.GUILD;
            T ? (0, a.Fq)(O, null != c ? c : _) : (t = N.NB.USER_PROFILE),
                l.Z.open(e, t, {
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: c,
                    openWithoutBackstack: E
                });
        }, [T, n, s, c, E, O, _]),
        T
    ];
}
