n.d(t, { Z: () => E });
var r,
    i = n(442837),
    a = n(570140),
    o = n(41776),
    s = n(222677),
    l = n(598077),
    c = n(592125),
    u = n(594174);
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
        var r, i;
        let a = ''
            .concat(e, ':')
            .concat(t.name, ':')
            .concat(null != (r = t.id) ? r : '', ':')
            .concat(n);
        return (f[a] = null != (i = f[a]) ? i : new _());
    }
    constructor() {
        d(this, 'users', void 0), d(this, 'fetched', void 0), (this.fetched = !1), (this.users = {});
    }
}
function p() {
    f = {};
}
function h(e) {
    let { type: t, messageId: n, userId: r, emoji: i, reactionType: a } = e,
        o = _.ensure(n, i, a);
    if ('MESSAGE_REACTION_ADD' === t) {
        let e = u.default.getUser(r);
        null != e && (o.users[r] = e);
    } else delete o.users[r];
}
function m(e) {
    let { messageId: t, users: n, emoji: r, reactionType: i } = e,
        a = _.ensure(t, r, i);
    n.forEach((e) => (a.users[e.id] = new l.Z(e)));
}
class g extends (r = i.ZP.Store) {
    getReactions(e, t, n, r, i) {
        let a = _.ensure(t, n, i);
        if (!a.fetched) {
            let l = c.Z.getChannel(e),
                u = null != l ? l.getGuildId() : null;
            if (null != u && o.Z.isLurking(u)) return;
            s.U0({
                channelId: e,
                messageId: t,
                emoji: n,
                limit: r,
                type: i
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
