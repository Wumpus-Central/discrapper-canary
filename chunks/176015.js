"use strict";
n.d(t, { B: () => s }), n(321073);
var r = n(696451),
    i = n(287809),
    a = n(652215);
class s {
    static fromMessage(e, t, n, r) {
        let [i, a] = s.deriveMemberUsers(e, n);
        return { id: n.id, channelId: t, message: n, members: i, users: a, connectionId: r };
    }
    static deriveMemberUsers(e, t) {
        let n = new Set([t.author?.id, t.interaction?.user.id, ...(t.mentions?.map((e) => e.id) ?? [])]),
            s = [],
            o = [];
        for (let t of n) {
            if (null == t) continue;
            let n = i.default.getUser(t),
                l = r.Ay.getTrueMember(e ?? a.dJq, t);
            null != n && o.push(n), null != l && s.push(l);
        }
        return [s, o];
    }
}
