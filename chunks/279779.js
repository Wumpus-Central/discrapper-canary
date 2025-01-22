var i,
    a = r(789020);
var o = r(653041);
var s = r(315314);
var l = r(610138);
var u = r(216116);
var c = r(78328);
var d = r(815648);
var f = r(47120);
var p = r(411104);
var h = r(312677);
var _ = r(390547);
var m = r(392711),
    g = r.n(m),
    E = r(772848),
    v = r(147913),
    y = r(131704),
    b = r(598077),
    I = r(592125),
    T = r(271383),
    S = r(699516),
    A = r(594174),
    C = r(630388),
    N = r(823379),
    R = r(960048),
    O = r(709054),
    D = r(51144),
    x = r(981631);
function L(e, n, r) {
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
let w = 10;
function P(e) {
    if (null == e || S.Z.isBlockedOrIgnored(e.id)) return null;
    let n = {
        id: e.id,
        username: '0' !== e.discriminator ? ''.concat(e.username, '#').concat(e.discriminator) : e.username
    };
    if ((null != D.ZP.getGlobalName(e) && (n.globalName = e.globalName), e.bot && (n.isBot = !0), e instanceof b.Z)) n.isProvisional = e.isProvisional;
    else if ('flags' in e) {
        var r;
        n.isProvisional = C.yE(null !== (r = e.flags) && void 0 !== r ? r : 0, x.xW$.PROVISIONAL_ACCOUNT);
    } else n.isProvisional = !1;
    return S.Z.isFriend(e.id) && ((n.isFriend = !0), (n.friendNickname = S.Z.getNickname(e.id))), n;
}
function M(e, n, r) {
    null != e && (e[n] = null != r && '' !== r ? r : null);
}
function k(e) {
    let n = [];
    if (null == e || !(0, y.hv)(e.type)) return n;
    let { recipients: r = [] } = e;
    return (
        r.forEach((r) => {
            let i = P(A.default.getUser(r));
            null != e && M(i, e.id), n.push(i);
        }),
        n
    );
}
function U(e, n) {
    let r = [];
    return (
        e.forEach((e) => {
            let i = P(e.user);
            null != i && (M(i, n, e.nick), r.push(i));
        }),
        r
    );
}
!(function (e) {
    (e.UPDATE_USERS = 'UPDATE_USERS'), (e.USER_RESULTS = 'USER_RESULTS'), (e.QUERY_SET = 'QUERY_SET'), (e.QUERY_CLEAR = 'QUERY_CLEAR');
})(i || (i = {}));
class B {
    setLimit(e) {
        (this._limit = e), null != this._nextQuery && (this._nextQuery.limit = e);
    }
    subscribe() {
        null != this._worker && !this._subscribed && (this._worker.addEventListener('message', this.handleMessages, !1), (this._subscribed = !0), this._setNextQuery());
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
    setQuery(e, n, r, i) {
        if (null != e)
            (this._nextQuery = {
                query: e,
                filters: n,
                blacklist: r,
                boosters: null != i ? i : {},
                limit: this._limit
            }),
                this._setNextQuery();
    }
    _setNextQuery() {
        if ((null == this._currentQuery || !1 === this._currentQuery) && null != this._nextQuery)
            null != this._worker && this._subscribed
                ? ((this._currentQuery = this._nextQuery),
                  (this._nextQuery = null),
                  this._worker.postMessage({
                      uuid: this._uuid,
                      type: 'QUERY_SET',
                      payload: this._currentQuery
                  }))
                : !this._subscribed && this.subscribe();
    }
    constructor(e, n, r = w) {
        L(this, '_worker', void 0),
            L(this, '_uuid', void 0),
            L(this, '_callback', void 0),
            L(this, '_limit', void 0),
            L(this, '_currentQuery', void 0),
            L(this, '_nextQuery', void 0),
            L(this, '_subscribed', void 0),
            L(this, 'handleMessages', (e) => {
                let n = e.data;
                if (null != n && 'USER_RESULTS' === n.type && n.uuid === this._uuid) !1 !== this._currentQuery && this._callback(n.payload), null != this._currentQuery && (this._currentQuery = null), this._setNextQuery();
            }),
            (this._worker = e),
            (this._uuid = (0, E.Z)()),
            (this._callback = n),
            (this._limit = r),
            (this._currentQuery = null),
            (this._nextQuery = null),
            (this._subscribed = !1),
            this.subscribe();
    }
}
class G extends v.Z {
    _initialize() {
        this.rebootWebworker();
    }
    _terminate() {
        null != this._worker && (this._worker.terminate(), (this._worker = null));
    }
    rebootWebworker() {
        null != this._worker && (this._worker.terminate(), (this._worker = null));
        this._worker = new Worker(new URL('/assets/' + r.u('69731'), r.b));
    }
    updateUsers(e, n) {
        let { _worker: r } = this;
        if (null != r) {
            for (let r of (e = e.filter(N.lm)))
                (null == r ? void 0 : r.id) == null &&
                    R.Z.addBreadcrumb({
                        category: 'debug',
                        message: 'User missing id',
                        data: {
                            action: n,
                            userFields: {
                                userIsNull: null == r,
                                idIsNull: (null == r ? void 0 : r.id) == null,
                                usernameIsNull: (null == r ? void 0 : r.username) == null,
                                isBot: null == r ? void 0 : r.isBot,
                                isFriend: null == r ? void 0 : r.isFriend,
                                isProvisional: null == r ? void 0 : r.isProvisional,
                                globalNameIsNull: (null == r ? void 0 : r.globalName) == null,
                                usersArrayLength: e.length
                            }
                        }
                    });
            r.postMessage({
                type: 'UPDATE_USERS',
                payload: e
            });
        }
    }
    getSearchContext(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w;
        this.initialize();
        let { _worker: r } = this;
        if (null == r) throw Error('SearchContextManager: No webworker initialized');
        return new B(r, e, n);
    }
    constructor(...e) {
        super(...e),
            L(this, '_worker', void 0),
            L(this, 'actions', {
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
            L(this, '_handleLogout', () => {
                this.rebootWebworker();
            }),
            L(this, '_handleConnectionOpen', () => {
                setTimeout(() => {
                    let e = A.default.getCurrentUser();
                    if (null == e) return;
                    let n = P(e),
                        r = { [n.id]: n };
                    Object.values(A.default.getUsers()).forEach((e) => {
                        r[e.id] = P(e);
                    });
                    let i = T.ZP.getMutableAllGuildsAndMembers();
                    for (let e in i)
                        for (let n in i[e]) {
                            var a, o;
                            let s = r[n],
                                l = null !== (o = null === (a = i[e][n]) || void 0 === a ? void 0 : a.nick) && void 0 !== o ? o : D.ZP.getGlobalName(s);
                            null != s && (s[e] = null != l && '' !== l ? l : null);
                        }
                    this.updateUsers(Object.values(r), 'connection_open');
                }, 3000);
            }),
            L(this, '_handleConnectionOpenSupplemental', (e) => {
                let { guilds: n } = e;
                setTimeout(() => {
                    let e = g().flatMap(n, (e) => U(e.members, e.id)),
                        r = g().flatMap(n, (e) => {
                            var n;
                            let r = [];
                            return (
                                null === (n = e.activity_instances) ||
                                    void 0 === n ||
                                    n.forEach((n) => {
                                        n.participants.forEach((n) => {
                                            let i = n.member;
                                            if (null != i) {
                                                let n = P(i.user);
                                                null != n && (M(n, e.id, i.nick), r.push(n));
                                            }
                                        });
                                    }),
                                r
                            );
                        });
                    this.updateUsers([...e, ...r], 'connection_open_supplemental');
                }, 3000);
            }),
            L(this, '_handleOverlayInitialize', (e) => {
                let { users: n, guildMembers: r } = e,
                    i = new Map();
                for (let e of n) i.set(e.id, P(e));
                for (let e of O.default.keys(r)) {
                    let n = r[e];
                    if (null != n)
                        for (let r of O.default.keys(n)) {
                            let a = i.get(r),
                                o = n[r];
                            if (null != a && null != o && null != o.nick) M(a, e, o.nick), i.set(r, a);
                        }
                }
                this.updateUsers(Array.from(i.values()), 'overlay_initialize'), i.clear();
            }),
            L(this, '_handleCurrentUserUpdate', (e) => {
                let { user: n } = e,
                    r = P(n);
                null != r && this.updateUsers([r], 'current_user_update');
            }),
            L(this, '_handleGuildCreate', (e) => {
                let { guild: n } = e,
                    { members: r } = n;
                this.updateUsers(U(r, n.id), 'guild_create');
            }),
            L(this, '_handleGuildMembersChunkBatch', (e) => {
                let { chunks: n } = e,
                    r = [];
                for (let e of n) r.push(...U(e.members, e.guildId));
                this.updateUsers(r, 'guild_members_chunk_batch');
            }),
            L(this, '_handleGuildMemberUpdate', (e) => {
                let { guildId: n, user: r, nick: i } = e,
                    a = P(r);
                null != a && (M(a, n, i), this.updateUsers([a], 'guild_member_update'));
            }),
            L(this, '_handlePassiveUpdateV2', (e) => {
                this.updateUsers(U(e.members, e.guildId), 'passive_update_v2');
            }),
            L(this, '_handleRelationshipAdd', (e) => {
                let n = P(e.relationship.user);
                this.updateUsers([n], 'relationship_add');
            }),
            L(this, '_handleRelationshipUpdate', (e) => {
                let n = P(A.default.getUser(e.relationship.id));
                this.updateUsers([n], 'relationship_update');
            }),
            L(this, '_handleRelationshipRemove', (e) => {
                let n = P(A.default.getUser(e.relationship.id));
                this.updateUsers([n], 'relationship_remove');
            }),
            L(this, '_handleDMCreate', (e) => {
                let {
                        channel: { id: n }
                    } = e,
                    r = k(I.Z.getChannel(n));
                if (0 === r.length) return;
                let i = P(A.default.getCurrentUser());
                M(i, n), r.push(i), this.updateUsers(r, 'dm_create');
            }),
            L(this, '_handleDMUpdates', (e) => {
                let { channels: n } = e;
                for (let e of n) {
                    let n = k(I.Z.getChannel(e.id));
                    if (0 === n.length) continue;
                    let r = P(A.default.getCurrentUser());
                    M(r, e.id), n.push(r), this.updateUsers(n, 'dm_updates');
                }
            }),
            L(this, '_handleRecipientChanges', (e) => {
                let { channelId: n, user: r, isMember: i } = e;
                if (!i) return;
                let a = P(r);
                M(a, n), this.updateUsers([a], 'recipient_changes');
            });
    }
}
n.Z = new G();
