n.d(t, { Z: () => E });
var r,
    i = n(442837),
    o = n(570140),
    a = n(41776),
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
        let o = ''
            .concat(e, ':')
            .concat(t.name, ':')
            .concat(null != (r = t.id) ? r : '', ':')
            .concat(n);
        return (f[o] = null != (i = f[o]) ? i : new _());
    }
    constructor() {
        d(this, 'users', void 0), d(this, 'fetched', void 0), (this.fetched = !1), (this.users = {});
    }
}
function p() {
    f = {};
}
function h(e) {
    let { type: t, messageId: n, userId: r, emoji: i, reactionType: o } = e,
        a = _.ensure(n, i, o);
    if ('MESSAGE_REACTION_ADD' === t) {
        let e = u.default.getUser(r);
        null != e && (a.users[r] = e);
    } else delete a.users[r];
}
function m(e) {
    let { messageId: t, users: n, emoji: r, reactionType: i } = e,
        o = _.ensure(t, r, i);
    n.forEach((e) => (o.users[e.id] = new l.Z(e)));
}
class g extends (r = i.ZP.Store) {
    getReactions(e, t, n, r, i) {
        let o = _.ensure(t, n, i);
        if (!o.fetched) {
            let l = c.Z.getChannel(e),
                u = null != l ? l.getGuildId() : null;
            if (null != u && a.Z.isLurking(u)) return;
            s.U0({
                channelId: e,
                messageId: t,
                emoji: n,
                limit: r,
                type: i
            }),
                (o.fetched = !0);
        }
        return o.users;
    }
}
d(g, 'displayName', 'MessageReactionsStore');
let E = new g(o.Z, {
    CONNECTION_OPEN: p,
    MESSAGE_REACTION_ADD: h,
    MESSAGE_REACTION_REMOVE: h,
    MESSAGE_REACTION_ADD_USERS: m
});
