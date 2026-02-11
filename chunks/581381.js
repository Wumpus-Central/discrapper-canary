"use strict";
n.d(t, { Ay: () => eo, MX: () => w });
var r = n(294845),
    i = n.n(r),
    a = n(543222),
    s = n.n(a),
    o = n(731738),
    l = n(73153),
    u = n(439372),
    c = n(141468),
    d = n(831062),
    _ = n(9842),
    f = n(961350),
    h = n(761640),
    p = n(734057),
    g = n(320501),
    E = n(309010),
    A = n(967198),
    I = n(661191),
    T = n(789846),
    y = n(135598),
    S = n(930125),
    v = n(390248),
    C = n(457699),
    b = n(811602),
    N = n(282108),
    R = n(797019),
    O = n(493364),
    D = n(652215),
    L = n(355097);
let w = 3e3,
    x = 800,
    P = {};
function M(e) {
    return `${e.channel_id}:${e.id}`;
}
function k() {
    Object.values(P).forEach((e) => {
        let { timeout: t } = e;
        clearTimeout(t);
    }),
        (P = {});
}
function U(e, t) {
    if (null == e.id || null == e.channel_id) return !1;
    let n = M(e);
    if (null != P[n]) {
        let { timeout: r, setAt: i } = P[n];
        return G(e, t, i), clearTimeout(r), delete P[n], !0;
    }
    return !1;
}
function G(e, t, n) {
    if (t === v.VL.UPDATE) {
        let t = e.attachments ?? [],
            n = e.embeds ?? [],
            r = t.filter((e) => (0, N.gh)(b.kn.EXPLICIT, { type: S.D.Attachment, media: e })),
            i = n.filter((e) => (0, N.gh)(b.kn.EXPLICIT, { type: S.D.Embed, media: e }));
        (0, v.Kl)({
            messageId: e.id,
            channelId: e.channel_id,
            numOfAttachments: t.length,
            numOfEmbeds: n.length,
            numOfExplicitAttachments: r.length,
            numOfExplicitEmbeds: i.length,
        });
    }
    (0, v.rA)(n, t);
}
function F(e) {
    if (U(e, v.VL.TIMEOUT)) {
        let t = g.A.getMessage(e.channel_id, e.id);
        if (null != t) {
            let { attachmentIds: n, embedIds: r } = (0, N.M)(t);
            (0, v.gm)({ channelId: e.channel_id, messageId: e.id, attachmentIds: n, embedIds: r });
        }
        l.h.dispatch({ type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT", messageId: e.id, channelId: e.channel_id });
    }
}
let V = (e, t) => {
    if (0 !== e.length) {
        if (t) return void (0, y.jd)(e);
        (0, y.j1)(
            e[0].channel_id,
            e.map((e) => e.id),
        );
    }
};
function B(e) {
    return null == P[M(e)];
}
function j(e, t) {
    let { forceBatchScan: n = !1, jitter: r = !1 } = t ?? {},
        i = t?.isMessageUpdate
            ? e.filter((e) => (0, N.s9)(e) && (0, N.mS)(e)).filter(B)
            : e.filter((e) => (0, N.s9)(e)).filter(B);
    i.forEach((e) => {
        let t = M(e);
        null == P[t] &&
            (d.A.increment({ name: o.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE }),
            (P[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    F(e);
                }, w),
            }));
    });
    let a = n || new Set(i.map((e) => e.channel_id)).size > 1;
    r
        ? setTimeout(() => {
              V(
                  i.filter((e) => null != P[M(e)]),
                  a,
              );
          }, Math.random() * x)
        : V(i, a);
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
                { attachmentIds: a, embedIds: s } = (0, N.M)(e),
                o = t[e.channel_id];
            (o.numOfAttachments += r),
                (o.numOfEmbeds += i),
                (o.numOfAttachmentsPendingScan += a.length),
                (o.numOfEmbedsPendingScan += s.length);
            let l = n[e.id];
            (l.numOfAttachments += r),
                (l.numOfEmbeds += i),
                (l.numOfExplicitAttachments =
                    e.attachments?.filter((e) => (0, N.gh)(b.kn.EXPLICIT, { type: S.D.Attachment, media: e })).length ??
                    0),
                (l.numOfExplicitEmbeds =
                    e.embeds?.filter((e) => (0, N.gh)(b.kn.EXPLICIT, { type: S.D.Embed, media: e })).length ?? 0),
                (l.numOfGoreAttachments =
                    e.attachments?.filter((e) => (0, N.gh)(b.kn.GORE, { type: S.D.Attachment, media: e })).length ?? 0),
                (l.numOfGoreEmbeds =
                    e.embeds?.filter((e) => (0, N.gh)(b.kn.GORE, { type: S.D.Embed, media: e })).length ?? 0),
                (l.numOfSelfHarmAttachments =
                    e.attachments?.filter((e) => (0, N.gh)(b.kn.SELF_HARM, { type: S.D.Attachment, media: e }))
                        .length ?? 0),
                (l.numOfSelfHarmEmbeds =
                    e.embeds?.filter((e) => (0, N.gh)(b.kn.SELF_HARM, { type: S.D.Embed, media: e })).length ?? 0);
        }),
        { channelLookup: t, messageLookup: n }
    );
}
function Y(e) {
    function t(e) {
        return null != e;
    }
    let n = e.filter((e) => {
            let t = (0, T.b)(e),
                n = 0 !== (0, N.Fg)(e);
            return t && n;
        }),
        r = e
            .map((e) => {
                if (
                    null != e &&
                    "referenced_message" in e &&
                    null != e.referenced_message &&
                    (0, T.b)(e.referenced_message) &&
                    0 !== (0, N.Fg)(e.referenced_message)
                )
                    return e.referenced_message;
            })
            .filter(t);
    r.length > 0 && (n = [...n, ...r]);
    let i = s()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
        a = i.filter((e) => (0, N.mS)(e)),
        o = H(i);
    return { messagesPendingScan: a, attributesByMessageId: o.messageLookup, attributesByChannelId: o.channelLookup };
}
function W(e) {
    function t(e) {
        return null != e;
    }
    let n = e.filter((e) => (0, T.b)(e) && 0 !== (0, N.Fg)(e)),
        r = e
            .map((e) => {
                if (D.sl8.has(e.type) && null != e.messageReference) {
                    let t = _.A.getMessageByReference(e.messageReference);
                    if (
                        t.state === _.a.LOADED &&
                        null != t.message &&
                        (0, T.b)(t.message) &&
                        0 !== (0, N.Fg)(t.message)
                    )
                        return t.message;
                }
            })
            .filter(t);
    r.length > 0 && (n = [...n, ...r]);
    let i = s()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
        a = i.filter((e) => (0, N.mS)(e)),
        o = H(i);
    return { messagesPendingScan: a, attributesByChannelId: o.channelLookup, attributesByMessageId: o.messageLookup };
}
function K(e, t) {
    let { messagesPendingScan: n, attributesByChannelId: r, attributesByMessageId: i } = Y(e);
    return (
        I.default.entries(r).forEach((e) => {
            let [t, n] = e;
            (0, v.zt)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan,
            });
        }),
        (0, R.y)() &&
            I.default.entries(i).forEach((e) => {
                let [t, n] = e;
                (0, v.bz)({
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
        n.length > 0 && (j(n, t), !0)
    );
}
function $(e) {
    let { messagesPendingScan: t, attributesByChannelId: n, attributesByMessageId: r } = W(e);
    return (
        I.default.entries(n).forEach((e) => {
            let [t, n] = e;
            (0, v.zt)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan,
            });
        }),
        (0, R.y)() &&
            I.default.entries(r).forEach((e) => {
                let [t, n] = e;
                (0, v.bz)({
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
        t.length > 0 && (j(t), !0)
    );
}
function z(e) {
    let { message: t } = e;
    if (
        null == t.channel_id ||
        null == t.id ||
        t.author?.id === f.default.getId() ||
        (null == t.embeds && null == t.attachments && !(0, v.aY)(t)) ||
        (t.embeds?.length === 0 && t.attachments?.length === 0 && !(0, v.aY)(t))
    )
        return !1;
    if (!(0, N.mS)(t)) {
        let e =
            g.A.getMessage(t.channel_id, t.id) ??
            C.A.getMessage(t.id, t.channel_id) ??
            _.A.getMessage(t.channel_id, t.id)?.message;
        null == e || (0, N.mS)((0, c.IU)(e, t)) || U(e, v.VL.UPDATE);
    }
    let n = E.A.getChannelId(),
        r = h.Ay.getCurrentSidebarChannelId(n);
    if (t.channel_id !== n && t.channel_id !== r) return !1;
    let i = g.A.getMessage(t.channel_id, t.id);
    return null != i && K([i], { isMessageUpdate: !0 });
}
function q(e) {
    let { channelId: t, message: n, optimistic: r, isPushNotification: i } = e;
    if (r || i || null == t || n.author?.id === f.default.getId()) return !1;
    let a = E.A.getChannelId(),
        s = h.Ay.getCurrentSidebarChannelId(a),
        o = t === a || t === s,
        l = p.A.getChannel(t);
    if (!o) return !1;
    let u = l?.isPrivate() ?? !0,
        c = l?.memberCount == null || l?.memberCount > 100;
    return K([n], { jitter: u && c });
}
function X(e) {
    let { channelId: t, messages: n } = e;
    if (null == t || null == n) return !1;
    let r = E.A.getChannelId(),
        i = h.Ay.getCurrentSidebarChannelId(r);
    return (t === r || t === i) && K(n);
}
function Z(e) {
    let { data: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            let { messages: t } = e,
                r = i()(t);
            n = K(s()(r, (e, t) => e.id === t.id && e.channel_id === t.channel_id)) || n;
        }),
        n
    );
}
function Q(e) {
    let { pins: t } = e;
    return K(
        t.map((e) => {
            let { message: t } = e;
            return t;
        }),
    );
}
function J(e) {
    let { guildId: t, threads: n } = e;
    return null != n && A.A.getGuildId() === t && K(I.default.keys(n).map((e) => n[e].first_message));
}
function ee(e) {
    let { guildId: t, firstMessages: n } = e;
    return null != n && A.A.getGuildId() === t && K(n, { forceBatchScan: !0 });
}
function et(e) {
    let { channelId: t } = e;
    return null != t && ea(t);
}
function en(e) {
    let { channelId: t } = e;
    return (0, O.B)(), null != t && t === E.A.getChannelId() && ea(t);
}
function er(e) {
    let { settings: t, local: n } = e;
    if (!n || t.type !== L.oD.PRELOADED_USER_SETTINGS) return !1;
    let r = E.A.getChannelId();
    return null != r && ea(r);
}
function ei(e) {
    let { channelId: t, chatOpen: n } = e;
    return !!n && ea(t);
}
function ea(e) {
    let t = g.A.getMessages(e);
    return 0 !== t.length && $(t);
}
class es extends u.A {
    actions = {
        LOAD_MESSAGES_SUCCESS: X,
        LOAD_FORUM_POSTS: J,
        LOAD_THREADS_SUCCESS: ee,
        LOAD_ARCHIVED_THREADS_SUCCESS: ee,
        SIDEBAR_VIEW_CHANNEL: et,
        MESSAGE_CREATE: q,
        MESSAGE_UPDATE: z,
        LOGOUT: k,
        SEARCH_MESSAGES_SUCCESS: Z,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: Z,
        CHANNEL_SELECT: en,
        LOAD_PINNED_MESSAGES_SUCCESS: Q,
        USER_SETTINGS_PROTO_UPDATE: er,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: ei,
    };
}
let eo = new es();
