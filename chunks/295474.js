e.d(n, {
    Ux: function () {
        return C;
    },
    gS: function () {
        return A;
    },
    ww: function () {
        return E;
    }
}),
    e(789020);
var i = e(192379),
    r = e(399606),
    l = e(230711),
    o = e(906732),
    a = e(18438),
    s = e(314897),
    u = e(271383),
    d = e(430824),
    c = e(496675),
    f = e(914010),
    g = e(715903),
    h = e(981631),
    I = e(372897),
    N = e(526761),
    _ = e(388032);
function C(t) {
    return (0, r.e7)(
        [s.default, u.ZP],
        () => {
            if (null == t) return !1;
            let n = s.default.getId();
            return (0, g.EY)(u.ZP.getMember(t, n));
        },
        [t]
    );
}
function A(t) {
    return (0, r.cj)(
        [s.default, u.ZP, f.Z, d.Z],
        () => {
            let n = {
                    nick: void 0,
                    bio: void 0
                },
                e = f.Z.getGuildId(),
                i = null != t ? t : e,
                r = d.Z.getGuild(i);
            if (null == r || null == i) return n;
            let l = s.default.getId(),
                o = u.ZP.getMember(i, l),
                a = (0, g.Ow)(null == o ? void 0 : o.flags);
            if (0 === a.size) return n;
            if (a.has(I.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
                if (null == t) {
                    var c;
                    n.nick = [_.intl.formatToPlainString(_.t.WBUh3N, { guildName: null !== (c = r.name) && void 0 !== c ? c : '' })];
                } else n.nick = [_.intl.string(_.t.EPZCrK)];
            }
            return a.has(I.q.AUTOMOD_QUARANTINED_BIO) && (n.bio = [_.intl.string(_.t.dZh1v7)]), n;
        },
        [t]
    );
}
function E(t) {
    let { guildId: n, scrollPosition: e, analyticsLocation: s, analyticsLocations: u, openWithoutBackstack: f } = t,
        { analyticsLocations: g } = (0, o.ZP)(),
        I = (0, r.e7)([d.Z], () => d.Z.getGuild(n), [n]),
        _ = (0, r.e7)([c.Z], () => null != I && c.Z.can(h.Plq.CHANGE_NICKNAME, I), [I]);
    return [
        i.useCallback(() => {
            if (null == I) return;
            let t = h.oAB.PROFILE_CUSTOMIZATION,
                n = N.NB.GUILD;
            _ ? (0, a.Fq)(I, null != u ? u : g) : (n = N.NB.USER_PROFILE);
            l.Z.open(t, n, {
                scrollPosition: e,
                analyticsLocation: s,
                analyticsLocations: u,
                openWithoutBackstack: f
            });
        }, [_, e, s, u, f, I, g]),
        _
    ];
}
