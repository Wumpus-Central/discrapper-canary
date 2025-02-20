n.d(t, {
    Ux: () => S,
    gS: () => P,
    ww: () => p
}),
    n(789020);
var r = n(192379),
    i = n(399606),
    l = n(230711),
    o = n(906732),
    a = n(18438),
    s = n(314897),
    c = n(271383),
    u = n(430824),
    E = n(496675),
    d = n(914010),
    _ = n(715903),
    N = n(981631),
    I = n(372897),
    T = n(526761),
    O = n(388032);
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
function P(e) {
    return (0, i.cj)(
        [s.default, c.ZP, d.Z, u.Z],
        () => {
            let t = {
                    nick: void 0,
                    bio: void 0
                },
                n = d.Z.getGuildId(),
                r = null != e ? e : n,
                i = u.Z.getGuild(r);
            if (null == i || null == r) return t;
            let l = s.default.getId(),
                o = c.ZP.getMember(r, l),
                a = (0, _.Ow)(null == o ? void 0 : o.flags);
            if (0 === a.size) return t;
            if (a.has(I.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
                if (null == e) {
                    var E;
                    t.nick = [O.NW.formatToPlainString(O.t.WBUh3N, { guildName: null !== (E = i.name) && void 0 !== E ? E : '' })];
                } else t.nick = [O.NW.string(O.t.EPZCrK)];
            }
            return a.has(I.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [O.NW.string(O.t.dZh1v7)]), t;
        },
        [e]
    );
}
function p(e) {
    let { guildId: t, scrollPosition: n, analyticsLocation: s, analyticsLocations: c, openWithoutBackstack: d } = e,
        { analyticsLocations: _ } = (0, o.ZP)(),
        I = (0, i.e7)([u.Z], () => u.Z.getGuild(t), [t]),
        O = (0, i.e7)([E.Z], () => null != I && E.Z.can(N.Plq.CHANGE_NICKNAME, I), [I]);
    return [
        r.useCallback(() => {
            if (null == I) return;
            let e = N.oAB.PROFILE_CUSTOMIZATION,
                t = T.NB.GUILD;
            O ? (0, a.Fq)(I, null != c ? c : _) : (t = T.NB.USER_PROFILE),
                l.Z.open(e, t, {
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: c,
                    openWithoutBackstack: d
                });
        }, [O, n, s, c, d, I, _]),
        O
    ];
}
