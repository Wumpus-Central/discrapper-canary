n.d(t, {
    $U: () => h,
    Jw: () => O,
    Kg: () => E,
    PO: () => I,
    UK: () => T,
    Ys: () => S,
    Zx: () => m,
    bd: () => b,
    f$: () => C,
    gc: () => p,
    gd: () => A,
    mD: () => g,
    xQ: () => y,
}),
    n(539854);
var r = n(647438),
    i = n(442837),
    a = n(809206),
    o = n(676742),
    s = n(594928),
    l = n(18438),
    c = n(778825),
    u = n(350327),
    d = n(621853),
    f = n(271383),
    _ = n(25990);
function p(e) {
    return r.useMemo(() => {
        let t = f.ZP.getMutableAllGuildsAndMembers(),
            n = {};
        for (let i in t) {
            var r;
            let a = null == (r = t[i][e]) ? void 0 : r.avatar;
            null != a && (null == n[a] && (n[a] = []), n[a].push(i));
        }
        return null != n ? Object.entries(n).map((e) => e[1][0]) : [];
    }, [e]);
}
function h(e, t) {
    let n = (0, i.e7)([f.ZP], () => (void 0 === t ? null : f.ZP.getMember(t.id, e.id))),
        r = (0, o.Z)(e.avatarDecoration),
        { pendingUserAvatarDecoration: a, userErrors: s } = (0, i.cj)([_.Z], () => ({
            pendingUserAvatarDecoration: _.Z.getPendingAvatarDecoration(),
            userErrors: _.Z.getErrors().avatarDecoration,
        })),
        { pendingGuildAvatarDecoration: l, guildErrors: u } = (0, i.cj)([c.Z], () => ({
            pendingGuildAvatarDecoration: c.Z.getPendingAvatarDecoration(),
            guildErrors: c.Z.getErrors().avatarDecoration,
        }));
    return {
        userAvatarDecoration: r,
        guildAvatarDecoration: null == n ? void 0 : n.avatarDecoration,
        pendingAvatarDecoration: null != t ? l : a,
        pendingErrors: null != t ? u : s,
    };
}
function m(e, t) {
    var n;
    let r = (0, i.e7)([f.ZP], () => (void 0 === t ? null : f.ZP.getMember(t, e.id))),
        a = e.nameplate,
        { pendingUserNameplate: o, userErrors: s } = (0, i.cj)([_.Z], () => ({
            pendingUserNameplate: _.Z.getPendingNameplate(),
            userErrors: _.Z.getErrors().nameplate,
        })),
        { pendingGuildNameplate: l, guildErrors: u } = (0, i.cj)([c.Z], () => ({
            pendingGuildNameplate: c.Z.getPendingNameplate(),
            guildErrors: c.Z.getErrors().nameplate,
        }));
    return {
        userNameplate: a,
        guildNameplate: null == r || null == (n = r.collectibles) ? void 0 : n.nameplate,
        pendingNameplate: null != t ? l : o,
        pendingErrors: null != t ? u : s,
    };
}
function g(e, t) {
    (0, s.cL)({ location: "useGuildMemberOrUserPendingDisplayNameStyles" }) || (t = void 0);
    let n = (0, i.e7)([f.ZP], () => (void 0 === t || null == e ? null : f.ZP.getMember(t, e.id))),
        { pendingUserDisplayNameStyles: r, userErrors: a } = (0, i.cj)([_.Z], () => ({
            pendingUserDisplayNameStyles: _.Z.getPendingDisplayNameStyles(),
            userErrors: _.Z.getErrors().displayNameStyles,
        })),
        { pendingGuildDisplayNameStyles: o, guildErrors: l } = (0, i.cj)([c.Z], () => ({
            pendingGuildDisplayNameStyles: c.Z.getPendingDisplayNameStyles(),
            guildErrors: c.Z.getErrors().displayNameStyles,
        }));
    return {
        userDisplayNameStyles: null == e ? void 0 : e.displayNameStyles,
        guildDisplayNameStyles: null == n ? void 0 : n.displayNameStyles,
        pendingDisplayNameStyles: null != t ? o : r,
        pendingErrors: null != t ? l : a,
    };
}
function E(e, t) {
    return (0, i.e7)([d.Z], () => {
        var n, r;
        return null == t
            ? null == (n = d.Z.getUserProfile(e.id))
                ? void 0
                : n.profileEffect
            : null == (r = d.Z.getGuildMemberProfile(e.id, t.id))
              ? void 0
              : r.profileEffect;
    });
}
function b(e) {
    return (0, i.cj)(
        [_.Z, c.Z],
        () =>
            null == e
                ? {
                      pendingProfileEffect: _.Z.getPendingProfileEffect(),
                      errors: _.Z.getErrors().profileEffect,
                  }
                : {
                      pendingProfileEffect: c.Z.getPendingProfileEffect(),
                      errors: c.Z.getErrors().profileEffect,
                  },
        [e],
    );
}
function y(e, t) {
    (0, u.Cf)(e === t ? void 0 : e);
}
function O(e, t) {
    (0, a.I5)((null == e ? void 0 : e.imageUri) === t ? void 0 : e);
}
function v(e) {
    return e ? l.cV : a.cV;
}
function I(e, t) {
    v(null != e)(t);
}
function T(e, t, n) {
    if ((null == e ? void 0 : e.skuId) === (null == t ? void 0 : t.skuId))
        return void (null == n ? (0, a.Fu)(void 0) : (0, l.Fu)(void 0));
    null == n ? (0, a.Fu)(e) : (0, l.Fu)(e);
}
function S(e) {
    let { userValue: t, guildValue: n, pendingValue: r, guildId: i } = e,
        a = "" === r || null === r,
        o = "" !== r && null != r,
        s = "" !== n && null != n;
    return a ? (null != i ? t : null) : o ? r : null != i && s ? n : t;
}
function A(e, t) {
    return void 0 === e ? null != t : null != e;
}
function C(e, t) {
    return void 0 === e ? null != t : null != e;
}
