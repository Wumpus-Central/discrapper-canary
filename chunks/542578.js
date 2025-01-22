var i,
    a = r(442837),
    o = r(570140),
    s = r(41776),
    l = r(222677),
    u = r(598077),
    c = r(592125),
    d = r(594174);
function f(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let p = {};
class h {
    static ensure(e, n, r) {
        var i, a;
        let o = ''
            .concat(e, ':')
            .concat(n.name, ':')
            .concat(null !== (i = n.id) && void 0 !== i ? i : '', ':')
            .concat(r);
        return (p[o] = null !== (a = p[o]) && void 0 !== a ? a : new h());
    }
    constructor() {
        f(this, 'users', void 0), f(this, 'fetched', void 0), (this.fetched = !1), (this.users = {});
    }
}
function _() {
    p = {};
}
function m(e) {
    let { type: n, messageId: r, userId: i, emoji: a, reactionType: o } = e,
        s = h.ensure(r, a, o);
    if ('MESSAGE_REACTION_ADD' === n) {
        let e = d.default.getUser(i);
        null != e && (s.users[i] = e);
    } else delete s.users[i];
}
function g(e) {
    let { messageId: n, users: r, emoji: i, reactionType: a } = e,
        o = h.ensure(n, i, a);
    r.forEach((e) => (o.users[e.id] = new u.Z(e)));
}
class E extends (i = a.ZP.Store) {
    getReactions(e, n, r, i, a) {
        let o = h.ensure(n, r, a);
        if (!o.fetched) {
            let u = c.Z.getChannel(e),
                d = null != u ? u.getGuildId() : null;
            if (null != d && s.Z.isLurking(d)) return;
            l.U0({
                channelId: e,
                messageId: n,
                emoji: r,
                limit: i,
                type: a
            }),
                (o.fetched = !0);
        }
        return o.users;
    }
}
f(E, 'displayName', 'MessageReactionsStore'),
    (n.Z = new E(o.Z, {
        CONNECTION_OPEN: _,
        MESSAGE_REACTION_ADD: m,
        MESSAGE_REACTION_REMOVE: m,
        MESSAGE_REACTION_ADD_USERS: g
    }));
