"use strict";
n.d(t, { A: () => ep }), n(938796), n(321073), n(142703);
var r = n(735438),
    i = n.n(r),
    a = n(665260),
    s = n(311907),
    o = n(73153),
    l = n(155718),
    u = n(128265),
    c = n(884384),
    d = n(626584),
    _ = n(390248),
    f = n(459403),
    h = n(164956),
    p = n(141468),
    g = n(697470),
    E = (n(763754), n(815807)),
    A = n(773669),
    I = n(661191),
    T = n(961350),
    y = n(734057),
    S = n(72314),
    v = n(808728),
    C = n(696451),
    b = n(71393),
    N = n(576705),
    R = n(994500),
    O = n(309010),
    D = n(967198),
    L = n(287809),
    w = n(652215);
let x = new Set(),
    P = new d.A("MessageStore"),
    M = !1;
function k() {
    u.A.forEach((e) => {
        u.A.commit(e.mutate({ ready: !1, loadingMore: !1 }));
    }),
        x.clear();
}
function U(e) {
    let { changesByChannelId: t } = e;
    for (let e in t) {
        let n = u.A.get(e);
        if (null == n) continue;
        let r = !1;
        if (!(n.cached || !r)) {
            P.log(
                `Skipping background message sync for ${e} cached:${n.cached} ready:${n.ready} hasMoreAfter:${n.hasMoreAfter} isConnected:${r}`,
            );
            continue;
        }
        n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids);
    }
}
function G() {
    return !0;
}
function F(e) {
    let { channelId: t, truncateBottom: n, truncateTop: r } = e;
    P.log(`Truncating messages for ${t} bottom:${n} top:${r}`);
    let i = u.A.getOrCreate(t);
    (i = i.truncate(n, r)), u.A.commit(i);
}
function V(e) {
    let { channelId: t } = e;
    P.log(`Clearing messages for ${t}`), u.A.clear(t), x.clear();
}
function B(e) {
    let { channelId: t, jump: n, focus: r, before: i, after: a, limit: s, truncate: o } = e,
        l = u.A.getOrCreate(t);
    n?.present
        ? (l = l.jumpToPresent(s))
        : r?.messageId != null
          ? (l = l.focusOnMessage(r.messageId))
          : n?.messageId != null
            ? (l = l.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType))
            : (null != i || null != a) && (l = l.loadFromCache(null != i, s)),
        null != o && (null != i || null != a) && (null == i || null == a) && (l = l.truncate(null != i, null != a)),
        u.A.commit(l);
}
function j(e) {
    let {
            channelId: t,
            isBefore: n,
            isAfter: r,
            jump: i,
            hasMoreBefore: a,
            hasMoreAfter: s,
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
        hasMoreBefore: a,
        hasMoreAfter: s,
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
function Y(e) {
    let { message: t } = e;
    t?.nonce != null && x.add(t.nonce);
}
function W(e) {
    let { channelId: t, messageId: n } = e;
    if (null == n || !x.has(n)) return !1;
    let r = u.A.getOrCreate(t),
        i = r.get(n);
    if (null == i) return !1;
    (r = (r = r.remove(n)).merge([i])), x.delete(n), u.A.commit(r);
}
function K(e) {
    let { channelId: t, message: r, isPushNotification: i } = e,
        a = u.A.getOrCreate(t),
        s = n(142120).A.isConnected();
    if (i) {
        P.log("Inserting message tapped on from a push notification", r.id, r.channel_id),
            u.A.commit(a.receivePushNotification(r, s));
        return;
    }
    if (!a.ready) return !1;
    null != r.nonce && r.state !== w.cmJ.SENDING && x.has(r.nonce) && ((a = a.remove(r.nonce)), x.delete(r.nonce)),
        (a = a.receiveMessage(r, !0 === S.A.isAtBottom(t))),
        u.A.commit(a);
}
function $(e) {
    let { channelId: t, messageId: n, reason: r } = e,
        i = u.A.getOrCreate(t);
    if (null == i || !i.has(n)) return !1;
    let s = i.get(n, !0);
    (i =
        s?.isPoll() === !0
            ? i.remove(n)
            : i.update(
                  n,
                  (e) => (
                      (e = e.set("state", w.cmJ.SEND_FAILED)).isCommandType()
                          ? (e = (e = e.set("interactionError", r ?? "")).set(
                                "flags",
                                (0, a.UI)(e.flags, w.pr7.EPHEMERAL),
                            ))
                          : null != r && (e = e.set("interactionError", r ?? "")),
                      e
                  ),
              )),
        u.A.commit(i);
}
function z(e) {
    let { id: t, channelId: n } = e,
        r = u.A.getOrCreate(n);
    if (null == r || !r.has(t)) return !1;
    if (r.revealedMessageId === t) {
        let e = r.getAfter(t);
        r = null != e && e.blocked ? r.mutate({ revealedMessageId: e.id }) : r.mutate({ revealedMessageId: null });
    }
    (r = r.remove(t)), u.A.commit(r), x.delete(t);
}
function q(e) {
    let { ids: t, channelId: n } = e,
        r = u.A.getOrCreate(n);
    if (null == r) return !1;
    let a = r.removeMany(t);
    if (r === a) return !1;
    if (null != a.revealedMessageId && i().some(t, (e) => a.revealedMessageId === e)) {
        let e = a.getAfter(a.revealedMessageId);
        a = null != e && e.blocked ? a.mutate({ revealedMessageId: e.id }) : a.mutate({ revealedMessageId: null });
    }
    u.A.commit(a),
        t.forEach((e) => {
            x.delete(e);
        });
}
function X(e) {
    let t = e.message.id,
        n = e.message.channel_id,
        r = u.A.getOrCreate(n);
    if (null == r || !r.has(t)) return !1;
    (r = r.update(t, (t) => (0, p.IU)(t, e.message))), u.A.commit(r);
}
function Z(e) {
    let { messageId: t, channelId: n } = e,
        r = u.A.get(n);
    if (null == r || !r.has(t)) return !1;
    (r = r.update(t, _.Td)), u.A.commit(r);
}
function Q(e) {
    let t = e.messageId,
        n = e.channelId,
        r = u.A.get(n);
    if (null == r || !r.has(t)) return !1;
    (r = r.update(t, (t) => t.set("interactionData", e.interactionData))), u.A.commit(r);
}
function J(e) {
    let { channelId: t } = e,
        n = u.A.getOrCreate(t);
    (n = n.loadComplete({ newMessages: [], hasMoreAfter: !1, hasMoreBefore: !1 })), u.A.commit(n);
}
function ee() {
    u.A.forEach((e) => {
        let { channelId: t } = e;
        null == y.A.getChannel(t) && u.A.clear(t);
    });
}
function et() {
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
function en(e) {
    let { channelId: t, messageId: n } = e,
        r = u.A.getOrCreate(t);
    u.A.commit(r.mutate({ revealedMessageId: n }));
}
function er(e) {}
function ei(e) {}
function ea(e) {
    let { type: t, channelId: n, messageId: r, userId: i, emoji: a, reactionType: s } = e,
        o = u.A.get(n);
    if (null == o || !(0, E.vp)(e)) return !1;
    let l = T.default.getId() === i;
    (o = o.update(r, (n) =>
        "MESSAGE_REACTION_ADD" === t ? n.addReaction(a, l, e.colors, s) : n.removeReaction(a, l, s),
    )),
        u.A.commit(o);
}
function es(e) {
    let { channelId: t, messageId: n, reactions: r } = e,
        i = u.A.get(t);
    if (null == i) return !1;
    (i = i.update(n, (e) => e.addReactionBatch(r, L.default.getCurrentUser()?.id))), u.A.commit(i);
}
function eo(e) {
    let { type: t, messageData: n } = e,
        { message: r } = n,
        i = (0, c.cR)(n),
        s = r.channelId,
        o = u.A.getOrCreate(s);
    if (!o.has(i)) return !1;
    (o = o.update(
        i,
        (e) => (
            e.embeds?.filter(f._).length > 0 && (e = e.set("embeds", [])),
            "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, a.UI)(e.flags, w.pr7.EPHEMERAL))),
            e
        ),
    )),
        u.A.commit(o);
}
function el(e) {
    let { channelId: t, messageId: n } = e,
        r = u.A.get(t);
    if (null == r) return !1;
    (r = r.update(n, (e) => e.set("reactions", []))), u.A.commit(r);
}
function eu(e) {
    let { channelId: t, messageId: n, emoji: r } = e,
        i = u.A.get(t);
    if (null == i) return !1;
    (i = i.update(n, (e) => e.removeReactionsForEmoji(r))), u.A.commit(i);
}
function ec() {
    u.A.forEach((e) => {
        u.A.clear(e.channelId);
    }),
        x.clear();
}
function ed(e) {
    for (let [t, n] of I.default.entries(e.messages)) {
        let e = u.A.getOrCreate(t).addCachedMessages(n, !0);
        u.A.commit(e);
    }
}
function e_(e) {
    let t = u.A.getOrCreate(e.channelId);
    (e.shouldForceCommitMessages || t.cached || !t.ready) && u.A.commit(t.addCachedMessages(e.messages, e.stale));
}
function ef(e) {
    let { message: t } = e,
        n = L.default.getCurrentUser();
    null != t && null != t.author && null != n && t.author.id === n.id && (M = !0);
}
class eh extends s.Ay.Store {
    static displayName = "MessageStore";
    initialize() {
        this.waitFor(T.default, y.A, S.A, v.Ay, C.Ay, b.A, h.A, A.default, N.A, R.A, O.A, D.A, L.default),
            this.syncWith([h.A], () => {});
    }
    getMessages(e) {
        if (h.A.hasViewingRoles()) {
            let t = y.A.getChannel(e),
                n = t?.getGuildId();
            if (h.A.isViewingRoles(n) && !N.A.can(w.xBc.VIEW_CHANNEL, t)) return new u.A(e);
        }
        return u.A.getOrCreate(e);
    }
    getMessage(e, t) {
        return u.A.getOrCreate(e).get(t);
    }
    getLastEditableMessage(e) {
        let t = L.default.getCurrentUser();
        return i()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => (0, g.A)(e, t?.id));
    }
    getLastChatCommandMessage(e) {
        let t = L.default.getCurrentUser();
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
        let t = L.default.getCurrentUser();
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
        let t = L.default.getCurrentUser();
        return null != this.getMessages(e).findNewest((e) => e.author.id === t?.id);
    }
    hasCurrentUserSentMessageSinceAppStart() {
        return M;
    }
}
let ep = new eh(o.h, {
    BACKGROUND_SYNC_CHANNEL_MESSAGES: U,
    CONNECTION_OPEN: k,
    OVERLAY_INITIALIZE: k,
    CACHE_LOADED: ed,
    LOAD_MESSAGES: G,
    LOAD_MESSAGES_SUCCESS: j,
    LOAD_MESSAGES_FAILURE: H,
    LOAD_MESSAGES_SUCCESS_CACHED: B,
    LOCAL_MESSAGES_LOADED: e_,
    LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: Q,
    TRUNCATE_MESSAGES: F,
    CLEAR_MESSAGES: V,
    MESSAGE_CREATE: K,
    MESSAGE_SEND_FAILED: $,
    MESSAGE_SEND_FAILED_AUTOMOD: eo,
    MESSAGE_EDIT_FAILED_AUTOMOD: eo,
    MESSAGE_UPDATE: X,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: Z,
    MESSAGE_DELETE: z,
    MESSAGE_DELETE_BULK: q,
    MESSAGE_REVEAL: en,
    THREAD_CREATE_LOCAL: J,
    CHANNEL_DELETE: ee,
    THREAD_DELETE: ee,
    GUILD_DELETE: ee,
    RELATIONSHIP_ADD: et,
    RELATIONSHIP_UPDATE: et,
    RELATIONSHIP_REMOVE: et,
    GUILD_MEMBERS_CHUNK_BATCH: er,
    THREAD_MEMBER_LIST_UPDATE: ei,
    MESSAGE_REACTION_ADD: ea,
    MESSAGE_REACTION_ADD_MANY: es,
    MESSAGE_REACTION_REMOVE: ea,
    MESSAGE_REACTION_REMOVE_ALL: el,
    MESSAGE_REACTION_REMOVE_EMOJI: eu,
    LOGOUT: ec,
    UPLOAD_START: Y,
    UPLOAD_FAIL: W,
    LOCAL_MESSAGE_CREATE: ef,
});
