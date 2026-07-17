"use strict";
n.d(t, { Nw: () => j, Iy: () => F, jk: () => x, l1: () => B, w0: () => W, r$: () => H, EN: () => k }), n(321073);
var i,
    r = n(64700),
    a = n(665260),
    s = n(636537),
    l = n(765178),
    o = n(228366),
    d = n(157559),
    c = n(465532),
    u = n(493336),
    _ = n(608299),
    E = n(95561),
    A = n(207777),
    h = n(627968),
    I = n(192308),
    f = n(853742),
    p = n(567231),
    T = n(451909),
    m = n(195880),
    g = n(677413),
    S = n(280450),
    N = n(734057),
    C = n(31717),
    O = n(232835),
    R = n(101392),
    L = n(927813),
    y = n(935208),
    D = n(292348),
    v = n(268761),
    b = n(406704),
    M = n(474078),
    P = n(37411),
    U = n(652215),
    w = n(381941),
    G = n(375708),
    x =
        (((i = {})[(i.Disabled = 1)] = "Disabled"),
        (i[(i.Enabled = 2)] = "Enabled"),
        (i[(i.PrivateOnly = 3)] = "PrivateOnly"),
        i);
function k(e) {
    let t = (0, b.n)(e);
    return (0, b.Tb)(e) ? (t ? 2 : 3) : 1;
}
function F(e, t) {
    return 3 === t || (e.isPrivate ?? !1);
}
function V(e, t) {
    return e.length > t ? e.substring(0, t) + "..." : e;
}
function B(e, t) {
    let n = null == t ? null : O.A.getMessage(e.id, t),
        i = n?.getContentMessage(),
        r = i?.embeds?.[0]?.rawTitle ?? "",
        a = n?.poll?.question?.text ?? "";
    if ("" !== r) return V(r, 40);
    {
        if ("" !== a) return V(a, 80);
        let t = T.Ay.unparse(i?.content ?? "", e.id, !0),
            n = (0, M.A)(t.split("\n")[0], !0);
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
        let s = r[0];
        for (let e = 1; e < r.length; e++) {
            let t = s + r[e];
            if (t.length > 40) break;
            s = t;
        }
        return V(s, 40);
    }
}
function H(e) {
    let {
        parentChannel: t,
        parentMessageId: n,
        threadSettings: i,
        privateThreadMode: a,
        location: l,
        onThreadCreated: o,
        useDefaultThreadName: d,
        uploadHandler: E,
    } = e;
    return r.useCallback(
        async (e, r, A) => {
            let h = null == n,
                I = F(i, a),
                f = i.name ?? "";
            if ("" === f && d) {
                let e = B(t, n);
                f = "" !== e ? e : G.intl.string(G.t["7Xm5QI"]);
            }
            let p = (0, v.Gl)(t),
                m = N.A.getChannel(y.default.castMessageIdAsChannelId(n)),
                g = await Y(t, [], void 0, () => {
                    let e = null != n ? U.Rsh.CHANNEL_MESSAGE_THREADS(t.id, n) : U.Rsh.CHANNEL_THREADS(t.id);
                    return s.Bo.post({
                        url: e,
                        body: {
                            name: f,
                            type: I
                                ? U.rbe.PRIVATE_THREAD
                                : t.type === U.rbe.GUILD_ANNOUNCEMENT
                                  ? U.rbe.ANNOUNCEMENT_THREAD
                                  : U.rbe.PUBLIC_THREAD,
                            auto_archive_duration: p,
                            location: l,
                        },
                        rejectWithError: (0, s.fT)(),
                    });
                });
            if (g !== m) {
                var S, O, R, L, D;
                let n = C.A.getDraft(t.id, C.C.FirstThreadMessage),
                    i = n.trim();
                c.A.clearDraft(t.id, C.C.ThreadSettings),
                    c.A.clearDraft(t.id, C.C.FirstThreadMessage),
                    "" !== i && i !== e.trim() && c.A.saveDraft(g.id, n, C.C.ChannelMessage),
                    o?.(g),
                    (h || e.length > 0 || (null != r && r.length > 0) || (null != A && A.length > 0)) &&
                        ((S = g),
                        (O = e),
                        (R = r),
                        (L = A),
                        null != (D = E) && null != L && L.length > 0
                            ? D(S, L, O, R)
                            : null != R && R.length > 0
                              ? u.A.sendStickers(S.id, R, T.Ay.parse(S, O), { location: w.Hx.THREAD_CREATION })
                              : u.A.sendMessage(S.id, T.Ay.parse(S, O), void 0, { location: w.Hx.THREAD_CREATION }));
            }
            _.A.clearAll(t.id, C.C.FirstThreadMessage);
        },
        [t, n, i, o, a, l, d, E],
    );
}
function j(e, t, n, i, r) {
    return Y(e, [], void 0, () =>
        s.Bo.post({
            url: U.Rsh.CHANNEL_THREADS(e.id),
            body: { name: t, type: n, auto_archive_duration: i, location: r },
            rejectWithError: (0, s.fT)(),
        }),
    );
}
function W(e) {
    let {
        parentChannel: t,
        name: n,
        appliedTags: i,
        analyticsLocations: l,
        onThreadCreated: o,
        upload: d,
        activityAction: u,
        applicationId: A,
        voiceChatEnabled: h,
    } = e;
    return r.useCallback(
        async (e, r, I) => {
            var T;
            let m,
                N,
                O,
                R = 0,
                [L, y] = (0, g.A)(e);
            L && ((e = y), (R = (0, a.UI)(R, U.pr7.SUPPRESS_NOTIFICATIONS)));
            let b = (0, v.Gl)(t, null),
                M = U.Rsh.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
                P = {
                    name: n,
                    auto_archive_duration: b,
                    applied_tags: i,
                    message: { content: e, sticker_ids: r, flags: 0 !== R ? R : void 0 },
                },
                G =
                    null != u
                        ? null == (N = null != (m = (T = u).activity.session_id) ? m : S.default.getSessionId())
                            ? null
                            : {
                                  type: T.type,
                                  session_id: N,
                                  target_user_id: T.targetUserId,
                                  party_id: T.activity.party?.id,
                              }
                        : null;
            if (
                (null != G &&
                    null != u &&
                    ((P.message.application_id = u.activity.application_id), (P.message.activity = G)),
                null != I && I.length > 0)
            )
                try {
                    let e = await d(I);
                    (O = e.uploaderFile), (P.message.attachments = e.files.map((e, t) => (0, D.OW)(e, t)));
                } catch (r) {
                    let { file: e, code: n, reason: i } = r;
                    throw (
                        ((0, p.k)({
                            file: e,
                            guildId: t.getGuildId(),
                            analyticsLocations: l ?? [],
                            code: n,
                            reason: i,
                        }),
                        r)
                    );
                }
            let x = await Y(t, l, O, () => s.Bo.post({ url: M, body: P, rejectWithError: (0, s.fT)() }));
            return (
                c.A.clearDraft(t.id, C.C.ThreadSettings),
                c.A.clearDraft(t.id, C.C.FirstThreadMessage),
                _.A.clearAll(t.id, C.C.FirstThreadMessage),
                (0, f.Lj)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: x.id,
                    applicationId: A,
                    voiceChatEnabled: h,
                }),
                null != P.message.application_id &&
                    E.Ay.trackWithMetadata(U.HAw.INVITE_SENT, {
                        location: w.Hx.THREAD_CREATION,
                        invite_type: U.G2g.APPLICATION,
                        application_id: P.message.application_id,
                        guild_id: t.getGuildId(),
                        channel_id: x.id,
                        message_id: x.id,
                    }),
                o?.(x),
                x
            );
        },
        [t, n, i, o, l, d, u, h, A],
    );
}
async function Y(e, t, i, r) {
    let a,
        s = e.isForumLikeChannel();
    try {
        (a = await r()),
            null == a.body
                ? d.A.show({ title: G.intl.string(G.t.j2d6Km), body: G.intl.string(G.t.fEptJP) })
                : (o.h.dispatch({ type: "SLOWMODE_RESET_COOLDOWN", slowmodeType: R.R.CreateThread, channelId: e.id }),
                  o.h.dispatch({ type: "THREAD_CREATE_LOCAL", channelId: a.body.id }),
                  l.O.announce(G.intl.string(s ? G.t.zDAG2N : G.t.XkUoBb)));
    } catch (r) {
        if (r.body?.code === U.t02.TOO_MANY_THREADS)
            d.A.show({
                title: s ? G.intl.string(G.t.vWNFkx) : G.intl.string(G.t["1KEdvB"]),
                body: s ? G.intl.string(G.t.KGaiEK) : G.intl.string(G.t.P0wT5S),
            });
        else if (r.body?.code === U.t02.TOO_MANY_ANNOUNCEMENT_THREADS)
            d.A.show({ title: G.intl.string(G.t["1KEdvB"]), body: G.intl.string(G.t.jDMxz2) });
        else if (r.body?.code === U.t02.SLOWMODE_RATE_LIMITED) {
            let t = r.body.retry_after ?? 0;
            t > 0 &&
                o.h.dispatch({
                    type: "SLOWMODE_SET_COOLDOWN",
                    channelId: e.id,
                    slowmodeType: R.R.CreateThread,
                    cooldownMs: t * L.A.Millis.SECOND,
                });
        } else if (429 === r.status)
            d.A.show({
                title: s ? G.intl.string(G.t.vWNFkx) : G.intl.string(G.t["1KEdvB"]),
                body: G.intl.string(G.t.Whhv4w),
            });
        else if (P.$j.has(r.body?.code)) throw r;
        else if (r.body?.code === U.t02.INVALID_FORM_BODY && r.body?.errors?.name != null) throw r;
        else if (P.F4.has(r.body?.code)) {
            if (null != i)
                if (r.body?.code === U.t02.EXPLICIT_CONTENT) {
                    let t = (0, m.m)();
                    if (null != r.body.attachments && r.body.attachments.length > 0) {
                        var c;
                        o.h.dispatch({
                            type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                            messageId: t,
                            channelId: e.id,
                            attachments: r.body.attachments,
                        }),
                            (c = e.id),
                            (0, I.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("74187"), n.e("73384"), n.e("66009")]).then(
                                    n.bind(n, 33216),
                                );
                                return (n) => (0, h.jsx)(e, { ...n, channelId: c, messageId: t });
                            });
                    }
                } else
                    (0, p.k)({
                        file: i,
                        guildId: e.getGuildId(),
                        analyticsLocations: t ?? [],
                        code: r.body?.code,
                        reason: r.body?.reason,
                    });
            return new Promise((e, t) => {
                null == r.body && t(),
                    A.A.addConditionalChangeListener(() => {
                        let n = A.A.getAndDeleteMostRecentUserCreatedThreadId();
                        if (null != n) {
                            let i = N.A.getChannel(n);
                            return (
                                o.h.wait(() => {
                                    null == i ? t() : e(i);
                                }),
                                !1
                            );
                        }
                    });
            });
        } else d.A.show({ title: G.intl.string(G.t.j2d6Km), body: G.intl.string(G.t.fEptJP) });
    }
    let _ = await new Promise((e, t) => {
        null == a.body && t(),
            N.A.addConditionalChangeListener(() => {
                let t = N.A.getChannel(a.body.id);
                if (null != t)
                    return (
                        o.h.wait(() => {
                            e(t);
                        }),
                        !1
                    );
            });
    });
    try {
        await u.A.fetchMessages({ channelId: _.id, limit: U.EMb });
    } catch (e) {}
    return _;
}
