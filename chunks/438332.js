n.d(t, { Z: () => O });
var r,
    i = n(913527),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(709054);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = { lastSeenNewlyAddedEmojiIds: {} },
    p = _,
    h = {};
function m() {
    (p = _), (h = {});
}
function g(e) {
    var t;
    let { guildId: n, emojiId: r } = e,
        i = null != (t = h[n]) ? t : p.lastSeenNewlyAddedEmojiIds[n];
    null == i || 0 > l.default.compare(i.id, r)
        ? (h[n] = {
              id: r,
              lastSeen: Date.now(),
              acknowledged: !0
          })
        : (h[n] = f(u({}, i), { acknowledged: !0 }));
}
function E(e) {
    var t;
    let { guildId: n, emojiId: r } = e,
        i = null != (t = h[n]) ? t : p.lastSeenNewlyAddedEmojiIds[n];
    (null == i || 0 > l.default.compare(i.id, r)) &&
        (h[n] = {
            id: r,
            lastSeen: Date.now(),
            acknowledged: !1
        });
}
function b() {
    for (let e in h) p.lastSeenNewlyAddedEmojiIds[e] = h[e];
}
function y() {
    (p = _), b();
}
class v extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        p = null != e ? e : _;
    }
    getState() {
        return p;
    }
    getLastSeenEmojiByGuild(e) {
        return p.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || l.default.compare(t, n.id) > 0) return !0;
        {
            let e = o()(n.lastSeen);
            return o()().isBefore(e.add(2, 'weeks')) && !n.acknowledged;
        }
    }
}
c(v, 'displayName', 'NewlyAddedEmojiStore'),
    c(v, 'persistKey', 'NewlyAddedEmojiStore'),
    c(v, 'migrations', [
        (e) => {
            let t = e.lastSeenNewlyAddedEmojiIds,
                n = {};
            for (let e in t) {
                let r = t[e];
                n[e] = {
                    id: r,
                    lastSeen: Date.now(),
                    acknowledged: !1
                };
            }
            return { lastSeenNewlyAddedEmojiIds: n };
        }
    ]);
let O = new v(s.Z, {
    LOGOUT: m,
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: g,
    NEWLY_ADDED_EMOJI_SEEN_PENDING: E,
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: b,
    CLEAR_CACHES: y,
    CONNECTION_CLOSED: b
});
