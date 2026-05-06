"use strict";
n.d(t, { A: () => K }), n(938796), n(321073), n(142703);
var i = n(735438),
    r = n.n(i),
    s = n(665260),
    a = n(17928),
    o = n(228366),
    l = n(155718),
    u = n(292446),
    c = n(779185),
    d = n(723176),
    _ = n(626584),
    f = n(390248),
    h = n(508602);
let p = (e) => {
    let { type: t } = e;
    return t !== h.A.AUTO_MODERATION_MESSAGE && t !== h.A.AUTO_MODERATION_NOTIFICATION;
};
var E = n(164956),
    m = n(320095),
    g = n(697470),
    A = (n(763754), n(491001)),
    I = n(815807),
    T = n(773669),
    S = n(935208),
    N = n(495544),
    y = n(734057),
    C = n(72314),
    v = n(808728),
    O = n(696451),
    R = n(71393),
    b = n(576705),
    D = n(994500),
    L = n(309010),
    w = n(967198),
    M = n(287809),
    P = n(652215);
let x = new Set(),
    U = new _.A("MessageStore"),
    k = !1;
function G() {
    u.A.forEach((e) => {
        u.A.commit(e.mutate({ ready: !1, loadingMore: !1 }));
    }),
        x.clear();
}
async function F(e, t, n) {
    let i = d.A.database(),
        r = y.A.getBasicChannel(e);
    if (null != i && null != r)
        try {
            let n = d.A.messages(i),
                s = await n.get(r.guild_id, e, t.id);
            if (null != s) return;
        } catch {}
    U.log("Push notification message not in cache, adding directly", t.id, t.channel_id);
    let s = u.A.getOrCreate(e);
    u.A.commit(s.receivePushNotification(t, n)), W.emitChange();
}
function V() {
    u.A.forEach((e) => {
        let { channelId: t } = e;
        null == y.A.getChannel(t) && u.A.clear(t);
    });
}
function B() {
    let e = !1;
    return (
        u.A.forEach((t) => {
            u.A.commit(
                t.reset(
                    t.map(
                        (t) => (
                            t.blocked !== D.A.isBlockedForMessage(t) &&
                                ((e = !0), (t = t.set("blocked", D.A.isBlockedForMessage(t)))),
                            t.ignored !== D.A.isIgnoredForMessage(t) &&
                                ((e = !0), (t = t.set("ignored", D.A.isIgnoredForMessage(t)))),
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
        o = u.A.get(n);
    if (null == o || !(0, I.vp)(e)) return !1;
    let l = N.default.getId() === r;
    (o = o.update(i, (n) =>
        "MESSAGE_REACTION_ADD" === t ? n.addReaction(s, l, e.colors, a) : n.removeReaction(s, l, a),
    )),
        u.A.commit(o);
}
function j(e) {
    let { type: t, messageData: n } = e,
        { message: i } = n,
        r = (0, c.cR)(n),
        a = i.channelId,
        o = u.A.getOrCreate(a);
    if (!o.has(r)) return !1;
    (o = o.update(
        r,
        (e) => (
            e.embeds?.filter(p).length > 0 && (e = e.set("embeds", [])),
            "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, s.UI)(e.flags, P.pr7.EPHEMERAL))),
            e
        ),
    )),
        u.A.commit(o);
}
class Y extends a.Ay.Store {
    static displayName = "MessageStore";
    initialize() {
        this.waitFor(N.default, y.A, C.A, v.Ay, O.Ay, R.A, E.A, T.default, b.A, D.A, L.A, w.A, M.default),
            this.syncWith([E.A], () => {});
    }
    getMessages(e) {
        if (E.A.hasViewingRoles()) {
            let t = y.A.getChannel(e),
                n = t?.getGuildId();
            if (E.A.isViewingRoles(n) && !b.A.can(P.xBc.VIEW_CHANNEL, t)) return new u.A(e);
        }
        return u.A.getOrCreate(e);
    }
    getMessage(e, t) {
        return u.A.getOrCreate(e).get(t);
    }
    getLastEditableMessage(e) {
        let t = M.default.getCurrentUser();
        return r()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => (0, g.A)(e, t?.id));
    }
    getLastChatCommandMessage(e) {
        let t = M.default.getCurrentUser();
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
        let t = M.default.getCurrentUser();
        return r()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => e.author.id !== t?.id);
    }
    jumpedMessageId(e) {
        let t = u.A.get(e);
        return t?.jumpTargetId;
    }
    focusedMessageId(e) {
        let t = u.A.get(e);
        return t?.focusTargetId;
    }
    hasPresent(e) {
        let t = u.A.get(e);
        return null != t && t.ready && t.hasPresent();
    }
    isReady(e) {
        return u.A.getOrCreate(e).ready;
    }
    whenReady(e, t) {
        this.addConditionalChangeListener(() => {
            if (this.isReady(e)) return setImmediate(t), !1;
        });
    }
    isLoadingMessages(e) {
        return u.A.getOrCreate(e).loadingMore;
    }
    hasCurrentUserSentMessage(e) {
        let t = M.default.getCurrentUser();
        return null != this.getMessages(e).findNewest((e) => e.author.id === t?.id);
    }
    hasCurrentUserSentWaveBlockingMessage(e) {
        let t = M.default.getCurrentUser();
        return (
            null !=
            this.getMessages(e).findNewest((e) => e.type !== P.lAJ.FRIEND_REQUEST_ACCEPTED && e.author.id === t?.id)
        );
    }
    hasCurrentUserSentMessageSinceAppStart() {
        return k;
    }
}
let W = new Y(o.h, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: function (e) {
            let { changesByChannelId: t } = e;
            for (let e in t) {
                let n = u.A.get(e);
                null != n &&
                    (n.cached, n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids));
            }
        },
        CONNECTION_OPEN: G,
        OVERLAY_INITIALIZE: G,
        CACHE_LOADED: function (e) {
            for (let [t, n] of S.default.entries(e.messages)) {
                let e = u.A.getOrCreate(t).addCachedMessages(n, !0);
                u.A.commit(e);
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
                    truncate: c,
                    avoidInitialScroll: d,
                } = e,
                _ = u.A.getOrCreate(t);
            (_ = _.loadComplete({
                newMessages: o,
                isBefore: n,
                isAfter: i,
                jump: r,
                hasMoreBefore: s,
                hasMoreAfter: a,
                cached: l,
                hasFetched: !0,
                avoidInitialScroll: d,
            })),
                null != c && (n || i) && (!n || !i) && (_ = _.truncate(n, i)),
                u.A.commit(_);
        },
        LOAD_MESSAGES_FAILURE: function (e) {
            let { channelId: t } = e,
                n = u.A.getOrCreate(t);
            u.A.commit(n.mutate({ loadingMore: !1, error: !0 }));
        },
        LOAD_MESSAGES_SUCCESS_CACHED: function (e) {
            let { channelId: t, jump: n, focus: i, before: r, after: s, limit: a, truncate: o } = e,
                l = u.A.getOrCreate(t);
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
                u.A.commit(l);
        },
        LOCAL_MESSAGES_LOADED: function (e) {
            let t = u.A.getOrCreate(e.channelId);
            if (e.isForegroundCacheLoad || t.cached || !t.ready) {
                let n = t.addCachedMessages(e.messages, e.stale);
                e.isForegroundCacheLoad &&
                    e.messages.length > 0 &&
                    null == n.jumpTargetId &&
                    (n = n.mutate({
                        initialScrollSequenceId: n.initialScrollSequenceId + 1,
                        suppressRowAnimationSequenceId: n.suppressRowAnimationSequenceId + 1,
                    })),
                    u.A.commit(n);
            }
        },
        LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function (e) {
            let t = e.messageId,
                n = e.channelId,
                i = u.A.get(n);
            if (null == i || !i.has(t)) return !1;
            (i = i.update(t, (t) => t.set("interactionData", e.interactionData))), u.A.commit(i);
        },
        TRUNCATE_MESSAGES: function (e) {
            let { channelId: t, truncateBottom: n, truncateTop: i } = e;
            U.log(`Truncating messages for ${t} bottom:${n} top:${i}`);
            let r = u.A.getOrCreate(t);
            (r = r.truncate(n, i)), u.A.commit(r);
        },
        CLEAR_MESSAGES: function (e) {
            let { channelId: t } = e;
            U.log(`Clearing messages for ${t}`), u.A.clear(t), x.clear();
        },
        MESSAGE_CREATE: function (e) {
            let { channelId: t, message: i, optimistic: r, isPushNotification: s } = e,
                a = u.A.getOrCreate(t),
                o = n(587626).A.isConnected();
            return s
                ? (0, A.K)()
                    ? (F(t, i, o), !1)
                    : (U.log("Inserting message tapped on from a push notification", i.id, i.channel_id),
                      void u.A.commit(a.receivePushNotification(i, o)))
                : !(!a.ready || (r && a.has(i.id))) &&
                      void (null != i.nonce &&
                          i.state !== P.cmJ.SENDING &&
                          x.has(i.nonce) &&
                          ((a = a.remove(i.nonce)), x.delete(i.nonce)),
                      (a = a.receiveMessage(i, !0 === C.A.isAtBottom(t))),
                      u.A.commit(a));
        },
        MESSAGE_SEND_FAILED: function (e) {
            let { channelId: t, messageId: n, reason: i } = e,
                r = u.A.getOrCreate(t);
            if (null == r || !r.has(n)) return !1;
            let a = r.get(n, !0);
            (r =
                a?.isPoll() === !0
                    ? r.remove(n)
                    : r.update(
                          n,
                          (e) => (
                              (e = e.set("state", P.cmJ.SEND_FAILED)).isCommandType()
                                  ? (e = (e = e.set("interactionError", i ?? "")).set(
                                        "flags",
                                        (0, s.UI)(e.flags, P.pr7.EPHEMERAL),
                                    ))
                                  : null != i && (e = e.set("interactionError", i ?? "")),
                              e
                          ),
                      )),
                u.A.commit(r);
        },
        MESSAGE_SEND_FAILED_AUTOMOD: j,
        MESSAGE_EDIT_FAILED_AUTOMOD: j,
        MESSAGE_UPDATE: function (e) {
            let t = e.message.id,
                n = e.message.channel_id,
                i = u.A.getOrCreate(n);
            if (null == i || !i.has(t)) return !1;
            (i = i.update(t, (t) => (0, m.IU)(t, e.message))), u.A.commit(i);
        },
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
            let { messageId: t, channelId: n } = e,
                i = u.A.get(n);
            if (null == i || !i.has(t)) return !1;
            (i = i.update(t, f.Td)), u.A.commit(i);
        },
        MESSAGE_DELETE: function (e) {
            let { id: t, channelId: n } = e,
                i = u.A.getOrCreate(n);
            if (null == i || !i.has(t)) return !1;
            if (i.revealedMessageId === t) {
                let e = i.getAfter(t);
                i =
                    null != e && e.blocked
                        ? i.mutate({ revealedMessageId: e.id })
                        : i.mutate({ revealedMessageId: null });
            }
            (i = i.remove(t)), u.A.commit(i), x.delete(t);
        },
        MESSAGE_DELETE_BULK: function (e) {
            let { ids: t, channelId: n } = e,
                i = u.A.getOrCreate(n);
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
            u.A.commit(s),
                t.forEach((e) => {
                    x.delete(e);
                });
        },
        MESSAGE_REVEAL: function (e) {
            let { channelId: t, messageId: n } = e,
                i = u.A.getOrCreate(t);
            u.A.commit(i.mutate({ revealedMessageId: n }));
        },
        THREAD_CREATE_LOCAL: function (e) {
            let { channelId: t } = e,
                n = u.A.getOrCreate(t);
            (n = n.loadComplete({ newMessages: [], hasMoreAfter: !1, hasMoreBefore: !1 })), u.A.commit(n);
        },
        CHANNEL_DELETE: V,
        THREAD_DELETE: V,
        GUILD_DELETE: V,
        RELATIONSHIP_ADD: B,
        RELATIONSHIP_UPDATE: B,
        RELATIONSHIP_REMOVE: B,
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {},
        THREAD_MEMBER_LIST_UPDATE: function (e) {},
        MESSAGE_REACTION_ADD: H,
        MESSAGE_REACTION_ADD_MANY: function (e) {
            let { channelId: t, messageId: n, reactions: i } = e,
                r = u.A.get(t);
            if (null == r) return !1;
            (r = r.update(n, (e) => e.addReactionBatch(i, M.default.getCurrentUser()?.id))), u.A.commit(r);
        },
        MESSAGE_REACTION_REMOVE: H,
        MESSAGE_REACTION_REMOVE_ALL: function (e) {
            let { channelId: t, messageId: n } = e,
                i = u.A.get(t);
            if (null == i) return !1;
            (i = i.update(n, (e) => e.set("reactions", []))), u.A.commit(i);
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
            let { channelId: t, messageId: n, emoji: i } = e,
                r = u.A.get(t);
            if (null == r) return !1;
            (r = r.update(n, (e) => e.removeReactionsForEmoji(i))), u.A.commit(r);
        },
        LOGOUT: function () {
            u.A.forEach((e) => {
                u.A.clear(e.channelId);
            }),
                x.clear();
        },
        UPLOAD_START: function (e) {
            let { message: t } = e;
            t?.nonce != null && x.add(t.nonce);
        },
        UPLOAD_FAIL: function (e) {
            let { channelId: t, messageId: n } = e;
            if (null == n || !x.has(n)) return !1;
            let i = u.A.getOrCreate(t),
                r = i.get(n);
            if (null == r) return !1;
            (i = (i = i.remove(n)).merge([r])), x.delete(n), u.A.commit(i);
        },
        LOCAL_MESSAGE_CREATE: function (e) {
            let { message: t } = e,
                n = M.default.getCurrentUser();
            null != t && null != t.author && null != n && t.author.id === n.id && (k = !0);
        },
    }),
    K = W;
