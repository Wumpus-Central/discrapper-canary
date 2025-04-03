a.d(e, { Z: () => x }), a(47120);
var c = a(200651),
    d = a(192379),
    s = a(481060),
    n = a(835473),
    f = a(626135),
    i = a(709054),
    o = a(814059),
    p = a(873128),
    r = a(428268),
    l = a(114201),
    b = a(154658),
    u = a(370611),
    m = a(981631),
    g = a(701488),
    j = a(231338),
    h = a(388032),
    y = a(75923);
function _(t) {
    let { children: e } = t;
    return (0, c.jsx)(s.f6W, {
        theme: j.BR.DARK,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, c.jsx)('div', {
                className: t,
                children: e
            })
    });
}
function B(t) {
    let { leaderboard: e, application: a } = t,
        n = d.useMemo(() => (0, o.n)(i.default.extractTimestamp(e.interval_end)), [e]),
        f = a.getIconURL(g.Si.LARGE),
        p =
            null == f
                ? null
                : (0, c.jsx)('img', {
                      className: y.gameIcon,
                      src: f,
                      'aria-hidden': !0,
                      alt: ''
                  });
    return (0, c.jsxs)('div', {
        className: y.header,
        children: [
            p,
            (0, c.jsx)(s.LZC, {
                size: 8,
                horizontal: !0
            }),
            (0, c.jsx)(s.X6q, {
                variant: 'text-xs/normal',
                className: y.leaderboardTitle,
                children: h.NW.format(h.t['MlT4+P'], {
                    leaderboardName: a.name,
                    timeLeft: n,
                    leaderboardNameHook: (t, e) =>
                        (0, c.jsx)(
                            s.Text,
                            {
                                variant: 'text-sm/medium',
                                className: y.leaderboardName,
                                children: t
                            },
                            e
                        )
                })
            }),
            (0, c.jsx)(l.Z, {
                guildId: e.guild_id,
                leaderboardId: e.leaderboard_id
            })
        ]
    });
}
let x = (t) => {
    var e;
    let { guildId: a, leaderboardId: i, previewMode: o = !1, source: l, trackRankingItemInteraction: g } = t,
        [j, x] = d.useState(o),
        v = d.useRef(null),
        O = (0, p.Z)({
            guildId: a,
            leaderboardId: i,
            intervalOffset: 0
        }),
        N = (0, p.Z)({
            guildId: a,
            leaderboardId: i,
            intervalOffset: -1
        });
    (0, s.Tbt)(v),
        (function (t) {
            let { guildId: e, leaderboardId: a, source: c } = t,
                s = {
                    leaderboard: (0, p.Z)({
                        guildId: null != e ? e : '',
                        leaderboardId: a,
                        intervalOffset: 0
                    }),
                    prevLeaderboard: (0, p.Z)({
                        guildId: null != e ? e : '',
                        leaderboardId: a,
                        intervalOffset: -1
                    })
                },
                n = d.useRef(s);
            d.useEffect(() => {
                n.current = s;
            }),
                d.useEffect(() => {
                    let t,
                        a,
                        { leaderboard: d, prevLeaderboard: s } = n.current;
                    if (null == d) return;
                    let i = d.guild_settings.sort_by_statistic_id;
                    if (null != s) {
                        var o, p;
                        let e = s.guild_settings.sort_by_statistic_id,
                            c = s.users[0];
                        (t = null == c ? void 0 : c.user_id), (a = null == c || null == (p = c.statistics) || null == (o = p[e]) ? void 0 : o.value);
                    }
                    f.default.track(m.rMx.LEADERBOARD_POPOUT_VIEWED, {
                        guild_id: e,
                        leaderboard_id: d.leaderboard_id,
                        interval_start: d.interval_start,
                        interval_end: d.interval_end,
                        sort_by_statistic_id: i,
                        sort_desc: d.guild_settings.sort_desc,
                        ordered_leaderboard_user_ids: d.users.map((t) => t.user_id),
                        ordered_leaderboard_user_values: d.users.map((t) => {
                            var e, a;
                            return null != (a = null == (e = t.statistics[i]) ? void 0 : e.value) ? a : 0;
                        }),
                        opened_from_source: c,
                        last_interval_champion_id: t,
                        last_interval_champion_value: a
                    });
                }, [e, a, c]);
        })({
            guildId: a,
            leaderboardId: i,
            source: l
        });
    let S = (0, n.q)(null == O || null == (e = O.settings) ? void 0 : e.application_id);
    return null == O || null == S
        ? null
        : (0, c.jsx)(_, {
              children: (0, c.jsxs)('div', {
                  className: y.popout,
                  ref: v,
                  children: [
                      (0, c.jsxs)('div', {
                          className: y.content,
                          children: [
                              (0, c.jsx)(B, {
                                  leaderboard: O,
                                  application: S
                              }),
                              (0, c.jsx)(u.Z, {
                                  leaderboard: O,
                                  previewMode: j,
                                  trackRankingItemInteraction: g
                              }),
                              j
                                  ? null
                                  : (0, c.jsxs)(c.Fragment, {
                                        children: [
                                            null != N &&
                                                (0, c.jsx)(b.Z, {
                                                    className: y.previousChampion,
                                                    guildId: a,
                                                    leaderboard: N
                                                }),
                                            (0, c.jsx)(r.Z, {
                                                guildId: a,
                                                leaderboardId: i
                                            })
                                        ]
                                    })
                          ]
                      }),
                      j
                          ? (0, c.jsx)(s.P3F, {
                                onClick: () => x(!1),
                                children: (0, c.jsx)('div', {
                                    className: y.exitPreviewModeButton,
                                    children: (0, c.jsx)(s.Text, {
                                        variant: 'text-sm/medium',
                                        className: y.exitPreviewModeText,
                                        children: h.NW.string(h.t.GLeQe3)
                                    })
                                })
                            })
                          : null
                  ]
              })
          });
};
