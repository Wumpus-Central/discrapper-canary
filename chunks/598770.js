n.d(t, { A: () => A });
var r,
    i = n(989349),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(661191);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
let p = { lastSeenNewlyAddedEmojiIds: {} },
    _ = p,
    h = {};
function m() {
    (_ = p), (h = {});
}
function g(e) {
    var t;
    let { guildId: n, emojiId: r } = e,
        i = null != (t = h[n]) ? t : _.lastSeenNewlyAddedEmojiIds[n];
    null == i || 0 > l.default.compare(i.id, r)
        ? (h[n] = {
              id: r,
              lastSeen: Date.now(),
              acknowledged: !0,
          })
        : (h[n] = f(u({}, i), { acknowledged: !0 }));
}
function E(e) {
    var t;
    let { guildId: n, emojiId: r } = e,
        i = null != (t = h[n]) ? t : _.lastSeenNewlyAddedEmojiIds[n];
    (null == i || 0 > l.default.compare(i.id, r)) &&
        (h[n] = {
            id: r,
            lastSeen: Date.now(),
            acknowledged: !1,
        });
}
function b() {
    for (let e in h) _.lastSeenNewlyAddedEmojiIds[e] = h[e];
}
function y() {
    (_ = p), b();
}
class O extends (r = s.Ay.PersistedStore) {
    initialize(e) {
        _ = null != e ? e : p;
    }
    getState() {
        return _;
    }
    getLastSeenEmojiByGuild(e) {
        return _.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || l.default.compare(t, n.id) > 0) return !0;
        {
            let e = a()(n.lastSeen);
            return a()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
c(O, "displayName", "NewlyAddedEmojiStore"),
    c(O, "persistKey", "NewlyAddedEmojiStore"),
    c(O, "migrations", [
        (e) => {
            let t = e.lastSeenNewlyAddedEmojiIds,
                n = {};
            for (let e in t) {
                let r = t[e];
                n[e] = {
                    id: r,
                    lastSeen: Date.now(),
                    acknowledged: !1,
                };
            }
            return { lastSeenNewlyAddedEmojiIds: n };
        },
    ]);
let A = new O(o.h, {
    LOGOUT: m,
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: g,
    NEWLY_ADDED_EMOJI_SEEN_PENDING: E,
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: b,
    CLEAR_CACHES: y,
    CONNECTION_CLOSED: b,
});
