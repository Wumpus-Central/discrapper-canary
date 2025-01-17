var i,
    a = r(47120);
var s = r(789020);
var o = r(653041);
var l = r(177593);
var u = r(392711),
    c = r.n(u),
    d = r(442837),
    f = r(570140),
    _ = r(911969),
    h = r(89892),
    p = r(673750),
    m = r(710845),
    g = r(247206),
    E = r(723352),
    v = r(160404),
    I = r(786761),
    T = r(418476),
    b = r(739566),
    y = r(995774),
    S = r(706454),
    A = r(630388),
    N = r(709054),
    C = r(314897),
    R = r(592125),
    O = r(796974),
    D = r(984933),
    L = r(271383),
    x = r(430824),
    w = r(496675),
    P = r(699516),
    M = r(944486),
    k = r(914010),
    U = r(594174),
    B = r(981631);
function G(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let Z = new Set(),
    F = new m.Z('MessageStore'),
    V = !1;
function j() {
    h.Z.forEach((e) => {
        h.Z.commit(
            e.mutate({
                ready: !1,
                loadingMore: !1
            })
        );
    }),
        Z.clear();
}
function H(e) {
    let { changesByChannelId: n } = e;
    for (let e in n) {
        let r = h.Z.get(e);
        if (null == r) continue;
        let i = !1;
        if (!(r.cached || !i)) {
            F.log('Skipping background message sync for '.concat(e, ' cached:').concat(r.cached, ' ') + 'ready:'.concat(r.ready, ' hasMoreAfter:').concat(r.hasMoreAfter, ' ') + 'isConnected:'.concat(i));
            continue;
        }
        r.mergeDelta(n[e].new_messages, n[e].modified_messages, n[e].deleted_message_ids);
    }
}
function Y() {
    return !0;
}
function W(e) {
    let { channelId: n, truncateBottom: r, truncateTop: i } = e;
    F.log('Truncating messages for '.concat(n, ' bottom:').concat(r, ' top:').concat(i));
    let a = h.Z.getOrCreate(n);
    (a = a.truncate(r, i)), h.Z.commit(a);
}
function K(e) {
    let { channelId: n } = e;
    F.log('Clearing messages for '.concat(n)), h.Z.clear(n), Z.clear();
}
function z(e) {
    let { channelId: n, jump: r, focus: i, before: a, after: s, limit: o, truncate: l } = e,
        u = h.Z.getOrCreate(n);
    (null == r ? void 0 : r.present) ? (u = u.jumpToPresent(o)) : (null == i ? void 0 : i.messageId) != null ? (u = u.focusOnMessage(i.messageId)) : (null == r ? void 0 : r.messageId) != null ? (u = u.jumpToMessage(r.messageId, r.flash, r.offset, r.returnMessageId, r.jumpType)) : (null != a || null != s) && (u = u.loadFromCache(null != a, o)), null != l && (null != a || null != s) && (null == a || null == s) && (u = u.truncate(null != a, null != s)), h.Z.commit(u);
}
function q(e) {
    let { channelId: n, isBefore: r, isAfter: i, jump: a, hasMoreBefore: s, hasMoreAfter: o, messages: l, isStale: u, truncate: c } = e,
        d = h.Z.getOrCreate(n);
    (d = d.loadComplete({
        newMessages: l,
        isBefore: r,
        isAfter: i,
        jump: a,
        hasMoreBefore: s,
        hasMoreAfter: o,
        cached: u,
        hasFetched: !0
    })),
        null != c && (r || i) && (!r || !i) && (d = d.truncate(r, i)),
        h.Z.commit(d);
}
function Q(e) {
    let { channelId: n } = e,
        r = h.Z.getOrCreate(n);
    h.Z.commit(
        r.mutate({
            loadingMore: !1,
            error: !0
        })
    );
}
function X(e) {
    let { message: n } = e;
    null != n.nonce && Z.add(n.nonce);
}
function J(e) {
    let { channelId: n, messageRecord: r } = e,
        i = null == r ? void 0 : r.nonce;
    if (null != i && Z.has(i)) {
        let e = h.Z.getOrCreate(n),
            r = e.get(i);
        if (null == r) return;
        (e = (e = e.remove(i)).merge([r])), Z.delete(i), h.Z.commit(e);
    }
}
function $(e) {
    let { channelId: n, message: r, isPushNotification: i } = e,
        a = h.Z.getOrCreate(n);
    if (i) {
        F.log('Inserting message tapped on from a push notification', r.id, r.channel_id), h.Z.commit(a.receivePushNotification(r));
        return;
    }
    if (!a.ready) return !1;
    null != r.nonce && r.state !== B.yb.SENDING && Z.has(r.nonce) && ((a = a.remove(r.nonce)), Z.delete(r.nonce)), (a = a.receiveMessage(r, !0 === O.Z.isAtBottom(n))), h.Z.commit(a);
}
function ee(e) {
    let { channelId: n, messageId: r, reason: i } = e,
        a = h.Z.getOrCreate(n);
    if (null == a || !a.has(r)) return !1;
    let s = a.get(r, !0);
    (a = (null == s ? void 0 : s.isPoll()) === !0 ? a.remove(r) : a.update(r, (e) => ((e = e.set('state', B.yb.SEND_FAILED)).isCommandType() ? (e = (e = e.set('interactionError', null != i ? i : '')).set('flags', (0, A.pj)(e.flags, B.iLy.EPHEMERAL))) : null != i && (e = e.set('interactionError', null != i ? i : '')), e))), h.Z.commit(a);
}
function et(e) {
    let { id: n, channelId: r } = e,
        i = h.Z.getOrCreate(r);
    if (null == i || !i.has(n)) return !1;
    if (i.revealedMessageId === n) {
        let e = i.getAfter(n);
        i = null != e && e.blocked ? i.mutate({ revealedMessageId: e.id }) : i.mutate({ revealedMessageId: null });
    }
    (i = i.remove(n)), h.Z.commit(i), Z.delete(n);
}
function en(e) {
    let { ids: n, channelId: r } = e,
        i = h.Z.getOrCreate(r);
    if (null == i) return !1;
    let a = i.removeMany(n);
    if (i === a) return !1;
    if (null != a.revealedMessageId && c().some(n, (e) => a.revealedMessageId === e)) {
        let e = a.getAfter(a.revealedMessageId);
        a = null != e && e.blocked ? a.mutate({ revealedMessageId: e.id }) : a.mutate({ revealedMessageId: null });
    }
    h.Z.commit(a),
        n.forEach((e) => {
            Z.delete(e);
        });
}
function er(e) {
    let n = e.message.id,
        r = e.message.channel_id,
        i = h.Z.getOrCreate(r);
    if (null == i || !i.has(n)) return !1;
    (i = i.update(n, (n) => (0, I.wi)(n, e.message))), h.Z.commit(i);
}
function ei(e) {
    let { messageId: n, channelId: r } = e,
        i = h.Z.get(r);
    if (null == i || !i.has(n)) return !1;
    (i = i.update(n, g.Cm)), h.Z.commit(i);
}
function ea(e) {
    let n = e.messageId,
        r = e.channelId,
        i = h.Z.get(r);
    if (null == i || !i.has(n)) return !1;
    (i = i.update(n, (n) => n.set('interactionData', e.interactionData))), h.Z.commit(i);
}
function es(e) {
    let { channelId: n } = e,
        r = h.Z.getOrCreate(n);
    (r = r.loadComplete({
        newMessages: [],
        hasMoreAfter: !1,
        hasMoreBefore: !1
    })),
        h.Z.commit(r);
}
function eo() {
    h.Z.forEach((e) => {
        let { channelId: n } = e;
        null == R.Z.getChannel(n) && h.Z.clear(n);
    });
}
function el() {
    h.Z.forEach((e) => {
        h.Z.commit(e.reset(e.map((e) => e.set('blocked', P.Z.isBlockedForMessage(e)).set('ignored', P.Z.isIgnoredForMessage(e)))));
    });
}
function eu(e) {
    let { channelId: n, messageId: r } = e,
        i = h.Z.getOrCreate(n);
    h.Z.commit(i.mutate({ revealedMessageId: r }));
}
function ec(e) {}
function ed(e) {}
function ef(e) {
    let { type: n, channelId: r, messageId: i, userId: a, emoji: s, reactionType: o } = e,
        l = h.Z.get(r);
    if (null == l || !(0, y.sm)(e)) return !1;
    let u = C.default.getId() === a;
    (l = l.update(i, (r) => ('MESSAGE_REACTION_ADD' === n ? r.addReaction(s, u, e.colors, o) : r.removeReaction(s, u, o)))), h.Z.commit(l);
}
function e_(e) {
    let { channelId: n, messageId: r, reactions: i } = e,
        a = h.Z.get(n);
    if (null == a) return !1;
    (a = a.update(r, (e) => {
        var n;
        return e.addReactionBatch(i, null === (n = U.default.getCurrentUser()) || void 0 === n ? void 0 : n.id);
    })),
        h.Z.commit(a);
}
function eh(e) {
    let { type: n, messageData: r } = e,
        { message: i } = r,
        a = (0, p.hc)(r),
        s = i.channelId,
        o = h.Z.getOrCreate(s);
    if (!o.has(a)) return !1;
    (o = o.update(a, (e) => {
        var r;
        return (null === (r = e.embeds) || void 0 === r ? void 0 : r.filter(E.K).length) > 0 && (e = e.set('embeds', [])), 'MESSAGE_SEND_FAILED_AUTOMOD' === n && (e = e.set('flags', (0, A.pj)(e.flags, B.iLy.EPHEMERAL))), e;
    })),
        h.Z.commit(o);
}
function ep(e) {
    let { channelId: n, messageId: r } = e,
        i = h.Z.get(n);
    if (null == i) return !1;
    (i = i.update(r, (e) => e.set('reactions', []))), h.Z.commit(i);
}
function em(e) {
    let { channelId: n, messageId: r, emoji: i } = e,
        a = h.Z.get(n);
    if (null == a) return !1;
    (a = a.update(r, (e) => e.removeReactionsForEmoji(i))), h.Z.commit(a);
}
function eg() {
    h.Z.forEach((e) => {
        h.Z.clear(e.channelId);
    }),
        Z.clear();
}
function eE(e) {
    for (let [n, r] of N.default.entries(e.messages)) {
        let e = h.Z.getOrCreate(n).addCachedMessages(r, !0);
        h.Z.commit(e);
    }
}
function ev(e) {
    let n = h.Z.getOrCreate(e.channelId);
    (n.cached || !n.ready) && h.Z.commit(n.addCachedMessages(e.messages, e.stale));
}
function eI(e) {
    let { message: n } = e,
        r = U.default.getCurrentUser();
    null != n && null != n.author && null != r && n.author.id === r.id && (V = !0);
}
class eT extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(U.default, R.Z, O.Z, L.ZP, S.default, M.Z, k.Z, x.Z, P.Z, D.ZP), this.syncWith([v.Z], () => {});
    }
    getMessages(e) {
        if (v.Z.hasViewingRoles()) {
            let n = R.Z.getChannel(e),
                r = null == n ? void 0 : n.getGuildId();
            if (v.Z.isViewingRoles(r) && !w.Z.can(B.Plq.VIEW_CHANNEL, n)) return new h.Z(e);
        }
        return h.Z.getOrCreate(e);
    }
    getMessage(e, n) {
        return h.Z.getOrCreate(e).get(n);
    }
    getLastEditableMessage(e) {
        let n = U.default.getCurrentUser();
        return c()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => (0, T.Z)(e, null == n ? void 0 : n.id));
    }
    getLastChatCommandMessage(e) {
        let n = U.default.getCurrentUser();
        return this.getMessages(e)
            .toArray()
            .reverse()
            .find((e) => {
                var r, i;
                return (null === (r = e.interaction) || void 0 === r ? void 0 : r.type) === _.B8.APPLICATION_COMMAND && (null === (i = e.interactionData) || void 0 === i ? void 0 : i.type) === _.yU.CHAT && e.interaction.user.id === (null == n ? void 0 : n.id);
            });
    }
    getLastMessage(e) {
        return c()(this.getMessages(e).toArray()).reverse().get(0);
    }
    getLastNonCurrentUserMessage(e) {
        let n = U.default.getCurrentUser();
        return c()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => e.author.id !== (null == n ? void 0 : n.id));
    }
    jumpedMessageId(e) {
        let n = h.Z.get(e);
        return null == n ? void 0 : n.jumpTargetId;
    }
    focusedMessageId(e) {
        let n = h.Z.get(e);
        return null == n ? void 0 : n.focusTargetId;
    }
    hasPresent(e) {
        let n = h.Z.get(e);
        return null != n && n.ready && n.hasPresent();
    }
    isReady(e) {
        return h.Z.getOrCreate(e).ready;
    }
    whenReady(e, n) {
        this.addConditionalChangeListener(() => {
            if (this.isReady(e)) return setImmediate(n), !1;
        });
    }
    isLoadingMessages(e) {
        return h.Z.getOrCreate(e).loadingMore;
    }
    hasCurrentUserSentMessage(e) {
        let n = U.default.getCurrentUser();
        return null != this.getMessages(e).findNewest((e) => e.author.id === (null == n ? void 0 : n.id));
    }
    hasCurrentUserSentMessageSinceAppStart() {
        return V;
    }
}
G(eT, 'displayName', 'MessageStore'),
    (n.Z = new eT(f.Z, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: H,
        CONNECTION_OPEN: j,
        OVERLAY_INITIALIZE: j,
        CACHE_LOADED: eE,
        LOAD_MESSAGES: Y,
        LOAD_MESSAGES_SUCCESS: q,
        LOAD_MESSAGES_FAILURE: Q,
        LOAD_MESSAGES_SUCCESS_CACHED: z,
        LOCAL_MESSAGES_LOADED: ev,
        LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: ea,
        TRUNCATE_MESSAGES: W,
        CLEAR_MESSAGES: K,
        MESSAGE_CREATE: $,
        MESSAGE_SEND_FAILED: ee,
        MESSAGE_SEND_FAILED_AUTOMOD: eh,
        MESSAGE_EDIT_FAILED_AUTOMOD: eh,
        MESSAGE_UPDATE: er,
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: ei,
        MESSAGE_DELETE: et,
        MESSAGE_DELETE_BULK: en,
        MESSAGE_REVEAL: eu,
        THREAD_CREATE_LOCAL: es,
        CHANNEL_DELETE: eo,
        THREAD_DELETE: eo,
        GUILD_DELETE: eo,
        RELATIONSHIP_ADD: el,
        RELATIONSHIP_UPDATE: el,
        RELATIONSHIP_REMOVE: el,
        GUILD_MEMBERS_CHUNK_BATCH: ec,
        THREAD_MEMBER_LIST_UPDATE: ed,
        MESSAGE_REACTION_ADD: ef,
        MESSAGE_REACTION_ADD_MANY: e_,
        MESSAGE_REACTION_REMOVE: ef,
        MESSAGE_REACTION_REMOVE_ALL: ep,
        MESSAGE_REACTION_REMOVE_EMOJI: em,
        LOGOUT: eg,
        UPLOAD_START: X,
        UPLOAD_FAIL: J,
        LOCAL_MESSAGE_CREATE: eI
    }));
