(t.d(l, { default: () => K }), t(321073));
var s = t(477900),
    a = t(582128),
    n = t(503698),
    i = t.n(n),
    r = t(855986),
    o = t(3026),
    d = t(396478),
    c = t(761508),
    u = t(834730),
    m = t(778712),
    h = t(939249),
    g = t(289873),
    j = t(475825),
    x = t(224640),
    f = t(20742),
    p = t(95362),
    b = t(297413),
    w = t(966327),
    v = t(964486),
    I = t(736653),
    N = t(793574),
    A = t(688810),
    y = t(505527),
    C = t(649963),
    S = t(365958),
    _ = t(702476),
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
    T = t(956703);
t(652215);
var q = t(792996),
    H = t(784039);
let z = "/assets/64a47ba893401c1c.svg",
    B = y.v.VOTE;
function Q() {
    let e = (0, I.Ay)();
    return (0, s.jsxs)(d.pp, {
        theme: e,
        children: [
            (0, s.jsx)(d.G8, { darkSrc: z, lightSrc: z, width: 106, height: 100, style: { marginBottom: 10 } }),
            (0, s.jsx)(d.SG, {
                note: q.intl.string(q.t.bwytdh),
                noteClassName: H.BI,
                className: H._U,
                children: q.intl.string(q.t.vhQK3o),
            }),
        ],
    });
}
function X(e) {
    let { emoji: l, emojiSize: t, imageClassNames: a, textClassNames: n } = e,
        i = null == l.id ? V.Ay.getURL(l.name) : k.Ay.getEmojiURL({ id: l.id, animated: l.animated ?? !1, size: t });
    return null != i && "" !== i
        ? (0, s.jsx)("img", { className: a, src: i, alt: l.name })
        : (0, s.jsx)("span", { className: n, children: l.name });
}
function Z(e) {
    let { poll: l, reactionVoteCounts: t, selectedAnswerId: a, onSelectAnswer: n } = e;
    return (0, s.jsx)(c.V, {
        look: "custom",
        orientation: "vertical",
        "aria-label": q.intl.string(q.t["qbir+4"]),
        selectedItem: a,
        onItemSelect: n,
        children: l.answers.map((e) => {
            let l = String(e.answer_id),
                n = t[l] ?? 0,
                { emoji: r, text: d } = e.poll_media,
                m = q.intl.formatToPlainString(q.t.wqBc7A, { numVotes: n, option: d }),
                h = a === l;
            return (0, s.jsxs)(
                c.V.Item,
                {
                    id: l,
                    disableItemStyles: !0,
                    className: i()({ [H.Ym]: !h, [H.yw]: h }),
                    "aria-label": m,
                    selectedItem: a,
                    children: [
                        null != r
                            ? (0, s.jsx)(X, {
                                  emoji: r,
                                  emojiSize: 16,
                                  imageClassNames: H.Zg,
                                  textClassNames: i()(H.Zg, H.at),
                                  "aria-hidden": !0,
                              })
                            : null,
                        (0, s.jsx)(u.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, s.jsx)(o.A, { position: "left", "aria-hidden": !0, children: d }),
                        }),
                        (0, s.jsxs)(u.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            className: H.Oo,
                            children: ["(", n.toLocaleString(), ")"],
                        }),
                    ],
                },
                l,
            );
        }),
    });
}
function D(e) {
    let { user: l, channel: t, messageId: a } = e,
        { analyticsLocations: n } = (0, A.Ay)(N.A.POLL_VOTES),
        o = (0, r.bG)([E.default], () => E.default.getUser(l.id), [l]),
        d = U.Ay.useName(t.guild_id, t.id, l),
        c = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)("div", {
                    className: H.x$,
                    children: (0, s.jsx)(w.A, {
                        user: o ?? l,
                        size: m._3.SIZE_32,
                        "aria-hidden": !0,
                        guildId: t.guild_id,
                    }),
                }),
                (0, s.jsxs)("div", {
                    className: H.v3,
                    children: [
                        (0, s.jsx)(u.E, {
                            variant: "body-md/normal",
                            className: H.UU,
                            "aria-label": d,
                            children: (0, s.jsx)("span", { className: H.Ci, children: d }),
                        }),
                        (0, s.jsx)(b.A, {
                            user: l,
                            className: H.rW,
                            usernameClass: i()(H.Xh, H.Ci),
                            discriminatorClass: H.D2,
                            forceUsername: !0,
                        }),
                    ],
                }),
            ],
        });
    return (0, s.jsx)(h.D, {
        className: H.Ls,
        onClick: async function () {
            (await (0, S.A)(l, { guildId: t.guild_id, channelId: t.id }),
                (0, _.openUserProfileModal)({
                    userId: l.id,
                    guildId: t.guild_id,
                    channelId: t.id,
                    messageId: a,
                    sourceAnalyticsLocations: n,
                }));
        },
        onContextMenu: (e) => (0, L.wQ)(e, l, t),
        children: c,
    });
}
function F(e) {
    let { message: l, reaction: t, channel: n } = e,
        { reactors: i, hasMore: o } = (function (e) {
            let { channelId: l, messageId: t, reaction: s } = e,
                a = (0, r.bG)(
                    [T.A],
                    () => {
                        let e = T.A.getReactions(l, t, s.emoji, 100, y.v.VOTE);
                        return Array.from(e?.values() ?? []);
                    },
                    [l, t, s.emoji],
                    O(),
                );
            return { reactors: a, hasMore: (s.count_details?.vote ?? 0) > a.length };
        })({ channelId: n.id, messageId: l.id, reaction: t }),
        d = a.useRef(null),
        c = a.useRef(null),
        [u, m] = a.useState(!1),
        h = a.useCallback(async () => {
            let e = c.current;
            m(!0);
            let s = await C.ao({ channelId: n.id, messageId: l.id, emoji: t.emoji, limit: 100, after: e, type: B });
            ((c.current = s[s.length - 1].id), m(!1));
        }, [n.id, l.id, t.emoji]);
    (0, v.Ay)(() => {
        h();
    });
    let x = a.useCallback(() => {
            let { current: e } = d;
            if (null == e) return;
            let l = e.getScrollerState();
            l.scrollTop + l.offsetHeight >= l.scrollHeight - 52 && o && !u && h();
        }, [o, u, h]),
        f = a.useCallback(
            (e, l) => (1 === e ? 52 * (0 === l) : 52 * (0 === e && ((0 === l && 0 === i.length) || null != i[l]))),
            [i],
        ),
        p = a.useCallback(
            (e) => {
                let { section: t, row: a } = e,
                    r = i[a];
                return 1 === t
                    ? 0 === a
                        ? (0, s.jsx)(g.y, { className: H.u1 }, "hasMore")
                        : null
                    : 0 === i.length && u
                      ? (0, s.jsx)(g.y, { className: H.u1 }, "loadingMore")
                      : null != r && (0, s.jsx)(D, { channel: n, messageId: l.id, user: r }, r.id);
            },
            [n, u, i, l.id],
        ),
        b = a.useMemo(() => {
            let e = [];
            return (0 === i.length && u ? e.push(1) : (e.push(i.length), o && e.push(1)), e);
        }, [o, u, i.length]);
    return (0, s.jsx)(j.Ei, {
        className: H.Ov,
        fade: !0,
        ref: d,
        sections: b,
        sectionHeight: 0,
        rowHeight: f,
        renderRow: p,
        onScroll: o ? x : void 0,
    });
}
function K(e) {
    let { message: l, initialAnswerId: t, onClose: n, transitionState: i } = e,
        o = (0, r.bG)([M.A], () => M.A.getChannel(l.getChannelId())),
        [d, u] = a.useState(t),
        m = a.useMemo(() => {
            if (null != l.reactions) return (0, R.Ej)(l.reactions, d);
        }, [l.reactions, d]),
        h = a.useMemo(() => (0, P.aw)(l.reactions), [l.reactions]),
        g = a.useMemo(
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
        j = g[d],
        b = a.useMemo(() => {
            let e = {};
            return (
                l.poll?.answers.forEach((l) => {
                    l?.answer_id != null && l.poll_media?.text != null && (e[l.answer_id] = l.poll_media.text);
                }),
                e
            );
        }, [l.poll?.answers]),
        w = q.intl.formatToPlainString(q.t.wqBc7A, { numVotes: j, option: b[d] });
    if (null == o) throw Error("PollVotesModal.render: Message does not have a channelId");
    if (null == l.poll) throw Error("PollVotesModal.render: Message does not have a poll");
    return (0, s.jsxs)(x.d, {
        transitionState: i,
        onClose: n,
        size: "lg",
        "aria-label": l.poll.question.text,
        children: [
            (0, s.jsx)(f.rQ, { title: l.poll.question.text, subtitle: q.intl.format(q.t.XRkuof, { count: h }) }),
            (0, s.jsx)("div", { className: H.jH }),
            (0, s.jsxs)("div", {
                className: H.rf,
                children: [
                    (0, s.jsx)(p.Ip, {
                        className: H.XG,
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
                        "aria-label": w,
                        className: H.nd,
                        children:
                            null != m && j > 0
                                ? (0, s.jsx)(F, { message: l, reaction: m, channel: o })
                                : (0, s.jsx)(Q, {}),
                    }),
                ],
            }),
        ],
    });
}
