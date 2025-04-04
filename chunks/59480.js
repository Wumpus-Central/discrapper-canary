n.d(t, { a: () => a }), n(47120), n(653041);
var r = n(271383),
    i = n(594174),
    o = n(981631);
class a {
    static fromMessage(e, t, n, r) {
        let [i, o] = a.deriveMemberUsers(e, n);
        return {
            id: n.id,
            channelId: t,
            message: n,
            members: i,
            users: o,
            connectionId: r
        };
    }
    static deriveMemberUsers(e, t) {
        var n, a, s, l;
        let c = new Set([null == (n = t.author) ? void 0 : n.id, null == (a = t.interaction) ? void 0 : a.user.id, ...(null != (l = null == (s = t.mentions) ? void 0 : s.map((e) => e.id)) ? l : [])]),
            u = [],
            d = [];
        for (let t of c) {
            if (null == t) continue;
            let n = i.default.getUser(t),
                a = r.ZP.getTrueMember(null != e ? e : o.lds, t);
            null != n && d.push(n), null != a && u.push(a);
        }
        return [u, d];
    }
}
