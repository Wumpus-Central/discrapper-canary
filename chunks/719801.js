n(388685), n(539854);
var r,
    i,
    l = n(442837),
    a = n(570140),
    o = n(786761);
let s = new Map(),
    c = new Map();
function u() {
    (s = new Map()), (c = new Map());
}
let d = [],
    p = [];
class f extends (r = l.ZP.Store) {
    getRecentMessageAuthorIds(e) {
        var t;
        return null != (t = s.get(e)) ? t : d;
    }
    getRecentMessageChannelIds(e) {
        var t;
        return null != (t = c.get(e)) ? t : p;
    }
}
(i = "displayName") in f
    ? Object.defineProperty(f, i, {
          value: "SearchRecentMessageStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (f[i] = "SearchRecentMessageStore"),
    new f(a.Z, {
        SEARCH_MESSAGES_SUCCESS: function (e) {
            var t, n;
            let { guildId: r, data: i } = e;
            if (null == r) return !1;
            let l = !1,
                a = !1,
                u = [...(null != (t = s.get(r)) ? t : [])],
                d = new Set(u),
                p = [...(null != (n = c.get(r)) ? n : [])],
                f = new Set(p);
            return (
                i.forEach((e) => {
                    e.messages.forEach((e) => {
                        let [t] = e,
                            n = (0, o.e5)(t);
                        !d.has(n.author.id) && d.size < 15 && (d.add(n.author.id), u.push(n.author.id), (l = !0)),
                            !f.has(n.channel_id) &&
                                f.size < 15 &&
                                (f.add(n.channel_id), p.push(n.channel_id), (a = !0));
                    });
                }),
                l && s.set(r, u),
                a && c.set(r, p),
                l || a
            );
        },
        SEARCH_RECENT_MESSAGES_CLEAR: u,
        CONNECTION_OPEN: u,
    });
