n.d(t, {
    $U: () => p,
    Jw: () => b,
    Kg: () => m,
    PO: () => v,
    Wh: () => I,
    Wx: () => T,
    ZT: () => N,
    _A: () => h,
    bd: () => g,
    f$: () => C,
    gc: () => _,
    gd: () => A,
    s6: () => S,
    xQ: () => E
}),
    n(653041);
var r = n(192379),
    i = n(442837),
    o = n(809206),
    a = n(676742),
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
            let o = null == (r = t[i][e]) ? void 0 : r.avatar;
            null != o && (null == n[o] && (n[o] = []), n[o].push(i));
        }
        return null != n ? Object.entries(n).map((e) => e[1][0]) : [];
    }, [e]);
}
function p(e, t) {
    let n = (0, i.e7)([d.ZP], () => (void 0 === t ? null : d.ZP.getMember(t.id, e.id))),
        r = (0, a.Z)(e.avatarDecoration),
        { pendingUserAvatarDecoration: o, userErrors: s } = (0, i.cj)([f.Z], () => ({
            pendingUserAvatarDecoration: f.Z.getPendingAvatarDecoration(),
            userErrors: f.Z.getErrors().avatarDecoration
        })),
        { pendingGuildAvatarDecoration: c, guildErrors: u } = (0, i.cj)([l.Z], () => ({
            pendingGuildAvatarDecoration: l.Z.getPendingAvatarDecoration(),
            guildErrors: l.Z.getErrors().avatarDecoration
        }));
    return {
        userAvatarDecoration: r,
        guildAvatarDecoration: null == n ? void 0 : n.avatarDecoration,
        pendingAvatarDecoration: null != t ? c : o,
        pendingErrors: null != t ? u : s
    };
}
function h() {
    let { pendingUserNameplate: e, userErrors: t } = (0, i.cj)([f.Z], () => ({
        pendingUserNameplate: f.Z.getPendingNameplate(),
        userErrors: f.Z.getErrors().nameplate
    }));
    return {
        pendingNameplate: e,
        pendingErrors: t
    };
}
function m(e, t) {
    return (0, i.e7)(
        [u.Z],
        () => {
            var n, r;
            return null == t ? (null == (n = u.Z.getUserProfile(e.id)) ? void 0 : n.profileEffectId) : null == (r = u.Z.getGuildMemberProfile(e.id, t.id)) ? void 0 : r.profileEffectId;
        },
        [e, t]
    );
}
function g(e) {
    return (0, i.cj)(
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
function E(e, t) {
    (0, c.Cf)(e === t ? void 0 : e);
}
function b(e, t) {
    (0, o.I5)((null == e ? void 0 : e.imageUri) === t ? void 0 : e);
}
function y(e) {
    return e ? s.cV : o.cV;
}
function v(e, t) {
    y(null != e)(t);
}
function O() {
    return o.KP;
}
function I(e) {
    O()(e);
}
function S(e, t, n) {
    if (e === t) return void (null == n ? (0, o.xn)(void 0) : (0, s.xn)(void 0));
    null == n ? (0, o.xn)(e) : (0, s.xn)(e);
}
function T(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return null != e
        ? '' === e
            ? {
                  value: r ? n : null,
                  isUsingGuildValue: !1
              }
            : {
                  value: e,
                  isUsingGuildValue: r
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
function N(e) {
    var t, n;
    let { pendingProfileEffectId: r, displayProfile: i } = e,
        o = null == i || null == (t = i._userProfile) ? void 0 : t.profileEffectId,
        a = null == i || null == (n = i._guildMemberProfile) ? void 0 : n.profileEffectId,
        s = null === r;
    return s && null != a ? o : s ? null : null != r ? r : null == i ? void 0 : i.profileEffectId;
}
function A(e, t) {
    return void 0 === e ? null != t : null != e;
}
function C(e, t) {
    return void 0 === e ? null != t : null != e;
}
