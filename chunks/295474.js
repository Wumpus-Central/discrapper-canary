n.d(t, {
    Ux: () => S,
    gS: () => R,
    ww: () => C
}),
    n(789020);
var i = n(192379),
    l = n(399606),
    r = n(230711),
    a = n(906732),
    s = n(18438),
    o = n(314897),
    c = n(271383),
    u = n(430824),
    E = n(496675),
    d = n(914010),
    _ = n(715903),
    I = n(981631),
    T = n(372897),
    N = n(526761),
    A = n(388032);
function S(e) {
    return (0, l.e7)(
        [o.default, c.ZP],
        () => {
            if (null == e) return !1;
            let t = o.default.getId();
            return (0, _.EY)(c.ZP.getMember(e, t));
        },
        [e]
    );
}
function R(e) {
    return (0, l.cj)(
        [o.default, c.ZP, d.Z, u.Z],
        () => {
            let t = {
                    nick: void 0,
                    bio: void 0
                },
                n = d.Z.getGuildId(),
                i = null != e ? e : n,
                l = u.Z.getGuild(i);
            if (null == l || null == i) return t;
            let r = o.default.getId(),
                a = c.ZP.getMember(i, r),
                s = (0, _.Ow)(null == a ? void 0 : a.flags);
            if (0 === s.size) return t;
            if (s.has(T.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
                if (null == e) {
                    var E;
                    t.nick = [A.intl.formatToPlainString(A.t.WBUh3N, { guildName: null !== (E = l.name) && void 0 !== E ? E : '' })];
                } else t.nick = [A.intl.string(A.t.EPZCrK)];
            }
            return s.has(T.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [A.intl.string(A.t.dZh1v7)]), t;
        },
        [e]
    );
}
function C(e) {
    let { guildId: t, scrollPosition: n, analyticsLocation: o, analyticsLocations: c, openWithoutBackstack: d } = e,
        { analyticsLocations: _ } = (0, a.ZP)(),
        T = (0, l.e7)([u.Z], () => u.Z.getGuild(t), [t]),
        A = (0, l.e7)([E.Z], () => null != T && E.Z.can(I.Plq.CHANGE_NICKNAME, T), [T]);
    return [
        i.useCallback(() => {
            if (null == T) return;
            let e = I.oAB.PROFILE_CUSTOMIZATION,
                t = N.NB.GUILD;
            A ? (0, s.Fq)(T, null != c ? c : _) : (t = N.NB.USER_PROFILE),
                r.Z.open(e, t, {
                    scrollPosition: n,
                    analyticsLocation: o,
                    analyticsLocations: c,
                    openWithoutBackstack: d
                });
        }, [A, n, o, c, d, T, _]),
        A
    ];
}
