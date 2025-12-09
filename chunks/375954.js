n.d(t, { Z: () => eh }), n(388685), n(997841), n(539854), n(583741), n(358797);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(95015),
    s = n(442837),
    l = n(570140),
    c = n(911969),
    u = n(89892),
    d = n(673750),
    f = n(710845),
    p = n(247206),
    _ = n(723352),
    m = n(160404),
    h = n(786761),
    g = n(418476),
    E = (n(739566), n(995774)),
    b = n(706454),
    y = n(709054),
    O = n(314897),
    v = n(592125),
    S = n(796974),
    I = n(984933),
    T = n(271383),
    A = n(430824),
    C = n(496675),
    N = n(699516),
    P = n(944486),
    R = n(914010),
    D = n(594174),
    w = n(981631);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let L = new Set(),
    j = new f.Z("MessageStore"),
    M = !1;
function k() {
    u.Z.forEach((e) => {
        u.Z.commit(
            e.mutate({
                ready: !1,
                loadingMore: !1,
            }),
        );
    }),
        L.clear();
}
function U(e) {
    let { changesByChannelId: t } = e;
    for (let e in t) {
        let n = u.Z.get(e);
        if (null == n) continue;
        let r = !1;
        if (!(n.cached || !r)) {
            j.log(
                "Skipping background message sync for ".concat(e, " cached:").concat(n.cached, " ") +
                    "ready:".concat(n.ready, " hasMoreAfter:").concat(n.hasMoreAfter, " ") +
                    "isConnected:".concat(r),
            );
            continue;
        }
        n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids);
    }
}
function G() {
    return !0;
}
function Z(e) {
    let { channelId: t, truncateBottom: n, truncateTop: r } = e;
    j.log("Truncating messages for ".concat(t, " bottom:").concat(n, " top:").concat(r));
    let i = u.Z.getOrCreate(t);
    (i = i.truncate(n, r)), u.Z.commit(i);
}
function B(e) {
    let { channelId: t } = e;
    j.log("Clearing messages for ".concat(t)), u.Z.clear(t), L.clear();
}
function F(e) {
    let { channelId: t, jump: n, focus: r, before: i, after: a, limit: o, truncate: s } = e,
        l = u.Z.getOrCreate(t);
    (null == n ? void 0 : n.present)
        ? (l = l.jumpToPresent(o))
        : (null == r ? void 0 : r.messageId) != null
          ? (l = l.focusOnMessage(r.messageId))
          : (null == n ? void 0 : n.messageId) != null
            ? (l = l.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType))
            : (null != i || null != a) && (l = l.loadFromCache(null != i, o)),
        null != s && (null != i || null != a) && (null == i || null == a) && (l = l.truncate(null != i, null != a)),
        u.Z.commit(l);
}
function V(e) {
    let {
            channelId: t,
            isBefore: n,
            isAfter: r,
            jump: i,
            hasMoreBefore: a,
            hasMoreAfter: o,
            messages: s,
            isStale: l,
            truncate: c,
            avoidInitialScroll: d,
        } = e,
        f = u.Z.getOrCreate(t);
    (f = f.loadComplete({
        newMessages: s,
        isBefore: n,
        isAfter: r,
        jump: i,
        hasMoreBefore: a,
        hasMoreAfter: o,
        cached: l,
        hasFetched: !0,
        avoidInitialScroll: d,
    })),
        null != c && (n || r) && (!n || !r) && (f = f.truncate(n, r)),
        u.Z.commit(f);
}
function H(e) {
    let { channelId: t } = e,
        n = u.Z.getOrCreate(t);
    u.Z.commit(
        n.mutate({
            loadingMore: !1,
            error: !0,
        }),
    );
}
function Y(e) {
    let { message: t } = e;
    (null == t ? void 0 : t.nonce) != null && L.add(t.nonce);
}
function W(e) {
    let { channelId: t, messageId: n } = e;
    if (null == n || !L.has(n)) return !1;
    let r = u.Z.getOrCreate(t),
        i = r.get(n);
    if (null == i) return !1;
    (r = (r = r.remove(n)).merge([i])), L.delete(n), u.Z.commit(r);
}
function K(e) {
    let { channelId: t, message: n, isPushNotification: r } = e,
        i = u.Z.getOrCreate(t);
    if (r) {
        j.log("Inserting message tapped on from a push notification", n.id, n.channel_id),
            u.Z.commit(i.receivePushNotification(n));
        return;
    }
    if (!i.ready) return !1;
    null != n.nonce && n.state !== w.yb.SENDING && L.has(n.nonce) && ((i = i.remove(n.nonce)), L.delete(n.nonce)),
        (i = i.receiveMessage(n, !0 === S.Z.isAtBottom(t))),
        u.Z.commit(i);
}
function z(e) {
    let { channelId: t, messageId: n, reason: r } = e,
        i = u.Z.getOrCreate(t);
    if (null == i || !i.has(n)) return !1;
    let a = i.get(n, !0);
    (i =
        (null == a ? void 0 : a.isPoll()) === !0
            ? i.remove(n)
            : i.update(
                  n,
                  (e) => (
                      (e = e.set("state", w.yb.SEND_FAILED)).isCommandType()
                          ? (e = (e = e.set("interactionError", null != r ? r : "")).set(
                                "flags",
                                (0, o.pj)(e.flags, w.iLy.EPHEMERAL),
                            ))
                          : null != r && (e = e.set("interactionError", null != r ? r : "")),
                      e
                  ),
              )),
        u.Z.commit(i);
}
function q(e) {
    let { id: t, channelId: n } = e,
        r = u.Z.getOrCreate(n);
    if (null == r || !r.has(t)) return !1;
    if (r.revealedMessageId === t) {
        let e = r.getAfter(t);
        r = null != e && e.blocked ? r.mutate({ revealedMessageId: e.id }) : r.mutate({ revealedMessageId: null });
    }
    (r = r.remove(t)), u.Z.commit(r), L.delete(t);
}
function Q(e) {
    let { ids: t, channelId: n } = e,
        r = u.Z.getOrCreate(n);
    if (null == r) return !1;
    let i = r.removeMany(t);
    if (r === i) return !1;
    if (null != i.revealedMessageId && a().some(t, (e) => i.revealedMessageId === e)) {
        let e = i.getAfter(i.revealedMessageId);
        i = null != e && e.blocked ? i.mutate({ revealedMessageId: e.id }) : i.mutate({ revealedMessageId: null });
    }
    u.Z.commit(i),
        t.forEach((e) => {
            L.delete(e);
        });
}
function X(e) {
    let t = e.message.id,
        n = e.message.channel_id,
        r = u.Z.getOrCreate(n);
    if (null == r || !r.has(t)) return !1;
    (r = r.update(t, (t) => (0, h.wi)(t, e.message))), u.Z.commit(r);
}
function J(e) {
    let { messageId: t, channelId: n } = e,
        r = u.Z.get(n);
    if (null == r || !r.has(t)) return !1;
    (r = r.update(t, p.Cm)), u.Z.commit(r);
}
function $(e) {
    let t = e.messageId,
        n = e.channelId,
        r = u.Z.get(n);
    if (null == r || !r.has(t)) return !1;
    (r = r.update(t, (t) => t.set("interactionData", e.interactionData))), u.Z.commit(r);
}
function ee(e) {
    let { channelId: t } = e,
        n = u.Z.getOrCreate(t);
    (n = n.loadComplete({
        newMessages: [],
        hasMoreAfter: !1,
        hasMoreBefore: !1,
    })),
        u.Z.commit(n);
}
function et() {
    u.Z.forEach((e) => {
        let { channelId: t } = e;
        null == v.Z.getChannel(t) && u.Z.clear(t);
    });
}
function en() {
    let e = !1;
    return (
        u.Z.forEach((t) => {
            u.Z.commit(
                t.reset(
                    t.map(
                        (t) => (
                            t.blocked !== N.Z.isBlockedForMessage(t) &&
                                ((e = !0), (t = t.set("blocked", N.Z.isBlockedForMessage(t)))),
                            t.ignored !== N.Z.isIgnoredForMessage(t) &&
                                ((e = !0), (t = t.set("ignored", N.Z.isIgnoredForMessage(t)))),
                            t
                        ),
                    ),
                ),
            );
        }),
        e
    );
}
function er(e) {
    let { channelId: t, messageId: n } = e,
        r = u.Z.getOrCreate(t);
    u.Z.commit(r.mutate({ revealedMessageId: n }));
}
function ei(e) {}
function ea(e) {}
function eo(e) {
    let { type: t, channelId: n, messageId: r, userId: i, emoji: a, reactionType: o } = e,
        s = u.Z.get(n);
    if (null == s || !(0, E.sm)(e)) return !1;
    let l = O.default.getId() === i;
    (s = s.update(r, (n) =>
        "MESSAGE_REACTION_ADD" === t ? n.addReaction(a, l, e.colors, o) : n.removeReaction(a, l, o),
    )),
        u.Z.commit(s);
}
function es(e) {
    let { channelId: t, messageId: n, reactions: r } = e,
        i = u.Z.get(t);
    if (null == i) return !1;
    (i = i.update(n, (e) => {
        var t;
        return e.addReactionBatch(r, null == (t = D.default.getCurrentUser()) ? void 0 : t.id);
    })),
        u.Z.commit(i);
}
function el(e) {
    let { type: t, messageData: n } = e,
        { message: r } = n,
        i = (0, d.hc)(n),
        a = r.channelId,
        s = u.Z.getOrCreate(a);
    if (!s.has(i)) return !1;
    (s = s.update(i, (e) => {
        var n;
        return (
            (null == (n = e.embeds) ? void 0 : n.filter(_.K).length) > 0 && (e = e.set("embeds", [])),
            "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, o.pj)(e.flags, w.iLy.EPHEMERAL))),
            e
        );
    })),
        u.Z.commit(s);
}
function ec(e) {
    let { channelId: t, messageId: n } = e,
        r = u.Z.get(t);
    if (null == r) return !1;
    (r = r.update(n, (e) => e.set("reactions", []))), u.Z.commit(r);
}
function eu(e) {
    let { channelId: t, messageId: n, emoji: r } = e,
        i = u.Z.get(t);
    if (null == i) return !1;
    (i = i.update(n, (e) => e.removeReactionsForEmoji(r))), u.Z.commit(i);
}
function ed() {
    u.Z.forEach((e) => {
        u.Z.clear(e.channelId);
    }),
        L.clear();
}
function ef(e) {
    for (let [t, n] of y.default.entries(e.messages)) {
        let e = u.Z.getOrCreate(t).addCachedMessages(n, !0);
        u.Z.commit(e);
    }
}
function ep(e) {
    let t = u.Z.getOrCreate(e.channelId);
    (t.cached || !t.ready) && u.Z.commit(t.addCachedMessages(e.messages, e.stale));
}
function e_(e) {
    let { message: t } = e,
        n = D.default.getCurrentUser();
    null != t && null != t.author && null != n && t.author.id === n.id && (M = !0);
}
class em extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(O.default, v.Z, S.Z, I.ZP, T.ZP, A.Z, m.Z, b.default, C.Z, N.Z, P.Z, R.Z, D.default),
            this.syncWith([m.Z], () => {});
    }
    getMessages(e) {
        if (m.Z.hasViewingRoles()) {
            let t = v.Z.getChannel(e),
                n = null == t ? void 0 : t.getGuildId();
            if (m.Z.isViewingRoles(n) && !C.Z.can(w.Plq.VIEW_CHANNEL, t)) return new u.Z(e);
        }
        return u.Z.getOrCreate(e);
    }
    getMessage(e, t) {
        return u.Z.getOrCreate(e).get(t);
    }
    getLastEditableMessage(e) {
        let t = D.default.getCurrentUser();
        return a()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => (0, g.Z)(e, null == t ? void 0 : t.id));
    }
    getLastChatCommandMessage(e) {
        let t = D.default.getCurrentUser();
        return this.getMessages(e)
            .toArray()
            .reverse()
            .find((e) => {
                var n, r;
                return (
                    (null == (n = e.interaction) ? void 0 : n.type) === c.B8.APPLICATION_COMMAND &&
                    (null == (r = e.interactionData) ? void 0 : r.type) === c.yU.CHAT &&
                    e.interaction.user.id === (null == t ? void 0 : t.id)
                );
            });
    }
    getLastMessage(e) {
        return a()(this.getMessages(e).toArray()).reverse().get(0);
    }
    getLastNonCurrentUserMessage(e) {
        let t = D.default.getCurrentUser();
        return a()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => e.author.id !== (null == t ? void 0 : t.id));
    }
    jumpedMessageId(e) {
        let t = u.Z.get(e);
        return null == t ? void 0 : t.jumpTargetId;
    }
    focusedMessageId(e) {
        let t = u.Z.get(e);
        return null == t ? void 0 : t.focusTargetId;
    }
    hasPresent(e) {
        let t = u.Z.get(e);
        return null != t && t.ready && t.hasPresent();
    }
    isReady(e) {
        return u.Z.getOrCreate(e).ready;
    }
    whenReady(e, t) {
        this.addConditionalChangeListener(() => {
            if (this.isReady(e)) return setImmediate(t), !1;
        });
    }
    isLoadingMessages(e) {
        return u.Z.getOrCreate(e).loadingMore;
    }
    hasCurrentUserSentMessage(e) {
        let t = D.default.getCurrentUser();
        return null != this.getMessages(e).findNewest((e) => e.author.id === (null == t ? void 0 : t.id));
    }
    hasCurrentUserSentMessageSinceAppStart() {
        return M;
    }
}
x(em, "displayName", "MessageStore");
let eh = new em(l.Z, {
    BACKGROUND_SYNC_CHANNEL_MESSAGES: U,
    CONNECTION_OPEN: k,
    OVERLAY_INITIALIZE: k,
    CACHE_LOADED: ef,
    LOAD_MESSAGES: G,
    LOAD_MESSAGES_SUCCESS: V,
    LOAD_MESSAGES_FAILURE: H,
    LOAD_MESSAGES_SUCCESS_CACHED: F,
    LOCAL_MESSAGES_LOADED: ep,
    LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: $,
    TRUNCATE_MESSAGES: Z,
    CLEAR_MESSAGES: B,
    MESSAGE_CREATE: K,
    MESSAGE_SEND_FAILED: z,
    MESSAGE_SEND_FAILED_AUTOMOD: el,
    MESSAGE_EDIT_FAILED_AUTOMOD: el,
    MESSAGE_UPDATE: X,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: J,
    MESSAGE_DELETE: q,
    MESSAGE_DELETE_BULK: Q,
    MESSAGE_REVEAL: er,
    THREAD_CREATE_LOCAL: ee,
    CHANNEL_DELETE: et,
    THREAD_DELETE: et,
    GUILD_DELETE: et,
    RELATIONSHIP_ADD: en,
    RELATIONSHIP_UPDATE: en,
    RELATIONSHIP_REMOVE: en,
    GUILD_MEMBERS_CHUNK_BATCH: ei,
    THREAD_MEMBER_LIST_UPDATE: ea,
    MESSAGE_REACTION_ADD: eo,
    MESSAGE_REACTION_ADD_MANY: es,
    MESSAGE_REACTION_REMOVE: eo,
    MESSAGE_REACTION_REMOVE_ALL: ec,
    MESSAGE_REACTION_REMOVE_EMOJI: eu,
    LOGOUT: ed,
    UPLOAD_START: Y,
    UPLOAD_FAIL: W,
    LOCAL_MESSAGE_CREATE: e_,
});
