"use strict";
n.d(t, { A: () => R }), n(938796), n(321073), n(323874), n(14289), n(35956);
var r = n(735438),
    i = n.n(r),
    s = n(835245),
    a = n(665260),
    o = n(439372),
    l = n(95701),
    u = n(427157),
    d = n(734057),
    c = n(696451),
    _ = n(994500),
    f = n(287809),
    E = n(403362),
    h = n(728458),
    p = n(661191),
    m = n(427262),
    g = n(652215);
function A(e) {
    if (null == e || _.A.isBlockedOrIgnored(e.id)) return null;
    let t = {
        id: e.id,
        username: "0" !== e.discriminator ? `${e.username}#${e.discriminator}` : e.username,
        nicknames: {},
    };
    return (
        null != m.Ay.getGlobalName(e) && (t.globalName = e.globalName),
        e.bot && (t.isBot = !0),
        e instanceof u.A
            ? (t.isProvisional = e.isProvisional)
            : "flags" in e
              ? (t.isProvisional = a.Lt(e.flags ?? 0, g.nhx.PROVISIONAL_ACCOUNT))
              : (t.isProvisional = !1),
        _.A.isFriend(e.id) && ((t.isFriend = !0), (t.friendNickname = _.A.getNickname(e.id))),
        e instanceof u.A
            ? (t.isStaff = e.isStaff())
            : "flags" in e
              ? (t.isStaff = a.Lt(e.flags ?? 0, g.nhx.STAFF))
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
            let r = A(f.default.getUser(n));
            null != e && I(r, e.id), t.push(r);
        }),
        t
    );
}
function S(e, t) {
    let n = [];
    return (
        e.forEach((e) => {
            let r = A(e.user);
            null != r && (I(r, t, e.nick), n.push(r));
        }),
        n
    );
}
function y(e) {
    let { message: t, nicknameContextId: n } = e,
        r = d.A.getChannel(t.channel_id),
        i = null != n ? n : r?.isPrivate() === !0 ? r?.id : r?.getGuildId(),
        s = [];
    if (null != t.author) {
        let e = A(t.author);
        null != e && (s.push(e), null != i && I(e, i));
    }
    return (
        t.mentions?.forEach((e) => {
            let t = A(e);
            null != t && (s.push(t), null != i && I(t, i));
        }),
        s
    );
}
class N {
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
        let { query: t, filters: n, blacklist: r, boosters: i, boosterFallback: s } = e;
        (this._nextQuery = {
            query: t,
            filters: n,
            blacklist: r,
            boosters: i ?? {},
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
class O extends o.A {
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
            (this._worker = new Worker(new URL("/assets/" + n.u("79094"), n.b)));
    }
    updateUsers(e, t) {
        let { _worker: n } = this;
        if (null != n) {
            for (let n of (e = e.filter(E.Vq)))
                n?.id == null &&
                    h.A.addBreadcrumb({
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
        return new N(n, e, t);
    }
    requestDebugState() {
        this.initialize();
        let { _worker: e } = this;
        return null == e
            ? Promise.resolve(null)
            : new Promise((t) => {
                  let n = (0, s.A)(),
                      r = (i) => {
                          let s = i.data;
                          if (null != s && "DEBUG_STATE" === s.type && s.uuid === n)
                              try {
                                  t(s.payload);
                              } finally {
                                  e.removeEventListener("message", r, !1);
                              }
                      };
                  e.addEventListener("message", r, !1), e.postMessage({ type: "REQUEST_DEBUG_STATE", uuid: n });
              });
    }
    _handleLogout = () => {
        this.rebootWebworker();
    };
    _handleConnectionOpen = () => {
        setTimeout(() => {
            let e = f.default.getCurrentUser();
            if (null == e) return;
            let t = A(e),
                n = { [t.id]: t };
            Object.values(f.default.getUsers()).forEach((e) => {
                n[e.id] = A(e);
            });
            let r = c.Ay.getMutableAllGuildsAndMembers();
            for (let e in r)
                for (let t in r[e]) {
                    let i = n[t],
                        s = r[e][t]?.nick ?? m.Ay.getGlobalName(i);
                    null != i && I(i, e, s);
                }
            this.updateUsers(Object.values(n), "connection_open");
        }, 3e3);
    };
    _handleConnectionOpenSupplemental = (e) => {
        let { guilds: t } = e;
        setTimeout(() => {
            let e = i().flatMap(t, (e) => S(e.members, e.id)),
                n = i().flatMap(t, (e) => {
                    let t = [];
                    return (
                        e.activity_instances?.forEach((n) => {
                            n.participants.forEach((n) => {
                                let r = n.member;
                                if (null != r) {
                                    let n = A(r.user);
                                    null != n && (I(n, e.id, r.nick), t.push(n));
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
            r = new Map();
        for (let e of t) r.set(e.id, A(e));
        for (let e of p.default.keys(n)) {
            let t = n[e];
            if (null != t)
                for (let n of p.default.keys(t)) {
                    let i = r.get(n),
                        s = t[n];
                    null != i && null != s && null != s.nick && (I(i, e, s.nick), r.set(n, i));
                }
        }
        this.updateUsers(Array.from(r.values()), "overlay_initialize"), r.clear();
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
        let { guildId: t, user: n, nick: r } = e,
            i = A(n);
        null != i && (I(i, t, r), this.updateUsers([i], "guild_member_update"));
    };
    _handlePassiveUpdateV2 = (e) => {
        this.updateUsers(S(e.members, e.guildId), "passive_update_v2");
    };
    _handleRelationshipAdd = (e) => {
        let t = A(e.relationship.user);
        this.updateUsers([t], "relationship_add");
    };
    _handleRelationshipUpdate = (e) => {
        let t = A(f.default.getUser(e.relationship.id));
        this.updateUsers([t], "relationship_update");
    };
    _handleRelationshipRemove = (e) => {
        let t = A(f.default.getUser(e.relationship.id));
        this.updateUsers([t], "relationship_remove");
    };
    _handleDMCreate = (e) => {
        let {
                channel: { id: t },
            } = e,
            n = T(d.A.getChannel(t));
        if (0 === n.length) return;
        let r = A(f.default.getCurrentUser());
        I(r, t), n.push(r), this.updateUsers(n, "dm_create");
    };
    _handleDMUpdates = (e) => {
        let { channels: t } = e;
        for (let e of t) {
            let t = T(d.A.getChannel(e.id));
            if (0 === t.length) continue;
            let n = A(f.default.getCurrentUser());
            I(n, e.id), t.push(n), this.updateUsers(t, "dm_updates");
        }
    };
    _handleRecipientChanges = (e) => {
        let { channelId: t, user: n, isMember: r } = e;
        if (!r) return;
        let i = A(n);
        I(i, t), this.updateUsers([i], "recipient_changes");
    };
    _handleThreadListSync = (e) => {
        let { guildId: t, mostRecentMessages: n } = e;
        if (null == n) return;
        let r = [];
        n.forEach((e) => {
            y({ message: e, nicknameContextId: t }).forEach((e) => r.push(e));
        }),
            this.updateUsers(r, "thread_list_sync");
    };
    _handleLoadForumPosts = (e) => {
        let { guildId: t, threads: n } = e,
            r = [];
        Object.values(n).forEach((e) => {
            let { first_message: n, most_recent_message: i, owner: s } = e;
            null != n && y({ message: n, nicknameContextId: t }).forEach((e) => r.push(e)),
                null != i && y({ message: i, nicknameContextId: t }).forEach((e) => r.push(e)),
                null != s && S([s], t).forEach((e) => r.push(e));
        }),
            this.updateUsers(r, "load_forum_posts");
    };
    _handleLoadMessagesSuccess = (e) => {
        let { messages: t } = e,
            n = t.flatMap((e) => y({ message: e }));
        this.updateUsers(n, "load_messages_success");
    };
    _handleLoadPinnedMessagesSuccess = (e) => {
        let { pins: t } = e,
            n = [];
        t.forEach((e) => {
            let { message: t } = e;
            y({ message: t }).forEach((e) => n.push(e));
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
                    y({ message: e }).forEach((e) => n.push(e));
                });
            });
        }),
            this.updateUsers(n, "search_messages_success");
    };
    _handleLoadThreadsSuccess = (e) => {
        let { guildId: t, firstMessages: n, mostRecentMessages: r, owners: i } = e,
            s = [];
        n?.forEach((e) => {
            y({ message: e, nicknameContextId: t }).forEach((e) => s.push(e));
        }),
            r?.forEach((e) => {
                y({ message: e, nicknameContextId: t }).forEach((e) => s.push(e));
            }),
            null != i && S(i, t).forEach((e) => s.push(e)),
            this.updateUsers(s, "load_threads_success");
    };
    _handleMessageCreateOrUpdate = (e) => {
        let t = y({ message: e.message });
        this.updateUsers(t, "message_create_or_update");
    };
    _handleGuildScheduledEventUsersFetchSuccess = (e) => {
        let { guildId: t, guildScheduledEventUsers: n } = e,
            r = [];
        n.forEach((e) => {
            let { user: n, member: i } = e,
                s = A(n);
            null != s && (I(s, t, i?.nick), r.push(s));
        }),
            this.updateUsers(r, "guild_scheduled_event_users_fetch_success");
    };
}
let R = new O();
