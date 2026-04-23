"use strict";
n.d(t, { B: () => a }), n(321073);
var r = n(696451),
    i = n(287809),
    s = n(652215);
class a {
    static fromMessage(e, t, n, r) {
        let [i, s] = a.deriveMemberUsers(e, n);
        return { id: n.id, channelId: t, message: n, members: i, users: s, connectionId: r };
    }
    static deriveMemberUsers(e, t) {
        let n = new Set([t.author?.id, t.interaction?.user.id, ...(t.mentions?.map((e) => e.id) ?? [])]),
            a = [],
            o = [];
        for (let t of n) {
            if (null == t) continue;
            let n = i.default.getUser(t),
                l = r.Ay.getTrueMember(e ?? s.dJq, t);
            null != n && o.push(n), null != l && a.push(l);
        }
        return [a, o];
    }
}
