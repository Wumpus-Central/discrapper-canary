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
    h = n(251812),
    m = n(518782),
    f = n(964486),
    p = n(309010),
    g = n(287809),
    x = n(174459),
    A = n(562153),
    C = n(297264),
    E = n(834730),
    I = n(821609),
    y = n(378570),
    S = n(313627),
    v = n(746080),
    N = n(61567),
    _ = n(375708),
    j = n(121051);
function b(e) {
    let { guildId: t, leaderboardWinnerData: n, title: i, detailText: s, onClose: r } = e,
        a = n.winningStreak,
        u = (0, S.Uq)(t, "LeaderboardWinnerBadgePopout");
    return (0, l.jsxs)("div", {
        className: j.Nr,
        children: [
            (0, l.jsxs)("div", {
                className: j.rb,
                children: [
                    (0, l.jsx)("div", {
                        className: j.zc,
                        children: (0, l.jsx)(o.TrophyIcon, {
                            size: "custom",
                            color: "var(--text-feedback-warning)",
                            width: 40,
                            height: 40,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: j.C,
                        children: [
                            (0, l.jsx)(C.D, { variant: "heading-md/semibold", children: i }),
                            null != s
                                ? (0, l.jsx)(E.E, { variant: "text-sm/normal", color: "text-muted", children: s })
                                : null,
                            null != a && a > 1
                                ? (0, l.jsx)(E.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      className: j.AR,
                                      children: _.intl.format(_.t.ltaxJz, { streakCount: a }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            u
                ? (0, l.jsx)("div", {
                      className: j.qr,
                      "data-button-hoisted-classname-wrapper": !0,
                      children: (0, l.jsx)(I.$, {
                          variant: "secondary",
                          size: "sm",
                          text: _.intl.string(N.default.npZ6IB),
                          fullWidth: !0,
                          onClick: function () {
                              (r(), (0, y.vn)(t, v.VV.GUILD_SPACE, { source: "Leaderboard Winner Badge Popout" }));
                          },
                      }),
                  })
                : null,
        ],
    });
}
var T = n(652215);
function R(e) {
    let { guildId: t, userId: n, onClose: i, leaderboardWinnerData: r, detailText: a } = e,
        o = (0, s.bG)([p.Ay], () => p.Ay.getChannelId(t)),
        u = (0, s.bG)([g.default], () => g.default.getUser(n)),
        c = A.Ay.useName(t, o, u);
    (0, f.Ay)(() => {
        x.default.track(T.HAw.OPEN_POPOUT, { type: "Leaderboard Winner Badge Popout", guild_id: t, channel_id: o });
    });
    let d = (0, h.K)(r?.winningStat).name;
    return (0, l.jsx)("div", {
        role: "dialog",
        "aria-label": _.intl.formatToPlainString(_.t["LRh/OJ"], { username: c, statName: d }),
        children: (0, l.jsx)(b, { guildId: t, leaderboardWinnerData: r, title: d, detailText: a, onClose: i }),
    });
}
var O = n(631949);
function M(e) {
    let { guildId: t, userId: n } = e,
        f = i.useRef(null),
        [p, g] = i.useState(!1),
        x = (0, s.bG)([c.Ay], () => c.Ay.getMember(t, n)?.gamingLeaderboardData),
        A = i.useCallback(() => g(!1), []),
        C = i.useCallback((e) => {
            (e.preventDefault(), e.stopPropagation(), g((e) => !e));
        }, []);
    if (null == x) return null;
    let E = (0, h.K)(x.winningStat).name,
        I = (function (e) {
            let t = e.winningValue;
            if (null == t || !Number.isFinite(t) || t < 0) return null;
            switch (e.winningStat) {
                case m.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED: {
                    let e = Math.floor(t / d.A.Millis.MINUTE);
                    return _.intl.formatToPlainString(N.default.GC7N5H, {
                        hours: Math.floor(e / d.A.Minutes.HOUR),
                        minutes: e % d.A.Minutes.HOUR,
                    });
                }
                case m.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
                    return _.intl.formatToPlainString(N.default.IXdbVJ, { days: t });
                case m.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
                    return _.intl.formatToPlainString(N.default["/VAMco"], { count: t });
                default:
                    return null;
            }
        })(x),
        y = null != I ? `${E}. ${I}` : E;
    return (0, l.jsx)(r.Y, {
        targetElementRef: f,
        animation: r.Y.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "top",
        shouldShow: p,
        onRequestClose: A,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsx)(R, { guildId: t, userId: n, onClose: i, leaderboardWinnerData: x, detailText: I });
        },
        children: () =>
            (0, l.jsx)(a.u, {
                title: E,
                body: _.intl.string(N.default["BX+8uG"]),
                asset: (0, l.jsx)(o.TrophyIcon, {
                    size: "lg",
                    color: "var(--text-feedback-warning)",
                    "aria-hidden": !0,
                }),
                assetSize: 32,
                position: "top",
                ariaHidden: !0,
                shouldShow: !p,
                children: (0, l.jsx)(u.D, {
                    tag: "span",
                    innerRef: f,
                    className: O.M,
                    "aria-label": y,
                    "aria-haspopup": "dialog",
                    "aria-expanded": p,
                    onClick: C,
                    children: (0, l.jsx)(o.TrophyIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                }),
            }),
    });
}
