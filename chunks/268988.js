"use strict";
n.d(t, { A: () => c }), n(321073);
var i = n(17928),
    r = n(228366),
    s = n(320095);
let a = new Map();
function o() {
    a = new Map();
}
let l = [];
class u extends i.Ay.Store {
    static displayName = "SearchRecentMessageStore";
    getRecentMessageAuthorIds(e) {
        return a.get(e) ?? l;
    }
}
let c = new u(r.h, {
    SEARCH_MESSAGES_SUCCESS: function (e) {
        let { guildId: t, data: n } = e;
        if (null == t) return !1;
        let i = !1,
            r = [...(a.get(t) ?? [])],
            o = new Set(r);
        return (
            n.forEach((e) => {
                e.messages.forEach((e) => {
                    let [t] = e,
                        n = (0, s.rh)(t);
                    !o.has(n.author.id) && o.size < 15 && (o.add(n.author.id), r.push(n.author.id), (i = !0));
                });
            }),
            i && a.set(t, r),
            i
        );
    },
    SEARCH_RECENT_MESSAGES_CLEAR: o,
    CONNECTION_OPEN: o,
});
