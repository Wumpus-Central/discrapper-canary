n.d(t, { EN: () => v, Iy: () => B, Nw: () => H, jk: () => G, l1: () => F, r$: () => V, w0: () => k }), n(321073);
var i,
    r = n(64700),
    a = n(665260),
    s = n(636537),
    _ = n(765178),
    l = n(228366),
    o = n(157559),
    E = n(465532),
    d = n(720149),
    c = n(608299),
    u = n(207777),
    I = n(496040),
    A = n(853742),
    T = n(301169),
    S = n(451909),
    N = n(195880),
    O = n(677413),
    R = n(734057),
    f = n(31717),
    C = n(232835),
    p = n(101392),
    m = n(927813),
    L = n(935208),
    D = n(292348),
    h = n(268761),
    g = n(406704),
    b = n(474078),
    U = n(37411),
    P = n(652215),
    M = n(381941),
    y = n(985018),
    G =
        (((i = {})[(i.Disabled = 1)] = "Disabled"),
        (i[(i.Enabled = 2)] = "Enabled"),
        (i[(i.PrivateOnly = 3)] = "PrivateOnly"),
        i);
function v(e) {
    let t = (0, g.n)(e);
    return (0, g.Tb)(e) ? (t ? 2 : 3) : 1;
}
function B(e, t) {
    return 3 === t || (e.isPrivate ?? !1);
}
function w(e, t) {
    return e.length > t ? e.substring(0, t) + "..." : e;
}
function F(e, t) {
    let n = null == t ? null : C.A.getMessage(e.id, t),
        i = n?.getContentMessage(),
        r = i?.embeds?.[0]?.rawTitle ?? "",
        a = n?.poll?.question?.text ?? "";
    if ("" !== r) return w(r, 40);
    {
        if ("" !== a) return w(a, 80);
        let t = S.Ay.unparse(i?.content ?? "", e.id, !0),
            n = (0, b.A)(t.split("\n")[0], !0);
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
        return w(s, 40);
    }
}
function V(e) {
    let {
        parentChannel: t,
        parentMessageId: n,
        threadSettings: i,
        privateThreadMode: a,
        location: _,
        onThreadCreated: l,
        useDefaultThreadName: o,
        uploadHandler: u,
    } = e;
    return r.useCallback(
        async (e, r, I) => {
            var A, T, N, O, C;
            let p = null == n,
                m = B(i, a),
                D = i.name ?? "";
            if ("" === D && o) {
                let e = F(t, n);
                D = "" !== e ? e : y.intl.string(y.t["7Xm5QI"]);
            }
            let g = (0, h.Gl)(t),
                b = R.A.getChannel(L.default.castMessageIdAsChannelId(n)),
                U = await x(t, [], void 0, () => {
                    let e = null != n ? P.Rsh.CHANNEL_MESSAGE_THREADS(t.id, n) : P.Rsh.CHANNEL_THREADS(t.id);
                    return s.Bo.post({
                        url: e,
                        body: {
                            name: D,
                            type: m
                                ? P.rbe.PRIVATE_THREAD
                                : t.type === P.rbe.GUILD_ANNOUNCEMENT
                                  ? P.rbe.ANNOUNCEMENT_THREAD
                                  : P.rbe.PUBLIC_THREAD,
                            auto_archive_duration: g,
                            location: _,
                        },
                        rejectWithError: !1,
                    });
                });
            U !== b &&
                (E.A.clearDraft(t.id, f.C.ThreadSettings),
                E.A.clearDraft(t.id, f.C.FirstThreadMessage),
                l?.(U),
                (p || e.length > 0 || (null != r && r.length > 0) || (null != I && I.length > 0)) &&
                    ((A = U),
                    (T = e),
                    (N = r),
                    (O = I),
                    null != (C = u) && null != O && O.length > 0
                        ? C(A, O, T, N)
                        : null != N && N.length > 0
                          ? d.A.sendStickers(A.id, N, T, { location: M.Hx.THREAD_CREATION })
                          : d.A.sendMessage(A.id, S.Ay.parse(A, T), void 0, { location: M.Hx.THREAD_CREATION }))),
                c.A.clearAll(t.id, f.C.FirstThreadMessage);
        },
        [t, n, i, l, a, _, o, u],
    );
}
function H(e, t, n, i, r) {
    return x(e, [], void 0, () =>
        s.Bo.post({
            url: P.Rsh.CHANNEL_THREADS(e.id),
            body: { name: t, type: n, auto_archive_duration: i, location: r },
            rejectWithError: !1,
        }),
    );
}
function k(e) {
    let { parentChannel: t, name: n, appliedTags: i, analyticsLocations: _, onThreadCreated: l, upload: o } = e;
    return r.useCallback(
        async (e, r, d) => {
            let u,
                I = 0,
                [S, N] = (0, O.A)(e);
            S && ((e = N), (I = (0, a.UI)(I, P.pr7.SUPPRESS_NOTIFICATIONS)));
            let R = (0, h.Gl)(t, null),
                C = P.Rsh.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
                p = {
                    name: n,
                    auto_archive_duration: R,
                    applied_tags: i,
                    message: { content: e, sticker_ids: r, flags: 0 !== I ? I : void 0 },
                };
            if (null != d && d.length > 0)
                try {
                    let e = await o(d);
                    (u = e.uploaderFile), (p.message.attachments = e.files.map((e, t) => (0, D.OW)(e, t)));
                } catch (r) {
                    let { file: e, code: n, reason: i } = r;
                    throw (
                        ((0, T.k)({
                            file: e,
                            guildId: t.getGuildId(),
                            analyticsLocations: _ ?? [],
                            code: n,
                            reason: i,
                        }),
                        r)
                    );
                }
            let m = await x(t, _, u, () => s.Bo.post({ url: C, body: p, rejectWithError: !1 }));
            return (
                E.A.clearDraft(t.id, f.C.ThreadSettings),
                E.A.clearDraft(t.id, f.C.FirstThreadMessage),
                c.A.clearAll(t.id, f.C.FirstThreadMessage),
                (0, A.Lj)({ guildId: t.guild_id, channelId: t.id, postId: m.id }),
                l?.(m),
                m
            );
        },
        [t, n, i, l, _, o],
    );
}
async function x(e, t, n, i) {
    let r,
        a = e.isForumLikeChannel();
    try {
        (r = await i()),
            null == r.body
                ? o.A.show({ title: y.intl.string(y.t.j2d6Km), body: y.intl.string(y.t.fEptJP) })
                : (l.h.dispatch({ type: "SLOWMODE_RESET_COOLDOWN", slowmodeType: p.R.CreateThread, channelId: e.id }),
                  l.h.dispatch({ type: "THREAD_CREATE_LOCAL", channelId: r.body.id }),
                  _.O.announce(y.intl.string(a ? y.t.zDAG2N : y.t.XkUoBb)));
    } catch (i) {
        if (i.body?.code === P.t02.TOO_MANY_THREADS)
            o.A.show({
                title: a ? y.intl.string(y.t.vWNFkx) : y.intl.string(y.t["1KEdvB"]),
                body: a ? y.intl.string(y.t.KGaiEK) : y.intl.string(y.t.P0wT5S),
            });
        else if (i.body?.code === P.t02.TOO_MANY_ANNOUNCEMENT_THREADS)
            o.A.show({ title: y.intl.string(y.t["1KEdvB"]), body: y.intl.string(y.t.jDMxz2) });
        else if (i.body?.code === P.t02.SLOWMODE_RATE_LIMITED) {
            let t = i.body.retry_after ?? 0;
            t > 0 &&
                l.h.dispatch({
                    type: "SLOWMODE_SET_COOLDOWN",
                    channelId: e.id,
                    slowmodeType: p.R.CreateThread,
                    cooldownMs: t * m.A.Millis.SECOND,
                });
        } else if (429 === i.status)
            o.A.show({
                title: a ? y.intl.string(y.t.vWNFkx) : y.intl.string(y.t["1KEdvB"]),
                body: y.intl.string(y.t.Whhv4w),
            });
        else if (U.$j.has(i.body?.code)) throw i;
        else if (i.body?.code === P.t02.INVALID_FORM_BODY && i.body?.errors?.name != null) throw i;
        else if (U.F4.has(i.body?.code)) {
            if (null != n)
                if (i.body?.code === P.t02.EXPLICIT_CONTENT) {
                    let t = (0, N.m)();
                    null != i.body.attachments &&
                        i.body.attachments.length > 0 &&
                        (l.h.dispatch({
                            type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                            messageId: t,
                            channelId: e.id,
                            attachments: i.body.attachments,
                        }),
                        (0, I.A)(e.id, t));
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
                            let i = R.A.getChannel(n);
                            return (
                                l.h.wait(() => {
                                    null == i ? t() : e(i);
                                }),
                                !1
                            );
                        }
                    });
            });
        } else o.A.show({ title: y.intl.string(y.t.j2d6Km), body: y.intl.string(y.t.fEptJP) });
    }
    let s = await new Promise((e, t) => {
        null == r.body && t(),
            R.A.addConditionalChangeListener(() => {
                let t = R.A.getChannel(r.body.id);
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
        await d.A.fetchMessages({ channelId: s.id, limit: P.EMb });
    } catch (e) {}
    return s;
}
