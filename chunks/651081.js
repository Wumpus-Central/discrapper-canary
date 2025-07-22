(n.d(t, { default: () => R }), n(388685), n(539854), n(415506));
var l = n(255367),
    a = n(73800),
    s = n(120356),
    r = n.n(s),
    i = n(442837),
    o = n(257465),
    c = n(37148),
    d = n(481060),
    u = n(129861),
    m = n(700582),
    h = n(493773),
    _ = n(410030),
    v = n(111028),
    x = n(566006),
    j = n(222677),
    p = n(592125),
    f = n(594174),
    g = n(768581),
    C = n(176354),
    N = n(5192),
    b = n(91047),
    w = n(79390),
    S = n(918088),
    T = n(22864),
    Z = n(981631),
    y = n(388032),
    M = n(869322),
    P = n(144452);
let k = x.O.VOTE;
function I() {
    let e = (0, _.ZP)();
    return (0, l.jsxs)(d.ubH, {
        theme: e,
        children: [
            (0, l.jsx)(d.oxh, {
                darkSrc: P,
                lightSrc: P,
                width: 106,
                height: 100,
                style: { marginBottom: 10 }
            }),
            (0, l.jsx)(d.OZU, {
                note: y.intl.string(y.t.bwytdn),
                noteClassName: M.emptyText,
                className: M.emptyTitle,
                children: y.intl.string(y.t.vhQK3t)
            })
        ]
    });
}
function L(e) {
    var t;
    let { emoji: n, emojiSize: a, imageClassNames: s, textClassNames: r } = e,
        i =
            null == n.id
                ? C.ZP.getURL(n.name)
                : g.ZP.getEmojiURL({
                      id: n.id,
                      animated: null != (t = n.animated) && t,
                      size: a
                  });
    return null != i && '' !== i
        ? (0, l.jsx)('img', {
              className: s,
              src: i,
              alt: n.name
          })
        : (0, l.jsx)('span', {
              className: r,
              children: n.name
          });
}
function E(e) {
    let { poll: t, reactionVoteCounts: n, selectedAnswerId: a, onSelectAnswer: s } = e;
    return (0, l.jsx)(d.njP, {
        look: 'custom',
        orientation: 'vertical',
        'aria-label': y.intl.string(y.t['qbir+/']),
        selectedItem: a,
        onItemSelect: s,
        children: t.answers.map((e) => {
            var t;
            let s = String(e.answer_id),
                i = null != (t = n[s]) ? t : 0,
                { emoji: o, text: c } = e.poll_media,
                u = y.intl.formatToPlainString(y.t.wqBc7O, {
                    numVotes: i,
                    option: c
                }),
                m = a === s;
            return (0, l.jsxs)(
                d.njP.Item,
                {
                    id: s,
                    className: r()({
                        [M.voteDefault]: !m,
                        [M.voteSelected]: m
                    }),
                    'aria-label': u,
                    selectedItem: a,
                    children: [
                        null != o
                            ? (0, l.jsx)(L, {
                                  emoji: o,
                                  emojiSize: 16,
                                  imageClassNames: M.emoji,
                                  textClassNames: r()(M.emoji, M.emojiText),
                                  'aria-hidden': !0
                              })
                            : null,
                        (0, l.jsx)(d.Text, {
                            variant: 'text-sm/semibold',
                            color: 'text-secondary',
                            lineClamp: 1,
                            children: (0, l.jsx)(v.Z, {
                                position: 'left',
                                'aria-hidden': !0,
                                children: c
                            })
                        }),
                        (0, l.jsxs)(d.Text, {
                            variant: 'text-sm/semibold',
                            color: 'text-secondary',
                            className: M.voteCount,
                            children: ['(', i.toLocaleString(), ')']
                        })
                    ]
                },
                s
            );
        })
    });
}
function V(e) {
    let { user: t, channel: n } = e,
        a = (0, i.e7)([f.default], () => f.default.getUser(t.id), [t]),
        s = N.ZP.useName(n.guild_id, n.id, t);
    return (0, l.jsxs)('div', {
        className: M.voterDefault,
        onContextMenu: (e) => (0, b.Pv)(e, t, n),
        children: [
            (0, l.jsx)('div', {
                className: M.voterAvatarContainer,
                children: (0, l.jsx)(m.Z, {
                    user: null != a ? a : t,
                    size: d.EFr.SIZE_24,
                    'aria-hidden': !0,
                    guildId: n.guild_id
                })
            }),
            (0, l.jsxs)(d.Text, {
                tag: 'span',
                variant: 'text-md/normal',
                className: M.name,
                'aria-label': s,
                children: [
                    (0, l.jsx)('span', {
                        className: t.isPomelo() ? '' : M.nickname,
                        children: s
                    }),
                    (0, l.jsx)(u.Z, {
                        user: t,
                        className: M.tagFaded,
                        usernameClass: M.username,
                        discriminatorClass: M.discriminator,
                        forceUsername: !0
                    })
                ]
            })
        ]
    });
}
function O(e) {
    let { message: t, reaction: n, channel: s } = e,
        { reactors: r, hasMore: i } = (0, T.Z)({
            channelId: s.id,
            messageId: t.id,
            reaction: n
        }),
        o = a.useRef(null),
        c = a.useRef(null),
        [u, m] = a.useState(!1),
        _ = a.useCallback(async () => {
            let e = c.current;
            m(!0);
            let l = await j.U0({
                channelId: s.id,
                messageId: t.id,
                emoji: n.emoji,
                limit: Z.pTL,
                after: e,
                type: k
            });
            ((c.current = l[l.length - 1].id), m(!1));
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
        x = a.useCallback(
            (e, t) => {
                if (1 === e) return 44 * (0 === t);
                if (0 === e) {
                    if (0 === t && 0 === r.length) return 440;
                    if (null != r[t]) return 44;
                }
                return 0;
            },
            [r]
        ),
        p = a.useCallback(
            (e) => {
                let { section: t, row: n } = e,
                    a = r[n];
                return 1 === t
                    ? 0 === n
                        ? (0, l.jsx)(d.$jN, { className: M.spinnerMore }, 'hasMore')
                        : null
                    : 0 === r.length && u
                      ? (0, l.jsx)(d.$jN, { className: M.spinner }, 'loadingMore')
                      : null != a &&
                        (0, l.jsx)(
                            V,
                            {
                                channel: s,
                                user: a
                            },
                            a.id
                        );
            },
            [s, u, r]
        ),
        f = a.useMemo(() => {
            let e = [];
            return (0 === r.length && u ? e.push(0) : (e.push(r.length), i && e.push(1)), e);
        }, [i, u, r.length]);
    return (0, l.jsx)('div', {
        className: M.votersListContainer,
        children: (0, l.jsx)(d.aVo, {
            className: M.voters,
            fade: !0,
            ref: o,
            sections: f,
            sectionHeight: 0,
            rowHeight: x,
            renderRow: p,
            onScroll: i ? v : void 0
        })
    });
}
function R(e) {
    var t;
    let { message: n, initialAnswerId: s, onClose: r, transitionState: u } = e,
        m = (0, i.e7)([p.Z], () => p.Z.getChannel(n.getChannelId())),
        [h, _] = a.useState(s),
        v = a.useMemo(() => {
            if (null != n.reactions) return (0, S.ef)(n.reactions, h);
        }, [n.reactions, h]),
        x = a.useMemo(() => (0, w.cZ)(n.reactions), [n.reactions]),
        j = a.useMemo(
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
            [n.reactions]
        ),
        f = j[h],
        g = a.useMemo(() => {
            var e;
            let t = {};
            return (
                null == (e = n.poll) ||
                    e.answers.forEach((e) => {
                        var n;
                        (null == e ? void 0 : e.answer_id) != null && (null == (n = e.poll_media) ? void 0 : n.text) != null && (t[e.answer_id] = e.poll_media.text);
                    }),
                t
            );
        }, [null == (t = n.poll) ? void 0 : t.answers]),
        C = y.intl.formatToPlainString(y.t.wqBc7O, {
            numVotes: f,
            option: g[h]
        });
    if (null == m) throw Error('PollVotesModal.render: Message does not have a channelId');
    if (null == n.poll) throw Error('PollVotesModal.render: Message does not have a poll');
    return (0, l.jsxs)(o.I, {
        transitionState: u,
        onClose: r,
        size: 'lg',
        children: [
            (0, l.jsx)(c.x, {
                title: n.poll.question.text,
                subtitle: y.intl.format(y.t.XRkuoa, { count: x.toLocaleString() })
            }),
            (0, l.jsx)(d.w0Z, {
                className: M.body,
                children: (0, l.jsxs)('div', {
                    className: M.content,
                    children: [
                        (0, l.jsx)(d.Ttm, {
                            className: M.scroller,
                            fade: !0,
                            children: (0, l.jsx)(E, {
                                poll: n.poll,
                                selectedAnswerId: h,
                                onSelectAnswer: _,
                                reactionVoteCounts: j
                            })
                        }),
                        (0, l.jsx)(d.njP.Panel, {
                            id: h,
                            'aria-label': C,
                            className: M.panel,
                            children:
                                null != v && f > 0
                                    ? (0, l.jsx)(O, {
                                          message: n,
                                          reaction: v,
                                          channel: m
                                      })
                                    : (0, l.jsx)(I, {})
                        })
                    ]
                })
            })
        ]
    });
}
