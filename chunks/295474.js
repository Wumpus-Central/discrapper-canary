(n.d(t, {
    Ux: () => g,
    gS: () => f,
    ww: () => C
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
    h = n(715903),
    _ = n(981631),
    E = n(372897),
    p = n(526761),
    I = n(388032);
function g(e) {
    return (0, r.e7)(
        [s.default, a.ZP],
        () => {
            if (null == e) return !1;
            let t = s.default.getId();
            return (0, h.EY)(a.ZP.getMember(e, t));
        },
        [e]
    );
}
function f(e) {
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
                d = (0, h.Ow)(null == o ? void 0 : o.flags);
            if (0 === d.size) return t;
            if (d.has(E.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
                if (null == e) {
                    var _;
                    t.nick = [I.intl.formatToPlainString(I.t.WBUh3N, { guildName: null != (_ = r.name) ? _ : '' })];
                } else t.nick = [I.intl.string(I.t.EPZCrK)];
            return (d.has(E.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [I.intl.string(I.t.dZh1v7)]), t);
        },
        [e]
    );
}
function C(e) {
    let { guildId: t, scrollPosition: n, analyticsLocation: s, analyticsLocations: a, openWithoutBackstack: u } = e,
        h = (0, r.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        E = (0, r.e7)([d.Z], () => null != h && d.Z.can(_.Plq.CHANGE_NICKNAME, h), [h]);
    return [
        i.useCallback(() => {
            if (null == h) return;
            let e = _.oAB.PROFILE_CUSTOMIZATION,
                t = p.NB.GUILD;
            (E ? (0, o.Fq)(h) : (t = p.NB.USER_PROFILE),
                l.Z.open(e, t, {
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: a,
                    openWithoutBackstack: u
                }));
        }, [E, n, s, a, u, h]),
        E
    ];
}
