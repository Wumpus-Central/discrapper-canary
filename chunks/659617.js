"use strict";
n.d(t, { Nw: () => B, Iy: () => U, jk: () => x, l1: () => F, w0: () => H, r$: () => V, EN: () => k }), n(321073);
var i,
    r = n(64700),
    s = n(665260),
    a = n(636537),
    o = n(765178),
    l = n(228366),
    u = n(157559),
    c = n(465532),
    d = n(720149),
    _ = n(608299),
    h = n(207777),
    f = n(627968),
    p = n(192308),
    E = n(853742),
    m = n(567231),
    g = n(451909),
    A = n(195880),
    I = n(677413),
    T = n(734057),
    S = n(31717),
    y = n(232835),
    N = n(101392),
    v = n(927813),
    C = n(935208),
    R = n(292348),
    O = n(268761),
    b = n(406704),
    D = n(474078),
    L = n(37411),
    w = n(652215),
    M = n(381941),
    P = n(375708),
    x =
        (((i = {})[(i.Disabled = 1)] = "Disabled"),
        (i[(i.Enabled = 2)] = "Enabled"),
        (i[(i.PrivateOnly = 3)] = "PrivateOnly"),
        i);
function k(e) {
    let t = (0, b.n)(e);
    return (0, b.Tb)(e) ? (t ? 2 : 3) : 1;
}
function U(e, t) {
    return 3 === t || (e.isPrivate ?? !1);
}
function G(e, t) {
    return e.length > t ? e.substring(0, t) + "..." : e;
}
function F(e, t) {
    let n = null == t ? null : y.A.getMessage(e.id, t),
        i = n?.getContentMessage(),
        r = i?.embeds?.[0]?.rawTitle ?? "",
        s = n?.poll?.question?.text ?? "";
    if ("" !== r) return G(r, 40);
    {
        if ("" !== s) return G(s, 80);
        let t = g.Ay.unparse(i?.content ?? "", e.id, !0),
            n = (0, D.A)(t.split("\n")[0], !0);
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
        return G(a, 40);
    }
}
function V(e) {
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
            var p, E, m, A, I;
            let y = null == n,
                N = U(i, s),
                v = i.name ?? "";
            if ("" === v && u) {
                let e = F(t, n);
                v = "" !== e ? e : P.intl.string(P.t["7Xm5QI"]);
            }
            let R = (0, O.Gl)(t),
                b = T.A.getChannel(C.default.castMessageIdAsChannelId(n)),
                D = await j(t, [], void 0, () => {
                    let e = null != n ? w.Rsh.CHANNEL_MESSAGE_THREADS(t.id, n) : w.Rsh.CHANNEL_THREADS(t.id);
                    return a.Bo.post({
                        url: e,
                        body: {
                            name: v,
                            type: N
                                ? w.rbe.PRIVATE_THREAD
                                : t.type === w.rbe.GUILD_ANNOUNCEMENT
                                  ? w.rbe.ANNOUNCEMENT_THREAD
                                  : w.rbe.PUBLIC_THREAD,
                            auto_archive_duration: R,
                            location: o,
                        },
                        rejectWithError: !1,
                    });
                });
            D !== b &&
                (c.A.clearDraft(t.id, S.C.ThreadSettings),
                c.A.clearDraft(t.id, S.C.FirstThreadMessage),
                l?.(D),
                (y || e.length > 0 || (null != r && r.length > 0) || (null != f && f.length > 0)) &&
                    ((p = D),
                    (E = e),
                    (m = r),
                    (A = f),
                    null != (I = h) && null != A && A.length > 0
                        ? I(p, A, E, m)
                        : null != m && m.length > 0
                          ? d.A.sendStickers(p.id, m, g.Ay.parse(p, E), { location: M.Hx.THREAD_CREATION })
                          : d.A.sendMessage(p.id, g.Ay.parse(p, E), void 0, { location: M.Hx.THREAD_CREATION }))),
                _.A.clearAll(t.id, S.C.FirstThreadMessage);
        },
        [t, n, i, l, s, o, u, h],
    );
}
function B(e, t, n, i, r) {
    return j(e, [], void 0, () =>
        a.Bo.post({
            url: w.Rsh.CHANNEL_THREADS(e.id),
            body: { name: t, type: n, auto_archive_duration: i, location: r },
            rejectWithError: !1,
        }),
    );
}
function H(e) {
    let { parentChannel: t, name: n, appliedTags: i, analyticsLocations: o, onThreadCreated: l, upload: u } = e;
    return r.useCallback(
        async (e, r, d) => {
            let h,
                f = 0,
                [p, g] = (0, I.A)(e);
            p && ((e = g), (f = (0, s.UI)(f, w.pr7.SUPPRESS_NOTIFICATIONS)));
            let A = (0, O.Gl)(t, null),
                T = w.Rsh.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
                y = {
                    name: n,
                    auto_archive_duration: A,
                    applied_tags: i,
                    message: { content: e, sticker_ids: r, flags: 0 !== f ? f : void 0 },
                };
            if (null != d && d.length > 0)
                try {
                    let e = await u(d);
                    (h = e.uploaderFile), (y.message.attachments = e.files.map((e, t) => (0, R.OW)(e, t)));
                } catch (r) {
                    let { file: e, code: n, reason: i } = r;
                    throw (
                        ((0, m.k)({
                            file: e,
                            guildId: t.getGuildId(),
                            analyticsLocations: o ?? [],
                            code: n,
                            reason: i,
                        }),
                        r)
                    );
                }
            let N = await j(t, o, h, () => a.Bo.post({ url: T, body: y, rejectWithError: !1 }));
            return (
                c.A.clearDraft(t.id, S.C.ThreadSettings),
                c.A.clearDraft(t.id, S.C.FirstThreadMessage),
                _.A.clearAll(t.id, S.C.FirstThreadMessage),
                (0, E.Lj)({ guildId: t.guild_id, channelId: t.id, postId: N.id }),
                l?.(N),
                N
            );
        },
        [t, n, i, l, o, u],
    );
}
async function j(e, t, i, r) {
    let s,
        a = e.isForumLikeChannel();
    try {
        (s = await r()),
            null == s.body
                ? u.A.show({ title: P.intl.string(P.t.j2d6Km), body: P.intl.string(P.t.fEptJP) })
                : (l.h.dispatch({ type: "SLOWMODE_RESET_COOLDOWN", slowmodeType: N.R.CreateThread, channelId: e.id }),
                  l.h.dispatch({ type: "THREAD_CREATE_LOCAL", channelId: s.body.id }),
                  o.O.announce(P.intl.string(a ? P.t.zDAG2N : P.t.XkUoBb)));
    } catch (r) {
        if (r.body?.code === w.t02.TOO_MANY_THREADS)
            u.A.show({
                title: a ? P.intl.string(P.t.vWNFkx) : P.intl.string(P.t["1KEdvB"]),
                body: a ? P.intl.string(P.t.KGaiEK) : P.intl.string(P.t.P0wT5S),
            });
        else if (r.body?.code === w.t02.TOO_MANY_ANNOUNCEMENT_THREADS)
            u.A.show({ title: P.intl.string(P.t["1KEdvB"]), body: P.intl.string(P.t.jDMxz2) });
        else if (r.body?.code === w.t02.SLOWMODE_RATE_LIMITED) {
            let t = r.body.retry_after ?? 0;
            t > 0 &&
                l.h.dispatch({
                    type: "SLOWMODE_SET_COOLDOWN",
                    channelId: e.id,
                    slowmodeType: N.R.CreateThread,
                    cooldownMs: t * v.A.Millis.SECOND,
                });
        } else if (429 === r.status)
            u.A.show({
                title: a ? P.intl.string(P.t.vWNFkx) : P.intl.string(P.t["1KEdvB"]),
                body: P.intl.string(P.t.Whhv4w),
            });
        else if (L.$j.has(r.body?.code)) throw r;
        else if (r.body?.code === w.t02.INVALID_FORM_BODY && r.body?.errors?.name != null) throw r;
        else if (L.F4.has(r.body?.code)) {
            if (null != i)
                if (r.body?.code === w.t02.EXPLICIT_CONTENT) {
                    let t = (0, A.m)();
                    if (null != r.body.attachments && r.body.attachments.length > 0) {
                        var c;
                        l.h.dispatch({
                            type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                            messageId: t,
                            channelId: e.id,
                            attachments: r.body.attachments,
                        }),
                            (c = e.id),
                            (0, p.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("31688"), n.e("73384"), n.e("66009")]).then(
                                    n.bind(n, 33216),
                                );
                                return (n) => (0, f.jsx)(e, { ...n, channelId: c, messageId: t });
                            });
                    }
                } else
                    (0, m.k)({
                        file: i,
                        guildId: e.getGuildId(),
                        analyticsLocations: t ?? [],
                        code: r.body?.code,
                        reason: r.body?.reason,
                    });
            return new Promise((e, t) => {
                null == r.body && t(),
                    h.A.addConditionalChangeListener(() => {
                        let n = h.A.getAndDeleteMostRecentUserCreatedThreadId();
                        if (null != n) {
                            let i = T.A.getChannel(n);
                            return (
                                l.h.wait(() => {
                                    null == i ? t() : e(i);
                                }),
                                !1
                            );
                        }
                    });
            });
        } else u.A.show({ title: P.intl.string(P.t.j2d6Km), body: P.intl.string(P.t.fEptJP) });
    }
    let _ = await new Promise((e, t) => {
        null == s.body && t(),
            T.A.addConditionalChangeListener(() => {
                let t = T.A.getChannel(s.body.id);
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
        await d.A.fetchMessages({ channelId: _.id, limit: w.EMb });
    } catch (e) {}
    return _;
}
