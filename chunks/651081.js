l.d(t, { default: () => U }), l(388685), l(539854), l(415506);
var n = l(54381),
    a = l(473749),
    s = l(120356),
    i = l.n(s),
    r = l(793030),
    c = l(442837),
    o = l(194983),
    d = l(481060),
    u = l(129861),
    m = l(700582),
    f = l(493773),
    h = l(410030),
    v = l(566006),
    p = l(222677),
    x = l(592125),
    j = l(594174),
    g = l(768581),
    _ = l(176354),
    C = l(5192),
    N = l(91047),
    b = l(79390),
    S = l(918088),
    T = l(22864),
    w = l(981631),
    Z = l(388032),
    y = l(620564),
    I = l(144452);
let k = v.O.VOTE;
function P() {
    let e = (0, h.ZP)();
    return (0, n.jsxs)(d.ubH, {
        theme: e,
        children: [
            (0, n.jsx)(d.oxh, {
                darkSrc: I,
                lightSrc: I,
                width: 106,
                height: 100,
                style: { marginBottom: 10 },
            }),
            (0, n.jsx)(d.OZU, {
                note: Z.intl.string(Z.t.bwytdh),
                noteClassName: y.emptyText,
                className: y.emptyTitle,
                children: Z.intl.string(Z.t.vhQK3o),
            }),
        ],
    });
}
function M(e) {
    var t;
    let { emoji: l, emojiSize: a, imageClassNames: s, textClassNames: i } = e,
        r =
            null == l.id
                ? _.ZP.getURL(l.name)
                : g.ZP.getEmojiURL({
                      id: l.id,
                      animated: null != (t = l.animated) && t,
                      size: a,
                  });
    return null != r && "" !== r
        ? (0, n.jsx)("img", {
              className: s,
              src: r,
              alt: l.name,
          })
        : (0, n.jsx)("span", {
              className: i,
              children: l.name,
          });
}
function z(e) {
    let { poll: t, reactionVoteCounts: l, selectedAnswerId: a, onSelectAnswer: s } = e;
    return (0, n.jsx)(d.njP, {
        look: "custom",
        orientation: "vertical",
        "aria-label": Z.intl.string(Z.t["qbir+4"]),
        selectedItem: a,
        onItemSelect: s,
        children: t.answers.map((e) => {
            var t;
            let s = String(e.answer_id),
                r = null != (t = l[s]) ? t : 0,
                { emoji: c, text: u } = e.poll_media,
                m = Z.intl.formatToPlainString(Z.t.wqBc7A, {
                    numVotes: r,
                    option: u,
                }),
                f = a === s;
            return (0, n.jsxs)(
                d.njP.Item,
                {
                    id: s,
                    disableItemStyles: !0,
                    className: i()({
                        [y.voteDefault]: !f,
                        [y.voteSelected]: f,
                    }),
                    "aria-label": m,
                    selectedItem: a,
                    children: [
                        null != c
                            ? (0, n.jsx)(M, {
                                  emoji: c,
                                  emojiSize: 16,
                                  imageClassNames: y.emoji,
                                  textClassNames: i()(y.emoji, y.emojiText),
                                  "aria-hidden": !0,
                              })
                            : null,
                        (0, n.jsx)(d.Text, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, n.jsx)(o.Z, {
                                position: "left",
                                "aria-hidden": !0,
                                children: u,
                            }),
                        }),
                        (0, n.jsxs)(d.Text, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            className: y.voteCount,
                            children: ["(", r.toLocaleString(), ")"],
                        }),
                    ],
                },
                s,
            );
        }),
    });
}
function A(e) {
    let { user: t, channel: l } = e,
        a = (0, c.e7)([j.default], () => j.default.getUser(t.id), [t]),
        s = C.ZP.useName(l.guild_id, l.id, t);
    return (0, n.jsxs)("div", {
        className: y.voterDefault,
        onContextMenu: (e) => (0, N.Pv)(e, t, l),
        children: [
            (0, n.jsx)("div", {
                className: y.voterAvatarContainer,
                children: (0, n.jsx)(m.Z, {
                    user: null != a ? a : t,
                    size: d.EFr.SIZE_32,
                    "aria-hidden": !0,
                    guildId: l.guild_id,
                }),
            }),
            (0, n.jsxs)(d.Text, {
                tag: "span",
                variant: "text-md/normal",
                className: y.name,
                "aria-label": s,
                children: [
                    (0, n.jsx)("span", {
                        className: i()(y.ellipsized, { [y.nickname]: !t.hasUniqueUsername() }),
                        children: s,
                    }),
                    (0, n.jsx)(u.Z, {
                        user: t,
                        className: y.tagFaded,
                        usernameClass: i()(y.username, y.ellipsized),
                        discriminatorClass: y.discriminator,
                        forceUsername: !0,
                    }),
                ],
            }),
        ],
    });
}
function E(e) {
    let { message: t, reaction: l, channel: s } = e,
        { reactors: i, hasMore: c } = (0, T.Z)({
            channelId: s.id,
            messageId: t.id,
            reaction: l,
        }),
        o = a.useRef(null),
        u = a.useRef(null),
        [m, h] = a.useState(!1),
        v = a.useCallback(async () => {
            let e = u.current;
            h(!0);
            let n = await p.U0({
                channelId: s.id,
                messageId: t.id,
                emoji: l.emoji,
                limit: w.pTL,
                after: e,
                type: k,
            });
            (u.current = n[n.length - 1].id), h(!1);
        }, [s.id, t.id, l.emoji]);
    (0, f.ZP)(() => {
        v();
    });
    let x = a.useCallback(() => {
            let { current: e } = o;
            if (null == e) return;
            let t = e.getScrollerState();
            t.scrollTop + t.offsetHeight >= t.scrollHeight - 52 && c && !m && v();
        }, [o, c, m, v]),
        j = a.useCallback(
            (e, t) => (1 === e ? 52 * (0 === t) : 52 * (0 === e && ((0 === t && 0 === i.length) || null != i[t]))),
            [i],
        ),
        g = a.useCallback(
            (e) => {
                let { section: t, row: l } = e,
                    a = i[l];
                return 1 === t
                    ? 0 === l
                        ? (0, n.jsx)(d.$jN, { className: y.spinner }, "hasMore")
                        : null
                    : 0 === i.length && m
                      ? (0, n.jsx)(d.$jN, { className: y.spinner }, "loadingMore")
                      : null != a &&
                        (0, n.jsx)(
                            A,
                            {
                                channel: s,
                                user: a,
                            },
                            a.id,
                        );
            },
            [s, m, i],
        ),
        _ = a.useMemo(() => {
            let e = [];
            return 0 === i.length && m ? e.push(1) : (e.push(i.length), c && e.push(1)), e;
        }, [c, m, i.length]);
    return (0, n.jsx)(r._2F, {
        className: y.voters,
        fade: !0,
        ref: o,
        sections: _,
        sectionHeight: 0,
        rowHeight: j,
        renderRow: g,
        onScroll: c ? x : void 0,
    });
}
function U(e) {
    var t;
    let { message: l, initialAnswerId: s, onClose: i, transitionState: o } = e,
        u = (0, c.e7)([x.Z], () => x.Z.getChannel(l.getChannelId())),
        [m, f] = a.useState(s),
        h = a.useMemo(() => {
            if (null != l.reactions) return (0, S.ef)(l.reactions, m);
        }, [l.reactions, m]),
        v = a.useMemo(() => (0, b.cZ)(l.reactions), [l.reactions]),
        p = a.useMemo(
            () =>
                (function (e) {
                    let t = {};
                    for (let a of e) {
                        var l, n;
                        let e = null != (n = null == (l = a.count_details) ? void 0 : l.vote) ? n : 0,
                            s = a.emoji.id;
                        null != s && (t[s] = e);
                    }
                    return t;
                })(l.reactions),
            [l.reactions],
        ),
        j = p[m],
        g = a.useMemo(() => {
            var e;
            let t = {};
            return (
                null == (e = l.poll) ||
                    e.answers.forEach((e) => {
                        var l;
                        (null == e ? void 0 : e.answer_id) != null &&
                            (null == (l = e.poll_media) ? void 0 : l.text) != null &&
                            (t[e.answer_id] = e.poll_media.text);
                    }),
                t
            );
        }, [null == (t = l.poll) ? void 0 : t.answers]),
        _ = Z.intl.formatToPlainString(Z.t.wqBc7A, {
            numVotes: j,
            option: g[m],
        });
    if (null == u) throw Error("PollVotesModal.render: Message does not have a channelId");
    if (null == l.poll) throw Error("PollVotesModal.render: Message does not have a poll");
    return (0, n.jsxs)(r.IX, {
        transitionState: o,
        onClose: i,
        size: "lg",
        children: [
            (0, n.jsx)(r.xBx, {
                title: l.poll.question.text,
                subtitle: Z.intl.format(Z.t.XRkuof, { count: v }),
            }),
            (0, n.jsx)("div", { className: y.spacer }),
            (0, n.jsxs)("div", {
                className: y.body,
                children: [
                    (0, n.jsx)(d.Ttm, {
                        className: y.scroller,
                        fade: !0,
                        children: (0, n.jsx)(z, {
                            poll: l.poll,
                            selectedAnswerId: m,
                            onSelectAnswer: f,
                            reactionVoteCounts: p,
                        }),
                    }),
                    (0, n.jsx)(d.njP.Panel, {
                        id: m,
                        "aria-label": _,
                        className: y.panel,
                        children:
                            null != h && j > 0
                                ? (0, n.jsx)(E, {
                                      message: l,
                                      reaction: h,
                                      channel: u,
                                  })
                                : (0, n.jsx)(P, {}),
                    }),
                ],
            }),
        ],
    });
}
