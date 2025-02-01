n.d(t, { Z: () => v });
var i,
    r = n(913527),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(709054);
function u(e, t, n) {
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
let c = { lastSeenNewlyAddedEmojiIds: {} },
    d = c,
    f = {};
function _() {
    (d = c), (f = {});
}
function p(e) {
    var t;
    let { guildId: n, emojiId: i } = e,
        r = null !== (t = f[n]) && void 0 !== t ? t : d.lastSeenNewlyAddedEmojiIds[n];
    null == r || 0 > l.default.compare(r.id, i)
        ? (f[n] = {
              id: i,
              lastSeen: Date.now(),
              acknowledged: !0
          })
        : (f[n] = {
              ...r,
              acknowledged: !0
          });
}
function h(e) {
    var t;
    let { guildId: n, emojiId: i } = e,
        r = null !== (t = f[n]) && void 0 !== t ? t : d.lastSeenNewlyAddedEmojiIds[n];
    (null == r || 0 > l.default.compare(r.id, i)) &&
        (f[n] = {
            id: i,
            lastSeen: Date.now(),
            acknowledged: !1
        });
}
function m() {
    for (let e in f) d.lastSeenNewlyAddedEmojiIds[e] = f[e];
}
function g() {
    (d = c), m();
}
class E extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        d = null != e ? e : c;
    }
    getState() {
        return d;
    }
    getLastSeenEmojiByGuild(e) {
        return d.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || l.default.compare(t, n.id) > 0) return !0;
        {
            let e = a()(n.lastSeen);
            return a()().isBefore(e.add(2, 'weeks')) && !n.acknowledged;
        }
    }
}
u(E, 'displayName', 'NewlyAddedEmojiStore'),
    u(E, 'persistKey', 'NewlyAddedEmojiStore'),
    u(E, 'migrations', [
        (e) => {
            let t = e.lastSeenNewlyAddedEmojiIds,
                n = {};
            for (let e in t) {
                let i = t[e];
                n[e] = {
                    id: i,
                    lastSeen: Date.now(),
                    acknowledged: !1
                };
            }
            return { lastSeenNewlyAddedEmojiIds: n };
        }
    ]);
let v = new E(o.Z, {
    LOGOUT: _,
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: p,
    NEWLY_ADDED_EMOJI_SEEN_PENDING: h,
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: m,
    CLEAR_CACHES: g,
    CONNECTION_CLOSED: m
});
