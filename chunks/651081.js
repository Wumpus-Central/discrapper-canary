n.d(t, { default: () => U }), n(388685), n(539854), n(415506);
var l = n(54381),
    a = n(473749),
    s = n(120356),
    r = n.n(s),
    i = n(793030),
    o = n(442837),
    c = n(194983),
    d = n(481060),
    u = n(129861),
    m = n(700582),
    h = n(493773),
    _ = n(410030),
    v = n(566006),
    x = n(222677),
    j = n(592125),
    p = n(594174),
    f = n(768581),
    g = n(176354),
    C = n(5192),
    N = n(91047),
    b = n(79390),
    w = n(918088),
    T = n(22864),
    S = n(981631),
    Z = n(388032),
    y = n(132423),
    M = n(144452);
let k = v.O.VOTE;
function I() {
    let e = (0, _.ZP)();
    return (0, l.jsxs)(d.ubH, {
        theme: e,
        children: [
            (0, l.jsx)(d.oxh, {
                darkSrc: M,
                lightSrc: M,
                width: 106,
                height: 100,
                style: { marginBottom: 10 },
            }),
            (0, l.jsx)(d.OZU, {
                note: Z.intl.string(Z.t.bwytdh),
                noteClassName: y.emptyText,
                className: y.emptyTitle,
                children: Z.intl.string(Z.t.vhQK3o),
            }),
        ],
    });
}
function P(e) {
    var t;
    let { emoji: n, emojiSize: a, imageClassNames: s, textClassNames: r } = e,
        i =
            null == n.id
                ? g.ZP.getURL(n.name)
                : f.ZP.getEmojiURL({
                      id: n.id,
                      animated: null != (t = n.animated) && t,
                      size: a,
                  });
    return null != i && "" !== i
        ? (0, l.jsx)("img", {
              className: s,
              src: i,
              alt: n.name,
          })
        : (0, l.jsx)("span", {
              className: r,
              children: n.name,
          });
}
function A(e) {
    let { poll: t, reactionVoteCounts: n, selectedAnswerId: a, onSelectAnswer: s } = e;
    return (0, l.jsx)(d.njP, {
        look: "custom",
        orientation: "vertical",
        "aria-label": Z.intl.string(Z.t["qbir+4"]),
        selectedItem: a,
        onItemSelect: s,
        children: t.answers.map((e) => {
            var t;
            let s = String(e.answer_id),
                i = null != (t = n[s]) ? t : 0,
                { emoji: o, text: u } = e.poll_media,
                m = Z.intl.formatToPlainString(Z.t.wqBc7A, {
                    numVotes: i,
                    option: u,
                }),
                h = a === s;
            return (0, l.jsxs)(
                d.njP.Item,
                {
                    id: s,
                    className: r()({
                        [y.voteDefault]: !h,
                        [y.voteSelected]: h,
                    }),
                    "aria-label": m,
                    selectedItem: a,
                    children: [
                        null != o
                            ? (0, l.jsx)(P, {
                                  emoji: o,
                                  emojiSize: 16,
                                  imageClassNames: y.emoji,
                                  textClassNames: r()(y.emoji, y.emojiText),
                                  "aria-hidden": !0,
                              })
                            : null,
                        (0, l.jsx)(d.Text, {
                            variant: "text-sm/semibold",
                            color: "text-secondary",
                            lineClamp: 1,
                            children: (0, l.jsx)(c.Z, {
                                position: "left",
                                "aria-hidden": !0,
                                children: u,
                            }),
                        }),
                        (0, l.jsxs)(d.Text, {
                            variant: "text-sm/semibold",
                            color: "text-secondary",
                            className: y.voteCount,
                            children: ["(", i.toLocaleString(), ")"],
                        }),
                    ],
                },
                s,
            );
        }),
    });
}
function E(e) {
    let { user: t, channel: n } = e,
        a = (0, o.e7)([p.default], () => p.default.getUser(t.id), [t]),
        s = C.ZP.useName(n.guild_id, n.id, t);
    return (0, l.jsxs)("div", {
        className: y.voterDefault,
        onContextMenu: (e) => (0, N.Pv)(e, t, n),
        children: [
            (0, l.jsx)("div", {
                className: y.voterAvatarContainer,
                children: (0, l.jsx)(m.Z, {
                    user: null != a ? a : t,
                    size: d.EFr.SIZE_24,
                    "aria-hidden": !0,
                    guildId: n.guild_id,
                }),
            }),
            (0, l.jsxs)(d.Text, {
                tag: "span",
                variant: "text-md/normal",
                className: y.name,
                "aria-label": s,
                children: [
                    (0, l.jsx)("span", {
                        className: t.hasUniqueUsername() ? "" : y.nickname,
                        children: s,
                    }),
                    (0, l.jsx)(u.Z, {
                        user: t,
                        className: y.tagFaded,
                        usernameClass: y.username,
                        discriminatorClass: y.discriminator,
                        forceUsername: !0,
                    }),
                ],
            }),
        ],
    });
}
function L(e) {
    let { message: t, reaction: n, channel: s } = e,
        { reactors: r, hasMore: i } = (0, T.Z)({
            channelId: s.id,
            messageId: t.id,
            reaction: n,
        }),
        o = a.useRef(null),
        c = a.useRef(null),
        [u, m] = a.useState(!1),
        _ = a.useCallback(async () => {
            let e = c.current;
            m(!0);
            let l = await x.U0({
                channelId: s.id,
                messageId: t.id,
                emoji: n.emoji,
                limit: S.pTL,
                after: e,
                type: k,
            });
            (c.current = l[l.length - 1].id), m(!1);
        }, [s.id, t.id, n.emoji]);
    (0, h.ZP)(() => {
        _();
    });
    let v = a.useCallback(() => {
            let { current: e } = o;
            if (null == e) return;
            let t = e.getScrollerState();
            t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 && i && !u && _();
        }, [o, i, u, _]),
        j = a.useCallback(
            (e, t) => {
                if (1 === e) return 44 * (0 === t);
                if (0 === e) {
                    if (0 === t && 0 === r.length) return 440;
                    if (null != r[t]) return 44;
                }
                return 0;
            },
            [r],
        ),
        p = a.useCallback(
            (e) => {
                let { section: t, row: n } = e,
                    a = r[n];
                return 1 === t
                    ? 0 === n
                        ? (0, l.jsx)(d.$jN, { className: y.spinnerMore }, "hasMore")
                        : null
                    : 0 === r.length && u
                      ? (0, l.jsx)(d.$jN, { className: y.spinner }, "loadingMore")
                      : null != a &&
                        (0, l.jsx)(
                            E,
                            {
                                channel: s,
                                user: a,
                            },
                            a.id,
                        );
            },
            [s, u, r],
        ),
        f = a.useMemo(() => {
            let e = [];
            return 0 === r.length && u ? e.push(0) : (e.push(r.length), i && e.push(1)), e;
        }, [i, u, r.length]);
    return (0, l.jsx)("div", {
        className: y.votersListContainer,
        children: (0, l.jsx)(d.aVo, {
            className: y.voters,
            fade: !0,
            ref: o,
            sections: f,
            sectionHeight: 0,
            rowHeight: j,
            renderRow: p,
            onScroll: i ? v : void 0,
        }),
    });
}
function U(e) {
    var t;
    let { message: n, initialAnswerId: s, onClose: r, transitionState: c } = e,
        u = (0, o.e7)([j.Z], () => j.Z.getChannel(n.getChannelId())),
        [m, h] = a.useState(s),
        _ = a.useMemo(() => {
            if (null != n.reactions) return (0, w.ef)(n.reactions, m);
        }, [n.reactions, m]),
        v = a.useMemo(() => (0, b.cZ)(n.reactions), [n.reactions]),
        x = a.useMemo(
            () =>
                (function (e) {
                    let t = {};
                    for (let a of e) {
                        var n, l;
                        let e = null != (l = null == (n = a.count_details) ? void 0 : n.vote) ? l : 0,
                            s = a.emoji.id;
                        null != s && (t[s] = e);
                    }
                    return t;
                })(n.reactions),
            [n.reactions],
        ),
        p = x[m],
        f = a.useMemo(() => {
            var e;
            let t = {};
            return (
                null == (e = n.poll) ||
                    e.answers.forEach((e) => {
                        var n;
                        (null == e ? void 0 : e.answer_id) != null &&
                            (null == (n = e.poll_media) ? void 0 : n.text) != null &&
                            (t[e.answer_id] = e.poll_media.text);
                    }),
                t
            );
        }, [null == (t = n.poll) ? void 0 : t.answers]),
        g = Z.intl.formatToPlainString(Z.t.wqBc7A, {
            numVotes: p,
            option: f[m],
        });
    if (null == u) throw Error("PollVotesModal.render: Message does not have a channelId");
    if (null == n.poll) throw Error("PollVotesModal.render: Message does not have a poll");
    return (0, l.jsxs)(i.IX, {
        transitionState: c,
        onClose: r,
        size: "lg",
        children: [
            (0, l.jsx)(i.xBx, {
                title: n.poll.question.text,
                subtitle: Z.intl.format(Z.t.XRkuof, { count: v }),
            }),
            (0, l.jsx)(d.w0Z, {
                className: y.body,
                children: (0, l.jsxs)("div", {
                    className: y.content,
                    children: [
                        (0, l.jsx)(d.Ttm, {
                            className: y.scroller,
                            fade: !0,
                            children: (0, l.jsx)(A, {
                                poll: n.poll,
                                selectedAnswerId: m,
                                onSelectAnswer: h,
                                reactionVoteCounts: x,
                            }),
                        }),
                        (0, l.jsx)(d.njP.Panel, {
                            id: m,
                            "aria-label": g,
                            className: y.panel,
                            children:
                                null != _ && p > 0
                                    ? (0, l.jsx)(L, {
                                          message: n,
                                          reaction: _,
                                          channel: u,
                                      })
                                    : (0, l.jsx)(I, {}),
                        }),
                    ],
                }),
            }),
        ],
    });
}
