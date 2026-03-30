"use strict";
n.d(t, { A: () => ep }), n(938796), n(321073), n(142703);
var r = n(735438),
    i = n.n(r),
    s = n(665260),
    a = n(311907),
    o = n(73153),
    l = n(155718),
    u = n(128265),
    c = n(884384),
    d = n(626584),
    _ = n(390248),
    f = n(459403),
    p = n(164956),
    h = n(141468),
    m = n(697470),
    E = (n(763754), n(815807)),
    g = n(773669),
    A = n(661191),
    I = n(961350),
    T = n(734057),
    S = n(72314),
    y = n(808728),
    v = n(696451),
    N = n(71393),
    C = n(576705),
    R = n(994500),
    O = n(309010),
    b = n(967198),
    D = n(287809),
    L = n(652215);
let w = new Set(),
    M = new d.A("MessageStore"),
    P = !1;
function x() {
    u.A.forEach((e) => {
        u.A.commit(e.mutate({ ready: !1, loadingMore: !1 }));
    }),
        w.clear();
}
function k(e) {
    let { changesByChannelId: t } = e;
    for (let e in t) {
        let n = u.A.get(e);
        if (null == n) continue;
        let r = !1;
        if (!(n.cached || !r)) {
            M.log(
                `Skipping background message sync for ${e} cached:${n.cached} ready:${n.ready} hasMoreAfter:${n.hasMoreAfter} isConnected:${r}`,
            );
            continue;
        }
        n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids);
    }
}
function U() {
    return !0;
}
function G(e) {
    let { channelId: t, truncateBottom: n, truncateTop: r } = e;
    M.log(`Truncating messages for ${t} bottom:${n} top:${r}`);
    let i = u.A.getOrCreate(t);
    (i = i.truncate(n, r)), u.A.commit(i);
}
function F(e) {
    let { channelId: t } = e;
    M.log(`Clearing messages for ${t}`), u.A.clear(t), w.clear();
}
function V(e) {
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
function B(e) {
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
function H(e) {
    let { channelId: t } = e,
        n = u.A.getOrCreate(t);
    u.A.commit(n.mutate({ loadingMore: !1, error: !0 }));
}
function j(e) {
    let { message: t } = e;
    t?.nonce != null && w.add(t.nonce);
}
function Y(e) {
    let { channelId: t, messageId: n } = e;
    if (null == n || !w.has(n)) return !1;
    let r = u.A.getOrCreate(t),
        i = r.get(n);
    if (null == i) return !1;
    (r = (r = r.remove(n)).merge([i])), w.delete(n), u.A.commit(r);
}
function W(e) {
    let { channelId: t, message: r, isPushNotification: i } = e,
        s = u.A.getOrCreate(t),
        a = n(142120).A.isConnected();
    if (i) {
        M.log("Inserting message tapped on from a push notification", r.id, r.channel_id),
            u.A.commit(s.receivePushNotification(r, a));
        return;
    }
    if (!s.ready) return !1;
    null != r.nonce && r.state !== L.cmJ.SENDING && w.has(r.nonce) && ((s = s.remove(r.nonce)), w.delete(r.nonce)),
        (s = s.receiveMessage(r, !0 === S.A.isAtBottom(t))),
        u.A.commit(s);
}
function K(e) {
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
                      (e = e.set("state", L.cmJ.SEND_FAILED)).isCommandType()
                          ? (e = (e = e.set("interactionError", r ?? "")).set(
                                "flags",
                                (0, s.UI)(e.flags, L.pr7.EPHEMERAL),
                            ))
                          : null != r && (e = e.set("interactionError", r ?? "")),
                      e
                  ),
              )),
        u.A.commit(i);
}
function $(e) {
    let { id: t, channelId: n } = e,
        r = u.A.getOrCreate(n);
    if (null == r || !r.has(t)) return !1;
    if (r.revealedMessageId === t) {
        let e = r.getAfter(t);
        r = null != e && e.blocked ? r.mutate({ revealedMessageId: e.id }) : r.mutate({ revealedMessageId: null });
    }
    (r = r.remove(t)), u.A.commit(r), w.delete(t);
}
function z(e) {
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
            w.delete(e);
        });
}
function q(e) {
    let t = e.message.id,
        n = e.message.channel_id,
        r = u.A.getOrCreate(n);
    if (null == r || !r.has(t)) return !1;
    (r = r.update(t, (t) => (0, h.IU)(t, e.message))), u.A.commit(r);
}
function Z(e) {
    let { messageId: t, channelId: n } = e,
        r = u.A.get(n);
    if (null == r || !r.has(t)) return !1;
    (r = r.update(t, _.Td)), u.A.commit(r);
}
function X(e) {
    let t = e.messageId,
        n = e.channelId,
        r = u.A.get(n);
    if (null == r || !r.has(t)) return !1;
    (r = r.update(t, (t) => t.set("interactionData", e.interactionData))), u.A.commit(r);
}
function Q(e) {
    let { channelId: t } = e,
        n = u.A.getOrCreate(t);
    (n = n.loadComplete({ newMessages: [], hasMoreAfter: !1, hasMoreBefore: !1 })), u.A.commit(n);
}
function J() {
    u.A.forEach((e) => {
        let { channelId: t } = e;
        null == T.A.getChannel(t) && u.A.clear(t);
    });
}
function ee() {
    let e = !1;
    return (
        u.A.forEach((t) => {
            u.A.commit(
                t.reset(
                    t.map(
                        (t) => (
                            t.blocked !== R.A.isBlockedForMessage(t) &&
                                ((e = !0), (t = t.set("blocked", R.A.isBlockedForMessage(t)))),
                            t.ignored !== R.A.isIgnoredForMessage(t) &&
                                ((e = !0), (t = t.set("ignored", R.A.isIgnoredForMessage(t)))),
                            t
                        ),
                    ),
                ),
            );
        }),
        e
    );
}
function et(e) {
    let { channelId: t, messageId: n } = e,
        r = u.A.getOrCreate(t);
    u.A.commit(r.mutate({ revealedMessageId: n }));
}
function en(e) {}
function er(e) {}
function ei(e) {
    let { type: t, channelId: n, messageId: r, userId: i, emoji: s, reactionType: a } = e,
        o = u.A.get(n);
    if (null == o || !(0, E.vp)(e)) return !1;
    let l = I.default.getId() === i;
    (o = o.update(r, (n) =>
        "MESSAGE_REACTION_ADD" === t ? n.addReaction(s, l, e.colors, a) : n.removeReaction(s, l, a),
    )),
        u.A.commit(o);
}
function es(e) {
    let { channelId: t, messageId: n, reactions: r } = e,
        i = u.A.get(t);
    if (null == i) return !1;
    (i = i.update(n, (e) => e.addReactionBatch(r, D.default.getCurrentUser()?.id))), u.A.commit(i);
}
function ea(e) {
    let { type: t, messageData: n } = e,
        { message: r } = n,
        i = (0, c.cR)(n),
        a = r.channelId,
        o = u.A.getOrCreate(a);
    if (!o.has(i)) return !1;
    (o = o.update(
        i,
        (e) => (
            e.embeds?.filter(f._).length > 0 && (e = e.set("embeds", [])),
            "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, s.UI)(e.flags, L.pr7.EPHEMERAL))),
            e
        ),
    )),
        u.A.commit(o);
}
function eo(e) {
    let { channelId: t, messageId: n } = e,
        r = u.A.get(t);
    if (null == r) return !1;
    (r = r.update(n, (e) => e.set("reactions", []))), u.A.commit(r);
}
function el(e) {
    let { channelId: t, messageId: n, emoji: r } = e,
        i = u.A.get(t);
    if (null == i) return !1;
    (i = i.update(n, (e) => e.removeReactionsForEmoji(r))), u.A.commit(i);
}
function eu() {
    u.A.forEach((e) => {
        u.A.clear(e.channelId);
    }),
        w.clear();
}
function ec(e) {
    for (let [t, n] of A.default.entries(e.messages)) {
        let e = u.A.getOrCreate(t).addCachedMessages(n, !0);
        u.A.commit(e);
    }
}
function ed(e) {
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
function e_(e) {
    let { message: t } = e,
        n = D.default.getCurrentUser();
    null != t && null != t.author && null != n && t.author.id === n.id && (P = !0);
}
class ef extends a.Ay.Store {
    static displayName = "MessageStore";
    initialize() {
        this.waitFor(I.default, T.A, S.A, y.Ay, v.Ay, N.A, p.A, g.default, C.A, R.A, O.A, b.A, D.default),
            this.syncWith([p.A], () => {});
    }
    getMessages(e) {
        if (p.A.hasViewingRoles()) {
            let t = T.A.getChannel(e),
                n = t?.getGuildId();
            if (p.A.isViewingRoles(n) && !C.A.can(L.xBc.VIEW_CHANNEL, t)) return new u.A(e);
        }
        return u.A.getOrCreate(e);
    }
    getMessage(e, t) {
        return u.A.getOrCreate(e).get(t);
    }
    getLastEditableMessage(e) {
        let t = D.default.getCurrentUser();
        return i()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => (0, m.A)(e, t?.id));
    }
    getLastChatCommandMessage(e) {
        let t = D.default.getCurrentUser();
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
        let t = D.default.getCurrentUser();
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
        let t = D.default.getCurrentUser();
        return null != this.getMessages(e).findNewest((e) => e.author.id === t?.id);
    }
    hasCurrentUserSentWaveBlockingMessage(e) {
        let t = D.default.getCurrentUser();
        return (
            null !=
            this.getMessages(e).findNewest((e) => e.type !== L.lAJ.FRIEND_REQUEST_ACCEPTED && e.author.id === t?.id)
        );
    }
    hasCurrentUserSentMessageSinceAppStart() {
        return P;
    }
}
let ep = new ef(o.h, {
    BACKGROUND_SYNC_CHANNEL_MESSAGES: k,
    CONNECTION_OPEN: x,
    OVERLAY_INITIALIZE: x,
    CACHE_LOADED: ec,
    LOAD_MESSAGES: U,
    LOAD_MESSAGES_SUCCESS: B,
    LOAD_MESSAGES_FAILURE: H,
    LOAD_MESSAGES_SUCCESS_CACHED: V,
    LOCAL_MESSAGES_LOADED: ed,
    LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: X,
    TRUNCATE_MESSAGES: G,
    CLEAR_MESSAGES: F,
    MESSAGE_CREATE: W,
    MESSAGE_SEND_FAILED: K,
    MESSAGE_SEND_FAILED_AUTOMOD: ea,
    MESSAGE_EDIT_FAILED_AUTOMOD: ea,
    MESSAGE_UPDATE: q,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: Z,
    MESSAGE_DELETE: $,
    MESSAGE_DELETE_BULK: z,
    MESSAGE_REVEAL: et,
    THREAD_CREATE_LOCAL: Q,
    CHANNEL_DELETE: J,
    THREAD_DELETE: J,
    GUILD_DELETE: J,
    RELATIONSHIP_ADD: ee,
    RELATIONSHIP_UPDATE: ee,
    RELATIONSHIP_REMOVE: ee,
    GUILD_MEMBERS_CHUNK_BATCH: en,
    THREAD_MEMBER_LIST_UPDATE: er,
    MESSAGE_REACTION_ADD: ei,
    MESSAGE_REACTION_ADD_MANY: es,
    MESSAGE_REACTION_REMOVE: ei,
    MESSAGE_REACTION_REMOVE_ALL: eo,
    MESSAGE_REACTION_REMOVE_EMOJI: el,
    LOGOUT: eu,
    UPLOAD_START: j,
    UPLOAD_FAIL: Y,
    LOCAL_MESSAGE_CREATE: e_,
});
