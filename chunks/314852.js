(n.d(t, {
    Z: () => C,
    a: () => _
}),
    n(388685),
    n(953529));
var r,
    i = n(442837),
    a = n(570140),
    o = n(406218),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            }));
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
var _ = (function (e) {
    return ((e.NOT_FETCHED = 'NOT_FETCHED'), (e.FETCHING = 'FETCHING'), (e.FETCHED = 'FETCHED'), e);
})({});
let f = new Map(),
    p = {
        profile: null,
        lastSyncTimestamp: null,
        fetchStatus: 'NOT_FETCHED',
        isUpdating: !1,
        error: null
    };
function h(e) {
    let { guildId: t } = e,
        n = f.get(t);
    null == n ? f.set(t, d(c({}, p), { fetchStatus: 'FETCHING' })) : f.set(t, d(c({}, n), { fetchStatus: 'FETCHING' }));
}
function m(e) {
    let { guildId: t, profile: n } = e,
        r = f.get(t);
    null == r
        ? f.set(
              t,
              d(c({}, p), {
                  profile: n,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: 'FETCHED'
              })
          )
        : f.set(
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
        r = f.get(t);
    null == r
        ? f.set(
              t,
              d(c({}, p), {
                  error: n,
                  fetchStatus: 'FETCHED'
              })
          )
        : f.set(
              t,
              d(c({}, r), {
                  error: n,
                  fetchStatus: 'FETCHED'
              })
          );
}
function E(e) {
    let { guildId: t } = e,
        n = f.get(t);
    null == n ? f.set(t, d(c({}, p), { isUpdating: !0 })) : f.set(t, d(c({}, n), { isUpdating: !0 }));
}
function b(e) {
    let { guildId: t, profile: n } = e,
        r = f.get(t);
    null == r
        ? f.set(t, d(c({}, p), { profile: n }))
        : f.set(
              t,
              d(c({}, r), {
                  profile: n,
                  isUpdating: !1
              })
          );
}
function y(e) {
    let { guildId: t, error: n } = e,
        r = f.get(t);
    null == r
        ? f.set(t, d(c({}, p), { error: n }))
        : f.set(
              t,
              d(c({}, r), {
                  error: n,
                  isUpdating: !1
              })
          );
}
function O(e) {
    let { guildId: t, visibility: n } = e,
        r = f.get(t),
        i = null == r ? void 0 : r.profile;
    null != r &&
        null != i &&
        f.set(
            t,
            d(c({}, r), {
                isUpdating: !1,
                profile: d(c({}, i), { visibility: n })
            })
        );
}
function v(e) {
    let { form: t, guildId: n } = e,
        r = null == t ? void 0 : t.profile;
    if (null == r) return;
    let i = f.get(n);
    null == i
        ? f.set(
              n,
              d(c({}, p), {
                  profile: r,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: 'FETCHED'
              })
          )
        : f.set(
              n,
              d(c({}, i), {
                  profile: r,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: 'FETCHED'
              })
          );
}
function I(e) {
    let { invite: t } = e,
        { profile: n } = t;
    if (null == n) return;
    let r = f.get(n.id),
        i = (0, o.xo)(n);
    null == r
        ? f.set(
              n.id,
              d(c({}, p), {
                  profile: i,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: 'FETCHED'
              })
          )
        : f.set(
              n.id,
              d(c({}, r), {
                  profile: i,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: 'FETCHED'
              })
          );
}
function T(e) {
    let { channel: t } = e;
    t.type === s.d4z.GUILD_ANNOUNCEMENT && null != t.guild_id && f.delete(t.guild_id);
}
function S(e) {
    let { guildId: t, enabled: n } = e;
    null != t && n && f.delete(t);
}
function A(e) {
    var t, n, r;
    let { guild: i } = e,
        a = f.get(i.id);
    if (null == a || null == a.profile) return !1;
    let o = d(c({}, a.profile), {
        name: i.name,
        icon: null != (t = i.icon) ? t : null,
        description: null != (n = i.description) ? n : '',
        customBanner: null != (r = i.discovery_splash) ? r : null
    });
    f.set(i.id, d(c({}, a), { profile: o }));
}
class N extends (r = i.ZP.Store) {
    getProfile(e) {
        var t, n;
        return null == e ? null : null != (n = null == (t = f.get(e)) ? void 0 : t.profile) ? n : null;
    }
    getFetchStatus(e) {
        var t, n;
        return null == e ? 'NOT_FETCHED' : null != (n = null == (t = f.get(e)) ? void 0 : t.fetchStatus) ? n : 'NOT_FETCHED';
    }
    getLastSyncTimestamp(e) {
        var t, n;
        return null == e ? null : null != (n = null == (t = f.get(e)) ? void 0 : t.lastSyncTimestamp) ? n : null;
    }
    getIsUpdating(e) {
        var t, n;
        return null != e && null != (n = null == (t = f.get(e)) ? void 0 : t.isUpdating) && n;
    }
    getErrorCode(e) {
        var t, n, r;
        return null == e ? null : null != (r = null == (n = f.get(e)) || null == (t = n.error) ? void 0 : t.code) ? r : null;
    }
}
l(N, 'displayName', 'GuildProfileStore');
let C = new N(a.Z, {
    GUILD_PROFILE_FETCH: h,
    GUILD_PROFILE_FETCH_SUCCESS: m,
    GUILD_PROFILE_FETCH_FAILURE: g,
    GUILD_PROFILE_UPDATE: E,
    GUILD_PROFILE_UPDATE_SUCCESS: b,
    GUILD_PROFILE_UPDATE_FAILURE: y,
    MEMBER_VERIFICATION_FORM_UPDATE: v,
    INVITE_RESOLVE_SUCCESS: I,
    INSTANT_INVITE_CREATE_SUCCESS: I,
    CHANNEL_CREATE: T,
    GUILD_SETTINGS_SET_WIDGET: S,
    GUILD_UPDATE: A,
    GUILD_PROFILE_UPDATE_VISIBILITY: E,
    GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: O,
    GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: y
});
