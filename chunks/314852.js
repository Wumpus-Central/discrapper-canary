n.d(t, { Z: () => m }), n(47120);
var i,
    r = n(442837),
    a = n(570140);
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
let o = new Map(),
    l = {
        profile: null,
        lastSyncTimestamp: null,
        isFetching: !1,
        isUpdating: !1,
        error: null,
        errorCode: null
    };
function u(e) {
    let { guildId: t } = e,
        n = o.get(t);
    null == n
        ? o.set(t, {
              ...l,
              isFetching: !0
          })
        : o.set(t, {
              ...n,
              isFetching: !0
          });
}
function c(e) {
    let { guildId: t, profile: n } = e,
        i = o.get(t);
    null == i
        ? o.set(t, {
              ...l,
              profile: n,
              lastSyncTimestamp: Date.now()
          })
        : o.set(t, {
              ...i,
              profile: n,
              lastSyncTimestamp: Date.now(),
              isFetching: !1
          });
}
function d(e) {
    let { guildId: t, error: n, errorCode: i } = e,
        r = o.get(t);
    null == r
        ? o.set(t, {
              ...l,
              error: n,
              errorCode: i
          })
        : o.set(t, {
              ...r,
              error: n,
              errorCode: i,
              isFetching: !1
          });
}
function f(e) {
    let { guildId: t } = e,
        n = o.get(t);
    null == n
        ? o.set(t, {
              ...l,
              isUpdating: !0
          })
        : o.set(t, {
              ...n,
              isUpdating: !0
          });
}
function _(e) {
    let { guildId: t, profile: n } = e,
        i = o.get(t);
    null == i
        ? o.set(t, {
              ...l,
              profile: n
          })
        : o.set(t, {
              ...i,
              profile: n,
              isUpdating: !1
          });
}
function p(e) {
    let { guildId: t, error: n, errorCode: i } = e,
        r = o.get(t);
    null == r
        ? o.set(t, {
              ...l,
              error: n,
              errorCode: i
          })
        : o.set(t, {
              ...r,
              error: n,
              errorCode: i,
              isUpdating: !1
          });
}
class h extends (i = r.ZP.Store) {
    getProfile(e) {
        var t, n;
        return null == e ? null : null !== (n = null === (t = o.get(e)) || void 0 === t ? void 0 : t.profile) && void 0 !== n ? n : null;
    }
    getIsFetching(e) {
        var t, n;
        return null != e && null !== (n = null === (t = o.get(e)) || void 0 === t ? void 0 : t.isFetching) && void 0 !== n && n;
    }
    getLastSyncTimestamp(e) {
        var t, n;
        return null == e ? null : null !== (n = null === (t = o.get(e)) || void 0 === t ? void 0 : t.lastSyncTimestamp) && void 0 !== n ? n : null;
    }
    getIsUpdating(e) {
        var t, n;
        return null != e && null !== (n = null === (t = o.get(e)) || void 0 === t ? void 0 : t.isUpdating) && void 0 !== n && n;
    }
    getErrorCode(e) {
        var t, n;
        return null == e ? null : null !== (n = null === (t = o.get(e)) || void 0 === t ? void 0 : t.errorCode) && void 0 !== n ? n : null;
    }
}
s(h, 'displayName', 'GuildProfileStore');
let m = new h(a.Z, {
    GUILD_PROFILE_FETCH: u,
    GUILD_PROFILE_FETCH_SUCCESS: c,
    GUILD_PROFILE_FETCH_FAILURE: d,
    GUILD_PROFILE_UPDATE: f,
    GUILD_PROFILE_UPDATE_SUCCESS: _,
    GUILD_PROFILE_UPDATE_FAILURE: p
});
