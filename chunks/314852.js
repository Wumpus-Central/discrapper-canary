n.d(t, {
    Z: () => S,
    a: () => d
}),
    n(47120);
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
var d = (function (e) {
    return (e.NOT_FETCHED = 'NOT_FETCHED'), (e.FETCHING = 'FETCHING'), (e.FETCHED = 'FETCHED'), e;
})({});
let f = new Map(),
    p = {
        profile: null,
        lastSyncTimestamp: null,
        fetchStatus: 'NOT_FETCHED',
        isUpdating: !1,
        error: null
    };
function _(e) {
    let { guildId: t } = e,
        n = f.get(t);
    null == n ? f.set(t, u(l({}, p), { fetchStatus: 'FETCHING' })) : f.set(t, u(l({}, n), { fetchStatus: 'FETCHING' }));
}
function h(e) {
    let { guildId: t, profile: n } = e,
        r = f.get(t);
    null == r
        ? f.set(
              t,
              u(l({}, p), {
                  profile: n,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: 'FETCHED'
              })
          )
        : f.set(
              t,
              u(l({}, r), {
                  profile: n,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: 'FETCHED'
              })
          );
}
function m(e) {
    let { guildId: t, error: n } = e,
        r = f.get(t);
    null == r
        ? f.set(
              t,
              u(l({}, p), {
                  error: n,
                  fetchStatus: 'FETCHED'
              })
          )
        : f.set(
              t,
              u(l({}, r), {
                  error: n,
                  fetchStatus: 'FETCHED'
              })
          );
}
function g(e) {
    let { guildId: t } = e,
        n = f.get(t);
    null == n ? f.set(t, u(l({}, p), { isUpdating: !0 })) : f.set(t, u(l({}, n), { isUpdating: !0 }));
}
function E(e) {
    let { guildId: t, profile: n } = e,
        r = f.get(t);
    null == r
        ? f.set(t, u(l({}, p), { profile: n }))
        : f.set(
              t,
              u(l({}, r), {
                  profile: n,
                  isUpdating: !1
              })
          );
}
function v(e) {
    let { guildId: t, error: n } = e,
        r = f.get(t);
    null == r
        ? f.set(t, u(l({}, p), { error: n }))
        : f.set(
              t,
              u(l({}, r), {
                  error: n,
                  isUpdating: !1
              })
          );
}
function b(e) {
    let { form: t, guildId: n } = e,
        r = null == t ? void 0 : t.profile;
    if (null == r) return;
    let i = f.get(n);
    null == i
        ? f.set(
              n,
              u(l({}, p), {
                  profile: r,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: 'FETCHED'
              })
          )
        : f.set(
              n,
              u(l({}, i), {
                  profile: r,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: 'FETCHED'
              })
          );
}
function y(e) {
    let { invite: t } = e,
        { profile: n } = t;
    if (null == n) return;
    let r = f.get(n.id),
        i = (0, a.xo)(n);
    null == r
        ? f.set(
              n.id,
              u(l({}, p), {
                  profile: i,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: 'FETCHED'
              })
          )
        : f.set(
              n.id,
              u(l({}, r), {
                  profile: i,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: 'FETCHED'
              })
          );
}
class O extends (r = i.ZP.Store) {
    getProfile(e) {
        var t, n;
        return null == e ? null : null !== (n = null === (t = f.get(e)) || void 0 === t ? void 0 : t.profile) && void 0 !== n ? n : null;
    }
    getFetchStatus(e) {
        var t, n;
        return null == e ? 'NOT_FETCHED' : null !== (n = null === (t = f.get(e)) || void 0 === t ? void 0 : t.fetchStatus) && void 0 !== n ? n : 'NOT_FETCHED';
    }
    getLastSyncTimestamp(e) {
        var t, n;
        return null == e ? null : null !== (n = null === (t = f.get(e)) || void 0 === t ? void 0 : t.lastSyncTimestamp) && void 0 !== n ? n : null;
    }
    getIsUpdating(e) {
        var t, n;
        return null != e && null !== (n = null === (t = f.get(e)) || void 0 === t ? void 0 : t.isUpdating) && void 0 !== n && n;
    }
    getErrorCode(e) {
        var t, n, r;
        return null == e ? null : null !== (r = null === (n = f.get(e)) || void 0 === n ? void 0 : null === (t = n.error) || void 0 === t ? void 0 : t.code) && void 0 !== r ? r : null;
    }
}
s(O, 'displayName', 'GuildProfileStore');
let S = new O(o.Z, {
    GUILD_PROFILE_FETCH: _,
    GUILD_PROFILE_FETCH_SUCCESS: h,
    GUILD_PROFILE_FETCH_FAILURE: m,
    GUILD_PROFILE_UPDATE: g,
    GUILD_PROFILE_UPDATE_SUCCESS: E,
    GUILD_PROFILE_UPDATE_FAILURE: v,
    MEMBER_VERIFICATION_FORM_UPDATE: b,
    INVITE_RESOLVE_SUCCESS: y
});
