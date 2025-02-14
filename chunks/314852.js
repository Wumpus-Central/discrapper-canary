n.d(t, { Z: () => v }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(406218);
function o(e, t, n) {
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
let l = new Map(),
    u = {
        profile: null,
        lastSyncTimestamp: null,
        isFetching: !1,
        isUpdating: !1,
        error: null,
        errorCode: null
    };
function c(e) {
    let { guildId: t } = e,
        n = l.get(t);
    null == n
        ? l.set(t, {
              ...u,
              isFetching: !0
          })
        : l.set(t, {
              ...n,
              isFetching: !0
          });
}
function d(e) {
    let { guildId: t, profile: n } = e,
        i = l.get(t);
    null == i
        ? l.set(t, {
              ...u,
              profile: n,
              lastSyncTimestamp: Date.now()
          })
        : l.set(t, {
              ...i,
              profile: n,
              lastSyncTimestamp: Date.now(),
              isFetching: !1
          });
}
function f(e) {
    let { guildId: t, error: n, errorCode: i } = e,
        r = l.get(t);
    null == r
        ? l.set(t, {
              ...u,
              error: n,
              errorCode: i
          })
        : l.set(t, {
              ...r,
              error: n,
              errorCode: i,
              isFetching: !1
          });
}
function _(e) {
    let { guildId: t } = e,
        n = l.get(t);
    null == n
        ? l.set(t, {
              ...u,
              isUpdating: !0
          })
        : l.set(t, {
              ...n,
              isUpdating: !0
          });
}
function p(e) {
    let { guildId: t, profile: n } = e,
        i = l.get(t);
    null == i
        ? l.set(t, {
              ...u,
              profile: n
          })
        : l.set(t, {
              ...i,
              profile: n,
              isUpdating: !1
          });
}
function h(e) {
    let { guildId: t, error: n, errorCode: i } = e,
        r = l.get(t);
    null == r
        ? l.set(t, {
              ...u,
              error: n,
              errorCode: i
          })
        : l.set(t, {
              ...r,
              error: n,
              errorCode: i,
              isUpdating: !1
          });
}
function m(e) {
    let { form: t, guildId: n } = e,
        i = null == t ? void 0 : t.profile;
    if (null == i) return;
    let r = l.get(n);
    null == r
        ? l.set(n, {
              ...u,
              profile: i,
              lastSyncTimestamp: Date.now()
          })
        : l.set(n, {
              ...r,
              profile: i,
              lastSyncTimestamp: Date.now(),
              isFetching: !1
          });
}
function g(e) {
    let { invite: t } = e,
        { profile: n } = t;
    if (null == n) return;
    let i = l.get(n.id),
        r = (0, s.x)(n);
    null == i
        ? l.set(n.id, {
              ...u,
              profile: r,
              lastSyncTimestamp: Date.now()
          })
        : l.set(n.id, {
              ...i,
              profile: r,
              lastSyncTimestamp: Date.now(),
              isFetching: !1
          });
}
class E extends (i = r.ZP.Store) {
    getProfile(e) {
        var t, n;
        return null == e ? null : null !== (n = null === (t = l.get(e)) || void 0 === t ? void 0 : t.profile) && void 0 !== n ? n : null;
    }
    getIsFetching(e) {
        var t, n;
        return null != e && null !== (n = null === (t = l.get(e)) || void 0 === t ? void 0 : t.isFetching) && void 0 !== n && n;
    }
    getLastSyncTimestamp(e) {
        var t, n;
        return null == e ? null : null !== (n = null === (t = l.get(e)) || void 0 === t ? void 0 : t.lastSyncTimestamp) && void 0 !== n ? n : null;
    }
    getIsUpdating(e) {
        var t, n;
        return null != e && null !== (n = null === (t = l.get(e)) || void 0 === t ? void 0 : t.isUpdating) && void 0 !== n && n;
    }
    getErrorCode(e) {
        var t, n;
        return null == e ? null : null !== (n = null === (t = l.get(e)) || void 0 === t ? void 0 : t.errorCode) && void 0 !== n ? n : null;
    }
}
o(E, 'displayName', 'GuildProfileStore');
let v = new E(a.Z, {
    GUILD_PROFILE_FETCH: c,
    GUILD_PROFILE_FETCH_SUCCESS: d,
    GUILD_PROFILE_FETCH_FAILURE: f,
    GUILD_PROFILE_UPDATE: _,
    GUILD_PROFILE_UPDATE_SUCCESS: p,
    GUILD_PROFILE_UPDATE_FAILURE: h,
    MEMBER_VERIFICATION_FORM_UPDATE: m,
    INVITE_RESOLVE_SUCCESS: g
});
