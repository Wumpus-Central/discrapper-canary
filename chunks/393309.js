"use strict";
n.d(t, { EN: () => P, Iy: () => x, Nw: () => F, jk: () => M, l1: () => U, r$: () => G, w0: () => V }), n(321073);
var r = n(64700),
    i = n(665260),
    s = n(562465),
    a = n(582754),
    o = n(73153),
    l = n(157559),
    u = n(465532),
    c = n(843472),
    d = n(608299),
    _ = n(207777),
    f = n(496040),
    p = n(853742),
    h = n(301169),
    m = n(451909),
    E = n(195880),
    g = n(677413),
    A = n(734057),
    I = n(31717),
    T = n(320501),
    S = n(101392),
    y = n(927813),
    v = n(661191),
    N = n(292348),
    C = n(268761),
    R = n(406704),
    O = n(474078),
    b = n(37411),
    D = n(652215),
    L = n(381941),
    w = n(985018),
    M = (function (e) {
        return (
            (e[(e.Disabled = 1)] = "Disabled"),
            (e[(e.Enabled = 2)] = "Enabled"),
            (e[(e.PrivateOnly = 3)] = "PrivateOnly"),
            e
        );
    })({});
function P(e) {
    let t = (0, R.n)(e);
    return (0, R.Tb)(e) ? (t ? 2 : 3) : 1;
}
function x(e, t) {
    return 3 === t || (e.isPrivate ?? !1);
}
function k(e, t) {
    return e.length > t ? e.substring(0, t) + "..." : e;
}
function U(e, t) {
    let n = null == t ? null : T.A.getMessage(e.id, t),
        r = n?.getContentMessage(),
        i = r?.embeds?.[0]?.rawTitle ?? "",
        s = n?.poll?.question?.text ?? "";
    if ("" !== i) return k(i, 40);
    {
        if ("" !== s) return k(s, 80);
        let t = m.Ay.unparse(r?.content ?? "", e.id, !0),
            n = (0, O.A)(t.split("\n")[0], !0);
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
        return k(a, 40);
    }
}
function G(e) {
    let {
        parentChannel: t,
        parentMessageId: n,
        threadSettings: i,
        privateThreadMode: a,
        location: o,
        onThreadCreated: l,
        useDefaultThreadName: c,
        uploadHandler: _,
    } = e;
    return r.useCallback(
        async (e, r, f) => {
            let p = null == n,
                h = x(i, a),
                m = i.name ?? "";
            if ("" === m && c) {
                let e = U(t, n);
                m = "" !== e ? e : w.intl.string(w.t["7Xm5QI"]);
            }
            let E = (0, C.Gl)(t),
                g = A.A.getChannel(v.default.castMessageIdAsChannelId(n)),
                T = await H(t, [], void 0, () => {
                    let e = null != n ? D.Rsh.CHANNEL_MESSAGE_THREADS(t.id, n) : D.Rsh.CHANNEL_THREADS(t.id);
                    return s.Bo.post({
                        url: e,
                        body: {
                            name: m,
                            type: h
                                ? D.rbe.PRIVATE_THREAD
                                : t.type === D.rbe.GUILD_ANNOUNCEMENT
                                  ? D.rbe.ANNOUNCEMENT_THREAD
                                  : D.rbe.PUBLIC_THREAD,
                            auto_archive_duration: E,
                            location: o,
                        },
                        rejectWithError: !1,
                    });
                });
            T !== g &&
                (u.A.clearDraft(t.id, I.C.ThreadSettings),
                u.A.clearDraft(t.id, I.C.FirstThreadMessage),
                l?.(T),
                (p || e.length > 0 || (null != r && r.length > 0) || (null != f && f.length > 0)) && B(T, e, r, f, _)),
                d.A.clearAll(t.id, I.C.FirstThreadMessage);
        },
        [t, n, i, l, a, o, c, _],
    );
}
function F(e, t, n, r, i) {
    return H(e, [], void 0, () =>
        s.Bo.post({
            url: D.Rsh.CHANNEL_THREADS(e.id),
            body: { name: t, type: n, auto_archive_duration: r, location: i },
            rejectWithError: !1,
        }),
    );
}
function V(e) {
    let { parentChannel: t, name: n, appliedTags: a, analyticsLocations: o, onThreadCreated: l, upload: c } = e;
    return r.useCallback(
        async (e, r, _) => {
            let f,
                m = 0,
                [E, A] = (0, g.A)(e);
            E && ((e = A), (m = (0, i.UI)(m, D.pr7.SUPPRESS_NOTIFICATIONS)));
            let T = (0, C.Gl)(t, null),
                S = D.Rsh.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
                y = {
                    name: n,
                    auto_archive_duration: T,
                    applied_tags: a,
                    message: { content: e, sticker_ids: r, flags: 0 !== m ? m : void 0 },
                };
            if (null != _ && _.length > 0)
                try {
                    let e = await c(_);
                    (f = e.uploaderFile), (y.message.attachments = e.files.map((e, t) => (0, N.OW)(e, t)));
                } catch (i) {
                    let { file: e, code: n, reason: r } = i;
                    throw (
                        ((0, h.k)({
                            file: e,
                            guildId: t.getGuildId(),
                            analyticsLocations: o ?? [],
                            code: n,
                            reason: r,
                        }),
                        i)
                    );
                }
            let v = await H(t, o, f, () => s.Bo.post({ url: S, body: y, rejectWithError: !1 }));
            return (
                u.A.clearDraft(t.id, I.C.ThreadSettings),
                u.A.clearDraft(t.id, I.C.FirstThreadMessage),
                d.A.clearAll(t.id, I.C.FirstThreadMessage),
                (0, p.Lj)({ guildId: t.guild_id, channelId: t.id, postId: v.id }),
                l?.(v),
                v
            );
        },
        [t, n, a, l, o, c],
    );
}
function B(e, t, n, r, i) {
    if (null != i && null != r && r.length > 0) i(e, r, t, n);
    else if (null != n && n.length > 0) return c.A.sendStickers(e.id, n, t, { location: L.Hx.THREAD_CREATION });
    else return c.A.sendMessage(e.id, m.Ay.parse(e, t), void 0, { location: L.Hx.THREAD_CREATION });
}
async function H(e, t, n, r) {
    let i,
        s = e.isForumLikeChannel();
    try {
        (i = await r()),
            null == i.body
                ? l.A.show({ title: w.intl.string(w.t.j2d6Km), body: w.intl.string(w.t.fEptJP) })
                : (o.h.dispatch({ type: "SLOWMODE_RESET_COOLDOWN", slowmodeType: S.R.CreateThread, channelId: e.id }),
                  o.h.dispatch({ type: "THREAD_CREATE_LOCAL", channelId: i.body.id }),
                  a.OR.announce(w.intl.string(s ? w.t.zDAG2N : w.t.XkUoBb)));
    } catch (r) {
        if (r.body?.code === D.t02.TOO_MANY_THREADS)
            l.A.show({
                title: s ? w.intl.string(w.t.vWNFkx) : w.intl.string(w.t["1KEdvB"]),
                body: s ? w.intl.string(w.t.KGaiEK) : w.intl.string(w.t.P0wT5S),
            });
        else if (r.body?.code === D.t02.TOO_MANY_ANNOUNCEMENT_THREADS)
            l.A.show({ title: w.intl.string(w.t["1KEdvB"]), body: w.intl.string(w.t.jDMxz2) });
        else if (r.body?.code === D.t02.SLOWMODE_RATE_LIMITED) {
            let t = r.body.retry_after ?? 0;
            t > 0 &&
                o.h.dispatch({
                    type: "SLOWMODE_SET_COOLDOWN",
                    channelId: e.id,
                    slowmodeType: S.R.CreateThread,
                    cooldownMs: t * y.A.Millis.SECOND,
                });
        } else if (429 === r.status)
            l.A.show({
                title: s ? w.intl.string(w.t.vWNFkx) : w.intl.string(w.t["1KEdvB"]),
                body: w.intl.string(w.t.Whhv4w),
            });
        else if (b.$j.has(r.body?.code)) throw r;
        else if (r.body?.code === D.t02.INVALID_FORM_BODY && r.body?.errors?.name != null) throw r;
        else if (b.F4.has(r.body?.code)) {
            if (null != n)
                if (r.body?.code === D.t02.EXPLICIT_CONTENT) {
                    let t = (0, E.m)();
                    null != r.body.attachments &&
                        r.body.attachments.length > 0 &&
                        (o.h.dispatch({
                            type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                            messageId: t,
                            channelId: e.id,
                            attachments: r.body.attachments,
                        }),
                        (0, f.A)(e.id, t));
                } else
                    (0, h.k)({
                        file: n,
                        guildId: e.getGuildId(),
                        analyticsLocations: t ?? [],
                        code: r.body?.code,
                        reason: r.body?.reason,
                    });
            return new Promise((e, t) => {
                null == r.body && t(),
                    _.A.addConditionalChangeListener(() => {
                        let n = _.A.getAndDeleteMostRecentUserCreatedThreadId();
                        if (null != n) {
                            let r = A.A.getChannel(n);
                            return (
                                o.h.wait(() => {
                                    null == r ? t() : e(r);
                                }),
                                !1
                            );
                        }
                    });
            });
        } else l.A.show({ title: w.intl.string(w.t.j2d6Km), body: w.intl.string(w.t.fEptJP) });
    }
    let u = await new Promise((e, t) => {
        null == i.body && t(),
            A.A.addConditionalChangeListener(() => {
                let t = A.A.getChannel(i.body.id);
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
        await c.A.fetchMessages({ channelId: u.id, limit: D.EMb });
    } catch (e) {}
    return u;
}
