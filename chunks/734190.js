n.d(t, { Z: () => k });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(91192),
    s = n(442837),
    c = n(194983),
    u = n(28664),
    d = n(481060),
    p = n(493683),
    h = n(239091),
    f = n(99690),
    g = n(471445),
    m = n(569471),
    b = n(488131),
    _ = n(592125),
    y = n(306680),
    O = n(594174),
    v = n(979651),
    j = n(938475),
    x = n(990734),
    C = n(714794),
    E = n(876548),
    S = n(25601),
    I = n(207055),
    P = n(981631),
    N = n(124368),
    Z = n(388032),
    w = n(33082),
    T = n(516966),
    A = n(95701);
function R(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L(e) {
    let { style: t, withGuildIcon: n, inverted: i } = e,
        l = {
            className: o()(A.spine, { [A.spineWithGuildIcon]: n }, { [A.invertedSpine]: i }),
            style: t,
        },
        { density: a } = (0, d.TCT)();
    switch (a) {
        case "cozy":
            return (0, r.jsxs)(
                "svg",
                D(R({}, l), {
                    width: "10",
                    height: "20",
                    viewBox: "0 0 10 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, r.jsx)("path", {
                            d: "M0 15H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 4H2V15H0V4ZM2 4H0C0 3.4477.4477 3 1 3c.5523 0 1 .4477 1 1Z",
                            fill: "currentColor",
                        }),
                        (0, r.jsx)("path", {
                            d: "M6 20V18H9v2H6Zm3 0V18s1 0 1 1-1 1-.989 1.004ZM6 18v2H5V18H6Z",
                            fill: "currentColor",
                        }),
                    ],
                }),
            );
        case "compact":
            return (0, r.jsxs)(
                "svg",
                D(R({}, l), {
                    width: "10",
                    height: "19",
                    viewBox: "0 0 10 19",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, r.jsx)("path", {
                            d: "M0 11H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 0H2V11H0V0ZM2 0H0C0-.5523.4477-1 1-1c.5523 0 1 .4477 1 1Z",
                            fill: "currentColor",
                        }),
                        (0, r.jsx)("path", {
                            d: "M6 16V14H9v2H6Zm3 0V14s1 0 1 1-1 1-.989 1.004ZM6 14v2H5V14H6Z",
                            fill: "currentColor",
                        }),
                    ],
                }),
            );
        default:
            return (0, r.jsxs)(
                "svg",
                D(R({}, l), {
                    width: "10",
                    height: "19",
                    viewBox: "0 0 10 19",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, r.jsx)("path", {
                            d: "M0 13H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 2H2V13H0V2ZM2 2H0C0 1.4477.4477 1 1 1c.5523 0 1 .4477 1 1Z",
                            fill: "currentColor",
                        }),
                        (0, r.jsx)("path", {
                            d: "M6 18V16H9v2H6Zm3 0V16s1 0 1 1-1 1-.989 1.004ZM6 16v2H5V16H6Z",
                            fill: "currentColor",
                        }),
                    ],
                }),
            );
    }
}
function M(e) {
    let { thread: t } = e,
        n = i.useMemo(() => {
            var e;
            return null != (e = (0, g.KS)(t)) ? e : d.or_;
        }, [t]),
        l = (0, g.bT)(t);
    return (0, r.jsx)(u.u, {
        text: l,
        delay: 500,
        asContainer: !0,
        children: (0, r.jsx)("div", {
            role: "img",
            "aria-label": "".concat(l, " icon"),
            className: T.iconContainer,
            children: (0, r.jsx)(n, {
                className: T.icon,
                color: "currentColor",
            }),
        }),
    });
}
let k = i.memo(function (e) {
    let { thread: t, isSelectedChannel: l, isSelectedVoice: u, isLast: g, withGuildIcon: A } = e,
        k = (0, s.e7)([j.ZP], () => j.ZP.getVoiceStatesForChannel(t), [t]),
        G = (0, s.e7)([v.Z], () => v.Z.hasVideo(t.id)),
        {
            unread: U,
            mentionCount: B,
            isMentionLowImportance: F,
        } = (0, s.cj)([y.ZP], () => ({
            unread: y.ZP.hasUnread(t.id),
            mentionCount: y.ZP.getMentionCount(t.id),
            isMentionLowImportance: y.ZP.getIsMentionLowImportance(t.id),
        })),
        V = (0, s.e7)([m.Z], () => m.Z.isMuted(t.id)),
        H = (0, x.p)({ location: "GuildSidebarThreadListEntry" }),
        z = (0, s.e7)([O.default], () => O.default.getUser(t.ownerId)),
        W = i.useCallback(
            (e) => {
                (0, b.ok)(t, !e.shiftKey, N.on.CHANNEL_LIST);
            },
            [t],
        ),
        K = i.useCallback(() => {
            p.Z.preload(t.guild_id, t.id);
        }, [t.guild_id, t.id]),
        Y = i.useCallback(
            (e) => {
                let i = _.Z.getChannel(t.id);
                null != i &&
                    (0, h.jW)(e, async () => {
                        let { default: e } = await n.e("40157").then(n.bind(n, 422200));
                        return (t) => (0, r.jsx)(e, D(R({}, t), { channel: i }));
                    });
            },
            [t.id],
        ),
        q = null == k ? 0 : k.length,
        X = (0, a.JA)(t.id),
        { role: Q } = X,
        J = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(X, ["role"]),
        $ = i.useRef(null),
        ee =
            B > 0
                ? Z.intl.formatToPlainString(Z.t["ZL7+I6"], {
                      channelName: t.name,
                      mentionCount: B,
                  })
                : U
                  ? Z.intl.formatToPlainString(Z.t.YlVvmc, { channelName: t.name })
                  : Z.intl.formatToPlainString(Z.t["0nZpiF"], { channelName: t.name });
    return (0, r.jsxs)("li", {
        role: Q,
        className: o()(w.containerDefault, { [w.selected]: l }),
        children: [
            (0, r.jsx)(L, { withGuildIcon: A }),
            g
                ? null
                : (0, r.jsx)(L, {
                      withGuildIcon: A,
                      inverted: !0,
                      style: { transform: "rotateX(180deg) translateY(-9px)" },
                  }),
            (0, r.jsx)(d.tEY, {
                focusTarget: $,
                ringTarget: $,
                offset: {
                    top: 2,
                    bottom: 2,
                    right: 4,
                },
                children: (0, r.jsxs)("div", {
                    className: o()(w.iconVisibility, T.wrapper, T.typeThread, {
                        [T.modeSelected]: l,
                        [T.modeMuted]: !l && V,
                        [T.modeUnreadImportant]: !V && !l && U,
                        [T.withGuildIcon]: A,
                        [T.threadsInChannelListQoLExperiment]: H.enabled,
                        [T.withThreadAvatar]: "icon-with-avatar" === H.variant,
                        [T.withThreadIconInBubble]: "icon-in-bubble" === H.variant,
                    }),
                    onMouseDown: K,
                    onContextMenu: Y,
                    children: [
                        !U || V || l ? null : (0, r.jsx)("div", { className: o()(T.unread, T.unreadImportant) }),
                        (0, r.jsx)(
                            d.P3F,
                            D(R({}, J), {
                                innerRef: $,
                                className: T.link,
                                onClick: W,
                                "aria-label": ee,
                                focusProps: { enabled: !1 },
                                children: (0, r.jsxs)("div", {
                                    className: o()(T.linkTop, T.__invalid_threadMainContent),
                                    children: [
                                        "icon-with-avatar" === H.variant
                                            ? (0, r.jsxs)("div", {
                                                  className: T.threadIconWithAvatar,
                                                  children: [
                                                      (0, r.jsx)(M, { thread: t }),
                                                      null == z
                                                          ? null
                                                          : (0, r.jsx)(f.Z, {
                                                                user: z,
                                                                size: d.EFr.SIZE_16,
                                                            }),
                                                  ],
                                              })
                                            : null,
                                        "icon-in-bubble" === H.variant ? (0, r.jsx)(M, { thread: t }) : null,
                                        (0, r.jsx)(c.Z, {
                                            className: T.name,
                                            "aria-hidden": !0,
                                            children: t.name,
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: T.children,
                                            children: [
                                                q > 0 && t.userLimit > 0
                                                    ? (0, r.jsx)(E.Z, {
                                                          userCount: q,
                                                          video: G,
                                                          channel: t,
                                                      })
                                                    : null,
                                                (0, C.Z)(B)
                                                    ? (0, r.jsx)(S.Z, {
                                                          mentionsCount: B,
                                                          isMentionLowImportance: F,
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ),
                    ],
                }),
            }),
            (0, r.jsx)(I.Z, {
                channel: t,
                collapsed: !u && 1 !== k.length,
                collapsedMax: 6,
                voiceStates: k,
                location: P.Sbl.GUILD_CHANNEL_LIST,
                isThread: !0,
            }),
        ],
    });
});
