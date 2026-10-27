(n.d(t, { A: () => ee }), n(938796), n(321073), n(142703));
var i = n(435558),
    r = n.n(i),
    a = n(127258),
    s = n(665260),
    l = n(17928),
    o = n(73153),
    d = n(155718),
    c = n(868207),
    u = n(779185),
    _ = n(723176),
    E = n(626584),
    A = n(519460),
    h = n(508602);
function f(e) {
    let { type: t } = e;
    return t !== h.A.AUTO_MODERATION_MESSAGE && t !== h.A.AUTO_MODERATION_NOTIFICATION;
}
var I = n(164956),
    p = n(931480),
    T = n(320095),
    m = n(697470),
    g = (n(763754), n(491001)),
    S = n(815807),
    N = n(773669),
    C = n(935208),
    O = n(280450),
    R = n(734057),
    L = n(72314),
    y = n(808728),
    D = n(696451),
    v = n(71393),
    b = n(576705),
    P = n(994500),
    M = n(309010),
    U = n(967198),
    w = n(287809),
    G = n(652215);
let x = new Set(),
    k = new Map(),
    F = new E.A("MessageStore"),
    B = !1;
function V(e, t) {
    if (t.hasMoreAfter) return t;
    let n = p.A.getMessages(e);
    if (0 === n.length) return t;
    let i = t.hasMoreBefore ? t.first() : null,
        r = n.filter((e) => !t.has(e.id) && (null == i || C.default.compare(e.id, i.id) > 0));
    return 0 === r.length
        ? t
        : t.mutate((e) => {
              (e._merge(r), e._array.sort((e, t) => C.default.compare(e.id, t.id)));
          }, !0);
}
function H() {
    (c.A.forEach((e) => {
        c.A.commit(e.mutate({ ready: !1, loadingMore: !1 }));
    }),
        x.clear(),
        k.clear());
}
async function j(e, t, n) {
    let i = _.A.database(),
        r = R.A.getBasicChannel(e);
    if (null != i && null != r)
        try {
            let n = _.A.messages(i),
                a = await n.get(r.guild_id, e, t.id);
            if (null != a) return;
        } catch {}
    F.log("Push notification message not in cache, adding directly", t.id, t.channel_id);
    let a = c.A.getOrCreate(e);
    (c.A.commit(a.receivePushNotification(t, n)), J.emitChange());
}
function W(e) {
    if (e.media_mention?.message_id == null) return;
    let t = e.media_mention.attachment_id,
        n = c.A.getOrCreate(t),
        i = {
            ...e,
            channel_id: t,
            type: G.lAJ.MEDIA_MENTION_MESSAGE,
            id: e.media_mention.message_id,
            message_reference: {
                channel_id: e.channel_id,
                message_id: e.media_mention.message_id,
                type: G.SH7.DEFAULT,
                guild_id: R.A.getChannel(e.channel_id)?.guild_id,
            },
        };
    ((n = n.receiveMessage(i, !1).mutate({ ready: !0 })), c.A.commit(n));
}
function Y(e) {
    if (null == e) return;
    let t = e.mediaMention?.attachment_id;
    if (null == t) return;
    let n = c.A.get(t);
    if (null == n) return;
    let i = e.mediaMention?.message_id;
    null != i && ((n = n.remove(i)), c.A.commit(n));
}
function K(e) {
    let t = !1;
    return (
        c.A.forEach((n) => {
            if (n.cached) return;
            let i = R.A.getBasicChannel(n.channelId);
            i?.guild_id === e &&
                (b.A.canBasicChannel(G.hVb.VIEW_CHANNEL, i) || (c.A.commit(n.mutate({ cached: !0 })), (t = !0)));
        }),
        t
    );
}
function $(e) {
    return K(e.guildId);
}
function z() {
    c.A.forEach((e) => {
        let { channelId: t } = e;
        null == R.A.getChannel(t) && c.A.clear(t);
    });
}
function X() {
    let e = !1;
    return (
        c.A.forEach((t) => {
            c.A.commit(
                t.reset(
                    t.map(
                        (t) => (
                            t.blocked !== P.A.isBlockedForMessage(t) &&
                                ((e = !0), (t = t.set("blocked", P.A.isBlockedForMessage(t)))),
                            t.ignored !== P.A.isIgnoredForMessage(t) &&
                                ((e = !0), (t = t.set("ignored", P.A.isIgnoredForMessage(t)))),
                            t
                        ),
                    ),
                ),
            );
        }),
        e
    );
}
function q(e) {
    let { type: t, channelId: n, messageId: i, userId: r, emoji: a, reactionType: s } = e,
        l = c.A.get(n);
    if (null == l || !(0, S.vp)(e)) return !1;
    let o = R.A.getBasicChannel(n)?.type === G.rbe.DM,
        d = O.default.getId() === r;
    ((l = l.update(i, (n) =>
        "MESSAGE_REACTION_ADD" === t
            ? n.addReaction(a, d, { colors: e.colors, reactionType: s, isDMChannel: o })
            : n.removeReaction(a, d, s),
    )),
        c.A.commit(l));
}
function Z(e) {
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
            "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, s.UI)(e.flags, G.pr7.EPHEMERAL))),
            e
        ),
    )),
        c.A.commit(l));
}
class Q extends l.Ay.Store {
    static displayName = "MessageStore";
    initialize() {
        (this.waitFor(O.default, R.A, L.A, p.A, y.Ay, D.Ay, v.A, I.A, N.default, b.A, P.A, M.Ay, U.A, w.default),
            this.syncWith([I.A], () => {}));
    }
    getMessages(e) {
        if (I.A.hasViewingRoles()) {
            let t = R.A.getChannel(e),
                n = t?.getGuildId();
            if (I.A.isViewingRoles(n) && !b.A.can(G.xBc.VIEW_CHANNEL, t)) return new c.A(e);
        }
        return c.A.getOrCreate(e);
    }
    getMessage(e, t) {
        return c.A.getOrCreate(e).get(t);
    }
    getAutomodRemovalNotice(e) {
        return k.get(e);
    }
    getLastEditableMessage(e) {
        let t = w.default.getCurrentUser();
        return r()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => (0, m.A)(e, t?.id));
    }
    getLastChatCommandMessage(e) {
        let t = w.default.getCurrentUser();
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
        let t = w.default.getCurrentUser();
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
        let t = w.default.getCurrentUser();
        return null != this.getMessages(e).findNewest((e) => e.author.id === t?.id);
    }
    hasCurrentUserSentWaveBlockingMessage(e) {
        let t = w.default.getCurrentUser();
        return (
            null !=
            this.getMessages(e).findNewest((e) => e.type !== G.lAJ.FRIEND_REQUEST_ACCEPTED && e.author.id === t?.id)
        );
    }
    hasCurrentUserSentMessageSinceAppStart() {
        return B;
    }
}
let J = new Q(o.h, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: function (e) {
            let { changesByChannelId: t } = e;
            for (let e in t) {
                let n = c.A.get(e);
                null != n &&
                    (n.cached, n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids));
            }
        },
        CONNECTION_OPEN: H,
        OVERLAY_INITIALIZE: H,
        CACHE_LOADED: function (e) {
            for (let [t, n] of C.default.entries(e.messages)) {
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
                    jump: r,
                    hasMoreBefore: a,
                    hasMoreAfter: s,
                    messages: l,
                    isStale: o,
                    truncate: d,
                    avoidInitialScroll: u,
                    requestStartTime: _,
                } = e,
                E = c.A.getOrCreate(t);
            for (let e of ((E = E.loadComplete({
                newMessages: l,
                isBefore: n,
                isAfter: i,
                jump: r,
                hasMoreBefore: a,
                hasMoreAfter: s,
                cached: o,
                hasFetched: !0,
                avoidInitialScroll: u,
                requestStartTime: _,
            })),
            null != d && (n || i) && (!n || !i) && (E = E.truncate(n, i)),
            (E = V(t, E)),
            c.A.commit(E),
            l))
                W(e);
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
                null != l &&
                    (null != r || null != a) &&
                    (null == r || null == a) &&
                    (o = o.truncate(null != r, null != a)),
                (o = V(t, o)),
                c.A.commit(o));
        },
        LOCAL_MESSAGES_LOADED: function (e) {
            let t = c.A.getOrCreate(e.channelId);
            if (e.isForegroundCacheLoad || t.cached || !t.ready) {
                let n = t.addCachedMessages(e.messages, e.stale);
                (e.isForegroundCacheLoad &&
                    e.messages.length > 0 &&
                    null == n.jumpTargetId &&
                    (n = n.mutate({
                        initialScrollSequenceId: n.initialScrollSequenceId + 1,
                        suppressRowAnimationSequenceId: n.suppressRowAnimationSequenceId + 1,
                    })),
                    c.A.commit(n));
            }
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
            F.log(`Truncating messages for ${t} bottom:${n} top:${i}`);
            let r = c.A.getOrCreate(t);
            ((r = r.truncate(n, i)), c.A.commit(r));
        },
        CLEAR_MESSAGES: function (e) {
            let { channelId: t } = e;
            (F.log(`Clearing messages for ${t}`), c.A.clear(t), x.clear());
        },
        MESSAGE_CREATE: function (e) {
            let { channelId: t, message: i, optimistic: r, isPushNotification: a } = e,
                s = c.A.getOrCreate(t),
                l = n(403010).A.isConnected();
            return a
                ? (0, g.K)()
                    ? (j(t, i, l), !1)
                    : (F.log("Inserting message tapped on from a push notification", i.id, i.channel_id),
                      void c.A.commit(s.receivePushNotification(i, l)))
                : !(!s.ready || (r && s.has(i.id))) &&
                      void (null != i.nonce &&
                          i.state !== G.cmJ.SENDING &&
                          x.has(i.nonce) &&
                          ((s = s.remove(i.nonce)), x.delete(i.nonce)),
                      (s = s.receiveMessage(i, !0 === L.A.isAtBottom(t))),
                      c.A.commit(s),
                      W(i));
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
                              (e = e.set("state", G.cmJ.SEND_FAILED)).isCommandType()
                                  ? (e = (e = e.set("interactionError", i ?? "")).set(
                                        "flags",
                                        (0, s.UI)(e.flags, G.pr7.EPHEMERAL),
                                    ))
                                  : null != i && (e = e.set("interactionError", i ?? "")),
                              e
                          ),
                      )),
                c.A.commit(r));
        },
        MESSAGE_SEND_FAILED_AUTOMOD: Z,
        AUTO_MODERATION_CONTENT_DELETED: function (e) {
            let { message: t, thread: n, notice: i } = e;
            if (null == t || null != n) return !1;
            let r = t.channel_id,
                a = c.A.getOrCreate(r);
            if (!a.ready || (!a.has(t.id) && !(a = a.receiveMessage(t, !0 === L.A.isAtBottom(r))).has(t.id))) return !1;
            ((a = a.update(t.id, (e) => e.set("flags", (0, s.UI)(e.flags, G.pr7.EPHEMERAL)))),
                c.A.commit(a),
                k.set(t.id, i));
        },
        MESSAGE_EDIT_FAILED_AUTOMOD: Z,
        MESSAGE_UPDATE: function (e) {
            let t = e.message.id,
                n = e.message.channel_id,
                i = c.A.getOrCreate(n);
            if (null == i || !i.has(t)) return !1;
            ((i = i.update(t, (t) => (0, T.IU)(t, e.message))),
                c.A.commit(i),
                (function (e) {
                    if (e.media_mention?.message_id == null || !("content" in e)) return;
                    let t = e.media_mention.attachment_id,
                        n = c.A.getOrCreate(t);
                    ((n = n.update(e.media_mention.message_id, (t) => (0, T.IU)(t, { content: e.content }))),
                        c.A.commit(n));
                })(e.message));
        },
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
            let { messageId: t, channelId: n } = e,
                i = c.A.get(n);
            if (null == i || !i.has(t)) return !1;
            ((i = i.update(t, A.T)), c.A.commit(i));
        },
        MESSAGE_DELETE: function (e) {
            let { id: t, channelId: n, local: i } = e,
                r = c.A.getOrCreate(n);
            if (null == r || !r.has(t)) return !1;
            if (k.has(t)) {
                if (!0 !== i) return !1;
                k.delete(t);
            }
            if (r.revealedMessageId === t) {
                let e = r.getAfter(t);
                r =
                    null != e && e.blocked
                        ? r.mutate({ revealedMessageId: e.id })
                        : r.mutate({ revealedMessageId: null });
            }
            (Y(r.get(t)), (r = r.remove(t)), c.A.commit(r), x.delete(t));
        },
        MESSAGE_DELETE_BULK: function (e) {
            let { ids: t, channelId: n } = e,
                i = c.A.getOrCreate(n);
            if (null == i) return !1;
            t.forEach((e) => {
                Y(i.get(e));
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
            (c.A.commit(a),
                t.forEach((e) => {
                    x.delete(e);
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
            for (let e of t) K(e) && (n = !0);
            return n;
        },
        GUILD_ROLE_UPDATE: $,
        GUILD_ROLE_DELETE: $,
        GUILD_MEMBER_UPDATE: function (e) {
            return e.user.id === w.default.getCurrentUser()?.id && K(e.guildId);
        },
        CHANNEL_DELETE: z,
        THREAD_DELETE: z,
        GUILD_DELETE: z,
        RELATIONSHIP_ADD: X,
        RELATIONSHIP_UPDATE: X,
        RELATIONSHIP_REMOVE: X,
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {},
        THREAD_MEMBER_LIST_UPDATE: function (e) {},
        MESSAGE_REACTION_ADD: q,
        MESSAGE_REACTION_ADD_MANY: function (e) {
            let { channelId: t, messageId: n, reactions: i } = e,
                r = c.A.get(t);
            if (null == r) return !1;
            ((r = r.update(n, (e) => e.addReactionBatch(i, w.default.getCurrentUser()?.id))), c.A.commit(r));
        },
        MESSAGE_REACTION_REMOVE: q,
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
                x.clear());
        },
        UPLOAD_START: function (e) {
            let { message: t } = e;
            t?.nonce != null && x.add(t.nonce);
        },
        UPLOAD_FAIL: function (e) {
            let { channelId: t, messageId: n } = e;
            if (null == n || !x.has(n)) return !1;
            let i = c.A.getOrCreate(t),
                r = i.get(n);
            if (null == r) return !1;
            ((i = (i = i.remove(n)).merge([r])), x.delete(n), c.A.commit(i));
        },
        LOCAL_MESSAGE_CREATE: function (e) {
            let { message: t } = e,
                n = w.default.getCurrentUser();
            null != t && null != t.author && null != n && t.author.id === n.id && (B = !0);
        },
    }),
    ee = J;
