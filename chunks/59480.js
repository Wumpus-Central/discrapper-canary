r.d(n, {
    a: function () {
        return u;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(271383),
    s = r(594174),
    l = r(981631);
class u {
    static fromMessage(e, n, r, i) {
        let [a, o] = u.deriveMemberUsers(e, r);
        return {
            id: r.id,
            channelId: n,
            message: r,
            members: a,
            users: o,
            connectionId: i
        };
    }
    static deriveMemberUsers(e, n) {
        var r, i, a, u;
        let c = new Set([null === (r = n.author) || void 0 === r ? void 0 : r.id, null === (i = n.interaction) || void 0 === i ? void 0 : i.user.id, ...(null !== (u = null === (a = n.mentions) || void 0 === a ? void 0 : a.map((e) => e.id)) && void 0 !== u ? u : [])]),
            d = [],
            f = [];
        for (let n of c) {
            if (null == n) continue;
            let r = s.default.getUser(n),
                i = o.ZP.getTrueMember(null != e ? e : l.lds, n);
            null != r && f.push(r), null != i && d.push(i);
        }
        return [d, f];
    }
}
