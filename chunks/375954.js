n.d(t, { Z: () => em }), n(47120), n(789020), n(653041), n(177593);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(911969),
    u = n(89892),
    c = n(673750),
    d = n(710845),
    f = n(247206),
    _ = n(723352),
    p = n(160404),
    h = n(786761),
    m = n(418476),
    g = (n(739566), n(995774)),
    E = n(706454),
    v = n(630388),
    y = n(709054),
    I = n(314897),
    T = n(592125),
    b = n(796974),
    S = n(984933),
    A = n(271383),
    N = n(430824),
    C = n(496675),
    R = n(699516),
    O = n(944486),
    D = n(914010),
    L = n(594174),
    x = n(981631);
function P(e, t, n) {
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
let w = new Set(),
    M = new d.Z('MessageStore'),
    k = !1;
function U() {
    u.Z.forEach((e) => {
        u.Z.commit(
            e.mutate({
                ready: !1,
                loadingMore: !1
            })
        );
    }),
        w.clear();
}
function G(e) {
    let { changesByChannelId: t } = e;
    for (let e in t) {
        let n = u.Z.get(e);
        if (null == n) continue;
        let i = !1;
        if (!(n.cached || !i)) {
            M.log('Skipping background message sync for '.concat(e, ' cached:').concat(n.cached, ' ') + 'ready:'.concat(n.ready, ' hasMoreAfter:').concat(n.hasMoreAfter, ' ') + 'isConnected:'.concat(i));
            continue;
        }
        n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids);
    }
}
function B() {
    return !0;
}
function Z(e) {
    let { channelId: t, truncateBottom: n, truncateTop: i } = e;
    M.log('Truncating messages for '.concat(t, ' bottom:').concat(n, ' top:').concat(i));
    let r = u.Z.getOrCreate(t);
    (r = r.truncate(n, i)), u.Z.commit(r);
}
function F(e) {
    let { channelId: t } = e;
    M.log('Clearing messages for '.concat(t)), u.Z.clear(t), w.clear();
}
function V(e) {
    let { channelId: t, jump: n, focus: i, before: r, after: a, limit: s, truncate: o } = e,
        l = u.Z.getOrCreate(t);
    (null == n ? void 0 : n.present) ? (l = l.jumpToPresent(s)) : (null == i ? void 0 : i.messageId) != null ? (l = l.focusOnMessage(i.messageId)) : (null == n ? void 0 : n.messageId) != null ? (l = l.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType)) : (null != r || null != a) && (l = l.loadFromCache(null != r, s)), null != o && (null != r || null != a) && (null == r || null == a) && (l = l.truncate(null != r, null != a)), u.Z.commit(l);
}
function j(e) {
    let { channelId: t, isBefore: n, isAfter: i, jump: r, hasMoreBefore: a, hasMoreAfter: s, messages: o, isStale: l, truncate: c } = e,
        d = u.Z.getOrCreate(t);
    (d = d.loadComplete({
        newMessages: o,
        isBefore: n,
        isAfter: i,
        jump: r,
        hasMoreBefore: a,
        hasMoreAfter: s,
        cached: l,
        hasFetched: !0
    })),
        null != c && (n || i) && (!n || !i) && (d = d.truncate(n, i)),
        u.Z.commit(d);
}
function H(e) {
    let { channelId: t } = e,
        n = u.Z.getOrCreate(t);
    u.Z.commit(
        n.mutate({
            loadingMore: !1,
            error: !0
        })
    );
}
function Y(e) {
    let { message: t } = e;
    null != t.nonce && w.add(t.nonce);
}
function W(e) {
    let { channelId: t, messageRecord: n } = e,
        i = null == n ? void 0 : n.nonce;
    if (null != i && w.has(i)) {
        let e = u.Z.getOrCreate(t),
            n = e.get(i);
        if (null == n) return;
        (e = (e = e.remove(i)).merge([n])), w.delete(i), u.Z.commit(e);
    }
}
function K(e) {
    let { channelId: t, message: n, isPushNotification: i } = e,
        r = u.Z.getOrCreate(t);
    if (i) {
        M.log('Inserting message tapped on from a push notification', n.id, n.channel_id), u.Z.commit(r.receivePushNotification(n));
        return;
    }
    if (!r.ready) return !1;
    null != n.nonce && n.state !== x.yb.SENDING && w.has(n.nonce) && ((r = r.remove(n.nonce)), w.delete(n.nonce)), (r = r.receiveMessage(n, !0 === b.Z.isAtBottom(t))), u.Z.commit(r);
}
function z(e) {
    let { channelId: t, messageId: n, reason: i } = e,
        r = u.Z.getOrCreate(t);
    if (null == r || !r.has(n)) return !1;
    let a = r.get(n, !0);
    (r = (null == a ? void 0 : a.isPoll()) === !0 ? r.remove(n) : r.update(n, (e) => ((e = e.set('state', x.yb.SEND_FAILED)).isCommandType() ? (e = (e = e.set('interactionError', null != i ? i : '')).set('flags', (0, v.pj)(e.flags, x.iLy.EPHEMERAL))) : null != i && (e = e.set('interactionError', null != i ? i : '')), e))), u.Z.commit(r);
}
function q(e) {
    let { id: t, channelId: n } = e,
        i = u.Z.getOrCreate(n);
    if (null == i || !i.has(t)) return !1;
    if (i.revealedMessageId === t) {
        let e = i.getAfter(t);
        i = null != e && e.blocked ? i.mutate({ revealedMessageId: e.id }) : i.mutate({ revealedMessageId: null });
    }
    (i = i.remove(t)), u.Z.commit(i), w.delete(t);
}
function Q(e) {
    let { ids: t, channelId: n } = e,
        i = u.Z.getOrCreate(n);
    if (null == i) return !1;
    let r = i.removeMany(t);
    if (i === r) return !1;
    if (null != r.revealedMessageId && a().some(t, (e) => r.revealedMessageId === e)) {
        let e = r.getAfter(r.revealedMessageId);
        r = null != e && e.blocked ? r.mutate({ revealedMessageId: e.id }) : r.mutate({ revealedMessageId: null });
    }
    u.Z.commit(r),
        t.forEach((e) => {
            w.delete(e);
        });
}
function X(e) {
    let t = e.message.id,
        n = e.message.channel_id,
        i = u.Z.getOrCreate(n);
    if (null == i || !i.has(t)) return !1;
    (i = i.update(t, (t) => (0, h.wi)(t, e.message))), u.Z.commit(i);
}
function J(e) {
    let { messageId: t, channelId: n } = e,
        i = u.Z.get(n);
    if (null == i || !i.has(t)) return !1;
    (i = i.update(t, f.Cm)), u.Z.commit(i);
}
function $(e) {
    let t = e.messageId,
        n = e.channelId,
        i = u.Z.get(n);
    if (null == i || !i.has(t)) return !1;
    (i = i.update(t, (t) => t.set('interactionData', e.interactionData))), u.Z.commit(i);
}
function ee(e) {
    let { channelId: t } = e,
        n = u.Z.getOrCreate(t);
    (n = n.loadComplete({
        newMessages: [],
        hasMoreAfter: !1,
        hasMoreBefore: !1
    })),
        u.Z.commit(n);
}
function et() {
    u.Z.forEach((e) => {
        let { channelId: t } = e;
        null == T.Z.getChannel(t) && u.Z.clear(t);
    });
}
function en() {
    u.Z.forEach((e) => {
        u.Z.commit(e.reset(e.map((e) => e.set('blocked', R.Z.isBlockedForMessage(e)).set('ignored', R.Z.isIgnoredForMessage(e)))));
    });
}
function ei(e) {
    let { channelId: t, messageId: n } = e,
        i = u.Z.getOrCreate(t);
    u.Z.commit(i.mutate({ revealedMessageId: n }));
}
function er(e) {}
function ea(e) {}
function es(e) {
    let { type: t, channelId: n, messageId: i, userId: r, emoji: a, reactionType: s } = e,
        o = u.Z.get(n);
    if (null == o || !(0, g.sm)(e)) return !1;
    let l = I.default.getId() === r;
    (o = o.update(i, (n) => ('MESSAGE_REACTION_ADD' === t ? n.addReaction(a, l, e.colors, s) : n.removeReaction(a, l, s)))), u.Z.commit(o);
}
function eo(e) {
    let { channelId: t, messageId: n, reactions: i } = e,
        r = u.Z.get(t);
    if (null == r) return !1;
    (r = r.update(n, (e) => {
        var t;
        return e.addReactionBatch(i, null === (t = L.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
    })),
        u.Z.commit(r);
}
function el(e) {
    let { type: t, messageData: n } = e,
        { message: i } = n,
        r = (0, c.hc)(n),
        a = i.channelId,
        s = u.Z.getOrCreate(a);
    if (!s.has(r)) return !1;
    (s = s.update(r, (e) => {
        var n;
        return (null === (n = e.embeds) || void 0 === n ? void 0 : n.filter(_.K).length) > 0 && (e = e.set('embeds', [])), 'MESSAGE_SEND_FAILED_AUTOMOD' === t && (e = e.set('flags', (0, v.pj)(e.flags, x.iLy.EPHEMERAL))), e;
    })),
        u.Z.commit(s);
}
function eu(e) {
    let { channelId: t, messageId: n } = e,
        i = u.Z.get(t);
    if (null == i) return !1;
    (i = i.update(n, (e) => e.set('reactions', []))), u.Z.commit(i);
}
function ec(e) {
    let { channelId: t, messageId: n, emoji: i } = e,
        r = u.Z.get(t);
    if (null == r) return !1;
    (r = r.update(n, (e) => e.removeReactionsForEmoji(i))), u.Z.commit(r);
}
function ed() {
    u.Z.forEach((e) => {
        u.Z.clear(e.channelId);
    }),
        w.clear();
}
function ef(e) {
    for (let [t, n] of y.default.entries(e.messages)) {
        let e = u.Z.getOrCreate(t).addCachedMessages(n, !0);
        u.Z.commit(e);
    }
}
function e_(e) {
    let t = u.Z.getOrCreate(e.channelId);
    (t.cached || !t.ready) && u.Z.commit(t.addCachedMessages(e.messages, e.stale));
}
function ep(e) {
    let { message: t } = e,
        n = L.default.getCurrentUser();
    null != t && null != t.author && null != n && t.author.id === n.id && (k = !0);
}
class eh extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(L.default, T.Z, b.Z, A.ZP, E.default, O.Z, D.Z, N.Z, R.Z, S.ZP), this.syncWith([p.Z], () => {});
    }
    getMessages(e) {
        if (p.Z.hasViewingRoles()) {
            let t = T.Z.getChannel(e),
                n = null == t ? void 0 : t.getGuildId();
            if (p.Z.isViewingRoles(n) && !C.Z.can(x.Plq.VIEW_CHANNEL, t)) return new u.Z(e);
        }
        return u.Z.getOrCreate(e);
    }
    getMessage(e, t) {
        return u.Z.getOrCreate(e).get(t);
    }
    getLastEditableMessage(e) {
        let t = L.default.getCurrentUser();
        return a()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => (0, m.Z)(e, null == t ? void 0 : t.id));
    }
    getLastChatCommandMessage(e) {
        let t = L.default.getCurrentUser();
        return this.getMessages(e)
            .toArray()
            .reverse()
            .find((e) => {
                var n, i;
                return (null === (n = e.interaction) || void 0 === n ? void 0 : n.type) === l.B8.APPLICATION_COMMAND && (null === (i = e.interactionData) || void 0 === i ? void 0 : i.type) === l.yU.CHAT && e.interaction.user.id === (null == t ? void 0 : t.id);
            });
    }
    getLastMessage(e) {
        return a()(this.getMessages(e).toArray()).reverse().get(0);
    }
    getLastNonCurrentUserMessage(e) {
        let t = L.default.getCurrentUser();
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
        let t = L.default.getCurrentUser();
        return null != this.getMessages(e).findNewest((e) => e.author.id === (null == t ? void 0 : t.id));
    }
    hasCurrentUserSentMessageSinceAppStart() {
        return k;
    }
}
P(eh, 'displayName', 'MessageStore');
let em = new eh(o.Z, {
    BACKGROUND_SYNC_CHANNEL_MESSAGES: G,
    CONNECTION_OPEN: U,
    OVERLAY_INITIALIZE: U,
    CACHE_LOADED: ef,
    LOAD_MESSAGES: B,
    LOAD_MESSAGES_SUCCESS: j,
    LOAD_MESSAGES_FAILURE: H,
    LOAD_MESSAGES_SUCCESS_CACHED: V,
    LOCAL_MESSAGES_LOADED: e_,
    LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: $,
    TRUNCATE_MESSAGES: Z,
    CLEAR_MESSAGES: F,
    MESSAGE_CREATE: K,
    MESSAGE_SEND_FAILED: z,
    MESSAGE_SEND_FAILED_AUTOMOD: el,
    MESSAGE_EDIT_FAILED_AUTOMOD: el,
    MESSAGE_UPDATE: X,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: J,
    MESSAGE_DELETE: q,
    MESSAGE_DELETE_BULK: Q,
    MESSAGE_REVEAL: ei,
    THREAD_CREATE_LOCAL: ee,
    CHANNEL_DELETE: et,
    THREAD_DELETE: et,
    GUILD_DELETE: et,
    RELATIONSHIP_ADD: en,
    RELATIONSHIP_UPDATE: en,
    RELATIONSHIP_REMOVE: en,
    GUILD_MEMBERS_CHUNK_BATCH: er,
    THREAD_MEMBER_LIST_UPDATE: ea,
    MESSAGE_REACTION_ADD: es,
    MESSAGE_REACTION_ADD_MANY: eo,
    MESSAGE_REACTION_REMOVE: es,
    MESSAGE_REACTION_REMOVE_ALL: eu,
    MESSAGE_REACTION_REMOVE_EMOJI: ec,
    LOGOUT: ed,
    UPLOAD_START: Y,
    UPLOAD_FAIL: W,
    LOCAL_MESSAGE_CREATE: ep
});
