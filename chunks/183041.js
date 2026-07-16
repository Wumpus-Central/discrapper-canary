"use strict";
n.d(t, { MX: () => v, Ay: () => J });
var i = n(515029),
    r = n.n(i),
    a = n(226782),
    s = n.n(a),
    l = n(731738),
    o = n(228366),
    d = n(439372),
    c = n(320095),
    u = n(807393),
    _ = n(9842),
    E = n(280450),
    A = n(761640),
    h = n(734057),
    I = n(232835),
    f = n(309010),
    p = n(967198),
    T = n(935208);
function m(e) {
    return (
        (null != e.attachments && e.attachments.length > 0) ||
        (null != e.embeds && e.embeds.length > 0) ||
        (null != e.components && e.components.length > 0)
    );
}
function g(e) {
    if (null == e) return !1;
    let t = "messageSnapshots" in e ? e.messageSnapshots : e.message_snapshots;
    return m(e) || (null != t && t?.some((e) => m(e.message)));
}
var S = n(135598),
    N = n(930125),
    C = n(390248),
    R = n(457699),
    O = n(811602),
    L = n(282108),
    y = n(652215),
    D = n(355097);
let v = 3e3,
    b = {};
function M(e) {
    return `${e.channel_id}:${e.id}`;
}
function P() {
    Object.values(b).forEach((e) => {
        let { timeout: t } = e;
        clearTimeout(t);
    }),
        (b = {});
}
function U(e, t) {
    if (null == e.id || null == e.channel_id) return !1;
    let n = M(e);
    if (null != b[n]) {
        let { timeout: i, setAt: r } = b[n];
        return (
            (function (e, t, n) {
                if (t === C.VL.UPDATE) {
                    let t = e.attachments ?? [],
                        n = e.embeds ?? [],
                        i = t.filter((e) => (0, L.gh)(O.kn.EXPLICIT, { type: N.D.Attachment, media: e })),
                        r = n.filter((e) => (0, L.gh)(O.kn.EXPLICIT, { type: N.D.Embed, media: e }));
                    (0, C.Kl)({
                        messageId: e.id,
                        channelId: e.channel_id,
                        numOfAttachments: t.length,
                        numOfEmbeds: n.length,
                        numOfExplicitAttachments: i.length,
                        numOfExplicitEmbeds: r.length,
                    });
                }
                (0, C.rA)(n, t);
            })(e, t, r),
            clearTimeout(i),
            delete b[n],
            !0
        );
    }
    return !1;
}
function w(e, t) {
    if (0 !== e.length) {
        if (t) return void (0, S.jd)(e);
        (0, S.j1)(
            e[0].channel_id,
            e.map((e) => e.id),
        );
    }
}
function G(e) {
    return null == b[M(e)];
}
function x(e, t) {
    let { forceBatchScan: n = !1, jitter: i = !1 } = t ?? {},
        r = t?.isMessageUpdate
            ? e.filter((e) => (0, L.s9)(e) && (0, L.mS)(e)).filter(G)
            : e.filter((e) => (0, L.s9)(e)).filter(G);
    r.forEach((e) => {
        let t = M(e);
        null == b[t] &&
            (u.A.increment({ name: l.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE }),
            (b[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    !(function (e) {
                        if (U(e, C.VL.TIMEOUT)) {
                            let t = I.A.getMessage(e.channel_id, e.id);
                            if (null != t) {
                                let { attachmentIds: n, embedIds: i } = (0, L.M)(t);
                                (0, C.gm)({ channelId: e.channel_id, messageId: e.id, attachmentIds: n, embedIds: i });
                            }
                            o.h.dispatch({
                                type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT",
                                messageId: e.id,
                                channelId: e.channel_id,
                            });
                        }
                    })(e);
                }, v),
            }));
    });
    let a = n || new Set(r.map((e) => e.channel_id)).size > 1;
    i
        ? setTimeout(() => {
              w(
                  r.filter((e) => null != b[M(e)]),
                  a,
              );
          }, 800 * Math.random())
        : w(r, a);
}
function k(e) {
    let t = {},
        n = {};
    return (
        e.forEach((e) => {
            null == t[e.channel_id] &&
                (t[e.channel_id] = {
                    numOfAttachments: 0,
                    numOfAttachmentsPendingScan: 0,
                    numOfEmbeds: 0,
                    numOfEmbedsPendingScan: 0,
                }),
                null == n[e.id] &&
                    (n[e.id] = {
                        channelId: e.channel_id,
                        numOfAttachments: 0,
                        numOfSelfHarmAttachments: 0,
                        numOfGoreAttachments: 0,
                        numOfExplicitAttachments: 0,
                        numOfEmbeds: 0,
                        numOfSelfHarmEmbeds: 0,
                        numOfGoreEmbeds: 0,
                        numOfExplicitEmbeds: 0,
                    });
            let i = e.attachments?.length ?? 0,
                r = e.embeds?.length ?? 0,
                { attachmentIds: a, embedIds: s } = (0, L.M)(e),
                l = t[e.channel_id];
            (l.numOfAttachments += i),
                (l.numOfEmbeds += r),
                (l.numOfAttachmentsPendingScan += a.length),
                (l.numOfEmbedsPendingScan += s.length);
            let o = n[e.id];
            (o.numOfAttachments += i),
                (o.numOfEmbeds += r),
                (o.numOfExplicitAttachments =
                    e.attachments?.filter((e) => (0, L.gh)(O.kn.EXPLICIT, { type: N.D.Attachment, media: e })).length ??
                    0),
                (o.numOfExplicitEmbeds =
                    e.embeds?.filter((e) => (0, L.gh)(O.kn.EXPLICIT, { type: N.D.Embed, media: e })).length ?? 0),
                (o.numOfGoreAttachments =
                    e.attachments?.filter((e) => (0, L.gh)(O.kn.GORE, { type: N.D.Attachment, media: e })).length ?? 0),
                (o.numOfGoreEmbeds =
                    e.embeds?.filter((e) => (0, L.gh)(O.kn.GORE, { type: N.D.Embed, media: e })).length ?? 0),
                (o.numOfSelfHarmAttachments =
                    e.attachments?.filter((e) => (0, L.gh)(O.kn.SELF_HARM, { type: N.D.Attachment, media: e }))
                        .length ?? 0),
                (o.numOfSelfHarmEmbeds =
                    e.embeds?.filter((e) => (0, L.gh)(O.kn.SELF_HARM, { type: N.D.Embed, media: e })).length ?? 0);
        }),
        { channelLookup: t, messageLookup: n }
    );
}
function F(e, t) {
    let n,
        i,
        r,
        a,
        l,
        {
            messagesPendingScan: o,
            attributesByChannelId: d,
            attributesByMessageId: c,
        } = ((n = e.filter((e) => {
            let t = g(e),
                n = 0 !== (0, L.Fg)(e);
            return t && n;
        })),
        (i = e
            .map((e) => {
                if (
                    null != e &&
                    "referenced_message" in e &&
                    null != e.referenced_message &&
                    g(e.referenced_message) &&
                    0 !== (0, L.Fg)(e.referenced_message)
                )
                    return e.referenced_message;
            })
            .filter(function (e) {
                return null != e;
            })).length > 0 && (n = [...n, ...i]),
        (a = (r = s()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id)).filter((e) => (0, L.mS)(e))),
        {
            messagesPendingScan: a,
            attributesByMessageId: (l = k(r)).messageLookup,
            attributesByChannelId: l.channelLookup,
        });
    return (
        T.default.entries(d).forEach((e) => {
            let [t, n] = e;
            (0, C.zt)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan,
            });
        }),
        T.default.entries(c).forEach((e) => {
            let [t, n] = e;
            (0, C.bz)({
                messageId: t,
                channelId: n.channelId,
                numOfAttachments: n.numOfAttachments,
                numOfGoreAttachments: n.numOfGoreAttachments,
                numOfExplicitAttachments: n.numOfExplicitAttachments,
                numOfSelfHarmAttachments: n.numOfSelfHarmAttachments,
                numOfEmbeds: n.numOfEmbeds,
                numOfGoreEmbeds: n.numOfGoreEmbeds,
                numOfExplicitEmbeds: n.numOfExplicitEmbeds,
                numOfSelfHarmEmbeds: n.numOfSelfHarmEmbeds,
            });
        }),
        o.length > 0 && (x(o, t), !0)
    );
}
function V(e) {
    let { message: t } = e;
    if (
        null == t.channel_id ||
        null == t.id ||
        (0, L.nx)(t).authorId === E.default.getId() ||
        (null == t.embeds && null == t.attachments && !(0, C.aY)(t)) ||
        (t.embeds?.length === 0 && t.attachments?.length === 0 && !(0, C.aY)(t))
    )
        return !1;
    if (!(0, L.mS)(t)) {
        let e =
            I.A.getMessage(t.channel_id, t.id) ??
            R.A.getMessage(t.id, t.channel_id) ??
            _.A.getMessage(t.channel_id, t.id)?.message;
        null == e || (0, L.mS)((0, c.IU)(e, t)) || U(e, C.VL.UPDATE);
    }
    let n = f.Ay.getChannelId(),
        i = A.Ay.getCurrentSidebarChannelId(n);
    if (t.channel_id !== n && t.channel_id !== i) return !1;
    let r = I.A.getMessage(t.channel_id, t.id);
    return null != r && F([r], { isMessageUpdate: !0 });
}
function B(e) {
    let { channelId: t, message: n, optimistic: i, isPushNotification: r } = e;
    if (i || r || null == t || (0, L.nx)(n).authorId === E.default.getId()) return !1;
    let a = f.Ay.getChannelId(),
        s = A.Ay.getCurrentSidebarChannelId(a),
        l = t === a || t === s,
        o = h.A.getChannel(t);
    if (!l) return !1;
    let d = o?.isPrivate() ?? !0,
        c = o?.memberCount == null || o?.memberCount > 100;
    return F([n], { jitter: d && c });
}
function H(e) {
    let { channelId: t, messages: n } = e;
    if (null == t || null == n) return !1;
    let i = f.Ay.getChannelId(),
        r = A.Ay.getCurrentSidebarChannelId(i);
    return (t === i || t === r) && F(n);
}
function j(e) {
    let { data: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            let { messages: t } = e,
                i = r()(t);
            n = F(s()(i, (e, t) => e.id === t.id && e.channel_id === t.channel_id)) || n;
        }),
        n
    );
}
function W(e) {
    let { pins: t } = e;
    return F(
        t.map((e) => {
            let { message: t } = e;
            return t;
        }),
    );
}
function Y(e) {
    let { guildId: t, threads: n } = e;
    return null != n && p.A.getGuildId() === t && F(T.default.keys(n).map((e) => n[e].first_message));
}
function K(e) {
    let { guildId: t, firstMessages: n } = e;
    return null != n && p.A.getGuildId() === t && F(n, { forceBatchScan: !0 });
}
function $(e) {
    let { channelId: t } = e;
    return null != t && X(t);
}
function z(e) {
    let { channelId: t } = e;
    return null != t && t === f.Ay.getChannelId() && X(t);
}
function q(e) {
    let { settings: t, local: n } = e;
    if (!n || t.type !== D.oD.PRELOADED_USER_SETTINGS) return !1;
    let i = f.Ay.getChannelId();
    return null != i && X(i);
}
function Z(e) {
    let { channelId: t, chatOpen: n } = e;
    return !!n && X(t);
}
function X(e) {
    let t = I.A.getMessages(e);
    return (
        0 !== t.length &&
        (function (e) {
            let t,
                n,
                i,
                r,
                a,
                {
                    messagesPendingScan: l,
                    attributesByChannelId: o,
                    attributesByMessageId: d,
                } = ((t = e.filter((e) => g(e) && 0 !== (0, L.Fg)(e))),
                (n = e
                    .map((e) => {
                        if (y.sl8.has(e.type) && null != e.messageReference) {
                            let t = _.A.getMessageByReference(e.messageReference);
                            if (
                                t.state === _.a.LOADED &&
                                null != t.message &&
                                g(t.message) &&
                                0 !== (0, L.Fg)(t.message)
                            )
                                return t.message;
                        }
                    })
                    .filter(function (e) {
                        return null != e;
                    })).length > 0 && (t = [...t, ...n]),
                (r = (i = s()(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id)).filter((e) =>
                    (0, L.mS)(e),
                )),
                {
                    messagesPendingScan: r,
                    attributesByChannelId: (a = k(i)).channelLookup,
                    attributesByMessageId: a.messageLookup,
                });
            return (
                T.default.entries(o).forEach((e) => {
                    let [t, n] = e;
                    (0, C.zt)({
                        channelId: t,
                        numOfAttachments: n.numOfAttachments,
                        numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                        numOfEmbeds: n.numOfEmbeds,
                        numOfEmbedsPendingScan: n.numOfEmbedsPendingScan,
                    });
                }),
                T.default.entries(d).forEach((e) => {
                    let [t, n] = e;
                    (0, C.bz)({
                        messageId: t,
                        channelId: n.channelId,
                        numOfAttachments: n.numOfAttachments,
                        numOfGoreAttachments: n.numOfGoreAttachments,
                        numOfSelfHarmAttachments: n.numOfSelfHarmAttachments,
                        numOfExplicitAttachments: n.numOfExplicitAttachments,
                        numOfEmbeds: n.numOfEmbeds,
                        numOfGoreEmbeds: n.numOfGoreEmbeds,
                        numOfExplicitEmbeds: n.numOfExplicitEmbeds,
                        numOfSelfHarmEmbeds: n.numOfSelfHarmEmbeds,
                    });
                }),
                l.length > 0 && (x(l), !0)
            );
        })(t)
    );
}
class Q extends d.A {
    actions = {
        LOAD_MESSAGES_SUCCESS: H,
        LOAD_FORUM_POSTS: Y,
        LOAD_THREADS_SUCCESS: K,
        LOAD_ARCHIVED_THREADS_SUCCESS: K,
        SIDEBAR_VIEW_CHANNEL: $,
        MESSAGE_CREATE: B,
        MESSAGE_UPDATE: V,
        LOGOUT: P,
        SEARCH_MESSAGES_SUCCESS: j,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: j,
        CHANNEL_SELECT: z,
        LOAD_PINNED_MESSAGES_SUCCESS: W,
        USER_SETTINGS_PROTO_UPDATE: q,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: Z,
    };
}
let J = new Q();
