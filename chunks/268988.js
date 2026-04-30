n.d(t, { A: () => u }), n(321073);
var i = n(17928),
    l = n(228366),
    a = n(320095);
let r = new Map();
function s() {
    r = new Map();
}
let o = [];
class d extends i.Ay.Store {
    static displayName = "SearchRecentMessageStore";
    getRecentMessageAuthorIds(e) {
        return r.get(e) ?? o;
    }
}
let u = new d(l.h, {
    SEARCH_MESSAGES_SUCCESS: function (e) {
        let { guildId: t, data: n } = e;
        if (null == t) return !1;
        let i = !1,
            l = [...(r.get(t) ?? [])],
            s = new Set(l);
        return (
            n.forEach((e) => {
                e.messages.forEach((e) => {
                    let [t] = e,
                        n = (0, a.rh)(t);
                    !s.has(n.author.id) && s.size < 15 && (s.add(n.author.id), l.push(n.author.id), (i = !0));
                });
            }),
            i && r.set(t, l),
            i
        );
    },
    SEARCH_RECENT_MESSAGES_CLEAR: s,
    CONNECTION_OPEN: s,
});
