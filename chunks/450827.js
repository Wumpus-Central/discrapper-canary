"use strict";
n.d(t, { A: () => O }), n(938796), n(321073), n(323874), n(14289), n(35956);
var i = n(735438),
    r = n.n(i),
    s = n(132500),
    a = n(665260),
    o = n(439372),
    l = n(95701),
    d = n(889227),
    _ = n(734057),
    u = n(696451),
    c = n(994500),
    E = n(287809),
    h = n(403362),
    m = n(38405),
    f = n(935208),
    g = n(427262),
    p = n(652215);
function A(e) {
    if (null == e || c.A.isBlockedOrIgnored(e.id)) return null;
    let t = {
        id: e.id,
        username: "0" !== e.discriminator ? `${e.username}#${e.discriminator}` : e.username,
        nicknames: {},
    };
    return (
        null != g.Ay.getGlobalName(e) && (t.globalName = e.globalName),
        e.bot && (t.isBot = !0),
        e instanceof d.A
            ? (t.isProvisional = e.isProvisional)
            : "flags" in e
              ? (t.isProvisional = a.Lt(e.flags ?? 0, p.nhx.PROVISIONAL_ACCOUNT))
              : (t.isProvisional = !1),
        c.A.isFriend(e.id) && ((t.isFriend = !0), (t.friendNickname = c.A.getNickname(e.id))),
        e instanceof d.A
            ? (t.isStaff = e.isStaff())
            : "flags" in e
              ? (t.isStaff = a.Lt(e.flags ?? 0, p.nhx.STAFF))
              : (t.isStaff = !1),
        t
    );
}
function I(e, t, n) {
    null != e && (e.nicknames[t] = null != n && "" !== n ? n : null);
}
function T(e) {
    let t = [];
    if (null == e || !(0, l.Gw)(e.type)) return t;
    let { recipients: n = [] } = e;
    return (
        n.forEach((n) => {
            let i = A(E.default.getUser(n));
            null != e && I(i, e.id), t.push(i);
        }),
        t
    );
}
function S(e, t) {
    let n = [];
    return (
        e.forEach((e) => {
            let i = A(e.user);
            null != i && (I(i, t, e.nick), n.push(i));
        }),
        n
    );
}
function N(e) {
    let { message: t, nicknameContextId: n } = e,
        i = _.A.getChannel(t.channel_id),
        r = null != n ? n : i?.isPrivate() === !0 ? i?.id : i?.getGuildId(),
        s = [];
    if (null != t.author) {
        let e = A(t.author);
        null != e && (s.push(e), null != r && I(e, r));
    }
    return (
        t.mentions?.forEach((e) => {
            let t = A(e);
            null != t && (s.push(t), null != r && I(t, r));
        }),
        s
    );
}
class C {
    _worker;
    _uuid;
    _callback;
    _limit;
    _currentQuery;
    _nextQuery;
    _subscribed;
    constructor(e, t, n = 10) {
        (this._worker = e),
            (this._uuid = (0, s.A)()),
            (this._callback = t),
            (this._limit = n),
            (this._currentQuery = null),
            (this._nextQuery = null),
            (this._subscribed = !1),
            this.subscribe();
    }
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
    handleMessages = (e) => {
        let t = e.data;
        null != t &&
            "USER_RESULTS" === t.type &&
            t.uuid === this._uuid &&
            (!1 !== this._currentQuery && this._callback(t.payload),
            null != this._currentQuery && (this._currentQuery = null),
            this._setNextQuery());
    };
    destroy() {
        this.clearQuery(), this.unsubscribe();
    }
    clearQuery() {
        (this._currentQuery = !1),
            (this._nextQuery = null),
            null != this._worker &&
                this._subscribed &&
                this._worker.postMessage({ uuid: this._uuid, type: "QUERY_CLEAR" });
    }
    setQuery(e) {
        let { query: t, filters: n, blacklist: i, boosters: r, boosterFallback: s } = e;
        (this._nextQuery = {
            query: t,
            filters: n,
            blacklist: i,
            boosters: r ?? {},
            boosterFallback: s ?? 1,
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
                  this._worker.postMessage({ uuid: this._uuid, type: "QUERY_SET", payload: this._currentQuery }))
                : this._subscribed || this.subscribe());
    }
}
class R extends o.A {
    _worker;
    actions = {
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
    };
    _initialize() {
        this.rebootWebworker();
    }
    _terminate() {
        null != this._worker && (this._worker.terminate(), (this._worker = null));
    }
    rebootWebworker() {
        null != this._worker && (this._worker.terminate(), (this._worker = null)),
            (this._worker = new Worker(new URL("/assets/" + n.u("61673"), n.b)));
    }
    updateUsers(e, t) {
        let { _worker: n } = this;
        if (null != n) {
            for (let n of (e = e.filter(h.Vq)))
                n?.id == null &&
                    m.A.addBreadcrumb({
                        category: "debug",
                        message: "User missing id",
                        data: {
                            action: t,
                            userFields: {
                                userIsNull: null == n,
                                idIsNull: n?.id == null,
                                usernameIsNull: n?.username == null,
                                isBot: n?.isBot,
                                isFriend: n?.isFriend,
                                isProvisional: n?.isProvisional,
                                globalNameIsNull: n?.globalName == null,
                                usersArrayLength: e.length,
                            },
                        },
                    });
            n.postMessage({ type: "UPDATE_USERS", payload: e });
        }
    }
    getUserSearchContext(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.initialize();
        let { _worker: n } = this;
        if (null == n) throw Error("SearchContextManager: No webworker initialized");
        return new C(n, e, t);
    }
    requestDebugState() {
        this.initialize();
        let { _worker: e } = this;
        return null == e
            ? Promise.resolve(null)
            : new Promise((t) => {
                  let n = (0, s.A)(),
                      i = (r) => {
                          let s = r.data;
                          if (null != s && "DEBUG_STATE" === s.type && s.uuid === n)
                              try {
                                  t(s.payload);
                              } finally {
                                  e.removeEventListener("message", i, !1);
                              }
                      };
                  e.addEventListener("message", i, !1), e.postMessage({ type: "REQUEST_DEBUG_STATE", uuid: n });
              });
    }
    _handleLogout = () => {
        this.rebootWebworker();
    };
    _handleConnectionOpen = () => {
        setTimeout(() => {
            let e = E.default.getCurrentUser();
            if (null == e) return;
            let t = A(e),
                n = { [t.id]: t };
            Object.values(E.default.getUsers()).forEach((e) => {
                n[e.id] = A(e);
            });
            let i = u.Ay.getMutableAllGuildsAndMembers();
            for (let e in i)
                for (let t in i[e]) {
                    let r = n[t],
                        s = i[e][t]?.nick ?? g.Ay.getGlobalName(r);
                    null != r && I(r, e, s);
                }
            this.updateUsers(Object.values(n), "connection_open");
        }, 3e3);
    };
    _handleConnectionOpenSupplemental = (e) => {
        let { guilds: t } = e;
        setTimeout(() => {
            let e = r().flatMap(t, (e) => S(e.members, e.id)),
                n = r().flatMap(t, (e) => {
                    let t = [];
                    return (
                        e.activity_instances?.forEach((n) => {
                            n.participants.forEach((n) => {
                                let i = n.member;
                                if (null != i) {
                                    let n = A(i.user);
                                    null != n && (I(n, e.id, i.nick), t.push(n));
                                }
                            });
                        }),
                        t
                    );
                });
            this.updateUsers([...e, ...n], "connection_open_supplemental");
        }, 3e3);
    };
    _handleOverlayInitialize = (e) => {
        let { users: t, guildMembers: n } = e,
            i = new Map();
        for (let e of t) i.set(e.id, A(e));
        for (let e of f.default.keys(n)) {
            let t = n[e];
            if (null != t)
                for (let n of f.default.keys(t)) {
                    let r = i.get(n),
                        s = t[n];
                    null != r && null != s && null != s.nick && (I(r, e, s.nick), i.set(n, r));
                }
        }
        this.updateUsers(Array.from(i.values()), "overlay_initialize"), i.clear();
    };
    _handleCurrentUserUpdate = (e) => {
        let { user: t } = e,
            n = A(t);
        null != n && this.updateUsers([n], "current_user_update");
    };
    _handleGuildCreate = (e) => {
        let { guild: t } = e,
            { members: n } = t;
        this.updateUsers(S(n, t.id), "guild_create");
    };
    _handleGuildMembersChunkBatch = (e) => {
        let { chunks: t } = e,
            n = [];
        for (let e of t) n.push(...S(e.members, e.guildId));
        this.updateUsers(n, "guild_members_chunk_batch");
    };
    _handleGuildMemberUpdate = (e) => {
        let { guildId: t, user: n, nick: i } = e,
            r = A(n);
        null != r && (I(r, t, i), this.updateUsers([r], "guild_member_update"));
    };
    _handlePassiveUpdateV2 = (e) => {
        this.updateUsers(S(e.members, e.guildId), "passive_update_v2");
    };
    _handleRelationshipAdd = (e) => {
        let t = A(e.relationship.user);
        this.updateUsers([t], "relationship_add");
    };
    _handleRelationshipUpdate = (e) => {
        let t = A(E.default.getUser(e.relationship.id));
        this.updateUsers([t], "relationship_update");
    };
    _handleRelationshipRemove = (e) => {
        let t = A(E.default.getUser(e.relationship.id));
        this.updateUsers([t], "relationship_remove");
    };
    _handleDMCreate = (e) => {
        let {
                channel: { id: t },
            } = e,
            n = T(_.A.getChannel(t));
        if (0 === n.length) return;
        let i = A(E.default.getCurrentUser());
        I(i, t), n.push(i), this.updateUsers(n, "dm_create");
    };
    _handleDMUpdates = (e) => {
        let { channels: t } = e;
        for (let e of t) {
            let t = T(_.A.getChannel(e.id));
            if (0 === t.length) continue;
            let n = A(E.default.getCurrentUser());
            I(n, e.id), t.push(n), this.updateUsers(t, "dm_updates");
        }
    };
    _handleRecipientChanges = (e) => {
        let { channelId: t, user: n, isMember: i } = e;
        if (!i) return;
        let r = A(n);
        I(r, t), this.updateUsers([r], "recipient_changes");
    };
    _handleThreadListSync = (e) => {
        let { guildId: t, mostRecentMessages: n } = e;
        if (null == n) return;
        let i = [];
        n.forEach((e) => {
            N({ message: e, nicknameContextId: t }).forEach((e) => i.push(e));
        }),
            this.updateUsers(i, "thread_list_sync");
    };
    _handleLoadForumPosts = (e) => {
        let { guildId: t, threads: n } = e,
            i = [];
        Object.values(n).forEach((e) => {
            let { first_message: n, most_recent_message: r, owner: s } = e;
            null != n && N({ message: n, nicknameContextId: t }).forEach((e) => i.push(e)),
                null != r && N({ message: r, nicknameContextId: t }).forEach((e) => i.push(e)),
                null != s && S([s], t).forEach((e) => i.push(e));
        }),
            this.updateUsers(i, "load_forum_posts");
    };
    _handleLoadMessagesSuccess = (e) => {
        let { messages: t } = e,
            n = t.flatMap((e) => N({ message: e }));
        this.updateUsers(n, "load_messages_success");
    };
    _handleLoadPinnedMessagesSuccess = (e) => {
        let { pins: t } = e,
            n = [];
        t.forEach((e) => {
            let { message: t } = e;
            N({ message: t }).forEach((e) => n.push(e));
        }),
            this.updateUsers(n, "load_pinned_messages_success");
    };
    _handleSearchMessagesSuccess = (e) => {
        let { data: t } = e,
            n = [];
        t.forEach((e) => {
            let { messages: t } = e;
            t.forEach((e) => {
                e.forEach((e) => {
                    N({ message: e }).forEach((e) => n.push(e));
                });
            });
        }),
            this.updateUsers(n, "search_messages_success");
    };
    _handleLoadThreadsSuccess = (e) => {
        let { guildId: t, firstMessages: n, mostRecentMessages: i, owners: r } = e,
            s = [];
        n?.forEach((e) => {
            N({ message: e, nicknameContextId: t }).forEach((e) => s.push(e));
        }),
            i?.forEach((e) => {
                N({ message: e, nicknameContextId: t }).forEach((e) => s.push(e));
            }),
            null != r && S(r, t).forEach((e) => s.push(e)),
            this.updateUsers(s, "load_threads_success");
    };
    _handleMessageCreateOrUpdate = (e) => {
        let t = N({ message: e.message });
        this.updateUsers(t, "message_create_or_update");
    };
    _handleGuildScheduledEventUsersFetchSuccess = (e) => {
        let { guildId: t, guildScheduledEventUsers: n } = e,
            i = [];
        n.forEach((e) => {
            let { user: n, member: r } = e,
                s = A(n);
            null != s && (I(s, t, r?.nick), i.push(s));
        }),
            this.updateUsers(i, "guild_scheduled_event_users_fetch_success");
    };
}
let O = new R();
