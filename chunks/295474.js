n.d(t, {
    Ux: () => g,
    gS: () => E,
    ww: () => b,
}),
    n(997841);
var r = n(473749),
    i = n(399606),
    a = n(18438),
    o = n(313789),
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
    return (0, i.e7)([s.default, l.ZP], () => {
        if (null == e) return !1;
        let t = s.default.getId();
        return (0, f.EY)(l.ZP.getMember(e, t));
    }, [e]);
}
function E(e) {
    return (0, i.cj)([s.default, l.ZP, d.Z, c.Z], () => {
        let t = {
                nick: void 0,
                bio: void 0,
            },
            n = d.Z.getGuildId(),
            r = null != e ? e : n,
            i = c.Z.getGuild(r);
        if (null == i || null == r) return t;
        let a = s.default.getId(),
            o = l.ZP.getMember(r, a),
            u = (0, f.Ow)(null == o ? void 0 : o.flags);
        if (0 === u.size) return t;
        if (u.has(p.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
            if (null == e) {
                var _;
                t.nick = [m.intl.formatToPlainString(m.t.WBUh3O, { guildName: null != (_ = i.name) ? _ : "" })];
            } else t.nick = [m.intl.string(m.t.EPZCrM)];
        return u.has(p.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [m.intl.string(m.t.dZh1vz)]), t;
    }, [e]);
}
function b(e) {
    let { guildId: t, scrollPosition: s, analyticsLocations: l } = e,
        d = (0, i.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        f = (0, i.e7)([u.Z], () => null != d && u.Z.can(_.Plq.CHANGE_NICKNAME, d), [d]);
    return [
        r.useCallback(() => {
            if (null == d) return;
            let e = _.oAB.PROFILE_CUSTOMIZATION,
                t = h.NB.GUILD;
            f ? (0, a.Fq)(d) : (t = h.NB.USER_PROFILE);
            {
                let { openUserSettings: r } = n(518596);
                r(o.n.PROFILE_PANEL, {
                    section: e,
                    subsection: t,
                    scrollPosition: s,
                    analyticsLocations: l,
                });
            }
        }, [f, s, l, d]),
        f,
    ];
}
