a.d(n, { A: () => _, J: () => T });
var t = a(477900),
    r = a(582128),
    i = a(793169),
    l = a(369723),
    d = a(846058),
    s = a(17928),
    o = a(534514),
    u = a(834730),
    c = a(821609),
    p = a(265872),
    g = a(939249),
    h = a(964486),
    f = a(421773),
    m = a(378570),
    v = a(309010),
    b = a(287809),
    x = a(174459),
    A = a(562153),
    j = a(49303),
    k = a(313627),
    w = a(251812),
    E = a(651026),
    L = a(32090),
    C = a(652215),
    I = a(746080),
    P = a(880098),
    S = a(105292),
    D = a(631949),
    N = a(318626);
function R(e) {
    let { variant: n, isStreak: a, placement: r } = e,
        s = "leader" === n ? i.t : a ? l.m : d.b,
        o = "badge" === r ? 16 : 48;
    return (0, t.jsx)(s, { width: o, height: o, alt: "", ariaHidden: !0 });
}
function y(e) {
    let {
            guildId: n,
            userId: a,
            onClose: r,
            onMouseEnter: i,
            onMouseLeave: l,
            variant: d,
            isStreak: p,
            statName: g,
            title: f,
            detailText: w,
        } = e,
        E = (0, s.bG)([v.Ay], () => v.Ay.getChannelId(n)),
        L = (0, s.bG)([b.default], () => b.default.getUser(a)),
        N = A.Ay.useName(n, E, L),
        y = (0, k.Uq)(n, "LeaderboardWinnerBadgePopout"),
        T = "winner" === d ? "Leaderboard Winner Badge Popout" : "Leaderboard Leader Badge Popout";
    (0, h.Ay)(() => {
        x.default.track(C.HAw.OPEN_POPOUT, { type: T, guild_id: n, channel_id: E });
    });
    let _ =
        "winner" === d
            ? S.intl.formatToPlainString(S.t["LRh/OJ"], { username: N, statName: g })
            : S.intl.formatToPlainString(P.default.HervnJ, { username: N, statName: g });
    return (0, t.jsxs)("div", {
        role: "dialog",
        "aria-label": _,
        className: D.Nr,
        onMouseEnter: i,
        onMouseLeave: l,
        children: [
            (0, t.jsxs)("div", {
                className: D.rb,
                children: [
                    (0, t.jsx)(R, { variant: d, isStreak: p, placement: "card" }),
                    (0, t.jsxs)("div", {
                        className: D.C,
                        children: [
                            (0, t.jsx)(o.D, { variant: "heading-sm/semibold", children: f }),
                            null != w
                                ? (0, t.jsx)(u.E, { variant: "body-sm/normal", color: "text-muted", children: w })
                                : null,
                        ],
                    }),
                ],
            }),
            y
                ? (0, t.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      children: (0, t.jsx)(c.$, {
                          variant: "secondary",
                          size: "sm",
                          text: S.intl.string(P.default.npZ6IB),
                          fullWidth: !0,
                          onClick: function () {
                              (r(),
                                  (0, j.jb)(n, "winner" === d ? j.Rk.WINNER_BADGE : j.Rk.LEADER_BADGE),
                                  (0, m.vn)(n, I.VV.GUILD_SPACE, { source: T }));
                          },
                      }),
                  })
                : null,
        ],
    });
}
function T(e) {
    let { guildId: n, userId: a, winnerData: i, leaderData: l } = e,
        d = r.useRef(null),
        { isHovered: s, setIsHovered: o, onMouseEnter: u, onMouseLeave: c, cancelTimers: h } = (0, f.A)(200, 100),
        m = r.useCallback(() => {
            (h(), o(!1));
        }, [h, o]),
        v = r.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), h(), o(!s));
            },
            [h, s, o],
        ),
        b = (function (e, n) {
            if (null != e) {
                let n = (0, w.K)(e.winningStat).name,
                    a = (e.winningStreak ?? 0) > 1;
                return {
                    variant: "winner",
                    isStreak: a,
                    statName: n,
                    title: a ? S.intl.string(P.default["/Z2sDF"]) : n,
                    detailText: (0, E.Hc)(e),
                };
            }
            if (null != n) {
                let e = (0, w.K)(n.currentLeaderStat).name;
                return { variant: "leader", isStreak: !1, statName: e, title: e, detailText: (0, E.Xf)() };
            }
            return null;
        })(i, l);
    if (null == b) return null;
    let { variant: x, isStreak: A, title: j, detailText: k } = b,
        L = null != k ? `${j}. ${k}` : j;
    return (0, t.jsx)(p.Y, {
        targetElementRef: d,
        animation: p.Y.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "top",
        shouldShow: s,
        onRequestClose: m,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, t.jsx)(y, { guildId: n, userId: a, onClose: r, onMouseEnter: u, onMouseLeave: c, ...b });
        },
        children: () =>
            (0, t.jsx)(g.D, {
                tag: "span",
                innerRef: d,
                className: N.UT,
                "aria-label": L,
                "aria-haspopup": "dialog",
                "aria-expanded": s,
                onClick: v,
                onMouseEnter: u,
                onMouseLeave: c,
                children: (0, t.jsx)(R, { variant: x, isStreak: A, placement: "badge" }),
            }),
    });
}
function _(e) {
    let { guildId: n, userId: a } = e,
        r = (0, L.Ay)(n, a),
        i = (0, L.iW)(n, a);
    return (0, t.jsx)(T, { guildId: n, userId: a, winnerData: r, leaderData: i });
}
