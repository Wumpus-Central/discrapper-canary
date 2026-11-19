(n.d(t, { A: () => q }), n(938796), n(321073), n(142703));
var i = n(435558),
    r = n.n(i),
    a = n(127258),
    s = n(665260),
    l = n(855986),
    o = n(73153),
    d = n(155718),
    c = n(755364),
    u = n(870801),
    _ = n(626584),
    E = n(519460),
    A = n(508602);
function f(e) {
    let { type: t } = e;
    return t !== A.A.AUTO_MODERATION_MESSAGE && t !== A.A.AUTO_MODERATION_NOTIFICATION;
}
var h = n(164956),
    I = n(931480),
    p = n(432005),
    m = n(697470);
n(763754);
var g = n(815807),
    T = n(773669),
    S = n(661191),
    N = n(46653),
    C = n(734057),
    O = n(72314),
    R = n(808728),
    L = n(696451),
    y = n(71393),
    D = n(576705),
    b = n(994500),
    v = n(309010),
    P = n(967198),
    M = n(287809),
    U = n(652215);
let w = new Set(),
    G = new Map(),
    x = new _.A("MessageStore"),
    k = !1;
function F(e, t) {
    if (t.hasMoreAfter) return t;
    let n = I.A.getMessages(e);
    if (0 === n.length) return t;
    let i = t.hasMoreBefore ? t.first() : null,
        r = n.filter((e) => !t.has(e.id) && (null == i || S.default.compare(e.id, i.id) > 0));
    return 0 === r.length
        ? t
        : t.mutate((e) => {
              (e._merge(r), e._array.sort((e, t) => S.default.compare(e.id, t.id)));
          }, !0);
}
function B() {
    (c.A.forEach((e) => {
        c.A.commit(e.mutate({ ready: !1, loadingMore: !1 }));
    }),
        w.clear(),
        G.clear());
}
function V(e) {
    if (e.media_mention?.message_id == null) return;
    let t = e.media_mention.attachment_id,
        n = c.A.getOrCreate(t),
        i = {
            ...e,
            channel_id: t,
            type: U.lAJ.MEDIA_MENTION_MESSAGE,
            id: e.media_mention.message_id,
            message_reference: {
                channel_id: e.channel_id,
                message_id: e.media_mention.message_id,
                type: U.SH7.DEFAULT,
                guild_id: C.A.getChannel(e.channel_id)?.guild_id,
            },
        };
    ((n = n.receiveMessage(i, !1).mutate({ ready: !0 })), c.A.commit(n));
}
function H(e) {
    if (null == e) return;
    let t = e.mediaMention?.attachment_id;
    if (null == t) return;
    let n = c.A.get(t);
    if (null == n) return;
    let i = e.mediaMention?.message_id;
    null != i && ((n = n.remove(i)), c.A.commit(n));
}
function j(e) {
    let t = !1;
    return (
        c.A.forEach((n) => {
            if (n.cached) return;
            let i = C.A.getBasicChannel(n.channelId);
            i?.guild_id === e &&
                (D.A.canBasicChannel(U.hVb.VIEW_CHANNEL, i) || (c.A.commit(n.mutate({ cached: !0 })), (t = !0)));
        }),
        t
    );
}
function W(e) {
    return j(e.guildId);
}
function Y() {
    c.A.forEach((e) => {
        let { channelId: t } = e;
        null == C.A.getChannel(t) && c.A.clear(t);
    });
}
function K() {
    let e = !1;
    return (
        c.A.forEach((t) => {
            c.A.commit(
                t.reset(
                    t.map(
                        (t) => (
                            t.blocked !== b.A.isBlockedForMessage(t) &&
                                ((e = !0), (t = t.set("blocked", b.A.isBlockedForMessage(t)))),
                            t.ignored !== b.A.isIgnoredForMessage(t) &&
                                ((e = !0), (t = t.set("ignored", b.A.isIgnoredForMessage(t)))),
                            t
                        ),
                    ),
                ),
            );
        }),
        e
    );
}
function $(e) {
    let { type: t, channelId: n, messageId: i, userId: r, emoji: a, reactionType: s } = e,
        l = c.A.get(n);
    if (null == l || !(0, g.vp)(e)) return !1;
    let o = C.A.getBasicChannel(n)?.type === U.rbe.DM,
        d = N.default.getId() === r;
    ((l = l.update(i, (n) =>
        "MESSAGE_REACTION_ADD" === t
            ? n.addReaction(a, d, { colors: e.colors, reactionType: s, isDMChannel: o })
            : n.removeReaction(a, d, s),
    )),
        c.A.commit(l));
}
function X(e) {
    let { type: t, messageData: n } = e,
        { message: i } = n,
        r = (0, u.cR)(n),
        a = i.channelId,
        l = c.A.getOrCreate(a);
    if (!l.has(r)) return !1;
    ((l = l.update(
        r,
        (e) => (
            e.embeds?.filter(f).length > 0 && (e = e.set("embeds", [])),
            "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, s.UI)(e.flags, U.pr7.EPHEMERAL))),
            e
        ),
    )),
        c.A.commit(l));
}
class z extends l.Ay.Store {
    static displayName = "MessageStore";
    initialize() {
        (this.waitFor(N.default, C.A, O.A, I.A, R.A, L.Ay, y.A, h.A, T.default, D.A, b.A, v.Ay, P.A, M.default),
            this.syncWith([h.A], () => {}));
    }
    getMessages(e) {
        if (h.A.hasViewingRoles()) {
            let t = C.A.getChannel(e),
                n = t?.getGuildId();
            if (h.A.isViewingRoles(n) && !D.A.can(U.xBc.VIEW_CHANNEL, t)) return new c.A(e);
        }
        return c.A.getOrCreate(e);
    }
    getMessage(e, t) {
        return c.A.getOrCreate(e).get(t);
    }
    getAutomodRemovalNotice(e) {
        return G.get(e);
    }
    getLastEditableMessage(e) {
        let t = M.default.getCurrentUser();
        return r()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => (0, m.A)(e, t?.id));
    }
    getLastChatCommandMessage(e) {
        let t = M.default.getCurrentUser();
        return this.getMessages(e)
            .toArray()
            .reverse()
            .find(
                (e) =>
                    e.interaction?.type === a.G.APPLICATION_COMMAND &&
                    e.interactionData?.type === d.kc.CHAT &&
                    e.interaction.user.id === t?.id,
            );
    }
    getLastMessage(e) {
        return r()(this.getMessages(e).toArray()).reverse().get(0);
    }
    getLastNonCurrentUserMessage(e) {
        let t = M.default.getCurrentUser();
        return r()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => e.author.id !== t?.id);
    }
    jumpedMessageId(e) {
        let t = c.A.get(e);
        return t?.jumpTargetId;
    }
    focusedMessageId(e) {
        let t = c.A.get(e);
        return t?.focusTargetId;
    }
    hasPresent(e) {
        let t = c.A.get(e);
        return null != t && t.ready && t.hasPresent();
    }
    isReady(e) {
        return c.A.getOrCreate(e).ready;
    }
    whenReady(e, t) {
        this.addConditionalChangeListener(() => {
            if (this.isReady(e)) return (setImmediate(t), !1);
        });
    }
    isLoadingMessages(e) {
        return c.A.getOrCreate(e).loadingMore;
    }
    hasCurrentUserSentMessage(e) {
        let t = M.default.getCurrentUser();
        return null != this.getMessages(e).findNewest((e) => e.author.id === t?.id);
    }
    hasCurrentUserSentWaveBlockingMessage(e) {
        let t = M.default.getCurrentUser();
        return (
            null !=
            this.getMessages(e).findNewest((e) => e.type !== U.lAJ.FRIEND_REQUEST_ACCEPTED && e.author.id === t?.id)
        );
    }
    hasCurrentUserSentMessageSinceAppStart() {
        return k;
    }
}
let q = new z(o.h, {
    BACKGROUND_SYNC_CHANNEL_MESSAGES: function (e) {
        let { changesByChannelId: t } = e;
        for (let e in t) {
            let n = c.A.get(e);
            null != n && (n.cached, n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids));
        }
    },
    CONNECTION_OPEN: B,
    OVERLAY_INITIALIZE: B,
    CACHE_LOADED: function (e) {
        for (let [t, n] of S.default.entries(e.messages)) {
            let e = c.A.getOrCreate(t).addCachedMessages(n, !0);
            c.A.commit(e);
        }
    },
    LOAD_MESSAGES: function () {
        return !0;
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let {
                channelId: t,
                isBefore: n,
                isAfter: i,
                before: r,
                after: a,
                limit: s,
                jump: l,
                hasMoreBefore: o,
                hasMoreAfter: d,
                messages: u,
                isStale: _,
                truncate: E,
                avoidInitialScroll: A,
                requestStartTime: f,
            } = e,
            h = c.A.getOrCreate(t);
        for (let e of ((h = h.loadComplete({
            newMessages: u,
            isBefore: n,
            isAfter: i,
            before: r,
            after: a,
            limit: s,
            jump: l,
            hasMoreBefore: o,
            hasMoreAfter: d,
            cached: _,
            hasFetched: !0,
            avoidInitialScroll: A,
            requestStartTime: f,
        })),
        null != E && (n || i) && (!n || !i) && (h = h.truncate(n, i)),
        (h = F(t, h)),
        c.A.commit(h),
        u))
            V(e);
    },
    LOAD_MESSAGES_FAILURE: function (e) {
        let { channelId: t } = e,
            n = c.A.getOrCreate(t);
        c.A.commit(n.mutate({ loadingMore: !1, error: !0 }));
    },
    LOAD_MESSAGES_SUCCESS_CACHED: function (e) {
        let { channelId: t, jump: n, focus: i, before: r, after: a, limit: s, truncate: l } = e,
            o = c.A.getOrCreate(t);
        (n?.present
            ? (o = o.jumpToPresent(s))
            : i?.messageId != null
              ? (o = o.focusOnMessage(i.messageId))
              : n?.messageId != null
                ? (o = o.jumpToMessage({
                      messageId: n.messageId,
                      flash: n.flash,
                      offset: n.offset,
                      returnTargetId: n.returnMessageId,
                      jumpType: n.jumpType,
                      onJumpComplete: n.onJumpComplete,
                  }))
                : (null != r || null != a) && (o = o.loadFromCache(null != r, s)),
            null != l && (null != r || null != a) && (null == r || null == a) && (o = o.truncate(null != r, null != a)),
            (o = F(t, o)),
            c.A.commit(o));
    },
    LOCAL_MESSAGES_LOADED: function (e) {
        let t = c.A.getOrCreate(e.channelId);
        (t.cached || !t.ready) && c.A.commit(t.addCachedMessages(e.messages, e.stale));
    },
    LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function (e) {
        let t = e.messageId,
            n = e.channelId,
            i = c.A.get(n);
        if (null == i || !i.has(t)) return !1;
        ((i = i.update(t, (t) => t.set("interactionData", e.interactionData))), c.A.commit(i));
    },
    TRUNCATE_MESSAGES: function (e) {
        let { channelId: t, truncateBottom: n, truncateTop: i } = e;
        x.log(`Truncating messages for ${t} bottom:${n} top:${i}`);
        let r = c.A.getOrCreate(t);
        ((r = r.truncate(n, i)), c.A.commit(r));
    },
    CLEAR_MESSAGES: function (e) {
        let { channelId: t } = e;
        (x.log(`Clearing messages for ${t}`), c.A.clear(t), w.clear());
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: i, isPushNotification: r } = e,
            a = c.A.getOrCreate(t);
        if (r) {
            (x.log("Inserting message tapped on from a push notification", n.id, n.channel_id),
                c.A.commit(a.receivePushNotification(n)));
            return;
        }
        if (!a.ready || (i && a.has(n.id))) return !1;
        (null != n.nonce && n.state !== U.cmJ.SENDING && w.has(n.nonce) && ((a = a.remove(n.nonce)), w.delete(n.nonce)),
            (a = a.receiveMessage(n, !0 === O.A.isAtBottom(t))),
            c.A.commit(a),
            V(n));
    },
    MESSAGE_SEND_FAILED: function (e) {
        let { channelId: t, messageId: n, reason: i } = e,
            r = c.A.getOrCreate(t);
        if (null == r || !r.has(n)) return !1;
        let a = r.get(n, !0);
        ((r =
            a?.isPoll() === !0
                ? r.remove(n)
                : r.update(
                      n,
                      (e) => (
                          (e = e.set("state", U.cmJ.SEND_FAILED)).isCommandType()
                              ? (e = (e = e.set("interactionError", i ?? "")).set(
                                    "flags",
                                    (0, s.UI)(e.flags, U.pr7.EPHEMERAL),
                                ))
                              : null != i && (e = e.set("interactionError", i ?? "")),
                          e
                      ),
                  )),
            c.A.commit(r));
    },
    MESSAGE_SEND_FAILED_AUTOMOD: X,
    AUTO_MODERATION_CONTENT_DELETED: function (e) {
        let { message: t, thread: n, notice: i } = e;
        if (null == t || null != n) return !1;
        let r = t.channel_id,
            a = c.A.getOrCreate(r);
        if (!a.ready || (!a.has(t.id) && !(a = a.receiveMessage(t, !0 === O.A.isAtBottom(r))).has(t.id))) return !1;
        ((a = a.update(t.id, (e) => e.set("flags", (0, s.UI)(e.flags, U.pr7.EPHEMERAL)))),
            c.A.commit(a),
            G.set(t.id, i));
    },
    MESSAGE_EDIT_FAILED_AUTOMOD: X,
    MESSAGE_UPDATE: function (e) {
        let t = e.message.id,
            n = e.message.channel_id,
            i = c.A.getOrCreate(n);
        if (null == i || !i.has(t)) return !1;
        ((i = i.update(t, (t) => (0, p.IU)(t, e.message))),
            c.A.commit(i),
            (function (e) {
                if (e.media_mention?.message_id == null || !("content" in e)) return;
                let t = e.media_mention.attachment_id,
                    n = c.A.getOrCreate(t);
                ((n = n.update(e.media_mention.message_id, (t) => (0, p.IU)(t, { content: e.content }))),
                    c.A.commit(n));
            })(e.message));
    },
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: n } = e,
            i = c.A.get(n);
        if (null == i || !i.has(t)) return !1;
        ((i = i.update(t, E.T)), c.A.commit(i));
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n, local: i } = e,
            r = c.A.getOrCreate(n);
        if (null == r || !r.has(t)) return !1;
        if (G.has(t)) {
            if (!0 !== i) return !1;
            G.delete(t);
        }
        if (r.revealedMessageId === t) {
            let e = r.getAfter(t);
            r = null != e && e.blocked ? r.mutate({ revealedMessageId: e.id }) : r.mutate({ revealedMessageId: null });
        }
        (H(r.get(t)), (r = r.remove(t)), c.A.commit(r), w.delete(t));
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e,
            i = c.A.getOrCreate(n);
        if (null == i) return !1;
        t.forEach((e) => {
            H(i.get(e));
        });
        let a = i.removeMany(t);
        if (i === a) return !1;
        if (null != a.revealedMessageId && r().some(t, (e) => a.revealedMessageId === e)) {
            let e = a.getAfter(a.revealedMessageId);
            a = null != e && e.blocked ? a.mutate({ revealedMessageId: e.id }) : a.mutate({ revealedMessageId: null });
        }
        (c.A.commit(a),
            t.forEach((e) => {
                w.delete(e);
            }));
    },
    MESSAGE_REVEAL: function (e) {
        let { channelId: t, messageId: n } = e,
            i = c.A.getOrCreate(t);
        c.A.commit(i.mutate({ revealedMessageId: n }));
    },
    THREAD_CREATE_LOCAL: function (e) {
        let { channelId: t } = e,
            n = c.A.getOrCreate(t);
        ((n = n.loadComplete({ newMessages: [], hasMoreAfter: !1, hasMoreBefore: !1 })), c.A.commit(n));
    },
    CHANNEL_UPDATES: function (e) {
        let t = r().uniq(e.channels.map((e) => e.guild_id)),
            n = !1;
        for (let e of t) j(e) && (n = !0);
        return n;
    },
    GUILD_ROLE_UPDATE: W,
    GUILD_ROLE_DELETE: W,
    GUILD_MEMBER_UPDATE: function (e) {
        return e.user.id === M.default.getCurrentUser()?.id && j(e.guildId);
    },
    CHANNEL_DELETE: Y,
    THREAD_DELETE: Y,
    GUILD_DELETE: Y,
    RELATIONSHIP_ADD: K,
    RELATIONSHIP_UPDATE: K,
    RELATIONSHIP_REMOVE: K,
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {},
    THREAD_MEMBER_LIST_UPDATE: function (e) {},
    MESSAGE_REACTION_ADD: $,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { channelId: t, messageId: n, reactions: i } = e,
            r = c.A.get(t);
        if (null == r) return !1;
        ((r = r.update(n, (e) => e.addReactionBatch(i, M.default.getCurrentUser()?.id))), c.A.commit(r));
    },
    MESSAGE_REACTION_REMOVE: $,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { channelId: t, messageId: n } = e,
            i = c.A.get(t);
        if (null == i) return !1;
        ((i = i.update(n, (e) => e.set("reactions", []))), c.A.commit(i));
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { channelId: t, messageId: n, emoji: i } = e,
            r = c.A.get(t);
        if (null == r) return !1;
        ((r = r.update(n, (e) => e.removeReactionsForEmoji(i))), c.A.commit(r));
    },
    LOGOUT: function () {
        (c.A.forEach((e) => {
            c.A.clear(e.channelId);
        }),
            w.clear());
    },
    UPLOAD_START: function (e) {
        let { message: t } = e;
        t?.nonce != null && w.add(t.nonce);
    },
    UPLOAD_FAIL: function (e) {
        let { channelId: t, messageId: n } = e;
        if (null == n || !w.has(n)) return !1;
        let i = c.A.getOrCreate(t),
            r = i.get(n);
        if (null == r) return !1;
        ((i = (i = i.remove(n)).merge([r])), w.delete(n), c.A.commit(i));
    },
    LOCAL_MESSAGE_CREATE: function (e) {
        let { message: t } = e,
            n = M.default.getCurrentUser();
        null != t && null != t.author && null != n && t.author.id === n.id && (k = !0);
    },
});
