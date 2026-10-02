n.d(t, { A: () => k });
var l = n(477900),
    i = n(582128),
    s = n(922016),
    a = n(683063),
    r = n(369606),
    o = n(939249),
    u = n(927813),
    d = n(251812),
    c = n(518782),
    m = n(32090),
    x = n(17928),
    h = n(964486),
    j = n(309010),
    g = n(287809),
    p = n(174459),
    f = n(562153),
    A = n(297264),
    N = n(834730),
    I = n(821609),
    v = n(378570),
    b = n(49303),
    E = n(313627),
    S = n(746080),
    C = n(61567),
    T = n(375708),
    y = n(121051);
function O(e) {
    let { guildId: t, leaderboardWinnerData: n, title: i, detailText: s, onClose: a } = e,
        o = n.winningStreak,
        u = (0, E.Uq)(t, "LeaderboardWinnerBadgePopout");
    return (0, l.jsxs)("div", {
        className: y.Nr,
        children: [
            (0, l.jsxs)("div", {
                className: y.rb,
                children: [
                    (0, l.jsx)("div", {
                        className: y.zc,
                        children: (0, l.jsx)(r.TrophyIcon, {
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
                            (0, l.jsx)(A.D, { variant: "heading-md/semibold", children: i }),
                            null != s
                                ? (0, l.jsx)(N.E, { variant: "text-sm/normal", color: "text-muted", children: s })
                                : null,
                            null != o && o > 1
                                ? (0, l.jsx)(N.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      className: y.AR,
                                      children: T.intl.format(T.t.ltaxJz, { streakCount: o }),
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
                                  (0, v.vn)(t, S.VV.GUILD_SPACE, { source: "Leaderboard Winner Badge Popout" }));
                          },
                      }),
                  })
                : null,
        ],
    });
}
var _ = n(652215);
function R(e) {
    let { guildId: t, userId: n, onClose: i, leaderboardWinnerData: s, detailText: a } = e,
        r = (0, x.bG)([j.Ay], () => j.Ay.getChannelId(t)),
        o = (0, x.bG)([g.default], () => g.default.getUser(n)),
        u = f.Ay.useName(t, r, o);
    (0, h.Ay)(() => {
        p.default.track(_.HAw.OPEN_POPOUT, { type: "Leaderboard Winner Badge Popout", guild_id: t, channel_id: r });
    });
    let c = (0, d.K)(s?.winningStat).name;
    return (0, l.jsx)("div", {
        role: "dialog",
        "aria-label": T.intl.formatToPlainString(T.t["LRh/OJ"], { username: u, statName: c }),
        children: (0, l.jsx)(O, { guildId: t, leaderboardWinnerData: s, title: c, detailText: a, onClose: i }),
    });
}
var G = n(631949);
function k(e) {
    let { guildId: t, userId: n } = e,
        x = i.useRef(null),
        [h, j] = i.useState(!1),
        g = (0, m.A)(t, n),
        p = i.useCallback(() => j(!1), []),
        f = i.useCallback((e) => {
            (e.preventDefault(), e.stopPropagation(), j((e) => !e));
        }, []);
    if (null == g) return null;
    let A = (0, d.K)(g.winningStat).name,
        N = (function (e) {
            let t = e.winningValue;
            if (null == t || !Number.isFinite(t) || t < 0) return null;
            switch (e.winningStat) {
                case c.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED: {
                    let e = Math.floor(t / u.A.Millis.MINUTE),
                        n = Math.floor(e / u.A.Minutes.HOUR),
                        l = e % u.A.Minutes.HOUR;
                    if (0 === n) return T.intl.formatToPlainString(C.default["/272et"], { minutes: l });
                    return T.intl.formatToPlainString(C.default.GC7N5H, { hours: n, minutes: l });
                }
                case c.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
                    return T.intl.formatToPlainString(C.default.IXdbVJ, { days: t });
                case c.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
                    return T.intl.formatToPlainString(C.default["/VAMco"], { count: t });
                default:
                    return null;
            }
        })(g),
        I = null != N ? `${A}. ${N}` : A;
    return (0, l.jsx)(s.Y, {
        targetElementRef: x,
        animation: s.Y.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "top",
        shouldShow: h,
        onRequestClose: p,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsx)(R, { guildId: t, userId: n, onClose: i, leaderboardWinnerData: g, detailText: N });
        },
        children: () =>
            (0, l.jsx)(a.u, {
                title: A,
                body: T.intl.string(C.default["BX+8uG"]),
                asset: (0, l.jsx)(r.TrophyIcon, {
                    size: "lg",
                    color: "var(--text-feedback-warning)",
                    "aria-hidden": !0,
                }),
                assetSize: 32,
                position: "top",
                ariaHidden: !0,
                shouldShow: !h,
                children: (0, l.jsx)(o.D, {
                    tag: "span",
                    innerRef: x,
                    className: G.M,
                    "aria-label": I,
                    "aria-haspopup": "dialog",
                    "aria-expanded": h,
                    onClick: f,
                    children: (0, l.jsx)(r.TrophyIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                }),
            }),
    });
}
