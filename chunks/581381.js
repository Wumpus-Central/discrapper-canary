"use strict";
n.d(t, { Ay: () => es, MX: () => D });
var r = n(294845),
    i = n.n(r),
    s = n(543222),
    a = n.n(s),
    o = n(731738),
    l = n(73153),
    u = n(439372),
    c = n(141468),
    d = n(831062),
    _ = n(9842),
    f = n(961350),
    p = n(761640),
    h = n(734057),
    m = n(320501),
    E = n(309010),
    g = n(967198),
    A = n(661191),
    I = n(789846),
    T = n(135598),
    S = n(930125),
    y = n(390248),
    v = n(457699),
    N = n(811602),
    C = n(282108),
    R = n(797019),
    O = n(652215),
    b = n(355097);
let D = 3e3,
    L = 800,
    w = {};
function M(e) {
    return `${e.channel_id}:${e.id}`;
}
function x() {
    Object.values(w).forEach((e) => {
        let { timeout: t } = e;
        clearTimeout(t);
    }),
        (w = {});
}
function P(e, t) {
    if (null == e.id || null == e.channel_id) return !1;
    let n = M(e);
    if (null != w[n]) {
        let { timeout: r, setAt: i } = w[n];
        return k(e, t, i), clearTimeout(r), delete w[n], !0;
    }
    return !1;
}
function k(e, t, n) {
    if (t === y.VL.UPDATE) {
        let t = e.attachments ?? [],
            n = e.embeds ?? [],
            r = t.filter((e) => (0, C.gh)(N.kn.EXPLICIT, { type: S.D.Attachment, media: e })),
            i = n.filter((e) => (0, C.gh)(N.kn.EXPLICIT, { type: S.D.Embed, media: e }));
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
}
function U(e) {
    if (P(e, y.VL.TIMEOUT)) {
        let t = m.A.getMessage(e.channel_id, e.id);
        if (null != t) {
            let { attachmentIds: n, embedIds: r } = (0, C.M)(t);
            (0, y.gm)({ channelId: e.channel_id, messageId: e.id, attachmentIds: n, embedIds: r });
        }
        l.h.dispatch({ type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT", messageId: e.id, channelId: e.channel_id });
    }
}
let G = (e, t) => {
    if (0 !== e.length) {
        if (t) return void (0, T.jd)(e);
        (0, T.j1)(
            e[0].channel_id,
            e.map((e) => e.id),
        );
    }
};
function F(e) {
    return null == w[M(e)];
}
function V(e, t) {
    let { forceBatchScan: n = !1, jitter: r = !1 } = t ?? {},
        i = t?.isMessageUpdate
            ? e.filter((e) => (0, C.s9)(e) && (0, C.mS)(e)).filter(F)
            : e.filter((e) => (0, C.s9)(e)).filter(F);
    i.forEach((e) => {
        let t = M(e);
        null == w[t] &&
            (d.A.increment({ name: o.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE }),
            (w[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    U(e);
                }, D),
            }));
    });
    let s = n || new Set(i.map((e) => e.channel_id)).size > 1;
    r
        ? setTimeout(() => {
              G(
                  i.filter((e) => null != w[M(e)]),
                  s,
              );
          }, Math.random() * L)
        : G(i, s);
}
function B(e) {
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
                { attachmentIds: s, embedIds: a } = (0, C.M)(e),
                o = t[e.channel_id];
            (o.numOfAttachments += r),
                (o.numOfEmbeds += i),
                (o.numOfAttachmentsPendingScan += s.length),
                (o.numOfEmbedsPendingScan += a.length);
            let l = n[e.id];
            (l.numOfAttachments += r),
                (l.numOfEmbeds += i),
                (l.numOfExplicitAttachments =
                    e.attachments?.filter((e) => (0, C.gh)(N.kn.EXPLICIT, { type: S.D.Attachment, media: e })).length ??
                    0),
                (l.numOfExplicitEmbeds =
                    e.embeds?.filter((e) => (0, C.gh)(N.kn.EXPLICIT, { type: S.D.Embed, media: e })).length ?? 0),
                (l.numOfGoreAttachments =
                    e.attachments?.filter((e) => (0, C.gh)(N.kn.GORE, { type: S.D.Attachment, media: e })).length ?? 0),
                (l.numOfGoreEmbeds =
                    e.embeds?.filter((e) => (0, C.gh)(N.kn.GORE, { type: S.D.Embed, media: e })).length ?? 0),
                (l.numOfSelfHarmAttachments =
                    e.attachments?.filter((e) => (0, C.gh)(N.kn.SELF_HARM, { type: S.D.Attachment, media: e }))
                        .length ?? 0),
                (l.numOfSelfHarmEmbeds =
                    e.embeds?.filter((e) => (0, C.gh)(N.kn.SELF_HARM, { type: S.D.Embed, media: e })).length ?? 0);
        }),
        { channelLookup: t, messageLookup: n }
    );
}
function H(e) {
    function t(e) {
        return null != e;
    }
    let n = e.filter((e) => {
            let t = (0, I.b)(e),
                n = 0 !== (0, C.Fg)(e);
            return t && n;
        }),
        r = e
            .map((e) => {
                if (
                    null != e &&
                    "referenced_message" in e &&
                    null != e.referenced_message &&
                    (0, I.b)(e.referenced_message) &&
                    0 !== (0, C.Fg)(e.referenced_message)
                )
                    return e.referenced_message;
            })
            .filter(t);
    r.length > 0 && (n = [...n, ...r]);
    let i = a()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
        s = i.filter((e) => (0, C.mS)(e)),
        o = B(i);
    return { messagesPendingScan: s, attributesByMessageId: o.messageLookup, attributesByChannelId: o.channelLookup };
}
function j(e) {
    function t(e) {
        return null != e;
    }
    let n = e.filter((e) => (0, I.b)(e) && 0 !== (0, C.Fg)(e)),
        r = e
            .map((e) => {
                if (O.sl8.has(e.type) && null != e.messageReference) {
                    let t = _.A.getMessageByReference(e.messageReference);
                    if (
                        t.state === _.a.LOADED &&
                        null != t.message &&
                        (0, I.b)(t.message) &&
                        0 !== (0, C.Fg)(t.message)
                    )
                        return t.message;
                }
            })
            .filter(t);
    r.length > 0 && (n = [...n, ...r]);
    let i = a()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
        s = i.filter((e) => (0, C.mS)(e)),
        o = B(i);
    return { messagesPendingScan: s, attributesByChannelId: o.channelLookup, attributesByMessageId: o.messageLookup };
}
function Y(e, t) {
    let { messagesPendingScan: n, attributesByChannelId: r, attributesByMessageId: i } = H(e);
    return (
        A.default.entries(r).forEach((e) => {
            let [t, n] = e;
            (0, y.zt)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan,
            });
        }),
        (0, R.y)() &&
            A.default.entries(i).forEach((e) => {
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
        n.length > 0 && (V(n, t), !0)
    );
}
function W(e) {
    let { messagesPendingScan: t, attributesByChannelId: n, attributesByMessageId: r } = j(e);
    return (
        A.default.entries(n).forEach((e) => {
            let [t, n] = e;
            (0, y.zt)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan,
            });
        }),
        (0, R.y)() &&
            A.default.entries(r).forEach((e) => {
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
        t.length > 0 && (V(t), !0)
    );
}
function K(e) {
    let { message: t } = e;
    if (
        null == t.channel_id ||
        null == t.id ||
        t.author?.id === f.default.getId() ||
        (null == t.embeds && null == t.attachments && !(0, y.aY)(t)) ||
        (t.embeds?.length === 0 && t.attachments?.length === 0 && !(0, y.aY)(t))
    )
        return !1;
    if (!(0, C.mS)(t)) {
        let e =
            m.A.getMessage(t.channel_id, t.id) ??
            v.A.getMessage(t.id, t.channel_id) ??
            _.A.getMessage(t.channel_id, t.id)?.message;
        null == e || (0, C.mS)((0, c.IU)(e, t)) || P(e, y.VL.UPDATE);
    }
    let n = E.A.getChannelId(),
        r = p.Ay.getCurrentSidebarChannelId(n);
    if (t.channel_id !== n && t.channel_id !== r) return !1;
    let i = m.A.getMessage(t.channel_id, t.id);
    return null != i && Y([i], { isMessageUpdate: !0 });
}
function $(e) {
    let { channelId: t, message: n, optimistic: r, isPushNotification: i } = e;
    if (r || i || null == t || n.author?.id === f.default.getId()) return !1;
    let s = E.A.getChannelId(),
        a = p.Ay.getCurrentSidebarChannelId(s),
        o = t === s || t === a,
        l = h.A.getChannel(t);
    if (!o) return !1;
    let u = l?.isPrivate() ?? !0,
        c = l?.memberCount == null || l?.memberCount > 100;
    return Y([n], { jitter: u && c });
}
function z(e) {
    let { channelId: t, messages: n } = e;
    if (null == t || null == n) return !1;
    let r = E.A.getChannelId(),
        i = p.Ay.getCurrentSidebarChannelId(r);
    return (t === r || t === i) && Y(n);
}
function q(e) {
    let { data: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            let { messages: t } = e,
                r = i()(t);
            n = Y(a()(r, (e, t) => e.id === t.id && e.channel_id === t.channel_id)) || n;
        }),
        n
    );
}
function Z(e) {
    let { pins: t } = e;
    return Y(
        t.map((e) => {
            let { message: t } = e;
            return t;
        }),
    );
}
function X(e) {
    let { guildId: t, threads: n } = e;
    return null != n && g.A.getGuildId() === t && Y(A.default.keys(n).map((e) => n[e].first_message));
}
function Q(e) {
    let { guildId: t, firstMessages: n } = e;
    return null != n && g.A.getGuildId() === t && Y(n, { forceBatchScan: !0 });
}
function J(e) {
    let { channelId: t } = e;
    return null != t && er(t);
}
function ee(e) {
    let { channelId: t } = e;
    return null != t && t === E.A.getChannelId() && er(t);
}
function et(e) {
    let { settings: t, local: n } = e;
    if (!n || t.type !== b.oD.PRELOADED_USER_SETTINGS) return !1;
    let r = E.A.getChannelId();
    return null != r && er(r);
}
function en(e) {
    let { channelId: t, chatOpen: n } = e;
    return !!n && er(t);
}
function er(e) {
    let t = m.A.getMessages(e);
    return 0 !== t.length && W(t);
}
class ei extends u.A {
    actions = {
        LOAD_MESSAGES_SUCCESS: z,
        LOAD_FORUM_POSTS: X,
        LOAD_THREADS_SUCCESS: Q,
        LOAD_ARCHIVED_THREADS_SUCCESS: Q,
        SIDEBAR_VIEW_CHANNEL: J,
        MESSAGE_CREATE: $,
        MESSAGE_UPDATE: K,
        LOGOUT: x,
        SEARCH_MESSAGES_SUCCESS: q,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: q,
        CHANNEL_SELECT: ee,
        LOAD_PINNED_MESSAGES_SUCCESS: Z,
        USER_SETTINGS_PROTO_UPDATE: et,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: en,
    };
}
let es = new ei();
