n.d(t, { Z: () => C }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(239091),
    l = n(79712),
    c = n(276952),
    u = n(91159),
    d = n(496675),
    f = n(306680),
    _ = n(446183),
    p = n(677281),
    h = n(709054),
    m = n(765104),
    g = n(477291),
    E = n(478758),
    b = n(789707),
    y = n(981631),
    v = n(531578),
    O = n(778699);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
    let { summary: t, channel: f, members: b, guildId: I, unread: T, onClick: A } = e,
        [C, R] = i.useState(!1),
        P = (0, u.Ye)(h.default.extractTimestamp(t.startId)),
        w = (0, o.e7)([m.Z], () => m.Z.summaryFeedback(t)),
        D = (e, n) => {
            e.stopPropagation(),
                (0, g.Z)({
                    summary: t,
                    channel: f,
                    rating: n
                });
        },
        L = d.Z.can(y.Plq.MANAGE_MESSAGES, f),
        x = (e) => {
            L &&
                (0, s.jW)(e, async () => {
                    let { default: e } = await n.e('12891').then(n.bind(n, 519620));
                    return (n) => (0, r.jsx)(e, N(S({}, n), { summary: t }));
                });
        };
    return (0, r.jsxs)(a.P3F, {
        className: O.container,
        onClick: A,
        onContextMenu: x,
        onMouseEnter: () => R(!0),
        onMouseLeave: () => R(!1),
        children: [
            (0, r.jsx)(c.Z, {
                hovered: C,
                unread: T,
                className: O.unreadPill
            }),
            (0, r.jsx)('div', {
                className: O.rowHeader,
                children: (0, r.jsxs)('div', {
                    className: O.rowHeaderLeft,
                    children: [
                        (0, r.jsx)(a.Text, {
                            className: O.timestamp,
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: P
                        }),
                        (0, r.jsx)(l.Z, {
                            height: 4,
                            width: 4,
                            'aria-hidden': 'true',
                            className: O.dot
                        }),
                        (0, r.jsx)(a.kBi, {
                            size: 'xxs',
                            color: 'currentColor',
                            className: O.icon
                        }),
                        (0, r.jsx)(a.Text, {
                            className: O.count,
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: t.count
                        }),
                        b.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(l.Z, {
                                        height: 4,
                                        width: 4,
                                        'aria-hidden': 'true',
                                        className: O.dot
                                    }),
                                    (0, r.jsx)(E.Z, {
                                        partySize: {
                                            knownSize: b.length,
                                            totalSize: b.length
                                        },
                                        maxAvatarsShown: 3,
                                        members: b,
                                        guildId: I
                                    })
                                ]
                            })
                    ]
                })
            }),
            C &&
                !w &&
                (0, r.jsxs)('div', {
                    className: O.feedbackContainer,
                    children: [
                        (0, r.jsx)(a.P3F, {
                            onClick: (e) => D(e, v.aZ.GOOD),
                            children: (0, r.jsx)(p.Z, {
                                className: O.thumbIcon,
                                width: 12,
                                height: 12
                            })
                        }),
                        (0, r.jsx)(a.P3F, {
                            onClick: (e) => D(e, v.aZ.BAD),
                            children: (0, r.jsx)(_.Z, {
                                className: O.thumbIcon,
                                width: 12,
                                height: 12
                            })
                        })
                    ]
                }),
            (0, r.jsx)(a.Text, {
                color: 'header-primary',
                variant: 'text-sm/semibold',
                className: O.title,
                children: t.topic
            }),
            (0, r.jsx)(a.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                className: O.subtitle,
                children: t.summShort
            })
        ]
    });
}
function C(e) {
    let { summaries: t, summariesMembers: n, channel: a, selectTopic: s, setOpen: l } = e,
        c = (0, o.e7)([f.ZP], () => f.ZP.getOldestUnreadMessageId(a.id)),
        u = i.useCallback(
            (e) => {
                s(e), l(!1);
            },
            [s, l]
        );
    return t.length < 1
        ? (0, r.jsx)(b.Z, {})
        : (0, r.jsx)(r.Fragment, {
              children: t.map((e, t) => {
                  var i;
                  let o = null != (i = n[t]) ? i : [];
                  return (0, r.jsx)(
                      A,
                      {
                          summary: e,
                          channel: a,
                          members: o,
                          guildId: a.guild_id,
                          unread: null != c && h.default.compare(e.endId, c) > 0,
                          onClick: () => u(t)
                      },
                      t
                  );
              })
          });
}
