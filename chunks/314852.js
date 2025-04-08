n.d(t, {
    Z: () => C,
    a: () => f
}),
    n(388685),
    n(953529);
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
let _ = new Map(),
    p = {
        profile: null,
        lastSyncTimestamp: null,
        fetchStatus: 'NOT_FETCHED',
        isUpdating: !1,
        error: null
    };
function h(e) {
    let { guildId: t } = e,
        n = _.get(t);
    null == n ? _.set(t, d(c({}, p), { fetchStatus: 'FETCHING' })) : _.set(t, d(c({}, n), { fetchStatus: 'FETCHING' }));
}
function m(e) {
    let { guildId: t, profile: n } = e,
        r = _.get(t);
    null == r
        ? _.set(
              t,
              d(c({}, p), {
                  profile: n,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: 'FETCHED'
              })
          )
        : _.set(
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
        r = _.get(t);
    null == r
        ? _.set(
              t,
              d(c({}, p), {
                  error: n,
                  fetchStatus: 'FETCHED'
              })
          )
        : _.set(
              t,
              d(c({}, r), {
                  error: n,
                  fetchStatus: 'FETCHED'
              })
          );
}
function E(e) {
    let { guildId: t } = e,
        n = _.get(t);
    null == n ? _.set(t, d(c({}, p), { isUpdating: !0 })) : _.set(t, d(c({}, n), { isUpdating: !0 }));
}
function b(e) {
    let { guildId: t, profile: n } = e,
        r = _.get(t);
    null == r
        ? _.set(t, d(c({}, p), { profile: n }))
        : _.set(
              t,
              d(c({}, r), {
                  profile: n,
                  isUpdating: !1
              })
          );
}
function y(e) {
    let { guildId: t, error: n } = e,
        r = _.get(t);
    null == r
        ? _.set(t, d(c({}, p), { error: n }))
        : _.set(
              t,
              d(c({}, r), {
                  error: n,
                  isUpdating: !1
              })
          );
}
function v(e) {
    let { guildId: t, visibility: n } = e,
        r = _.get(t),
        i = null == r ? void 0 : r.profile;
    null != r &&
        null != i &&
        _.set(
            t,
            d(c({}, r), {
                isUpdating: !1,
                profile: d(c({}, i), { visibility: n })
            })
        );
}
function O(e) {
    let { form: t, guildId: n } = e,
        r = null == t ? void 0 : t.profile;
    if (null == r) return;
    let i = _.get(n);
    null == i
        ? _.set(
              n,
              d(c({}, p), {
                  profile: r,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: 'FETCHED'
              })
          )
        : _.set(
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
    let r = _.get(n.id),
        i = (0, a.xo)(n);
    null == r
        ? _.set(
              n.id,
              d(c({}, p), {
                  profile: i,
                  lastSyncTimestamp: Date.now(),
                  fetchStatus: 'FETCHED'
              })
          )
        : _.set(
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
    n === s.d4z.GUILD_ANNOUNCEMENT && _.delete(t);
}
function T(e) {
    let { guildId: t, enabled: n } = e;
    null != t && n && _.delete(t);
}
function N(e) {
    var t, n, r;
    let { guild: i } = e,
        o = _.get(i.id);
    if (null == o || null == o.profile) return !1;
    let a = d(c({}, o.profile), {
        name: i.name,
        icon: null != (t = i.icon) ? t : null,
        description: null != (n = i.description) ? n : '',
        customBanner: null != (r = i.discovery_splash) ? r : null
    });
    _.set(i.id, d(c({}, o), { profile: a }));
}
class A extends (r = i.ZP.Store) {
    getProfile(e) {
        var t, n;
        return null == e ? null : null != (n = null == (t = _.get(e)) ? void 0 : t.profile) ? n : null;
    }
    getFetchStatus(e) {
        var t, n;
        return null == e ? 'NOT_FETCHED' : null != (n = null == (t = _.get(e)) ? void 0 : t.fetchStatus) ? n : 'NOT_FETCHED';
    }
    getLastSyncTimestamp(e) {
        var t, n;
        return null == e ? null : null != (n = null == (t = _.get(e)) ? void 0 : t.lastSyncTimestamp) ? n : null;
    }
    getIsUpdating(e) {
        var t, n;
        return null != e && null != (n = null == (t = _.get(e)) ? void 0 : t.isUpdating) && n;
    }
    getErrorCode(e) {
        var t, n, r;
        return null == e ? null : null != (r = null == (n = _.get(e)) || null == (t = n.error) ? void 0 : t.code) ? r : null;
    }
}
l(A, 'displayName', 'GuildProfileStore');
let C = new A(o.Z, {
    GUILD_PROFILE_FETCH: h,
    GUILD_PROFILE_FETCH_SUCCESS: m,
    GUILD_PROFILE_FETCH_FAILURE: g,
    GUILD_PROFILE_UPDATE: E,
    GUILD_PROFILE_UPDATE_SUCCESS: b,
    GUILD_PROFILE_UPDATE_FAILURE: y,
    MEMBER_VERIFICATION_FORM_UPDATE: O,
    INVITE_RESOLVE_SUCCESS: I,
    INSTANT_INVITE_CREATE_SUCCESS: I,
    CREATE_CHANNEL_MODAL_SUBMIT: S,
    GUILD_SETTINGS_SET_WIDGET: T,
    GUILD_UPDATE: N,
    GUILD_PROFILE_UPDATE_VISIBILITY: E,
    GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: v,
    GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: y
});
