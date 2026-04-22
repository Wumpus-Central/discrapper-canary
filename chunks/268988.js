"use strict";
n.d(t, { A: () => d }), n(321073);
var r = n(311907),
    i = n(73153),
    s = n(141468);
let a = new Map();
function o() {
    a = new Map();
}
let l = [];
class u extends r.Ay.Store {
    static displayName = "SearchRecentMessageStore";
    getRecentMessageAuthorIds(e) {
        return a.get(e) ?? l;
    }
}
let d = new u(i.h, {
    SEARCH_MESSAGES_SUCCESS: function (e) {
        let { guildId: t, data: n } = e;
        if (null == t) return !1;
        let r = !1,
            i = [...(a.get(t) ?? [])],
            o = new Set(i);
        return (
            n.forEach((e) => {
                e.messages.forEach((e) => {
                    let [t] = e,
                        n = (0, s.rh)(t);
                    !o.has(n.author.id) && o.size < 15 && (o.add(n.author.id), i.push(n.author.id), (r = !0));
                });
            }),
            r && a.set(t, i),
            r
        );
    },
    SEARCH_RECENT_MESSAGES_CLEAR: o,
    CONNECTION_OPEN: o,
});
