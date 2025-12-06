n.d(t, {
    Jw: () => I,
    PO: () => T,
    Tb: () => O,
    UK: () => A,
    Wh: () => C,
    Ys: () => N,
    Zx: () => g,
    f$: () => R,
    gc: () => h,
    gd: () => P,
    i3: () => b,
    mD: () => E,
    nh: () => y,
    xQ: () => S,
    xZ: () => v,
}),
    n(539854);
var r = n(473749),
    i = n(512722),
    a = n.n(i),
    o = n(979554),
    s = n(442837),
    l = n(809206),
    c = n(18438),
    u = n(778825),
    d = n(350327),
    f = n(621853),
    p = n(271383),
    _ = n(25990),
    m = n(594174);
function h(e) {
    return r.useMemo(() => {
        let t = p.ZP.getMutableAllGuildsAndMembers(),
            n = {};
        for (let i in t) {
            var r;
            let a = null == (r = t[i][e]) ? void 0 : r.avatar;
            null != a && (null == n[a] && (n[a] = []), n[a].push(i));
        }
        return null != n ? Object.entries(n).map((e) => e[1][0]) : [];
    }, [e]);
}
function g(e, t) {
    var n;
    let r = (0, s.e7)([p.ZP], () => (void 0 === t ? null : p.ZP.getMember(t, e.id))),
        i = e.nameplate,
        { pendingUserNameplate: a, userErrors: o } = (0, s.cj)([_.Z], () => ({
            pendingUserNameplate: _.Z.getPendingNameplate(),
            userErrors: _.Z.getErrors().nameplate,
        })),
        { pendingGuildNameplate: l, guildErrors: c } = (0, s.cj)([u.Z], () => ({
            pendingGuildNameplate: u.Z.getPendingNameplate(),
            guildErrors: u.Z.getErrors().nameplate,
        }));
    return {
        userNameplate: i,
        guildNameplate: null == r || null == (n = r.collectibles) ? void 0 : n.nameplate,
        pendingNameplate: null != t ? l : a,
        pendingErrors: null != t ? c : o,
    };
}
function E(e, t) {
    let n = (0, s.e7)([p.ZP], () => (void 0 === t || null == e ? null : p.ZP.getMember(t, e.id))),
        { pendingUserDisplayNameStyles: r, userErrors: i } = (0, s.cj)([_.Z], () => ({
            pendingUserDisplayNameStyles: _.Z.getPendingDisplayNameStyles(),
            userErrors: _.Z.getErrors().displayNameStyles,
        })),
        { pendingGuildDisplayNameStyles: a, guildErrors: o } = (0, s.cj)([u.Z], () => ({
            pendingGuildDisplayNameStyles: u.Z.getPendingDisplayNameStyles(),
            guildErrors: u.Z.getErrors().displayNameStyles,
        })),
        l = (0, s.e7)([_.Z], () => _.Z.getTryItOutDisplayNameStyles());
    return {
        userDisplayNameStyles: null == e ? void 0 : e.displayNameStyles,
        guildDisplayNameStyles: null == n ? void 0 : n.displayNameStyles,
        pendingDisplayNameStyles: null != t ? a : r,
        tryItOutDisplayNameStyles: l,
        pendingErrors: null != t ? o : i,
    };
}
function b(e) {
    let { user: t, guildId: n } = e,
        r = (0, s.e7)([p.ZP], () => (null != n ? p.ZP.getMember(n, t.id) : null));
    return null != n ? (null == r ? void 0 : r.avatarDecoration) : t.avatarDecoration;
}
function y(e) {
    let { user: t, guildId: n } = e;
    return (0, s.e7)([f.Z], () => {
        var e, r;
        return null == n
            ? null == (e = f.Z.getUserProfile(t.id))
                ? void 0
                : e.profileEffect
            : null == (r = f.Z.getGuildMemberProfile(t.id, n))
              ? void 0
              : r.profileEffect;
    });
}
function O(e) {
    let t = (0, s.cj)([_.Z], () => ({
            pendingAvatarDecoration: _.Z.getPendingAvatarDecoration(),
            errors: _.Z.getErrors().avatarDecoration,
        })),
        n = (0, s.cj)([u.Z], () => ({
            pendingAvatarDecoration: u.Z.getPendingAvatarDecoration(),
            errors: u.Z.getErrors().avatarDecoration,
        }));
    return null != e ? n : t;
}
function v(e) {
    let t = (0, s.cj)([_.Z], () => ({
            pendingProfileEffect: _.Z.getPendingProfileEffect(),
            errors: _.Z.getErrors().profileEffect,
        })),
        n = (0, s.cj)([u.Z], () => ({
            pendingProfileEffect: u.Z.getPendingProfileEffect(),
            errors: u.Z.getErrors().profileEffect,
        }));
    return null != e ? n : t;
}
function S(e, t) {
    (0, d.Cf)(e === t ? void 0 : e);
}
function I(e, t) {
    (0, l.I5)((null == e ? void 0 : e.imageUri) === t ? void 0 : e);
}
function T(e, t) {
    let n = m.default.getCurrentUser();
    if ((a()(null != n, "user cannot be null"), null == t)) {
        let t = n.avatarDecoration;
        (0, l.ZB)({
            type: o.Z.AVATAR_DECORATION,
            value: (null == e ? void 0 : e.skuId) === (null == t ? void 0 : t.skuId) ? void 0 : e,
        });
    } else {
        var r;
        let i = null == (r = p.ZP.getMember(t, n.id)) ? void 0 : r.avatarDecoration;
        (0, c.ZB)({
            type: o.Z.AVATAR_DECORATION,
            value: (null == e ? void 0 : e.skuId) === (null == i ? void 0 : i.skuId) ? void 0 : e,
        });
    }
}
function A(e, t) {
    var n, r;
    let i = m.default.getCurrentUser();
    if ((a()(null != i, "user cannot be null"), null == t)) {
        let t = null == (n = f.Z.getUserProfile(i.id)) ? void 0 : n.profileEffect;
        (0, l.ZB)({
            type: o.Z.PROFILE_EFFECT,
            value: (null == e ? void 0 : e.skuId) === (null == t ? void 0 : t.skuId) ? void 0 : e,
        });
    } else {
        let n = null == (r = f.Z.getGuildMemberProfile(i.id, t)) ? void 0 : r.profileEffect;
        (0, c.ZB)({
            type: o.Z.PROFILE_EFFECT,
            value: (null == e ? void 0 : e.skuId) === (null == n ? void 0 : n.skuId) ? void 0 : e,
        });
    }
}
function C(e, t) {
    var n, r, i;
    let s = m.default.getCurrentUser();
    if ((a()(null != s, "user cannot be null"), null == t)) {
        let t = null == (n = s.collectibles) ? void 0 : n.nameplate;
        (0, l.ZB)({
            type: o.Z.NAMEPLATE,
            value: (null == e ? void 0 : e.skuId) === (null == t ? void 0 : t.skuId) ? void 0 : e,
        });
    } else {
        let n = null == (i = p.ZP.getMember(t, s.id)) || null == (r = i.collectibles) ? void 0 : r.nameplate;
        (0, c.ZB)({
            type: o.Z.NAMEPLATE,
            value: (null == e ? void 0 : e.skuId) === (null == n ? void 0 : n.skuId) ? void 0 : e,
        });
    }
}
function N(e) {
    let { userValue: t, guildValue: n, pendingValue: r, guildId: i } = e,
        a = "" === r || null === r,
        o = "" !== r && null != r,
        s = "" !== n && null != n;
    return a ? (null != i ? t : null) : o ? r : null != i && s ? n : t;
}
function P(e, t) {
    return void 0 === e ? null != t : null != e;
}
function R(e, t) {
    return void 0 === e ? null != t : null != e;
}
