n.d(t, {
    $U: () => b,
    Jw: () => S,
    Kg: () => v,
    PO: () => A,
    UK: () => C,
    Wh: () => N,
    Ys: () => R,
    Zx: () => y,
    bd: () => I,
    f$: () => w,
    gc: () => E,
    gd: () => P,
    mD: () => O,
    xQ: () => T,
}),
    n(539854);
var r = n(647438),
    i = n(512722),
    a = n.n(i),
    o = n(979554),
    s = n(442837),
    l = n(809206),
    c = n(676742),
    u = n(594928),
    d = n(18438),
    f = n(778825),
    _ = n(350327),
    p = n(621853),
    h = n(271383),
    m = n(25990),
    g = n(594174);
function E(e) {
    return r.useMemo(() => {
        let t = h.ZP.getMutableAllGuildsAndMembers(),
            n = {};
        for (let i in t) {
            var r;
            let a = null == (r = t[i][e]) ? void 0 : r.avatar;
            null != a && (null == n[a] && (n[a] = []), n[a].push(i));
        }
        return null != n ? Object.entries(n).map((e) => e[1][0]) : [];
    }, [e]);
}
function b(e, t) {
    let n = (0, s.e7)([h.ZP], () => (void 0 === t ? null : h.ZP.getMember(t.id, e.id))),
        r = (0, c.Z)(e.avatarDecoration),
        { pendingUserAvatarDecoration: i, userErrors: a } = (0, s.cj)([m.Z], () => ({
            pendingUserAvatarDecoration: m.Z.getPendingAvatarDecoration(),
            userErrors: m.Z.getErrors().avatarDecoration,
        })),
        { pendingGuildAvatarDecoration: o, guildErrors: l } = (0, s.cj)([f.Z], () => ({
            pendingGuildAvatarDecoration: f.Z.getPendingAvatarDecoration(),
            guildErrors: f.Z.getErrors().avatarDecoration,
        }));
    return {
        userAvatarDecoration: r,
        guildAvatarDecoration: null == n ? void 0 : n.avatarDecoration,
        pendingAvatarDecoration: null != t ? o : i,
        pendingErrors: null != t ? l : a,
    };
}
function y(e, t) {
    var n;
    let r = (0, s.e7)([h.ZP], () => (void 0 === t ? null : h.ZP.getMember(t, e.id))),
        i = e.nameplate,
        { pendingUserNameplate: a, userErrors: o } = (0, s.cj)([m.Z], () => ({
            pendingUserNameplate: m.Z.getPendingNameplate(),
            userErrors: m.Z.getErrors().nameplate,
        })),
        { pendingGuildNameplate: l, guildErrors: c } = (0, s.cj)([f.Z], () => ({
            pendingGuildNameplate: f.Z.getPendingNameplate(),
            guildErrors: f.Z.getErrors().nameplate,
        }));
    return {
        userNameplate: i,
        guildNameplate: null == r || null == (n = r.collectibles) ? void 0 : n.nameplate,
        pendingNameplate: null != t ? l : a,
        pendingErrors: null != t ? c : o,
    };
}
function O(e, t) {
    (0, u.cL)({ location: "useGuildMemberOrUserPendingDisplayNameStyles" }) || (t = void 0);
    let n = (0, s.e7)([h.ZP], () => (void 0 === t || null == e ? null : h.ZP.getMember(t, e.id))),
        { pendingUserDisplayNameStyles: r, userErrors: i } = (0, s.cj)([m.Z], () => ({
            pendingUserDisplayNameStyles: m.Z.getPendingDisplayNameStyles(),
            userErrors: m.Z.getErrors().displayNameStyles,
        })),
        { pendingGuildDisplayNameStyles: a, guildErrors: o } = (0, s.cj)([f.Z], () => ({
            pendingGuildDisplayNameStyles: f.Z.getPendingDisplayNameStyles(),
            guildErrors: f.Z.getErrors().displayNameStyles,
        }));
    return {
        userDisplayNameStyles: null == e ? void 0 : e.displayNameStyles,
        guildDisplayNameStyles: null == n ? void 0 : n.displayNameStyles,
        pendingDisplayNameStyles: null != t ? a : r,
        pendingErrors: null != t ? o : i,
    };
}
function v(e, t) {
    return (0, s.e7)([p.Z], () => {
        var n, r;
        return null == t
            ? null == (n = p.Z.getUserProfile(e.id))
                ? void 0
                : n.profileEffect
            : null == (r = p.Z.getGuildMemberProfile(e.id, t.id))
              ? void 0
              : r.profileEffect;
    });
}
function I(e) {
    return (0, s.cj)(
        [m.Z, f.Z],
        () =>
            null == e
                ? {
                      pendingProfileEffect: m.Z.getPendingProfileEffect(),
                      errors: m.Z.getErrors().profileEffect,
                  }
                : {
                      pendingProfileEffect: f.Z.getPendingProfileEffect(),
                      errors: f.Z.getErrors().profileEffect,
                  },
        [e],
    );
}
function T(e, t) {
    (0, _.Cf)(e === t ? void 0 : e);
}
function S(e, t) {
    (0, l.I5)((null == e ? void 0 : e.imageUri) === t ? void 0 : e);
}
function A(e, t) {
    let n = g.default.getCurrentUser();
    if ((a()(null != n, "user cannot be null"), null == t)) {
        let t = n.avatarDecoration;
        (0, l.ZB)({
            type: o.Z.AVATAR_DECORATION,
            value: (null == e ? void 0 : e.skuId) === (null == t ? void 0 : t.skuId) ? void 0 : e,
        });
    } else {
        var r;
        let i = null == (r = h.ZP.getMember(t, n.id)) ? void 0 : r.avatarDecoration;
        (0, d.ZB)({
            type: o.Z.AVATAR_DECORATION,
            value: (null == e ? void 0 : e.skuId) === (null == i ? void 0 : i.skuId) ? void 0 : e,
        });
    }
}
function C(e, t) {
    var n, r;
    let i = g.default.getCurrentUser();
    if ((a()(null != i, "user cannot be null"), null == t)) {
        let t = null == (n = p.Z.getUserProfile(i.id)) ? void 0 : n.profileEffect;
        (0, l.ZB)({
            type: o.Z.PROFILE_EFFECT,
            value: (null == e ? void 0 : e.skuId) === (null == t ? void 0 : t.skuId) ? void 0 : e,
        });
    } else {
        let n = null == (r = p.Z.getGuildMemberProfile(i.id, t)) ? void 0 : r.profileEffect;
        (0, d.ZB)({
            type: o.Z.PROFILE_EFFECT,
            value: (null == e ? void 0 : e.skuId) === (null == n ? void 0 : n.skuId) ? void 0 : e,
        });
    }
}
function N(e, t) {
    var n, r, i;
    let s = g.default.getCurrentUser();
    if ((a()(null != s, "user cannot be null"), null == t)) {
        let t = null == (n = s.collectibles) ? void 0 : n.nameplate;
        (0, l.ZB)({
            type: o.Z.NAMEPLATE,
            value: (null == e ? void 0 : e.skuId) === (null == t ? void 0 : t.skuId) ? void 0 : e,
        });
    } else {
        let n = null == (i = h.ZP.getMember(t, s.id)) || null == (r = i.collectibles) ? void 0 : r.nameplate;
        (0, d.ZB)({
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
function w(e, t) {
    return void 0 === e ? null != t : null != e;
}
