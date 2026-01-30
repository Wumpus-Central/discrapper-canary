n.d(t, {
    A: () => em,
}),
    n(896048),
    n(938796),
    n(321073),
    n(264879),
    n(142703);
var r,
    i = n(735438),
    a = n.n(i),
    o = n(665260),
    s = n(311907),
    l = n(73153),
    c = n(155718),
    u = n(128265),
    d = n(884384),
    f = n(626584),
    p = n(390248),
    _ = n(459403),
    h = n(164956),
    m = n(141468),
    g = n(697470),
    E = (n(763754), n(815807)),
    y = n(773669),
    b = n(661191),
    O = n(961350),
    v = n(734057),
    A = n(72314),
    I = n(808728),
    S = n(696451),
    T = n(71393),
    C = n(576705),
    N = n(994500),
    w = n(309010),
    R = n(967198),
    P = n(287809),
    D = n(652215);

function L(e, t, n) {
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
let x = new Set(),
    M = new f.A("MessageStore"),
    j = !1;

function k() {
    u.A.forEach((e) => {
        u.A.commit(
            e.mutate({
                ready: !1,
                loadingMore: !1,
            }),
        );
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
            M.log(
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

function F(e) {
    let { channelId: t, truncateBottom: n, truncateTop: r } = e;
    M.log("Truncating messages for ".concat(t, " bottom:").concat(n, " top:").concat(r));
    let i = u.A.getOrCreate(t);
    (i = i.truncate(n, r)), u.A.commit(i);
}

function V(e) {
    let { channelId: t } = e;
    M.log("Clearing messages for ".concat(t)), u.A.clear(t), x.clear();
}

function B(e) {
    let { channelId: t, jump: n, focus: r, before: i, after: a, limit: o, truncate: s } = e,
        l = u.A.getOrCreate(t);
    (null == n ? void 0 : n.present)
        ? (l = l.jumpToPresent(o))
        : (null == r ? void 0 : r.messageId) != null
          ? (l = l.focusOnMessage(r.messageId))
          : (null == n ? void 0 : n.messageId) != null
            ? (l = l.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType))
            : (null != i || null != a) && (l = l.loadFromCache(null != i, o)),
        null != s && (null != i || null != a) && (null == i || null == a) && (l = l.truncate(null != i, null != a)),
        u.A.commit(l);
}

function H(e) {
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
        f = u.A.getOrCreate(t);
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
        u.A.commit(f);
}

function Y(e) {
    let { channelId: t } = e,
        n = u.A.getOrCreate(t);
    u.A.commit(
        n.mutate({
            loadingMore: !1,
            error: !0,
        }),
    );
}

function W(e) {
    let { message: t } = e;
    (null == t ? void 0 : t.nonce) != null && x.add(t.nonce);
}

function K(e) {
    let { channelId: t, messageId: n } = e;
    if (null == n || !x.has(n)) return !1;
    let r = u.A.getOrCreate(t),
        i = r.get(n);
    if (null == i) return !1;
    (r = (r = r.remove(n)).merge([i])), x.delete(n), u.A.commit(r);
}

function z(e) {
    let { channelId: t, message: r, isPushNotification: i } = e,
        a = u.A.getOrCreate(t),
        o = n(142120).A.isConnected();
    if (i) {
        M.log("Inserting message tapped on from a push notification", r.id, r.channel_id),
            u.A.commit(a.receivePushNotification(r, o));
        return;
    }
    if (!a.ready) return !1;
    null != r.nonce && r.state !== D.cmJ.SENDING && x.has(r.nonce) && ((a = a.remove(r.nonce)), x.delete(r.nonce)),
        (a = a.receiveMessage(r, !0 === A.A.isAtBottom(t))),
        u.A.commit(a);
}

function q(e) {
    let { channelId: t, messageId: n, reason: r } = e,
        i = u.A.getOrCreate(t);
    if (null == i || !i.has(n)) return !1;
    let a = i.get(n, !0);
    (i =
        (null == a ? void 0 : a.isPoll()) === !0
            ? i.remove(n)
            : i.update(
                  n,
                  (e) => (
                      (e = e.set("state", D.cmJ.SEND_FAILED)).isCommandType()
                          ? (e = (e = e.set("interactionError", null != r ? r : "")).set(
                                "flags",
                                (0, o.UI)(e.flags, D.pr7.EPHEMERAL),
                            ))
                          : null != r && (e = e.set("interactionError", null != r ? r : "")),
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
        r =
            null != e && e.blocked
                ? r.mutate({
                      revealedMessageId: e.id,
                  })
                : r.mutate({
                      revealedMessageId: null,
                  });
    }
    (r = r.remove(t)), u.A.commit(r), x.delete(t);
}

function Q(e) {
    let { ids: t, channelId: n } = e,
        r = u.A.getOrCreate(n);
    if (null == r) return !1;
    let i = r.removeMany(t);
    if (r === i) return !1;
    if (null != i.revealedMessageId && a().some(t, (e) => i.revealedMessageId === e)) {
        let e = i.getAfter(i.revealedMessageId);
        i =
            null != e && e.blocked
                ? i.mutate({
                      revealedMessageId: e.id,
                  })
                : i.mutate({
                      revealedMessageId: null,
                  });
    }
    u.A.commit(i),
        t.forEach((e) => {
            x.delete(e);
        });
}

function X(e) {
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
    (r = r.update(t, p.Td)), u.A.commit(r);
}

function $(e) {
    let t = e.messageId,
        n = e.channelId,
        r = u.A.get(n);
    if (null == r || !r.has(t)) return !1;
    (r = r.update(t, (t) => t.set("interactionData", e.interactionData))), u.A.commit(r);
}

function ee(e) {
    let { channelId: t } = e,
        n = u.A.getOrCreate(t);
    (n = n.loadComplete({
        newMessages: [],
        hasMoreAfter: !1,
        hasMoreBefore: !1,
    })),
        u.A.commit(n);
}

function et() {
    u.A.forEach((e) => {
        let { channelId: t } = e;
        null == v.A.getChannel(t) && u.A.clear(t);
    });
}

function en() {
    let e = !1;
    return (
        u.A.forEach((t) => {
            u.A.commit(
                t.reset(
                    t.map(
                        (t) => (
                            t.blocked !== N.A.isBlockedForMessage(t) &&
                                ((e = !0), (t = t.set("blocked", N.A.isBlockedForMessage(t)))),
                            t.ignored !== N.A.isIgnoredForMessage(t) &&
                                ((e = !0), (t = t.set("ignored", N.A.isIgnoredForMessage(t)))),
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
        r = u.A.getOrCreate(t);
    u.A.commit(
        r.mutate({
            revealedMessageId: n,
        }),
    );
}

function ei(e) {}

function ea(e) {}

function eo(e) {
    let { type: t, channelId: n, messageId: r, userId: i, emoji: a, reactionType: o } = e,
        s = u.A.get(n);
    if (null == s || !(0, E.vp)(e)) return !1;
    let l = O.default.getId() === i;
    (s = s.update(r, (n) =>
        "MESSAGE_REACTION_ADD" === t ? n.addReaction(a, l, e.colors, o) : n.removeReaction(a, l, o),
    )),
        u.A.commit(s);
}

function es(e) {
    let { channelId: t, messageId: n, reactions: r } = e,
        i = u.A.get(t);
    if (null == i) return !1;
    (i = i.update(n, (e) => {
        var t;
        return e.addReactionBatch(r, null == (t = P.default.getCurrentUser()) ? void 0 : t.id);
    })),
        u.A.commit(i);
}

function el(e) {
    let { type: t, messageData: n } = e,
        { message: r } = n,
        i = (0, d.cR)(n),
        a = r.channelId,
        s = u.A.getOrCreate(a);
    if (!s.has(i)) return !1;
    (s = s.update(i, (e) => {
        var n;
        return (
            (null == (n = e.embeds) ? void 0 : n.filter(_._).length) > 0 && (e = e.set("embeds", [])),
            "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, o.UI)(e.flags, D.pr7.EPHEMERAL))),
            e
        );
    })),
        u.A.commit(s);
}

function ec(e) {
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

function ed() {
    u.A.forEach((e) => {
        u.A.clear(e.channelId);
    }),
        x.clear();
}

function ef(e) {
    for (let [t, n] of b.default.entries(e.messages)) {
        let e = u.A.getOrCreate(t).addCachedMessages(n, !0);
        u.A.commit(e);
    }
}

function ep(e) {
    let t = u.A.getOrCreate(e.channelId);
    (e.shouldForceCommitMessages || t.cached || !t.ready) && u.A.commit(t.addCachedMessages(e.messages, e.stale));
}

function e_(e) {
    let { message: t } = e,
        n = P.default.getCurrentUser();
    null != t && null != t.author && null != n && t.author.id === n.id && (j = !0);
}
class eh extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(O.default, v.A, A.A, I.Ay, S.Ay, T.A, h.A, y.default, C.A, N.A, w.A, R.A, P.default),
            this.syncWith([h.A], () => {});
    }
    getMessages(e) {
        if (h.A.hasViewingRoles()) {
            let t = v.A.getChannel(e),
                n = null == t ? void 0 : t.getGuildId();
            if (h.A.isViewingRoles(n) && !C.A.can(D.xBc.VIEW_CHANNEL, t)) return new u.A(e);
        }
        return u.A.getOrCreate(e);
    }
    getMessage(e, t) {
        return u.A.getOrCreate(e).get(t);
    }
    getLastEditableMessage(e) {
        let t = P.default.getCurrentUser();
        return a()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => (0, g.A)(e, null == t ? void 0 : t.id));
    }
    getLastChatCommandMessage(e) {
        let t = P.default.getCurrentUser();
        return this.getMessages(e)
            .toArray()
            .reverse()
            .find((e) => {
                var n, r;
                return (
                    (null == (n = e.interaction) ? void 0 : n.type) === c.G4.APPLICATION_COMMAND &&
                    (null == (r = e.interactionData) ? void 0 : r.type) === c.kc.CHAT &&
                    e.interaction.user.id === (null == t ? void 0 : t.id)
                );
            });
    }
    getLastMessage(e) {
        return a()(this.getMessages(e).toArray()).reverse().get(0);
    }
    getLastNonCurrentUserMessage(e) {
        let t = P.default.getCurrentUser();
        return a()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => e.author.id !== (null == t ? void 0 : t.id));
    }
    jumpedMessageId(e) {
        let t = u.A.get(e);
        return null == t ? void 0 : t.jumpTargetId;
    }
    focusedMessageId(e) {
        let t = u.A.get(e);
        return null == t ? void 0 : t.focusTargetId;
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
        let t = P.default.getCurrentUser();
        return null != this.getMessages(e).findNewest((e) => e.author.id === (null == t ? void 0 : t.id));
    }
    hasCurrentUserSentMessageSinceAppStart() {
        return j;
    }
}
L(eh, "displayName", "MessageStore");
let em = new eh(l.h, {
    BACKGROUND_SYNC_CHANNEL_MESSAGES: U,
    CONNECTION_OPEN: k,
    OVERLAY_INITIALIZE: k,
    CACHE_LOADED: ef,
    LOAD_MESSAGES: G,
    LOAD_MESSAGES_SUCCESS: H,
    LOAD_MESSAGES_FAILURE: Y,
    LOAD_MESSAGES_SUCCESS_CACHED: B,
    LOCAL_MESSAGES_LOADED: ep,
    LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: $,
    TRUNCATE_MESSAGES: F,
    CLEAR_MESSAGES: V,
    MESSAGE_CREATE: z,
    MESSAGE_SEND_FAILED: q,
    MESSAGE_SEND_FAILED_AUTOMOD: el,
    MESSAGE_EDIT_FAILED_AUTOMOD: el,
    MESSAGE_UPDATE: X,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: J,
    MESSAGE_DELETE: Z,
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
    UPLOAD_START: W,
    UPLOAD_FAIL: K,
    LOCAL_MESSAGE_CREATE: e_,
});
