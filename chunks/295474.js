(n.d(t, {
    Ux: () => g,
    gS: () => E,
    ww: () => b
}),
    n(997841));
var r = n(73800),
    i = n(399606),
    o = n(230711),
    a = n(18438),
    s = n(314897),
    l = n(271383),
    c = n(430824),
    u = n(496675),
    d = n(914010),
    f = n(715903),
    _ = n(981631),
    p = n(372897),
    h = n(526761),
    m = n(388032);
function g(e) {
    return (0, i.e7)(
        [s.default, l.ZP],
        () => {
            if (null == e) return !1;
            let t = s.default.getId();
            return (0, f.EY)(l.ZP.getMember(e, t));
        },
        [e]
    );
}
function E(e) {
    return (0, i.cj)(
        [s.default, l.ZP, d.Z, c.Z],
        () => {
            let t = {
                    nick: void 0,
                    bio: void 0
                },
                n = d.Z.getGuildId(),
                r = null != e ? e : n,
                i = c.Z.getGuild(r);
            if (null == i || null == r) return t;
            let o = s.default.getId(),
                a = l.ZP.getMember(r, o),
                u = (0, f.Ow)(null == a ? void 0 : a.flags);
            if (0 === u.size) return t;
            if (u.has(p.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
                if (null == e) {
                    var _;
                    t.nick = [m.intl.formatToPlainString(m.t.WBUh3N, { guildName: null != (_ = i.name) ? _ : '' })];
                } else t.nick = [m.intl.string(m.t.EPZCrK)];
            return (u.has(p.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [m.intl.string(m.t.dZh1v7)]), t);
        },
        [e]
    );
}
function b(e) {
    let { guildId: t, scrollPosition: n, analyticsLocation: s, analyticsLocations: l, openWithoutBackstack: d } = e,
        f = (0, i.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        p = (0, i.e7)([u.Z], () => null != f && u.Z.can(_.Plq.CHANGE_NICKNAME, f), [f]);
    return [
        r.useCallback(() => {
            if (null == f) return;
            let e = _.oAB.PROFILE_CUSTOMIZATION,
                t = h.NB.GUILD;
            (p ? (0, a.Fq)(f) : (t = h.NB.USER_PROFILE),
                o.Z.open(e, t, {
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: l,
                    openWithoutBackstack: d
                }));
        }, [p, n, s, l, d, f]),
        p
    ];
}
