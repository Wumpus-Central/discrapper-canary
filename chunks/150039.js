n.d(t, {
    $U: () => p,
    Jw: () => b,
    Kg: () => m,
    PO: () => O,
    Wx: () => I,
    ZT: () => T,
    Zx: () => h,
    bd: () => g,
    f$: () => A,
    gc: () => _,
    gd: () => S,
    s6: () => v,
    xQ: () => E,
}),
    n(539854);
var r = n(647438),
    i = n(442837),
    a = n(809206),
    o = n(676742),
    s = n(18438),
    l = n(778825),
    c = n(350327),
    u = n(621853),
    d = n(271383),
    f = n(25990);
function _(e) {
    return r.useMemo(() => {
        let t = d.ZP.getMutableAllGuildsAndMembers(),
            n = {};
        for (let i in t) {
            var r;
            let a = null == (r = t[i][e]) ? void 0 : r.avatar;
            null != a && (null == n[a] && (n[a] = []), n[a].push(i));
        }
        return null != n ? Object.entries(n).map((e) => e[1][0]) : [];
    }, [e]);
}
function p(e, t) {
    let n = (0, i.e7)([d.ZP], () => (void 0 === t ? null : d.ZP.getMember(t.id, e.id))),
        r = (0, o.Z)(e.avatarDecoration),
        { pendingUserAvatarDecoration: a, userErrors: s } = (0, i.cj)([f.Z], () => ({
            pendingUserAvatarDecoration: f.Z.getPendingAvatarDecoration(),
            userErrors: f.Z.getErrors().avatarDecoration,
        })),
        { pendingGuildAvatarDecoration: c, guildErrors: u } = (0, i.cj)([l.Z], () => ({
            pendingGuildAvatarDecoration: l.Z.getPendingAvatarDecoration(),
            guildErrors: l.Z.getErrors().avatarDecoration,
        }));
    return {
        userAvatarDecoration: r,
        guildAvatarDecoration: null == n ? void 0 : n.avatarDecoration,
        pendingAvatarDecoration: null != t ? c : a,
        pendingErrors: null != t ? u : s,
    };
}
function h(e, t) {
    var n;
    let r = (0, i.e7)([d.ZP], () => (void 0 === t ? null : d.ZP.getMember(t, e.id))),
        a = e.nameplate,
        { pendingUserNameplate: o, userErrors: s } = (0, i.cj)([f.Z], () => ({
            pendingUserNameplate: f.Z.getPendingNameplate(),
            userErrors: f.Z.getErrors().nameplate,
        })),
        { pendingGuildNameplate: c, guildErrors: u } = (0, i.cj)([l.Z], () => ({
            pendingGuildNameplate: l.Z.getPendingNameplate(),
            guildErrors: l.Z.getErrors().nameplate,
        }));
    return {
        userNameplate: a,
        guildNameplate: null == r || null == (n = r.collectibles) ? void 0 : n.nameplate,
        pendingNameplate: null != t ? c : o,
        pendingErrors: null != t ? u : s,
    };
}
function m(e, t) {
    return (0, i.e7)([u.Z], () => {
        var n, r, i, a;
        return null == t
            ? null == (r = u.Z.getUserProfile(e.id)) || null == (n = r.profileEffect)
                ? void 0
                : n.id
            : null == (a = u.Z.getGuildMemberProfile(e.id, t.id)) || null == (i = a.profileEffect)
              ? void 0
              : i.id;
    }, [e, t]);
}
function g(e) {
    return (0, i.cj)(
        [f.Z, l.Z],
        () =>
            null == e
                ? {
                      pendingProfileEffectId: f.Z.getPendingProfileEffectId(),
                      errors: f.Z.getErrors().profileEffect,
                  }
                : {
                      pendingProfileEffectId: l.Z.getPendingProfileEffectId(),
                      errors: l.Z.getErrors().profileEffect,
                  },
        [e],
    );
}
function E(e, t) {
    (0, c.Cf)(e === t ? void 0 : e);
}
function b(e, t) {
    (0, a.I5)((null == e ? void 0 : e.imageUri) === t ? void 0 : e);
}
function y(e) {
    return e ? s.cV : a.cV;
}
function O(e, t) {
    y(null != e)(t);
}
function v(e, t, n) {
    if (e === t) return void (null == n ? (0, a.xn)(void 0) : (0, s.xn)(void 0));
    null == n ? (0, a.xn)(e) : (0, s.xn)(e);
}
function I(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return null != e
        ? "string" == typeof e && "" === e
            ? {
                  value: r ? n : null,
                  isUsingGuildValue: !1,
              }
            : {
                  value: e,
                  isUsingGuildValue: r,
              }
        : null != t && ("string" != typeof t || "" !== t)
          ? {
                value: t,
                isUsingGuildValue: !0,
            }
          : {
                value: n,
                isUsingGuildValue: !1,
            };
}
function T(e) {
    var t, n, r, i, a;
    let { pendingProfileEffectId: o, displayProfile: s } = e,
        l = null == s || null == (n = s._userProfile) || null == (t = n.profileEffect) ? void 0 : t.id,
        c = null == s || null == (i = s._guildMemberProfile) || null == (r = i.profileEffect) ? void 0 : r.id,
        u = null === o;
    return u && null != c ? l : u ? null : null != o ? o : null == s || null == (a = s.profileEffect) ? void 0 : a.id;
}
function S(e, t) {
    return void 0 === e ? null != t : null != e;
}
function A(e, t) {
    return void 0 === e ? null != t : null != e;
}
