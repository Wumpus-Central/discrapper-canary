n.d(t, { default: () => R }), n(47120), n(653041), n(411104);
var l = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    i = n(442837),
    o = n(481060),
    c = n(129861),
    d = n(700582),
    u = n(493773),
    m = n(410030),
    h = n(111028),
    _ = n(566006),
    x = n(222677),
    v = n(592125),
    j = n(594174),
    p = n(768581),
    g = n(176354),
    f = n(5192),
    N = n(91047),
    C = n(79390),
    T = n(918088),
    S = n(22864),
    w = n(981631),
    b = n(388032),
    M = n(869322),
    Z = n(144452);
let k = _.O.VOTE;
function P() {
    let e = (0, m.ZP)();
    return (0, l.jsxs)(o.ubH, {
        theme: e,
        children: [
            (0, l.jsx)(o.oxh, {
                darkSrc: Z,
                lightSrc: Z,
                width: 106,
                height: 100,
                style: { marginBottom: 10 }
            }),
            (0, l.jsx)(o.OZU, {
                note: b.NW.string(b.t.bwytdn),
                noteClassName: M.emptyText,
                className: M.emptyTitle,
                children: b.NW.string(b.t.vhQK3t)
            })
        ]
    });
}
function I(e) {
    var t;
    let { emoji: n, emojiSize: a, imageClassNames: s, textClassNames: r } = e,
        i =
            null == n.id
                ? g.ZP.getURL(n.name)
                : p.ZP.getEmojiURL({
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
function y(e) {
    let { poll: t, reactionVoteCounts: n, selectedAnswerId: a, onSelectAnswer: s } = e;
    return (0, l.jsx)(o.njP, {
        look: 'custom',
        orientation: 'vertical',
        'aria-label': b.NW.string(b.t['qbir+/']),
        selectedItem: a,
        onItemSelect: s,
        children: t.answers.map((e) => {
            var t;
            let s = String(e.answer_id),
                i = null != (t = n[s]) ? t : 0,
                { emoji: c, text: d } = e.poll_media,
                u = b.NW.formatToPlainString(b.t.wqBc7O, {
                    numVotes: i,
                    option: d
                }),
                m = a === s;
            return (0, l.jsxs)(
                o.njP.Item,
                {
                    id: s,
                    className: r()({
                        [M.voteDefault]: !m,
                        [M.voteSelected]: m
                    }),
                    'aria-label': u,
                    selectedItem: a,
                    children: [
                        null != c
                            ? (0, l.jsx)(I, {
                                  emoji: c,
                                  emojiSize: 16,
                                  imageClassNames: M.emoji,
                                  textClassNames: r()(M.emoji, M.emojiText),
                                  'aria-hidden': !0
                              })
                            : null,
                        (0, l.jsx)(o.Text, {
                            variant: 'text-sm/semibold',
                            color: 'text-secondary',
                            lineClamp: 1,
                            children: (0, l.jsx)(h.Z, {
                                position: 'left',
                                'aria-hidden': !0,
                                children: d
                            })
                        }),
                        (0, l.jsxs)(o.Text, {
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
function E(e) {
    let { user: t, channel: n } = e,
        a = (0, i.e7)([j.default], () => j.default.getUser(t.id), [t]),
        s = f.ZP.useName(n.guild_id, n.id, t);
    return (0, l.jsxs)('div', {
        className: M.voterDefault,
        onContextMenu: (e) => (0, N.Pv)(e, t, n),
        children: [
            (0, l.jsx)('div', {
                className: M.voterAvatarContainer,
                children: (0, l.jsx)(d.Z, {
                    user: null != a ? a : t,
                    size: o.EFr.SIZE_24,
                    'aria-hidden': !0,
                    guildId: n.guild_id
                })
            }),
            (0, l.jsxs)(o.Text, {
                tag: 'span',
                variant: 'text-md/normal',
                className: M.name,
                'aria-label': s,
                children: [
                    (0, l.jsx)('span', {
                        className: t.isPomelo() ? '' : M.nickname,
                        children: s
                    }),
                    (0, l.jsx)(c.Z, {
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
function L(e) {
    let { message: t, reaction: n, channel: s } = e,
        { reactors: r, hasMore: i } = (0, S.Z)({
            channelId: s.id,
            messageId: t.id,
            reaction: n
        }),
        c = a.useRef(null),
        d = a.useRef(null),
        [m, h] = a.useState(!1),
        _ = a.useCallback(async () => {
            let e = d.current;
            h(!0);
            let l = await x.U0({
                channelId: s.id,
                messageId: t.id,
                emoji: n.emoji,
                limit: w.pTL,
                after: e,
                type: k
            });
            (d.current = l[l.length - 1].id), h(!1);
        }, [s.id, t.id, n.emoji]);
    (0, u.ZP)(() => {
        _();
    });
    let v = a.useCallback(() => {
            let { current: e } = c;
            if (null == e) return;
            let t = e.getScrollerState();
            t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 && i && !m && _();
        }, [c, i, m, _]),
        j = a.useCallback(
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
                        ? (0, l.jsx)(o.$jN, { className: M.spinnerMore }, 'hasMore')
                        : null
                    : 0 === r.length && m
                      ? (0, l.jsx)(o.$jN, { className: M.spinner }, 'loadingMore')
                      : null != a &&
                        (0, l.jsx)(
                            E,
                            {
                                channel: s,
                                user: a
                            },
                            a.id
                        );
            },
            [s, m, r]
        ),
        g = a.useMemo(() => {
            let e = [];
            return 0 === r.length && m ? e.push(0) : (e.push(r.length), i && e.push(1)), e;
        }, [i, m, r.length]);
    return (0, l.jsx)('div', {
        className: M.votersListContainer,
        children: (0, l.jsx)(o.aVo, {
            className: M.voters,
            fade: !0,
            ref: c,
            sections: g,
            sectionHeight: 0,
            rowHeight: j,
            renderRow: p,
            onScroll: i ? v : void 0
        })
    });
}
function R(e) {
    var t;
    let { message: n, initialAnswerId: s, onClose: r, transitionState: c } = e,
        d = (0, i.e7)([v.Z], () => v.Z.getChannel(n.getChannelId())),
        [u, m] = a.useState(s),
        h = a.useMemo(() => {
            if (null != n.reactions) return (0, T.ef)(n.reactions, u);
        }, [n.reactions, u]),
        _ = a.useMemo(() => (0, C.cZ)(n.reactions), [n.reactions]),
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
            [n.reactions]
        ),
        j = x[u],
        p = a.useMemo(() => {
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
        g = b.NW.formatToPlainString(b.t.wqBc7O, {
            numVotes: j,
            option: p[u]
        });
    if (null == d) throw Error('PollVotesModal.render: Message does not have a channelId');
    if (null == n.poll) throw Error('PollVotesModal.render: Message does not have a poll');
    return (0, l.jsxs)(o.Y0X, {
        'aria-label': b.NW.string(b.t.H0lNmp),
        transitionState: c,
        size: o.CgR.MEDIUM,
        children: [
            (0, l.jsxs)(o.xBx, {
                className: M.header,
                children: [
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(o.Text, {
                                color: 'header-primary',
                                variant: 'text-md/semibold',
                                className: M.question,
                                children: n.poll.question.text
                            }),
                            (0, l.jsx)(o.Text, {
                                variant: 'text-md/medium',
                                color: 'text-normal',
                                children: b.NW.format(b.t.XRkuoa, { count: _.toLocaleString() })
                            })
                        ]
                    }),
                    (0, l.jsx)(o.olH, {
                        onClick: r,
                        className: M.close
                    })
                ]
            }),
            (0, l.jsxs)('div', {
                className: M.content,
                children: [
                    (0, l.jsx)(o.Ttm, {
                        className: M.scroller,
                        fade: !0,
                        children: (0, l.jsx)(y, {
                            poll: n.poll,
                            selectedAnswerId: u,
                            onSelectAnswer: m,
                            reactionVoteCounts: x
                        })
                    }),
                    (0, l.jsx)(o.njP.Panel, {
                        id: u,
                        'aria-label': g,
                        className: M.panel,
                        children:
                            null != h && j > 0
                                ? (0, l.jsx)(L, {
                                      message: n,
                                      reaction: h,
                                      channel: d
                                  })
                                : (0, l.jsx)(P, {})
                    })
                ]
            })
        ]
    });
}
