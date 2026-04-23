n.d(t, { A: () => L });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(837381),
    o = n(311907),
    d = n(3026),
    c = n(187322),
    u = n(939249),
    h = n(38021),
    A = n(308528),
    _ = n(442433),
    m = n(152007),
    g = n(747926),
    p = n(734057),
    f = n(222823),
    E = n(977997),
    x = n(607567),
    I = n(892896),
    C = n(884415),
    b = n(775946),
    N = n(588224),
    S = n(37411),
    v = n(985018),
    T = n(907305),
    y = n(645591),
    j = n(998510);
function R(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        s = { className: a()(j.GI, { [j.a7]: n }, { [j.BJ]: l }), style: t },
        { density: r } = (0, h.wR)();
    switch (r) {
        case "cozy":
            return (0, i.jsxs)("svg", {
                ...s,
                width: "10",
                height: "20",
                viewBox: "0 0 10 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, i.jsx)("path", {
                        d: "M0 15H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 4H2V15H0V4ZM2 4H0C0 3.4477.4477 3 1 3c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, i.jsx)("path", {
                        d: "M6 20V18H9v2H6Zm3 0V18s1 0 1 1-1 1-.989 1.004ZM6 18v2H5V18H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
        case "compact":
            return (0, i.jsxs)("svg", {
                ...s,
                width: "10",
                height: "19",
                viewBox: "0 0 10 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, i.jsx)("path", {
                        d: "M0 11H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 0H2V11H0V0ZM2 0H0C0-.5523.4477-1 1-1c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, i.jsx)("path", {
                        d: "M6 16V14H9v2H6Zm3 0V14s1 0 1 1-1 1-.989 1.004ZM6 14v2H5V14H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
        default:
            return (0, i.jsxs)("svg", {
                ...s,
                width: "10",
                height: "19",
                viewBox: "0 0 10 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, i.jsx)("path", {
                        d: "M0 13H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 2H2V13H0V2ZM2 2H0C0 1.4477.4477 1 1 1c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, i.jsx)("path", {
                        d: "M6 18V16H9v2H6Zm3 0V16s1 0 1 1-1 1-.989 1.004ZM6 16v2H5V16H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
    }
}
let L = l.memo(function (e) {
    let { thread: t, isSelectedChannel: s, isSelectedVoice: h, isLast: j, withGuildIcon: L } = e,
        O = (0, o.bG)([x.Ay], () => x.Ay.getVoiceStatesForChannel(t), [t]),
        G = (0, o.bG)([E.A], () => E.A.hasVideo(t.id)),
        {
            unread: M,
            mentionCount: D,
            isMentionLowImportance: U,
        } = (0, o.cf)([f.Ay], () => ({
            unread: f.Ay.hasUnread(t.id),
            mentionCount: f.Ay.getMentionCount(t.id),
            isMentionLowImportance: f.Ay.getIsMentionLowImportance(t.id),
        })),
        P = (0, o.bG)([m.A], () => m.A.isMuted(t.id)),
        w = l.useCallback(
            (e) => {
                (0, g.JA)(t, !e.shiftKey, S.H9.CHANNEL_LIST);
            },
            [t],
        ),
        k = l.useCallback(() => {
            A.A.preload(t.guild_id, t.id);
        }, [t.guild_id, t.id]),
        V = l.useCallback(
            (e) => {
                let l = p.A.getChannel(t.id);
                null != l &&
                    (0, _.L3)(e, async () => {
                        let { default: e } = await n.e("22414").then(n.bind(n, 44536));
                        return (t) => (0, i.jsx)(e, { ...t, channel: l });
                    });
            },
            [t.id],
        ),
        B = null == O ? 0 : O.length,
        { role: H, ...F } = (0, r.rm)(t.id),
        W = l.useRef(null),
        Y =
            D > 0
                ? v.intl.formatToPlainString(v.t["ZL7+I6"], { channelName: t.name, mentionCount: D })
                : M
                  ? v.intl.formatToPlainString(v.t.YlVvmc, { channelName: t.name })
                  : v.intl.formatToPlainString(v.t["0nZpiF"], { channelName: t.name });
    return (0, i.jsxs)("li", {
        role: H,
        className: a()(T.fx, { [T.wH]: s }),
        children: [
            (0, i.jsx)(R, { withGuildIcon: L }),
            j
                ? null
                : (0, i.jsx)(R, {
                      withGuildIcon: L,
                      inverted: !0,
                      style: { transform: "rotateX(180deg) translateY(-9px)" },
                  }),
            (0, i.jsx)(c.vN, {
                focusTarget: W,
                ringTarget: W,
                offset: { top: 2, bottom: 2, right: 4 },
                children: (0, i.jsxs)("div", {
                    className: a()(T.Ki, y.iE, y.ZS, { [y.J1]: s, [y.F4]: !s && P, [y.V2]: !P && !s && M, [y.lY]: L }),
                    onMouseDown: k,
                    onContextMenu: V,
                    children: [
                        !M || P || s ? null : (0, i.jsx)("div", { className: a()(y.gy, y.WS) }),
                        (0, i.jsx)(u.D, {
                            ...F,
                            innerRef: W,
                            className: y.nf,
                            onClick: w,
                            "aria-label": Y,
                            focusProps: { enabled: !1 },
                            children: (0, i.jsxs)("div", {
                                className: a()(y.Y5, y.__invalid_threadMainContent),
                                children: [
                                    (0, i.jsx)(d.A, { className: y.UU, "aria-hidden": !0, children: t.name }),
                                    (0, i.jsxs)("div", {
                                        className: y.Y_,
                                        children: [
                                            B > 0 && t.userLimit > 0
                                                ? (0, i.jsx)(C.A, { userCount: B, video: G, channel: t })
                                                : null,
                                            (0, I.A)(D)
                                                ? (0, i.jsx)(b.A, { mentionsCount: D, isMentionLowImportance: U })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(N.A, {
                channel: t,
                collapsed: !h && 1 !== O.length,
                collapsedMax: 6,
                voiceStates: O,
                isThread: !0,
            }),
        ],
    });
});
