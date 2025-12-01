n.d(t, { Z: () => _ }), n(388685), n(539854);
var r,
    i = n(442837),
    a = n(570140),
    o = n(786761);
function s(e, t, n) {
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
        s = new Set(a);
    return (
        r.forEach((e) => {
            e.messages.forEach((e) => {
                let [t] = e,
                    n = (0, o.e5)(t);
                !s.has(n.author.id) && s.size < l && (s.add(n.author.id), a.push(n.author.id), (i = !0));
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
class p extends (r = i.ZP.Store) {
    getRecentMessageAuthorIds(e) {
        var t;
        return null != (t = c.get(e)) ? t : f;
    }
}
s(p, "displayName", "SearchRecentMessageStore");
let _ = new p(a.Z, {
    SEARCH_MESSAGES_SUCCESS: u,
    SEARCH_RECENT_MESSAGES_CLEAR: d,
    CONNECTION_OPEN: d,
});
