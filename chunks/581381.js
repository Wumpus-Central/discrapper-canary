"use strict";
n.d(t, { Ay: () => ea, MX: () => L });
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
    b = n(797019),
    R = n(493364),
    O = n(652215),
    D = n(355097);
let L = 3e3,
    w = 800,
    x = {};
function M(e) {
    return `${e.channel_id}:${e.id}`;
}
function P() {
    Object.values(x).forEach((e) => {
        let { timeout: t } = e;
        clearTimeout(t);
    }),
        (x = {});
}
function k(e, t) {
    if (null == e.id || null == e.channel_id) return !1;
    let n = M(e);
    if (null != x[n]) {
        let { timeout: r, setAt: i } = x[n];
        return U(e, t, i), clearTimeout(r), delete x[n], !0;
    }
    return !1;
}
function U(e, t, n) {
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
function G(e) {
    if (k(e, y.VL.TIMEOUT)) {
        let t = m.A.getMessage(e.channel_id, e.id);
        if (null != t) {
            let { attachmentIds: n, embedIds: r } = (0, C.M)(t);
            (0, y.gm)({ channelId: e.channel_id, messageId: e.id, attachmentIds: n, embedIds: r });
        }
        l.h.dispatch({ type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT", messageId: e.id, channelId: e.channel_id });
    }
}
let F = (e, t) => {
    if (0 !== e.length) {
        if (t) return void (0, T.jd)(e);
        (0, T.j1)(
            e[0].channel_id,
            e.map((e) => e.id),
        );
    }
};
function V(e) {
    return null == x[M(e)];
}
function B(e, t) {
    let { forceBatchScan: n = !1, jitter: r = !1 } = t ?? {},
        i = t?.isMessageUpdate
            ? e.filter((e) => (0, C.s9)(e) && (0, C.mS)(e)).filter(V)
            : e.filter((e) => (0, C.s9)(e)).filter(V);
    i.forEach((e) => {
        let t = M(e);
        null == x[t] &&
            (d.A.increment({ name: o.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE }),
            (x[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    G(e);
                }, L),
            }));
    });
    let s = n || new Set(i.map((e) => e.channel_id)).size > 1;
    r
        ? setTimeout(() => {
              F(
                  i.filter((e) => null != x[M(e)]),
                  s,
              );
          }, Math.random() * w)
        : F(i, s);
}
function H(e) {
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
function j(e) {
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
        o = H(i);
    return { messagesPendingScan: s, attributesByMessageId: o.messageLookup, attributesByChannelId: o.channelLookup };
}
function Y(e) {
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
        o = H(i);
    return { messagesPendingScan: s, attributesByChannelId: o.channelLookup, attributesByMessageId: o.messageLookup };
}
function W(e, t) {
    let { messagesPendingScan: n, attributesByChannelId: r, attributesByMessageId: i } = j(e);
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
        (0, b.y)() &&
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
        n.length > 0 && (B(n, t), !0)
    );
}
function K(e) {
    let { messagesPendingScan: t, attributesByChannelId: n, attributesByMessageId: r } = Y(e);
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
        (0, b.y)() &&
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
        t.length > 0 && (B(t), !0)
    );
}
function z(e) {
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
        null == e || (0, C.mS)((0, c.IU)(e, t)) || k(e, y.VL.UPDATE);
    }
    let n = E.A.getChannelId(),
        r = p.Ay.getCurrentSidebarChannelId(n);
    if (t.channel_id !== n && t.channel_id !== r) return !1;
    let i = m.A.getMessage(t.channel_id, t.id);
    return null != i && W([i], { isMessageUpdate: !0 });
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
    return W([n], { jitter: u && c });
}
function q(e) {
    let { channelId: t, messages: n } = e;
    if (null == t || null == n) return !1;
    let r = E.A.getChannelId(),
        i = p.Ay.getCurrentSidebarChannelId(r);
    return (t === r || t === i) && W(n);
}
function Z(e) {
    let { data: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            let { messages: t } = e,
                r = i()(t);
            n = W(a()(r, (e, t) => e.id === t.id && e.channel_id === t.channel_id)) || n;
        }),
        n
    );
}
function X(e) {
    let { pins: t } = e;
    return W(
        t.map((e) => {
            let { message: t } = e;
            return t;
        }),
    );
}
function Q(e) {
    let { guildId: t, threads: n } = e;
    return null != n && g.A.getGuildId() === t && W(A.default.keys(n).map((e) => n[e].first_message));
}
function J(e) {
    let { guildId: t, firstMessages: n } = e;
    return null != n && g.A.getGuildId() === t && W(n, { forceBatchScan: !0 });
}
function ee(e) {
    let { channelId: t } = e;
    return null != t && ei(t);
}
function et(e) {
    let { channelId: t } = e;
    return (0, R.B)(), null != t && t === E.A.getChannelId() && ei(t);
}
function en(e) {
    let { settings: t, local: n } = e;
    if (!n || t.type !== D.oD.PRELOADED_USER_SETTINGS) return !1;
    let r = E.A.getChannelId();
    return null != r && ei(r);
}
function er(e) {
    let { channelId: t, chatOpen: n } = e;
    return !!n && ei(t);
}
function ei(e) {
    let t = m.A.getMessages(e);
    return 0 !== t.length && K(t);
}
class es extends u.A {
    actions = {
        LOAD_MESSAGES_SUCCESS: q,
        LOAD_FORUM_POSTS: Q,
        LOAD_THREADS_SUCCESS: J,
        LOAD_ARCHIVED_THREADS_SUCCESS: J,
        SIDEBAR_VIEW_CHANNEL: ee,
        MESSAGE_CREATE: $,
        MESSAGE_UPDATE: z,
        LOGOUT: P,
        SEARCH_MESSAGES_SUCCESS: Z,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: Z,
        CHANNEL_SELECT: et,
        LOAD_PINNED_MESSAGES_SUCCESS: X,
        USER_SETTINGS_PROTO_UPDATE: en,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: er,
    };
}
let ea = new es();
