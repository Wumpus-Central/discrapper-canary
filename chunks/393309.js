n.d(t, { EN: () => G, Iy: () => w, Nw: () => F, jk: () => y, l1: () => V, r$: () => B, w0: () => k }), n(321073);
var i,
    a = n(64700),
    r = n(665260),
    s = n(636537),
    l = n(765178),
    o = n(228366),
    d = n(157559),
    c = n(465532),
    _ = n(720149),
    E = n(608299),
    u = n(207777),
    A = n(496040),
    I = n(853742),
    T = n(301169),
    h = n(451909),
    S = n(195880),
    N = n(677413),
    f = n(734057),
    p = n(31717),
    m = n(232835),
    O = n(101392),
    C = n(927813),
    R = n(935208),
    g = n(292348),
    L = n(268761),
    D = n(406704),
    b = n(474078),
    M = n(37411),
    P = n(652215),
    U = n(381941),
    v = n(985018),
    y =
        (((i = {})[(i.Disabled = 1)] = "Disabled"),
        (i[(i.Enabled = 2)] = "Enabled"),
        (i[(i.PrivateOnly = 3)] = "PrivateOnly"),
        i);
function G(e) {
    let t = (0, D.n)(e);
    return (0, D.Tb)(e) ? (t ? 2 : 3) : 1;
}
function w(e, t) {
    return 3 === t || (e.isPrivate ?? !1);
}
function x(e, t) {
    return e.length > t ? e.substring(0, t) + "..." : e;
}
function V(e, t) {
    let n = null == t ? null : m.A.getMessage(e.id, t),
        i = n?.getContentMessage(),
        a = i?.embeds?.[0]?.rawTitle ?? "",
        r = n?.poll?.question?.text ?? "";
    if ("" !== a) return x(a, 40);
    {
        if ("" !== r) return x(r, 80);
        let t = h.Ay.unparse(i?.content ?? "", e.id, !0),
            n = (0, b.A)(t.split("\n")[0], !0);
        n = n.replace(/^[ #-]+/, "");
        let a = [];
        for (;;) {
            let e = n.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
            if (null == e || null == e.index) {
                a.push(n);
                break;
            }
            a.push(n.substring(0, e.index)), a.push(e[0]), (n = n.substring(e.index + e[0].length));
        }
        let s = a[0];
        for (let e = 1; e < a.length; e++) {
            let t = s + a[e];
            if (t.length > 40) break;
            s = t;
        }
        return x(s, 40);
    }
}
function B(e) {
    let {
        parentChannel: t,
        parentMessageId: n,
        threadSettings: i,
        privateThreadMode: r,
        location: l,
        onThreadCreated: o,
        useDefaultThreadName: d,
        uploadHandler: u,
    } = e;
    return a.useCallback(
        async (e, a, A) => {
            var I, T, S, N, m;
            let O = null == n,
                C = w(i, r),
                g = i.name ?? "";
            if ("" === g && d) {
                let e = V(t, n);
                g = "" !== e ? e : v.intl.string(v.t["7Xm5QI"]);
            }
            let D = (0, L.Gl)(t),
                b = f.A.getChannel(R.default.castMessageIdAsChannelId(n)),
                M = await H(t, [], void 0, () => {
                    let e = null != n ? P.Rsh.CHANNEL_MESSAGE_THREADS(t.id, n) : P.Rsh.CHANNEL_THREADS(t.id);
                    return s.Bo.post({
                        url: e,
                        body: {
                            name: g,
                            type: C
                                ? P.rbe.PRIVATE_THREAD
                                : t.type === P.rbe.GUILD_ANNOUNCEMENT
                                  ? P.rbe.ANNOUNCEMENT_THREAD
                                  : P.rbe.PUBLIC_THREAD,
                            auto_archive_duration: D,
                            location: l,
                        },
                        rejectWithError: !1,
                    });
                });
            M !== b &&
                (c.A.clearDraft(t.id, p.C.ThreadSettings),
                c.A.clearDraft(t.id, p.C.FirstThreadMessage),
                o?.(M),
                (O || e.length > 0 || (null != a && a.length > 0) || (null != A && A.length > 0)) &&
                    ((I = M),
                    (T = e),
                    (S = a),
                    (N = A),
                    null != (m = u) && null != N && N.length > 0
                        ? m(I, N, T, S)
                        : null != S && S.length > 0
                          ? _.A.sendStickers(I.id, S, T, { location: U.Hx.THREAD_CREATION })
                          : _.A.sendMessage(I.id, h.Ay.parse(I, T), void 0, { location: U.Hx.THREAD_CREATION }))),
                E.A.clearAll(t.id, p.C.FirstThreadMessage);
        },
        [t, n, i, o, r, l, d, u],
    );
}
function F(e, t, n, i, a) {
    return H(e, [], void 0, () =>
        s.Bo.post({
            url: P.Rsh.CHANNEL_THREADS(e.id),
            body: { name: t, type: n, auto_archive_duration: i, location: a },
            rejectWithError: !1,
        }),
    );
}
function k(e) {
    let { parentChannel: t, name: n, appliedTags: i, analyticsLocations: l, onThreadCreated: o, upload: d } = e;
    return a.useCallback(
        async (e, a, _) => {
            let u,
                A = 0,
                [h, S] = (0, N.A)(e);
            h && ((e = S), (A = (0, r.UI)(A, P.pr7.SUPPRESS_NOTIFICATIONS)));
            let f = (0, L.Gl)(t, null),
                m = P.Rsh.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
                O = {
                    name: n,
                    auto_archive_duration: f,
                    applied_tags: i,
                    message: { content: e, sticker_ids: a, flags: 0 !== A ? A : void 0 },
                };
            if (null != _ && _.length > 0)
                try {
                    let e = await d(_);
                    (u = e.uploaderFile), (O.message.attachments = e.files.map((e, t) => (0, g.OW)(e, t)));
                } catch (a) {
                    let { file: e, code: n, reason: i } = a;
                    throw (
                        ((0, T.k)({
                            file: e,
                            guildId: t.getGuildId(),
                            analyticsLocations: l ?? [],
                            code: n,
                            reason: i,
                        }),
                        a)
                    );
                }
            let C = await H(t, l, u, () => s.Bo.post({ url: m, body: O, rejectWithError: !1 }));
            return (
                c.A.clearDraft(t.id, p.C.ThreadSettings),
                c.A.clearDraft(t.id, p.C.FirstThreadMessage),
                E.A.clearAll(t.id, p.C.FirstThreadMessage),
                (0, I.Lj)({ guildId: t.guild_id, channelId: t.id, postId: C.id }),
                o?.(C),
                C
            );
        },
        [t, n, i, o, l, d],
    );
}
async function H(e, t, n, i) {
    let a,
        r = e.isForumLikeChannel();
    try {
        (a = await i()),
            null == a.body
                ? d.A.show({ title: v.intl.string(v.t.j2d6Km), body: v.intl.string(v.t.fEptJP) })
                : (o.h.dispatch({ type: "SLOWMODE_RESET_COOLDOWN", slowmodeType: O.R.CreateThread, channelId: e.id }),
                  o.h.dispatch({ type: "THREAD_CREATE_LOCAL", channelId: a.body.id }),
                  l.O.announce(v.intl.string(r ? v.t.zDAG2N : v.t.XkUoBb)));
    } catch (i) {
        if (i.body?.code === P.t02.TOO_MANY_THREADS)
            d.A.show({
                title: r ? v.intl.string(v.t.vWNFkx) : v.intl.string(v.t["1KEdvB"]),
                body: r ? v.intl.string(v.t.KGaiEK) : v.intl.string(v.t.P0wT5S),
            });
        else if (i.body?.code === P.t02.TOO_MANY_ANNOUNCEMENT_THREADS)
            d.A.show({ title: v.intl.string(v.t["1KEdvB"]), body: v.intl.string(v.t.jDMxz2) });
        else if (i.body?.code === P.t02.SLOWMODE_RATE_LIMITED) {
            let t = i.body.retry_after ?? 0;
            t > 0 &&
                o.h.dispatch({
                    type: "SLOWMODE_SET_COOLDOWN",
                    channelId: e.id,
                    slowmodeType: O.R.CreateThread,
                    cooldownMs: t * C.A.Millis.SECOND,
                });
        } else if (429 === i.status)
            d.A.show({
                title: r ? v.intl.string(v.t.vWNFkx) : v.intl.string(v.t["1KEdvB"]),
                body: v.intl.string(v.t.Whhv4w),
            });
        else if (M.$j.has(i.body?.code)) throw i;
        else if (i.body?.code === P.t02.INVALID_FORM_BODY && i.body?.errors?.name != null) throw i;
        else if (M.F4.has(i.body?.code)) {
            if (null != n)
                if (i.body?.code === P.t02.EXPLICIT_CONTENT) {
                    let t = (0, S.m)();
                    null != i.body.attachments &&
                        i.body.attachments.length > 0 &&
                        (o.h.dispatch({
                            type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                            messageId: t,
                            channelId: e.id,
                            attachments: i.body.attachments,
                        }),
                        (0, A.A)(e.id, t));
                } else
                    (0, T.k)({
                        file: n,
                        guildId: e.getGuildId(),
                        analyticsLocations: t ?? [],
                        code: i.body?.code,
                        reason: i.body?.reason,
                    });
            return new Promise((e, t) => {
                null == i.body && t(),
                    u.A.addConditionalChangeListener(() => {
                        let n = u.A.getAndDeleteMostRecentUserCreatedThreadId();
                        if (null != n) {
                            let i = f.A.getChannel(n);
                            return (
                                o.h.wait(() => {
                                    null == i ? t() : e(i);
                                }),
                                !1
                            );
                        }
                    });
            });
        } else d.A.show({ title: v.intl.string(v.t.j2d6Km), body: v.intl.string(v.t.fEptJP) });
    }
    let s = await new Promise((e, t) => {
        null == a.body && t(),
            f.A.addConditionalChangeListener(() => {
                let t = f.A.getChannel(a.body.id);
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
        await _.A.fetchMessages({ channelId: s.id, limit: P.EMb });
    } catch (e) {}
    return s;
}
