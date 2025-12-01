n.d(t, { Z: () => E }), n(388685);
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let f = {};
class p {
    static ensure(e, t, n) {
        var r, i;
        let a = ""
            .concat(e, ":")
            .concat(t.name, ":")
            .concat(null != (r = t.id) ? r : "", ":")
            .concat(n);
        return (f[a] = null != (i = f[a]) ? i : new p());
    }
    constructor() {
        d(this, "users", void 0), d(this, "fetched", void 0), (this.fetched = !1), (this.users = new Map());
    }
}
function _() {
    f = {};
}
function m(e) {
    let { type: t, messageId: n, userId: r, emoji: i, reactionType: a } = e,
        o = p.ensure(n, i, a);
    if ("MESSAGE_REACTION_ADD" === t) {
        let e = u.default.getUser(r);
        null != e && o.users.set(r, e);
    } else o.users.delete(r);
}
function h(e) {
    let { messageId: t, users: n, emoji: r, reactionType: i } = e,
        a = p.ensure(t, r, i);
    n.forEach((e) => a.users.set(e.id, new l.Z(e)));
}
class g extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, o.Z, u.default);
    }
    getReactions(e, t, n, r, i) {
        let a = p.ensure(t, n, i);
        if (!a.fetched) {
            let l = c.Z.getChannel(e),
                u = null != l ? l.getGuildId() : null;
            if (null != u && o.Z.isLurking(u)) return;
            s.U0({
                channelId: e,
                messageId: t,
                emoji: n,
                limit: r,
                type: i,
            }),
                (a.fetched = !0);
        }
        return a.users;
    }
}
d(g, "displayName", "MessageReactionsStore");
let E = new g(a.Z, {
    CONNECTION_OPEN: _,
    MESSAGE_REACTION_ADD: m,
    MESSAGE_REACTION_REMOVE: m,
    MESSAGE_REACTION_ADD_USERS: h,
});
