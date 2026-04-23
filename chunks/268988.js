n.d(t, { A: () => u }), n(321073);
var i = n(17928),
    r = n(228366),
    l = n(320095);
let a = new Map();
function s() {
    a = new Map();
}
let o = [];
class d extends i.Ay.Store {
    static displayName = "SearchRecentMessageStore";
    getRecentMessageAuthorIds(e) {
        return a.get(e) ?? o;
    }
}
let u = new d(r.h, {
    SEARCH_MESSAGES_SUCCESS: function (e) {
        let { guildId: t, data: n } = e;
        if (null == t) return !1;
        let i = !1,
            r = [...(a.get(t) ?? [])],
            s = new Set(r);
        return (
            n.forEach((e) => {
                e.messages.forEach((e) => {
                    let [t] = e,
                        n = (0, l.rh)(t);
                    !s.has(n.author.id) && s.size < 15 && (s.add(n.author.id), r.push(n.author.id), (i = !0));
                });
            }),
            i && a.set(t, r),
            i
        );
    },
    SEARCH_RECENT_MESSAGES_CLEAR: s,
    CONNECTION_OPEN: s,
});
