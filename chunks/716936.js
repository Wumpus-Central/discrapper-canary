l.d(t, { default: () => B }), l(321073);
var s = l(627968),
    n = l(64700),
    a = l(503698),
    i = l.n(a),
    r = l(475825),
    c = l(224640),
    o = l(20742),
    d = l(17928),
    u = l(3026),
    m = l(396478),
    h = l(761508),
    _ = l(834730),
    x = l(778712),
    g = l(289873),
    j = l(364522),
    p = l(297413),
    f = l(966327),
    v = l(964486),
    C = l(736653),
    A = l(505527),
    N = l(649963),
    w = l(734057),
    y = l(287809),
    b = l(486020),
    S = l(690521),
    I = l(562153),
    E = l(841549),
    M = l(969632),
    T = l(951727),
    V = l(812729),
    k = l.n(V),
    R = l(956703),
    D = l(652215),
    U = l(985018),
    G = l(736618);
let q = "/assets/64a47ba893401c1c.svg",
    H = A.v.VOTE;
function O() {
    let e = (0, C.Ay)();
    return (0, s.jsxs)(m.pp, {
        theme: e,
        children: [
            (0, s.jsx)(m.G8, { darkSrc: q, lightSrc: q, width: 106, height: 100, style: { marginBottom: 10 } }),
            (0, s.jsx)(m.SG, {
                note: U.intl.string(U.t.bwytdh),
                noteClassName: G.BI,
                className: G._U,
                children: U.intl.string(U.t.vhQK3o),
            }),
        ],
    });
}
function L(e) {
    let { emoji: t, emojiSize: l, imageClassNames: n, textClassNames: a } = e,
        i = null == t.id ? S.Ay.getURL(t.name) : b.Ay.getEmojiURL({ id: t.id, animated: t.animated ?? !1, size: l });
    return null != i && "" !== i
        ? (0, s.jsx)("img", { className: n, src: i, alt: t.name })
        : (0, s.jsx)("span", { className: a, children: t.name });
}
function P(e) {
    let { poll: t, reactionVoteCounts: l, selectedAnswerId: n, onSelectAnswer: a } = e;
    return (0, s.jsx)(h.V, {
        look: "custom",
        orientation: "vertical",
        "aria-label": U.intl.string(U.t["qbir+4"]),
        selectedItem: n,
        onItemSelect: a,
        children: t.answers.map((e) => {
            let t = String(e.answer_id),
                a = l[t] ?? 0,
                { emoji: r, text: c } = e.poll_media,
                o = U.intl.formatToPlainString(U.t.wqBc7A, { numVotes: a, option: c }),
                d = n === t;
            return (0, s.jsxs)(
                h.V.Item,
                {
                    id: t,
                    disableItemStyles: !0,
                    className: i()({ [G.Ym]: !d, [G.yw]: d }),
                    "aria-label": o,
                    selectedItem: n,
                    children: [
                        null != r
                            ? (0, s.jsx)(L, {
                                  emoji: r,
                                  emojiSize: 16,
                                  imageClassNames: G.Zg,
                                  textClassNames: i()(G.Zg, G.at),
                                  "aria-hidden": !0,
                              })
                            : null,
                        (0, s.jsx)(_.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, s.jsx)(u.A, { position: "left", "aria-hidden": !0, children: c }),
                        }),
                        (0, s.jsxs)(_.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            className: G.Oo,
                            children: ["(", a.toLocaleString(), ")"],
                        }),
                    ],
                },
                t,
            );
        }),
    });
}
function W(e) {
    let { user: t, channel: l } = e,
        n = (0, d.bG)([y.default], () => y.default.getUser(t.id), [t]),
        a = I.Ay.useName(l.guild_id, l.id, t);
    return (0, s.jsxs)("div", {
        className: G.Mg,
        onContextMenu: (e) => (0, E.wQ)(e, t, l),
        children: [
            (0, s.jsx)("div", {
                className: G.x$,
                children: (0, s.jsx)(f.A, { user: n ?? t, size: x._3.SIZE_32, "aria-hidden": !0, guildId: l.guild_id }),
            }),
            (0, s.jsxs)("div", {
                className: G.v3,
                children: [
                    (0, s.jsx)(_.E, {
                        variant: "text-md/normal",
                        className: G.UU,
                        "aria-label": a,
                        children: (0, s.jsx)("span", { className: G.Ci, children: a }),
                    }),
                    (0, s.jsx)(p.A, {
                        user: t,
                        className: G.rW,
                        usernameClass: i()(G.Xh, G.Ci),
                        discriminatorClass: G.D2,
                        forceUsername: !0,
                    }),
                ],
            }),
        ],
    });
}
function z(e) {
    let { message: t, reaction: l, channel: a } = e,
        { reactors: i, hasMore: c } = (function (e) {
            let { channelId: t, messageId: l, reaction: s } = e,
                n = (0, d.bG)(
                    [R.A],
                    () => {
                        let e = R.A.getReactions(t, l, s.emoji, D.WxW, A.v.VOTE);
                        return Array.from(e?.values() ?? []);
                    },
                    [t, l, s.emoji],
                    k(),
                );
            return { reactors: n, hasMore: (s.count_details?.vote ?? 0) > n.length };
        })({ channelId: a.id, messageId: t.id, reaction: l }),
        o = n.useRef(null),
        u = n.useRef(null),
        [m, h] = n.useState(!1),
        _ = n.useCallback(async () => {
            let e = u.current;
            h(!0);
            let s = await N.ao({ channelId: a.id, messageId: t.id, emoji: l.emoji, limit: D.WxW, after: e, type: H });
            (u.current = s[s.length - 1].id), h(!1);
        }, [a.id, t.id, l.emoji]);
    (0, v.Ay)(() => {
        _();
    });
    let x = n.useCallback(() => {
            let { current: e } = o;
            if (null == e) return;
            let t = e.getScrollerState();
            t.scrollTop + t.offsetHeight >= t.scrollHeight - 52 && c && !m && _();
        }, [o, c, m, _]),
        j = n.useCallback(
            (e, t) => (1 === e ? 52 * (0 === t) : 52 * (0 === e && ((0 === t && 0 === i.length) || null != i[t]))),
            [i],
        ),
        p = n.useCallback(
            (e) => {
                let { section: t, row: l } = e,
                    n = i[l];
                return 1 === t
                    ? 0 === l
                        ? (0, s.jsx)(g.y, { className: G.u1 }, "hasMore")
                        : null
                    : 0 === i.length && m
                      ? (0, s.jsx)(g.y, { className: G.u1 }, "loadingMore")
                      : null != n && (0, s.jsx)(W, { channel: a, user: n }, n.id);
            },
            [a, m, i],
        ),
        f = n.useMemo(() => {
            let e = [];
            return 0 === i.length && m ? e.push(1) : (e.push(i.length), c && e.push(1)), e;
        }, [c, m, i.length]);
    return (0, s.jsx)(r.Ei, {
        className: G.Ov,
        fade: !0,
        ref: o,
        sections: f,
        sectionHeight: 0,
        rowHeight: j,
        renderRow: p,
        onScroll: c ? x : void 0,
    });
}
function B(e) {
    let { message: t, initialAnswerId: l, onClose: a, transitionState: i } = e,
        r = (0, d.bG)([w.A], () => w.A.getChannel(t.getChannelId())),
        [u, m] = n.useState(l),
        _ = n.useMemo(() => {
            if (null != t.reactions) return (0, T.Ej)(t.reactions, u);
        }, [t.reactions, u]),
        x = n.useMemo(() => (0, M.aw)(t.reactions), [t.reactions]),
        g = n.useMemo(
            () =>
                (function (e) {
                    let t = {};
                    for (let l of e) {
                        let e = l.count_details?.vote ?? 0,
                            s = l.emoji.id;
                        null != s && (t[s] = e);
                    }
                    return t;
                })(t.reactions),
            [t.reactions],
        ),
        p = g[u],
        f = n.useMemo(() => {
            let e = {};
            return (
                t.poll?.answers.forEach((t) => {
                    t?.answer_id != null && t.poll_media?.text != null && (e[t.answer_id] = t.poll_media.text);
                }),
                e
            );
        }, [t.poll?.answers]),
        v = U.intl.formatToPlainString(U.t.wqBc7A, { numVotes: p, option: f[u] });
    if (null == r) throw Error("PollVotesModal.render: Message does not have a channelId");
    if (null == t.poll) throw Error("PollVotesModal.render: Message does not have a poll");
    return (0, s.jsxs)(c.d, {
        transitionState: i,
        onClose: a,
        size: "lg",
        children: [
            (0, s.jsx)(o.rQ, { title: t.poll.question.text, subtitle: U.intl.format(U.t.XRkuof, { count: x }) }),
            (0, s.jsx)("div", { className: G.jH }),
            (0, s.jsxs)("div", {
                className: G.rf,
                children: [
                    (0, s.jsx)(j.Ip, {
                        className: G.XG,
                        fade: !0,
                        children: (0, s.jsx)(P, {
                            poll: t.poll,
                            selectedAnswerId: u,
                            onSelectAnswer: m,
                            reactionVoteCounts: g,
                        }),
                    }),
                    (0, s.jsx)(h.V.Panel, {
                        id: u,
                        "aria-label": v,
                        className: G.nd,
                        children:
                            null != _ && p > 0
                                ? (0, s.jsx)(z, { message: t, reaction: _, channel: r })
                                : (0, s.jsx)(O, {}),
                    }),
                ],
            }),
        ],
    });
}
