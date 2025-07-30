(n.d(t, {
    Ux: () => I,
    gS: () => h,
    ww: () => T
}),
    n(997841));
var r = n(73800),
    i = n(399606),
    l = n(230711),
    a = n(18438),
    o = n(314897),
    s = n(271383),
    c = n(430824),
    u = n(496675),
    d = n(914010),
    _ = n(715903),
    E = n(981631),
    p = n(372897),
    O = n(526761),
    f = n(388032);
function I(e) {
    return (0, i.e7)(
        [o.default, s.ZP],
        () => {
            if (null == e) return !1;
            let t = o.default.getId();
            return (0, _.EY)(s.ZP.getMember(e, t));
        },
        [e]
    );
}
function h(e) {
    return (0, i.cj)(
        [o.default, s.ZP, d.Z, c.Z],
        () => {
            let t = {
                    nick: void 0,
                    bio: void 0
                },
                n = d.Z.getGuildId(),
                r = null != e ? e : n,
                i = c.Z.getGuild(r);
            if (null == i || null == r) return t;
            let l = o.default.getId(),
                a = s.ZP.getMember(r, l),
                u = (0, _.Ow)(null == a ? void 0 : a.flags);
            if (0 === u.size) return t;
            if (u.has(p.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
                if (null == e) {
                    var E;
                    t.nick = [f.intl.formatToPlainString(f.t.WBUh3N, { guildName: null != (E = i.name) ? E : '' })];
                } else t.nick = [f.intl.string(f.t.EPZCrK)];
            return (u.has(p.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [f.intl.string(f.t.dZh1v7)]), t);
        },
        [e]
    );
}
function T(e) {
    let { guildId: t, scrollPosition: n, analyticsLocation: o, analyticsLocations: s, openWithoutBackstack: d } = e,
        _ = (0, i.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        p = (0, i.e7)([u.Z], () => null != _ && u.Z.can(E.Plq.CHANGE_NICKNAME, _), [_]);
    return [
        r.useCallback(() => {
            if (null == _) return;
            let e = E.oAB.PROFILE_CUSTOMIZATION,
                t = O.NB.GUILD;
            (p ? (0, a.Fq)(_) : (t = O.NB.USER_PROFILE),
                l.Z.open(e, t, {
                    scrollPosition: n,
                    analyticsLocation: o,
                    analyticsLocations: s,
                    openWithoutBackstack: d
                }));
        }, [p, n, o, s, d, _]),
        p
    ];
}
