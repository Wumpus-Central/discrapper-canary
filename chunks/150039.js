n.d(t, {
    Jw: () => T,
    PO: () => A,
    UK: () => C,
    Wh: () => N,
    Ys: () => P,
    Zx: () => E,
    f$: () => w,
    gc: () => g,
    gd: () => R,
    i3: () => y,
    mD: () => b,
    nh: () => O,
    sY: () => S,
    wE: () => v,
    xQ: () => I,
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
    p = n(621853),
    _ = n(271383),
    m = n(25990),
    h = n(594174);
function g(e) {
    return r.useMemo(() => {
        let t = _.ZP.getMutableAllGuildsAndMembers(),
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
    let r = (0, s.e7)([_.ZP], () => (void 0 === t ? null : _.ZP.getMember(t, e.id))),
        i = e.nameplate,
        { pendingUserNameplate: a, userErrors: o } = (0, s.cj)([m.Z], () => ({
            pendingUserNameplate: m.Z.getPendingNameplate(),
            userErrors: m.Z.getErrors().nameplate,
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
    let n = (0, s.e7)([_.ZP], () => (void 0 === t || null == e ? null : _.ZP.getMember(t, e.id))),
        { pendingUserDisplayNameStyles: r, userErrors: i } = (0, s.cj)([m.Z], () => ({
            pendingUserDisplayNameStyles: m.Z.getPendingDisplayNameStyles(),
            userErrors: m.Z.getErrors().displayNameStyles,
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
        r = (0, s.e7)([_.ZP], () => (null != n ? _.ZP.getMember(n, t.id) : null));
    return null != n ? (null == r ? void 0 : r.avatarDecoration) : t.avatarDecoration;
}
function O(e) {
    let { user: t, guildId: n } = e;
    return (0, s.e7)([p.Z], () => {
        var e, r;
        return null == n
            ? null == (e = p.Z.getUserProfile(t.id))
                ? void 0
                : e.profileEffect
            : null == (r = p.Z.getGuildMemberProfile(t.id, n))
              ? void 0
              : r.profileEffect;
    });
}
function v(e) {
    let { guildId: t, isTryItOut: n } = e;
    return (0, s.cj)([d.Z, m.Z], () =>
        n
            ? { pendingAvatarDecoration: m.Z.getTryItOutAvatarDecoration() }
            : null == t
              ? {
                    pendingAvatarDecoration: m.Z.getPendingAvatarDecoration(),
                    errors: m.Z.getErrors().avatarDecoration,
                }
              : {
                    pendingAvatarDecoration: d.Z.getPendingAvatarDecoration(),
                    errors: d.Z.getErrors().avatarDecoration,
                },
    );
}
function S(e) {
    let { guildId: t, isTryItOut: n } = e;
    return (0, s.cj)([m.Z, d.Z], () =>
        n
            ? { pendingProfileEffect: m.Z.getTryItOutProfileEffect() }
            : null == t
              ? {
                    pendingProfileEffect: m.Z.getPendingProfileEffect(),
                    errors: d.Z.getErrors().profileEffect,
                }
              : {
                    pendingProfileEffect: d.Z.getPendingProfileEffect(),
                    errors: m.Z.getErrors().profileEffect,
                },
    );
}
function I(e, t) {
    (0, f.Cf)(e === t ? void 0 : e);
}
function T(e, t) {
    (0, l.I5)((null == e ? void 0 : e.imageUri) === t ? void 0 : e);
}
function A(e, t) {
    let n = h.default.getCurrentUser();
    if ((a()(null != n, "user cannot be null"), null == t)) {
        let t = n.avatarDecoration;
        (0, l.ZB)({
            type: o.Z.AVATAR_DECORATION,
            value: (null == e ? void 0 : e.skuId) === (null == t ? void 0 : t.skuId) ? void 0 : e,
        });
    } else {
        var r;
        let i = null == (r = _.ZP.getMember(t, n.id)) ? void 0 : r.avatarDecoration;
        (0, u.ZB)({
            type: o.Z.AVATAR_DECORATION,
            value: (null == e ? void 0 : e.skuId) === (null == i ? void 0 : i.skuId) ? void 0 : e,
        });
    }
}
function C(e, t) {
    var n, r;
    let i = h.default.getCurrentUser();
    if ((a()(null != i, "user cannot be null"), null == t)) {
        let t = null == (n = p.Z.getUserProfile(i.id)) ? void 0 : n.profileEffect;
        (0, l.ZB)({
            type: o.Z.PROFILE_EFFECT,
            value: (null == e ? void 0 : e.skuId) === (null == t ? void 0 : t.skuId) ? void 0 : e,
        });
    } else {
        let n = null == (r = p.Z.getGuildMemberProfile(i.id, t)) ? void 0 : r.profileEffect;
        (0, u.ZB)({
            type: o.Z.PROFILE_EFFECT,
            value: (null == e ? void 0 : e.skuId) === (null == n ? void 0 : n.skuId) ? void 0 : e,
        });
    }
}
function N(e, t) {
    var n, r, i;
    let s = h.default.getCurrentUser();
    if ((a()(null != s, "user cannot be null"), null == t)) {
        let t = null == (n = s.collectibles) ? void 0 : n.nameplate;
        (0, l.ZB)({
            type: o.Z.NAMEPLATE,
            value: (null == e ? void 0 : e.skuId) === (null == t ? void 0 : t.skuId) ? void 0 : e,
        });
    } else {
        let n = null == (i = _.ZP.getMember(t, s.id)) || null == (r = i.collectibles) ? void 0 : r.nameplate;
        (0, u.ZB)({
            type: o.Z.NAMEPLATE,
            value: (null == e ? void 0 : e.skuId) === (null == n ? void 0 : n.skuId) ? void 0 : e,
        });
    }
}
function P(e) {
    let { userValue: t, guildValue: n, pendingValue: r, guildId: i } = e,
        a = "" === r || null === r,
        o = "" !== r && null != r,
        s = "" !== n && null != n;
    return a ? (null != i ? t : null) : o ? r : null != i && s ? n : t;
}
function R(e, t) {
    return void 0 === e ? null != t : null != e;
}
function w(e, t) {
    return void 0 === e ? null != t : null != e;
}
