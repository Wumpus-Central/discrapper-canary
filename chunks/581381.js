n.d(t, {
    Ay: () => eo,
    MX: () => D,
}),
    n(896048);
var r = n(294845),
    i = n.n(r),
    a = n(543222),
    s = n.n(a),
    o = n(731738),
    l = n(73153),
    c = n(439372),
    u = n(141468),
    d = n(831062),
    f = n(9842),
    p = n(961350),
    _ = n(761640),
    h = n(734057),
    m = n(320501),
    g = n(309010),
    E = n(967198),
    b = n(661191),
    y = n(789846),
    O = n(135598),
    A = n(930125),
    v = n(390248),
    S = n(457699),
    I = n(811602),
    T = n(282108),
    C = n(797019),
    N = n(493364),
    R = n(652215),
    w = n(355097);

function P(e, t, n) {
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
let D = 3e3,
    x = 800,
    L = {};

function j(e) {
    return "".concat(e.channel_id, ":").concat(e.id);
}

function M() {
    Object.values(L).forEach((e) => {
        let { timeout: t } = e;
        clearTimeout(t);
    }),
        (L = {});
}

function k(e, t) {
    if (null == e.id || null == e.channel_id) return !1;
    let n = j(e);
    if (null != L[n]) {
        let { timeout: r, setAt: i } = L[n];
        return U(e, t, i), clearTimeout(r), delete L[n], !0;
    }
    return !1;
}

function U(e, t, n) {
    if (t === v.VL.UPDATE) {
        var r, i;
        let t = null != (r = e.attachments) ? r : [],
            n = null != (i = e.embeds) ? i : [],
            a = t.filter((e) =>
                (0, T.gh)(I.kn.EXPLICIT, {
                    type: A.D.Attachment,
                    media: e,
                }),
            ),
            s = n.filter((e) =>
                (0, T.gh)(I.kn.EXPLICIT, {
                    type: A.D.Embed,
                    media: e,
                }),
            );
        (0, v.Kl)({
            messageId: e.id,
            channelId: e.channel_id,
            numOfAttachments: t.length,
            numOfEmbeds: n.length,
            numOfExplicitAttachments: a.length,
            numOfExplicitEmbeds: s.length,
        });
    }
    (0, v.rA)(n, t);
}

function G(e) {
    if (k(e, v.VL.TIMEOUT)) {
        let t = m.A.getMessage(e.channel_id, e.id);
        if (null != t) {
            let { attachmentIds: n, embedIds: r } = (0, T.M)(t);
            (0, v.gm)({
                channelId: e.channel_id,
                messageId: e.id,
                attachmentIds: n,
                embedIds: r,
            });
        }
        l.h.dispatch({
            type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT",
            messageId: e.id,
            channelId: e.channel_id,
        });
    }
}
let V = (e, t) => {
    if (0 !== e.length) {
        if (t) return void (0, O.jd)(e);
        (0, O.j1)(
            e[0].channel_id,
            e.map((e) => e.id),
        );
    }
};

function F(e) {
    return null == L[j(e)];
}

function B(e, t) {
    let { forceBatchScan: n = !1, jitter: r = !1 } = null != t ? t : {},
        i = (null == t ? void 0 : t.isMessageUpdate)
            ? e.filter((e) => (0, T.s9)(e) && (0, T.mS)(e)).filter(F)
            : e.filter((e) => (0, T.s9)(e)).filter(F);
    i.forEach((e) => {
        let t = j(e);
        null == L[t] &&
            (d.A.increment({
                name: o.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE,
            }),
            (L[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    G(e);
                }, D),
            }));
    });
    let a = n || new Set(i.map((e) => e.channel_id)).size > 1;
    r
        ? setTimeout(() => {
              V(
                  i.filter((e) => null != L[j(e)]),
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
            var r, i, a, s, o, l, c, u, d, f, p, _, h, m, g, E;
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
            let b = null != (r = null == (d = e.attachments) ? void 0 : d.length) ? r : 0,
                y = null != (i = null == (f = e.embeds) ? void 0 : f.length) ? i : 0,
                { attachmentIds: O, embedIds: v } = (0, T.M)(e),
                S = t[e.channel_id];
            (S.numOfAttachments += b),
                (S.numOfEmbeds += y),
                (S.numOfAttachmentsPendingScan += O.length),
                (S.numOfEmbedsPendingScan += v.length);
            let C = n[e.id];
            (C.numOfAttachments += b),
                (C.numOfEmbeds += y),
                (C.numOfExplicitAttachments =
                    null !=
                    (a =
                        null == (p = e.attachments)
                            ? void 0
                            : p.filter((e) =>
                                  (0, T.gh)(I.kn.EXPLICIT, {
                                      type: A.D.Attachment,
                                      media: e,
                                  }),
                              ).length)
                        ? a
                        : 0),
                (C.numOfExplicitEmbeds =
                    null !=
                    (s =
                        null == (_ = e.embeds)
                            ? void 0
                            : _.filter((e) =>
                                  (0, T.gh)(I.kn.EXPLICIT, {
                                      type: A.D.Embed,
                                      media: e,
                                  }),
                              ).length)
                        ? s
                        : 0),
                (C.numOfGoreAttachments =
                    null !=
                    (o =
                        null == (h = e.attachments)
                            ? void 0
                            : h.filter((e) =>
                                  (0, T.gh)(I.kn.GORE, {
                                      type: A.D.Attachment,
                                      media: e,
                                  }),
                              ).length)
                        ? o
                        : 0),
                (C.numOfGoreEmbeds =
                    null !=
                    (l =
                        null == (m = e.embeds)
                            ? void 0
                            : m.filter((e) =>
                                  (0, T.gh)(I.kn.GORE, {
                                      type: A.D.Embed,
                                      media: e,
                                  }),
                              ).length)
                        ? l
                        : 0),
                (C.numOfSelfHarmAttachments =
                    null !=
                    (c =
                        null == (g = e.attachments)
                            ? void 0
                            : g.filter((e) =>
                                  (0, T.gh)(I.kn.SELF_HARM, {
                                      type: A.D.Attachment,
                                      media: e,
                                  }),
                              ).length)
                        ? c
                        : 0),
                (C.numOfSelfHarmEmbeds =
                    null !=
                    (u =
                        null == (E = e.embeds)
                            ? void 0
                            : E.filter((e) =>
                                  (0, T.gh)(I.kn.SELF_HARM, {
                                      type: A.D.Embed,
                                      media: e,
                                  }),
                              ).length)
                        ? u
                        : 0);
        }),
        {
            channelLookup: t,
            messageLookup: n,
        }
    );
}

