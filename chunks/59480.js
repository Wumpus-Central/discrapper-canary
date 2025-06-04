n.d(t, { a: () => o }), n(388685), n(539854);
var r = n(271383),
    i = n(594174),
    a = n(981631);
class o {
    static fromMessage(e, t, n, r) {
        let [i, a] = o.deriveMemberUsers(e, n);
        return {
            id: n.id,
            channelId: t,
            message: n,
            members: i,
            users: a,
            connectionId: r
        };
    }
    static deriveMemberUsers(e, t) {
        var n, o, s, l;
        let c = new Set([null == (n = t.author) ? void 0 : n.id, null == (o = t.interaction) ? void 0 : o.user.id, ...(null != (l = null == (s = t.mentions) ? void 0 : s.map((e) => e.id)) ? l : [])]),
            u = [],
            d = [];
        for (let t of c) {
            if (null == t) continue;
            let n = i.default.getUser(t),
                o = r.ZP.getTrueMember(null != e ? e : a.lds, t);
            null != n && d.push(n), null != o && u.push(o);
        }
        return [u, d];
    }
}
