n.d(t, {
    Ux: function () {
        return E;
    },
    gS: function () {
        return C;
    },
    ww: function () {
        return I;
    }
}),
    n(789020);
var i = n(192379),
    r = n(399606),
    l = n(230711),
    a = n(906732),
    o = n(18438),
    s = n(314897),
    c = n(271383),
    u = n(430824),
    d = n(496675),
    m = n(914010),
    h = n(715903),
    f = n(981631),
    p = n(372897),
    _ = n(526761),
    g = n(388032);
function E(e) {
    return (0, r.e7)(
        [s.default, c.ZP],
        () => {
            if (null == e) return !1;
            let t = s.default.getId();
            return (0, h.EY)(c.ZP.getMember(e, t));
        },
        [e]
    );
}
function C(e) {
    return (0, r.cj)(
        [s.default, c.ZP, m.Z, u.Z],
        () => {
            let t = {
                    nick: void 0,
                    bio: void 0
                },
                n = m.Z.getGuildId(),
                i = null != e ? e : n,
                r = u.Z.getGuild(i);
            if (null == r || null == i) return t;
            let l = s.default.getId(),
                a = c.ZP.getMember(i, l),
                o = (0, h.Ow)(null == a ? void 0 : a.flags);
            if (0 === o.size) return t;
            if (o.has(p.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
                if (null == e) {
                    var d;
                    t.nick = [g.intl.formatToPlainString(g.t.WBUh3N, { guildName: null !== (d = r.name) && void 0 !== d ? d : '' })];
                } else t.nick = [g.intl.string(g.t.EPZCrK)];
            }
            return o.has(p.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [g.intl.string(g.t.dZh1v7)]), t;
        },
        [e]
    );
}
function I(e) {
    let { guildId: t, scrollPosition: n, analyticsLocation: s, analyticsLocations: c, openWithoutBackstack: m } = e,
        { analyticsLocations: h } = (0, a.ZP)(),
        p = (0, r.e7)([u.Z], () => u.Z.getGuild(t), [t]),
        g = (0, r.e7)([d.Z], () => null != p && d.Z.can(f.Plq.CHANGE_NICKNAME, p), [p]);
    return [
        i.useCallback(() => {
            if (null == p) return;
            let e = f.oAB.PROFILE_CUSTOMIZATION,
                t = _.NB.GUILD;
            g ? (0, o.Fq)(p, null != c ? c : h) : (t = _.NB.USER_PROFILE);
            l.Z.open(e, t, {
                scrollPosition: n,
                analyticsLocation: s,
                analyticsLocations: c,
                openWithoutBackstack: m
            });
        }, [g, n, s, c, m, p, h]),
        g
    ];
}
