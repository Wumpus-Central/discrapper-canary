n.d(t, { A: () => M });
var l = n(477900),
    i = n(582128),
    s = n(17928),
    r = n(922016),
    a = n(683063),
    o = n(369606),
    u = n(939249),
    c = n(696451),
    d = n(927813),
    m = n(251812),
    h = n(518782),
    p = n(964486),
    f = n(309010),
    g = n(287809),
    x = n(174459),
    A = n(562153),
    C = n(297264),
    E = n(834730),
    I = n(821609),
    y = n(378570),
    S = n(49303),
    v = n(313627),
    N = n(746080),
    _ = n(61567),
    j = n(375708),
    b = n(121051);
function T(e) {
    let { guildId: t, leaderboardWinnerData: n, title: i, detailText: s, onClose: r } = e,
        a = n.winningStreak,
        u = (0, v.Uq)(t, "LeaderboardWinnerBadgePopout");
    return (0, l.jsxs)("div", {
        className: b.Nr,
        children: [
            (0, l.jsxs)("div", {
                className: b.rb,
                children: [
                    (0, l.jsx)("div", {
                        className: b.zc,
                        children: (0, l.jsx)(o.TrophyIcon, {
                            size: "custom",
                            color: "var(--text-feedback-warning)",
                            width: 40,
                            height: 40,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: b.C,
                        children: [
                            (0, l.jsx)(C.D, { variant: "heading-md/semibold", children: i }),
                            null != s
                                ? (0, l.jsx)(E.E, { variant: "text-sm/normal", color: "text-muted", children: s })
                                : null,
                            null != a && a > 1
                                ? (0, l.jsx)(E.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      className: b.AR,
                                      children: j.intl.format(j.t.ltaxJz, { streakCount: a }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            u
                ? (0, l.jsx)("div", {
                      className: b.qr,
                      "data-button-hoisted-classname-wrapper": !0,
                      children: (0, l.jsx)(I.$, {
                          variant: "secondary",
                          size: "sm",
                          text: j.intl.string(_.default.npZ6IB),
                          fullWidth: !0,
                          onClick: function () {
                              (r(),
                                  (0, S.jb)(t, S.Rk.WINNER_BADGE),
                                  (0, y.vn)(t, N.VV.GUILD_SPACE, { source: "Leaderboard Winner Badge Popout" }));
                          },
                      }),
                  })
                : null,
        ],
    });
}
var R = n(652215);
function O(e) {
    let { guildId: t, userId: n, onClose: i, leaderboardWinnerData: r, detailText: a } = e,
        o = (0, s.bG)([f.Ay], () => f.Ay.getChannelId(t)),
        u = (0, s.bG)([g.default], () => g.default.getUser(n)),
        c = A.Ay.useName(t, o, u);
    (0, p.Ay)(() => {
        x.default.track(R.HAw.OPEN_POPOUT, { type: "Leaderboard Winner Badge Popout", guild_id: t, channel_id: o });
    });
    let d = (0, m.K)(r?.winningStat).name;
    return (0, l.jsx)("div", {
        role: "dialog",
        "aria-label": j.intl.formatToPlainString(j.t["LRh/OJ"], { username: c, statName: d }),
        children: (0, l.jsx)(T, { guildId: t, leaderboardWinnerData: r, title: d, detailText: a, onClose: i }),
    });
}
var L = n(631949);
function M(e) {
    let { guildId: t, userId: n } = e,
        p = i.useRef(null),
        [f, g] = i.useState(!1),
        x = (0, s.bG)([c.Ay], () => c.Ay.getMember(t, n)?.gamingLeaderboardData),
        A = i.useCallback(() => g(!1), []),
        C = i.useCallback((e) => {
            (e.preventDefault(), e.stopPropagation(), g((e) => !e));
        }, []);
    if (null == x) return null;
    let E = (0, m.K)(x.winningStat).name,
        I = (function (e) {
            let t = e.winningValue;
            if (null == t || !Number.isFinite(t) || t < 0) return null;
            switch (e.winningStat) {
                case h.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED: {
                    let e = Math.floor(t / d.A.Millis.MINUTE),
                        n = Math.floor(e / d.A.Minutes.HOUR),
                        l = e % d.A.Minutes.HOUR;
                    if (0 === n) return j.intl.formatToPlainString(_.default["/272et"], { minutes: l });
                    return j.intl.formatToPlainString(_.default.GC7N5H, { hours: n, minutes: l });
                }
                case h.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
                    return j.intl.formatToPlainString(_.default.IXdbVJ, { days: t });
                case h.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
                    return j.intl.formatToPlainString(_.default["/VAMco"], { count: t });
                default:
                    return null;
            }
        })(x),
        y = null != I ? `${E}. ${I}` : E;
    return (0, l.jsx)(r.Y, {
        targetElementRef: p,
        animation: r.Y.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "top",
        shouldShow: f,
        onRequestClose: A,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsx)(O, { guildId: t, userId: n, onClose: i, leaderboardWinnerData: x, detailText: I });
        },
        children: () =>
            (0, l.jsx)(a.u, {
                title: E,
                body: j.intl.string(_.default["BX+8uG"]),
                asset: (0, l.jsx)(o.TrophyIcon, {
                    size: "lg",
                    color: "var(--text-feedback-warning)",
                    "aria-hidden": !0,
                }),
                assetSize: 32,
                position: "top",
                ariaHidden: !0,
                shouldShow: !f,
                children: (0, l.jsx)(u.D, {
                    tag: "span",
                    innerRef: p,
                    className: L.M,
                    "aria-label": y,
                    "aria-haspopup": "dialog",
                    "aria-expanded": f,
                    onClick: C,
                    children: (0, l.jsx)(o.TrophyIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                }),
            }),
    });
}
