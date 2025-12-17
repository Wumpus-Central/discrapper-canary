n.d(t, {
    CR: () => P,
    ZP: () => Q,
    oL: () => R,
    so: () => w,
}),
    n(539854),
    n(642613),
    n(388685);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(108131),
    s = n.n(o),
    l = n(149765),
    c = n(442837),
    u = n(570140),
    d = n(353926),
    f = n(700785),
    p = n(199902),
    _ = n(314897),
    m = n(592125),
    h = n(650774),
    g = n(271383),
    E = n(485386),
    b = n(430824),
    y = n(158776),
    O = n(885110),
    v = n(594174),
    S = n(981631),
    I = n(388032);
function T(e, t, n) {
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
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = "everyone",
    R = 0;
var w = (function (e) {
    return (
        (e.GROUP = "GROUP"),
        (e.MEMBER = "MEMBER"),
        (e.CONTENT_INVENTORY = "CONTENT_INVENTORY"),
        (e.CONTENT_INVENTORY_GROUP = "CONTENT_INVENTORY_GROUP"),
        (e.HIDDEN_CONTENT_INVENTORY = "HIDDEN_CONTENT_INVENTORY"),
        (e.CONTENT_INVENTORY_LEADERBOARD = "CONTENT_INVENTORY_LEADERBOARD"),
        e
    );
})({});
function D(e, t, n, r) {
    switch (t) {
        case S.Skl.ONLINE:
        case S.Skl.OFFLINE:
        case S.Skl.UNKNOWN:
            return {
                type: "GROUP",
                key: t,
                id: t,
                get title() {
                    switch (t) {
                        case S.Skl.ONLINE:
                            return I.intl.string(I.t.WbGtnH);
                        case S.Skl.OFFLINE:
                            return I.intl.string(I.t.Vv0abJ);
                        default:
                            return I.intl.string(I.t["UQMV/E"]);
                    }
                },
                count: n,
                index: r,
            };
        default:
            let i = b.Z.getGuild(e),
                a = null != i ? E.Z.getRole(i.id, t) : null;
            return {
                type: "GROUP",
                key: t,
                id: t,
                title: null != a ? a.name : "",
                count: n,
                index: r,
            };
    }
}
function x(e, t, n) {
    let r = n === _.default.getId(),
        i = y.Z.isMobileOnline(n),
        a = r ? O.Z.getStatus() : y.Z.getStatus(n, e),
        o = r ? O.Z.getActivities() : y.Z.getActivities(n, e),
        s = p.Z.getStreamForUser(n, e),
        l = v.default.getUser(n);
    return null == l
        ? null
        : N(C({ type: "MEMBER" }, g.ZP.getMember(e, n)), {
              user: l,
              status: a,
              activities: o,
              applicationStream: s,
              isOwner: t === n,
              isMobileOnline: i,
          });
}
function L(e) {
    let t = m.Z.getChannel(e);
    return null == t ? P : null == t.memberListId ? j(t) : t.memberListId;
}
function j(e) {
    return f.oz(S.Plq.VIEW_CHANNEL, e)
        ? P
        : s()
              .v3(
                  a()(e.permissionOverwrites)
                      .reduce((e, t) => {
                          let { id: n, allow: r, deny: i } = t;
                          return (
                              l.e$(r, S.Plq.VIEW_CHANNEL)
                                  ? e.push("allow:".concat(n))
                                  : l.e$(i, S.Plq.VIEW_CHANNEL) && e.push("deny:".concat(n)),
                              e
                          );
                      }, [])
                      .sort()
                      .join(","),
              )
              .toString();
}
class M {
    updateOwnerId() {
        let e = b.Z.getGuild(this.guildId);
        if (null == e) return !1;
        let t = f.iJ(e);
        return this.ownerId !== t && ((this.ownerId = t), !0);
    }
    setGroups(e) {
        let t = 0;
        (this.groups = e.map((e) => {
            var n;
            let r = t,
                i = Math.max(0, null != (n = e.count) ? n : 0);
            return (t += i + 1), D(this.guildId, e.id, i, r);
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
            delete this.rows[e], "MEMBER" === t.type && delete this.members[t.user.id];
        }
        this.version++;
    }
    insert(e, t) {
        let { group: n, member: r } = t;
        if (null != n) this.rows.splice(e, 0, D(this.guildId, n.id, n.count));
        else if (null != r) {
            let t = x(this.guildId, this.ownerId, r.user.id);
            if (null == t) return;
            this.rows.splice(e, 0, t), (this.members[r.user.id] = t);
        }
        this.version++;
    }
    update(e, t) {
        let { group: n, member: r } = t,
            i = this.rows[e];
        if ((null != i && "MEMBER" === i.type && delete this.members[i.user.id], null != n))
            this.rows[e] = D(this.guildId, n.id, n.count);
        else if (null != r) {
            let t = x(this.guildId, this.ownerId, r.user.id);
            if (null == t) return;
            (this.rows[e] = t), (this.members[r.user.id] = t);
        }
        this.version++;
    }
    delete(e) {
        let t = this.rows[e];
        null != t && ("MEMBER" === t.type && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++);
    }
    rebuildMember(e) {
        let t = this.members[e];
        null != t && (Object.assign(t, x(this.guildId, this.ownerId, e)), this.version++);
    }
    rebuildMembers() {
        let e = Object.keys(this.members);
        for (let t = 0; t < e.length; t++) {
            let n = e[t];
            this.rebuildMember(n);
        }
    }
    constructor(e, t) {
        T(this, "guildId", void 0),
            T(this, "listId", void 0),
            T(this, "ownerId", void 0),
            T(this, "rows", []),
            T(this, "groups", []),
            T(this, "members", {}),
            T(this, "version", 0),
            (this.guildId = e),
            (this.listId = t),
            this.updateOwnerId();
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
                        id: S.Skl.UNKNOWN,
                        count: 0,
                    },
                ]),
                (n[t] = r)),
            r
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
        T(this, "_guildLists", {});
    }
}
let U = new k();
function G(e) {
    let t = U.get(e.guildId, e.id);
    e.ops.forEach((e) => {
        switch (e.op) {
            case "SYNC":
                t.sync(e.range, e.items);
                break;
            case "INVALIDATE":
                t.invalidate(e.range);
                break;
            case "INSERT":
                t.insert(e.index, e.item);
                break;
            case "UPDATE":
                t.update(e.index, e.item);
                break;
            case "DELETE":
                t.delete(e.index);
        }
    }),
        t.setGroups(e.groups);
}
function Z() {
    U.reset();
}
function F(e) {
    let { guild: t } = e;
    U.forEach(t.id, (e) => {
        e.updateOwnerId() && e.rebuildMembers();
    });
}
function B(e) {
    let { guild: t } = e;
    U.delete(t.id);
}
function V(e) {
    let { guildId: t } = e;
    U.forEach(t, (e) => e.rebuildMembers());
}
function H(e) {
    let { guildId: t, user: n } = e;
    U.forEach(t, (e) => e.rebuildMember(n.id));
}
let Y = [];
function W() {
    let e = p.Z.getAllApplicationStreams(),
        t = Y.concat(e);
    (Y = e),
        t.forEach((e) => {
            U.forEach(null, (t) => t.rebuildMember(e.ownerId));
        });
}
function K() {
    let e = _.default.getId();
    U.forEach(null, (t) => t.rebuildMember(e));
}
function z() {
    return !0;
}
class q extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(v.default, b.Z, E.Z, m.Z, g.ZP, y.Z, O.Z, _.default, h.Z, p.Z, d.Z),
            this.syncWith([O.Z], K),
            this.syncWith([p.Z], W);
    }
    getProps(e, t) {
        let n = U.get(e, L(t));
        return {
            listId: "".concat(n.guildId, ":").concat(n.listId),
            groups: n.groups,
            rows: n.rows,
            version: n.version,
        };
    }
    getRows(e, t) {
        return U.get(e, L(t)).rows;
    }
}
T(q, "displayName", "ChannelMemberStore");
let Q = new q(u.Z, {
    CONNECTION_OPEN: Z,
    OVERLAY_INITIALIZE: Z,
    GUILD_MEMBER_LIST_UPDATE: G,
    GUILD_UPDATE: F,
    GUILD_DELETE: B,
    GUILD_ROLE_UPDATE: V,
    GUILD_MEMBER_UPDATE: H,
    CHANNEL_UPDATES: z,
});
