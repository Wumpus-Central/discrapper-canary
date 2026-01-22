n.d(t, {
    A: () => _,
}),
    n(896048),
    n(321073);
var r,
    i = n(311907),
    a = n(73153),
    s = n(141468);

function o(e, t, n) {
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
let l = 15,
    c = new Map();

function u(e) {
    var t;
    let { guildId: n, data: r } = e;
    if (null == n) return !1;
    let i = !1,
        a = [...(null != (t = c.get(n)) ? t : [])],
        o = new Set(a);
    return (
        r.forEach((e) => {
            e.messages.forEach((e) => {
                let [t] = e,
                    n = (0, s.rh)(t);
                !o.has(n.author.id) && o.size < l && (o.add(n.author.id), a.push(n.author.id), (i = !0));
            });
        }),
        i && c.set(n, a),
        i
    );
}

function d() {
    c = new Map();
}
let f = [];
class p extends (r = i.Ay.Store) {
    getRecentMessageAuthorIds(e) {
        var t;
        return null != (t = c.get(e)) ? t : f;
    }
}
o(p, "displayName", "SearchRecentMessageStore");
let _ = new p(a.h, {
    SEARCH_MESSAGES_SUCCESS: u,
    SEARCH_RECENT_MESSAGES_CLEAR: d,
    CONNECTION_OPEN: d,
});
