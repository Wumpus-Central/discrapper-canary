"use strict";
n.d(t, { Ay: () => J, MX: () => b });
var r = n(294845),
    i = n.n(r),
    s = n(543222),
    a = n.n(s),
    o = n(731738),
    l = n(73153),
    u = n(439372),
    d = n(141468),
    c = n(831062),
    _ = n(9842),
    f = n(961350),
    E = n(761640),
    h = n(734057),
    p = n(320501),
    m = n(309010),
    g = n(967198),
    A = n(661191),
    I = n(789846),
    T = n(135598),
    S = n(930125),
    y = n(390248),
    N = n(457699),
    O = n(811602),
    R = n(282108),
    v = n(652215),
    C = n(355097);
let b = 3e3,
    D = {};
function L(e) {
    return `${e.channel_id}:${e.id}`;
}
function w() {
    Object.values(D).forEach((e) => {
        let { timeout: t } = e;
        clearTimeout(t);
    }),
        (D = {});
}
function M(e, t) {
    if (null == e.id || null == e.channel_id) return !1;
    let n = L(e);
    if (null != D[n]) {
        let { timeout: r, setAt: i } = D[n];
        return (
            (function (e, t, n) {
                if (t === y.VL.UPDATE) {
                    let t = e.attachments ?? [],
                        n = e.embeds ?? [],
                        r = t.filter((e) => (0, R.gh)(O.kn.EXPLICIT, { type: S.D.Attachment, media: e })),
                        i = n.filter((e) => (0, R.gh)(O.kn.EXPLICIT, { type: S.D.Embed, media: e }));
                    (0, y.Kl)({
                        messageId: e.id,
                        channelId: e.channel_id,
                        numOfAttachments: t.length,
                        numOfEmbeds: n.length,
                        numOfExplicitAttachments: r.length,
                        numOfExplicitEmbeds: i.length,
                    });
                }
                (0, y.rA)(n, t);
            })(e, t, i),
            clearTimeout(r),
            delete D[n],
            !0
        );
    }
    return !1;
}
let P = (e, t) => {
    if (0 !== e.length) {
        if (t) return void (0, T.jd)(e);
        (0, T.j1)(
            e[0].channel_id,
            e.map((e) => e.id),
        );
    }
};
function U(e) {
    return null == D[L(e)];
}
function k(e, t) {
    let { forceBatchScan: n = !1, jitter: r = !1 } = t ?? {},
        i = t?.isMessageUpdate
            ? e.filter((e) => (0, R.s9)(e) && (0, R.mS)(e)).filter(U)
            : e.filter((e) => (0, R.s9)(e)).filter(U);
    i.forEach((e) => {
        let t = L(e);
        null == D[t] &&
            (c.A.increment({ name: o.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE }),
            (D[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    !(function (e) {
                        if (M(e, y.VL.TIMEOUT)) {
                            let t = p.A.getMessage(e.channel_id, e.id);
                            if (null != t) {
                                let { attachmentIds: n, embedIds: r } = (0, R.M)(t);
                                (0, y.gm)({ channelId: e.channel_id, messageId: e.id, attachmentIds: n, embedIds: r });
                            }
                            l.h.dispatch({
                                type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT",
                                messageId: e.id,
                                channelId: e.channel_id,
                            });
                        }
                    })(e);
                }, b),
            }));
    });
    let s = n || new Set(i.map((e) => e.channel_id)).size > 1;
    r
        ? setTimeout(() => {
              P(
                  i.filter((e) => null != D[L(e)]),
                  s,
              );
          }, 800 * Math.random())
        : P(i, s);
}
function x(e) {
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
            let r = e.attachments?.length ?? 0,
                i = e.embeds?.length ?? 0,
                { attachmentIds: s, embedIds: a } = (0, R.M)(e),
                o = t[e.channel_id];
            (o.numOfAttachments += r),
                (o.numOfEmbeds += i),
                (o.numOfAttachmentsPendingScan += s.length),
                (o.numOfEmbedsPendingScan += a.length);
            let l = n[e.id];
            (l.numOfAttachments += r),
                (l.numOfEmbeds += i),
                (l.numOfExplicitAttachments =
                    e.attachments?.filter((e) => (0, R.gh)(O.kn.EXPLICIT, { type: S.D.Attachment, media: e })).length ??
                    0),
                (l.numOfExplicitEmbeds =
                    e.embeds?.filter((e) => (0, R.gh)(O.kn.EXPLICIT, { type: S.D.Embed, media: e })).length ?? 0),
                (l.numOfGoreAttachments =
                    e.attachments?.filter((e) => (0, R.gh)(O.kn.GORE, { type: S.D.Attachment, media: e })).length ?? 0),
                (l.numOfGoreEmbeds =
                    e.embeds?.filter((e) => (0, R.gh)(O.kn.GORE, { type: S.D.Embed, media: e })).length ?? 0),
                (l.numOfSelfHarmAttachments =
                    e.attachments?.filter((e) => (0, R.gh)(O.kn.SELF_HARM, { type: S.D.Attachment, media: e }))
                        .length ?? 0),
                (l.numOfSelfHarmEmbeds =
                    e.embeds?.filter((e) => (0, R.gh)(O.kn.SELF_HARM, { type: S.D.Embed, media: e })).length ?? 0);
        }),
        { channelLookup: t, messageLookup: n }
    );
}
function G(e, t) {
    let n,
        r,
        i,
        s,
        o,
        {
            messagesPendingScan: l,
            attributesByChannelId: u,
            attributesByMessageId: d,
        } = ((n = e.filter((e) => {
            let t = (0, I.b)(e),
                n = 0 !== (0, R.Fg)(e);
            return t && n;
        })),
        (r = e
            .map((e) => {
                if (
                    null != e &&
                    "referenced_message" in e &&
                    null != e.referenced_message &&
                    (0, I.b)(e.referenced_message) &&
                    0 !== (0, R.Fg)(e.referenced_message)
                )
                    return e.referenced_message;
            })
            .filter(function (e) {
                return null != e;
            })).length > 0 && (n = [...n, ...r]),
        (s = (i = a()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id)).filter((e) => (0, R.mS)(e))),
        {
            messagesPendingScan: s,
            attributesByMessageId: (o = x(i)).messageLookup,
            attributesByChannelId: o.channelLookup,
        });
    return (
        A.default.entries(u).forEach((e) => {
            let [t, n] = e;
            (0, y.zt)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan,
            });
        }),
        A.default.entries(d).forEach((e) => {
            let [t, n] = e;
            (0, y.bz)({
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
        l.length > 0 && (k(l, t), !0)
    );
}
function V(e) {
    let { message: t } = e;
    if (
        null == t.channel_id ||
        null == t.id ||
        (0, R.nx)(t).authorId === f.default.getId() ||
        (null == t.embeds && null == t.attachments && !(0, y.aY)(t)) ||
        (t.embeds?.length === 0 && t.attachments?.length === 0 && !(0, y.aY)(t))
    )
        return !1;
    if (!(0, R.mS)(t)) {
        let e =
            p.A.getMessage(t.channel_id, t.id) ??
            N.A.getMessage(t.id, t.channel_id) ??
            _.A.getMessage(t.channel_id, t.id)?.message;
        null == e || (0, R.mS)((0, d.IU)(e, t)) || M(e, y.VL.UPDATE);
    }
    let n = m.A.getChannelId(),
        r = E.Ay.getCurrentSidebarChannelId(n);
    if (t.channel_id !== n && t.channel_id !== r) return !1;
    let i = p.A.getMessage(t.channel_id, t.id);
    return null != i && G([i], { isMessageUpdate: !0 });
}
function F(e) {
    let { channelId: t, message: n, optimistic: r, isPushNotification: i } = e;
    if (r || i || null == t || (0, R.nx)(n).authorId === f.default.getId()) return !1;
    let s = m.A.getChannelId(),
        a = E.Ay.getCurrentSidebarChannelId(s),
        o = t === s || t === a,
        l = h.A.getChannel(t);
    if (!o) return !1;
    let u = l?.isPrivate() ?? !0,
        d = l?.memberCount == null || l?.memberCount > 100;
    return G([n], { jitter: u && d });
}
function B(e) {
    let { channelId: t, messages: n } = e;
    if (null == t || null == n) return !1;
    let r = m.A.getChannelId(),
        i = E.Ay.getCurrentSidebarChannelId(r);
    return (t === r || t === i) && G(n);
}
function H(e) {
    let { data: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            let { messages: t } = e,
                r = i()(t);
            n = G(a()(r, (e, t) => e.id === t.id && e.channel_id === t.channel_id)) || n;
        }),
        n
    );
}
function Y(e) {
    let { pins: t } = e;
    return G(
        t.map((e) => {
            let { message: t } = e;
            return t;
        }),
    );
}
function W(e) {
    let { guildId: t, threads: n } = e;
    return null != n && g.A.getGuildId() === t && G(A.default.keys(n).map((e) => n[e].first_message));
}
function j(e) {
    let { guildId: t, firstMessages: n } = e;
    return null != n && g.A.getGuildId() === t && G(n, { forceBatchScan: !0 });
}
function K(e) {
    let { channelId: t } = e;
    return null != t && X(t);
}
function $(e) {
    let { channelId: t } = e;
    return null != t && t === m.A.getChannelId() && X(t);
}
function z(e) {
    let { settings: t, local: n } = e;
    if (!n || t.type !== C.oD.PRELOADED_USER_SETTINGS) return !1;
    let r = m.A.getChannelId();
    return null != r && X(r);
}
function q(e) {
    let { channelId: t, chatOpen: n } = e;
    return !!n && X(t);
}
function X(e) {
    let t = p.A.getMessages(e);
    return (
        0 !== t.length &&
        (function (e) {
            let t,
                n,
                r,
                i,
                s,
                {
                    messagesPendingScan: o,
                    attributesByChannelId: l,
                    attributesByMessageId: u,
                } = ((t = e.filter((e) => (0, I.b)(e) && 0 !== (0, R.Fg)(e))),
                (n = e
                    .map((e) => {
                        if (v.sl8.has(e.type) && null != e.messageReference) {
                            let t = _.A.getMessageByReference(e.messageReference);
                            if (
                                t.state === _.a.LOADED &&
                                null != t.message &&
                                (0, I.b)(t.message) &&
                                0 !== (0, R.Fg)(t.message)
                            )
                                return t.message;
                        }
                    })
                    .filter(function (e) {
                        return null != e;
                    })).length > 0 && (t = [...t, ...n]),
                (i = (r = a()(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id)).filter((e) =>
                    (0, R.mS)(e),
                )),
                {
                    messagesPendingScan: i,
                    attributesByChannelId: (s = x(r)).channelLookup,
                    attributesByMessageId: s.messageLookup,
                });
            return (
                A.default.entries(l).forEach((e) => {
                    let [t, n] = e;
                    (0, y.zt)({
                        channelId: t,
                        numOfAttachments: n.numOfAttachments,
                        numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                        numOfEmbeds: n.numOfEmbeds,
                        numOfEmbedsPendingScan: n.numOfEmbedsPendingScan,
                    });
                }),
                A.default.entries(u).forEach((e) => {
                    let [t, n] = e;
                    (0, y.bz)({
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
                o.length > 0 && (k(o), !0)
            );
        })(t)
    );
}
class Q extends u.A {
    actions = {
        LOAD_MESSAGES_SUCCESS: B,
        LOAD_FORUM_POSTS: W,
        LOAD_THREADS_SUCCESS: j,
        LOAD_ARCHIVED_THREADS_SUCCESS: j,
        SIDEBAR_VIEW_CHANNEL: K,
        MESSAGE_CREATE: F,
        MESSAGE_UPDATE: V,
        LOGOUT: w,
        SEARCH_MESSAGES_SUCCESS: H,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: H,
        CHANNEL_SELECT: $,
        LOAD_PINNED_MESSAGES_SUCCESS: Y,
        USER_SETTINGS_PROTO_UPDATE: z,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: q,
    };
}
let J = new Q();
