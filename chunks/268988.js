"use strict";
n.d(t, { A: () => _ }), n(321073);
var r = n(311907),
    i = n(73153),
    a = n(141468);
let s = 15,
    o = new Map();
function l(e) {
    let { guildId: t, data: n } = e;
    if (null == t) return !1;
    let r = !1,
        i = [...(o.get(t) ?? [])],
        l = new Set(i);
    return (
        n.forEach((e) => {
            e.messages.forEach((e) => {
                let [t] = e,
                    n = (0, a.rh)(t);
                !l.has(n.author.id) && l.size < s && (l.add(n.author.id), i.push(n.author.id), (r = !0));
            });
        }),
        r && o.set(t, i),
        r
    );
}
function u() {
    o = new Map();
}
let c = [];
class d extends r.Ay.Store {
    static displayName = "SearchRecentMessageStore";
    getRecentMessageAuthorIds(e) {
        return o.get(e) ?? c;
    }
}
let _ = new d(i.h, { SEARCH_MESSAGES_SUCCESS: l, SEARCH_RECENT_MESSAGES_CLEAR: u, CONNECTION_OPEN: u });
