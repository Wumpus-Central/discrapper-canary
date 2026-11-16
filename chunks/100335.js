var l = n(477900),
    i = n(582128),
    r = n(83827),
    s = n(665902),
    a = n(125858),
    u = n(855986),
    o = n(534514),
    d = n(834730),
    c = n(821609),
    h = n(265872),
    m = n(939249),
    f = n(964486),
    p = n(421773),
    g = n(378570),
    A = n(71393),
    v = n(309010),
    j = n(287809),
    x = n(129230),
    b = n(562153),
    E = n(49303),
    N = n(313627),
    S = n(251812),
    y = n(651026),
    I = n(32090),
    C = n(652215),
    L = n(746080),
    T = n(135294),
    P = n(792996),
    _ = n(631949),
    w = n(318626);
function R(e) {
    let { variant: t, isStreak: n, placement: i } = e,
        u = "leader" === t ? r.t : n ? s.m : a.b,
        o = "badge" === i ? 16 : 48;
    return (0, l.jsx)(u, { width: o, height: o, alt: "", ariaHidden: !0 });
}
function k(e) {
    let {
            guildId: t,
            userId: n,
            onClose: i,
            onMouseEnter: r,
            onMouseLeave: s,
            variant: a,
            isStreak: h,
            statName: m,
            title: p,
            detailText: A,
        } = e,
        N = (0, u.bG)([v.Ay], () => v.Ay.getChannelId(t)),
        S = (0, u.bG)([j.default], () => j.default.getUser(n)),
        y = b.Ay.useName(t, N, S),
        I = "winner" === a ? "Leaderboard Winner Badge Popout" : "Leaderboard Leader Badge Popout";
    (0, f.Ay)(() => {
        x.default.track(C.HAw.OPEN_POPOUT, { type: I, guild_id: t, channel_id: N });
    });
    let w =
        "winner" === a
            ? P.intl.formatToPlainString(P.t["LRh/OJ"], { username: y, statName: m })
            : P.intl.formatToPlainString(T.default.HervnJ, { username: y, statName: m });
    return (0, l.jsxs)("div", {
        role: "dialog",
        "aria-label": w,
        className: _.Nr,
        onMouseEnter: r,
        onMouseLeave: s,
        children: [
            (0, l.jsxs)("div", {
                className: _.rb,
                children: [
                    (0, l.jsx)(R, { variant: a, isStreak: h, placement: "card" }),
                    (0, l.jsxs)("div", {
                        className: _.C,
                        children: [
                            (0, l.jsx)(o.D, { variant: "heading-sm/semibold", children: p }),
                            null != A
                                ? (0, l.jsx)(d.E, { variant: "body-sm/normal", color: "text-muted", children: A })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                children: (0, l.jsx)(c.$, {
                    variant: "secondary",
                    size: "sm",
                    text: P.intl.string(T.default.npZ6IB),
                    fullWidth: !0,
                    onClick: function () {
                        (i(),
                            (0, E.jb)(t, "winner" === a ? E.Rk.WINNER_BADGE : E.Rk.LEADER_BADGE),
                            (0, g.vn)(t, L.VV.GUILD_SPACE, { source: I }));
                    },
                }),
            }),
        ],
    });
}
function G(e) {
    let { guildId: t, userId: n, winnerData: r, leaderData: s } = e,
        a = (0, u.bG)([A.A], () => A.A.getGuild(t), [t]),
        o = (0, N.mN)(a),
        d = null != a && (0, N.W8)(a, o),
        c = i.useRef(null),
        { isHovered: f, setIsHovered: g, onMouseEnter: v, onMouseLeave: j, cancelTimers: x } = (0, p.A)(200, 100),
        b = i.useCallback(() => {
            (x(), g(!1));
        }, [x, g]),
        E = i.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), x(), g(!f));
            },
            [x, f, g],
        ),
        I = (function (e, t) {
            if (null != e) {
                let t = (0, S.K)(e.winningStat).name,
                    n = (e.winningStreak ?? 0) > 1;
                return {
                    variant: "winner",
                    isStreak: n,
                    statName: t,
                    title: n ? P.intl.string(T.default["/Z2sDF"]) : t,
                    detailText: (0, y.Hc)(e),
                };
            }
            if (null != t) {
                let e = (0, S.K)(t.currentLeaderStat).name;
                return { variant: "leader", isStreak: !1, statName: e, title: e, detailText: (0, y.Xf)() };
            }
            return null;
        })(r, s);
    if (null == I || !d) return null;
    let { variant: C, isStreak: L, title: _, detailText: G } = I,
        U = null != G ? `${_}. ${G}` : _;
    return (0, l.jsx)(h.Y, {
        targetElementRef: c,
        animation: h.Y.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "top",
        shouldShow: f && d,
        onRequestClose: b,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsx)(k, { guildId: t, userId: n, onClose: i, onMouseEnter: v, onMouseLeave: j, ...I });
        },
        children: () =>
            (0, l.jsx)(m.D, {
                tag: "span",
                innerRef: c,
                className: w.UT,
                "aria-label": U,
                "aria-haspopup": "dialog",
                "aria-expanded": f && d,
                onClick: E,
                onMouseEnter: v,
                onMouseLeave: j,
                children: (0, l.jsx)(R, { variant: C, isStreak: L, placement: "badge" }),
            }),
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { guildId: t, userId: n } = e,
                i = (0, I.Ay)(t, n),
                r = (0, I.iW)(t, n);
            return (0, l.jsx)(G, { guildId: t, userId: n, winnerData: i, leaderData: r });
        },
        J: G,
    },
);
