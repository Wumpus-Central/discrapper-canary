n.d(t, {
    $U: () => h,
    Jw: () => O,
    Kg: () => E,
    PO: () => I,
    Wx: () => S,
    ZT: () => A,
    Zx: () => m,
    bd: () => b,
    f$: () => N,
    gc: () => p,
    gd: () => C,
    mD: () => g,
    s6: () => T,
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
    let { enabled: n } = s.wL.useConfig({ location: "useGuildMemberOrUserPendingDisplayNameStyles" }),
        r = (0, i.e7)([f.ZP], () => (void 0 === t || null == e ? null : f.ZP.getMember(t, e.id))),
        { pendingUserDisplayNameStyles: a, userErrors: o } = (0, i.cj)([_.Z], () => ({
            pendingUserDisplayNameStyles: _.Z.getPendingDisplayNameStyles(),
            userErrors: _.Z.getErrors().displayNameStyles,
        })),
        { pendingGuildDisplayNameStyles: l, guildErrors: u } = (0, i.cj)([c.Z], () => ({
            pendingGuildDisplayNameStyles: c.Z.getPendingDisplayNameStyles(),
            guildErrors: c.Z.getErrors().displayNameStyles,
        })),
        d = null == e ? void 0 : e.displayNameStyles,
        p = null == r ? void 0 : r.displayNameStyles;
    return null != t && n && (null != p || null != l)
        ? {
              currentDisplayNameStyles: null != p ? p : d,
              pendingDisplayNameStyles: l,
              pendingErrors: u,
          }
        : {
              currentDisplayNameStyles: d,
              pendingDisplayNameStyles: a,
              pendingErrors: o,
          };
}
function E(e, t) {
    return (0, i.e7)([d.Z], () => {
        var n, r, i, a;
        return null == t
            ? null == (r = d.Z.getUserProfile(e.id)) || null == (n = r.profileEffect)
                ? void 0
                : n.id
            : null == (a = d.Z.getGuildMemberProfile(e.id, t.id)) || null == (i = a.profileEffect)
              ? void 0
              : i.id;
    }, [e, t]);
}
function b(e) {
    return (0, i.cj)(
        [_.Z, c.Z],
        () =>
            null == e
                ? {
                      pendingProfileEffectId: _.Z.getPendingProfileEffectId(),
                      errors: _.Z.getErrors().profileEffect,
                  }
                : {
                      pendingProfileEffectId: c.Z.getPendingProfileEffectId(),
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
    if (e === t) return void (null == n ? (0, a.xn)(void 0) : (0, l.xn)(void 0));
    null == n ? (0, a.xn)(e) : (0, l.xn)(e);
}
function S(e, t, n) {
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
function A(e) {
    var t, n, r, i, a;
    let { pendingProfileEffectId: o, displayProfile: s } = e,
        l = null == s || null == (n = s._userProfile) || null == (t = n.profileEffect) ? void 0 : t.id,
        c = null == s || null == (i = s._guildMemberProfile) || null == (r = i.profileEffect) ? void 0 : r.id,
        u = null === o;
    return u && null != c ? l : u ? null : null != o ? o : null == s || null == (a = s.profileEffect) ? void 0 : a.id;
}
function C(e, t) {
    return void 0 === e ? null != t : null != e;
}
function N(e, t) {
    return void 0 === e ? null != t : null != e;
}
