"use strict";
n.d(t, { Ay: () => ei, MX: () => b });
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
    R = n(652215),
    O = n(355097);
let b = 3e3,
    D = 800,
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
        let { timeout: r, setAt: i } = L[n];
        return x(e, t, i), clearTimeout(r), delete L[n], !0;
    }
    return !1;
}
function x(e, t, n) {
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
function k(e) {
    if (P(e, y.VL.TIMEOUT)) {
        let t = m.A.getMessage(e.channel_id, e.id);
        if (null != t) {
            let { attachmentIds: n, embedIds: r } = (0, C.M)(t);
            (0, y.gm)({ channelId: e.channel_id, messageId: e.id, attachmentIds: n, embedIds: r });
        }
        l.h.dispatch({ type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT", messageId: e.id, channelId: e.channel_id });
    }
}
let U = (e, t) => {
    if (0 !== e.length) {
        if (t) return void (0, T.jd)(e);
        (0, T.j1)(
            e[0].channel_id,
            e.map((e) => e.id),
        );
    }
};
function G(e) {
    return null == L[w(e)];
}
function F(e, t) {
    let { forceBatchScan: n = !1, jitter: r = !1 } = t ?? {},
        i = t?.isMessageUpdate
            ? e.filter((e) => (0, C.s9)(e) && (0, C.mS)(e)).filter(G)
            : e.filter((e) => (0, C.s9)(e)).filter(G);
    i.forEach((e) => {
        let t = w(e);
        null == L[t] &&
            (d.A.increment({ name: o.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE }),
            (L[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    k(e);
                }, b),
            }));
    });
    let s = n || new Set(i.map((e) => e.channel_id)).size > 1;
    r
        ? setTimeout(() => {
              U(
                  i.filter((e) => null != L[w(e)]),
                  s,
              );
          }, Math.random() * D)
        : U(i, s);
}
function V(e) {
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
function B(e) {
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
        o = V(i);
    return { messagesPendingScan: s, attributesByMessageId: o.messageLookup, attributesByChannelId: o.channelLookup };
}
function H(e) {
    function t(e) {
        return null != e;
    }
    let n = e.filter((e) => (0, I.b)(e) && 0 !== (0, C.Fg)(e)),
        r = e
            .map((e) => {
                if (R.sl8.has(e.type) && null != e.messageReference) {
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
        o = V(i);
    return { messagesPendingScan: s, attributesByChannelId: o.channelLookup, attributesByMessageId: o.messageLookup };
}
function j(e, t) {
    let { messagesPendingScan: n, attributesByChannelId: r, attributesByMessageId: i } = B(e);
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
        n.length > 0 && (F(n, t), !0)
    );
}
function Y(e) {
    let { messagesPendingScan: t, attributesByChannelId: n, attributesByMessageId: r } = H(e);
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
        t.length > 0 && (F(t), !0)
    );
}
function W(e) {
    let { message: t } = e;
    if (
        null == t.channel_id ||
        null == t.id ||
        (0, C.nx)(t).authorId === f.default.getId() ||
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
    return null != i && j([i], { isMessageUpdate: !0 });
}
function K(e) {
    let { channelId: t, message: n, optimistic: r, isPushNotification: i } = e;
    if (r || i || null == t || (0, C.nx)(n).authorId === f.default.getId()) return !1;
    let s = E.A.getChannelId(),
        a = p.Ay.getCurrentSidebarChannelId(s),
        o = t === s || t === a,
        l = h.A.getChannel(t);
    if (!o) return !1;
    let u = l?.isPrivate() ?? !0,
        c = l?.memberCount == null || l?.memberCount > 100;
    return j([n], { jitter: u && c });
}
function $(e) {
    let { channelId: t, messages: n } = e;
    if (null == t || null == n) return !1;
    let r = E.A.getChannelId(),
        i = p.Ay.getCurrentSidebarChannelId(r);
    return (t === r || t === i) && j(n);
}
function z(e) {
    let { data: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            let { messages: t } = e,
                r = i()(t);
            n = j(a()(r, (e, t) => e.id === t.id && e.channel_id === t.channel_id)) || n;
        }),
        n
    );
}
function q(e) {
    let { pins: t } = e;
    return j(
        t.map((e) => {
            let { message: t } = e;
            return t;
        }),
    );
}
function Z(e) {
    let { guildId: t, threads: n } = e;
    return null != n && g.A.getGuildId() === t && j(A.default.keys(n).map((e) => n[e].first_message));
}
function X(e) {
    let { guildId: t, firstMessages: n } = e;
    return null != n && g.A.getGuildId() === t && j(n, { forceBatchScan: !0 });
}
function Q(e) {
    let { channelId: t } = e;
    return null != t && en(t);
}
function J(e) {
    let { channelId: t } = e;
    return null != t && t === E.A.getChannelId() && en(t);
}
function ee(e) {
    let { settings: t, local: n } = e;
    if (!n || t.type !== O.oD.PRELOADED_USER_SETTINGS) return !1;
    let r = E.A.getChannelId();
    return null != r && en(r);
}
function et(e) {
    let { channelId: t, chatOpen: n } = e;
    return !!n && en(t);
}
function en(e) {
    let t = m.A.getMessages(e);
    return 0 !== t.length && Y(t);
}
class er extends u.A {
    actions = {
        LOAD_MESSAGES_SUCCESS: $,
        LOAD_FORUM_POSTS: Z,
        LOAD_THREADS_SUCCESS: X,
        LOAD_ARCHIVED_THREADS_SUCCESS: X,
        SIDEBAR_VIEW_CHANNEL: Q,
        MESSAGE_CREATE: K,
        MESSAGE_UPDATE: W,
        LOGOUT: M,
        SEARCH_MESSAGES_SUCCESS: z,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: z,
        CHANNEL_SELECT: J,
        LOAD_PINNED_MESSAGES_SUCCESS: q,
        USER_SETTINGS_PROTO_UPDATE: ee,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: et,
    };
}
let ei = new er();
