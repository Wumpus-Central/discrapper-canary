n.d(t, { Z: () => N }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(239091),
    l = n(79712),
    c = n(276952),
    u = n(91159),
    d = n(496675),
    f = n(306680),
    p = n(446183),
    _ = n(677281),
    m = n(709054),
    h = n(765104),
    g = n(477291),
    E = n(478758),
    b = n(789707),
    y = n(981631),
    O = n(531578),
    v = n(271343);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
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
function C(e, t) {
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
    let { summary: t, channel: f, members: b, guildId: S, unread: T, onClick: A } = e,
        [N, P] = i.useState(!1),
        R = (0, u.Ye)(m.default.extractTimestamp(t.startId)),
        D = (0, a.e7)([h.Z], () => h.Z.summaryFeedback(t)),
        w = (e, n) => {
            e.stopPropagation(),
                (0, g.Z)({
                    summary: t,
                    channel: f,
                    rating: n,
                });
        },
        x = d.Z.can(y.Plq.MANAGE_MESSAGES, f),
        L = (e) => {
            x &&
                (0, s.jW)(e, async () => {
                    let { default: e } = await n.e("12891").then(n.bind(n, 519620));
                    return (n) => (0, r.jsx)(e, C(I({}, n), { summary: t }));
                });
        };
    return (0, r.jsxs)(o.P3F, {
        className: v.container,
        onClick: A,
        onContextMenu: L,
        onMouseEnter: () => P(!0),
        onMouseLeave: () => P(!1),
        children: [
            (0, r.jsx)(c.Z, {
                hovered: N,
                unread: T,
                className: v.unreadPill,
            }),
            (0, r.jsx)("div", {
                className: v.rowHeader,
                children: (0, r.jsxs)("div", {
                    className: v.rowHeaderLeft,
                    children: [
                        (0, r.jsx)(o.Text, {
                            className: v.timestamp,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: R,
                        }),
                        (0, r.jsx)(l.Z, {
                            height: 4,
                            width: 4,
                            "aria-hidden": "true",
                            className: v.dot,
                        }),
                        (0, r.jsx)(o.kBi, {
                            size: "xxs",
                            color: "currentColor",
                            className: v.icon,
                        }),
                        (0, r.jsx)(o.Text, {
                            className: v.count,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        b.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(l.Z, {
                                        height: 4,
                                        width: 4,
                                        "aria-hidden": "true",
                                        className: v.dot,
                                    }),
                                    (0, r.jsx)(E.Z, {
                                        partySize: {
                                            knownSize: b.length,
                                            totalSize: b.length,
                                        },
                                        maxAvatarsShown: 3,
                                        members: b,
                                        guildId: S,
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
            N &&
                !D &&
                (0, r.jsxs)("div", {
                    className: v.feedbackContainer,
                    children: [
                        (0, r.jsx)(o.P3F, {
                            onClick: (e) => w(e, O.aZ.GOOD),
                            children: (0, r.jsx)(_.Z, {
                                className: v.thumbIcon,
                                width: 12,
                                height: 12,
                            }),
                        }),
                        (0, r.jsx)(o.P3F, {
                            onClick: (e) => w(e, O.aZ.BAD),
                            children: (0, r.jsx)(p.Z, {
                                className: v.thumbIcon,
                                width: 12,
                                height: 12,
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)(o.Text, {
                color: "header-primary",
                variant: "text-sm/semibold",
                className: v.title,
                children: t.topic,
            }),
            (0, r.jsx)(o.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                className: v.subtitle,
                children: t.summShort,
            }),
        ],
    });
}
function N(e) {
    let { summaries: t, summariesMembers: n, channel: o, selectTopic: s, setOpen: l } = e,
        c = (0, a.e7)([f.ZP], () => f.ZP.getOldestUnreadMessageId(o.id)),
        u = i.useCallback(
            (e) => {
                s(e), l(!1);
            },
            [s, l],
        );
    return t.length < 1
        ? (0, r.jsx)(b.Z, {})
        : (0, r.jsx)(r.Fragment, {
              children: t.map((e, t) => {
                  var i;
                  let a = null != (i = n[t]) ? i : [];
                  return (0, r.jsx)(
                      A,
                      {
                          summary: e,
                          channel: o,
                          members: a,
                          guildId: o.guild_id,
                          unread: null != c && m.default.compare(e.endId, c) > 0,
                          onClick: () => u(t),
                      },
                      t,
                  );
              }),
          });
}
