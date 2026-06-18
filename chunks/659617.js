"use strict";
n.d(t, { Nw: () => H, Iy: () => F, jk: () => U, l1: () => B, w0: () => Y, r$: () => j, EN: () => G }), n(321073);
var i,
    r = n(64700),
    s = n(665260),
    a = n(636537),
    o = n(765178),
    l = n(228366),
    u = n(157559),
    c = n(465532),
    d = n(493336),
    _ = n(608299),
    h = n(95561),
    f = n(207777),
    p = n(627968),
    E = n(192308),
    m = n(853742),
    g = n(567231),
    A = n(451909),
    I = n(195880),
    T = n(677413),
    S = n(495544),
    y = n(734057),
    C = n(31717),
    N = n(232835),
    v = n(101392),
    R = n(927813),
    O = n(935208),
    b = n(292348),
    D = n(268761),
    L = n(406704),
    w = n(474078),
    M = n(37411),
    P = n(652215),
    x = n(381941),
    k = n(375708),
    U =
        (((i = {})[(i.Disabled = 1)] = "Disabled"),
        (i[(i.Enabled = 2)] = "Enabled"),
        (i[(i.PrivateOnly = 3)] = "PrivateOnly"),
        i);
function G(e) {
    let t = (0, L.n)(e);
    return (0, L.Tb)(e) ? (t ? 2 : 3) : 1;
}
function F(e, t) {
    return 3 === t || (e.isPrivate ?? !1);
}
function V(e, t) {
    return e.length > t ? e.substring(0, t) + "..." : e;
}
function B(e, t) {
    let n = null == t ? null : N.A.getMessage(e.id, t),
        i = n?.getContentMessage(),
        r = i?.embeds?.[0]?.rawTitle ?? "",
        s = n?.poll?.question?.text ?? "";
    if ("" !== r) return V(r, 40);
    {
        if ("" !== s) return V(s, 80);
        let t = A.Ay.unparse(i?.content ?? "", e.id, !0),
            n = (0, w.A)(t.split("\n")[0], !0);
        n = n.replace(/^[ #-]+/, "");
        let r = [];
        for (;;) {
            let e = n.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
            if (null == e || null == e.index) {
                r.push(n);
                break;
            }
            r.push(n.substring(0, e.index)), r.push(e[0]), (n = n.substring(e.index + e[0].length));
        }
        let a = r[0];
        for (let e = 1; e < r.length; e++) {
            let t = a + r[e];
            if (t.length > 40) break;
            a = t;
        }
        return V(a, 40);
    }
}
function j(e) {
    let {
        parentChannel: t,
        parentMessageId: n,
        threadSettings: i,
        privateThreadMode: s,
        location: o,
        onThreadCreated: l,
        useDefaultThreadName: u,
        uploadHandler: h,
    } = e;
    return r.useCallback(
        async (e, r, f) => {
            let p = null == n,
                E = F(i, s),
                m = i.name ?? "";
            if ("" === m && u) {
                let e = B(t, n);
                m = "" !== e ? e : k.intl.string(k.t["7Xm5QI"]);
            }
            let g = (0, D.Gl)(t),
                I = y.A.getChannel(O.default.castMessageIdAsChannelId(n)),
                T = await W(t, [], void 0, () => {
                    let e = null != n ? P.Rsh.CHANNEL_MESSAGE_THREADS(t.id, n) : P.Rsh.CHANNEL_THREADS(t.id);
                    return a.Bo.post({
                        url: e,
                        body: {
                            name: m,
                            type: E
                                ? P.rbe.PRIVATE_THREAD
                                : t.type === P.rbe.GUILD_ANNOUNCEMENT
                                  ? P.rbe.ANNOUNCEMENT_THREAD
                                  : P.rbe.PUBLIC_THREAD,
                            auto_archive_duration: g,
                            location: o,
                        },
                        rejectWithError: !1,
                    });
                });
            if (T !== I) {
                var S, N, v, R, b;
                let n = C.A.getDraft(t.id, C.C.FirstThreadMessage),
                    i = n.trim();
                c.A.clearDraft(t.id, C.C.ThreadSettings),
                    c.A.clearDraft(t.id, C.C.FirstThreadMessage),
                    "" !== i && i !== e.trim() && c.A.saveDraft(T.id, n, C.C.ChannelMessage),
                    l?.(T),
                    (p || e.length > 0 || (null != r && r.length > 0) || (null != f && f.length > 0)) &&
                        ((S = T),
                        (N = e),
                        (v = r),
                        (R = f),
                        null != (b = h) && null != R && R.length > 0
                            ? b(S, R, N, v)
                            : null != v && v.length > 0
                              ? d.A.sendStickers(S.id, v, A.Ay.parse(S, N), { location: x.Hx.THREAD_CREATION })
                              : d.A.sendMessage(S.id, A.Ay.parse(S, N), void 0, { location: x.Hx.THREAD_CREATION }));
            }
            _.A.clearAll(t.id, C.C.FirstThreadMessage);
        },
        [t, n, i, l, s, o, u, h],
    );
}
function H(e, t, n, i, r) {
    return W(e, [], void 0, () =>
        a.Bo.post({
            url: P.Rsh.CHANNEL_THREADS(e.id),
            body: { name: t, type: n, auto_archive_duration: i, location: r },
            rejectWithError: !1,
        }),
    );
}
function Y(e) {
    let {
        parentChannel: t,
        name: n,
        appliedTags: i,
        analyticsLocations: o,
        onThreadCreated: l,
        upload: u,
        activityAction: d,
        applicationId: f,
        voiceChatEnabled: p,
    } = e;
    return r.useCallback(
        async (e, r, E) => {
            var A;
            let I,
                y,
                N,
                v = 0,
                [R, O] = (0, T.A)(e);
            R && ((e = O), (v = (0, s.UI)(v, P.pr7.SUPPRESS_NOTIFICATIONS)));
            let L = (0, D.Gl)(t, null),
                w = P.Rsh.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
                M = {
                    name: n,
                    auto_archive_duration: L,
                    applied_tags: i,
                    message: { content: e, sticker_ids: r, flags: 0 !== v ? v : void 0 },
                },
                k =
                    null != d
                        ? null == (y = null != (I = (A = d).activity.session_id) ? I : S.default.getSessionId())
                            ? null
                            : {
                                  type: A.type,
                                  session_id: y,
                                  target_user_id: A.targetUserId,
                                  party_id: A.activity.party?.id,
                              }
                        : null;
            if (
                (null != k &&
                    null != d &&
                    ((M.message.application_id = d.activity.application_id), (M.message.activity = k)),
                null != E && E.length > 0)
            )
                try {
                    let e = await u(E);
                    (N = e.uploaderFile), (M.message.attachments = e.files.map((e, t) => (0, b.OW)(e, t)));
                } catch (r) {
                    let { file: e, code: n, reason: i } = r;
                    throw (
                        ((0, g.k)({
                            file: e,
                            guildId: t.getGuildId(),
                            analyticsLocations: o ?? [],
                            code: n,
                            reason: i,
                        }),
                        r)
                    );
                }
            let U = await W(t, o, N, () => a.Bo.post({ url: w, body: M, rejectWithError: !1 }));
            return (
                c.A.clearDraft(t.id, C.C.ThreadSettings),
                c.A.clearDraft(t.id, C.C.FirstThreadMessage),
                _.A.clearAll(t.id, C.C.FirstThreadMessage),
                (0, m.Lj)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: U.id,
                    applicationId: f,
                    voiceChatEnabled: p,
                }),
                null != M.message.application_id &&
                    h.Ay.trackWithMetadata(P.HAw.INVITE_SENT, {
                        location: x.Hx.THREAD_CREATION,
                        invite_type: P.G2g.APPLICATION,
                        application_id: M.message.application_id,
                        guild_id: t.getGuildId(),
                        channel_id: U.id,
                        message_id: U.id,
                    }),
                l?.(U),
                U
            );
        },
        [t, n, i, l, o, u, d, p, f],
    );
}
async function W(e, t, i, r) {
    let s,
        a = e.isForumLikeChannel();
    try {
        (s = await r()),
            null == s.body
                ? u.A.show({ title: k.intl.string(k.t.j2d6Km), body: k.intl.string(k.t.fEptJP) })
                : (l.h.dispatch({ type: "SLOWMODE_RESET_COOLDOWN", slowmodeType: v.R.CreateThread, channelId: e.id }),
                  l.h.dispatch({ type: "THREAD_CREATE_LOCAL", channelId: s.body.id }),
                  o.O.announce(k.intl.string(a ? k.t.zDAG2N : k.t.XkUoBb)));
    } catch (r) {
        if (r.body?.code === P.t02.TOO_MANY_THREADS)
            u.A.show({
                title: a ? k.intl.string(k.t.vWNFkx) : k.intl.string(k.t["1KEdvB"]),
                body: a ? k.intl.string(k.t.KGaiEK) : k.intl.string(k.t.P0wT5S),
            });
        else if (r.body?.code === P.t02.TOO_MANY_ANNOUNCEMENT_THREADS)
            u.A.show({ title: k.intl.string(k.t["1KEdvB"]), body: k.intl.string(k.t.jDMxz2) });
        else if (r.body?.code === P.t02.SLOWMODE_RATE_LIMITED) {
            let t = r.body.retry_after ?? 0;
            t > 0 &&
                l.h.dispatch({
                    type: "SLOWMODE_SET_COOLDOWN",
                    channelId: e.id,
                    slowmodeType: v.R.CreateThread,
                    cooldownMs: t * R.A.Millis.SECOND,
                });
        } else if (429 === r.status)
            u.A.show({
                title: a ? k.intl.string(k.t.vWNFkx) : k.intl.string(k.t["1KEdvB"]),
                body: k.intl.string(k.t.Whhv4w),
            });
        else if (M.$j.has(r.body?.code)) throw r;
        else if (r.body?.code === P.t02.INVALID_FORM_BODY && r.body?.errors?.name != null) throw r;
        else if (M.F4.has(r.body?.code)) {
            if (null != i)
                if (r.body?.code === P.t02.EXPLICIT_CONTENT) {
                    let t = (0, I.m)();
                    if (null != r.body.attachments && r.body.attachments.length > 0) {
                        var c;
                        l.h.dispatch({
                            type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                            messageId: t,
                            channelId: e.id,
                            attachments: r.body.attachments,
                        }),
                            (c = e.id),
                            (0, E.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("74187"), n.e("73384"), n.e("66009")]).then(
                                    n.bind(n, 33216),
                                );
                                return (n) => (0, p.jsx)(e, { ...n, channelId: c, messageId: t });
                            });
                    }
                } else
                    (0, g.k)({
                        file: i,
                        guildId: e.getGuildId(),
                        analyticsLocations: t ?? [],
                        code: r.body?.code,
                        reason: r.body?.reason,
                    });
            return new Promise((e, t) => {
                null == r.body && t(),
                    f.A.addConditionalChangeListener(() => {
                        let n = f.A.getAndDeleteMostRecentUserCreatedThreadId();
                        if (null != n) {
                            let i = y.A.getChannel(n);
                            return (
                                l.h.wait(() => {
                                    null == i ? t() : e(i);
                                }),
                                !1
                            );
                        }
                    });
            });
        } else u.A.show({ title: k.intl.string(k.t.j2d6Km), body: k.intl.string(k.t.fEptJP) });
    }
    let _ = await new Promise((e, t) => {
        null == s.body && t(),
            y.A.addConditionalChangeListener(() => {
                let t = y.A.getChannel(s.body.id);
                if (null != t)
                    return (
                        l.h.wait(() => {
                            e(t);
                        }),
                        !1
                    );
            });
    });
    try {
        await d.A.fetchMessages({ channelId: _.id, limit: P.EMb });
    } catch (e) {}
    return _;
}
