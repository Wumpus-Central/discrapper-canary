t.d(l, { default: () => Q }), t(321073);
var s = t(627968),
    a = t(64700),
    n = t(503698),
    i = t.n(n),
    r = t(475825),
    o = t(224640),
    d = t(20742),
    c = t(17928),
    u = t(780645),
    m = t(396478),
    h = t(761508),
    g = t(834730),
    x = t(778712),
    j = t(289873),
    f = t(364522),
    p = t(297413),
    v = t(966327),
    w = t(964486),
    N = t(736653),
    b = t(505527),
    C = t(649963),
    S = t(734057),
    A = t(287809),
    I = t(486020),
    _ = t(690521),
    y = t(562153),
    M = t(841549),
    E = t(969632),
    k = t(951727),
    V = t(812729),
    R = t.n(V),
    U = t(956703),
    G = t(652215),
    H = t(985018),
    P = t(736618);
let T = "/assets/64a47ba893401c1c.svg",
    W = b.v.VOTE;
function q() {
    let e = (0, N.Ay)();
    return (0, s.jsxs)(m.pp, {
        theme: e,
        children: [
            (0, s.jsx)(m.G8, { darkSrc: T, lightSrc: T, width: 106, height: 100, style: { marginBottom: 10 } }),
            (0, s.jsx)(m.SG, {
                note: H.intl.string(H.t.bwytdh),
                noteClassName: P.BI,
                className: P._U,
                children: H.intl.string(H.t.vhQK3o),
            }),
        ],
    });
}
function z(e) {
    let { emoji: l, emojiSize: t, imageClassNames: a, textClassNames: n } = e,
        i = null == l.id ? _.Ay.getURL(l.name) : I.Ay.getEmojiURL({ id: l.id, animated: l.animated ?? !1, size: t });
    return null != i && "" !== i
        ? (0, s.jsx)("img", { className: a, src: i, alt: l.name })
        : (0, s.jsx)("span", { className: n, children: l.name });
}
function B(e) {
    let { poll: l, reactionVoteCounts: t, selectedAnswerId: a, onSelectAnswer: n } = e;
    return (0, s.jsx)(h.V, {
        look: "custom",
        orientation: "vertical",
        "aria-label": H.intl.string(H.t["qbir+4"]),
        selectedItem: a,
        onItemSelect: n,
        children: l.answers.map((e) => {
            let l = String(e.answer_id),
                n = t[l] ?? 0,
                { emoji: r, text: o } = e.poll_media,
                d = H.intl.formatToPlainString(H.t.wqBc7A, { numVotes: n, option: o }),
                c = a === l;
            return (0, s.jsxs)(
                h.V.Item,
                {
                    id: l,
                    disableItemStyles: !0,
                    className: i()({ [P.Ym]: !c, [P.yw]: c }),
                    "aria-label": d,
                    selectedItem: a,
                    children: [
                        null != r
                            ? (0, s.jsx)(z, {
                                  emoji: r,
                                  emojiSize: 16,
                                  imageClassNames: P.Zg,
                                  textClassNames: i()(P.Zg, P.at),
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
                            className: P.Oo,
                            children: ["(", n.toLocaleString(), ")"],
                        }),
                    ],
                },
                l,
            );
        }),
    });
}
function O(e) {
    let { user: l, channel: t } = e,
        a = (0, c.bG)([A.default], () => A.default.getUser(l.id), [l]),
        n = y.Ay.useName(t.guild_id, t.id, l);
    return (0, s.jsxs)("div", {
        className: P.Mg,
        onContextMenu: (e) => (0, M.wQ)(e, l, t),
        children: [
            (0, s.jsx)("div", {
                className: P.x$,
                children: (0, s.jsx)(v.A, { user: a ?? l, size: x._3.SIZE_32, "aria-hidden": !0, guildId: t.guild_id }),
            }),
            (0, s.jsxs)("div", {
                className: P.v3,
                children: [
                    (0, s.jsx)(g.E, {
                        variant: "text-md/normal",
                        className: P.UU,
                        "aria-label": n,
                        children: (0, s.jsx)("span", { className: P.Ci, children: n }),
                    }),
                    (0, s.jsx)(p.A, {
                        user: l,
                        className: P.rW,
                        usernameClass: i()(P.Xh, P.Ci),
                        discriminatorClass: P.D2,
                        forceUsername: !0,
                    }),
                ],
            }),
        ],
    });
}
function L(e) {
    let { message: l, reaction: t, channel: n } = e,
        { reactors: i, hasMore: o } = (function (e) {
            let { channelId: l, messageId: t, reaction: s } = e,
                a = (0, c.bG)(
                    [U.A],
                    () => {
                        let e = U.A.getReactions(l, t, s.emoji, G.WxW, b.v.VOTE);
                        return Array.from(e?.values() ?? []);
                    },
                    [l, t, s.emoji],
                    R(),
                );
            return { reactors: a, hasMore: (s.count_details?.vote ?? 0) > a.length };
        })({ channelId: n.id, messageId: l.id, reaction: t }),
        d = a.useRef(null),
        u = a.useRef(null),
        [m, h] = a.useState(!1),
        g = a.useCallback(async () => {
            let e = u.current;
            h(!0);
            let s = await C.ao({ channelId: n.id, messageId: l.id, emoji: t.emoji, limit: G.WxW, after: e, type: W });
            (u.current = s[s.length - 1].id), h(!1);
        }, [n.id, l.id, t.emoji]);
    (0, w.Ay)(() => {
        g();
    });
    let x = a.useCallback(() => {
            let { current: e } = d;
            if (null == e) return;
            let l = e.getScrollerState();
            l.scrollTop + l.offsetHeight >= l.scrollHeight - 52 && o && !m && g();
        }, [d, o, m, g]),
        f = a.useCallback(
            (e, l) => (1 === e ? 52 * (0 === l) : 52 * (0 === e && ((0 === l && 0 === i.length) || null != i[l]))),
            [i],
        ),
        p = a.useCallback(
            (e) => {
                let { section: l, row: t } = e,
                    a = i[t];
                return 1 === l
                    ? 0 === t
                        ? (0, s.jsx)(j.y, { className: P.u1 }, "hasMore")
                        : null
                    : 0 === i.length && m
                      ? (0, s.jsx)(j.y, { className: P.u1 }, "loadingMore")
                      : null != a && (0, s.jsx)(O, { channel: n, user: a }, a.id);
            },
            [n, m, i],
        ),
        v = a.useMemo(() => {
            let e = [];
            return 0 === i.length && m ? e.push(1) : (e.push(i.length), o && e.push(1)), e;
        }, [o, m, i.length]);
    return (0, s.jsx)(r.Ei, {
        className: P.Ov,
        fade: !0,
        ref: d,
        sections: v,
        sectionHeight: 0,
        rowHeight: f,
        renderRow: p,
        onScroll: o ? x : void 0,
    });
}
function Q(e) {
    let { message: l, initialAnswerId: t, onClose: n, transitionState: i } = e,
        r = (0, c.bG)([S.A], () => S.A.getChannel(l.getChannelId())),
        [u, m] = a.useState(t),
        g = a.useMemo(() => {
            if (null != l.reactions) return (0, k.Ej)(l.reactions, u);
        }, [l.reactions, u]),
        x = a.useMemo(() => (0, E.aw)(l.reactions), [l.reactions]),
        j = a.useMemo(
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
        p = j[u],
        v = a.useMemo(() => {
            let e = {};
            return (
                l.poll?.answers.forEach((l) => {
                    l?.answer_id != null && l.poll_media?.text != null && (e[l.answer_id] = l.poll_media.text);
                }),
                e
            );
        }, [l.poll?.answers]),
        w = H.intl.formatToPlainString(H.t.wqBc7A, { numVotes: p, option: v[u] });
    if (null == r) throw Error("PollVotesModal.render: Message does not have a channelId");
    if (null == l.poll) throw Error("PollVotesModal.render: Message does not have a poll");
    return (0, s.jsxs)(o.d, {
        transitionState: i,
        onClose: n,
        size: "lg",
        children: [
            (0, s.jsx)(d.rQ, { title: l.poll.question.text, subtitle: H.intl.format(H.t.XRkuof, { count: x }) }),
            (0, s.jsx)("div", { className: P.jH }),
            (0, s.jsxs)("div", {
                className: P.rf,
                children: [
                    (0, s.jsx)(f.Ip, {
                        className: P.XG,
                        fade: !0,
                        children: (0, s.jsx)(B, {
                            poll: l.poll,
                            selectedAnswerId: u,
                            onSelectAnswer: m,
                            reactionVoteCounts: j,
                        }),
                    }),
                    (0, s.jsx)(h.V.Panel, {
                        id: u,
                        "aria-label": w,
                        className: P.nd,
                        children:
                            null != g && p > 0
                                ? (0, s.jsx)(L, { message: l, reaction: g, channel: r })
                                : (0, s.jsx)(q, {}),
                    }),
                ],
            }),
        ],
    });
}
