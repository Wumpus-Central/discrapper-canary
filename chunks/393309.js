"use strict";
n.d(t, { EN: () => x, Iy: () => k, Nw: () => V, jk: () => P, l1: () => G, r$: () => F, w0: () => B }), n(321073);
var r,
    i = n(64700),
    s = n(665260),
    a = n(562465),
    o = n(765178),
    l = n(73153),
    u = n(157559),
    c = n(465532),
    d = n(843472),
    _ = n(608299),
    f = n(207777),
    p = n(496040),
    h = n(853742),
    E = n(301169),
    m = n(451909),
    g = n(195880),
    A = n(677413),
    I = n(734057),
    T = n(31717),
    S = n(320501),
    y = n(101392),
    N = n(927813),
    v = n(661191),
    C = n(292348),
    O = n(268761),
    R = n(406704),
    b = n(474078),
    D = n(37411),
    L = n(652215),
    w = n(381941),
    M = n(985018),
    P =
        (((r = {})[(r.Disabled = 1)] = "Disabled"),
        (r[(r.Enabled = 2)] = "Enabled"),
        (r[(r.PrivateOnly = 3)] = "PrivateOnly"),
        r);
function x(e) {
    let t = (0, R.n)(e);
    return (0, R.Tb)(e) ? (t ? 2 : 3) : 1;
}
function k(e, t) {
    return 3 === t || (e.isPrivate ?? !1);
}
function U(e, t) {
    return e.length > t ? e.substring(0, t) + "..." : e;
}
function G(e, t) {
    let n = null == t ? null : S.A.getMessage(e.id, t),
        r = n?.getContentMessage(),
        i = r?.embeds?.[0]?.rawTitle ?? "",
        s = n?.poll?.question?.text ?? "";
    if ("" !== i) return U(i, 40);
    {
        if ("" !== s) return U(s, 80);
        let t = m.Ay.unparse(r?.content ?? "", e.id, !0),
            n = (0, b.A)(t.split("\n")[0], !0);
        n = n.replace(/^[ #-]+/, "");
        let i = [];
        for (;;) {
            let e = n.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
            if (null == e || null == e.index) {
                i.push(n);
                break;
            }
            i.push(n.substring(0, e.index)), i.push(e[0]), (n = n.substring(e.index + e[0].length));
        }
        let a = i[0];
        for (let e = 1; e < i.length; e++) {
            let t = a + i[e];
            if (t.length > 40) break;
            a = t;
        }
        return U(a, 40);
    }
}
function F(e) {
    let {
        parentChannel: t,
        parentMessageId: n,
        threadSettings: r,
        privateThreadMode: s,
        location: o,
        onThreadCreated: l,
        useDefaultThreadName: u,
        uploadHandler: f,
    } = e;
    return i.useCallback(
        async (e, i, p) => {
            var h, E, g, A, S;
            let y = null == n,
                N = k(r, s),
                C = r.name ?? "";
            if ("" === C && u) {
                let e = G(t, n);
                C = "" !== e ? e : M.intl.string(M.t["7Xm5QI"]);
            }
            let R = (0, O.Gl)(t),
                b = I.A.getChannel(v.default.castMessageIdAsChannelId(n)),
                D = await H(t, [], void 0, () => {
                    let e = null != n ? L.Rsh.CHANNEL_MESSAGE_THREADS(t.id, n) : L.Rsh.CHANNEL_THREADS(t.id);
                    return a.Bo.post({
                        url: e,
                        body: {
                            name: C,
                            type: N
                                ? L.rbe.PRIVATE_THREAD
                                : t.type === L.rbe.GUILD_ANNOUNCEMENT
                                  ? L.rbe.ANNOUNCEMENT_THREAD
                                  : L.rbe.PUBLIC_THREAD,
                            auto_archive_duration: R,
                            location: o,
                        },
                        rejectWithError: !1,
                    });
                });
            D !== b &&
                (c.A.clearDraft(t.id, T.C.ThreadSettings),
                c.A.clearDraft(t.id, T.C.FirstThreadMessage),
                l?.(D),
                (y || e.length > 0 || (null != i && i.length > 0) || (null != p && p.length > 0)) &&
                    ((h = D),
                    (E = e),
                    (g = i),
                    (A = p),
                    null != (S = f) && null != A && A.length > 0
                        ? S(h, A, E, g)
                        : null != g && g.length > 0
                          ? d.A.sendStickers(h.id, g, E, { location: w.Hx.THREAD_CREATION })
                          : d.A.sendMessage(h.id, m.Ay.parse(h, E), void 0, { location: w.Hx.THREAD_CREATION }))),
                _.A.clearAll(t.id, T.C.FirstThreadMessage);
        },
        [t, n, r, l, s, o, u, f],
    );
}
function V(e, t, n, r, i) {
    return H(e, [], void 0, () =>
        a.Bo.post({
            url: L.Rsh.CHANNEL_THREADS(e.id),
            body: { name: t, type: n, auto_archive_duration: r, location: i },
            rejectWithError: !1,
        }),
    );
}
function B(e) {
    let { parentChannel: t, name: n, appliedTags: r, analyticsLocations: o, onThreadCreated: l, upload: u } = e;
    return i.useCallback(
        async (e, i, d) => {
            let f,
                p = 0,
                [m, g] = (0, A.A)(e);
            m && ((e = g), (p = (0, s.UI)(p, L.pr7.SUPPRESS_NOTIFICATIONS)));
            let I = (0, O.Gl)(t, null),
                S = L.Rsh.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
                y = {
                    name: n,
                    auto_archive_duration: I,
                    applied_tags: r,
                    message: { content: e, sticker_ids: i, flags: 0 !== p ? p : void 0 },
                };
            if (null != d && d.length > 0)
                try {
                    let e = await u(d);
                    (f = e.uploaderFile), (y.message.attachments = e.files.map((e, t) => (0, C.OW)(e, t)));
                } catch (i) {
                    let { file: e, code: n, reason: r } = i;
                    throw (
                        ((0, E.k)({
                            file: e,
                            guildId: t.getGuildId(),
                            analyticsLocations: o ?? [],
                            code: n,
                            reason: r,
                        }),
                        i)
                    );
                }
            let N = await H(t, o, f, () => a.Bo.post({ url: S, body: y, rejectWithError: !1 }));
            return (
                c.A.clearDraft(t.id, T.C.ThreadSettings),
                c.A.clearDraft(t.id, T.C.FirstThreadMessage),
                _.A.clearAll(t.id, T.C.FirstThreadMessage),
                (0, h.Lj)({ guildId: t.guild_id, channelId: t.id, postId: N.id }),
                l?.(N),
                N
            );
        },
        [t, n, r, l, o, u],
    );
}
async function H(e, t, n, r) {
    let i,
        s = e.isForumLikeChannel();
    try {
        (i = await r()),
            null == i.body
                ? u.A.show({ title: M.intl.string(M.t.j2d6Km), body: M.intl.string(M.t.fEptJP) })
                : (l.h.dispatch({ type: "SLOWMODE_RESET_COOLDOWN", slowmodeType: y.R.CreateThread, channelId: e.id }),
                  l.h.dispatch({ type: "THREAD_CREATE_LOCAL", channelId: i.body.id }),
                  o.O.announce(M.intl.string(s ? M.t.zDAG2N : M.t.XkUoBb)));
    } catch (r) {
        if (r.body?.code === L.t02.TOO_MANY_THREADS)
            u.A.show({
                title: s ? M.intl.string(M.t.vWNFkx) : M.intl.string(M.t["1KEdvB"]),
                body: s ? M.intl.string(M.t.KGaiEK) : M.intl.string(M.t.P0wT5S),
            });
        else if (r.body?.code === L.t02.TOO_MANY_ANNOUNCEMENT_THREADS)
            u.A.show({ title: M.intl.string(M.t["1KEdvB"]), body: M.intl.string(M.t.jDMxz2) });
        else if (r.body?.code === L.t02.SLOWMODE_RATE_LIMITED) {
            let t = r.body.retry_after ?? 0;
            t > 0 &&
                l.h.dispatch({
                    type: "SLOWMODE_SET_COOLDOWN",
                    channelId: e.id,
                    slowmodeType: y.R.CreateThread,
                    cooldownMs: t * N.A.Millis.SECOND,
                });
        } else if (429 === r.status)
            u.A.show({
                title: s ? M.intl.string(M.t.vWNFkx) : M.intl.string(M.t["1KEdvB"]),
                body: M.intl.string(M.t.Whhv4w),
            });
        else if (D.$j.has(r.body?.code)) throw r;
        else if (r.body?.code === L.t02.INVALID_FORM_BODY && r.body?.errors?.name != null) throw r;
        else if (D.F4.has(r.body?.code)) {
            if (null != n)
                if (r.body?.code === L.t02.EXPLICIT_CONTENT) {
                    let t = (0, g.m)();
                    null != r.body.attachments &&
                        r.body.attachments.length > 0 &&
                        (l.h.dispatch({
                            type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                            messageId: t,
                            channelId: e.id,
                            attachments: r.body.attachments,
                        }),
                        (0, p.A)(e.id, t));
                } else
                    (0, E.k)({
                        file: n,
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
                            let r = I.A.getChannel(n);
                            return (
                                l.h.wait(() => {
                                    null == r ? t() : e(r);
                                }),
                                !1
                            );
                        }
                    });
            });
        } else u.A.show({ title: M.intl.string(M.t.j2d6Km), body: M.intl.string(M.t.fEptJP) });
    }
    let a = await new Promise((e, t) => {
        null == i.body && t(),
            I.A.addConditionalChangeListener(() => {
                let t = I.A.getChannel(i.body.id);
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
        await d.A.fetchMessages({ channelId: a.id, limit: L.EMb });
    } catch (e) {}
    return a;
}
