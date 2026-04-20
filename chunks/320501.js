"use strict";
n.d(t, { A: () => eA }), n(938796), n(321073), n(142703);
var r = n(735438),
    i = n.n(r),
    s = n(665260),
    a = n(311907),
    o = n(73153),
    l = n(155718),
    u = n(128265),
    c = n(884384),
    d = n(723176),
    _ = n(626584),
    f = n(390248),
    p = n(459403),
    h = n(164956),
    m = n(141468),
    E = n(697470),
    g = (n(763754), n(491001)),
    A = n(815807),
    I = n(773669),
    T = n(661191),
    S = n(961350),
    y = n(734057),
    v = n(72314),
    N = n(808728),
    C = n(696451),
    R = n(71393),
    O = n(576705),
    b = n(994500),
    D = n(309010),
    L = n(967198),
    w = n(287809),
    M = n(652215);
let P = new Set(),
    x = new _.A("MessageStore"),
    k = !1;
function U() {
    u.A.forEach((e) => {
        u.A.commit(e.mutate({ ready: !1, loadingMore: !1 }));
    }),
        P.clear();
}
function G(e) {
    let { changesByChannelId: t } = e;
    for (let e in t) {
        let n = u.A.get(e);
        if (null == n) continue;
        let r = !1;
        if (!(n.cached || !r)) {
            x.log(
                `Skipping background message sync for ${e} cached:${n.cached} ready:${n.ready} hasMoreAfter:${n.hasMoreAfter} isConnected:${r}`,
            );
            continue;
        }
        n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids);
    }
}
function F() {
    return !0;
}
function V(e) {
    let { channelId: t, truncateBottom: n, truncateTop: r } = e;
    x.log(`Truncating messages for ${t} bottom:${n} top:${r}`);
    let i = u.A.getOrCreate(t);
    (i = i.truncate(n, r)), u.A.commit(i);
}
function B(e) {
    let { channelId: t } = e;
    x.log(`Clearing messages for ${t}`), u.A.clear(t), P.clear();
}
function H(e) {
    let { channelId: t, jump: n, focus: r, before: i, after: s, limit: a, truncate: o } = e,
        l = u.A.getOrCreate(t);
    n?.present
        ? (l = l.jumpToPresent(a))
        : r?.messageId != null
          ? (l = l.focusOnMessage(r.messageId))
          : n?.messageId != null
            ? (l = l.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType))
            : (null != i || null != s) && (l = l.loadFromCache(null != i, a)),
        null != o && (null != i || null != s) && (null == i || null == s) && (l = l.truncate(null != i, null != s)),
        u.A.commit(l);
}
function j(e) {
    let {
            channelId: t,
            isBefore: n,
            isAfter: r,
            jump: i,
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
        isAfter: r,
        jump: i,
        hasMoreBefore: s,
        hasMoreAfter: a,
        cached: l,
        hasFetched: !0,
        avoidInitialScroll: d,
    })),
        null != c && (n || r) && (!n || !r) && (_ = _.truncate(n, r)),
        u.A.commit(_);
}
function Y(e) {
    let { channelId: t } = e,
        n = u.A.getOrCreate(t);
    u.A.commit(n.mutate({ loadingMore: !1, error: !0 }));
}
function W(e) {
    let { message: t } = e;
    t?.nonce != null && P.add(t.nonce);
}
function K(e) {
    let { channelId: t, messageId: n } = e;
    if (null == n || !P.has(n)) return !1;
    let r = u.A.getOrCreate(t),
        i = r.get(n);
    if (null == i) return !1;
    (r = (r = r.remove(n)).merge([i])), P.delete(n), u.A.commit(r);
}
async function $(e, t, n) {
    let r = d.A.database(),
        i = y.A.getBasicChannel(e);
    if (null != r && null != i)
        try {
            let n = d.A.messages(r),
                s = await n.get(i.guild_id, e, t.id);
            if (null != s) return;
        } catch {}
    x.log("Push notification message not in cache, adding directly", t.id, t.channel_id);
    let s = u.A.getOrCreate(e);
    u.A.commit(s.receivePushNotification(t, n)), eg.emitChange();
}
function z(e) {
    let { channelId: t, message: r, isPushNotification: i } = e,
        s = u.A.getOrCreate(t),
        a = n(142120).A.isConnected();
    return i
        ? (0, g.K)()
            ? ($(t, r, a), !1)
            : (x.log("Inserting message tapped on from a push notification", r.id, r.channel_id),
              void u.A.commit(s.receivePushNotification(r, a)))
        : !!s.ready &&
              void (null != r.nonce &&
                  r.state !== M.cmJ.SENDING &&
                  P.has(r.nonce) &&
                  ((s = s.remove(r.nonce)), P.delete(r.nonce)),
              (s = s.receiveMessage(r, !0 === v.A.isAtBottom(t))),
              u.A.commit(s));
}
function q(e) {
    let { channelId: t, messageId: n, reason: r } = e,
        i = u.A.getOrCreate(t);
    if (null == i || !i.has(n)) return !1;
    let a = i.get(n, !0);
    (i =
        a?.isPoll() === !0
            ? i.remove(n)
            : i.update(
                  n,
                  (e) => (
                      (e = e.set("state", M.cmJ.SEND_FAILED)).isCommandType()
                          ? (e = (e = e.set("interactionError", r ?? "")).set(
                                "flags",
                                (0, s.UI)(e.flags, M.pr7.EPHEMERAL),
                            ))
                          : null != r && (e = e.set("interactionError", r ?? "")),
                      e
                  ),
              )),
        u.A.commit(i);
}
function Z(e) {
    let { id: t, channelId: n } = e,
        r = u.A.getOrCreate(n);
    if (null == r || !r.has(t)) return !1;
    if (r.revealedMessageId === t) {
        let e = r.getAfter(t);
        r = null != e && e.blocked ? r.mutate({ revealedMessageId: e.id }) : r.mutate({ revealedMessageId: null });
    }
    (r = r.remove(t)), u.A.commit(r), P.delete(t);
}
function X(e) {
    let { ids: t, channelId: n } = e,
        r = u.A.getOrCreate(n);
    if (null == r) return !1;
    let s = r.removeMany(t);
    if (r === s) return !1;
    if (null != s.revealedMessageId && i().some(t, (e) => s.revealedMessageId === e)) {
        let e = s.getAfter(s.revealedMessageId);
        s = null != e && e.blocked ? s.mutate({ revealedMessageId: e.id }) : s.mutate({ revealedMessageId: null });
    }
    u.A.commit(s),
        t.forEach((e) => {
            P.delete(e);
        });
}
function Q(e) {
    let t = e.message.id,
        n = e.message.channel_id,
        r = u.A.getOrCreate(n);
    if (null == r || !r.has(t)) return !1;
    (r = r.update(t, (t) => (0, m.IU)(t, e.message))), u.A.commit(r);
}
function J(e) {
    let { messageId: t, channelId: n } = e,
        r = u.A.get(n);
    if (null == r || !r.has(t)) return !1;
    (r = r.update(t, f.Td)), u.A.commit(r);
}
function ee(e) {
    let t = e.messageId,
        n = e.channelId,
        r = u.A.get(n);
    if (null == r || !r.has(t)) return !1;
    (r = r.update(t, (t) => t.set("interactionData", e.interactionData))), u.A.commit(r);
}
function et(e) {
    let { channelId: t } = e,
        n = u.A.getOrCreate(t);
    (n = n.loadComplete({ newMessages: [], hasMoreAfter: !1, hasMoreBefore: !1 })), u.A.commit(n);
}
function en(e) {
    let { channel: t } = e;
    if (null == t.parent_id) return !1;
    let n = u.A.get(t.parent_id);
    if (null == n) return !1;
    let r = T.default.castChannelIdAsMessageId(t.id),
        i = n.get(r, !0);
    if (null == i || i.hasFlag(M.pr7.HAS_THREAD)) return !1;
    u.A.commit(n.update(r, (e) => e.set("flags", (0, s.UI)(e.flags, M.pr7.HAS_THREAD))));
}
function er() {
    u.A.forEach((e) => {
        let { channelId: t } = e;
        null == y.A.getChannel(t) && u.A.clear(t);
    });
}
function ei() {
    let e = !1;
    return (
        u.A.forEach((t) => {
            u.A.commit(
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
function es(e) {
    let { channelId: t, messageId: n } = e,
        r = u.A.getOrCreate(t);
    u.A.commit(r.mutate({ revealedMessageId: n }));
}
function ea(e) {}
function eo(e) {}
function el(e) {
    let { type: t, channelId: n, messageId: r, userId: i, emoji: s, reactionType: a } = e,
        o = u.A.get(n);
    if (null == o || !(0, A.vp)(e)) return !1;
    let l = S.default.getId() === i;
    (o = o.update(r, (n) =>
        "MESSAGE_REACTION_ADD" === t ? n.addReaction(s, l, e.colors, a) : n.removeReaction(s, l, a),
    )),
        u.A.commit(o);
}
function eu(e) {
    let { channelId: t, messageId: n, reactions: r } = e,
        i = u.A.get(t);
    if (null == i) return !1;
    (i = i.update(n, (e) => e.addReactionBatch(r, w.default.getCurrentUser()?.id))), u.A.commit(i);
}
function ec(e) {
    let { type: t, messageData: n } = e,
        { message: r } = n,
        i = (0, c.cR)(n),
        a = r.channelId,
        o = u.A.getOrCreate(a);
    if (!o.has(i)) return !1;
    (o = o.update(
        i,
        (e) => (
            e.embeds?.filter(p._).length > 0 && (e = e.set("embeds", [])),
            "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, s.UI)(e.flags, M.pr7.EPHEMERAL))),
            e
        ),
    )),
        u.A.commit(o);
}
function ed(e) {
    let { channelId: t, messageId: n } = e,
        r = u.A.get(t);
    if (null == r) return !1;
    (r = r.update(n, (e) => e.set("reactions", []))), u.A.commit(r);
}
function e_(e) {
    let { channelId: t, messageId: n, emoji: r } = e,
        i = u.A.get(t);
    if (null == i) return !1;
    (i = i.update(n, (e) => e.removeReactionsForEmoji(r))), u.A.commit(i);
}
function ef() {
    u.A.forEach((e) => {
        u.A.clear(e.channelId);
    }),
        P.clear();
}
function ep(e) {
    for (let [t, n] of T.default.entries(e.messages)) {
        let e = u.A.getOrCreate(t).addCachedMessages(n, !0);
        u.A.commit(e);
    }
}
function eh(e) {
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
}
function em(e) {
    let { message: t } = e,
        n = w.default.getCurrentUser();
    null != t && null != t.author && null != n && t.author.id === n.id && (k = !0);
}
class eE extends a.Ay.Store {
    static displayName = "MessageStore";
    initialize() {
        this.waitFor(S.default, y.A, v.A, N.Ay, C.Ay, R.A, h.A, I.default, O.A, b.A, D.A, L.A, w.default),
            this.syncWith([h.A], () => {});
    }
    getMessages(e) {
        if (h.A.hasViewingRoles()) {
            let t = y.A.getChannel(e),
                n = t?.getGuildId();
            if (h.A.isViewingRoles(n) && !O.A.can(M.xBc.VIEW_CHANNEL, t)) return new u.A(e);
        }
        return u.A.getOrCreate(e);
    }
    getMessage(e, t) {
        return u.A.getOrCreate(e).get(t);
    }
    getLastEditableMessage(e) {
        let t = w.default.getCurrentUser();
        return i()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => (0, E.A)(e, t?.id));
    }
    getLastChatCommandMessage(e) {
        let t = w.default.getCurrentUser();
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
        return i()(this.getMessages(e).toArray()).reverse().get(0);
    }
    getLastNonCurrentUserMessage(e) {
        let t = w.default.getCurrentUser();
        return i()(this.getMessages(e).toArray())
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
        let t = w.default.getCurrentUser();
        return null != this.getMessages(e).findNewest((e) => e.author.id === t?.id);
    }
    hasCurrentUserSentWaveBlockingMessage(e) {
        let t = w.default.getCurrentUser();
        return (
            null !=
            this.getMessages(e).findNewest((e) => e.type !== M.lAJ.FRIEND_REQUEST_ACCEPTED && e.author.id === t?.id)
        );
    }
    hasCurrentUserSentMessageSinceAppStart() {
        return k;
    }
}
let eg = new eE(o.h, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: G,
        CONNECTION_OPEN: U,
        OVERLAY_INITIALIZE: U,
        CACHE_LOADED: ep,
        LOAD_MESSAGES: F,
        LOAD_MESSAGES_SUCCESS: j,
        LOAD_MESSAGES_FAILURE: Y,
        LOAD_MESSAGES_SUCCESS_CACHED: H,
        LOCAL_MESSAGES_LOADED: eh,
        LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: ee,
        TRUNCATE_MESSAGES: V,
        CLEAR_MESSAGES: B,
        MESSAGE_CREATE: z,
        MESSAGE_SEND_FAILED: q,
        MESSAGE_SEND_FAILED_AUTOMOD: ec,
        MESSAGE_EDIT_FAILED_AUTOMOD: ec,
        MESSAGE_UPDATE: Q,
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: J,
        MESSAGE_DELETE: Z,
        MESSAGE_DELETE_BULK: X,
        MESSAGE_REVEAL: es,
        THREAD_CREATE: en,
        THREAD_CREATE_LOCAL: et,
        CHANNEL_DELETE: er,
        THREAD_DELETE: er,
        GUILD_DELETE: er,
        RELATIONSHIP_ADD: ei,
        RELATIONSHIP_UPDATE: ei,
        RELATIONSHIP_REMOVE: ei,
        GUILD_MEMBERS_CHUNK_BATCH: ea,
        THREAD_MEMBER_LIST_UPDATE: eo,
        MESSAGE_REACTION_ADD: el,
        MESSAGE_REACTION_ADD_MANY: eu,
        MESSAGE_REACTION_REMOVE: el,
        MESSAGE_REACTION_REMOVE_ALL: ed,
        MESSAGE_REACTION_REMOVE_EMOJI: e_,
        LOGOUT: ef,
        UPLOAD_START: W,
        UPLOAD_FAIL: K,
        LOCAL_MESSAGE_CREATE: em,
    }),
    eA = eg;
