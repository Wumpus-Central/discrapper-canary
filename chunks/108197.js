n.d(t, {
    A: () => w,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(837381),
    o = n(311907),
    c = n(3026),
    u = n(397927),
    d = n(308528),
    f = n(442433),
    p = n(152007),
    h = n(747926),
    b = n(734057),
    g = n(222823),
    m = n(977997),
    A = n(607567),
    y = n(892896),
    O = n(884415),
    j = n(775946),
    v = n(588224),
    x = n(652215),
    E = n(37411),
    _ = n(985018),
    C = n(728444),
    S = n(811094),
    I = n(316945);

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

function T(e, t) {
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

function P(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        i = {
            className: a()(
                I.GI,
                {
                    [I.a7]: n,
                },
                {
                    [I.BJ]: l,
                },
            ),
            style: t,
        },
        { density: s } = (0, u.wRf)();
    switch (s) {
        case "cozy":
            return (0, r.jsxs)(
                "svg",
                T(N({}, i), {
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
                T(N({}, i), {
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
                T(N({}, i), {
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
let w = l.memo(function (e) {
    let { thread: t, isSelectedChannel: i, isSelectedVoice: I, isLast: w, withGuildIcon: R } = e,
        D = (0, o.bG)([A.Ay], () => A.Ay.getVoiceStatesForChannel(t), [t]),
        M = (0, o.bG)([m.A], () => m.A.hasVideo(t.id)),
        {
            unread: L,
            mentionCount: G,
            isMentionLowImportance: k,
        } = (0, o.cf)([g.Ay], () => ({
            unread: g.Ay.hasUnread(t.id),
            mentionCount: g.Ay.getMentionCount(t.id),
            isMentionLowImportance: g.Ay.getIsMentionLowImportance(t.id),
        })),
        U = (0, o.bG)([p.A], () => p.A.isMuted(t.id)),
        V = l.useCallback(
            (e) => {
                (0, h.JA)(t, !e.shiftKey, E.H9.CHANNEL_LIST);
            },
            [t],
        ),
        F = l.useCallback(() => {
            d.A.preload(t.guild_id, t.id);
        }, [t.guild_id, t.id]),
        H = l.useCallback(
            (e) => {
                let l = b.A.getChannel(t.id);
                null != l &&
                    (0, f.L3)(e, async () => {
                        let { default: e } = await n.e("33").then(n.bind(n, 44536));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                T(N({}, t), {
                                    channel: l,
                                }),
                            );
                    });
            },
            [t.id],
        ),
        B = null == D ? 0 : D.length,
        K = (0, s.rm)(t.id),
        { role: W } = K,
        z = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(K, ["role"]),
        Y = l.useRef(null),
        q =
            G > 0
                ? _.intl.formatToPlainString(_.t["ZL7+I6"], {
                      channelName: t.name,
                      mentionCount: G,
                  })
                : L
                  ? _.intl.formatToPlainString(_.t.YlVvmc, {
                        channelName: t.name,
                    })
                  : _.intl.formatToPlainString(_.t["0nZpiF"], {
                        channelName: t.name,
                    });
    return (0, r.jsxs)("li", {
        role: W,
        className: a()(C.fx, {
            [C.wH]: i,
        }),
        children: [
            (0, r.jsx)(P, {
                withGuildIcon: R,
            }),
            w
                ? null
                : (0, r.jsx)(P, {
                      withGuildIcon: R,
                      inverted: !0,
                      style: {
                          transform: "rotateX(180deg) translateY(-9px)",
                      },
                  }),
            (0, r.jsx)(u.vN3, {
                focusTarget: Y,
                ringTarget: Y,
                offset: {
                    top: 2,
                    bottom: 2,
                    right: 4,
                },
                children: (0, r.jsxs)("div", {
                    className: a()(C.Ki, S.iE, S.ZS, {
                        [S.J1]: i,
                        [S.F4]: !i && U,
                        [S.V2]: !U && !i && L,
                        [S.lY]: R,
                    }),
                    onMouseDown: F,
                    onContextMenu: H,
                    children: [
                        !L || U || i
                            ? null
                            : (0, r.jsx)("div", {
                                  className: a()(S.gy, S.WS),
                              }),
                        (0, r.jsx)(
                            u.DUT,
                            T(N({}, z), {
                                innerRef: Y,
                                className: S.nf,
                                onClick: V,
                                "aria-label": q,
                                focusProps: {
                                    enabled: !1,
                                },
                                children: (0, r.jsxs)("div", {
                                    className: a()(S.Y5, S.__invalid_threadMainContent),
                                    children: [
                                        (0, r.jsx)(c.A, {
                                            className: S.UU,
                                            "aria-hidden": !0,
                                            children: t.name,
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: S.Y_,
                                            children: [
                                                B > 0 && t.userLimit > 0
                                                    ? (0, r.jsx)(O.A, {
                                                          userCount: B,
                                                          video: M,
                                                          channel: t,
                                                      })
                                                    : null,
                                                (0, y.A)(G)
                                                    ? (0, r.jsx)(j.A, {
                                                          mentionsCount: G,
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
            (0, r.jsx)(v.A, {
                channel: t,
                collapsed: !I && 1 !== D.length,
                collapsedMax: 6,
                voiceStates: D,
                location: x.ThZ.GUILD_CHANNEL_LIST,
                isThread: !0,
            }),
        ],
    });
});
