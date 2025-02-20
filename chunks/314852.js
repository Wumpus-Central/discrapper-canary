n.d(t, {
    Z: () => N,
    a: () => f
}),
    n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(406218),
    s = n(981631);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var f = (function (e) {
    return (e.NOT_FETCHED = 'NOT_FETCHED'), (e.FETCHING = 'FETCHING'), (e.FETCHED = 'FETCHED'), e;
})({});
let p = new Map(),
    _ = {
        profile: null,
        lastSyncTimestamp: null,
        fetchStatus: 'NOT_FETCHED',
        isUpdating: !1,
        error: null
    };
function h(e) {
    let { guildId: t } = e,
        n = p.get(t);
    null == n ? p.set(t, d(c({}, _), { fetchStatus: 'FETCHING' })) : p.set(t, d(c({}, n), { fetchStatus: 'FETCHING' }));
}
function m(e) {
    let { guildId: t, profile: n } = e,
        r = p.get(t);
    null == r
        ? p.set(
              t,
              d(c({}, _), {
                  profile: n,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: 'FETCHED'
              })
          )
        : p.set(
              t,
              d(c({}, r), {
                  profile: n,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: 'FETCHED'
              })
          );
}
function g(e) {
    let { guildId: t, error: n } = e,
        r = p.get(t);
    null == r
        ? p.set(
              t,
              d(c({}, _), {
                  error: n,
                  fetchStatus: 'FETCHED'
              })
          )
        : p.set(
              t,
              d(c({}, r), {
                  error: n,
                  fetchStatus: 'FETCHED'
              })
          );
}
function E(e) {
    let { guildId: t } = e,
        n = p.get(t);
    null == n ? p.set(t, d(c({}, _), { isUpdating: !0 })) : p.set(t, d(c({}, n), { isUpdating: !0 }));
}
function v(e) {
    let { guildId: t, profile: n } = e,
        r = p.get(t);
    null == r
        ? p.set(t, d(c({}, _), { profile: n }))
        : p.set(
              t,
              d(c({}, r), {
                  profile: n,
                  isUpdating: !1
              })
          );
}
function b(e) {
    let { guildId: t, error: n } = e,
        r = p.get(t);
    null == r
        ? p.set(t, d(c({}, _), { error: n }))
        : p.set(
              t,
              d(c({}, r), {
                  error: n,
                  isUpdating: !1
              })
          );
}
function y(e) {
    let { form: t, guildId: n } = e,
        r = null == t ? void 0 : t.profile;
    if (null == r) return;
    let i = p.get(n);
    null == i
        ? p.set(
              n,
              d(c({}, _), {
                  profile: r,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: 'FETCHED'
              })
          )
        : p.set(
              n,
              d(c({}, i), {
                  profile: r,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: 'FETCHED'
              })
          );
}
function O(e) {
    let { invite: t } = e,
        { profile: n } = t;
    if (null == n) return;
    let r = p.get(n.id),
        i = (0, a.xo)(n);
    null == r
        ? p.set(
              n.id,
              d(c({}, _), {
                  profile: i,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: 'FETCHED'
              })
          )
        : p.set(
              n.id,
              d(c({}, r), {
                  profile: i,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: 'FETCHED'
              })
          );
}
function S(e) {
    let { guildId: t, channelType: n } = e;
    n === s.d4z.GUILD_ANNOUNCEMENT && p.delete(t);
}
function I(e) {
    let { guildId: t, enabled: n } = e;
    null != t && n && p.delete(t);
}
class T extends (r = i.ZP.Store) {
    getProfile(e) {
        var t, n;
        return null == e ? null : null !== (n = null === (t = p.get(e)) || void 0 === t ? void 0 : t.profile) && void 0 !== n ? n : null;
    }
    getFetchStatus(e) {
        var t, n;
        return null == e ? 'NOT_FETCHED' : null !== (n = null === (t = p.get(e)) || void 0 === t ? void 0 : t.fetchStatus) && void 0 !== n ? n : 'NOT_FETCHED';
    }
    getLastSyncTimestamp(e) {
        var t, n;
        return null == e ? null : null !== (n = null === (t = p.get(e)) || void 0 === t ? void 0 : t.lastSyncTimestamp) && void 0 !== n ? n : null;
    }
    getIsUpdating(e) {
        var t, n;
        return null != e && null !== (n = null === (t = p.get(e)) || void 0 === t ? void 0 : t.isUpdating) && void 0 !== n && n;
    }
    getErrorCode(e) {
        var t, n, r;
        return null == e ? null : null !== (r = null === (n = p.get(e)) || void 0 === n ? void 0 : null === (t = n.error) || void 0 === t ? void 0 : t.code) && void 0 !== r ? r : null;
    }
}
l(T, 'displayName', 'GuildProfileStore');
let N = new T(o.Z, {
    GUILD_PROFILE_FETCH: h,
    GUILD_PROFILE_FETCH_SUCCESS: m,
    GUILD_PROFILE_FETCH_FAILURE: g,
    GUILD_PROFILE_UPDATE: E,
    GUILD_PROFILE_UPDATE_SUCCESS: v,
    GUILD_PROFILE_UPDATE_FAILURE: b,
    MEMBER_VERIFICATION_FORM_UPDATE: y,
    INVITE_RESOLVE_SUCCESS: O,
    CREATE_CHANNEL_MODAL_SUBMIT: S,
    GUILD_SETTINGS_SET_WIDGET: I
});
