n.d(t, {
    Jw: () => S,
    PO: () => A,
    UK: () => C,
    Wh: () => N,
    Ys: () => R,
    Zx: () => E,
    f$: () => D,
    gc: () => g,
    gd: () => P,
    i3: () => y,
    mD: () => b,
    nh: () => O,
    sY: () => I,
    wE: () => v,
    xQ: () => T,
}),
    n(539854);
var r = n(473749),
    i = n(512722),
    a = n.n(i),
    o = n(979554),
    s = n(442837),
    l = n(809206),
    c = n(594928),
    u = n(18438),
    d = n(778825),
    f = n(350327),
    _ = n(621853),
    p = n(271383),
    h = n(25990),
    m = n(594174);
function g(e) {
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
function E(e, t) {
    var n;
    let r = (0, s.e7)([p.ZP], () => (void 0 === t ? null : p.ZP.getMember(t, e.id))),
        i = e.nameplate,
        { pendingUserNameplate: a, userErrors: o } = (0, s.cj)([h.Z], () => ({
            pendingUserNameplate: h.Z.getPendingNameplate(),
            userErrors: h.Z.getErrors().nameplate,
        })),
        { pendingGuildNameplate: l, guildErrors: c } = (0, s.cj)([d.Z], () => ({
            pendingGuildNameplate: d.Z.getPendingNameplate(),
            guildErrors: d.Z.getErrors().nameplate,
        }));
    return {
        userNameplate: i,
        guildNameplate: null == r || null == (n = r.collectibles) ? void 0 : n.nameplate,
        pendingNameplate: null != t ? l : a,
        pendingErrors: null != t ? c : o,
    };
}
function b(e, t) {
    c.JH.useExperiment({ location: "useGuildMemberOrUserPendingDisplayNameStyles" }).enabled || (t = void 0);
    let n = (0, s.e7)([p.ZP], () => (void 0 === t || null == e ? null : p.ZP.getMember(t, e.id))),
        { pendingUserDisplayNameStyles: r, userErrors: i } = (0, s.cj)([h.Z], () => ({
            pendingUserDisplayNameStyles: h.Z.getPendingDisplayNameStyles(),
            userErrors: h.Z.getErrors().displayNameStyles,
        })),
        { pendingGuildDisplayNameStyles: a, guildErrors: o } = (0, s.cj)([d.Z], () => ({
            pendingGuildDisplayNameStyles: d.Z.getPendingDisplayNameStyles(),
            guildErrors: d.Z.getErrors().displayNameStyles,
        }));
    return {
        userDisplayNameStyles: null == e ? void 0 : e.displayNameStyles,
        guildDisplayNameStyles: null == n ? void 0 : n.displayNameStyles,
        pendingDisplayNameStyles: null != t ? a : r,
        pendingErrors: null != t ? o : i,
    };
}
function y(e) {
    let { user: t, guildId: n } = e,
        r = (0, s.e7)([p.ZP], () => (null != n ? p.ZP.getMember(n, t.id) : null));
    return null != n ? (null == r ? void 0 : r.avatarDecoration) : t.avatarDecoration;
}
function O(e) {
    let { user: t, guildId: n } = e;
    return (0, s.e7)([_.Z], () => {
        var e, r;
        return null == n
            ? null == (e = _.Z.getUserProfile(t.id))
                ? void 0
                : e.profileEffect
            : null == (r = _.Z.getGuildMemberProfile(t.id, n))
              ? void 0
              : r.profileEffect;
    });
}
function v(e) {
    let { guildId: t, isTryItOut: n } = e;
    return (0, s.cj)([d.Z, h.Z], () =>
        n
            ? { pendingAvatarDecoration: h.Z.getTryItOutAvatarDecoration() }
            : null == t
              ? {
                    pendingAvatarDecoration: h.Z.getPendingAvatarDecoration(),
                    errors: h.Z.getErrors().avatarDecoration,
                }
              : {
                    pendingAvatarDecoration: d.Z.getPendingAvatarDecoration(),
                    errors: d.Z.getErrors().avatarDecoration,
                },
    );
}
function I(e) {
    let { guildId: t, isTryItOut: n } = e;
    return (0, s.cj)([h.Z, d.Z], () =>
        n
            ? { pendingProfileEffect: h.Z.getTryItOutProfileEffect() }
            : null == t
              ? {
                    pendingProfileEffect: h.Z.getPendingProfileEffect(),
                    errors: d.Z.getErrors().profileEffect,
                }
              : {
                    pendingProfileEffect: d.Z.getPendingProfileEffect(),
                    errors: h.Z.getErrors().profileEffect,
                },
    );
}
function T(e, t) {
    (0, f.Cf)(e === t ? void 0 : e);
}
function S(e, t) {
    (0, l.I5)((null == e ? void 0 : e.imageUri) === t ? void 0 : e);
}
function A(e, t) {
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
        (0, u.ZB)({
            type: o.Z.AVATAR_DECORATION,
            value: (null == e ? void 0 : e.skuId) === (null == i ? void 0 : i.skuId) ? void 0 : e,
        });
    }
}
function C(e, t) {
    var n, r;
    let i = m.default.getCurrentUser();
    if ((a()(null != i, "user cannot be null"), null == t)) {
        let t = null == (n = _.Z.getUserProfile(i.id)) ? void 0 : n.profileEffect;
        (0, l.ZB)({
            type: o.Z.PROFILE_EFFECT,
            value: (null == e ? void 0 : e.skuId) === (null == t ? void 0 : t.skuId) ? void 0 : e,
        });
    } else {
        let n = null == (r = _.Z.getGuildMemberProfile(i.id, t)) ? void 0 : r.profileEffect;
        (0, u.ZB)({
            type: o.Z.PROFILE_EFFECT,
            value: (null == e ? void 0 : e.skuId) === (null == n ? void 0 : n.skuId) ? void 0 : e,
        });
    }
}
function N(e, t) {
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
        (0, u.ZB)({
            type: o.Z.NAMEPLATE,
            value: (null == e ? void 0 : e.skuId) === (null == n ? void 0 : n.skuId) ? void 0 : e,
        });
    }
}
function R(e) {
    let { userValue: t, guildValue: n, pendingValue: r, guildId: i } = e,
        a = "" === r || null === r,
        o = "" !== r && null != r,
        s = "" !== n && null != n;
    return a ? (null != i ? t : null) : o ? r : null != i && s ? n : t;
}
function P(e, t) {
    return void 0 === e ? null != t : null != e;
}
function D(e, t) {
    return void 0 === e ? null != t : null != e;
}
