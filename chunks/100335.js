var l = n(477900),
    i = n(582128),
    r = n(83827),
    s = n(665902),
    a = n(125858),
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
    g = n(309010),
    v = n(287809),
    j = n(129230),
    x = n(562153),
    _ = n(49303),
    I = n(313627),
    b = n(251812),
    S = n(651026),
    T = n(32090),
    y = n(652215),
    N = n(746080),
    L = n(135294),
    P = n(792996),
    C = n(631949),
    U = n(318626);
function O(e) {
    let { variant: t, isStreak: n, placement: i } = e,
        o = "leader" === t ? r.t : n ? s.m : a.b,
        u = "badge" === i ? 16 : 48;
    return (0, l.jsx)(o, { width: u, height: u, alt: "", ariaHidden: !0 });
}
function k(e) {
    let {
            guildId: t,
            userId: n,
            onClose: i,
            onMouseEnter: r,
            onMouseLeave: s,
            variant: a,
            isStreak: m,
            statName: h,
            title: p,
            detailText: E,
        } = e,
        I = (0, o.bG)([g.Ay], () => g.Ay.getChannelId(t)),
        b = (0, o.bG)([v.default], () => v.default.getUser(n)),
        S = x.Ay.useName(t, I, b),
        T = "winner" === a ? "Leaderboard Winner Badge Popout" : "Leaderboard Leader Badge Popout";
    (0, f.Ay)(() => {
        j.default.track(y.HAw.OPEN_POPOUT, { type: T, guild_id: t, channel_id: I });
    });
    let U =
        "winner" === a
            ? P.intl.formatToPlainString(P.t["LRh/OJ"], { username: S, statName: h })
            : P.intl.formatToPlainString(L.default.HervnJ, { username: S, statName: h });
    return (0, l.jsxs)("div", {
        role: "dialog",
        "aria-label": U,
        className: C.Nr,
        onMouseEnter: r,
        onMouseLeave: s,
        children: [
            (0, l.jsxs)("div", {
                className: C.rb,
                children: [
                    (0, l.jsx)(O, { variant: a, isStreak: m, placement: "card" }),
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
                    text: P.intl.string(L.default.npZ6IB),
                    fullWidth: !0,
                    onClick: function () {
                        (i(),
                            (0, _.jb)(t, "winner" === a ? _.Rk.WINNER_BADGE : _.Rk.LEADER_BADGE),
                            (0, A.vn)(t, N.VV.GUILD_SPACE, { source: T }));
                    },
                }),
            }),
        ],
    });
}
function M(e) {
    let { guildId: t, userId: n, winnerData: r, leaderData: s } = e,
        a = (0, o.bG)([E.A], () => E.A.getGuild(t), [t]),
        u = (0, I.mN)(a),
        d = null != a && (0, I.W8)(a, u),
        c = i.useRef(null),
        { isHovered: f, setIsHovered: A, onMouseEnter: g, onMouseLeave: v, cancelTimers: j } = (0, p.A)(200, 100),
        x = i.useCallback(() => {
            (j(), A(!1));
        }, [j, A]),
        _ = i.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), j(), A(!f));
            },
            [j, f, A],
        ),
        T = (function (e, t) {
            if (null != e) {
                let t = (0, b.K)(e.winningStat).name,
                    n = (e.winningStreak ?? 0) > 1;
                return {
                    variant: "winner",
                    isStreak: n,
                    statName: t,
                    title: n ? P.intl.string(L.default["/Z2sDF"]) : t,
                    detailText: (0, S.Hc)(e),
                };
            }
            if (null != t) {
                let e = (0, b.K)(t.currentLeaderStat).name;
                return { variant: "leader", isStreak: !1, statName: e, title: e, detailText: (0, S.Xf)() };
            }
            return null;
        })(r, s);
    if (null == T || !d) return null;
    let { variant: y, isStreak: N, title: C, detailText: M } = T,
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
            return (0, l.jsx)(k, { guildId: t, userId: n, onClose: i, onMouseEnter: g, onMouseLeave: v, ...T });
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
                onMouseEnter: g,
                onMouseLeave: v,
                children: (0, l.jsx)(O, { variant: y, isStreak: N, placement: "badge" }),
            }),
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { guildId: t, userId: n } = e,
                i = (0, T.Ay)(t, n),
                r = (0, T.iW)(t, n);
            return (0, l.jsx)(M, { guildId: t, userId: n, winnerData: i, leaderData: r });
        },
        J: M,
    },
);
