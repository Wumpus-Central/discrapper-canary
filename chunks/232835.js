"use strict";
n.d(t, { A: () => Z }), n(938796), n(321073), n(142703);
var i = n(435558),
    r = n.n(i),
    a = n(665260),
    s = n(17928),
    l = n(228366),
    o = n(155718),
    d = n(292446),
    c = n(779185),
    u = n(723176),
    _ = n(626584),
    E = n(390248),
    A = n(508602);
function h(e) {
    let { type: t } = e;
    return t !== A.A.AUTO_MODERATION_MESSAGE && t !== A.A.AUTO_MODERATION_NOTIFICATION;
}
var I = n(164956),
    f = n(931480),
    p = n(320095),
    T = n(697470),
    m = (n(763754), n(491001)),
    g = n(815807),
    S = n(773669),
    N = n(935208),
    C = n(280450),
    R = n(734057),
    O = n(72314),
    L = n(808728),
    y = n(696451),
    D = n(71393),
    v = n(576705),
    b = n(994500),
    M = n(309010),
    P = n(967198),
    U = n(287809),
    w = n(652215);
let G = new Set(),
    x = new _.A("MessageStore"),
    k = !1;
function F(e, t) {
    if (t.hasMoreAfter) return t;
    let n = f.A.getMessages(e);
    if (0 === n.length) return t;
    let i = n.filter((e) => !t.has(e.id));
    return 0 === i.length
        ? t
        : t.mutate((e) => {
              e._merge(i), e._array.sort((e, t) => N.default.compare(e.id, t.id));
          }, !0);
}
function V() {
    d.A.forEach((e) => {
        d.A.commit(e.mutate({ ready: !1, loadingMore: !1 }));
    }),
        G.clear();
}
async function B(e, t, n) {
    let i = u.A.database(),
        r = R.A.getBasicChannel(e);
    if (null != i && null != r)
        try {
            let n = u.A.messages(i),
                a = await n.get(r.guild_id, e, t.id);
            if (null != a) return;
        } catch {}
    x.log("Push notification message not in cache, adding directly", t.id, t.channel_id);
    let a = d.A.getOrCreate(e);
    d.A.commit(a.receivePushNotification(t, n)), q.emitChange();
}
function H(e) {
    if (e.media_mention?.message_id == null) return;
    let t = e.media_mention.attachment_id,
        n = d.A.getOrCreate(t),
        i = {
            ...e,
            channel_id: t,
            type: w.lAJ.MEDIA_MENTION_MESSAGE,
            id: e.media_mention.message_id,
            message_reference: {
                channel_id: e.channel_id,
                message_id: e.media_mention.message_id,
                type: w.SH7.DEFAULT,
                guild_id: R.A.getChannel(e.channel_id)?.guild_id,
            },
        };
    (n = n.receiveMessage(i, !1).mutate({ ready: !0 })), d.A.commit(n);
}
function j(e) {
    if (null == e) return;
    let t = e.mediaMention?.attachment_id;
    if (null == t) return;
    let n = d.A.get(t);
    if (null == n) return;
    let i = e.mediaMention?.message_id;
    null != i && ((n = n.remove(i)), d.A.commit(n));
}
function W() {
    d.A.forEach((e) => {
        let { channelId: t } = e;
        null == R.A.getChannel(t) && d.A.clear(t);
    });
}
function Y() {
    let e = !1;
    return (
        d.A.forEach((t) => {
            d.A.commit(
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
function K(e) {
    let { type: t, channelId: n, messageId: i, userId: r, emoji: a, reactionType: s } = e,
        l = d.A.get(n);
    if (null == l || !(0, g.vp)(e)) return !1;
    let o = C.default.getId() === r;
    (l = l.update(i, (n) =>
        "MESSAGE_REACTION_ADD" === t ? n.addReaction(a, o, e.colors, s) : n.removeReaction(a, o, s),
    )),
        d.A.commit(l);
}
function $(e) {
    let { type: t, messageData: n } = e,
        { message: i } = n,
        r = (0, c.cR)(n),
        s = i.channelId,
        l = d.A.getOrCreate(s);
    if (!l.has(r)) return !1;
    (l = l.update(
        r,
        (e) => (
            e.embeds?.filter(h).length > 0 && (e = e.set("embeds", [])),
            "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, a.UI)(e.flags, w.pr7.EPHEMERAL))),
            e
        ),
    )),
        d.A.commit(l);
}
class z extends s.Ay.Store {
    static displayName = "MessageStore";
    initialize() {
        this.waitFor(C.default, R.A, O.A, f.A, L.Ay, y.Ay, D.A, I.A, S.default, v.A, b.A, M.Ay, P.A, U.default),
            this.syncWith([I.A], () => {});
    }
    getMessages(e) {
        if (I.A.hasViewingRoles()) {
            let t = R.A.getChannel(e),
                n = t?.getGuildId();
            if (I.A.isViewingRoles(n) && !v.A.can(w.xBc.VIEW_CHANNEL, t)) return new d.A(e);
        }
        return d.A.getOrCreate(e);
    }
    getMessage(e, t) {
        return d.A.getOrCreate(e).get(t);
    }
    getLastEditableMessage(e) {
        let t = U.default.getCurrentUser();
        return r()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => (0, T.A)(e, t?.id));
    }
    getLastChatCommandMessage(e) {
        let t = U.default.getCurrentUser();
        return this.getMessages(e)
            .toArray()
            .reverse()
            .find(
                (e) =>
                    e.interaction?.type === o.G4.APPLICATION_COMMAND &&
                    e.interactionData?.type === o.kc.CHAT &&
                    e.interaction.user.id === t?.id,
            );
    }
    getLastMessage(e) {
        return r()(this.getMessages(e).toArray()).reverse().get(0);
    }
    getLastNonCurrentUserMessage(e) {
        let t = U.default.getCurrentUser();
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
        let t = U.default.getCurrentUser();
        return null != this.getMessages(e).findNewest((e) => e.author.id === t?.id);
    }
    hasCurrentUserSentWaveBlockingMessage(e) {
        let t = U.default.getCurrentUser();
        return (
            null !=
            this.getMessages(e).findNewest((e) => e.type !== w.lAJ.FRIEND_REQUEST_ACCEPTED && e.author.id === t?.id)
        );
    }
    hasCurrentUserSentMessageSinceAppStart() {
        return k;
    }
}
let q = new z(l.h, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: function (e) {
            let { changesByChannelId: t } = e;
            for (let e in t) {
                let n = d.A.get(e);
                null != n &&
                    (n.cached, n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids));
            }
        },
        CONNECTION_OPEN: V,
        OVERLAY_INITIALIZE: V,
        CACHE_LOADED: function (e) {
            for (let [t, n] of N.default.entries(e.messages)) {
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
                    hasMoreBefore: a,
                    hasMoreAfter: s,
                    messages: l,
                    isStale: o,
                    truncate: c,
                    avoidInitialScroll: u,
                } = e,
                _ = d.A.getOrCreate(t);
            for (let e of ((_ = _.loadComplete({
                newMessages: l,
                isBefore: n,
                isAfter: i,
                jump: r,
                hasMoreBefore: a,
                hasMoreAfter: s,
                cached: o,
                hasFetched: !0,
                avoidInitialScroll: u,
            })),
            null != c && (n || i) && (!n || !i) && (_ = _.truncate(n, i)),
            (_ = F(t, _)),
            d.A.commit(_),
            l))
                H(e);
        },
        LOAD_MESSAGES_FAILURE: function (e) {
            let { channelId: t } = e,
                n = d.A.getOrCreate(t);
            d.A.commit(n.mutate({ loadingMore: !1, error: !0 }));
        },
        LOAD_MESSAGES_SUCCESS_CACHED: function (e) {
            let { channelId: t, jump: n, focus: i, before: r, after: a, limit: s, truncate: l } = e,
                o = d.A.getOrCreate(t);
            n?.present
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
                null != l &&
                    (null != r || null != a) &&
                    (null == r || null == a) &&
                    (o = o.truncate(null != r, null != a)),
                (o = F(t, o)),
                d.A.commit(o);
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
            x.log(`Truncating messages for ${t} bottom:${n} top:${i}`);
            let r = d.A.getOrCreate(t);
            (r = r.truncate(n, i)), d.A.commit(r);
        },
        CLEAR_MESSAGES: function (e) {
            let { channelId: t } = e;
            x.log(`Clearing messages for ${t}`), d.A.clear(t), G.clear();
        },
        MESSAGE_CREATE: function (e) {
            let { channelId: t, message: i, optimistic: r, isPushNotification: a } = e,
                s = d.A.getOrCreate(t),
                l = n(617710).A.isConnected();
            return a
                ? (0, m.K)()
                    ? (B(t, i, l), !1)
                    : (x.log("Inserting message tapped on from a push notification", i.id, i.channel_id),
                      void d.A.commit(s.receivePushNotification(i, l)))
                : !(!s.ready || (r && s.has(i.id))) &&
                      void (null != i.nonce &&
                          i.state !== w.cmJ.SENDING &&
                          G.has(i.nonce) &&
                          ((s = s.remove(i.nonce)), G.delete(i.nonce)),
                      (s = s.receiveMessage(i, !0 === O.A.isAtBottom(t))),
                      d.A.commit(s),
                      H(i));
        },
        MESSAGE_SEND_FAILED: function (e) {
            let { channelId: t, messageId: n, reason: i } = e,
                r = d.A.getOrCreate(t);
            if (null == r || !r.has(n)) return !1;
            let s = r.get(n, !0);
            (r =
                s?.isPoll() === !0
                    ? r.remove(n)
                    : r.update(
                          n,
                          (e) => (
                              (e = e.set("state", w.cmJ.SEND_FAILED)).isCommandType()
                                  ? (e = (e = e.set("interactionError", i ?? "")).set(
                                        "flags",
                                        (0, a.UI)(e.flags, w.pr7.EPHEMERAL),
                                    ))
                                  : null != i && (e = e.set("interactionError", i ?? "")),
                              e
                          ),
                      )),
                d.A.commit(r);
        },
        MESSAGE_SEND_FAILED_AUTOMOD: $,
        MESSAGE_EDIT_FAILED_AUTOMOD: $,
        MESSAGE_UPDATE: function (e) {
            let t = e.message.id,
                n = e.message.channel_id,
                i = d.A.getOrCreate(n);
            if (null == i || !i.has(t)) return !1;
            (i = i.update(t, (t) => (0, p.IU)(t, e.message))),
                d.A.commit(i),
                (function (e) {
                    if (e.media_mention?.message_id == null || !("content" in e)) return;
                    let t = e.media_mention.attachment_id,
                        n = d.A.getOrCreate(t);
                    (n = n.update(e.media_mention.message_id, (t) => (0, p.IU)(t, { content: e.content }))),
                        d.A.commit(n);
                })(e.message);
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
            j(i.get(t)), (i = i.remove(t)), d.A.commit(i), G.delete(t);
        },
        MESSAGE_DELETE_BULK: function (e) {
            let { ids: t, channelId: n } = e,
                i = d.A.getOrCreate(n);
            if (null == i) return !1;
            t.forEach((e) => {
                j(i.get(e));
            });
            let a = i.removeMany(t);
            if (i === a) return !1;
            if (null != a.revealedMessageId && r().some(t, (e) => a.revealedMessageId === e)) {
                let e = a.getAfter(a.revealedMessageId);
                a =
                    null != e && e.blocked
                        ? a.mutate({ revealedMessageId: e.id })
                        : a.mutate({ revealedMessageId: null });
            }
            d.A.commit(a),
                t.forEach((e) => {
                    G.delete(e);
                });
        },
        MESSAGE_REVEAL: function (e) {
            let { channelId: t, messageId: n } = e,
                i = d.A.getOrCreate(t);
            d.A.commit(i.mutate({ revealedMessageId: n }));
        },
        THREAD_CREATE_LOCAL: function (e) {
            let { channelId: t } = e,
                n = d.A.getOrCreate(t);
            (n = n.loadComplete({ newMessages: [], hasMoreAfter: !1, hasMoreBefore: !1 })), d.A.commit(n);
        },
        CHANNEL_DELETE: W,
        THREAD_DELETE: W,
        GUILD_DELETE: W,
        RELATIONSHIP_ADD: Y,
        RELATIONSHIP_UPDATE: Y,
        RELATIONSHIP_REMOVE: Y,
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {},
        THREAD_MEMBER_LIST_UPDATE: function (e) {},
        MESSAGE_REACTION_ADD: K,
        MESSAGE_REACTION_ADD_MANY: function (e) {
            let { channelId: t, messageId: n, reactions: i } = e,
                r = d.A.get(t);
            if (null == r) return !1;
            (r = r.update(n, (e) => e.addReactionBatch(i, U.default.getCurrentUser()?.id))), d.A.commit(r);
        },
        MESSAGE_REACTION_REMOVE: K,
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
                G.clear();
        },
        UPLOAD_START: function (e) {
            let { message: t } = e;
            t?.nonce != null && G.add(t.nonce);
        },
        UPLOAD_FAIL: function (e) {
            let { channelId: t, messageId: n } = e;
            if (null == n || !G.has(n)) return !1;
            let i = d.A.getOrCreate(t),
                r = i.get(n);
            if (null == r) return !1;
            (i = (i = i.remove(n)).merge([r])), G.delete(n), d.A.commit(i);
        },
        LOCAL_MESSAGE_CREATE: function (e) {
            let { message: t } = e,
                n = U.default.getCurrentUser();
            null != t && null != t.author && null != n && t.author.id === n.id && (k = !0);
        },
    }),
    Z = q;
