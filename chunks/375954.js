n.d(t, { Z: () => em }), n(47120), n(789020), n(653041), n(978209), n(177593);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(911969),
    c = n(89892),
    u = n(673750),
    d = n(710845),
    f = n(247206),
    _ = n(723352),
    p = n(160404),
    h = n(786761),
    m = n(418476),
    g = (n(739566), n(995774)),
    E = n(706454),
    b = n(630388),
    y = n(709054),
    v = n(314897),
    O = n(592125),
    I = n(796974),
    S = n(984933),
    T = n(271383),
    N = n(430824),
    A = n(496675),
    C = n(699516),
    R = n(944486),
    P = n(914010),
    w = n(594174),
    D = n(981631);
function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let x = new Set(),
    M = new d.Z('MessageStore'),
    k = !1;
function j() {
    c.Z.forEach((e) => {
        c.Z.commit(
            e.mutate({
                ready: !1,
                loadingMore: !1
            })
        );
    }),
        x.clear();
}
function U(e) {
    let { changesByChannelId: t } = e;
    for (let e in t) {
        let n = c.Z.get(e);
        if (null == n) continue;
        let r = !1;
        if (!(n.cached || !r)) {
            M.log('Skipping background message sync for '.concat(e, ' cached:').concat(n.cached, ' ') + 'ready:'.concat(n.ready, ' hasMoreAfter:').concat(n.hasMoreAfter, ' ') + 'isConnected:'.concat(r));
            continue;
        }
        n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids);
    }
}
function G() {
    return !0;
}
function B(e) {
    let { channelId: t, truncateBottom: n, truncateTop: r } = e;
    M.log('Truncating messages for '.concat(t, ' bottom:').concat(n, ' top:').concat(r));
    let i = c.Z.getOrCreate(t);
    (i = i.truncate(n, r)), c.Z.commit(i);
}
function F(e) {
    let { channelId: t } = e;
    M.log('Clearing messages for '.concat(t)), c.Z.clear(t), x.clear();
}
function V(e) {
    let { channelId: t, jump: n, focus: r, before: i, after: o, limit: a, truncate: s } = e,
        l = c.Z.getOrCreate(t);
    (null == n ? void 0 : n.present) ? (l = l.jumpToPresent(a)) : (null == r ? void 0 : r.messageId) != null ? (l = l.focusOnMessage(r.messageId)) : (null == n ? void 0 : n.messageId) != null ? (l = l.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType)) : (null != i || null != o) && (l = l.loadFromCache(null != i, a)), null != s && (null != i || null != o) && (null == i || null == o) && (l = l.truncate(null != i, null != o)), c.Z.commit(l);
}
function Z(e) {
    let { channelId: t, isBefore: n, isAfter: r, jump: i, hasMoreBefore: o, hasMoreAfter: a, messages: s, isStale: l, truncate: u } = e,
        d = c.Z.getOrCreate(t);
    (d = d.loadComplete({
        newMessages: s,
        isBefore: n,
        isAfter: r,
        jump: i,
        hasMoreBefore: o,
        hasMoreAfter: a,
        cached: l,
        hasFetched: !0
    })),
        null != u && (n || r) && (!n || !r) && (d = d.truncate(n, r)),
        c.Z.commit(d);
}
function H(e) {
    let { channelId: t } = e,
        n = c.Z.getOrCreate(t);
    c.Z.commit(
        n.mutate({
            loadingMore: !1,
            error: !0
        })
    );
}
function W(e) {
    let { message: t } = e;
    null != t.nonce && x.add(t.nonce);
}
function Y(e) {
    let { channelId: t, messageRecord: n } = e,
        r = null == n ? void 0 : n.nonce;
    if (null != r && x.has(r)) {
        let e = c.Z.getOrCreate(t),
            n = e.get(r);
        if (null == n) return;
        (e = (e = e.remove(r)).merge([n])), x.delete(r), c.Z.commit(e);
    }
}
function K(e) {
    let { channelId: t, message: n, isPushNotification: r } = e,
        i = c.Z.getOrCreate(t);
    if (r) {
        M.log('Inserting message tapped on from a push notification', n.id, n.channel_id), c.Z.commit(i.receivePushNotification(n));
        return;
    }
    if (!i.ready) return !1;
    null != n.nonce && n.state !== D.yb.SENDING && x.has(n.nonce) && ((i = i.remove(n.nonce)), x.delete(n.nonce)), (i = i.receiveMessage(n, !0 === I.Z.isAtBottom(t))), c.Z.commit(i);
}
function z(e) {
    let { channelId: t, messageId: n, reason: r } = e,
        i = c.Z.getOrCreate(t);
    if (null == i || !i.has(n)) return !1;
    let o = i.get(n, !0);
    (i = (null == o ? void 0 : o.isPoll()) === !0 ? i.remove(n) : i.update(n, (e) => ((e = e.set('state', D.yb.SEND_FAILED)).isCommandType() ? (e = (e = e.set('interactionError', null != r ? r : '')).set('flags', (0, b.pj)(e.flags, D.iLy.EPHEMERAL))) : null != r && (e = e.set('interactionError', null != r ? r : '')), e))), c.Z.commit(i);
}
function q(e) {
    let { id: t, channelId: n } = e,
        r = c.Z.getOrCreate(n);
    if (null == r || !r.has(t)) return !1;
    if (r.revealedMessageId === t) {
        let e = r.getAfter(t);
        r = null != e && e.blocked ? r.mutate({ revealedMessageId: e.id }) : r.mutate({ revealedMessageId: null });
    }
    (r = r.remove(t)), c.Z.commit(r), x.delete(t);
}
function Q(e) {
    let { ids: t, channelId: n } = e,
        r = c.Z.getOrCreate(n);
    if (null == r) return !1;
    let i = r.removeMany(t);
    if (r === i) return !1;
    if (null != i.revealedMessageId && o().some(t, (e) => i.revealedMessageId === e)) {
        let e = i.getAfter(i.revealedMessageId);
        i = null != e && e.blocked ? i.mutate({ revealedMessageId: e.id }) : i.mutate({ revealedMessageId: null });
    }
    c.Z.commit(i),
        t.forEach((e) => {
            x.delete(e);
        });
}
function X(e) {
    let t = e.message.id,
        n = e.message.channel_id,
        r = c.Z.getOrCreate(n);
    if (null == r || !r.has(t)) return !1;
    (r = r.update(t, (t) => (0, h.wi)(t, e.message))), c.Z.commit(r);
}
function J(e) {
    let { messageId: t, channelId: n } = e,
        r = c.Z.get(n);
    if (null == r || !r.has(t)) return !1;
    (r = r.update(t, f.Cm)), c.Z.commit(r);
}
function $(e) {
    let t = e.messageId,
        n = e.channelId,
        r = c.Z.get(n);
    if (null == r || !r.has(t)) return !1;
    (r = r.update(t, (t) => t.set('interactionData', e.interactionData))), c.Z.commit(r);
}
function ee(e) {
    let { channelId: t } = e,
        n = c.Z.getOrCreate(t);
    (n = n.loadComplete({
        newMessages: [],
        hasMoreAfter: !1,
        hasMoreBefore: !1
    })),
        c.Z.commit(n);
}
function et() {
    c.Z.forEach((e) => {
        let { channelId: t } = e;
        null == O.Z.getChannel(t) && c.Z.clear(t);
    });
}
function en() {
    c.Z.forEach((e) => {
        c.Z.commit(e.reset(e.map((e) => e.set('blocked', C.Z.isBlockedForMessage(e)).set('ignored', C.Z.isIgnoredForMessage(e)))));
    });
}
function er(e) {
    let { channelId: t, messageId: n } = e,
        r = c.Z.getOrCreate(t);
    c.Z.commit(r.mutate({ revealedMessageId: n }));
}
function ei(e) {}
function eo(e) {}
function ea(e) {
    let { type: t, channelId: n, messageId: r, userId: i, emoji: o, reactionType: a } = e,
        s = c.Z.get(n);
    if (null == s || !(0, g.sm)(e)) return !1;
    let l = v.default.getId() === i;
    (s = s.update(r, (n) => ('MESSAGE_REACTION_ADD' === t ? n.addReaction(o, l, e.colors, a) : n.removeReaction(o, l, a)))), c.Z.commit(s);
}
function es(e) {
    let { channelId: t, messageId: n, reactions: r } = e,
        i = c.Z.get(t);
    if (null == i) return !1;
    (i = i.update(n, (e) => {
        var t;
        return e.addReactionBatch(r, null == (t = w.default.getCurrentUser()) ? void 0 : t.id);
    })),
        c.Z.commit(i);
}
function el(e) {
    let { type: t, messageData: n } = e,
        { message: r } = n,
        i = (0, u.hc)(n),
        o = r.channelId,
        a = c.Z.getOrCreate(o);
    if (!a.has(i)) return !1;
    (a = a.update(i, (e) => {
        var n;
        return (null == (n = e.embeds) ? void 0 : n.filter(_.K).length) > 0 && (e = e.set('embeds', [])), 'MESSAGE_SEND_FAILED_AUTOMOD' === t && (e = e.set('flags', (0, b.pj)(e.flags, D.iLy.EPHEMERAL))), e;
    })),
        c.Z.commit(a);
}
function ec(e) {
    let { channelId: t, messageId: n } = e,
        r = c.Z.get(t);
    if (null == r) return !1;
    (r = r.update(n, (e) => e.set('reactions', []))), c.Z.commit(r);
}
function eu(e) {
    let { channelId: t, messageId: n, emoji: r } = e,
        i = c.Z.get(t);
    if (null == i) return !1;
    (i = i.update(n, (e) => e.removeReactionsForEmoji(r))), c.Z.commit(i);
}
function ed() {
    c.Z.forEach((e) => {
        c.Z.clear(e.channelId);
    }),
        x.clear();
}
function ef(e) {
    for (let [t, n] of y.default.entries(e.messages)) {
        let e = c.Z.getOrCreate(t).addCachedMessages(n, !0);
        c.Z.commit(e);
    }
}
function e_(e) {
    let t = c.Z.getOrCreate(e.channelId);
    (t.cached || !t.ready) && c.Z.commit(t.addCachedMessages(e.messages, e.stale));
}
function ep(e) {
    let { message: t } = e,
        n = w.default.getCurrentUser();
    null != t && null != t.author && null != n && t.author.id === n.id && (k = !0);
}
class eh extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(w.default, O.Z, I.Z, T.ZP, E.default, R.Z, P.Z, N.Z, C.Z, S.ZP), this.syncWith([p.Z], () => {});
    }
    getMessages(e) {
        if (p.Z.hasViewingRoles()) {
            let t = O.Z.getChannel(e),
                n = null == t ? void 0 : t.getGuildId();
            if (p.Z.isViewingRoles(n) && !A.Z.can(D.Plq.VIEW_CHANNEL, t)) return new c.Z(e);
        }
        return c.Z.getOrCreate(e);
    }
    getMessage(e, t) {
        return c.Z.getOrCreate(e).get(t);
    }
    getLastEditableMessage(e) {
        let t = w.default.getCurrentUser();
        return o()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => (0, m.Z)(e, null == t ? void 0 : t.id));
    }
    getLastChatCommandMessage(e) {
        let t = w.default.getCurrentUser();
        return this.getMessages(e)
            .toArray()
            .reverse()
            .find((e) => {
                var n, r;
                return (null == (n = e.interaction) ? void 0 : n.type) === l.B8.APPLICATION_COMMAND && (null == (r = e.interactionData) ? void 0 : r.type) === l.yU.CHAT && e.interaction.user.id === (null == t ? void 0 : t.id);
            });
    }
    getLastMessage(e) {
        return o()(this.getMessages(e).toArray()).reverse().get(0);
    }
    getLastNonCurrentUserMessage(e) {
        let t = w.default.getCurrentUser();
        return o()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => e.author.id !== (null == t ? void 0 : t.id));
    }
    jumpedMessageId(e) {
        let t = c.Z.get(e);
        return null == t ? void 0 : t.jumpTargetId;
    }
    focusedMessageId(e) {
        let t = c.Z.get(e);
        return null == t ? void 0 : t.focusTargetId;
    }
    hasPresent(e) {
        let t = c.Z.get(e);
        return null != t && t.ready && t.hasPresent();
    }
    isReady(e) {
        return c.Z.getOrCreate(e).ready;
    }
    whenReady(e, t) {
        this.addConditionalChangeListener(() => {
            if (this.isReady(e)) return setImmediate(t), !1;
        });
    }
    isLoadingMessages(e) {
        return c.Z.getOrCreate(e).loadingMore;
    }
    hasCurrentUserSentMessage(e) {
        let t = w.default.getCurrentUser();
        return null != this.getMessages(e).findNewest((e) => e.author.id === (null == t ? void 0 : t.id));
    }
    hasCurrentUserSentMessageSinceAppStart() {
        return k;
    }
}
L(eh, 'displayName', 'MessageStore');
let em = new eh(s.Z, {
    BACKGROUND_SYNC_CHANNEL_MESSAGES: U,
    CONNECTION_OPEN: j,
    OVERLAY_INITIALIZE: j,
    CACHE_LOADED: ef,
    LOAD_MESSAGES: G,
    LOAD_MESSAGES_SUCCESS: Z,
    LOAD_MESSAGES_FAILURE: H,
    LOAD_MESSAGES_SUCCESS_CACHED: V,
    LOCAL_MESSAGES_LOADED: e_,
    LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: $,
    TRUNCATE_MESSAGES: B,
    CLEAR_MESSAGES: F,
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
    THREAD_MEMBER_LIST_UPDATE: eo,
    MESSAGE_REACTION_ADD: ea,
    MESSAGE_REACTION_ADD_MANY: es,
    MESSAGE_REACTION_REMOVE: ea,
    MESSAGE_REACTION_REMOVE_ALL: ec,
    MESSAGE_REACTION_REMOVE_EMOJI: eu,
    LOGOUT: ed,
    UPLOAD_START: W,
    UPLOAD_FAIL: Y,
    LOCAL_MESSAGE_CREATE: ep
});
