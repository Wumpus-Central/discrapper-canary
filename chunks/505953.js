n.d(t, { Z: () => S }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(239091),
    l = n(79712),
    u = n(276952),
    c = n(91159),
    d = n(496675),
    f = n(306680),
    _ = n(446183),
    p = n(677281),
    h = n(709054),
    m = n(765104),
    g = n(477291),
    E = n(478758),
    v = n(789707),
    y = n(981631),
    I = n(531578),
    b = n(359337);
function T(e) {
    let { summary: t, channel: f, members: v, guildId: T, unread: S, onClick: A } = e,
        [N, C] = r.useState(!1),
        R = (0, c.Ye)(h.default.extractTimestamp(t.startId)),
        O = (0, a.e7)([m.Z], () => m.Z.summaryFeedback(t)),
        D = (e, n) => {
            e.stopPropagation(),
                (0, g.Z)({
                    summary: t,
                    channel: f,
                    rating: n
                });
        },
        x = d.Z.can(y.Plq.MANAGE_MESSAGES, f),
        L = (e) => {
            x &&
                (0, o.jW)(e, async () => {
                    let { default: e } = await n.e('12891').then(n.bind(n, 519620));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            summary: t
                        });
                });
        };
    return (0, i.jsxs)(s.P3F, {
        className: b.container,
        onClick: A,
        onContextMenu: L,
        onMouseEnter: () => C(!0),
        onMouseLeave: () => C(!1),
        children: [
            (0, i.jsx)(u.Z, {
                hovered: N,
                unread: S,
                className: b.unreadPill
            }),
            (0, i.jsx)('div', {
                className: b.rowHeader,
                children: (0, i.jsxs)('div', {
                    className: b.rowHeaderLeft,
                    children: [
                        (0, i.jsx)(s.Text, {
                            className: b.timestamp,
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: R
                        }),
                        (0, i.jsx)(l.Z, {
                            height: 4,
                            width: 4,
                            'aria-hidden': 'true',
                            className: b.dot
                        }),
                        (0, i.jsx)(s.kBi, {
                            size: 'xxs',
                            color: 'currentColor',
                            className: b.icon
                        }),
                        (0, i.jsx)(s.Text, {
                            className: b.count,
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: t.count
                        }),
                        v.length > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(l.Z, {
                                        height: 4,
                                        width: 4,
                                        'aria-hidden': 'true',
                                        className: b.dot
                                    }),
                                    (0, i.jsx)(E.Z, {
                                        partySize: {
                                            knownSize: v.length,
                                            totalSize: v.length
                                        },
                                        maxAvatarsShown: 3,
                                        members: v,
                                        guildId: T
                                    })
                                ]
                            })
                    ]
                })
            }),
            N &&
                !O &&
                (0, i.jsxs)('div', {
                    className: b.feedbackContainer,
                    children: [
                        (0, i.jsx)(s.P3F, {
                            onClick: (e) => D(e, I.aZ.GOOD),
                            children: (0, i.jsx)(p.Z, {
                                className: b.thumbIcon,
                                width: 12,
                                height: 12
                            })
                        }),
                        (0, i.jsx)(s.P3F, {
                            onClick: (e) => D(e, I.aZ.BAD),
                            children: (0, i.jsx)(_.Z, {
                                className: b.thumbIcon,
                                width: 12,
                                height: 12
                            })
                        })
                    ]
                }),
            (0, i.jsx)(s.Text, {
                color: 'header-primary',
                variant: 'text-sm/semibold',
                className: b.title,
                children: t.topic
            }),
            (0, i.jsx)(s.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                className: b.subtitle,
                children: t.summShort
            })
        ]
    });
}
function S(e) {
    let { summaries: t, summariesMembers: n, channel: s, selectTopic: o, setOpen: l } = e,
        u = (0, a.e7)([f.ZP], () => f.ZP.getOldestUnreadMessageId(s.id)),
        c = r.useCallback(
            (e) => {
                o(e), l(!1);
            },
            [o, l]
        );
    return t.length < 1
        ? (0, i.jsx)(v.Z, {})
        : (0, i.jsx)(i.Fragment, {
              children: t.map((e, t) => {
                  var r;
                  let a = null !== (r = n[t]) && void 0 !== r ? r : [];
                  return (0, i.jsx)(
                      T,
                      {
                          summary: e,
                          channel: s,
                          members: a,
                          guildId: s.guild_id,
                          unread: null != u && h.default.compare(e.endId, u) > 0,
                          onClick: () => c(t)
                      },
                      t
                  );
              })
          });
}
