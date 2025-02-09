n.d(t, {
    $U: () => p,
    Jw: () => E,
    Kg: () => h,
    PO: () => y,
    Wx: () => T,
    ZT: () => b,
    bd: () => m,
    f$: () => A,
    gc: () => _,
    gd: () => S,
    s6: () => I,
    xQ: () => g
}),
    n(653041);
var i = n(192379),
    r = n(442837),
    a = n(809206),
    s = n(676742),
    o = n(18438),
    l = n(778825),
    u = n(350327),
    c = n(621853),
    d = n(271383),
    f = n(25990);
function _(e) {
    return i.useMemo(() => {
        let t = d.ZP.getMutableAllGuildsAndMembers(),
            n = {};
        for (let r in t) {
            var i;
            let a = null === (i = t[r][e]) || void 0 === i ? void 0 : i.avatar;
            null != a && (null == n[a] && (n[a] = []), n[a].push(r));
        }
        return null != n ? Object.entries(n).map((e) => e[1][0]) : [];
    }, [e]);
}
function p(e, t) {
    let n = (0, r.e7)([d.ZP], () => (void 0 === t ? null : d.ZP.getMember(t.id, e.id))),
        i = (0, s.Z)(e.avatarDecoration),
        { pendingUserAvatarDecoration: a, userErrors: o } = (0, r.cj)([f.Z], () => ({
            pendingUserAvatarDecoration: f.Z.getPendingAvatarDecoration(),
            userErrors: f.Z.getErrors().avatarDecoration
        })),
        { pendingGuildAvatarDecoration: u, guildErrors: c } = (0, r.cj)([l.Z], () => ({
            pendingGuildAvatarDecoration: l.Z.getPendingAvatarDecoration(),
            guildErrors: l.Z.getErrors().avatarDecoration
        }));
    return {
        userAvatarDecoration: i,
        guildAvatarDecoration: null == n ? void 0 : n.avatarDecoration,
        pendingAvatarDecoration: null != t ? u : a,
        pendingErrors: null != t ? c : o
    };
}
function h(e, t) {
    return (0, r.e7)(
        [c.Z],
        () => {
            var n, i;
            return null == t ? (null === (n = c.Z.getUserProfile(e.id)) || void 0 === n ? void 0 : n.profileEffectId) : null === (i = c.Z.getGuildMemberProfile(e.id, t.id)) || void 0 === i ? void 0 : i.profileEffectId;
        },
        [e, t]
    );
}
function m(e) {
    return (0, r.cj)(
        [f.Z, l.Z],
        () =>
            null == e
                ? {
                      pendingProfileEffectId: f.Z.getPendingProfileEffectId(),
                      errors: f.Z.getErrors().profileEffect
                  }
                : {
                      pendingProfileEffectId: l.Z.getPendingProfileEffectId(),
                      errors: l.Z.getErrors().profileEffect
                  },
        [e]
    );
}
function g(e, t) {
    (0, u.Cf)(e === t ? void 0 : e);
}
function E(e, t) {
    (0, a.I5)(e === t ? void 0 : e);
}
function v(e) {
    return e ? o.cV : a.cV;
}
function y(e, t) {
    v(null != e)(t);
}
function I(e, t, n) {
    if (e === t) {
        null == n ? (0, a.xn)(void 0) : (0, o.xn)(void 0);
        return;
    }
    null == n ? (0, a.xn)(e) : (0, o.xn)(e);
}
function T(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return null != e
        ? '' === e
            ? {
                  value: i ? n : null,
                  isUsingGuildValue: !1
              }
            : {
                  value: e,
                  isUsingGuildValue: i
              }
        : null != t && '' !== t
          ? {
                value: t,
                isUsingGuildValue: !0
            }
          : {
                value: n,
                isUsingGuildValue: !1
            };
}
function b(e) {
    var t, n;
    let { pendingProfileEffectId: i, displayProfile: r } = e,
        a = null == r ? void 0 : null === (t = r._userProfile) || void 0 === t ? void 0 : t.profileEffectId,
        s = null == r ? void 0 : null === (n = r._guildMemberProfile) || void 0 === n ? void 0 : n.profileEffectId,
        o = null === i;
    return o && null != s ? a : o ? null : null != i ? i : null == r ? void 0 : r.profileEffectId;
}
function S(e, t) {
    return void 0 === e ? null != t : null != e;
}
function A(e, t) {
    return void 0 === e ? null != t : null != e;
}
