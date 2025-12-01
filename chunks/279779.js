n.d(t, { Z: () => N }),
    n(997841),
    n(539854),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(415506),
    n(361932),
    n(187205);
var r = n(392711),
    i = n.n(r),
    a = n(772848),
    o = n(95015),
    s = n(147913),
    l = n(131704),
    c = n(598077),
    u = n(592125),
    d = n(271383),
    f = n(699516),
    p = n(594174),
    _ = n(823379),
    m = n(960048),
    h = n(709054),
    g = n(51144),
    E = n(981631);
function b(e, t, n) {
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
let y = 10;
function O(e) {
    var t, n;
    if (null == e || f.Z.isBlockedOrIgnored(e.id)) return null;
    let r = {
        id: e.id,
        username: "0" !== e.discriminator ? "".concat(e.username, "#").concat(e.discriminator) : e.username,
        nicknames: {},
    };
    return (
        null != g.ZP.getGlobalName(e) && (r.globalName = e.globalName),
        e.bot && (r.isBot = !0),
        e instanceof c.Z
            ? (r.isProvisional = e.isProvisional)
            : "flags" in e
              ? (r.isProvisional = o.yE(null != (t = e.flags) ? t : 0, E.xW$.PROVISIONAL_ACCOUNT))
              : (r.isProvisional = !1),
        f.Z.isFriend(e.id) && ((r.isFriend = !0), (r.friendNickname = f.Z.getNickname(e.id))),
        e instanceof c.Z
            ? (r.isStaff = e.isStaff())
            : "flags" in e
              ? (r.isStaff = o.yE(null != (n = e.flags) ? n : 0, E.xW$.STAFF))
              : (r.isStaff = !1),
        r
    );
}
function v(e, t, n) {
    null != e && (e.nicknames[t] = null != n && "" !== n ? n : null);
}
function S(e) {
    let t = [];
    if (null == e || !(0, l.hv)(e.type)) return t;
    let { recipients: n = [] } = e;
    return (
        n.forEach((n) => {
            let r = O(p.default.getUser(n));
            null != e && v(r, e.id), t.push(r);
        }),
        t
    );
}
function I(e, t) {
    let n = [];
    return (
        e.forEach((e) => {
            let r = O(e.user);
            null != r && (v(r, t, e.nick), n.push(r));
        }),
        n
    );
}
function T(e) {
    var t;
    let { message: n, nicknameContextId: r } = e,
        i = u.Z.getChannel(n.channel_id),
        a =
            null != r
                ? r
                : (null == i ? void 0 : i.isPrivate()) === !0
                  ? null == i
                      ? void 0
                      : i.id
                  : null == i
                    ? void 0
                    : i.getGuildId(),
        o = [];
    if (null != n.author) {
        let e = O(n.author);
        null != e && (o.push(e), null != a && v(e, a));
    }
    return (
        null == (t = n.mentions) ||
            t.forEach((e) => {
                let t = O(e);
                null != t && (o.push(t), null != a && v(t, a));
            }),
        o
    );
}
class A {
    setLimit(e) {
        (this._limit = e), null != this._nextQuery && (this._nextQuery.limit = e);
    }
    subscribe() {
        null == this._worker ||
            this._subscribed ||
            (this._worker.addEventListener("message", this.handleMessages, !1),
            (this._subscribed = !0),
            this._setNextQuery());
    }
    unsubscribe() {
        null != this._worker &&
            this._subscribed &&
            (this._worker.removeEventListener("message", this.handleMessages, !1), (this._subscribed = !1));
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
                    type: "QUERY_CLEAR",
                });
    }
    setQuery(e) {
        let { query: t, filters: n, blacklist: r, boosters: i, boosterFallback: a } = e;
        (this._nextQuery = {
            query: t,
            filters: n,
            blacklist: r,
            boosters: null != i ? i : {},
            boosterFallback: null != a ? a : 1,
            limit: this._limit,
        }),
            this._setNextQuery();
    }
    _setNextQuery() {
        (null == this._currentQuery || !1 === this._currentQuery) &&
            null != this._nextQuery &&
            (null != this._worker && this._subscribed
                ? ((this._currentQuery = this._nextQuery),
                  (this._nextQuery = null),
                  this._worker.postMessage({
                      uuid: this._uuid,
                      type: "QUERY_SET",
                      payload: this._currentQuery,
                  }))
                : this._subscribed || this.subscribe());
    }
    constructor(e, t, n = y) {
        b(this, "_worker", void 0),
            b(this, "_uuid", void 0),
            b(this, "_callback", void 0),
            b(this, "_limit", void 0),
            b(this, "_currentQuery", void 0),
            b(this, "_nextQuery", void 0),
            b(this, "_subscribed", void 0),
            b(this, "handleMessages", (e) => {
                let t = e.data;
                null != t &&
                    "USER_RESULTS" === t.type &&
                    t.uuid === this._uuid &&
                    (!1 !== this._currentQuery && this._callback(t.payload),
                    null != this._currentQuery && (this._currentQuery = null),
                    this._setNextQuery());
            }),
            (this._worker = e),
            (this._uuid = (0, a.Z)()),
            (this._callback = t),
            (this._limit = n),
            (this._currentQuery = null),
            (this._nextQuery = null),
            (this._subscribed = !1),
            this.subscribe();
    }
}
class C extends s.Z {
    _initialize() {
        this.rebootWebworker();
    }
    _terminate() {
        null != this._worker && (this._worker.terminate(), (this._worker = null));
    }
    rebootWebworker() {
        null != this._worker && (this._worker.terminate(), (this._worker = null)),
            (this._worker = new Worker(new URL("/assets/" + n.u("69731"), n.b)));
    }
    updateUsers(e, t) {
        let { _worker: n } = this;
        if (null != n) {
            for (let n of (e = e.filter(_.lm)))
                (null == n ? void 0 : n.id) == null &&
                    m.Z.addBreadcrumb({
                        category: "debug",
                        message: "User missing id",
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
                                usersArrayLength: e.length,
                            },
                        },
                    });
            n.postMessage({
                type: "UPDATE_USERS",
                payload: e,
            });
        }
    }
    getUserSearchContext(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
        this.initialize();
        let { _worker: n } = this;
        if (null == n) throw Error("SearchContextManager: No webworker initialized");
        return new A(n, e, t);
    }
    requestDebugState() {
        this.initialize();
        let { _worker: e } = this;
        return null == e
            ? Promise.resolve(null)
            : new Promise((t) => {
                  let n = (0, a.Z)(),
                      r = (i) => {
                          let a = i.data;
                          if (null != a && "DEBUG_STATE" === a.type && a.uuid === n)
                              try {
                                  t(a.payload);
                              } finally {
                                  e.removeEventListener("message", r, !1);
                              }
                      };
                  e.addEventListener("message", r, !1),
                      e.postMessage({
                          type: "REQUEST_DEBUG_STATE",
                          uuid: n,
                      });
              });
    }
    constructor(...e) {
        super(...e),
            b(this, "_worker", void 0),
            b(this, "actions", {
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
                PASSIVE_UPDATE_V2: (e) => this._handlePassiveUpdateV2(e),
                THREAD_LIST_SYNC: (e) => this._handleThreadListSync(e),
                LOAD_FORUM_POSTS: (e) => this._handleLoadForumPosts(e),
                LOAD_MESSAGES_SUCCESS: (e) => this._handleLoadMessagesSuccess(e),
                SEARCH_MESSAGES_SUCCESS: (e) => this._handleSearchMessagesSuccess(e),
                LOAD_THREADS_SUCCESS: (e) => this._handleLoadThreadsSuccess(e),
                LOAD_ARCHIVED_THREADS_SUCCESS: (e) => this._handleLoadThreadsSuccess(e),
                LOAD_PINNED_MESSAGES_SUCCESS: (e) => this._handleLoadPinnedMessagesSuccess(e),
                GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: (e) => this._handleGuildScheduledEventUsersFetchSuccess(e),
                MESSAGE_CREATE: (e) => this._handleMessageCreateOrUpdate(e),
                MESSAGE_UPDATE: (e) => this._handleMessageCreateOrUpdate(e),
            }),
            b(this, "_handleLogout", () => {
                this.rebootWebworker();
            }),
            b(this, "_handleConnectionOpen", () => {
                setTimeout(() => {
                    let e = p.default.getCurrentUser();
                    if (null == e) return;
                    let t = O(e),
                        n = { [t.id]: t };
                    Object.values(p.default.getUsers()).forEach((e) => {
                        n[e.id] = O(e);
                    });
                    let r = d.ZP.getMutableAllGuildsAndMembers();
                    for (let e in r)
                        for (let t in r[e]) {
                            var i, a;
                            let o = n[t],
                                s = null != (a = null == (i = r[e][t]) ? void 0 : i.nick) ? a : g.ZP.getGlobalName(o);
                            null != o && v(o, e, s);
                        }
                    this.updateUsers(Object.values(n), "connection_open");
                }, 3000);
            }),
            b(this, "_handleConnectionOpenSupplemental", (e) => {
                let { guilds: t } = e;
                setTimeout(() => {
                    let e = i().flatMap(t, (e) => I(e.members, e.id)),
                        n = i().flatMap(t, (e) => {
                            var t;
                            let n = [];
                            return (
                                null == (t = e.activity_instances) ||
                                    t.forEach((t) => {
                                        t.participants.forEach((t) => {
                                            let r = t.member;
                                            if (null != r) {
                                                let t = O(r.user);
                                                null != t && (v(t, e.id, r.nick), n.push(t));
                                            }
                                        });
                                    }),
                                n
                            );
                        });
                    this.updateUsers([...e, ...n], "connection_open_supplemental");
                }, 3000);
            }),
            b(this, "_handleOverlayInitialize", (e) => {
                let { users: t, guildMembers: n } = e,
                    r = new Map();
                for (let e of t) r.set(e.id, O(e));
                for (let e of h.default.keys(n)) {
                    let t = n[e];
                    if (null != t)
                        for (let n of h.default.keys(t)) {
                            let i = r.get(n),
                                a = t[n];
                            null != i && null != a && null != a.nick && (v(i, e, a.nick), r.set(n, i));
                        }
                }
                this.updateUsers(Array.from(r.values()), "overlay_initialize"), r.clear();
            }),
            b(this, "_handleCurrentUserUpdate", (e) => {
                let { user: t } = e,
                    n = O(t);
                null != n && this.updateUsers([n], "current_user_update");
            }),
            b(this, "_handleGuildCreate", (e) => {
                let { guild: t } = e,
                    { members: n } = t;
                this.updateUsers(I(n, t.id), "guild_create");
            }),
            b(this, "_handleGuildMembersChunkBatch", (e) => {
                let { chunks: t } = e,
                    n = [];
                for (let e of t) n.push(...I(e.members, e.guildId));
                this.updateUsers(n, "guild_members_chunk_batch");
            }),
            b(this, "_handleGuildMemberUpdate", (e) => {
                let { guildId: t, user: n, nick: r } = e,
                    i = O(n);
                null != i && (v(i, t, r), this.updateUsers([i], "guild_member_update"));
            }),
            b(this, "_handlePassiveUpdateV2", (e) => {
                this.updateUsers(I(e.members, e.guildId), "passive_update_v2");
            }),
            b(this, "_handleRelationshipAdd", (e) => {
                let t = O(e.relationship.user);
                this.updateUsers([t], "relationship_add");
            }),
            b(this, "_handleRelationshipUpdate", (e) => {
                let t = O(p.default.getUser(e.relationship.id));
                this.updateUsers([t], "relationship_update");
            }),
            b(this, "_handleRelationshipRemove", (e) => {
                let t = O(p.default.getUser(e.relationship.id));
                this.updateUsers([t], "relationship_remove");
            }),
            b(this, "_handleDMCreate", (e) => {
                let {
                        channel: { id: t },
                    } = e,
                    n = S(u.Z.getChannel(t));
                if (0 === n.length) return;
                let r = O(p.default.getCurrentUser());
                v(r, t), n.push(r), this.updateUsers(n, "dm_create");
            }),
            b(this, "_handleDMUpdates", (e) => {
                let { channels: t } = e;
                for (let e of t) {
                    let t = S(u.Z.getChannel(e.id));
                    if (0 === t.length) continue;
                    let n = O(p.default.getCurrentUser());
                    v(n, e.id), t.push(n), this.updateUsers(t, "dm_updates");
                }
            }),
            b(this, "_handleRecipientChanges", (e) => {
                let { channelId: t, user: n, isMember: r } = e;
                if (!r) return;
                let i = O(n);
                v(i, t), this.updateUsers([i], "recipient_changes");
            }),
            b(this, "_handleThreadListSync", (e) => {
                let { guildId: t, mostRecentMessages: n } = e;
                if (null == n) return;
                let r = [];
                n.forEach((e) => {
                    T({
                        message: e,
                        nicknameContextId: t,
                    }).forEach((e) => r.push(e));
                }),
                    this.updateUsers(r, "thread_list_sync");
            }),
            b(this, "_handleLoadForumPosts", (e) => {
                let { guildId: t, threads: n } = e,
                    r = [];
                Object.values(n).forEach((e) => {
                    let { first_message: n, most_recent_message: i, owner: a } = e;
                    null != n &&
                        T({
                            message: n,
                            nicknameContextId: t,
                        }).forEach((e) => r.push(e)),
                        null != i &&
                            T({
                                message: i,
                                nicknameContextId: t,
                            }).forEach((e) => r.push(e)),
                        null != a && I([a], t).forEach((e) => r.push(e));
                }),
                    this.updateUsers(r, "load_forum_posts");
            }),
            b(this, "_handleLoadMessagesSuccess", (e) => {
                let { messages: t } = e,
                    n = t.flatMap((e) => T({ message: e }));
                this.updateUsers(n, "load_messages_success");
            }),
            b(this, "_handleLoadPinnedMessagesSuccess", (e) => {
                let { pins: t } = e,
                    n = [];
                t.forEach((e) => {
                    let { message: t } = e;
                    T({ message: t }).forEach((e) => n.push(e));
                }),
                    this.updateUsers(n, "load_pinned_messages_success");
            }),
            b(this, "_handleSearchMessagesSuccess", (e) => {
                let { data: t } = e,
                    n = [];
                t.forEach((e) => {
                    let { messages: t } = e;
                    t.forEach((e) => {
                        e.forEach((e) => {
                            T({ message: e }).forEach((e) => n.push(e));
                        });
                    });
                }),
                    this.updateUsers(n, "search_messages_success");
            }),
            b(this, "_handleLoadThreadsSuccess", (e) => {
                let { guildId: t, firstMessages: n, mostRecentMessages: r, owners: i } = e,
                    a = [];
                null == n ||
                    n.forEach((e) => {
                        T({
                            message: e,
                            nicknameContextId: t,
                        }).forEach((e) => a.push(e));
                    }),
                    null == r ||
                        r.forEach((e) => {
                            T({
                                message: e,
                                nicknameContextId: t,
                            }).forEach((e) => a.push(e));
                        }),
                    null != i && I(i, t).forEach((e) => a.push(e)),
                    this.updateUsers(a, "load_threads_success");
            }),
            b(this, "_handleMessageCreateOrUpdate", (e) => {
                let t = T({ message: e.message });
                this.updateUsers(t, "message_create_or_update");
            }),
            b(this, "_handleGuildScheduledEventUsersFetchSuccess", (e) => {
                let { guildId: t, guildScheduledEventUsers: n } = e,
                    r = [];
                n.forEach((e) => {
                    let { user: n, member: i } = e,
                        a = O(n);
                    null != a && (v(a, t, null == i ? void 0 : i.nick), r.push(a));
                }),
                    this.updateUsers(r, "guild_scheduled_event_users_fetch_success");
            });
    }
}
let N = new C();
