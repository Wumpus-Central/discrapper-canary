n.d(t, { a: () => s }), n(47120), n(653041);
var i = n(271383),
    r = n(594174),
    a = n(981631);
class s {
    static fromMessage(e, t, n, i) {
        let [r, a] = s.deriveMemberUsers(e, n);
        return {
            id: n.id,
            channelId: t,
            message: n,
            members: r,
            users: a,
            connectionId: i
        };
    }
    static deriveMemberUsers(e, t) {
        var n, s, o, l;
        let u = new Set([null === (n = t.author) || void 0 === n ? void 0 : n.id, null === (s = t.interaction) || void 0 === s ? void 0 : s.user.id, ...(null !== (l = null === (o = t.mentions) || void 0 === o ? void 0 : o.map((e) => e.id)) && void 0 !== l ? l : [])]),
            c = [],
            d = [];
        for (let t of u) {
            if (null == t) continue;
            let n = r.default.getUser(t),
                s = i.ZP.getTrueMember(null != e ? e : a.lds, t);
            null != n && d.push(n), null != s && c.push(s);
        }
        return [c, d];
    }
}
