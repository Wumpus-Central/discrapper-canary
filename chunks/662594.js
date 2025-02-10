n.d(t, {
    CR: () => A,
    ZP: () => W,
    oL: () => N,
    so: () => C
}),
    n(724458),
    n(653041),
    n(47120);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(108131),
    o = n.n(s),
    l = n(149765),
    u = n(442837),
    c = n(570140),
    d = n(353926),
    f = n(700785),
    _ = n(199902),
    p = n(314897),
    h = n(592125),
    m = n(650774),
    g = n(271383),
    E = n(430824),
    v = n(158776),
    y = n(885110),
    I = n(594174),
    T = n(981631),
    b = n(388032);
function S(e, t, n) {
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
let A = 'everyone',
    N = 0;
var C = (function (e) {
    return (e.GROUP = 'GROUP'), (e.MEMBER = 'MEMBER'), (e.CONTENT_INVENTORY = 'CONTENT_INVENTORY'), (e.CONTENT_INVENTORY_GROUP = 'CONTENT_INVENTORY_GROUP'), (e.HIDDEN_CONTENT_INVENTORY = 'HIDDEN_CONTENT_INVENTORY'), (e.CONTENT_INVENTORY_LEADERBOARD = 'CONTENT_INVENTORY_LEADERBOARD'), e;
})({});
function R(e, t, n, i) {
    switch (t) {
        case T.Skl.ONLINE:
        case T.Skl.OFFLINE:
        case T.Skl.UNKNOWN:
            return {
                type: 'GROUP',
                key: t,
                id: t,
                get title() {
                    switch (t) {
                        case T.Skl.ONLINE:
                            return b.intl.string(b.t.WbGtnJ);
                        case T.Skl.OFFLINE:
                            return b.intl.string(b.t.Vv0abG);
                        default:
                            return b.intl.string(b.t['UQMV/P']);
                    }
                },
                count: n,
                index: i
            };
        default:
            let r = E.Z.getGuild(e),
                a = null != r ? E.Z.getRole(r.id, t) : null;
            return {
                type: 'GROUP',
                key: t,
                id: t,
                title: null != a ? a.name : '',
                count: n,
                index: i
            };
    }
}
function O(e, t, n) {
    let i = n === p.default.getId(),
        r = v.Z.isMobileOnline(n),
        a = i ? y.Z.getStatus() : v.Z.getStatus(n, e),
        s = i ? y.Z.getActivities() : v.Z.getActivities(n, e),
        o = _.Z.getStreamForUser(n, e),
        l = I.default.getUser(n);
    return null == l
        ? null
        : {
              type: 'MEMBER',
              ...g.ZP.getMember(e, n),
              user: l,
              status: a,
              activities: s,
              applicationStream: o,
              isOwner: t === n,
              isMobileOnline: r
          };
}
function D(e) {
    let t = h.Z.getChannel(e);
    return null == t ? A : null == t.memberListId ? L(t) : t.memberListId;
}
function L(e) {
    return f.oz(T.Plq.VIEW_CHANNEL, e)
        ? A
        : o()
              .v3(
                  a()(e.permissionOverwrites)
                      .reduce((e, t) => {
                          let { id: n, allow: i, deny: r } = t;
                          return l.e$(i, T.Plq.VIEW_CHANNEL) ? e.push('allow:'.concat(n)) : l.e$(r, T.Plq.VIEW_CHANNEL) && e.push('deny:'.concat(n)), e;
                      }, [])
                      .sort()
                      .join(',')
              )
              .toString();
}
class x {
    updateOwnerId() {
        let e = E.Z.getGuild(this.guildId);
        if (null == e) return !1;
        let t = f.iJ(e);
        return this.ownerId !== t && ((this.ownerId = t), !0);
    }
    setGroups(e) {
        let t = 0;
        (this.groups = e.map((e) => {
            var n;
            let i = t,
                r = Math.max(0, null !== (n = e.count) && void 0 !== n ? n : 0);
            return (t += r + 1), R(this.guildId, e.id, r, i);
        })),
            (this.rows.length = t);
    }
    sync(e, t) {
        let [n] = e;
        t.forEach((e, t) => this.update(n + t, e));
    }
    invalidate(e) {
        let [t, n] = e;
        for (let e = t; e <= n; e++) {
            let t = this.rows[e];
            if (null == t) break;
            delete this.rows[e], 'MEMBER' === t.type && delete this.members[t.user.id];
        }
        this.version++;
    }
    insert(e, t) {
        let { group: n, member: i } = t;
        if (null != n) this.rows.splice(e, 0, R(this.guildId, n.id, n.count));
        else if (null != i) {
            let t = O(this.guildId, this.ownerId, i.user.id);
            if (null == t) return;
            this.rows.splice(e, 0, t), (this.members[i.user.id] = t);
        }
        this.version++;
    }
    update(e, t) {
        let { group: n, member: i } = t,
            r = this.rows[e];
        if ((null != r && 'MEMBER' === r.type && delete this.members[r.user.id], null != n)) this.rows[e] = R(this.guildId, n.id, n.count);
        else if (null != i) {
            let t = O(this.guildId, this.ownerId, i.user.id);
            if (null == t) return;
            (this.rows[e] = t), (this.members[i.user.id] = t);
        }
        this.version++;
    }
    delete(e) {
        let t = this.rows[e];
        null != t && ('MEMBER' === t.type && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++);
    }
    rebuildMember(e) {
        let t = this.members[e];
        null != t && (Object.assign(t, O(this.guildId, this.ownerId, e)), this.version++);
    }
    rebuildMembers() {
        let e = Object.keys(this.members);
        for (let t = 0; t < e.length; t++) {
            let n = e[t];
            this.rebuildMember(n);
        }
    }
    constructor(e, t) {
        S(this, 'guildId', void 0), S(this, 'listId', void 0), S(this, 'ownerId', void 0), S(this, 'rows', []), S(this, 'groups', []), S(this, 'members', {}), S(this, 'version', 0), (this.guildId = e), (this.listId = t), this.updateOwnerId();
    }
}
class w {
    get(e, t) {
        let n = this._guildLists[e];
        null == n && (n = this._guildLists[e] = {});
        let i = n[t];
        return (
            null == i &&
                ((i = new x(e, t)).setGroups([
                    {
                        id: T.Skl.UNKNOWN,
                        count: 0
                    }
                ]),
                (n[t] = i)),
            i
        );
    }
    forEach(e, t) {
        if (null == e)
            a().forEach(this._guildLists, (e) => {
                a().forEach(e, t);
            });
        else {
            let n = this._guildLists[e];
            null != n && a().forEach(n, t);
        }
    }
    delete(e) {
        delete this._guildLists[e];
    }
    reset() {
        this._guildLists = {};
    }
    constructor() {
        S(this, '_guildLists', {});
    }
}
let P = new w();
function M(e) {
    let t = P.get(e.guildId, e.id);
    e.ops.forEach((e) => {
        switch (e.op) {
            case 'SYNC':
                t.sync(e.range, e.items);
                break;
            case 'INVALIDATE':
                t.invalidate(e.range);
                break;
            case 'INSERT':
                t.insert(e.index, e.item);
                break;
            case 'UPDATE':
                t.update(e.index, e.item);
                break;
            case 'DELETE':
                t.delete(e.index);
        }
    }),
        t.setGroups(e.groups);
}
function k() {
    P.reset();
}
function U(e) {
    let { guild: t } = e;
    P.forEach(t.id, (e) => {
        e.updateOwnerId() && e.rebuildMembers();
    });
}
function G(e) {
    let { guild: t } = e;
    P.delete(t.id);
}
function B(e) {
    let { guildId: t } = e;
    P.forEach(t, (e) => e.rebuildMembers());
}
function Z(e) {
    let { guildId: t, user: n } = e;
    P.forEach(t, (e) => e.rebuildMember(n.id));
}
let F = [];
function V() {
    let e = _.Z.getAllApplicationStreams(),
        t = F.concat(e);
    (F = e),
        t.forEach((e) => {
            P.forEach(null, (t) => t.rebuildMember(e.ownerId));
        });
}
function j() {
    let e = p.default.getId();
    P.forEach(null, (t) => t.rebuildMember(e));
}
function H() {
    return !0;
}
class Y extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(I.default, E.Z, h.Z, g.ZP, v.Z, y.Z, p.default, m.Z, _.Z, d.Z), this.syncWith([y.Z], j), this.syncWith([_.Z], V);
    }
    getProps(e, t) {
        let n = P.get(e, D(t));
        return {
            listId: ''.concat(n.guildId, ':').concat(n.listId),
            groups: n.groups,
            rows: n.rows,
            version: n.version
        };
    }
    getRows(e, t) {
        return P.get(e, D(t)).rows;
    }
}
S(Y, 'displayName', 'ChannelMemberStore');
let W = new Y(c.Z, {
    CONNECTION_OPEN: k,
    OVERLAY_INITIALIZE: k,
    GUILD_MEMBER_LIST_UPDATE: M,
    GUILD_UPDATE: U,
    GUILD_DELETE: G,
    GUILD_ROLE_UPDATE: B,
    GUILD_MEMBER_UPDATE: Z,
    CHANNEL_UPDATES: H
});
