n.d(t, {
    Ux: () => T,
    gS: () => S,
    ww: () => N
}),
    n(997841);
var r = n(73800),
    i = n(399606),
    l = n(230711),
    o = n(18438),
    a = n(314897),
    c = n(271383),
    s = n(430824),
    u = n(496675),
    d = n(914010),
    _ = n(715903),
    E = n(981631),
    O = n(372897),
    I = n(526761),
    p = n(388032);
function T(e) {
    return (0, i.e7)(
        [a.default, c.ZP],
        () => {
            if (null == e) return !1;
            let t = a.default.getId();
            return (0, _.EY)(c.ZP.getMember(e, t));
        },
        [e]
    );
}
function S(e) {
    return (0, i.cj)(
        [a.default, c.ZP, d.Z, s.Z],
        () => {
            let t = {
                    nick: void 0,
                    bio: void 0
                },
                n = d.Z.getGuildId(),
                r = null != e ? e : n,
                i = s.Z.getGuild(r);
            if (null == i || null == r) return t;
            let l = a.default.getId(),
                o = c.ZP.getMember(r, l),
                u = (0, _.Ow)(null == o ? void 0 : o.flags);
            if (0 === u.size) return t;
            if (u.has(O.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
                if (null == e) {
                    var E;
                    t.nick = [p.intl.formatToPlainString(p.t.WBUh3N, { guildName: null != (E = i.name) ? E : '' })];
                } else t.nick = [p.intl.string(p.t.EPZCrK)];
            return u.has(O.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [p.intl.string(p.t.dZh1v7)]), t;
        },
        [e]
    );
}
function N(e) {
    let { guildId: t, scrollPosition: n, analyticsLocation: a, analyticsLocations: c, openWithoutBackstack: d } = e,
        _ = (0, i.e7)([s.Z], () => s.Z.getGuild(t), [t]),
        O = (0, i.e7)([u.Z], () => null != _ && u.Z.can(E.Plq.CHANGE_NICKNAME, _), [_]);
    return [
        r.useCallback(() => {
            if (null == _) return;
            let e = E.oAB.PROFILE_CUSTOMIZATION,
                t = I.NB.GUILD;
            O ? (0, o.Fq)(_) : (t = I.NB.USER_PROFILE),
                l.Z.open(e, t, {
                    scrollPosition: n,
                    analyticsLocation: a,
                    analyticsLocations: c,
                    openWithoutBackstack: d
                });
        }, [O, n, a, c, d, _]),
        O
    ];
}
