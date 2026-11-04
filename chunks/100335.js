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
    A = n(309010),
    v = n(287809),
    j = n(129230),
    x = n(562153),
    b = n(49303),
    E = n(313627),
    N = n(251812),
    S = n(651026),
    y = n(32090),
    I = n(652215),
    C = n(746080),
    L = n(135294),
    T = n(792996),
    P = n(631949),
    _ = n(318626);
function w(e) {
    let { variant: t, isStreak: n, placement: i } = e,
        u = "leader" === t ? r.t : n ? s.m : a.b,
        o = "badge" === i ? 16 : 48;
    return (0, l.jsx)(u, { width: o, height: o, alt: "", ariaHidden: !0 });
}
function R(e) {
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
            detailText: N,
        } = e,
        S = (0, u.bG)([A.Ay], () => A.Ay.getChannelId(t)),
        y = (0, u.bG)([v.default], () => v.default.getUser(n)),
        _ = x.Ay.useName(t, S, y),
        R = (0, E.Uq)(t, "LeaderboardWinnerBadgePopout"),
        k = "winner" === a ? "Leaderboard Winner Badge Popout" : "Leaderboard Leader Badge Popout";
    (0, f.Ay)(() => {
        j.default.track(I.HAw.OPEN_POPOUT, { type: k, guild_id: t, channel_id: S });
    });
    let U =
        "winner" === a
            ? T.intl.formatToPlainString(T.t["LRh/OJ"], { username: _, statName: m })
            : T.intl.formatToPlainString(L.default.HervnJ, { username: _, statName: m });
    return (0, l.jsxs)("div", {
        role: "dialog",
        "aria-label": U,
        className: P.Nr,
        onMouseEnter: r,
        onMouseLeave: s,
        children: [
            (0, l.jsxs)("div", {
                className: P.rb,
                children: [
                    (0, l.jsx)(w, { variant: a, isStreak: h, placement: "card" }),
                    (0, l.jsxs)("div", {
                        className: P.C,
                        children: [
                            (0, l.jsx)(o.D, { variant: "heading-sm/semibold", children: p }),
                            null != N
                                ? (0, l.jsx)(d.E, { variant: "body-sm/normal", color: "text-muted", children: N })
                                : null,
                        ],
                    }),
                ],
            }),
            R
                ? (0, l.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      children: (0, l.jsx)(c.$, {
                          variant: "secondary",
                          size: "sm",
                          text: T.intl.string(L.default.npZ6IB),
                          fullWidth: !0,
                          onClick: function () {
                              (i(),
                                  (0, b.jb)(t, "winner" === a ? b.Rk.WINNER_BADGE : b.Rk.LEADER_BADGE),
                                  (0, g.vn)(t, C.VV.GUILD_SPACE, { source: k }));
                          },
                      }),
                  })
                : null,
        ],
    });
}
function k(e) {
    let { guildId: t, userId: n, winnerData: r, leaderData: s } = e,
        a = i.useRef(null),
        { isHovered: u, setIsHovered: o, onMouseEnter: d, onMouseLeave: c, cancelTimers: f } = (0, p.A)(200, 100),
        g = i.useCallback(() => {
            (f(), o(!1));
        }, [f, o]),
        A = i.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), f(), o(!u));
            },
            [f, u, o],
        ),
        v = (function (e, t) {
            if (null != e) {
                let t = (0, N.K)(e.winningStat).name,
                    n = (e.winningStreak ?? 0) > 1;
                return {
                    variant: "winner",
                    isStreak: n,
                    statName: t,
                    title: n ? T.intl.string(L.default["/Z2sDF"]) : t,
                    detailText: (0, S.Hc)(e),
                };
            }
            if (null != t) {
                let e = (0, N.K)(t.currentLeaderStat).name;
                return { variant: "leader", isStreak: !1, statName: e, title: e, detailText: (0, S.Xf)() };
            }
            return null;
        })(r, s);
    if (null == v) return null;
    let { variant: j, isStreak: x, title: b, detailText: E } = v,
        y = null != E ? `${b}. ${E}` : b;
    return (0, l.jsx)(h.Y, {
        targetElementRef: a,
        animation: h.Y.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "top",
        shouldShow: u,
        onRequestClose: g,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsx)(R, { guildId: t, userId: n, onClose: i, onMouseEnter: d, onMouseLeave: c, ...v });
        },
        children: () =>
            (0, l.jsx)(m.D, {
                tag: "span",
                innerRef: a,
                className: _.UT,
                "aria-label": y,
                "aria-haspopup": "dialog",
                "aria-expanded": u,
                onClick: A,
                onMouseEnter: d,
                onMouseLeave: c,
                children: (0, l.jsx)(w, { variant: j, isStreak: x, placement: "badge" }),
            }),
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { guildId: t, userId: n } = e,
                i = (0, y.Ay)(t, n),
                r = (0, y.iW)(t, n);
            return (0, l.jsx)(k, { guildId: t, userId: n, winnerData: i, leaderData: r });
        },
        J: k,
    },
);
