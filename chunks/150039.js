r.d(n, {
    $U: function () {
        return m;
    },
    Jw: function () {
        return y;
    },
    Kg: function () {
        return g;
    },
    PO: function () {
        return I;
    },
    Wx: function () {
        return S;
    },
    ZT: function () {
        return A;
    },
    bd: function () {
        return E;
    },
    f$: function () {
        return N;
    },
    gc: function () {
        return _;
    },
    gd: function () {
        return C;
    },
    s6: function () {
        return T;
    },
    xQ: function () {
        return v;
    }
});
var i = r(653041);
var a = r(192379),
    o = r(442837),
    s = r(809206),
    l = r(676742),
    u = r(18438),
    c = r(778825),
    d = r(350327),
    f = r(621853),
    p = r(271383),
    h = r(25990);
function _(e) {
    return a.useMemo(() => {
        let n = p.ZP.getMutableAllGuildsAndMembers(),
            r = {};
        for (let a in n) {
            var i;
            let o = null === (i = n[a][e]) || void 0 === i ? void 0 : i.avatar;
            if (null != o) null == r[o] && (r[o] = []), r[o].push(a);
        }
        return null != r ? Object.entries(r).map((e) => e[1][0]) : [];
    }, [e]);
}
function m(e, n) {
    let r = (0, o.e7)([p.ZP], () => (void 0 === n ? null : p.ZP.getMember(n.id, e.id))),
        i = (0, l.Z)(e.avatarDecoration),
        { pendingUserAvatarDecoration: a, userErrors: s } = (0, o.cj)([h.Z], () => ({
            pendingUserAvatarDecoration: h.Z.getPendingAvatarDecoration(),
            userErrors: h.Z.getErrors().avatarDecoration
        })),
        { pendingGuildAvatarDecoration: u, guildErrors: d } = (0, o.cj)([c.Z], () => ({
            pendingGuildAvatarDecoration: c.Z.getPendingAvatarDecoration(),
            guildErrors: c.Z.getErrors().avatarDecoration
        }));
    return {
        userAvatarDecoration: i,
        guildAvatarDecoration: null == r ? void 0 : r.avatarDecoration,
        pendingAvatarDecoration: null != n ? u : a,
        pendingErrors: null != n ? d : s
    };
}
function g(e, n) {
    return (0, o.e7)(
        [f.Z],
        () => {
            var r, i;
            return null == n ? (null === (r = f.Z.getUserProfile(e.id)) || void 0 === r ? void 0 : r.profileEffectId) : null === (i = f.Z.getGuildMemberProfile(e.id, n.id)) || void 0 === i ? void 0 : i.profileEffectId;
        },
        [e, n]
    );
}
function E(e) {
    return (0, o.cj)(
        [h.Z, c.Z],
        () =>
            null == e
                ? {
                      pendingProfileEffectId: h.Z.getPendingProfileEffectId(),
                      errors: h.Z.getErrors().profileEffect
                  }
                : {
                      pendingProfileEffectId: c.Z.getPendingProfileEffectId(),
                      errors: c.Z.getErrors().profileEffect
                  },
        [e]
    );
}
function v(e, n) {
    (0, d.Cf)(e === n ? void 0 : e);
}
function y(e, n) {
    (0, s.I5)(e === n ? void 0 : e);
}
function b(e) {
    return e ? u.cV : s.cV;
}
function I(e, n) {
    b(null != e)(n);
}
function T(e, n, r) {
    if (e === n) {
        null == r ? (0, s.xn)(void 0) : (0, u.xn)(void 0);
        return;
    }
    null == r ? (0, s.xn)(e) : (0, u.xn)(e);
}
function S(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e)
        return '' === e
            ? {
                  value: i ? r : null,
                  isUsingGuildValue: !1
              }
            : {
                  value: e,
                  isUsingGuildValue: i
              };
    return null != n && '' !== n
        ? {
              value: n,
              isUsingGuildValue: !0
          }
        : {
              value: r,
              isUsingGuildValue: !1
          };
}
function A(e) {
    var n, r;
    let { pendingProfileEffectId: i, displayProfile: a } = e,
        o = null == a ? void 0 : null === (n = a._userProfile) || void 0 === n ? void 0 : n.profileEffectId,
        s = null == a ? void 0 : null === (r = a._guildMemberProfile) || void 0 === r ? void 0 : r.profileEffectId,
        l = null === i;
    return l && null != s ? o : l ? null : null != i ? i : null == a ? void 0 : a.profileEffectId;
}
function C(e, n) {
    return void 0 === e ? null != n : null != e;
}
function N(e, n) {
    return void 0 === e ? null != n : null != e;
}
