n.d(t, { Z: () => O }), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(406218);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = new Map(),
    f = {
        profile: null,
        lastSyncTimestamp: null,
        isFetching: !1,
        isUpdating: !1,
        error: null
    };
function p(e) {
    let { guildId: t } = e,
        n = d.get(t);
    null == n ? d.set(t, u(l({}, f), { isFetching: !0 })) : d.set(t, u(l({}, n), { isFetching: !0 }));
}
function _(e) {
    let { guildId: t, profile: n } = e,
        r = d.get(t);
    null == r
        ? d.set(
              t,
              u(l({}, f), {
                  profile: n,
                  lastSyncTimestamp: Date.now()
              })
          )
        : d.set(
              t,
              u(l({}, r), {
                  profile: n,
                  lastSyncTimestamp: Date.now(),
                  isFetching: !1
              })
          );
}
function h(e) {
    let { guildId: t, error: n } = e,
        r = d.get(t);
    null == r
        ? d.set(t, u(l({}, f), { error: n }))
        : d.set(
              t,
              u(l({}, r), {
                  error: n,
                  isFetching: !1
              })
          );
}
function m(e) {
    let { guildId: t } = e,
        n = d.get(t);
    null == n ? d.set(t, u(l({}, f), { isUpdating: !0 })) : d.set(t, u(l({}, n), { isUpdating: !0 }));
}
function g(e) {
    let { guildId: t, profile: n } = e,
        r = d.get(t);
    null == r
        ? d.set(t, u(l({}, f), { profile: n }))
        : d.set(
              t,
              u(l({}, r), {
                  profile: n,
                  isUpdating: !1
              })
          );
}
function E(e) {
    let { guildId: t, error: n } = e,
        r = d.get(t);
    null == r
        ? d.set(t, u(l({}, f), { error: n }))
        : d.set(
              t,
              u(l({}, r), {
                  error: n,
                  isUpdating: !1
              })
          );
}
function v(e) {
    let { form: t, guildId: n } = e,
        r = null == t ? void 0 : t.profile;
    if (null == r) return;
    let i = d.get(n);
    null == i
        ? d.set(
              n,
              u(l({}, f), {
                  profile: r,
                  lastSyncTimestamp: Date.now()
              })
          )
        : d.set(
              n,
              u(l({}, i), {
                  profile: r,
                  lastSyncTimestamp: Date.now(),
                  isFetching: !1
              })
          );
}
function b(e) {
    let { invite: t } = e,
        { profile: n } = t;
    if (null == n) return;
    let r = d.get(n.id),
        i = (0, a.xo)(n);
    null == r
        ? d.set(
              n.id,
              u(l({}, f), {
                  profile: i,
                  lastSyncTimestamp: Date.now()
              })
          )
        : d.set(
              n.id,
              u(l({}, r), {
                  profile: i,
                  lastSyncTimestamp: Date.now(),
                  isFetching: !1
              })
          );
}
class y extends (r = i.ZP.Store) {
    getProfile(e) {
        var t, n;
        return null == e ? null : null !== (n = null === (t = d.get(e)) || void 0 === t ? void 0 : t.profile) && void 0 !== n ? n : null;
    }
    getIsFetching(e) {
        var t, n;
        return null != e && null !== (n = null === (t = d.get(e)) || void 0 === t ? void 0 : t.isFetching) && void 0 !== n && n;
    }
    getLastSyncTimestamp(e) {
        var t, n;
        return null == e ? null : null !== (n = null === (t = d.get(e)) || void 0 === t ? void 0 : t.lastSyncTimestamp) && void 0 !== n ? n : null;
    }
    getIsUpdating(e) {
        var t, n;
        return null != e && null !== (n = null === (t = d.get(e)) || void 0 === t ? void 0 : t.isUpdating) && void 0 !== n && n;
    }
    getErrorCode(e) {
        var t, n, r;
        return null == e ? null : null !== (r = null === (n = d.get(e)) || void 0 === n ? void 0 : null === (t = n.error) || void 0 === t ? void 0 : t.code) && void 0 !== r ? r : null;
    }
}
s(y, 'displayName', 'GuildProfileStore');
let O = new y(o.Z, {
    GUILD_PROFILE_FETCH: p,
    GUILD_PROFILE_FETCH_SUCCESS: _,
    GUILD_PROFILE_FETCH_FAILURE: h,
    GUILD_PROFILE_UPDATE: m,
    GUILD_PROFILE_UPDATE_SUCCESS: g,
    GUILD_PROFILE_UPDATE_FAILURE: E,
    MEMBER_VERIFICATION_FORM_UPDATE: v,
    INVITE_RESOLVE_SUCCESS: b
});
