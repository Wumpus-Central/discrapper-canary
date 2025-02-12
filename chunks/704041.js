c.d(e, { Z: () => N }), c(47120);
var d = c(200651),
    a = c(192379),
    s = c(481060),
    n = c(835473),
    o = c(626135),
    f = c(709054),
    i = c(814059),
    p = c(873128),
    r = c(428268),
    b = c(114201),
    u = c(154658),
    l = c(370611),
    m = c(981631),
    g = c(701488),
    h = c(231338),
    j = c(388032),
    _ = c(401162);
function v(t) {
    let { children: e } = t;
    return (0, d.jsx)(s.f6W, {
        theme: h.BR.DARK,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, d.jsx)('div', {
                className: t,
                children: e
            })
    });
}
function x(t) {
    let { leaderboard: e, application: c } = t,
        n = a.useMemo(() => (0, i.n)(f.default.extractTimestamp(e.interval_end)), [e]),
        o = c.getIconURL(g.Si.LARGE),
        p =
            null == o
                ? null
                : (0, d.jsx)('img', {
                      className: _.gameIcon,
                      src: o,
                      'aria-hidden': !0,
                      alt: ''
                  });
    return (0, d.jsxs)('div', {
        className: _.header,
        children: [
            p,
            (0, d.jsx)(s.LZC, {
                size: 8,
                horizontal: !0
            }),
            (0, d.jsx)(s.X6q, {
                variant: 'text-xs/normal',
                className: _.leaderboardTitle,
                children: j.intl.format(j.t['MlT4+P'], {
                    leaderboardName: c.name,
                    timeLeft: n,
                    leaderboardNameHook: (t, e) =>
                        (0, d.jsx)(
                            s.Text,
                            {
                                variant: 'text-sm/medium',
                                className: _.leaderboardName,
                                children: t
                            },
                            e
                        )
                })
            }),
            (0, d.jsx)(b.Z, {
                guildId: e.guild_id,
                leaderboardId: e.leaderboard_id
            })
        ]
    });
}
let N = (t) => {
    var e;
    let { guildId: c, leaderboardId: f, previewMode: i = !1, source: b, trackRankingItemInteraction: g } = t,
        [h, N] = a.useState(i),
        Z = a.useRef(null),
        T = (0, p.Z)({
            guildId: c,
            leaderboardId: f,
            intervalOffset: 0
        }),
        E = (0, p.Z)({
            guildId: c,
            leaderboardId: f,
            intervalOffset: -1
        });
    (0, s.Tbt)(Z),
        (function (t) {
            let { guildId: e, leaderboardId: c, source: d } = t,
                s = {
                    leaderboard: (0, p.Z)({
                        guildId: null != e ? e : '',
                        leaderboardId: c,
                        intervalOffset: 0
                    }),
                    prevLeaderboard: (0, p.Z)({
                        guildId: null != e ? e : '',
                        leaderboardId: c,
                        intervalOffset: -1
                    })
                },
                n = a.useRef(s);
            a.useEffect(() => {
                n.current = s;
            }),
                a.useEffect(() => {
                    let t, c;
                    let { leaderboard: a, prevLeaderboard: s } = n.current;
                    if (null == a) return;
                    let f = a.guild_settings.sort_by_statistic_id;
                    if (null != s) {
                        var i, p;
                        let e = s.guild_settings.sort_by_statistic_id,
                            d = s.users[0];
                        (t = null == d ? void 0 : d.user_id), (c = null == d ? void 0 : null === (p = d.statistics) || void 0 === p ? void 0 : null === (i = p[e]) || void 0 === i ? void 0 : i.value);
                    }
                    o.default.track(m.rMx.LEADERBOARD_POPOUT_VIEWED, {
                        guild_id: e,
                        leaderboard_id: a.leaderboard_id,
                        interval_start: a.interval_start,
                        interval_end: a.interval_end,
                        sort_by_statistic_id: f,
                        sort_desc: a.guild_settings.sort_desc,
                        ordered_leaderboard_user_ids: a.users.map((t) => t.user_id),
                        ordered_leaderboard_user_values: a.users.map((t) => {
                            var e, c;
                            return null !== (c = null === (e = t.statistics[f]) || void 0 === e ? void 0 : e.value) && void 0 !== c ? c : 0;
                        }),
                        opened_from_source: d,
                        last_interval_champion_id: t,
                        last_interval_champion_value: c
                    });
                }, [e, c, d]);
        })({
            guildId: c,
            leaderboardId: f,
            source: b
        });
    let I = (0, n.q)(null == T ? void 0 : null === (e = T.settings) || void 0 === e ? void 0 : e.application_id);
    return null == T || null == I
        ? null
        : (0, d.jsx)(v, {
              children: (0, d.jsxs)('div', {
                  className: _.popout,
                  ref: Z,
                  children: [
                      (0, d.jsxs)('div', {
                          className: _.content,
                          children: [
                              (0, d.jsx)(x, {
                                  leaderboard: T,
                                  application: I
                              }),
                              (0, d.jsx)(l.Z, {
                                  leaderboard: T,
                                  previewMode: h,
                                  trackRankingItemInteraction: g
                              }),
                              h
                                  ? null
                                  : (0, d.jsxs)(d.Fragment, {
                                        children: [
                                            null != E &&
                                                (0, d.jsx)(u.Z, {
                                                    className: _.previousChampion,
                                                    guildId: c,
                                                    leaderboard: E
                                                }),
                                            (0, d.jsx)(r.Z, {
                                                guildId: c,
                                                leaderboardId: f
                                            })
                                        ]
                                    })
                          ]
                      }),
                      h
                          ? (0, d.jsx)(d.Fragment, {
                                children: (0, d.jsx)(s.P3F, {
                                    onClick: () => N(!1),
                                    children: (0, d.jsx)('div', {
                                        className: _.exitPreviewModeButton,
                                        children: (0, d.jsx)(s.Text, {
                                            variant: 'text-sm/medium',
                                            className: _.exitPreviewModeText,
                                            children: j.intl.string(j.t.GLeQe3)
                                        })
                                    })
                                })
                            })
                          : null
                  ]
              })
          });
};
