r.d(n, {
    CR: function () {
        return D;
    },
    oL: function () {
        return L;
    },
    so: function () {
        return i;
    }
});
var i,
    a,
    s = r(724458);
var o = r(653041);
var l = r(47120);
var u = r(392711),
    c = r.n(u),
    d = r(108131),
    f = r.n(d),
    _ = r(149765),
    h = r(442837),
    p = r(570140),
    m = r(353926),
    g = r(700785),
    E = r(199902),
    v = r(314897),
    I = r(592125),
    T = r(650774),
    b = r(271383),
    y = r(430824),
    S = r(158776),
    A = r(885110),
    N = r(594174),
    C = r(981631),
    R = r(388032);
function O(e, n, r) {
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
let D = 'everyone',
    L = 0;
function x(e, n, r, i) {
    switch (n) {
        case C.Skl.ONLINE:
        case C.Skl.OFFLINE:
        case C.Skl.UNKNOWN:
            return {
                type: 'GROUP',
                key: n,
                id: n,
                get title() {
                    switch (n) {
                        case C.Skl.ONLINE:
                            return R.intl.string(R.t.WbGtnJ);
                        case C.Skl.OFFLINE:
                            return R.intl.string(R.t.Vv0abG);
                        default:
                            return R.intl.string(R.t['UQMV/P']);
                    }
                },
                count: r,
                index: i
            };
        default:
            let a = y.Z.getGuild(e),
                s = null != a ? y.Z.getRole(a.id, n) : null;
            return {
                type: 'GROUP',
                key: n,
                id: n,
                title: null != s ? s.name : '',
                count: r,
                index: i
            };
    }
}
function w(e, n, r) {
    let i = r === v.default.getId(),
        a = S.Z.isMobileOnline(r),
        s = i ? A.Z.getStatus() : S.Z.getStatus(r, e),
        o = i ? A.Z.getActivities() : S.Z.getActivities(r, e),
        l = E.Z.getStreamForUser(r, e),
        u = N.default.getUser(r);
    return null == u
        ? null
        : {
              type: 'MEMBER',
              ...b.ZP.getMember(e, r),
              user: u,
              status: s,
              activities: o,
              applicationStream: l,
              isOwner: n === r,
              isMobileOnline: a
          };
}
function P(e) {
    let n = I.Z.getChannel(e);
    return null == n ? D : null == n.memberListId ? M(n) : n.memberListId;
}
function M(e) {
    return g.oz(C.Plq.VIEW_CHANNEL, e)
        ? D
        : f()
              .v3(
                  c()(e.permissionOverwrites)
                      .reduce((e, n) => {
                          let { id: r, allow: i, deny: a } = n;
                          return _.e$(i, C.Plq.VIEW_CHANNEL) ? e.push('allow:'.concat(r)) : _.e$(a, C.Plq.VIEW_CHANNEL) && e.push('deny:'.concat(r)), e;
                      }, [])
                      .sort()
                      .join(',')
              )
              .toString();
}
!(function (e) {
    (e.GROUP = 'GROUP'), (e.MEMBER = 'MEMBER'), (e.CONTENT_INVENTORY = 'CONTENT_INVENTORY'), (e.CONTENT_INVENTORY_GROUP = 'CONTENT_INVENTORY_GROUP'), (e.HIDDEN_CONTENT_INVENTORY = 'HIDDEN_CONTENT_INVENTORY'), (e.CONTENT_INVENTORY_LEADERBOARD = 'CONTENT_INVENTORY_LEADERBOARD');
})(i || (i = {}));
class k {
    updateOwnerId() {
        let e = y.Z.getGuild(this.guildId);
        if (null == e) return !1;
        let n = g.iJ(e);
        return this.ownerId !== n && ((this.ownerId = n), !0);
    }
    setGroups(e) {
        let n = 0;
        (this.groups = e.map((e) => {
            var r;
            let i = n,
                a = Math.max(0, null !== (r = e.count) && void 0 !== r ? r : 0);
            return (n += a + 1), x(this.guildId, e.id, a, i);
        })),
            (this.rows.length = n);
    }
    sync(e, n) {
        let [r] = e;
        n.forEach((e, n) => this.update(r + n, e));
    }
    invalidate(e) {
        let [n, r] = e;
        for (let e = n; e <= r; e++) {
            let n = this.rows[e];
            if (null == n) break;
            delete this.rows[e], 'MEMBER' === n.type && delete this.members[n.user.id];
        }
        this.version++;
    }
    insert(e, n) {
        let { group: r, member: i } = n;
        if (null != r) this.rows.splice(e, 0, x(this.guildId, r.id, r.count));
        else if (null != i) {
            let n = w(this.guildId, this.ownerId, i.user.id);
            if (null == n) return;
            this.rows.splice(e, 0, n), (this.members[i.user.id] = n);
        }
        this.version++;
    }
    update(e, n) {
        let { group: r, member: i } = n,
            a = this.rows[e];
        if ((null != a && 'MEMBER' === a.type && delete this.members[a.user.id], null != r)) this.rows[e] = x(this.guildId, r.id, r.count);
        else if (null != i) {
            let n = w(this.guildId, this.ownerId, i.user.id);
            if (null == n) return;
            (this.rows[e] = n), (this.members[i.user.id] = n);
        }
        this.version++;
    }
    delete(e) {
        let n = this.rows[e];
        if (null != n) 'MEMBER' === n.type && delete this.members[n.user.id], this.rows.splice(e, 1), this.version++;
    }
    rebuildMember(e) {
        let n = this.members[e];
        if (null != n) Object.assign(n, w(this.guildId, this.ownerId, e)), this.version++;
    }
    rebuildMembers() {
        let e = Object.keys(this.members);
        for (let n = 0; n < e.length; n++) {
            let r = e[n];
            this.rebuildMember(r);
        }
    }
    constructor(e, n) {
        O(this, 'guildId', void 0), O(this, 'listId', void 0), O(this, 'ownerId', void 0), O(this, 'rows', []), O(this, 'groups', []), O(this, 'members', {}), O(this, 'version', 0), (this.guildId = e), (this.listId = n), this.updateOwnerId();
    }
}
class U {
    get(e, n) {
        let r = this._guildLists[e];
        null == r && (r = this._guildLists[e] = {});
        let i = r[n];
        return (
            null == i &&
                ((i = new k(e, n)).setGroups([
                    {
                        id: C.Skl.UNKNOWN,
                        count: 0
                    }
                ]),
                (r[n] = i)),
            i
        );
    }
    forEach(e, n) {
        if (null == e)
            c().forEach(this._guildLists, (e) => {
                c().forEach(e, n);
            });
        else {
            let r = this._guildLists[e];
            null != r && c().forEach(r, n);
        }
    }
    delete(e) {
        delete this._guildLists[e];
    }
    reset() {
        this._guildLists = {};
    }
    constructor() {
        O(this, '_guildLists', {});
    }
}
let B = new U();
function G(e) {
    let n = B.get(e.guildId, e.id);
    e.ops.forEach((e) => {
        switch (e.op) {
            case 'SYNC':
                n.sync(e.range, e.items);
                break;
            case 'INVALIDATE':
                n.invalidate(e.range);
                break;
            case 'INSERT':
                n.insert(e.index, e.item);
                break;
            case 'UPDATE':
                n.update(e.index, e.item);
                break;
            case 'DELETE':
                n.delete(e.index);
        }
    }),
        n.setGroups(e.groups);
}
function Z() {
    B.reset();
}
function F(e) {
    let { guild: n } = e;
    B.forEach(n.id, (e) => {
        e.updateOwnerId() && e.rebuildMembers();
    });
}
function V(e) {
    let { guild: n } = e;
    B.delete(n.id);
}
function j(e) {
    let { guildId: n } = e;
    B.forEach(n, (e) => e.rebuildMembers());
}
function H(e) {
    let { guildId: n, user: r } = e;
    B.forEach(n, (e) => e.rebuildMember(r.id));
}
let Y = [];
function W() {
    let e = E.Z.getAllApplicationStreams(),
        n = Y.concat(e);
    (Y = e),
        n.forEach((e) => {
            B.forEach(null, (n) => n.rebuildMember(e.ownerId));
        });
}
function K() {
    let e = v.default.getId();
    B.forEach(null, (n) => n.rebuildMember(e));
}
function z() {
    return !0;
}
class q extends (a = h.ZP.Store) {
    initialize() {
        this.waitFor(N.default, y.Z, I.Z, b.ZP, S.Z, A.Z, v.default, T.Z, E.Z, m.Z), this.syncWith([A.Z], K), this.syncWith([E.Z], W);
    }
    getProps(e, n) {
        let r = B.get(e, P(n));
        return {
            listId: ''.concat(r.guildId, ':').concat(r.listId),
            groups: r.groups,
            rows: r.rows,
            version: r.version
        };
    }
    getRows(e, n) {
        return B.get(e, P(n)).rows;
    }
}
O(q, 'displayName', 'ChannelMemberStore'),
    (n.ZP = new q(p.Z, {
        CONNECTION_OPEN: Z,
        OVERLAY_INITIALIZE: Z,
        GUILD_MEMBER_LIST_UPDATE: G,
        GUILD_UPDATE: F,
        GUILD_DELETE: V,
        GUILD_ROLE_UPDATE: j,
        GUILD_MEMBER_UPDATE: H,
        CHANNEL_UPDATES: z
    }));
