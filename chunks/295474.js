n.d(t, {
    Ux: () => p,
    gS: () => N,
    ww: () => f,
}),
    n(997841);
var r = n(73800),
    i = n(399606),
    l = n(230711),
    a = n(18438),
    o = n(314897),
    c = n(271383),
    s = n(430824),
    u = n(496675),
    d = n(914010),
    _ = n(715903),
    E = n(981631),
    I = n(372897),
    T = n(526761),
    O = n(388032);
function p(e) {
    return (0, i.e7)([o.default, c.ZP], () => {
        if (null == e) return !1;
        let t = o.default.getId();
        return (0, _.EY)(c.ZP.getMember(e, t));
    }, [e]);
}
function N(e) {
    return (0, i.cj)([o.default, c.ZP, d.Z, s.Z], () => {
        let t = {
                nick: void 0,
                bio: void 0,
            },
            n = d.Z.getGuildId(),
            r = null != e ? e : n,
            i = s.Z.getGuild(r);
        if (null == i || null == r) return t;
        let l = o.default.getId(),
            a = c.ZP.getMember(r, l),
            u = (0, _.Ow)(null == a ? void 0 : a.flags);
        if (0 === u.size) return t;
        if (u.has(I.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
            if (null == e) {
                var E;
                t.nick = [O.intl.formatToPlainString(O.t.WBUh3N, { guildName: null != (E = i.name) ? E : "" })];
            } else t.nick = [O.intl.string(O.t.EPZCrK)];
        return u.has(I.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [O.intl.string(O.t.dZh1v7)]), t;
    }, [e]);
}
function f(e) {
    let { guildId: t, scrollPosition: n, analyticsLocation: o, analyticsLocations: c, openWithoutBackstack: d } = e,
        _ = (0, i.e7)([s.Z], () => s.Z.getGuild(t), [t]),
        I = (0, i.e7)([u.Z], () => null != _ && u.Z.can(E.Plq.CHANGE_NICKNAME, _), [_]);
    return [
        r.useCallback(() => {
            if (null == _) return;
            let e = E.oAB.PROFILE_CUSTOMIZATION,
                t = T.NB.GUILD;
            I ? (0, a.Fq)(_) : (t = T.NB.USER_PROFILE),
                l.Z.open(e, t, {
                    scrollPosition: n,
                    analyticsLocation: o,
                    analyticsLocations: c,
                    openWithoutBackstack: d,
                });
        }, [I, n, o, c, d, _]),
        I,
    ];
}
