"use strict";
n.d(t, { EN: () => M, Iy: () => x, Nw: () => G, jk: () => w, l1: () => k, r$: () => U, w0: () => F }), n(321073);
var r = n(64700),
    i = n(665260),
    s = n(562465),
    a = n(73153),
    o = n(157559),
    l = n(465532),
    u = n(843472),
    c = n(608299),
    d = n(207777),
    _ = n(496040),
    f = n(853742),
    p = n(301169),
    h = n(451909),
    m = n(195880),
    E = n(677413),
    g = n(734057),
    A = n(31717),
    I = n(320501),
    T = n(101392),
    S = n(927813),
    y = n(661191),
    v = n(292348),
    N = n(268761),
    C = n(406704),
    R = n(474078),
    O = n(37411),
    b = n(652215),
    D = n(381941),
    L = n(985018),
    w = (function (e) {
        return (
            (e[(e.Disabled = 1)] = "Disabled"),
            (e[(e.Enabled = 2)] = "Enabled"),
            (e[(e.PrivateOnly = 3)] = "PrivateOnly"),
            e
        );
    })({});
function M(e) {
    let t = (0, C.n)(e);
    return (0, C.Tb)(e) ? (t ? 2 : 3) : 1;
}
function x(e, t) {
    return 3 === t || (e.isPrivate ?? !1);
}
function P(e, t) {
    return e.length > t ? e.substring(0, t) + "..." : e;
}
function k(e, t) {
    let n = null == t ? null : I.A.getMessage(e.id, t),
        r = n?.embeds?.[0]?.rawTitle ?? "",
        i = n?.poll?.question?.text ?? "";
    if ("" !== r) return P(r, 40);
    {
        if ("" !== i) return P(i, 80);
        let t = h.Ay.unparse(n?.content ?? "", e.id, !0),
            r = (0, R.A)(t.split("\n")[0], !0);
        r = r.replace(/^[ #-]+/, "");
        let s = [];
        for (;;) {
            let e = r.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
            if (null == e || null == e.index) {
                s.push(r);
                break;
            }
            s.push(r.substring(0, e.index)), s.push(e[0]), (r = r.substring(e.index + e[0].length));
        }
        let a = s[0];
        for (let e = 1; e < s.length; e++) {
            let t = a + s[e];
            if (t.length > 40) break;
            a = t;
        }
        return P(a, 40);
    }
}
function U(e) {
    let {
        parentChannel: t,
        parentMessageId: n,
        threadSettings: i,
        privateThreadMode: a,
        location: o,
        onThreadCreated: u,
        useDefaultThreadName: d,
        uploadHandler: _,
    } = e;
    return r.useCallback(
        async (e, r, f) => {
            let p = null == n,
                h = x(i, a),
                m = i.name ?? "";
            if ("" === m && d) {
                let e = k(t, n);
                m = "" !== e ? e : L.intl.string(L.t["7Xm5QI"]);
            }
            let E = (0, N.Gl)(t),
                I = g.A.getChannel(y.default.castMessageIdAsChannelId(n)),
                T = await B(t, [], void 0, () => {
                    let e = null != n ? b.Rsh.CHANNEL_MESSAGE_THREADS(t.id, n) : b.Rsh.CHANNEL_THREADS(t.id);
                    return s.Bo.post({
                        url: e,
                        body: {
                            name: m,
                            type: h
                                ? b.rbe.PRIVATE_THREAD
                                : t.type === b.rbe.GUILD_ANNOUNCEMENT
                                  ? b.rbe.ANNOUNCEMENT_THREAD
                                  : b.rbe.PUBLIC_THREAD,
                            auto_archive_duration: E,
                            location: o,
                        },
                        rejectWithError: !1,
                    });
                });
            T !== I &&
                (l.A.clearDraft(t.id, A.C.ThreadSettings),
                l.A.clearDraft(t.id, A.C.FirstThreadMessage),
                u?.(T),
                (p || e.length > 0 || (null != r && r.length > 0) || (null != f && f.length > 0)) && V(T, e, r, f, _)),
                c.A.clearAll(t.id, A.C.FirstThreadMessage);
        },
        [t, n, i, u, a, o, d, _],
    );
}
function G(e, t, n, r, i) {
    return B(e, [], void 0, () =>
        s.Bo.post({
            url: b.Rsh.CHANNEL_THREADS(e.id),
            body: { name: t, type: n, auto_archive_duration: r, location: i },
            rejectWithError: !1,
        }),
    );
}
function F(e) {
    let { parentChannel: t, name: n, appliedTags: a, analyticsLocations: o, onThreadCreated: u, upload: d } = e;
    return r.useCallback(
        async (e, r, _) => {
            let h,
                m = 0,
                [g, I] = (0, E.A)(e);
            g && ((e = I), (m = (0, i.UI)(m, b.pr7.SUPPRESS_NOTIFICATIONS)));
            let T = (0, N.Gl)(t, null),
                S = b.Rsh.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
                y = {
                    name: n,
                    auto_archive_duration: T,
                    applied_tags: a,
                    message: { content: e, sticker_ids: r, flags: 0 !== m ? m : void 0 },
                };
            if (null != _ && _.length > 0)
                try {
                    let e = await d(_);
                    (h = e.uploaderFile), (y.message.attachments = e.files.map((e, t) => (0, v.OW)(e, t)));
                } catch (i) {
                    let { file: e, code: n, reason: r } = i;
                    throw (
                        ((0, p.k)({
                            file: e,
                            guildId: t.getGuildId(),
                            analyticsLocations: o ?? [],
                            code: n,
                            reason: r,
                        }),
                        i)
                    );
                }
            let C = await B(t, o, h, () => s.Bo.post({ url: S, body: y, rejectWithError: !1 }));
            return (
                l.A.clearDraft(t.id, A.C.ThreadSettings),
                l.A.clearDraft(t.id, A.C.FirstThreadMessage),
                c.A.clearAll(t.id, A.C.FirstThreadMessage),
                (0, f.Lj)({ guildId: t.guild_id, channelId: t.id, postId: C.id }),
                u?.(C),
                C
            );
        },
        [t, n, a, u, o, d],
    );
}
function V(e, t, n, r, i) {
    if (null != i && null != r && r.length > 0) i(e, r, t, n);
    else if (null != n && n.length > 0) return u.A.sendStickers(e.id, n, t, { location: D.Hx.THREAD_CREATION });
    else return u.A.sendMessage(e.id, h.Ay.parse(e, t), void 0, { location: D.Hx.THREAD_CREATION });
}
async function B(e, t, n, r) {
    let i,
        s = e.isForumLikeChannel();
    try {
        (i = await r()),
            null == i.body
                ? o.A.show({ title: L.intl.string(L.t.j2d6Km), body: L.intl.string(L.t.fEptJP) })
                : (a.h.dispatch({ type: "SLOWMODE_RESET_COOLDOWN", slowmodeType: T.R.CreateThread, channelId: e.id }),
                  a.h.dispatch({ type: "THREAD_CREATE_LOCAL", channelId: i.body.id }));
    } catch (r) {
        if (r.body?.code === b.t02.TOO_MANY_THREADS)
            o.A.show({
                title: s ? L.intl.string(L.t.vWNFkx) : L.intl.string(L.t["1KEdvB"]),
                body: s ? L.intl.string(L.t.KGaiEK) : L.intl.string(L.t.P0wT5S),
            });
        else if (r.body?.code === b.t02.TOO_MANY_ANNOUNCEMENT_THREADS)
            o.A.show({ title: L.intl.string(L.t["1KEdvB"]), body: L.intl.string(L.t.jDMxz2) });
        else if (r.body?.code === b.t02.SLOWMODE_RATE_LIMITED) {
            let t = r.body.retry_after ?? 0;
            t > 0 &&
                a.h.dispatch({
                    type: "SLOWMODE_SET_COOLDOWN",
                    channelId: e.id,
                    slowmodeType: T.R.CreateThread,
                    cooldownMs: t * S.A.Millis.SECOND,
                });
        } else if (429 === r.status)
            o.A.show({
                title: s ? L.intl.string(L.t.vWNFkx) : L.intl.string(L.t["1KEdvB"]),
                body: L.intl.string(L.t.Whhv4w),
            });
        else if (O.$j.has(r.body?.code)) throw r;
        else if (r.body?.code === b.t02.INVALID_FORM_BODY && r.body?.errors?.name != null) throw r;
        else if (O.F4.has(r.body?.code)) {
            if (null != n)
                if (r.body?.code === b.t02.EXPLICIT_CONTENT) {
                    let t = (0, m.m)();
                    null != r.body.attachments &&
                        r.body.attachments.length > 0 &&
                        (a.h.dispatch({
                            type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                            messageId: t,
                            channelId: e.id,
                            attachments: r.body.attachments,
                        }),
                        (0, _.A)(e.id, t));
                } else
                    (0, p.k)({
                        file: n,
                        guildId: e.getGuildId(),
                        analyticsLocations: t ?? [],
                        code: r.body?.code,
                        reason: r.body?.reason,
                    });
            return new Promise((e, t) => {
                null == r.body && t(),
                    d.A.addConditionalChangeListener(() => {
                        let n = d.A.getAndDeleteMostRecentUserCreatedThreadId();
                        if (null != n) {
                            let r = g.A.getChannel(n);
                            return (
                                a.h.wait(() => {
                                    null == r ? t() : e(r);
                                }),
                                !1
                            );
                        }
                    });
            });
        } else o.A.show({ title: L.intl.string(L.t.j2d6Km), body: L.intl.string(L.t.fEptJP) });
    }
    let l = await new Promise((e, t) => {
        null == i.body && t(),
            g.A.addConditionalChangeListener(() => {
                let t = g.A.getChannel(i.body.id);
                if (null != t)
                    return (
                        a.h.wait(() => {
                            e(t);
                        }),
                        !1
                    );
            });
    });
    try {
        await u.A.fetchMessages({ channelId: l.id, limit: b.EMb });
    } catch (e) {}
    return l;
}
