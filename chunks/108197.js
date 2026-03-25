"use strict";
n.d(t, { A: () => j });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(837381),
    o = n(311907),
    c = n(3026),
    d = n(397927),
    u = n(308528),
    h = n(442433),
    A = n(152007),
    m = n(747926),
    _ = n(734057),
    p = n(222823),
    g = n(977997),
    f = n(607567),
    x = n(892896),
    C = n(884415),
    E = n(775946),
    I = n(588224),
    N = n(37411),
    b = n(985018),
    S = n(728444),
    T = n(811094),
    v = n(316945);
function y(e) {
    let { style: t, withGuildIcon: n, inverted: s } = e,
        l = { className: a()(v.GI, { [v.a7]: n }, { [v.BJ]: s }), style: t },
        { density: r } = (0, d.wRf)();
    switch (r) {
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
let j = s.memo(function (e) {
    let { thread: t, isSelectedChannel: l, isSelectedVoice: v, isLast: j, withGuildIcon: R } = e,
        O = (0, o.bG)([f.Ay], () => f.Ay.getVoiceStatesForChannel(t), [t]),
        L = (0, o.bG)([g.A], () => g.A.hasVideo(t.id)),
        {
            unread: M,
            mentionCount: D,
            isMentionLowImportance: G,
        } = (0, o.cf)([p.Ay], () => ({
            unread: p.Ay.hasUnread(t.id),
            mentionCount: p.Ay.getMentionCount(t.id),
            isMentionLowImportance: p.Ay.getIsMentionLowImportance(t.id),
        })),
        U = (0, o.bG)([A.A], () => A.A.isMuted(t.id)),
        P = s.useCallback(
            (e) => {
                (0, m.JA)(t, !e.shiftKey, N.H9.CHANNEL_LIST);
            },
            [t],
        ),
        k = s.useCallback(() => {
            u.A.preload(t.guild_id, t.id);
        }, [t.guild_id, t.id]),
        w = s.useCallback(
            (e) => {
                let s = _.A.getChannel(t.id);
                null != s &&
                    (0, h.L3)(e, async () => {
                        let { default: e } = await n.e("33").then(n.bind(n, 44536));
                        return (t) => (0, i.jsx)(e, { ...t, channel: s });
                    });
            },
            [t.id],
        ),
        V = null == O ? 0 : O.length,
        { role: B, ...H } = (0, r.rm)(t.id),
        F = s.useRef(null),
        K =
            D > 0
                ? b.intl.formatToPlainString(b.t["ZL7+I6"], { channelName: t.name, mentionCount: D })
                : M
                  ? b.intl.formatToPlainString(b.t.YlVvmc, { channelName: t.name })
                  : b.intl.formatToPlainString(b.t["0nZpiF"], { channelName: t.name });
    return (0, i.jsxs)("li", {
        role: B,
        className: a()(S.fx, { [S.wH]: l }),
        children: [
            (0, i.jsx)(y, { withGuildIcon: R }),
            j
                ? null
                : (0, i.jsx)(y, {
                      withGuildIcon: R,
                      inverted: !0,
                      style: { transform: "rotateX(180deg) translateY(-9px)" },
                  }),
            (0, i.jsx)(d.vN3, {
                focusTarget: F,
                ringTarget: F,
                offset: { top: 2, bottom: 2, right: 4 },
                children: (0, i.jsxs)("div", {
                    className: a()(S.Ki, T.iE, T.ZS, { [T.J1]: l, [T.F4]: !l && U, [T.V2]: !U && !l && M, [T.lY]: R }),
                    onMouseDown: k,
                    onContextMenu: w,
                    children: [
                        !M || U || l ? null : (0, i.jsx)("div", { className: a()(T.gy, T.WS) }),
                        (0, i.jsx)(d.DUT, {
                            ...H,
                            innerRef: F,
                            className: T.nf,
                            onClick: P,
                            "aria-label": K,
                            focusProps: { enabled: !1 },
                            children: (0, i.jsxs)("div", {
                                className: a()(T.Y5, T.__invalid_threadMainContent),
                                children: [
                                    (0, i.jsx)(c.A, { className: T.UU, "aria-hidden": !0, children: t.name }),
                                    (0, i.jsxs)("div", {
                                        className: T.Y_,
                                        children: [
                                            V > 0 && t.userLimit > 0
                                                ? (0, i.jsx)(C.A, { userCount: V, video: L, channel: t })
                                                : null,
                                            (0, x.A)(D)
                                                ? (0, i.jsx)(E.A, { mentionsCount: D, isMentionLowImportance: G })
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
                collapsed: !v && 1 !== O.length,
                collapsedMax: 6,
                voiceStates: O,
                isThread: !0,
            }),
        ],
    });
});
