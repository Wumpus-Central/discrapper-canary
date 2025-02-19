n.d(t, {
    CR: () => C,
    ZP: () => q,
    oL: () => R,
    so: () => P
}),
    n(653041),
    n(230036),
    n(47120);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(108131),
    s = n.n(a),
    l = n(149765),
    c = n(442837),
    u = n(570140),
    d = n(353926),
    f = n(700785),
    p = n(199902),
    _ = n(314897),
    h = n(592125),
    m = n(650774),
    g = n(271383),
    E = n(430824),
    v = n(158776),
    b = n(885110),
    y = n(594174),
    O = n(981631),
    S = n(388032);
function I(e, t, n) {
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
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = 'everyone',
    R = 0;
var P = (function (e) {
    return (e.GROUP = 'GROUP'), (e.MEMBER = 'MEMBER'), (e.CONTENT_INVENTORY = 'CONTENT_INVENTORY'), (e.CONTENT_INVENTORY_GROUP = 'CONTENT_INVENTORY_GROUP'), (e.HIDDEN_CONTENT_INVENTORY = 'HIDDEN_CONTENT_INVENTORY'), (e.CONTENT_INVENTORY_LEADERBOARD = 'CONTENT_INVENTORY_LEADERBOARD'), e;
})({});
function w(e, t, n, r) {
    switch (t) {
        case O.Skl.ONLINE:
        case O.Skl.OFFLINE:
        case O.Skl.UNKNOWN:
            return {
                type: 'GROUP',
                key: t,
                id: t,
                get title() {
                    switch (t) {
                        case O.Skl.ONLINE:
                            return S.NW.string(S.t.WbGtnJ);
                        case O.Skl.OFFLINE:
                            return S.NW.string(S.t.Vv0abG);
                        default:
                            return S.NW.string(S.t['UQMV/P']);
                    }
                },
                count: n,
                index: r
            };
        default:
            let i = E.Z.getGuild(e),
                o = null != i ? E.Z.getRole(i.id, t) : null;
            return {
                type: 'GROUP',
                key: t,
                id: t,
                title: null != o ? o.name : '',
                count: n,
                index: r
            };
    }
}
function D(e, t, n) {
    let r = n === _.default.getId(),
        i = v.Z.isMobileOnline(n),
        o = r ? b.Z.getStatus() : v.Z.getStatus(n, e),
        a = r ? b.Z.getActivities() : v.Z.getActivities(n, e),
        s = p.Z.getStreamForUser(n, e),
        l = y.default.getUser(n);
    return null == l
        ? null
        : A(T({ type: 'MEMBER' }, g.ZP.getMember(e, n)), {
              user: l,
              status: o,
              activities: a,
              applicationStream: s,
              isOwner: t === n,
              isMobileOnline: i
          });
}
function x(e) {
    let t = h.Z.getChannel(e);
    return null == t ? C : null == t.memberListId ? L(t) : t.memberListId;
}
function L(e) {
    return f.oz(O.Plq.VIEW_CHANNEL, e)
        ? C
        : s()
              .v3(
                  o()(e.permissionOverwrites)
                      .reduce((e, t) => {
                          let { id: n, allow: r, deny: i } = t;
                          return l.e$(r, O.Plq.VIEW_CHANNEL) ? e.push('allow:'.concat(n)) : l.e$(i, O.Plq.VIEW_CHANNEL) && e.push('deny:'.concat(n)), e;
                      }, [])
                      .sort()
                      .join(',')
              )
              .toString();
}
class M {
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
            let r = t,
                i = Math.max(0, null !== (n = e.count) && void 0 !== n ? n : 0);
            return (t += i + 1), w(this.guildId, e.id, i, r);
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
        let { group: n, member: r } = t;
        if (null != n) this.rows.splice(e, 0, w(this.guildId, n.id, n.count));
        else if (null != r) {
            let t = D(this.guildId, this.ownerId, r.user.id);
            if (null == t) return;
            this.rows.splice(e, 0, t), (this.members[r.user.id] = t);
        }
        this.version++;
    }
    update(e, t) {
        let { group: n, member: r } = t,
            i = this.rows[e];
        if ((null != i && 'MEMBER' === i.type && delete this.members[i.user.id], null != n)) this.rows[e] = w(this.guildId, n.id, n.count);
        else if (null != r) {
            let t = D(this.guildId, this.ownerId, r.user.id);
            if (null == t) return;
            (this.rows[e] = t), (this.members[r.user.id] = t);
        }
        this.version++;
    }
    delete(e) {
        let t = this.rows[e];
        null != t && ('MEMBER' === t.type && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++);
    }
    rebuildMember(e) {
        let t = this.members[e];
        null != t && (Object.assign(t, D(this.guildId, this.ownerId, e)), this.version++);
    }
    rebuildMembers() {
        let e = Object.keys(this.members);
        for (let t = 0; t < e.length; t++) {
            let n = e[t];
            this.rebuildMember(n);
        }
    }
    constructor(e, t) {
        I(this, 'guildId', void 0), I(this, 'listId', void 0), I(this, 'ownerId', void 0), I(this, 'rows', []), I(this, 'groups', []), I(this, 'members', {}), I(this, 'version', 0), (this.guildId = e), (this.listId = t), this.updateOwnerId();
    }
}
class k {
    get(e, t) {
        let n = this._guildLists[e];
        null == n && (n = this._guildLists[e] = {});
        let r = n[t];
        return (
            null == r &&
                ((r = new M(e, t)).setGroups([
                    {
                        id: O.Skl.UNKNOWN,
                        count: 0
                    }
                ]),
                (n[t] = r)),
            r
        );
    }
    forEach(e, t) {
        if (null == e)
            o().forEach(this._guildLists, (e) => {
                o().forEach(e, t);
            });
        else {
            let n = this._guildLists[e];
            null != n && o().forEach(n, t);
        }
    }
    delete(e) {
        delete this._guildLists[e];
    }
    reset() {
        this._guildLists = {};
    }
    constructor() {
        I(this, '_guildLists', {});
    }
}
let j = new k();
function U(e) {
    let t = j.get(e.guildId, e.id);
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
function G() {
    j.reset();
}
function B(e) {
    let { guild: t } = e;
    j.forEach(t.id, (e) => {
        e.updateOwnerId() && e.rebuildMembers();
    });
}
function Z(e) {
    let { guild: t } = e;
    j.delete(t.id);
}
function F(e) {
    let { guildId: t } = e;
    j.forEach(t, (e) => e.rebuildMembers());
}
function V(e) {
    let { guildId: t, user: n } = e;
    j.forEach(t, (e) => e.rebuildMember(n.id));
}
let H = [];
function W() {
    let e = p.Z.getAllApplicationStreams(),
        t = H.concat(e);
    (H = e),
        t.forEach((e) => {
            j.forEach(null, (t) => t.rebuildMember(e.ownerId));
        });
}
function Y() {
    let e = _.default.getId();
    j.forEach(null, (t) => t.rebuildMember(e));
}
function K() {
    return !0;
}
class z extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(y.default, E.Z, h.Z, g.ZP, v.Z, b.Z, _.default, m.Z, p.Z, d.Z), this.syncWith([b.Z], Y), this.syncWith([p.Z], W);
    }
    getProps(e, t) {
        let n = j.get(e, x(t));
        return {
            listId: ''.concat(n.guildId, ':').concat(n.listId),
            groups: n.groups,
            rows: n.rows,
            version: n.version
        };
    }
    getRows(e, t) {
        return j.get(e, x(t)).rows;
    }
}
I(z, 'displayName', 'ChannelMemberStore');
let q = new z(u.Z, {
    CONNECTION_OPEN: G,
    OVERLAY_INITIALIZE: G,
    GUILD_MEMBER_LIST_UPDATE: U,
    GUILD_UPDATE: B,
    GUILD_DELETE: Z,
    GUILD_ROLE_UPDATE: F,
    GUILD_MEMBER_UPDATE: V,
    CHANNEL_UPDATES: K
});
