n.d(t, { B: () => s }), n(896048), n(321073);
var r = n(696451),
    i = n(287809),
    a = n(652215);
class s {
    static fromMessage(e, t, n, r) {
        let [i, a] = s.deriveMemberUsers(e, n);
        return {
            id: n.id,
            channelId: t,
            message: n,
            members: i,
            users: a,
            connectionId: r,
        };
    }
    static deriveMemberUsers(e, t) {
        var n, s, o, l;
        let c = new Set([
                null == (s = t.author) ? void 0 : s.id,
                null == (o = t.interaction) ? void 0 : o.user.id,
                ...(null != (n = null == (l = t.mentions) ? void 0 : l.map((e) => e.id)) ? n : []),
            ]),
            u = [],
            d = [];
        for (let t of c) {
            if (null == t) continue;
            let n = i.default.getUser(t),
                s = r.Ay.getTrueMember(null != e ? e : a.dJq, t);
            null != n && d.push(n), null != s && u.push(s);
        }
        return [u, d];
    }
}
