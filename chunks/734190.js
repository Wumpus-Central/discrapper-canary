n.d(t, { Z: () => M });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(493683),
    d = n(239091),
    p = n(99690),
    h = n(471445),
    f = n(111028),
    g = n(569471),
    m = n(488131),
    b = n(592125),
    _ = n(306680),
    y = n(594174),
    O = n(979651),
    v = n(938475),
    j = n(990734),
    x = n(714794),
    C = n(876548),
    E = n(25601),
    S = n(207055),
    I = n(981631),
    P = n(124368),
    N = n(388032),
    Z = n(33082),
    w = n(516966),
    T = n(95701);
function A(e) {
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
function R(e, t) {
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
function D(e) {
    let { style: t, withGuildIcon: n, inverted: i } = e,
        l = {
            className: o()(T.spine, { [T.spineWithGuildIcon]: n }, { [T.invertedSpine]: i }),
            style: t,
        },
        { density: a } = (0, c.TCT)();
    switch (a) {
        case "cozy":
            return (0, r.jsxs)(
                "svg",
                R(A({}, l), {
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
                R(A({}, l), {
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
                R(A({}, l), {
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
function L(e) {
    let { thread: t } = e,
        n = i.useMemo(() => {
            var e;
            return null != (e = (0, h.KS)(t)) ? e : c.or_;
        }, [t]),
        l = (0, h.bT)(t);
    return (0, r.jsx)(c.ua7, {
        text: l,
        delay: 500,
        children: (e) =>
            (0, r.jsx)(
                "div",
                R(A({}, e), {
                    role: "img",
                    "aria-label": "".concat(l, " icon"),
                    className: w.iconContainer,
                    children: (0, r.jsx)(n, {
                        className: w.icon,
                        color: "currentColor",
                    }),
                }),
            ),
    });
}
let M = i.memo(function (e) {
    let { thread: t, isSelectedChannel: l, isSelectedVoice: h, isLast: T, withGuildIcon: M } = e,
        k = (0, s.e7)([v.ZP], () => v.ZP.getVoiceStatesForChannel(t), [t]),
        U = (0, s.e7)([O.Z], () => O.Z.hasVideo(t.id)),
        {
            unread: G,
            mentionCount: B,
            isMentionLowImportance: F,
        } = (0, s.cj)([_.ZP], () => ({
            unread: _.ZP.hasUnread(t.id),
            mentionCount: _.ZP.getMentionCount(t.id),
            isMentionLowImportance: _.ZP.getIsMentionLowImportance(t.id),
        })),
        V = (0, s.e7)([g.Z], () => g.Z.isMuted(t.id)),
        H = (0, j.p)({ location: "GuildSidebarThreadListEntry" }),
        z = (0, s.e7)([y.default], () => y.default.getUser(t.ownerId)),
        W = i.useCallback(
            (e) => {
                (0, m.ok)(t, !e.shiftKey, P.on.CHANNEL_LIST);
            },
            [t],
        ),
        K = i.useCallback(() => {
            u.Z.preload(t.guild_id, t.id);
        }, [t.guild_id, t.id]),
        Y = i.useCallback(
            (e) => {
                let i = b.Z.getChannel(t.id);
                null != i &&
                    (0, d.jW)(e, async () => {
                        let { default: e } = await n.e("40157").then(n.bind(n, 422200));
                        return (t) => (0, r.jsx)(e, R(A({}, t), { channel: i }));
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
                ? N.intl.formatToPlainString(N.t["ZL7+Iy"], {
                      channelName: t.name,
                      mentionCount: B,
                  })
                : G
                  ? N.intl.formatToPlainString(N.t.YlVvmZ, { channelName: t.name })
                  : N.intl.formatToPlainString(N.t["0nZpiI"], { channelName: t.name });
    return (0, r.jsxs)("li", {
        role: Q,
        className: o()(Z.containerDefault, { [Z.selected]: l }),
        children: [
            (0, r.jsx)(D, { withGuildIcon: M }),
            T
                ? null
                : (0, r.jsx)(D, {
                      withGuildIcon: M,
                      inverted: !0,
                      style: { transform: "rotateX(180deg) translateY(-9px)" },
                  }),
            (0, r.jsx)(c.tEY, {
                focusTarget: $,
                ringTarget: $,
                offset: {
                    top: 2,
                    bottom: 2,
                    right: 4,
                },
                children: (0, r.jsxs)("div", {
                    className: o()(Z.iconVisibility, w.wrapper, w.typeThread, {
                        [w.modeSelected]: l,
                        [w.modeMuted]: !l && V,
                        [w.modeUnreadImportant]: !V && !l && G,
                        [w.withGuildIcon]: M,
                        [w.threadsInChannelListQoLExperiment]: H.enabled,
                        [w.withThreadAvatar]: "icon-with-avatar" === H.variant,
                        [w.withThreadIconInBubble]: "icon-in-bubble" === H.variant,
                    }),
                    onMouseDown: K,
                    onContextMenu: Y,
                    children: [
                        !G || V || l ? null : (0, r.jsx)("div", { className: o()(w.unread, w.unreadImportant) }),
                        (0, r.jsx)(
                            c.P3F,
                            R(A({}, J), {
                                innerRef: $,
                                className: w.link,
                                onClick: W,
                                "aria-label": ee,
                                focusProps: { enabled: !1 },
                                children: (0, r.jsxs)("div", {
                                    className: o()(w.linkTop, w.__invalid_threadMainContent),
                                    children: [
                                        "icon-with-avatar" === H.variant
                                            ? (0, r.jsxs)("div", {
                                                  className: w.threadIconWithAvatar,
                                                  children: [
                                                      (0, r.jsx)(L, { thread: t }),
                                                      null == z
                                                          ? null
                                                          : (0, r.jsx)(p.Z, {
                                                                user: z,
                                                                size: c.EFr.SIZE_16,
                                                            }),
                                                  ],
                                              })
                                            : null,
                                        "icon-in-bubble" === H.variant ? (0, r.jsx)(L, { thread: t }) : null,
                                        (0, r.jsx)(f.Z, {
                                            className: w.name,
                                            "aria-hidden": !0,
                                            children: t.name,
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: w.children,
                                            children: [
                                                q > 0 && t.userLimit > 0
                                                    ? (0, r.jsx)(C.Z, {
                                                          userCount: q,
                                                          video: U,
                                                          channel: t,
                                                      })
                                                    : null,
                                                (0, x.Z)(B)
                                                    ? (0, r.jsx)(E.Z, {
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
            (0, r.jsx)(S.Z, {
                channel: t,
                collapsed: !h,
                collapsedMax: 6,
                voiceStates: k,
                location: I.Sbl.GUILD_CHANNEL_LIST,
            }),
        ],
    });
});
