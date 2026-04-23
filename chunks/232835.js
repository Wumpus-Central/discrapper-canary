"use strict";
n.d(t, { A: () => K }), n(938796), n(321073), n(142703);
var i = n(735438),
    r = n.n(i),
    s = n(665260),
    a = n(17928),
    o = n(228366),
    l = n(155718),
    d = n(292446),
    _ = n(884384),
    u = n(723176),
    c = n(626584),
    E = n(390248),
    h = n(508602);
let m = (e) => {
    let { type: t } = e;
    return t !== h.A.AUTO_MODERATION_MESSAGE && t !== h.A.AUTO_MODERATION_NOTIFICATION;
};
var f = n(164956),
    g = n(320095),
    p = n(697470),
    A = (n(763754), n(491001)),
    I = n(815807),
    T = n(773669),
    S = n(935208),
    N = n(495544),
    C = n(734057),
    R = n(72314),
    O = n(808728),
    y = n(696451),
    v = n(71393),
    D = n(576705),
    L = n(994500),
    b = n(309010),
    w = n(967198),
    P = n(287809),
    k = n(652215);
let M = new Set(),
    U = new c.A("MessageStore"),
    x = !1;
function G() {
    d.A.forEach((e) => {
        d.A.commit(e.mutate({ ready: !1, loadingMore: !1 }));
    }),
        M.clear();
}
async function V(e, t, n) {
    let i = u.A.database(),
        r = C.A.getBasicChannel(e);
    if (null != i && null != r)
        try {
            let n = u.A.messages(i),
                s = await n.get(r.guild_id, e, t.id);
            if (null != s) return;
        } catch {}
    U.log("Push notification message not in cache, adding directly", t.id, t.channel_id);
    let s = d.A.getOrCreate(e);
    d.A.commit(s.receivePushNotification(t, n)), Y.emitChange();
}
function F() {
    d.A.forEach((e) => {
        let { channelId: t } = e;
        null == C.A.getChannel(t) && d.A.clear(t);
    });
}
function B() {
    let e = !1;
    return (
        d.A.forEach((t) => {
            d.A.commit(
                t.reset(
                    t.map(
                        (t) => (
                            t.blocked !== L.A.isBlockedForMessage(t) &&
                                ((e = !0), (t = t.set("blocked", L.A.isBlockedForMessage(t)))),
                            t.ignored !== L.A.isIgnoredForMessage(t) &&
                                ((e = !0), (t = t.set("ignored", L.A.isIgnoredForMessage(t)))),
                            t
                        ),
                    ),
                ),
            );
        }),
        e
    );
}
function H(e) {
    let { type: t, channelId: n, messageId: i, userId: r, emoji: s, reactionType: a } = e,
        o = d.A.get(n);
    if (null == o || !(0, I.vp)(e)) return !1;
    let l = N.default.getId() === r;
    (o = o.update(i, (n) =>
        "MESSAGE_REACTION_ADD" === t ? n.addReaction(s, l, e.colors, a) : n.removeReaction(s, l, a),
    )),
        d.A.commit(o);
}
function j(e) {
    let { type: t, messageData: n } = e,
        { message: i } = n,
        r = (0, _.cR)(n),
        a = i.channelId,
        o = d.A.getOrCreate(a);
    if (!o.has(r)) return !1;
    (o = o.update(
        r,
        (e) => (
            e.embeds?.filter(m).length > 0 && (e = e.set("embeds", [])),
            "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, s.UI)(e.flags, k.pr7.EPHEMERAL))),
            e
        ),
    )),
        d.A.commit(o);
}
class W extends a.Ay.Store {
    static displayName = "MessageStore";
    initialize() {
        this.waitFor(N.default, C.A, R.A, O.Ay, y.Ay, v.A, f.A, T.default, D.A, L.A, b.A, w.A, P.default),
            this.syncWith([f.A], () => {});
    }
    getMessages(e) {
        if (f.A.hasViewingRoles()) {
            let t = C.A.getChannel(e),
                n = t?.getGuildId();
            if (f.A.isViewingRoles(n) && !D.A.can(k.xBc.VIEW_CHANNEL, t)) return new d.A(e);
        }
        return d.A.getOrCreate(e);
    }
    getMessage(e, t) {
        return d.A.getOrCreate(e).get(t);
    }
    getLastEditableMessage(e) {
        let t = P.default.getCurrentUser();
        return r()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => (0, p.A)(e, t?.id));
    }
    getLastChatCommandMessage(e) {
        let t = P.default.getCurrentUser();
        return this.getMessages(e)
            .toArray()
            .reverse()
            .find(
                (e) =>
                    e.interaction?.type === l.G4.APPLICATION_COMMAND &&
                    e.interactionData?.type === l.kc.CHAT &&
                    e.interaction.user.id === t?.id,
            );
    }
    getLastMessage(e) {
        return r()(this.getMessages(e).toArray()).reverse().get(0);
    }
    getLastNonCurrentUserMessage(e) {
        let t = P.default.getCurrentUser();
        return r()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => e.author.id !== t?.id);
    }
    jumpedMessageId(e) {
        let t = d.A.get(e);
        return t?.jumpTargetId;
    }
    focusedMessageId(e) {
        let t = d.A.get(e);
        return t?.focusTargetId;
    }
    hasPresent(e) {
        let t = d.A.get(e);
        return null != t && t.ready && t.hasPresent();
    }
    isReady(e) {
        return d.A.getOrCreate(e).ready;
    }
    whenReady(e, t) {
        this.addConditionalChangeListener(() => {
            if (this.isReady(e)) return setImmediate(t), !1;
        });
    }
    isLoadingMessages(e) {
        return d.A.getOrCreate(e).loadingMore;
    }
    hasCurrentUserSentMessage(e) {
        let t = P.default.getCurrentUser();
        return null != this.getMessages(e).findNewest((e) => e.author.id === t?.id);
    }
    hasCurrentUserSentWaveBlockingMessage(e) {
        let t = P.default.getCurrentUser();
        return (
            null !=
            this.getMessages(e).findNewest((e) => e.type !== k.lAJ.FRIEND_REQUEST_ACCEPTED && e.author.id === t?.id)
        );
    }
    hasCurrentUserSentMessageSinceAppStart() {
        return x;
    }
}
let Y = new W(o.h, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: function (e) {
            let { changesByChannelId: t } = e;
            for (let e in t) {
                let n = d.A.get(e);
                null != n &&
                    (n.cached, n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids));
            }
        },
        CONNECTION_OPEN: G,
        OVERLAY_INITIALIZE: G,
        CACHE_LOADED: function (e) {
            for (let [t, n] of S.default.entries(e.messages)) {
                let e = d.A.getOrCreate(t).addCachedMessages(n, !0);
                d.A.commit(e);
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
                    jump: r,
                    hasMoreBefore: s,
                    hasMoreAfter: a,
                    messages: o,
                    isStale: l,
                    truncate: _,
                    avoidInitialScroll: u,
                } = e,
                c = d.A.getOrCreate(t);
            (c = c.loadComplete({
                newMessages: o,
                isBefore: n,
                isAfter: i,
                jump: r,
                hasMoreBefore: s,
                hasMoreAfter: a,
                cached: l,
                hasFetched: !0,
                avoidInitialScroll: u,
            })),
                null != _ && (n || i) && (!n || !i) && (c = c.truncate(n, i)),
                d.A.commit(c);
        },
        LOAD_MESSAGES_FAILURE: function (e) {
            let { channelId: t } = e,
                n = d.A.getOrCreate(t);
            d.A.commit(n.mutate({ loadingMore: !1, error: !0 }));
        },
        LOAD_MESSAGES_SUCCESS_CACHED: function (e) {
            let { channelId: t, jump: n, focus: i, before: r, after: s, limit: a, truncate: o } = e,
                l = d.A.getOrCreate(t);
            n?.present
                ? (l = l.jumpToPresent(a))
                : i?.messageId != null
                  ? (l = l.focusOnMessage(i.messageId))
                  : n?.messageId != null
                    ? (l = l.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType))
                    : (null != r || null != s) && (l = l.loadFromCache(null != r, a)),
                null != o &&
                    (null != r || null != s) &&
                    (null == r || null == s) &&
                    (l = l.truncate(null != r, null != s)),
                d.A.commit(l);
        },
        LOCAL_MESSAGES_LOADED: function (e) {
            let t = d.A.getOrCreate(e.channelId);
            if (e.isForegroundCacheLoad || t.cached || !t.ready) {
                let n = t.addCachedMessages(e.messages, e.stale);
                e.isForegroundCacheLoad &&
                    e.messages.length > 0 &&
                    null == n.jumpTargetId &&
                    (n = n.mutate({
                        initialScrollSequenceId: n.initialScrollSequenceId + 1,
                        suppressRowAnimationSequenceId: n.suppressRowAnimationSequenceId + 1,
                    })),
                    d.A.commit(n);
            }
        },
        LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function (e) {
            let t = e.messageId,
                n = e.channelId,
                i = d.A.get(n);
            if (null == i || !i.has(t)) return !1;
            (i = i.update(t, (t) => t.set("interactionData", e.interactionData))), d.A.commit(i);
        },
        TRUNCATE_MESSAGES: function (e) {
            let { channelId: t, truncateBottom: n, truncateTop: i } = e;
            U.log(`Truncating messages for ${t} bottom:${n} top:${i}`);
            let r = d.A.getOrCreate(t);
            (r = r.truncate(n, i)), d.A.commit(r);
        },
        CLEAR_MESSAGES: function (e) {
            let { channelId: t } = e;
            U.log(`Clearing messages for ${t}`), d.A.clear(t), M.clear();
        },
        MESSAGE_CREATE: function (e) {
            let { channelId: t, message: i, isPushNotification: r } = e,
                s = d.A.getOrCreate(t),
                a = n(366853).A.isConnected();
            return r
                ? (0, A.K)()
                    ? (V(t, i, a), !1)
                    : (U.log("Inserting message tapped on from a push notification", i.id, i.channel_id),
                      void d.A.commit(s.receivePushNotification(i, a)))
                : !!s.ready &&
                      void (null != i.nonce &&
                          i.state !== k.cmJ.SENDING &&
                          M.has(i.nonce) &&
                          ((s = s.remove(i.nonce)), M.delete(i.nonce)),
                      (s = s.receiveMessage(i, !0 === R.A.isAtBottom(t))),
                      d.A.commit(s));
        },
        MESSAGE_SEND_FAILED: function (e) {
            let { channelId: t, messageId: n, reason: i } = e,
                r = d.A.getOrCreate(t);
            if (null == r || !r.has(n)) return !1;
            let a = r.get(n, !0);
            (r =
                a?.isPoll() === !0
                    ? r.remove(n)
                    : r.update(
                          n,
                          (e) => (
                              (e = e.set("state", k.cmJ.SEND_FAILED)).isCommandType()
                                  ? (e = (e = e.set("interactionError", i ?? "")).set(
                                        "flags",
                                        (0, s.UI)(e.flags, k.pr7.EPHEMERAL),
                                    ))
                                  : null != i && (e = e.set("interactionError", i ?? "")),
                              e
                          ),
                      )),
                d.A.commit(r);
        },
        MESSAGE_SEND_FAILED_AUTOMOD: j,
        MESSAGE_EDIT_FAILED_AUTOMOD: j,
        MESSAGE_UPDATE: function (e) {
            let t = e.message.id,
                n = e.message.channel_id,
                i = d.A.getOrCreate(n);
            if (null == i || !i.has(t)) return !1;
            (i = i.update(t, (t) => (0, g.IU)(t, e.message))), d.A.commit(i);
        },
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
            let { messageId: t, channelId: n } = e,
                i = d.A.get(n);
            if (null == i || !i.has(t)) return !1;
            (i = i.update(t, E.Td)), d.A.commit(i);
        },
        MESSAGE_DELETE: function (e) {
            let { id: t, channelId: n } = e,
                i = d.A.getOrCreate(n);
            if (null == i || !i.has(t)) return !1;
            if (i.revealedMessageId === t) {
                let e = i.getAfter(t);
                i =
                    null != e && e.blocked
                        ? i.mutate({ revealedMessageId: e.id })
                        : i.mutate({ revealedMessageId: null });
            }
            (i = i.remove(t)), d.A.commit(i), M.delete(t);
        },
        MESSAGE_DELETE_BULK: function (e) {
            let { ids: t, channelId: n } = e,
                i = d.A.getOrCreate(n);
            if (null == i) return !1;
            let s = i.removeMany(t);
            if (i === s) return !1;
            if (null != s.revealedMessageId && r().some(t, (e) => s.revealedMessageId === e)) {
                let e = s.getAfter(s.revealedMessageId);
                s =
                    null != e && e.blocked
                        ? s.mutate({ revealedMessageId: e.id })
                        : s.mutate({ revealedMessageId: null });
            }
            d.A.commit(s),
                t.forEach((e) => {
                    M.delete(e);
                });
        },
        MESSAGE_REVEAL: function (e) {
            let { channelId: t, messageId: n } = e,
                i = d.A.getOrCreate(t);
            d.A.commit(i.mutate({ revealedMessageId: n }));
        },
        THREAD_CREATE: function (e) {
            let { channel: t } = e;
            if (null == t.parent_id) return !1;
            let n = d.A.get(t.parent_id);
            if (null == n) return !1;
            let i = S.default.castChannelIdAsMessageId(t.id),
                r = n.get(i, !0);
            if (null == r || r.hasFlag(k.pr7.HAS_THREAD)) return !1;
            d.A.commit(n.update(i, (e) => e.set("flags", (0, s.UI)(e.flags, k.pr7.HAS_THREAD))));
        },
        THREAD_CREATE_LOCAL: function (e) {
            let { channelId: t } = e,
                n = d.A.getOrCreate(t);
            (n = n.loadComplete({ newMessages: [], hasMoreAfter: !1, hasMoreBefore: !1 })), d.A.commit(n);
        },
        CHANNEL_DELETE: F,
        THREAD_DELETE: F,
        GUILD_DELETE: F,
        RELATIONSHIP_ADD: B,
        RELATIONSHIP_UPDATE: B,
        RELATIONSHIP_REMOVE: B,
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {},
        THREAD_MEMBER_LIST_UPDATE: function (e) {},
        MESSAGE_REACTION_ADD: H,
        MESSAGE_REACTION_ADD_MANY: function (e) {
            let { channelId: t, messageId: n, reactions: i } = e,
                r = d.A.get(t);
            if (null == r) return !1;
            (r = r.update(n, (e) => e.addReactionBatch(i, P.default.getCurrentUser()?.id))), d.A.commit(r);
        },
        MESSAGE_REACTION_REMOVE: H,
        MESSAGE_REACTION_REMOVE_ALL: function (e) {
            let { channelId: t, messageId: n } = e,
                i = d.A.get(t);
            if (null == i) return !1;
            (i = i.update(n, (e) => e.set("reactions", []))), d.A.commit(i);
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
            let { channelId: t, messageId: n, emoji: i } = e,
                r = d.A.get(t);
            if (null == r) return !1;
            (r = r.update(n, (e) => e.removeReactionsForEmoji(i))), d.A.commit(r);
        },
        LOGOUT: function () {
            d.A.forEach((e) => {
                d.A.clear(e.channelId);
            }),
                M.clear();
        },
        UPLOAD_START: function (e) {
            let { message: t } = e;
            t?.nonce != null && M.add(t.nonce);
        },
        UPLOAD_FAIL: function (e) {
            let { channelId: t, messageId: n } = e;
            if (null == n || !M.has(n)) return !1;
            let i = d.A.getOrCreate(t),
                r = i.get(n);
            if (null == r) return !1;
            (i = (i = i.remove(n)).merge([r])), M.delete(n), d.A.commit(i);
        },
        LOCAL_MESSAGE_CREATE: function (e) {
            let { message: t } = e,
                n = P.default.getCurrentUser();
            null != t && null != t.author && null != n && t.author.id === n.id && (x = !0);
        },
    }),
    K = Y;