function Y(e) {
    function t(e) {
        return null != e;
    }
    let n = e.filter((e) => {
            let t = (0, y.b)(e),
                n = 0 !== (0, T.Fg)(e);
            return t && n;
        }),
        r = e
            .map((e) => {
                if (
                    null != e &&
                    "referenced_message" in e &&
                    null != e.referenced_message &&
                    (0, y.b)(e.referenced_message) &&
                    0 !== (0, T.Fg)(e.referenced_message)
                )
                    return e.referenced_message;
            })
            .filter(t);
    r.length > 0 && (n = [...n, ...r]);
    let i = s()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
        a = i.filter((e) => (0, T.mS)(e)),
        o = H(i);
    return {
        messagesPendingScan: a,
        attributesByMessageId: o.messageLookup,
        attributesByChannelId: o.channelLookup,
    };
}

function W(e) {
    function t(e) {
        return null != e;
    }
    let n = e.filter((e) => (0, y.b)(e) && 0 !== (0, T.Fg)(e)),
        r = e
            .map((e) => {
                if (R.sl8.has(e.type) && null != e.messageReference) {
                    let t = f.A.getMessageByReference(e.messageReference);
                    if (
                        t.state === f.a.LOADED &&
                        null != t.message &&
                        (0, y.b)(t.message) &&
                        0 !== (0, T.Fg)(t.message)
                    )
                        return t.message;
                }
            })
            .filter(t);
    r.length > 0 && (n = [...n, ...r]);
    let i = s()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
        a = i.filter((e) => (0, T.mS)(e)),
        o = H(i);
    return {
        messagesPendingScan: a,
        attributesByChannelId: o.channelLookup,
        attributesByMessageId: o.messageLookup,
    };
}

function K(e, t) {
    let { messagesPendingScan: n, attributesByChannelId: r, attributesByMessageId: i } = Y(e);
    return (
        b.default.entries(r).forEach((e) => {
            let [t, n] = e;
            (0, v.zt)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan,
            });
        }),
        (0, C.y)() &&
            b.default.entries(i).forEach((e) => {
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
        n.length > 0 && (B(n, t), !0)
    );
}

