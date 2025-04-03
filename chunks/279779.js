n.d(t, { Z: () => A }), n(789020), n(653041), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120), n(411104), n(13667), n(390547);
var r = n(392711),
    i = n.n(r),
    o = n(772848),
    a = n(147913),
    s = n(131704),
    l = n(598077),
    c = n(592125),
    u = n(271383),
    d = n(699516),
    f = n(594174),
    _ = n(630388),
    p = n(823379),
    h = n(960048),
    m = n(709054),
    g = n(51144),
    E = n(981631);
function b(e, t, n) {
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
let y = 10;
function v(e) {
    if (null == e || d.Z.isBlockedOrIgnored(e.id)) return null;
    let t = {
        id: e.id,
        username: '0' !== e.discriminator ? ''.concat(e.username, '#').concat(e.discriminator) : e.username
    };
    if ((null != g.ZP.getGlobalName(e) && (t.globalName = e.globalName), e.bot && (t.isBot = !0), e instanceof l.Z)) t.isProvisional = e.isProvisional;
    else if ('flags' in e) {
        var n;
        t.isProvisional = _.yE(null != (n = e.flags) ? n : 0, E.xW$.PROVISIONAL_ACCOUNT);
    } else t.isProvisional = !1;
    return d.Z.isFriend(e.id) && ((t.isFriend = !0), (t.friendNickname = d.Z.getNickname(e.id))), t;
}
function O(e, t, n) {
    null != e && (e[t] = null != n && '' !== n ? n : null);
}
function I(e) {
    let t = [];
    if (null == e || !(0, s.hv)(e.type)) return t;
    let { recipients: n = [] } = e;
    return (
        n.forEach((n) => {
            let r = v(f.default.getUser(n));
            null != e && O(r, e.id), t.push(r);
        }),
        t
    );
}
function S(e, t) {
    let n = [];
    return (
        e.forEach((e) => {
            let r = v(e.user);
            null != r && (O(r, t, e.nick), n.push(r));
        }),
        n
    );
}
class T {
    setLimit(e) {
        (this._limit = e), null != this._nextQuery && (this._nextQuery.limit = e);
    }
    subscribe() {
        null == this._worker || this._subscribed || (this._worker.addEventListener('message', this.handleMessages, !1), (this._subscribed = !0), this._setNextQuery());
    }
    unsubscribe() {
        null != this._worker && this._subscribed && (this._worker.removeEventListener('message', this.handleMessages, !1), (this._subscribed = !1));
    }
    destroy() {
        this.clearQuery(), this.unsubscribe();
    }
    clearQuery() {
        (this._currentQuery = !1),
            (this._nextQuery = null),
            null != this._worker &&
                this._subscribed &&
                this._worker.postMessage({
                    uuid: this._uuid,
                    type: 'QUERY_CLEAR'
                });
    }
    setQuery(e, t, n, r) {
        null != e &&
            ((this._nextQuery = {
                query: e,
                filters: t,
                blacklist: n,
                boosters: null != r ? r : {},
                limit: this._limit
            }),
            this._setNextQuery());
    }
    _setNextQuery() {
        (null == this._currentQuery || !1 === this._currentQuery) &&
            null != this._nextQuery &&
            (null != this._worker && this._subscribed
                ? ((this._currentQuery = this._nextQuery),
                  (this._nextQuery = null),
                  this._worker.postMessage({
                      uuid: this._uuid,
                      type: 'QUERY_SET',
                      payload: this._currentQuery
                  }))
                : this._subscribed || this.subscribe());
    }
    constructor(e, t, n = y) {
        b(this, '_worker', void 0),
            b(this, '_uuid', void 0),
            b(this, '_callback', void 0),
            b(this, '_limit', void 0),
            b(this, '_currentQuery', void 0),
            b(this, '_nextQuery', void 0),
            b(this, '_subscribed', void 0),
            b(this, 'handleMessages', (e) => {
                let t = e.data;
                null != t && 'USER_RESULTS' === t.type && t.uuid === this._uuid && (!1 !== this._currentQuery && this._callback(t.payload), null != this._currentQuery && (this._currentQuery = null), this._setNextQuery());
            }),
            (this._worker = e),
            (this._uuid = (0, o.Z)()),
            (this._callback = t),
            (this._limit = n),
            (this._currentQuery = null),
            (this._nextQuery = null),
            (this._subscribed = !1),
            this.subscribe();
    }
}
class N extends a.Z {
    _initialize() {
        this.rebootWebworker();
    }
    _terminate() {
        null != this._worker && (this._worker.terminate(), (this._worker = null));
    }
    rebootWebworker() {
        null != this._worker && (this._worker.terminate(), (this._worker = null)), (this._worker = new Worker(new URL('/assets/' + n.u('69731'), n.b)));
    }
    updateUsers(e, t) {
        let { _worker: n } = this;
        if (null != n) {
            for (let n of (e = e.filter(p.lm)))
                (null == n ? void 0 : n.id) == null &&
                    h.Z.addBreadcrumb({
                        category: 'debug',
                        message: 'User missing id',
                        data: {
                            action: t,
                            userFields: {
                                userIsNull: null == n,
                                idIsNull: (null == n ? void 0 : n.id) == null,
                                usernameIsNull: (null == n ? void 0 : n.username) == null,
                                isBot: null == n ? void 0 : n.isBot,
                                isFriend: null == n ? void 0 : n.isFriend,
                                isProvisional: null == n ? void 0 : n.isProvisional,
                                globalNameIsNull: (null == n ? void 0 : n.globalName) == null,
                                usersArrayLength: e.length
                            }
                        }
                    });
            n.postMessage({
                type: 'UPDATE_USERS',
                payload: e
            });
        }
    }
    getSearchContext(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
        this.initialize();
        let { _worker: n } = this;
        if (null == n) throw Error('SearchContextManager: No webworker initialized');
        return new T(n, e, t);
    }
    constructor(...e) {
        super(...e),
            b(this, '_worker', void 0),
            b(this, 'actions', {
                LOGOUT: () => this._handleLogout(),
                POST_CONNECTION_OPEN: () => this._handleConnectionOpen(),
                CONNECTION_OPEN_SUPPLEMENTAL: (e) => this._handleConnectionOpenSupplemental(e),
                OVERLAY_INITIALIZE: (e) => this._handleOverlayInitialize(e),
                CURRENT_USER_UPDATE: (e) => this._handleCurrentUserUpdate(e),
                GUILD_CREATE: (e) => this._handleGuildCreate(e),
                GUILD_MEMBERS_CHUNK_BATCH: (e) => this._handleGuildMembersChunkBatch(e),
                GUILD_MEMBER_ADD: (e) => this._handleGuildMemberUpdate(e),
                GUILD_MEMBER_UPDATE: (e) => this._handleGuildMemberUpdate(e),
                RELATIONSHIP_ADD: (e) => this._handleRelationshipAdd(e),
                RELATIONSHIP_UPDATE: (e) => this._handleRelationshipUpdate(e),
                RELATIONSHIP_REMOVE: (e) => this._handleRelationshipRemove(e),
                CHANNEL_CREATE: (e) => this._handleDMCreate(e),
                CHANNEL_UPDATES: (e) => this._handleDMUpdates(e),
                CHANNEL_RECIPIENT_ADD: (e) => this._handleRecipientChanges(e),
                PASSIVE_UPDATE_V2: (e) => this._handlePassiveUpdateV2(e)
            }),
            b(this, '_handleLogout', () => {
                this.rebootWebworker();
            }),
            b(this, '_handleConnectionOpen', () => {
                setTimeout(() => {
                    let e = f.default.getCurrentUser();
                    if (null == e) return;
                    let t = v(e),
                        n = { [t.id]: t };
                    Object.values(f.default.getUsers()).forEach((e) => {
                        n[e.id] = v(e);
                    });
                    let r = u.ZP.getMutableAllGuildsAndMembers();
                    for (let e in r)
                        for (let t in r[e]) {
                            var i, o;
                            let a = n[t],
                                s = null != (o = null == (i = r[e][t]) ? void 0 : i.nick) ? o : g.ZP.getGlobalName(a);
                            null != a && (a[e] = null != s && '' !== s ? s : null);
                        }
                    this.updateUsers(Object.values(n), 'connection_open');
                }, 3000);
            }),
            b(this, '_handleConnectionOpenSupplemental', (e) => {
                let { guilds: t } = e;
                setTimeout(() => {
                    let e = i().flatMap(t, (e) => S(e.members, e.id)),
                        n = i().flatMap(t, (e) => {
                            var t;
                            let n = [];
                            return (
                                null == (t = e.activity_instances) ||
                                    t.forEach((t) => {
                                        t.participants.forEach((t) => {
                                            let r = t.member;
                                            if (null != r) {
                                                let t = v(r.user);
                                                null != t && (O(t, e.id, r.nick), n.push(t));
                                            }
                                        });
                                    }),
                                n
                            );
                        });
                    this.updateUsers([...e, ...n], 'connection_open_supplemental');
                }, 3000);
            }),
            b(this, '_handleOverlayInitialize', (e) => {
                let { users: t, guildMembers: n } = e,
                    r = new Map();
                for (let e of t) r.set(e.id, v(e));
                for (let e of m.default.keys(n)) {
                    let t = n[e];
                    if (null != t)
                        for (let n of m.default.keys(t)) {
                            let i = r.get(n),
                                o = t[n];
                            null != i && null != o && null != o.nick && (O(i, e, o.nick), r.set(n, i));
                        }
                }
                this.updateUsers(Array.from(r.values()), 'overlay_initialize'), r.clear();
            }),
            b(this, '_handleCurrentUserUpdate', (e) => {
                let { user: t } = e,
                    n = v(t);
                null != n && this.updateUsers([n], 'current_user_update');
            }),
            b(this, '_handleGuildCreate', (e) => {
                let { guild: t } = e,
                    { members: n } = t;
                this.updateUsers(S(n, t.id), 'guild_create');
            }),
            b(this, '_handleGuildMembersChunkBatch', (e) => {
                let { chunks: t } = e,
                    n = [];
                for (let e of t) n.push(...S(e.members, e.guildId));
                this.updateUsers(n, 'guild_members_chunk_batch');
            }),
            b(this, '_handleGuildMemberUpdate', (e) => {
                let { guildId: t, user: n, nick: r } = e,
                    i = v(n);
                null != i && (O(i, t, r), this.updateUsers([i], 'guild_member_update'));
            }),
            b(this, '_handlePassiveUpdateV2', (e) => {
                this.updateUsers(S(e.members, e.guildId), 'passive_update_v2');
            }),
            b(this, '_handleRelationshipAdd', (e) => {
                let t = v(e.relationship.user);
                this.updateUsers([t], 'relationship_add');
            }),
            b(this, '_handleRelationshipUpdate', (e) => {
                let t = v(f.default.getUser(e.relationship.id));
                this.updateUsers([t], 'relationship_update');
            }),
            b(this, '_handleRelationshipRemove', (e) => {
                let t = v(f.default.getUser(e.relationship.id));
                this.updateUsers([t], 'relationship_remove');
            }),
            b(this, '_handleDMCreate', (e) => {
                let {
                        channel: { id: t }
                    } = e,
                    n = I(c.Z.getChannel(t));
                if (0 === n.length) return;
                let r = v(f.default.getCurrentUser());
                O(r, t), n.push(r), this.updateUsers(n, 'dm_create');
            }),
            b(this, '_handleDMUpdates', (e) => {
                let { channels: t } = e;
                for (let e of t) {
                    let t = I(c.Z.getChannel(e.id));
                    if (0 === t.length) continue;
                    let n = v(f.default.getCurrentUser());
                    O(n, e.id), t.push(n), this.updateUsers(t, 'dm_updates');
                }
            }),
            b(this, '_handleRecipientChanges', (e) => {
                let { channelId: t, user: n, isMember: r } = e;
                if (!r) return;
                let i = v(n);
                O(i, t), this.updateUsers([i], 'recipient_changes');
            });
    }
}
let A = new N();
