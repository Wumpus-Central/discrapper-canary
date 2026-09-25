(t.d(l, { default: () => K }), t(321073));
var s = t(477900),
    n = t(582128),
    a = t(503698),
    i = t.n(a),
    r = t(17928),
    o = t(3026),
    d = t(396478),
    c = t(761508),
    u = t(834730),
    m = t(778712),
    h = t(939249),
    g = t(289873),
    x = t(475825),
    j = t(224640),
    f = t(20742),
    p = t(364522),
    w = t(297413),
    I = t(966327),
    N = t(964486),
    b = t(736653),
    v = t(793574),
    A = t(688810),
    C = t(505527),
    S = t(649963),
    _ = t(454719),
    y = t(402860),
    M = t(734057),
    E = t(287809),
    k = t(486020),
    V = t(690521),
    U = t(562153),
    L = t(841549),
    P = t(969632),
    R = t(951727),
    G = t(812729),
    O = t.n(G),
    T = t(956703),
    q = t(652215),
    H = t(375708),
    W = t(784039);
let z = "/assets/64a47ba893401c1c.svg",
    B = C.v.VOTE;
function Q() {
    let e = (0, b.Ay)();
    return (0, s.jsxs)(d.pp, {
        theme: e,
        children: [
            (0, s.jsx)(d.G8, { darkSrc: z, lightSrc: z, width: 106, height: 100, style: { marginBottom: 10 } }),
            (0, s.jsx)(d.SG, {
                note: H.intl.string(H.t.bwytdh),
                noteClassName: W.BI,
                className: W._U,
                children: H.intl.string(H.t.vhQK3o),
            }),
        ],
    });
}
function X(e) {
    let { emoji: l, emojiSize: t, imageClassNames: n, textClassNames: a } = e,
        i = null == l.id ? V.Ay.getURL(l.name) : k.Ay.getEmojiURL({ id: l.id, animated: l.animated ?? !1, size: t });
    return null != i && "" !== i
        ? (0, s.jsx)("img", { className: n, src: i, alt: l.name })
        : (0, s.jsx)("span", { className: a, children: l.name });
}
function Z(e) {
    let { poll: l, reactionVoteCounts: t, selectedAnswerId: n, onSelectAnswer: a } = e;
    return (0, s.jsx)(c.V, {
        look: "custom",
        orientation: "vertical",
        "aria-label": H.intl.string(H.t["qbir+4"]),
        selectedItem: n,
        onItemSelect: a,
        children: l.answers.map((e) => {
            let l = String(e.answer_id),
                a = t[l] ?? 0,
                { emoji: r, text: d } = e.poll_media,
                m = H.intl.formatToPlainString(H.t.wqBc7A, { numVotes: a, option: d }),
                h = n === l;
            return (0, s.jsxs)(
                c.V.Item,
                {
                    id: l,
                    disableItemStyles: !0,
                    className: i()({ [W.Ym]: !h, [W.yw]: h }),
                    "aria-label": m,
                    selectedItem: n,
                    children: [
                        null != r
                            ? (0, s.jsx)(X, {
                                  emoji: r,
                                  emojiSize: 16,
                                  imageClassNames: W.Zg,
                                  textClassNames: i()(W.Zg, W.at),
                                  "aria-hidden": !0,
                              })
                            : null,
                        (0, s.jsx)(u.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, s.jsx)(o.A, { position: "left", "aria-hidden": !0, children: d }),
                        }),
                        (0, s.jsxs)(u.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            className: W.Oo,
                            children: ["(", a.toLocaleString(), ")"],
                        }),
                    ],
                },
                l,
            );
        }),
    });
}
function D(e) {
    let { user: l, channel: t, messageId: n } = e,
        { analyticsLocations: a } = (0, A.Ay)(v.A.POLL_VOTES),
        o = (0, r.bG)([E.default], () => E.default.getUser(l.id), [l]),
        d = U.Ay.useName(t.guild_id, t.id, l);
    async function c() {
        (await (0, _.A)(l, { guildId: t.guild_id, channelId: t.id }),
            (0, y.openUserProfileModal)({
                userId: l.id,
                guildId: t.guild_id,
                channelId: t.id,
                messageId: n,
                sourceAnalyticsLocations: a,
            }));
    }
    let g = (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: W.x$,
                children: (0, s.jsx)(I.A, { user: o ?? l, size: m._3.SIZE_32, "aria-hidden": !0, guildId: t.guild_id }),
            }),
            (0, s.jsxs)("div", {
                className: W.v3,
                children: [
                    (0, s.jsx)(u.E, {
                        variant: "text-md/normal",
                        className: W.UU,
                        "aria-label": d,
                        children: (0, s.jsx)("span", { className: W.Ci, children: d }),
                    }),
                    (0, s.jsx)(w.A, {
                        user: l,
                        className: W.rW,
                        usernameClass: i()(W.Xh, W.Ci),
                        discriminatorClass: W.D2,
                        forceUsername: !0,
                    }),
                ],
            }),
        ],
    });
    return (0, s.jsx)(h.D, { className: W.Ls, onClick: c, onContextMenu: (e) => (0, L.wQ)(e, l, t), children: g });
}
function F(e) {
    let { message: l, reaction: t, channel: a } = e,
        { reactors: i, hasMore: o } = (function (e) {
            let { channelId: l, messageId: t, reaction: s } = e,
                n = (0, r.bG)(
                    [T.A],
                    () => {
                        let e = T.A.getReactions(l, t, s.emoji, q.WxW, C.v.VOTE);
                        return Array.from(e?.values() ?? []);
                    },
                    [l, t, s.emoji],
                    O(),
                );
            return { reactors: n, hasMore: (s.count_details?.vote ?? 0) > n.length };
        })({ channelId: a.id, messageId: l.id, reaction: t }),
        d = n.useRef(null),
        c = n.useRef(null),
        [u, m] = n.useState(!1),
        h = n.useCallback(async () => {
            let e = c.current;
            m(!0);
            let s = await S.ao({ channelId: a.id, messageId: l.id, emoji: t.emoji, limit: q.WxW, after: e, type: B });
            ((c.current = s[s.length - 1].id), m(!1));
        }, [a.id, l.id, t.emoji]);
    (0, N.Ay)(() => {
        h();
    });
    let j = n.useCallback(() => {
            let { current: e } = d;
            if (null == e) return;
            let l = e.getScrollerState();
            l.scrollTop + l.offsetHeight >= l.scrollHeight - 52 && o && !u && h();
        }, [o, u, h]),
        f = n.useCallback(
            (e, l) => (1 === e ? 52 * (0 === l) : 52 * (0 === e && ((0 === l && 0 === i.length) || null != i[l]))),
            [i],
        ),
        p = n.useCallback(
            (e) => {
                let { section: t, row: n } = e,
                    r = i[n];
                return 1 === t
                    ? 0 === n
                        ? (0, s.jsx)(g.y, { className: W.u1 }, "hasMore")
                        : null
                    : 0 === i.length && u
                      ? (0, s.jsx)(g.y, { className: W.u1 }, "loadingMore")
                      : null != r && (0, s.jsx)(D, { channel: a, messageId: l.id, user: r }, r.id);
            },
            [a, u, i, l.id],
        ),
        w = n.useMemo(() => {
            let e = [];
            return (0 === i.length && u ? e.push(1) : (e.push(i.length), o && e.push(1)), e);
        }, [o, u, i.length]);
    return (0, s.jsx)(x.Ei, {
        className: W.Ov,
        fade: !0,
        ref: d,
        sections: w,
        sectionHeight: 0,
        rowHeight: f,
        renderRow: p,
        onScroll: o ? j : void 0,
    });
}
function K(e) {
    let { message: l, initialAnswerId: t, onClose: a, transitionState: i } = e,
        o = (0, r.bG)([M.A], () => M.A.getChannel(l.getChannelId())),
        [d, u] = n.useState(t),
        m = n.useMemo(() => {
            if (null != l.reactions) return (0, R.Ej)(l.reactions, d);
        }, [l.reactions, d]),
        h = n.useMemo(() => (0, P.aw)(l.reactions), [l.reactions]),
        g = n.useMemo(
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
        x = g[d],
        w = n.useMemo(() => {
            let e = {};
            return (
                l.poll?.answers.forEach((l) => {
                    l?.answer_id != null && l.poll_media?.text != null && (e[l.answer_id] = l.poll_media.text);
                }),
                e
            );
        }, [l.poll?.answers]),
        I = H.intl.formatToPlainString(H.t.wqBc7A, { numVotes: x, option: w[d] });
    if (null == o) throw Error("PollVotesModal.render: Message does not have a channelId");
    if (null == l.poll) throw Error("PollVotesModal.render: Message does not have a poll");
    return (0, s.jsxs)(j.d, {
        transitionState: i,
        onClose: a,
        size: "lg",
        "aria-label": l.poll.question.text,
        children: [
            (0, s.jsx)(f.rQ, { title: l.poll.question.text, subtitle: H.intl.format(H.t.XRkuof, { count: h }) }),
            (0, s.jsx)("div", { className: W.jH }),
            (0, s.jsxs)("div", {
                className: W.rf,
                children: [
                    (0, s.jsx)(p.Ip, {
                        className: W.XG,
                        fade: !0,
                        children: (0, s.jsx)(Z, {
                            poll: l.poll,
                            selectedAnswerId: d,
                            onSelectAnswer: u,
                            reactionVoteCounts: g,
                        }),
                    }),
                    (0, s.jsx)(c.V.Panel, {
                        id: d,
                        "aria-label": I,
                        className: W.nd,
                        children:
                            null != m && x > 0
                                ? (0, s.jsx)(F, { message: l, reaction: m, channel: o })
                                : (0, s.jsx)(Q, {}),
                    }),
                ],
            }),
        ],
    });
}
