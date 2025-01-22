var i,
    a = r(913527),
    o = r.n(a),
    s = r(442837),
    l = r(570140),
    u = r(709054);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = { lastSeenNewlyAddedEmojiIds: {} },
    f = d,
    p = {};
function h() {
    (f = d), (p = {});
}
function _(e) {
    var n;
    let { guildId: r, emojiId: i } = e,
        a = null !== (n = p[r]) && void 0 !== n ? n : f.lastSeenNewlyAddedEmojiIds[r];
    null == a || 0 > u.default.compare(a.id, i)
        ? (p[r] = {
              id: i,
              lastSeen: Date.now(),
              acknowledged: !0
          })
        : (p[r] = {
              ...a,
              acknowledged: !0
          });
}
function m(e) {
    var n;
    let { guildId: r, emojiId: i } = e,
        a = null !== (n = p[r]) && void 0 !== n ? n : f.lastSeenNewlyAddedEmojiIds[r];
    (null == a || 0 > u.default.compare(a.id, i)) &&
        (p[r] = {
            id: i,
            lastSeen: Date.now(),
            acknowledged: !1
        });
}
function g() {
    for (let e in p) f.lastSeenNewlyAddedEmojiIds[e] = p[e];
}
function E() {
    (f = d), g();
}
class v extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        f = null != e ? e : d;
    }
    getState() {
        return f;
    }
    getLastSeenEmojiByGuild(e) {
        return f.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, n) {
        if (null == e || null == n) return !1;
        let r = this.getLastSeenEmojiByGuild(e);
        if (null == r) return !0;
        if (u.default.compare(n, r.id) > 0) return !0;
        {
            let e = o()(r.lastSeen);
            return o()().isBefore(e.add(2, 'weeks')) && !r.acknowledged;
        }
    }
}
c(v, 'displayName', 'NewlyAddedEmojiStore'),
    c(v, 'persistKey', 'NewlyAddedEmojiStore'),
    c(v, 'migrations', [
        (e) => {
            let n = e.lastSeenNewlyAddedEmojiIds,
                r = {};
            for (let e in n) {
                let i = n[e];
                r[e] = {
                    id: i,
                    lastSeen: Date.now(),
                    acknowledged: !1
                };
            }
            return { lastSeenNewlyAddedEmojiIds: r };
        }
    ]),
    (n.Z = new v(l.Z, {
        LOGOUT: h,
        NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: _,
        NEWLY_ADDED_EMOJI_SEEN_PENDING: m,
        NEWLY_ADDED_EMOJI_SEEN_UPDATED: g,
        CLEAR_CACHES: E,
        CONNECTION_CLOSED: g
    }));
