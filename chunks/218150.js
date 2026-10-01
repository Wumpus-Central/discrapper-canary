n.d(t, { A: () => k });
var l = n(477900),
    i = n(582128),
    s = n(17928),
    a = n(922016),
    r = n(683063),
    o = n(369606),
    u = n(939249),
    d = n(696451),
    c = n(927813),
    m = n(251812),
    x = n(518782),
    h = n(964486),
    j = n(309010),
    g = n(287809),
    p = n(174459),
    f = n(562153),
    N = n(297264),
    A = n(834730),
    I = n(821609),
    v = n(378570),
    b = n(49303),
    S = n(313627),
    E = n(746080),
    C = n(61567),
    T = n(375708),
    y = n(121051);
function O(e) {
    let { guildId: t, leaderboardWinnerData: n, title: i, detailText: s, onClose: a } = e,
        r = n.winningStreak,
        u = (0, S.Uq)(t, "LeaderboardWinnerBadgePopout");
    return (0, l.jsxs)("div", {
        className: y.Nr,
        children: [
            (0, l.jsxs)("div", {
                className: y.rb,
                children: [
                    (0, l.jsx)("div", {
                        className: y.zc,
                        children: (0, l.jsx)(o.TrophyIcon, {
                            size: "custom",
                            color: "var(--text-feedback-warning)",
                            width: 40,
                            height: 40,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: y.C,
                        children: [
                            (0, l.jsx)(N.D, { variant: "heading-md/semibold", children: i }),
                            null != s
                                ? (0, l.jsx)(A.E, { variant: "text-sm/normal", color: "text-muted", children: s })
                                : null,
                            null != r && r > 1
                                ? (0, l.jsx)(A.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      className: y.AR,
                                      children: T.intl.format(T.t.ltaxJz, { streakCount: r }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            u
                ? (0, l.jsx)("div", {
                      className: y.qr,
                      "data-button-hoisted-classname-wrapper": !0,
                      children: (0, l.jsx)(I.$, {
                          variant: "secondary",
                          size: "sm",
                          text: T.intl.string(C.default.npZ6IB),
                          fullWidth: !0,
                          onClick: function () {
                              (a(),
                                  (0, b.jb)(t, b.Rk.WINNER_BADGE),
                                  (0, v.vn)(t, E.VV.GUILD_SPACE, { source: "Leaderboard Winner Badge Popout" }));
                          },
                      }),
                  })
                : null,
        ],
    });
}
var _ = n(652215);
function R(e) {
    let { guildId: t, userId: n, onClose: i, leaderboardWinnerData: a, detailText: r } = e,
        o = (0, s.bG)([j.Ay], () => j.Ay.getChannelId(t)),
        u = (0, s.bG)([g.default], () => g.default.getUser(n)),
        d = f.Ay.useName(t, o, u);
    (0, h.Ay)(() => {
        p.default.track(_.HAw.OPEN_POPOUT, { type: "Leaderboard Winner Badge Popout", guild_id: t, channel_id: o });
    });
    let c = (0, m.K)(a?.winningStat).name;
    return (0, l.jsx)("div", {
        role: "dialog",
        "aria-label": T.intl.formatToPlainString(T.t["LRh/OJ"], { username: d, statName: c }),
        children: (0, l.jsx)(O, { guildId: t, leaderboardWinnerData: a, title: c, detailText: r, onClose: i }),
    });
}
var G = n(631949);
function k(e) {
    let { guildId: t, userId: n } = e,
        h = i.useRef(null),
        [j, g] = i.useState(!1),
        p = (0, s.bG)([d.Ay], () => d.Ay.getMember(t, n)?.gamingLeaderboardData),
        f = i.useCallback(() => g(!1), []),
        N = i.useCallback((e) => {
            (e.preventDefault(), e.stopPropagation(), g((e) => !e));
        }, []);
    if (null == p) return null;
    let A = (0, m.K)(p.winningStat).name,
        I = (function (e) {
            let t = e.winningValue;
            if (null == t || !Number.isFinite(t) || t < 0) return null;
            switch (e.winningStat) {
                case x.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED: {
                    let e = Math.floor(t / c.A.Millis.MINUTE),
                        n = Math.floor(e / c.A.Minutes.HOUR),
                        l = e % c.A.Minutes.HOUR;
                    if (0 === n) return T.intl.formatToPlainString(C.default["/272et"], { minutes: l });
                    return T.intl.formatToPlainString(C.default.GC7N5H, { hours: n, minutes: l });
                }
                case x.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
                    return T.intl.formatToPlainString(C.default.IXdbVJ, { days: t });
                case x.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
                    return T.intl.formatToPlainString(C.default["/VAMco"], { count: t });
                default:
                    return null;
            }
        })(p),
        v = null != I ? `${A}. ${I}` : A;
    return (0, l.jsx)(a.Y, {
        targetElementRef: h,
        animation: a.Y.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "top",
        shouldShow: j,
        onRequestClose: f,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsx)(R, { guildId: t, userId: n, onClose: i, leaderboardWinnerData: p, detailText: I });
        },
        children: () =>
            (0, l.jsx)(r.u, {
                title: A,
                body: T.intl.string(C.default["BX+8uG"]),
                asset: (0, l.jsx)(o.TrophyIcon, {
                    size: "lg",
                    color: "var(--text-feedback-warning)",
                    "aria-hidden": !0,
                }),
                assetSize: 32,
                position: "top",
                ariaHidden: !0,
                shouldShow: !j,
                children: (0, l.jsx)(u.D, {
                    tag: "span",
                    innerRef: h,
                    className: G.M,
                    "aria-label": v,
                    "aria-haspopup": "dialog",
                    "aria-expanded": j,
                    onClick: N,
                    children: (0, l.jsx)(o.TrophyIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                }),
            }),
    });
}
