"use strict";
n.d(t, { A: () => R });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(837381),
    o = n(311907),
    c = n(3026),
    d = n(397927),
    u = n(308528),
    h = n(442433),
    A = n(152007),
    p = n(747926),
    g = n(734057),
    m = n(222823),
    _ = n(977997),
    f = n(607567),
    x = n(892896),
    C = n(884415),
    E = n(775946),
    I = n(588224),
    b = n(652215),
    N = n(37411),
    S = n(985018),
    T = n(728444),
    v = n(811094),
    y = n(316945);
function j(e) {
    let { style: t, withGuildIcon: n, inverted: s } = e,
        l = { className: r()(y.GI, { [y.a7]: n }, { [y.BJ]: s }), style: t },
        { density: a } = (0, d.wRf)();
    switch (a) {
        case "cozy":
            return (0, i.jsxs)("svg", {
                ...l,
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
                ...l,
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
                ...l,
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
let R = s.memo(function (e) {
    let { thread: t, isSelectedChannel: l, isSelectedVoice: y, isLast: R, withGuildIcon: O } = e,
        L = (0, o.bG)([f.Ay], () => f.Ay.getVoiceStatesForChannel(t), [t]),
        M = (0, o.bG)([_.A], () => _.A.hasVideo(t.id)),
        {
            unread: D,
            mentionCount: G,
            isMentionLowImportance: U,
        } = (0, o.cf)([m.Ay], () => ({
            unread: m.Ay.hasUnread(t.id),
            mentionCount: m.Ay.getMentionCount(t.id),
            isMentionLowImportance: m.Ay.getIsMentionLowImportance(t.id),
        })),
        P = (0, o.bG)([A.A], () => A.A.isMuted(t.id)),
        w = s.useCallback(
            (e) => {
                (0, p.JA)(t, !e.shiftKey, N.H9.CHANNEL_LIST);
            },
            [t],
        ),
        k = s.useCallback(() => {
            u.A.preload(t.guild_id, t.id);
        }, [t.guild_id, t.id]),
        V = s.useCallback(
            (e) => {
                let s = g.A.getChannel(t.id);
                null != s &&
                    (0, h.L3)(e, async () => {
                        let { default: e } = await n.e("33").then(n.bind(n, 44536));
                        return (t) => (0, i.jsx)(e, { ...t, channel: s });
                    });
            },
            [t.id],
        ),
        B = null == L ? 0 : L.length,
        { role: H, ...F } = (0, a.rm)(t.id),
        K = s.useRef(null),
        W =
            G > 0
                ? S.intl.formatToPlainString(S.t["ZL7+I6"], { channelName: t.name, mentionCount: G })
                : D
                  ? S.intl.formatToPlainString(S.t.YlVvmc, { channelName: t.name })
                  : S.intl.formatToPlainString(S.t["0nZpiF"], { channelName: t.name });
    return (0, i.jsxs)("li", {
        role: H,
        className: r()(T.fx, { [T.wH]: l }),
        children: [
            (0, i.jsx)(j, { withGuildIcon: O }),
            R
                ? null
                : (0, i.jsx)(j, {
                      withGuildIcon: O,
                      inverted: !0,
                      style: { transform: "rotateX(180deg) translateY(-9px)" },
                  }),
            (0, i.jsx)(d.vN3, {
                focusTarget: K,
                ringTarget: K,
                offset: { top: 2, bottom: 2, right: 4 },
                children: (0, i.jsxs)("div", {
                    className: r()(T.Ki, v.iE, v.ZS, { [v.J1]: l, [v.F4]: !l && P, [v.V2]: !P && !l && D, [v.lY]: O }),
                    onMouseDown: k,
                    onContextMenu: V,
                    children: [
                        !D || P || l ? null : (0, i.jsx)("div", { className: r()(v.gy, v.WS) }),
                        (0, i.jsx)(d.DUT, {
                            ...F,
                            innerRef: K,
                            className: v.nf,
                            onClick: w,
                            "aria-label": W,
                            focusProps: { enabled: !1 },
                            children: (0, i.jsxs)("div", {
                                className: r()(v.Y5, v.__invalid_threadMainContent),
                                children: [
                                    (0, i.jsx)(c.A, { className: v.UU, "aria-hidden": !0, children: t.name }),
                                    (0, i.jsxs)("div", {
                                        className: v.Y_,
                                        children: [
                                            B > 0 && t.userLimit > 0
                                                ? (0, i.jsx)(C.A, { userCount: B, video: M, channel: t })
                                                : null,
                                            (0, x.A)(G)
                                                ? (0, i.jsx)(E.A, { mentionsCount: G, isMentionLowImportance: U })
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
                collapsed: !y && 1 !== L.length,
                collapsedMax: 6,
                voiceStates: L,
                location: b.ThZ.GUILD_CHANNEL_LIST,
                isThread: !0,
            }),
        ],
    });
});
