"use strict";
n.d(t, { A: () => c }), n(321073);
var i = n(17928),
    r = n(228366),
    a = n(320095);
let s = new Map();
function l() {
    s = new Map();
}
let o = [];
class d extends i.Ay.Store {
    static displayName = "SearchRecentMessageStore";
    getRecentMessageAuthorIds(e) {
        return s.get(e) ?? o;
    }
}
let c = new d(r.h, {
    SEARCH_MESSAGES_SUCCESS: function (e) {
        let { guildId: t, data: n } = e;
        if (null == t) return !1;
        let i = !1,
            r = [...(s.get(t) ?? [])],
            l = new Set(r);
        return (
            n.forEach((e) => {
                e.messages.forEach((e) => {
                    let [t] = e,
                        n = (0, a.rh)(t);
                    !l.has(n.author.id) && l.size < 15 && (l.add(n.author.id), r.push(n.author.id), (i = !0));
                });
            }),
            i && s.set(t, r),
            i
        );
    },
    SEARCH_RECENT_MESSAGES_CLEAR: l,
    CONNECTION_OPEN: l,
});
