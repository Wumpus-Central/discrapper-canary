t.d(l, { default: () => Y }), t(321073);
var s = t(627968),
    n = t(64700),
    a = t(503698),
    i = t.n(a),
    r = t(475825),
    o = t(224640),
    d = t(20742),
    c = t(17928),
    u = t(3026),
    m = t(396478),
    h = t(761508),
    g = t(834730),
    x = t(778712),
    j = t(939249),
    f = t(289873),
    p = t(364522),
    b = t(297413),
    v = t(966327),
    w = t(964486),
    C = t(736653),
    N = t(793574),
    I = t(688810),
    A = t(505527),
    S = t(649963),
    _ = t(148411),
    y = t(975732),
    M = t(734057),
    k = t(287809),
    E = t(486020),
    V = t(690521),
    P = t(562153),
    T = t(841549);
let U = (0, t(945810).mj)({
    name: "2026-06-polls-click-to-profile",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var L = t(969632),
    R = t(951727),
    G = t(812729),
    O = t.n(G),
    q = t(956703),
    H = t(652215),
    W = t(375708),
    z = t(886570);
let B = "/assets/64a47ba893401c1c.svg",
    Q = A.v.VOTE;
function X() {
    let e = (0, C.Ay)();
    return (0, s.jsxs)(m.pp, {
        theme: e,
        children: [
            (0, s.jsx)(m.G8, { darkSrc: B, lightSrc: B, width: 106, height: 100, style: { marginBottom: 10 } }),
            (0, s.jsx)(m.SG, {
                note: W.intl.string(W.t.bwytdh),
                noteClassName: z.BI,
                className: z._U,
                children: W.intl.string(W.t.vhQK3o),
            }),
        ],
    });
}
function Z(e) {
    let { emoji: l, emojiSize: t, imageClassNames: n, textClassNames: a } = e,
        i = null == l.id ? V.Ay.getURL(l.name) : E.Ay.getEmojiURL({ id: l.id, animated: l.animated ?? !1, size: t });
    return null != i && "" !== i
        ? (0, s.jsx)("img", { className: n, src: i, alt: l.name })
        : (0, s.jsx)("span", { className: a, children: l.name });
}
function D(e) {
    let { poll: l, reactionVoteCounts: t, selectedAnswerId: n, onSelectAnswer: a } = e;
    return (0, s.jsx)(h.V, {
        look: "custom",
        orientation: "vertical",
        "aria-label": W.intl.string(W.t["qbir+4"]),
        selectedItem: n,
        onItemSelect: a,
        children: l.answers.map((e) => {
            let l = String(e.answer_id),
                a = t[l] ?? 0,
                { emoji: r, text: o } = e.poll_media,
                d = W.intl.formatToPlainString(W.t.wqBc7A, { numVotes: a, option: o }),
                c = n === l;
            return (0, s.jsxs)(
                h.V.Item,
                {
                    id: l,
                    disableItemStyles: !0,
                    className: i()({ [z.Ym]: !c, [z.yw]: c }),
                    "aria-label": d,
                    selectedItem: n,
                    children: [
                        null != r
                            ? (0, s.jsx)(Z, {
                                  emoji: r,
                                  emojiSize: 16,
                                  imageClassNames: z.Zg,
                                  textClassNames: i()(z.Zg, z.at),
                                  "aria-hidden": !0,
                              })
                            : null,
                        (0, s.jsx)(g.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, s.jsx)(u.A, { position: "left", "aria-hidden": !0, children: o }),
                        }),
                        (0, s.jsxs)(g.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            className: z.Oo,
                            children: ["(", a.toLocaleString(), ")"],
                        }),
                    ],
                },
                l,
            );
        }),
    });
}
function F(e) {
    let { user: l, channel: t, messageId: n, clickToProfileEnabled: a } = e,
        { analyticsLocations: r } = (0, I.Ay)(N.A.POLL_VOTES),
        o = (0, c.bG)([k.default], () => k.default.getUser(l.id), [l]),
        d = P.Ay.useName(t.guild_id, t.id, l);
    async function u() {
        await (0, _.A)(l, { guildId: t.guild_id, channelId: t.id }),
            (0, y.openUserProfileModal)({
                userId: l.id,
                guildId: t.guild_id,
                channelId: t.id,
                messageId: n,
                sourceAnalyticsLocations: r,
            });
    }
    let m = (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: z.x$,
                children: (0, s.jsx)(v.A, { user: o ?? l, size: x._3.SIZE_32, "aria-hidden": !0, guildId: t.guild_id }),
            }),
            (0, s.jsxs)("div", {
                className: z.v3,
                children: [
                    (0, s.jsx)(g.E, {
                        variant: "text-md/normal",
                        className: z.UU,
                        "aria-label": d,
                        children: (0, s.jsx)("span", { className: z.Ci, children: d }),
                    }),
                    (0, s.jsx)(b.A, {
                        user: l,
                        className: z.rW,
                        usernameClass: i()(z.Xh, z.Ci),
                        discriminatorClass: z.D2,
                        forceUsername: !0,
                    }),
                ],
            }),
        ],
    });
    return a
        ? (0, s.jsx)(j.D, { className: z.Ls, onClick: u, onContextMenu: (e) => (0, T.wQ)(e, l, t), children: m })
        : (0, s.jsx)("div", { className: z.Mg, onContextMenu: (e) => (0, T.wQ)(e, l, t), children: m });
}
function K(e) {
    let { message: l, reaction: t, channel: a, clickToProfileEnabled: i } = e,
        { reactors: o, hasMore: d } = (function (e) {
            let { channelId: l, messageId: t, reaction: s } = e,
                n = (0, c.bG)(
                    [q.A],
                    () => {
                        let e = q.A.getReactions(l, t, s.emoji, H.WxW, A.v.VOTE);
                        return Array.from(e?.values() ?? []);
                    },
                    [l, t, s.emoji],
                    O(),
                );
            return { reactors: n, hasMore: (s.count_details?.vote ?? 0) > n.length };
        })({ channelId: a.id, messageId: l.id, reaction: t }),
        u = n.useRef(null),
        m = n.useRef(null),
        [h, g] = n.useState(!1),
        x = n.useCallback(async () => {
            let e = m.current;
            g(!0);
            let s = await S.ao({ channelId: a.id, messageId: l.id, emoji: t.emoji, limit: H.WxW, after: e, type: Q });
            (m.current = s[s.length - 1].id), g(!1);
        }, [a.id, l.id, t.emoji]);
    (0, w.Ay)(() => {
        x();
    });
    let j = n.useCallback(() => {
            let { current: e } = u;
            if (null == e) return;
            let l = e.getScrollerState();
            l.scrollTop + l.offsetHeight >= l.scrollHeight - 52 && d && !h && x();
        }, [u, d, h, x]),
        p = n.useCallback(
            (e, l) => (1 === e ? 52 * (0 === l) : 52 * (0 === e && ((0 === l && 0 === o.length) || null != o[l]))),
            [o],
        ),
        b = n.useCallback(
            (e) => {
                let { section: t, row: n } = e,
                    r = o[n];
                return 1 === t
                    ? 0 === n
                        ? (0, s.jsx)(f.y, { className: z.u1 }, "hasMore")
                        : null
                    : 0 === o.length && h
                      ? (0, s.jsx)(f.y, { className: z.u1 }, "loadingMore")
                      : null != r &&
                        (0, s.jsx)(F, { channel: a, messageId: l.id, user: r, clickToProfileEnabled: i }, r.id);
            },
            [a, h, o, l.id, i],
        ),
        v = n.useMemo(() => {
            let e = [];
            return 0 === o.length && h ? e.push(1) : (e.push(o.length), d && e.push(1)), e;
        }, [d, h, o.length]);
    return (0, s.jsx)(r.Ei, {
        className: z.Ov,
        fade: !0,
        ref: u,
        sections: v,
        sectionHeight: 0,
        rowHeight: p,
        renderRow: b,
        onScroll: d ? j : void 0,
    });
}
function Y(e) {
    let { message: l, initialAnswerId: t, onClose: a, transitionState: i } = e,
        r = (0, c.bG)([M.A], () => M.A.getChannel(l.getChannelId())),
        { enabled: u } = U.useConfig({ location: "PollVotesModal" }),
        [m, g] = n.useState(t),
        x = n.useMemo(() => {
            if (null != l.reactions) return (0, R.Ej)(l.reactions, m);
        }, [l.reactions, m]),
        j = n.useMemo(() => (0, L.aw)(l.reactions), [l.reactions]),
        f = n.useMemo(
            () =>
                (function (e) {
                    let l = {};
                    for (let t of e) {
                        let e = t.count_details?.vote ?? 0,
                            s = t.emoji.id;
                        null != s && (l[s] = e);
                    }
                    return l;
                })(l.reactions),
            [l.reactions],
        ),
        b = f[m],
        v = n.useMemo(() => {
            let e = {};
            return (
                l.poll?.answers.forEach((l) => {
                    l?.answer_id != null && l.poll_media?.text != null && (e[l.answer_id] = l.poll_media.text);
                }),
                e
            );
        }, [l.poll?.answers]),
        w = W.intl.formatToPlainString(W.t.wqBc7A, { numVotes: b, option: v[m] });
    if (null == r) throw Error("PollVotesModal.render: Message does not have a channelId");
    if (null == l.poll) throw Error("PollVotesModal.render: Message does not have a poll");
    return (0, s.jsxs)(o.d, {
        transitionState: i,
        onClose: a,
        size: "lg",
        "aria-label": l.poll.question.text,
        children: [
            (0, s.jsx)(d.rQ, { title: l.poll.question.text, subtitle: W.intl.format(W.t.XRkuof, { count: j }) }),
            (0, s.jsx)("div", { className: z.jH }),
            (0, s.jsxs)("div", {
                className: z.rf,
                children: [
                    (0, s.jsx)(p.Ip, {
                        className: z.XG,
                        fade: !0,
                        children: (0, s.jsx)(D, {
                            poll: l.poll,
                            selectedAnswerId: m,
                            onSelectAnswer: g,
                            reactionVoteCounts: f,
                        }),
                    }),
                    (0, s.jsx)(h.V.Panel, {
                        id: m,
                        "aria-label": w,
                        className: z.nd,
                        children:
                            null != x && b > 0
                                ? (0, s.jsx)(K, { message: l, reaction: x, channel: r, clickToProfileEnabled: u })
                                : (0, s.jsx)(X, {}),
                    }),
                ],
            }),
        ],
    });
}
