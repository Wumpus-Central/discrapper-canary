n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(837381),
    o = n(311907),
    d = n(3026),
    c = n(397927),
    u = n(308528),
    h = n(442433),
    A = n(152007),
    _ = n(747926),
    m = n(734057),
    g = n(222823),
    p = n(977997),
    f = n(607567),
    x = n(892896),
    E = n(884415),
    I = n(775946),
    C = n(588224),
    N = n(37411),
    T = n(985018),
    S = n(928409),
    b = n(567431),
    v = n(570302);
function y(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        s = { className: a()(v.GI, { [v.a7]: n }, { [v.BJ]: l }), style: t },
        { density: r } = (0, c.wRf)();
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
let j = l.memo(function (e) {
    let { thread: t, isSelectedChannel: s, isSelectedVoice: v, isLast: j, withGuildIcon: R } = e,
        O = (0, o.bG)([f.Ay], () => f.Ay.getVoiceStatesForChannel(t), [t]),
        L = (0, o.bG)([p.A], () => p.A.hasVideo(t.id)),
        {
            unread: M,
            mentionCount: D,
            isMentionLowImportance: U,
        } = (0, o.cf)([g.Ay], () => ({
            unread: g.Ay.hasUnread(t.id),
            mentionCount: g.Ay.getMentionCount(t.id),
            isMentionLowImportance: g.Ay.getIsMentionLowImportance(t.id),
        })),
        G = (0, o.bG)([A.A], () => A.A.isMuted(t.id)),
        P = l.useCallback(
            (e) => {
                (0, _.JA)(t, !e.shiftKey, N.H9.CHANNEL_LIST);
            },
            [t],
        ),
        k = l.useCallback(() => {
            u.A.preload(t.guild_id, t.id);
        }, [t.guild_id, t.id]),
        w = l.useCallback(
            (e) => {
                let l = m.A.getChannel(t.id);
                null != l &&
                    (0, h.L3)(e, async () => {
                        let { default: e } = await n.e("33").then(n.bind(n, 44536));
                        return (t) => (0, i.jsx)(e, { ...t, channel: l });
                    });
            },
            [t.id],
        ),
        B = null == O ? 0 : O.length,
        { role: V, ...H } = (0, r.rm)(t.id),
        F = l.useRef(null),
        W =
            D > 0
                ? T.intl.formatToPlainString(T.t["ZL7+I6"], { channelName: t.name, mentionCount: D })
                : M
                  ? T.intl.formatToPlainString(T.t.YlVvmc, { channelName: t.name })
                  : T.intl.formatToPlainString(T.t["0nZpiF"], { channelName: t.name });
    return (0, i.jsxs)("li", {
        role: V,
        className: a()(S.fx, { [S.wH]: s }),
        children: [
            (0, i.jsx)(y, { withGuildIcon: R }),
            j
                ? null
                : (0, i.jsx)(y, {
                      withGuildIcon: R,
                      inverted: !0,
                      style: { transform: "rotateX(180deg) translateY(-9px)" },
                  }),
            (0, i.jsx)(c.vN3, {
                focusTarget: F,
                ringTarget: F,
                offset: { top: 2, bottom: 2, right: 4 },
                children: (0, i.jsxs)("div", {
                    className: a()(S.Ki, b.iE, b.ZS, { [b.J1]: s, [b.F4]: !s && G, [b.V2]: !G && !s && M, [b.lY]: R }),
                    onMouseDown: k,
                    onContextMenu: w,
                    children: [
                        !M || G || s ? null : (0, i.jsx)("div", { className: a()(b.gy, b.WS) }),
                        (0, i.jsx)(c.DUT, {
                            ...H,
                            innerRef: F,
                            className: b.nf,
                            onClick: P,
                            "aria-label": W,
                            focusProps: { enabled: !1 },
                            children: (0, i.jsxs)("div", {
                                className: a()(b.Y5, b.__invalid_threadMainContent),
                                children: [
                                    (0, i.jsx)(d.A, { className: b.UU, "aria-hidden": !0, children: t.name }),
                                    (0, i.jsxs)("div", {
                                        className: b.Y_,
                                        children: [
                                            B > 0 && t.userLimit > 0
                                                ? (0, i.jsx)(E.A, { userCount: B, video: L, channel: t })
                                                : null,
                                            (0, x.A)(D)
                                                ? (0, i.jsx)(I.A, { mentionsCount: D, isMentionLowImportance: U })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(C.A, {
                channel: t,
                collapsed: !v && 1 !== O.length,
                collapsedMax: 6,
                voiceStates: O,
                isThread: !0,
            }),
        ],
    });
});
