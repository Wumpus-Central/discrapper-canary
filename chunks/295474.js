n.d(t, {
    Ux: () => N,
    gS: () => S,
    ww: () => p
}),
    n(997841);
var r = n(73800),
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
    O = n(372897),
    I = n(526761),
    T = n(388032);
function N(e) {
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
            if (u.has(O.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
                if (null == e) {
                    var _;
                    t.nick = [T.intl.formatToPlainString(T.t.WBUh3N, { guildName: null != (_ = i.name) ? _ : '' })];
                } else t.nick = [T.intl.string(T.t.EPZCrK)];
            return u.has(O.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [T.intl.string(T.t.dZh1v7)]), t;
        },
        [e]
    );
}
function p(e) {
    let { guildId: t, scrollPosition: n, analyticsLocation: a, analyticsLocations: s, openWithoutBackstack: d } = e,
        E = (0, i.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        O = (0, i.e7)([u.Z], () => null != E && u.Z.can(_.Plq.CHANGE_NICKNAME, E), [E]);
    return [
        r.useCallback(() => {
            if (null == E) return;
            let e = _.oAB.PROFILE_CUSTOMIZATION,
                t = I.NB.GUILD;
            O ? (0, o.Fq)(E) : (t = I.NB.USER_PROFILE),
                l.Z.open(e, t, {
                    scrollPosition: n,
                    analyticsLocation: a,
                    analyticsLocations: s,
                    openWithoutBackstack: d
                });
        }, [O, n, a, s, d, E]),
        O
    ];
}