function z(e) {
    let { messagesPendingScan: t, attributesByChannelId: n, attributesByMessageId: r } = W(e);
    return (
        b.default.entries(n).forEach((e) => {
            let [t, n] = e;
            (0, v.zt)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan,
            });
        }),
        (0, C.y)() &&
            b.default.entries(r).forEach((e) => {
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
        t.length > 0 && (B(t), !0)
    );
}

function q(e) {
    var t, n, r, i, a, s;
    let { message: o } = e;
    if (
        null == o.channel_id ||
        null == o.id ||
        (null == (t = o.author) ? void 0 : t.id) === p.default.getId() ||
        (null == o.embeds && null == o.attachments && !(0, v.aY)(o)) ||
        ((null == (n = o.embeds) ? void 0 : n.length) === 0 &&
            (null == (r = o.attachments) ? void 0 : r.length) === 0 &&
            !(0, v.aY)(o))
    )
        return !1;
    if (!(0, T.mS)(o)) {
        let e =
            null != (i = null != (a = m.A.getMessage(o.channel_id, o.id)) ? a : S.A.getMessage(o.id, o.channel_id))
                ? i
                : null == (s = f.A.getMessage(o.channel_id, o.id))
                  ? void 0
                  : s.message;
        null == e || (0, T.mS)((0, u.IU)(e, o)) || k(e, v.VL.UPDATE);
    }
    let l = g.A.getChannelId(),
        c = _.Ay.getCurrentSidebarChannelId(l);
    if (o.channel_id !== l && o.channel_id !== c) return !1;
    let d = m.A.getMessage(o.channel_id, o.id);
    return (
        null != d &&
        K([d], {
            isMessageUpdate: !0,
        })
    );
}

function X(e) {
    var t, n;
    let { channelId: r, message: i, optimistic: a, isPushNotification: s } = e;
    if (a || s || null == r || (null == (n = i.author) ? void 0 : n.id) === p.default.getId()) return !1;
    let o = g.A.getChannelId(),
        l = _.Ay.getCurrentSidebarChannelId(o),
        c = r === o || r === l,
        u = h.A.getChannel(r);
    if (!c) return !1;
    let d = null == (t = null == u ? void 0 : u.isPrivate()) || t,
        f = (null == u ? void 0 : u.memberCount) == null || (null == u ? void 0 : u.memberCount) > 100;
    return K([i], {
        jitter: d && f,
    });
}

function Z(e) {
    let { channelId: t, messages: n } = e;
    if (null == t || null == n) return !1;
    let r = g.A.getChannelId(),
        i = _.Ay.getCurrentSidebarChannelId(r);
    return (t === r || t === i) && K(n);
}

function Q(e) {
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

function $(e) {
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
    return null != n && E.A.getGuildId() === t && K(b.default.keys(n).map((e) => n[e].first_message));
}

function ee(e) {
    let { guildId: t, firstMessages: n } = e;
    return (
        null != n &&
        E.A.getGuildId() === t &&
        K(n, {
            forceBatchScan: !0,
        })
    );
}

function et(e) {
    let { channelId: t } = e;
    return null != t && ea(t);
}

function en(e) {
    let { channelId: t } = e;
    return (0, N.B)(), null != t && t === g.A.getChannelId() && ea(t);
}

function er(e) {
    let { settings: t, local: n } = e;
    if (!n || t.type !== w.oD.PRELOADED_USER_SETTINGS) return !1;
    let r = g.A.getChannelId();
    return null != r && ea(r);
}

function ei(e) {
    let { channelId: t, chatOpen: n } = e;
    return !!n && ea(t);
}

function ea(e) {
    let t = m.A.getMessages(e);
    return 0 !== t.length && z(t);
}
class es extends c.A {
    constructor(...e) {
        super(...e),
            P(this, "actions", {
                LOAD_MESSAGES_SUCCESS: Z,
                LOAD_FORUM_POSTS: J,
                LOAD_THREADS_SUCCESS: ee,
                LOAD_ARCHIVED_THREADS_SUCCESS: ee,
                SIDEBAR_VIEW_CHANNEL: et,
                MESSAGE_CREATE: X,
                MESSAGE_UPDATE: q,
                LOGOUT: M,
                SEARCH_MESSAGES_SUCCESS: Q,
                MOD_VIEW_SEARCH_MESSAGES_SUCCESS: Q,
                CHANNEL_SELECT: en,
                LOAD_PINNED_MESSAGES_SUCCESS: $,
                USER_SETTINGS_PROTO_UPDATE: er,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: ei,
            });
    }
}
let eo = new es();
