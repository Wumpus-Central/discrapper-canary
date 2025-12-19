n.d(t, { Z: () => T });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(91192),
    s = n(442837),
    c = n(194983),
    u = n(481060),
    d = n(493683),
    f = n(239091),
    h = n(569471),
    p = n(488131),
    g = n(592125),
    b = n(306680),
    m = n(979651),
    y = n(938475),
    O = n(714794),
    v = n(876548),
    j = n(25601),
    C = n(207055),
    x = n(981631),
    E = n(124368),
    S = n(388032),
    I = n(642915),
    _ = n(323453),
    P = n(50798);
function N(e) {
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
function Z(e, t) {
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
function w(e) {
    let { style: t, withGuildIcon: n, inverted: i } = e,
        l = {
            className: a()(P.spine, { [P.spineWithGuildIcon]: n }, { [P.invertedSpine]: i }),
            style: t,
        },
        { density: o } = (0, u.TCT)();
    switch (o) {
        case "cozy":
            return (0, r.jsxs)(
                "svg",
                Z(N({}, l), {
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
                Z(N({}, l), {
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
                Z(N({}, l), {
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
let T = i.memo(function (e) {
    let { thread: t, isSelectedChannel: l, isSelectedVoice: P, isLast: T, withGuildIcon: A } = e,
        R = (0, s.e7)([y.ZP], () => y.ZP.getVoiceStatesForChannel(t), [t]),
        D = (0, s.e7)([m.Z], () => m.Z.hasVideo(t.id)),
        {
            unread: M,
            mentionCount: L,
            isMentionLowImportance: k,
        } = (0, s.cj)([b.ZP], () => ({
            unread: b.ZP.hasUnread(t.id),
            mentionCount: b.ZP.getMentionCount(t.id),
            isMentionLowImportance: b.ZP.getIsMentionLowImportance(t.id),
        })),
        G = (0, s.e7)([h.Z], () => h.Z.isMuted(t.id)),
        U = i.useCallback(
            (e) => {
                (0, p.ok)(t, !e.shiftKey, E.on.CHANNEL_LIST);
            },
            [t],
        ),
        B = i.useCallback(() => {
            d.Z.preload(t.guild_id, t.id);
        }, [t.guild_id, t.id]),
        F = i.useCallback(
            (e) => {
                let i = g.Z.getChannel(t.id);
                null != i &&
                    (0, f.jW)(e, async () => {
                        let { default: e } = await n.e("40157").then(n.bind(n, 422200));
                        return (t) => (0, r.jsx)(e, Z(N({}, t), { channel: i }));
                    });
            },
            [t.id],
        ),
        V = null == R ? 0 : R.length,
        H = (0, o.JA)(t.id),
        { role: W } = H,
        z = (function (e, t) {
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
        })(H, ["role"]),
        K = i.useRef(null),
        Y =
            L > 0
                ? S.intl.formatToPlainString(S.t["ZL7+I6"], {
                      channelName: t.name,
                      mentionCount: L,
                  })
                : M
                  ? S.intl.formatToPlainString(S.t.YlVvmc, { channelName: t.name })
                  : S.intl.formatToPlainString(S.t["0nZpiF"], { channelName: t.name });
    return (0, r.jsxs)("li", {
        role: W,
        className: a()(I.containerDefault, { [I.selected]: l }),
        children: [
            (0, r.jsx)(w, { withGuildIcon: A }),
            T
                ? null
                : (0, r.jsx)(w, {
                      withGuildIcon: A,
                      inverted: !0,
                      style: { transform: "rotateX(180deg) translateY(-9px)" },
                  }),
            (0, r.jsx)(u.tEY, {
                focusTarget: K,
                ringTarget: K,
                offset: {
                    top: 2,
                    bottom: 2,
                    right: 4,
                },
                children: (0, r.jsxs)("div", {
                    className: a()(I.iconVisibility, _.wrapper, _.typeThread, {
                        [_.modeSelected]: l,
                        [_.modeMuted]: !l && G,
                        [_.modeUnreadImportant]: !G && !l && M,
                        [_.withGuildIcon]: A,
                    }),
                    onMouseDown: B,
                    onContextMenu: F,
                    children: [
                        !M || G || l ? null : (0, r.jsx)("div", { className: a()(_.unread, _.unreadImportant) }),
                        (0, r.jsx)(
                            u.P3F,
                            Z(N({}, z), {
                                innerRef: K,
                                className: _.link,
                                onClick: U,
                                "aria-label": Y,
                                focusProps: { enabled: !1 },
                                children: (0, r.jsxs)("div", {
                                    className: a()(_.linkTop, _.__invalid_threadMainContent),
                                    children: [
                                        (0, r.jsx)(c.Z, {
                                            className: _.name,
                                            "aria-hidden": !0,
                                            children: t.name,
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: _.children,
                                            children: [
                                                V > 0 && t.userLimit > 0
                                                    ? (0, r.jsx)(v.Z, {
                                                          userCount: V,
                                                          video: D,
                                                          channel: t,
                                                      })
                                                    : null,
                                                (0, O.Z)(L)
                                                    ? (0, r.jsx)(j.Z, {
                                                          mentionsCount: L,
                                                          isMentionLowImportance: k,
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
            (0, r.jsx)(C.Z, {
                channel: t,
                collapsed: !P && 1 !== R.length,
                collapsedMax: 6,
                voiceStates: R,
                location: x.Sbl.GUILD_CHANNEL_LIST,
                isThread: !0,
            }),
        ],
    });
});
