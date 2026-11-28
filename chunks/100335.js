var l = n(477900),
    i = n(582128),
    r = n(83827),
    a = n(665902),
    s = n(125858),
    o = n(855986),
    u = n(534514),
    d = n(834730),
    c = n(821609),
    m = n(265872),
    h = n(939249),
    f = n(964486),
    p = n(421773),
    A = n(378570),
    E = n(71393),
    v = n(309010),
    g = n(287809),
    j = n(129230),
    x = n(562153),
    _ = n(49303),
    I = n(313627),
    b = n(251812),
    S = n(651026),
    N = n(32090),
    L = n(652215),
    T = n(746080),
    P = n(925440),
    y = n(792996),
    C = n(631949),
    U = n(318626);
function O(e) {
    let { variant: t, isStreak: n, placement: i } = e,
        o = "leader" === t ? r.t : n ? a.m : s.b,
        u = "badge" === i ? 16 : 48;
    return (0, l.jsx)(o, { width: u, height: u, alt: "", ariaHidden: !0 });
}
function k(e) {
    let {
            guildId: t,
            userId: n,
            onClose: i,
            onMouseEnter: r,
            onMouseLeave: a,
            variant: s,
            isStreak: m,
            statName: h,
            title: p,
            detailText: E,
        } = e,
        I = (0, o.bG)([v.Ay], () => v.Ay.getChannelId(t)),
        b = (0, o.bG)([g.default], () => g.default.getUser(n)),
        S = x.Ay.useName(t, I, b),
        N = "winner" === s ? "Leaderboard Winner Badge Popout" : "Leaderboard Leader Badge Popout";
    (0, f.Ay)(() => {
        j.default.track(L.HAw.OPEN_POPOUT, { type: N, guild_id: t, channel_id: I });
    });
    let U =
        "winner" === s
            ? y.intl.formatToPlainString(y.t["LRh/OJ"], { username: S, statName: h })
            : y.intl.formatToPlainString(P.default.HervnJ, { username: S, statName: h });
    return (0, l.jsxs)("div", {
        role: "dialog",
        "aria-label": U,
        className: C.Nr,
        onMouseEnter: r,
        onMouseLeave: a,
        children: [
            (0, l.jsxs)("div", {
                className: C.rb,
                children: [
                    (0, l.jsx)(O, { variant: s, isStreak: m, placement: "card" }),
                    (0, l.jsxs)("div", {
                        className: C.C,
                        children: [
                            (0, l.jsx)(u.D, { variant: "heading-sm/semibold", children: p }),
                            null != E
                                ? (0, l.jsx)(d.E, { variant: "body-sm/normal", color: "text-muted", children: E })
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
                    text: y.intl.string(P.default.npZ6IB),
                    fullWidth: !0,
                    onClick: function () {
                        (i(),
                            (0, _.jb)(t, "winner" === s ? _.Rk.WINNER_BADGE : _.Rk.LEADER_BADGE),
                            (0, A.vn)(t, T.VV.GUILD_SPACE, { source: N }));
                    },
                }),
            }),
        ],
    });
}
function M(e) {
    let { guildId: t, userId: n, winnerData: r, leaderData: a } = e,
        s = (0, o.bG)([E.A], () => E.A.getGuild(t), [t]),
        u = (0, I.mN)(s),
        d = null != s && (0, I.W8)(s, u),
        c = i.useRef(null),
        { isHovered: f, setIsHovered: A, onMouseEnter: v, onMouseLeave: g, cancelTimers: j } = (0, p.A)(200, 100),
        x = i.useCallback(() => {
            (j(), A(!1));
        }, [j, A]),
        _ = i.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), j(), A(!f));
            },
            [j, f, A],
        ),
        N = (function (e, t) {
            if (null != e) {
                let t = (0, b.K)(e.winningStat).name,
                    n = (e.winningStreak ?? 0) > 1;
                return {
                    variant: "winner",
                    isStreak: n,
                    statName: t,
                    title: n ? y.intl.string(P.default["/Z2sDF"]) : t,
                    detailText: (0, S.Hc)(e),
                };
            }
            if (null != t) {
                let e = (0, b.K)(t.currentLeaderStat).name;
                return { variant: "leader", isStreak: !1, statName: e, title: e, detailText: (0, S.Xf)() };
            }
            return null;
        })(r, a);
    if (null == N || !d) return null;
    let { variant: L, isStreak: T, title: C, detailText: M } = N,
        R = null != M ? `${C}. ${M}` : C;
    return (0, l.jsx)(m.Y, {
        targetElementRef: c,
        animation: m.Y.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "top",
        shouldShow: f && d,
        onRequestClose: x,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsx)(k, { guildId: t, userId: n, onClose: i, onMouseEnter: v, onMouseLeave: g, ...N });
        },
        children: () =>
            (0, l.jsx)(h.D, {
                tag: "span",
                innerRef: c,
                className: U.UT,
                "aria-label": R,
                "aria-haspopup": "dialog",
                "aria-expanded": f && d,
                onClick: _,
                onMouseEnter: v,
                onMouseLeave: g,
                children: (0, l.jsx)(O, { variant: L, isStreak: T, placement: "badge" }),
            }),
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { guildId: t, userId: n } = e,
                i = (0, N.Ay)(t, n),
                r = (0, N.iW)(t, n);
            return (0, l.jsx)(M, { guildId: t, userId: n, winnerData: i, leaderData: r });
        },
        J: M,
    },
);
