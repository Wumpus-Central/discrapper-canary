n.d(t, { Z: () => E });
var i,
    r = n(442837),
    a = n(570140),
    s = n(41776),
    o = n(222677),
    l = n(598077),
    u = n(592125),
    c = n(594174);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = {};
class _ {
    static ensure(e, t, n) {
        var i, r;
        let a = ''
            .concat(e, ':')
            .concat(t.name, ':')
            .concat(null !== (i = t.id) && void 0 !== i ? i : '', ':')
            .concat(n);
        return (f[a] = null !== (r = f[a]) && void 0 !== r ? r : new _());
    }
    constructor() {
        d(this, 'users', void 0), d(this, 'fetched', void 0), (this.fetched = !1), (this.users = {});
    }
}
function p() {
    f = {};
}
function h(e) {
    let { type: t, messageId: n, userId: i, emoji: r, reactionType: a } = e,
        s = _.ensure(n, r, a);
    if ('MESSAGE_REACTION_ADD' === t) {
        let e = c.default.getUser(i);
        null != e && (s.users[i] = e);
    } else delete s.users[i];
}
function m(e) {
    let { messageId: t, users: n, emoji: i, reactionType: r } = e,
        a = _.ensure(t, i, r);
    n.forEach((e) => (a.users[e.id] = new l.Z(e)));
}
class g extends (i = r.ZP.Store) {
    getReactions(e, t, n, i, r) {
        let a = _.ensure(t, n, r);
        if (!a.fetched) {
            let l = u.Z.getChannel(e),
                c = null != l ? l.getGuildId() : null;
            if (null != c && s.Z.isLurking(c)) return;
            o.U0({
                channelId: e,
                messageId: t,
                emoji: n,
                limit: i,
                type: r
            }),
                (a.fetched = !0);
        }
        return a.users;
    }
}
d(g, 'displayName', 'MessageReactionsStore');
let E = new g(a.Z, {
    CONNECTION_OPEN: p,
    MESSAGE_REACTION_ADD: h,
    MESSAGE_REACTION_REMOVE: h,
    MESSAGE_REACTION_ADD_USERS: m
});
