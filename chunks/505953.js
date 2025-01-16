r.d(n, {
    Z: function () {
        return N;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(481060),
    u = r(239091),
    c = r(79712),
    d = r(276952),
    f = r(91159),
    _ = r(496675),
    h = r(306680),
    p = r(446183),
    m = r(677281),
    g = r(709054),
    E = r(765104),
    v = r(477291),
    I = r(478758),
    T = r(789707),
    b = r(981631),
    y = r(531578),
    S = r(359337);
function A(e) {
    let { summary: n, channel: i, members: h, guildId: T, unread: A, onClick: N } = e,
        [C, R] = s.useState(!1),
        O = (0, f.Ye)(g.default.extractTimestamp(n.startId)),
        D = (0, o.e7)([E.Z], () => E.Z.summaryFeedback(n)),
        L = (e, r) => {
            e.stopPropagation(),
                (0, v.Z)({
                    summary: n,
                    channel: i,
                    rating: r
                });
        },
        x = _.Z.can(b.Plq.MANAGE_MESSAGES, i),
        w = (e) => {
            x &&
                (0, u.jW)(e, async () => {
                    let { default: e } = await r.e('12891').then(r.bind(r, 519620));
                    return (r) =>
                        (0, a.jsx)(e, {
                            ...r,
                            summary: n
                        });
                });
        };
    return (0, a.jsxs)(l.Clickable, {
        className: S.container,
        onClick: N,
        onContextMenu: w,
        onMouseEnter: () => R(!0),
        onMouseLeave: () => R(!1),
        children: [
            (0, a.jsx)(d.Z, {
                hovered: C,
                unread: A,
                className: S.unreadPill
            }),
            (0, a.jsx)('div', {
                className: S.rowHeader,
                children: (0, a.jsxs)('div', {
                    className: S.rowHeaderLeft,
                    children: [
                        (0, a.jsx)(l.Text, {
                            className: S.timestamp,
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: O
                        }),
                        (0, a.jsx)(c.Z, {
                            height: 4,
                            width: 4,
                            'aria-hidden': 'true',
                            className: S.dot
                        }),
                        (0, a.jsx)(l.ChatIcon, {
                            size: 'xxs',
                            color: 'currentColor',
                            className: S.icon
                        }),
                        (0, a.jsx)(l.Text, {
                            className: S.count,
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: n.count
                        }),
                        h.length > 0 &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(c.Z, {
                                        height: 4,
                                        width: 4,
                                        'aria-hidden': 'true',
                                        className: S.dot
                                    }),
                                    (0, a.jsx)(I.Z, {
                                        partySize: {
                                            knownSize: h.length,
                                            totalSize: h.length
                                        },
                                        maxAvatarsShown: 3,
                                        members: h,
                                        guildId: T
                                    })
                                ]
                            })
                    ]
                })
            }),
            C &&
                !D &&
                (0, a.jsxs)('div', {
                    className: S.feedbackContainer,
                    children: [
                        (0, a.jsx)(l.Clickable, {
                            onClick: (e) => L(e, y.aZ.GOOD),
                            children: (0, a.jsx)(m.Z, {
                                className: S.thumbIcon,
                                width: 12,
                                height: 12
                            })
                        }),
                        (0, a.jsx)(l.Clickable, {
                            onClick: (e) => L(e, y.aZ.BAD),
                            children: (0, a.jsx)(p.Z, {
                                className: S.thumbIcon,
                                width: 12,
                                height: 12
                            })
                        })
                    ]
                }),
            (0, a.jsx)(l.Text, {
                color: 'header-primary',
                variant: 'text-sm/semibold',
                className: S.title,
                children: n.topic
            }),
            (0, a.jsx)(l.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                className: S.subtitle,
                children: n.summShort
            })
        ]
    });
}
function N(e) {
    let { summaries: n, summariesMembers: r, channel: i, selectTopic: l, setOpen: u } = e,
        c = (0, o.e7)([h.ZP], () => h.ZP.getOldestUnreadMessageId(i.id)),
        d = s.useCallback(
            (e) => {
                l(e), u(!1);
            },
            [l, u]
        );
    return n.length < 1
        ? (0, a.jsx)(T.Z, {})
        : (0, a.jsx)(a.Fragment, {
              children: n.map((e, n) => {
                  var s;
                  let o = null !== (s = r[n]) && void 0 !== s ? s : [];
                  return (0, a.jsx)(
                      A,
                      {
                          summary: e,
                          channel: i,
                          members: o,
                          guildId: i.guild_id,
                          unread: null != c && g.default.compare(e.endId, c) > 0,
                          onClick: () => d(n)
                      },
                      n
                  );
              })
          });
}
