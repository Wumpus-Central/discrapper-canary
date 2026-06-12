"use strict";
n.d(t, { MX: () => D, Ay: () => J });
var i = n(294845),
    r = n.n(i),
    s = n(543222),
    a = n.n(s),
    o = n(731738),
    l = n(228366),
    u = n(439372),
    c = n(320095),
    d = n(807393),
    _ = n(9842),
    h = n(495544),
    f = n(761640),
    p = n(734057),
    E = n(232835),
    m = n(309010),
    g = n(967198),
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
    y = n(930125),
    N = n(390248),
    v = n(457699),
    C = n(811602),
    R = n(282108),
    O = n(652215),
    b = n(355097);
let D = 3e3,
    L = {};
function w(e) {
    return `${e.channel_id}:${e.id}`;
}
function M() {
    Object.values(L).forEach((e) => {
        let { timeout: t } = e;
        clearTimeout(t);
    }),
        (L = {});
}
function P(e, t) {
    if (null == e.id || null == e.channel_id) return !1;
    let n = w(e);
    if (null != L[n]) {
        let { timeout: i, setAt: r } = L[n];
        return (
            (function (e, t, n) {
                if (t === N.VL.UPDATE) {
                    let t = e.attachments ?? [],
                        n = e.embeds ?? [],
                        i = t.filter((e) => (0, R.gh)(C.kn.EXPLICIT, { type: y.D.Attachment, media: e })),
                        r = n.filter((e) => (0, R.gh)(C.kn.EXPLICIT, { type: y.D.Embed, media: e }));
                    (0, N.Kl)({
                        messageId: e.id,
                        channelId: e.channel_id,
                        numOfAttachments: t.length,
                        numOfEmbeds: n.length,
                        numOfExplicitAttachments: i.length,
                        numOfExplicitEmbeds: r.length,
                    });
                }
                (0, N.rA)(n, t);
            })(e, t, r),
            clearTimeout(i),
            delete L[n],
            !0
        );
    }
    return !1;
}
let x = (e, t) => {
    if (0 !== e.length) {
        if (t) return void (0, S.jd)(e);
        (0, S.j1)(
            e[0].channel_id,
            e.map((e) => e.id),
        );
    }
};
function k(e) {
    return null == L[w(e)];
}
function U(e, t) {
    let { forceBatchScan: n = !1, jitter: i = !1 } = t ?? {},
        r = t?.isMessageUpdate
            ? e.filter((e) => (0, R.s9)(e) && (0, R.mS)(e)).filter(k)
            : e.filter((e) => (0, R.s9)(e)).filter(k);
    r.forEach((e) => {
        let t = w(e);
        null == L[t] &&
            (d.A.increment({ name: o.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE }),
            (L[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    !(function (e) {
                        if (P(e, N.VL.TIMEOUT)) {
                            let t = E.A.getMessage(e.channel_id, e.id);
                            if (null != t) {
                                let { attachmentIds: n, embedIds: i } = (0, R.M)(t);
                                (0, N.gm)({ channelId: e.channel_id, messageId: e.id, attachmentIds: n, embedIds: i });
                            }
                            l.h.dispatch({
                                type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT",
                                messageId: e.id,
                                channelId: e.channel_id,
                            });
                        }
                    })(e);
                }, D),
            }));
    });
    let s = n || new Set(r.map((e) => e.channel_id)).size > 1;
    i
        ? setTimeout(() => {
              x(
                  r.filter((e) => null != L[w(e)]),
                  s,
              );
          }, 800 * Math.random())
        : x(r, s);
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
                { attachmentIds: s, embedIds: a } = (0, R.M)(e),
                o = t[e.channel_id];
            (o.numOfAttachments += i),
                (o.numOfEmbeds += r),
                (o.numOfAttachmentsPendingScan += s.length),
                (o.numOfEmbedsPendingScan += a.length);
            let l = n[e.id];
            (l.numOfAttachments += i),
                (l.numOfEmbeds += r),
                (l.numOfExplicitAttachments =
                    e.attachments?.filter((e) => (0, R.gh)(C.kn.EXPLICIT, { type: y.D.Attachment, media: e })).length ??
                    0),
                (l.numOfExplicitEmbeds =
                    e.embeds?.filter((e) => (0, R.gh)(C.kn.EXPLICIT, { type: y.D.Embed, media: e })).length ?? 0),
                (l.numOfGoreAttachments =
                    e.attachments?.filter((e) => (0, R.gh)(C.kn.GORE, { type: y.D.Attachment, media: e })).length ?? 0),
                (l.numOfGoreEmbeds =
                    e.embeds?.filter((e) => (0, R.gh)(C.kn.GORE, { type: y.D.Embed, media: e })).length ?? 0),
                (l.numOfSelfHarmAttachments =
                    e.attachments?.filter((e) => (0, R.gh)(C.kn.SELF_HARM, { type: y.D.Attachment, media: e }))
                        .length ?? 0),
                (l.numOfSelfHarmEmbeds =
                    e.embeds?.filter((e) => (0, R.gh)(C.kn.SELF_HARM, { type: y.D.Embed, media: e })).length ?? 0);
        }),
        { channelLookup: t, messageLookup: n }
    );
}
function F(e, t) {
    let n,
        i,
        r,
        s,
        o,
        {
            messagesPendingScan: l,
            attributesByChannelId: u,
            attributesByMessageId: c,
        } = ((n = e.filter((e) => {
            let t = T(e),
                n = 0 !== (0, R.Fg)(e);
            return t && n;
        })),
        (i = e
            .map((e) => {
                if (
                    null != e &&
                    "referenced_message" in e &&
                    null != e.referenced_message &&
                    T(e.referenced_message) &&
                    0 !== (0, R.Fg)(e.referenced_message)
                )
                    return e.referenced_message;
            })
            .filter(function (e) {
                return null != e;
            })).length > 0 && (n = [...n, ...i]),
        (s = (r = a()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id)).filter((e) => (0, R.mS)(e))),
        {
            messagesPendingScan: s,
            attributesByMessageId: (o = G(r)).messageLookup,
            attributesByChannelId: o.channelLookup,
        });
    return (
        A.default.entries(u).forEach((e) => {
            let [t, n] = e;
            (0, N.zt)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan,
            });
        }),
        A.default.entries(c).forEach((e) => {
            let [t, n] = e;
            (0, N.bz)({
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
        l.length > 0 && (U(l, t), !0)
    );
}
function V(e) {
    let { message: t } = e;
    if (
        null == t.channel_id ||
        null == t.id ||
        (0, R.nx)(t).authorId === h.default.getId() ||
        (null == t.embeds && null == t.attachments && !(0, N.aY)(t)) ||
        (t.embeds?.length === 0 && t.attachments?.length === 0 && !(0, N.aY)(t))
    )
        return !1;
    if (!(0, R.mS)(t)) {
        let e =
            E.A.getMessage(t.channel_id, t.id) ??
            v.A.getMessage(t.id, t.channel_id) ??
            _.A.getMessage(t.channel_id, t.id)?.message;
        null == e || (0, R.mS)((0, c.IU)(e, t)) || P(e, N.VL.UPDATE);
    }
    let n = m.A.getChannelId(),
        i = f.Ay.getCurrentSidebarChannelId(n);
    if (t.channel_id !== n && t.channel_id !== i) return !1;
    let r = E.A.getMessage(t.channel_id, t.id);
    return null != r && F([r], { isMessageUpdate: !0 });
}
function B(e) {
    let { channelId: t, message: n, optimistic: i, isPushNotification: r } = e;
    if (i || r || null == t || (0, R.nx)(n).authorId === h.default.getId()) return !1;
    let s = m.A.getChannelId(),
        a = f.Ay.getCurrentSidebarChannelId(s),
        o = t === s || t === a,
        l = p.A.getChannel(t);
    if (!o) return !1;
    let u = l?.isPrivate() ?? !0,
        c = l?.memberCount == null || l?.memberCount > 100;
    return F([n], { jitter: u && c });
}
function H(e) {
    let { channelId: t, messages: n } = e;
    if (null == t || null == n) return !1;
    let i = m.A.getChannelId(),
        r = f.Ay.getCurrentSidebarChannelId(i);
    return (t === i || t === r) && F(n);
}
function j(e) {
    let { data: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            let { messages: t } = e,
                i = r()(t);
            n = F(a()(i, (e, t) => e.id === t.id && e.channel_id === t.channel_id)) || n;
        }),
        n
    );
}
function Y(e) {
    let { pins: t } = e;
    return F(
        t.map((e) => {
            let { message: t } = e;
            return t;
        }),
    );
}
function W(e) {
    let { guildId: t, threads: n } = e;
    return null != n && g.A.getGuildId() === t && F(A.default.keys(n).map((e) => n[e].first_message));
}
function K(e) {
    let { guildId: t, firstMessages: n } = e;
    return null != n && g.A.getGuildId() === t && F(n, { forceBatchScan: !0 });
}
function $(e) {
    let { channelId: t } = e;
    return null != t && Z(t);
}
function z(e) {
    let { channelId: t } = e;
    return null != t && t === m.A.getChannelId() && Z(t);
}
function q(e) {
    let { settings: t, local: n } = e;
    if (!n || t.type !== b.oD.PRELOADED_USER_SETTINGS) return !1;
    let i = m.A.getChannelId();
    return null != i && Z(i);
}
function X(e) {
    let { channelId: t, chatOpen: n } = e;
    return !!n && Z(t);
}
function Z(e) {
    let t = E.A.getMessages(e);
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
                    attributesByMessageId: u,
                } = ((t = e.filter((e) => T(e) && 0 !== (0, R.Fg)(e))),
                (n = e
                    .map((e) => {
                        if (O.sl8.has(e.type) && null != e.messageReference) {
                            let t = _.A.getMessageByReference(e.messageReference);
                            if (
                                t.state === _.a.LOADED &&
                                null != t.message &&
                                T(t.message) &&
                                0 !== (0, R.Fg)(t.message)
                            )
                                return t.message;
                        }
                    })
                    .filter(function (e) {
                        return null != e;
                    })).length > 0 && (t = [...t, ...n]),
                (r = (i = a()(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id)).filter((e) =>
                    (0, R.mS)(e),
                )),
                {
                    messagesPendingScan: r,
                    attributesByChannelId: (s = G(i)).channelLookup,
                    attributesByMessageId: s.messageLookup,
                });
            return (
                A.default.entries(l).forEach((e) => {
                    let [t, n] = e;
                    (0, N.zt)({
                        channelId: t,
                        numOfAttachments: n.numOfAttachments,
                        numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                        numOfEmbeds: n.numOfEmbeds,
                        numOfEmbedsPendingScan: n.numOfEmbedsPendingScan,
                    });
                }),
                A.default.entries(u).forEach((e) => {
                    let [t, n] = e;
                    (0, N.bz)({
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
                o.length > 0 && (U(o), !0)
            );
        })(t)
    );
}
class Q extends u.A {
    actions = {
        LOAD_MESSAGES_SUCCESS: H,
        LOAD_FORUM_POSTS: W,
        LOAD_THREADS_SUCCESS: K,
        LOAD_ARCHIVED_THREADS_SUCCESS: K,
        SIDEBAR_VIEW_CHANNEL: $,
        MESSAGE_CREATE: B,
        MESSAGE_UPDATE: V,
        LOGOUT: M,
        SEARCH_MESSAGES_SUCCESS: j,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: j,
        CHANNEL_SELECT: z,
        LOAD_PINNED_MESSAGES_SUCCESS: Y,
        USER_SETTINGS_PROTO_UPDATE: q,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: X,
    };
}
let J = new Q();
