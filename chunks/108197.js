n.d(t, { A: () => R });
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
    g = n(747926),
    m = n(734057),
    p = n(222823),
    _ = n(977997),
    x = n(607567),
    f = n(892896),
    E = n(884415),
    C = n(775946),
    I = n(588224),
    S = n(652215),
    b = n(37411),
    N = n(985018),
    T = n(728444),
    j = n(811094),
    v = n(316945);
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
let R = l.memo(function (e) {
    let { thread: t, isSelectedChannel: s, isSelectedVoice: v, isLast: R, withGuildIcon: O } = e,
        L = (0, o.bG)([x.Ay], () => x.Ay.getVoiceStatesForChannel(t), [t]),
        D = (0, o.bG)([_.A], () => _.A.hasVideo(t.id)),
        {
            unread: M,
            mentionCount: G,
            isMentionLowImportance: U,
        } = (0, o.cf)([p.Ay], () => ({
            unread: p.Ay.hasUnread(t.id),
            mentionCount: p.Ay.getMentionCount(t.id),
            isMentionLowImportance: p.Ay.getIsMentionLowImportance(t.id),
        })),
        P = (0, o.bG)([A.A], () => A.A.isMuted(t.id)),
        k = l.useCallback(
            (e) => {
                (0, g.JA)(t, !e.shiftKey, b.H9.CHANNEL_LIST);
            },
            [t],
        ),
        w = l.useCallback(() => {
            u.A.preload(t.guild_id, t.id);
        }, [t.guild_id, t.id]),
        V = l.useCallback(
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
        B = null == L ? 0 : L.length,
        { role: H, ...F } = (0, r.rm)(t.id),
        Y = l.useRef(null),
        W =
            G > 0
                ? N.intl.formatToPlainString(N.t["ZL7+I6"], { channelName: t.name, mentionCount: G })
                : M
                  ? N.intl.formatToPlainString(N.t.YlVvmc, { channelName: t.name })
                  : N.intl.formatToPlainString(N.t["0nZpiF"], { channelName: t.name });
    return (0, i.jsxs)("li", {
        role: H,
        className: a()(T.fx, { [T.wH]: s }),
        children: [
            (0, i.jsx)(y, { withGuildIcon: O }),
            R
                ? null
                : (0, i.jsx)(y, {
                      withGuildIcon: O,
                      inverted: !0,
                      style: { transform: "rotateX(180deg) translateY(-9px)" },
                  }),
            (0, i.jsx)(c.vN3, {
                focusTarget: Y,
                ringTarget: Y,
                offset: { top: 2, bottom: 2, right: 4 },
                children: (0, i.jsxs)("div", {
                    className: a()(T.Ki, j.iE, j.ZS, { [j.J1]: s, [j.F4]: !s && P, [j.V2]: !P && !s && M, [j.lY]: O }),
                    onMouseDown: w,
                    onContextMenu: V,
                    children: [
                        !M || P || s ? null : (0, i.jsx)("div", { className: a()(j.gy, j.WS) }),
                        (0, i.jsx)(c.DUT, {
                            ...F,
                            innerRef: Y,
                            className: j.nf,
                            onClick: k,
                            "aria-label": W,
                            focusProps: { enabled: !1 },
                            children: (0, i.jsxs)("div", {
                                className: a()(j.Y5, j.__invalid_threadMainContent),
                                children: [
                                    (0, i.jsx)(d.A, { className: j.UU, "aria-hidden": !0, children: t.name }),
                                    (0, i.jsxs)("div", {
                                        className: j.Y_,
                                        children: [
                                            B > 0 && t.userLimit > 0
                                                ? (0, i.jsx)(E.A, { userCount: B, video: D, channel: t })
                                                : null,
                                            (0, f.A)(G)
                                                ? (0, i.jsx)(C.A, { mentionsCount: G, isMentionLowImportance: U })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(I.A, {
                channel: t,
                collapsed: !v && 1 !== L.length,
                collapsedMax: 6,
                voiceStates: L,
                location: S.ThZ.GUILD_CHANNEL_LIST,
                isThread: !0,
            }),
        ],
    });
});
