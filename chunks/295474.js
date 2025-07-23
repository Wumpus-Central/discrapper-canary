(n.d(t, {
    Ux: () => C,
    gS: () => O,
    ww: () => g
}),
    n(997841));
var i = n(73800),
    r = n(399606),
    l = n(230711),
    o = n(18438),
    s = n(314897),
    a = n(271383),
    c = n(430824),
    d = n(496675),
    u = n(914010),
    _ = n(715903),
    h = n(981631),
    E = n(372897),
    I = n(526761),
    p = n(388032);
function C(e) {
    return (0, r.e7)(
        [s.default, a.ZP],
        () => {
            if (null == e) return !1;
            let t = s.default.getId();
            return (0, _.EY)(a.ZP.getMember(e, t));
        },
        [e]
    );
}
function O(e) {
    return (0, r.cj)(
        [s.default, a.ZP, u.Z, c.Z],
        () => {
            let t = {
                    nick: void 0,
                    bio: void 0
                },
                n = u.Z.getGuildId(),
                i = null != e ? e : n,
                r = c.Z.getGuild(i);
            if (null == r || null == i) return t;
            let l = s.default.getId(),
                o = a.ZP.getMember(i, l),
                d = (0, _.Ow)(null == o ? void 0 : o.flags);
            if (0 === d.size) return t;
            if (d.has(E.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
                if (null == e) {
                    var h;
                    t.nick = [p.intl.formatToPlainString(p.t.WBUh3N, { guildName: null != (h = r.name) ? h : '' })];
                } else t.nick = [p.intl.string(p.t.EPZCrK)];
            return (d.has(E.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [p.intl.string(p.t.dZh1v7)]), t);
        },
        [e]
    );
}
function g(e) {
    let { guildId: t, scrollPosition: n, analyticsLocation: s, analyticsLocations: a, openWithoutBackstack: u } = e,
        _ = (0, r.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        E = (0, r.e7)([d.Z], () => null != _ && d.Z.can(h.Plq.CHANGE_NICKNAME, _), [_]);
    return [
        i.useCallback(() => {
            if (null == _) return;
            let e = h.oAB.PROFILE_CUSTOMIZATION,
                t = I.NB.GUILD;
            (E ? (0, o.Fq)(_) : (t = I.NB.USER_PROFILE),
                l.Z.open(e, t, {
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: a,
                    openWithoutBackstack: u
                }));
        }, [E, n, s, a, u, _]),
        E
    ];
}
