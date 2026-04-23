"use strict";
n.d(t, { MX: () => L, Ay: () => J });
var i = n(294845),
    r = n.n(i),
    s = n(543222),
    a = n.n(s),
    o = n(731738),
    l = n(228366),
    d = n(439372),
    _ = n(320095),
    u = n(831062),
    c = n(9842),
    E = n(495544),
    h = n(761640),
    m = n(734057),
    f = n(232835),
    g = n(309010),
    p = n(967198),
    A = n(935208);
function I(e) {
    return (
        (null != e.attachments && e.attachments.length > 0) ||
        (null != e.embeds && e.embeds.length > 0) ||
        (null != e.components && e.components.length > 0)
    );
}
function T(e) {
    if (null == e) return !1;
    let t = "messageSnapshots" in e ? e.messageSnapshots : e.message_snapshots;
    return I(e) || (null != t && t?.some((e) => I(e.message)));
}
var S = n(135598),
    N = n(930125),
    C = n(390248),
    R = n(457699),
    O = n(811602),
    y = n(282108),
    v = n(652215),
    D = n(355097);
let L = 3e3,
    b = {};
function w(e) {
    return `${e.channel_id}:${e.id}`;
}
function P() {
    Object.values(b).forEach((e) => {
        let { timeout: t } = e;
        clearTimeout(t);
    }),
        (b = {});
}
function k(e, t) {
    if (null == e.id || null == e.channel_id) return !1;
    let n = w(e);
    if (null != b[n]) {
        let { timeout: i, setAt: r } = b[n];
        return (
            (function (e, t, n) {
                if (t === C.VL.UPDATE) {
                    let t = e.attachments ?? [],
                        n = e.embeds ?? [],
                        i = t.filter((e) => (0, y.gh)(O.kn.EXPLICIT, { type: N.D.Attachment, media: e })),
                        r = n.filter((e) => (0, y.gh)(O.kn.EXPLICIT, { type: N.D.Embed, media: e }));
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
let M = (e, t) => {
    if (0 !== e.length) {
        if (t) return void (0, S.jd)(e);
        (0, S.j1)(
            e[0].channel_id,
            e.map((e) => e.id),
        );
    }
};
function U(e) {
    return null == b[w(e)];
}
function x(e, t) {
    let { forceBatchScan: n = !1, jitter: i = !1 } = t ?? {},
        r = t?.isMessageUpdate
            ? e.filter((e) => (0, y.s9)(e) && (0, y.mS)(e)).filter(U)
            : e.filter((e) => (0, y.s9)(e)).filter(U);
    r.forEach((e) => {
        let t = w(e);
        null == b[t] &&
            (u.A.increment({ name: o.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE }),
            (b[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    !(function (e) {
                        if (k(e, C.VL.TIMEOUT)) {
                            let t = f.A.getMessage(e.channel_id, e.id);
                            if (null != t) {
                                let { attachmentIds: n, embedIds: i } = (0, y.M)(t);
                                (0, C.gm)({ channelId: e.channel_id, messageId: e.id, attachmentIds: n, embedIds: i });
                            }
                            l.h.dispatch({
                                type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT",
                                messageId: e.id,
                                channelId: e.channel_id,
                            });
                        }
                    })(e);
                }, L),
            }));
    });
    let s = n || new Set(r.map((e) => e.channel_id)).size > 1;
    i
        ? setTimeout(() => {
              M(
                  r.filter((e) => null != b[w(e)]),
                  s,
              );
          }, 800 * Math.random())
        : M(r, s);
}
function G(e) {
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
                { attachmentIds: s, embedIds: a } = (0, y.M)(e),
                o = t[e.channel_id];
            (o.numOfAttachments += i),
                (o.numOfEmbeds += r),
                (o.numOfAttachmentsPendingScan += s.length),
                (o.numOfEmbedsPendingScan += a.length);
            let l = n[e.id];
            (l.numOfAttachments += i),
                (l.numOfEmbeds += r),
                (l.numOfExplicitAttachments =
                    e.attachments?.filter((e) => (0, y.gh)(O.kn.EXPLICIT, { type: N.D.Attachment, media: e })).length ??
                    0),
                (l.numOfExplicitEmbeds =
                    e.embeds?.filter((e) => (0, y.gh)(O.kn.EXPLICIT, { type: N.D.Embed, media: e })).length ?? 0),
                (l.numOfGoreAttachments =
                    e.attachments?.filter((e) => (0, y.gh)(O.kn.GORE, { type: N.D.Attachment, media: e })).length ?? 0),
                (l.numOfGoreEmbeds =
                    e.embeds?.filter((e) => (0, y.gh)(O.kn.GORE, { type: N.D.Embed, media: e })).length ?? 0),
                (l.numOfSelfHarmAttachments =
                    e.attachments?.filter((e) => (0, y.gh)(O.kn.SELF_HARM, { type: N.D.Attachment, media: e }))
                        .length ?? 0),
                (l.numOfSelfHarmEmbeds =
                    e.embeds?.filter((e) => (0, y.gh)(O.kn.SELF_HARM, { type: N.D.Embed, media: e })).length ?? 0);
        }),
        { channelLookup: t, messageLookup: n }
    );
}
function V(e, t) {
    let n,
        i,
        r,
        s,
        o,
        {
            messagesPendingScan: l,
            attributesByChannelId: d,
            attributesByMessageId: _,
        } = ((n = e.filter((e) => {
            let t = T(e),
                n = 0 !== (0, y.Fg)(e);
            return t && n;
        })),
        (i = e
            .map((e) => {
                if (
                    null != e &&
                    "referenced_message" in e &&
                    null != e.referenced_message &&
                    T(e.referenced_message) &&
                    0 !== (0, y.Fg)(e.referenced_message)
                )
                    return e.referenced_message;
            })
            .filter(function (e) {
                return null != e;
            })).length > 0 && (n = [...n, ...i]),
        (s = (r = a()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id)).filter((e) => (0, y.mS)(e))),
        {
            messagesPendingScan: s,
            attributesByMessageId: (o = G(r)).messageLookup,
            attributesByChannelId: o.channelLookup,
        });
    return (
        A.default.entries(d).forEach((e) => {
            let [t, n] = e;
            (0, C.zt)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan,
            });
        }),
        A.default.entries(_).forEach((e) => {
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
        l.length > 0 && (x(l, t), !0)
    );
}
function F(e) {
    let { message: t } = e;
    if (
        null == t.channel_id ||
        null == t.id ||
        (0, y.nx)(t).authorId === E.default.getId() ||
        (null == t.embeds && null == t.attachments && !(0, C.aY)(t)) ||
        (t.embeds?.length === 0 && t.attachments?.length === 0 && !(0, C.aY)(t))
    )
        return !1;
    if (!(0, y.mS)(t)) {
        let e =
            f.A.getMessage(t.channel_id, t.id) ??
            R.A.getMessage(t.id, t.channel_id) ??
            c.A.getMessage(t.channel_id, t.id)?.message;
        null == e || (0, y.mS)((0, _.IU)(e, t)) || k(e, C.VL.UPDATE);
    }
    let n = g.A.getChannelId(),
        i = h.Ay.getCurrentSidebarChannelId(n);
    if (t.channel_id !== n && t.channel_id !== i) return !1;
    let r = f.A.getMessage(t.channel_id, t.id);
    return null != r && V([r], { isMessageUpdate: !0 });
}
function B(e) {
    let { channelId: t, message: n, optimistic: i, isPushNotification: r } = e;
    if (i || r || null == t || (0, y.nx)(n).authorId === E.default.getId()) return !1;
    let s = g.A.getChannelId(),
        a = h.Ay.getCurrentSidebarChannelId(s),
        o = t === s || t === a,
        l = m.A.getChannel(t);
    if (!o) return !1;
    let d = l?.isPrivate() ?? !0,
        _ = l?.memberCount == null || l?.memberCount > 100;
    return V([n], { jitter: d && _ });
}
function H(e) {
    let { channelId: t, messages: n } = e;
    if (null == t || null == n) return !1;
    let i = g.A.getChannelId(),
        r = h.Ay.getCurrentSidebarChannelId(i);
    return (t === i || t === r) && V(n);
}
function j(e) {
    let { data: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            let { messages: t } = e,
                i = r()(t);
            n = V(a()(i, (e, t) => e.id === t.id && e.channel_id === t.channel_id)) || n;
        }),
        n
    );
}
function W(e) {
    let { pins: t } = e;
    return V(
        t.map((e) => {
            let { message: t } = e;
            return t;
        }),
    );
}
function Y(e) {
    let { guildId: t, threads: n } = e;
    return null != n && p.A.getGuildId() === t && V(A.default.keys(n).map((e) => n[e].first_message));
}
function K(e) {
    let { guildId: t, firstMessages: n } = e;
    return null != n && p.A.getGuildId() === t && V(n, { forceBatchScan: !0 });
}
function z(e) {
    let { channelId: t } = e;
    return null != t && Z(t);
}
function $(e) {
    let { channelId: t } = e;
    return null != t && t === g.A.getChannelId() && Z(t);
}
function q(e) {
    let { settings: t, local: n } = e;
    if (!n || t.type !== D.oD.PRELOADED_USER_SETTINGS) return !1;
    let i = g.A.getChannelId();
    return null != i && Z(i);
}
function X(e) {
    let { channelId: t, chatOpen: n } = e;
    return !!n && Z(t);
}
function Z(e) {
    let t = f.A.getMessages(e);
    return (
        0 !== t.length &&
        (function (e) {
            let t,
                n,
                i,
                r,
                s,
                {
                    messagesPendingScan: o,
                    attributesByChannelId: l,
                    attributesByMessageId: d,
                } = ((t = e.filter((e) => T(e) && 0 !== (0, y.Fg)(e))),
                (n = e
                    .map((e) => {
                        if (v.sl8.has(e.type) && null != e.messageReference) {
                            let t = c.A.getMessageByReference(e.messageReference);
                            if (
                                t.state === c.a.LOADED &&
                                null != t.message &&
                                T(t.message) &&
                                0 !== (0, y.Fg)(t.message)
                            )
                                return t.message;
                        }
                    })
                    .filter(function (e) {
                        return null != e;
                    })).length > 0 && (t = [...t, ...n]),
                (r = (i = a()(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id)).filter((e) =>
                    (0, y.mS)(e),
                )),
                {
                    messagesPendingScan: r,
                    attributesByChannelId: (s = G(i)).channelLookup,
                    attributesByMessageId: s.messageLookup,
                });
            return (
                A.default.entries(l).forEach((e) => {
                    let [t, n] = e;
                    (0, C.zt)({
                        channelId: t,
                        numOfAttachments: n.numOfAttachments,
                        numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                        numOfEmbeds: n.numOfEmbeds,
                        numOfEmbedsPendingScan: n.numOfEmbedsPendingScan,
                    });
                }),
                A.default.entries(d).forEach((e) => {
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
                o.length > 0 && (x(o), !0)
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
        SIDEBAR_VIEW_CHANNEL: z,
        MESSAGE_CREATE: B,
        MESSAGE_UPDATE: F,
        LOGOUT: P,
        SEARCH_MESSAGES_SUCCESS: j,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: j,
        CHANNEL_SELECT: $,
        LOAD_PINNED_MESSAGES_SUCCESS: W,
        USER_SETTINGS_PROTO_UPDATE: q,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: X,
    };
}
let J = new Q();
