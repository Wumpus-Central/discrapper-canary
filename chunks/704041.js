c.d(e, { Z: () => O }), c(47120);
var d = c(200651),
    a = c(192379),
    s = c(481060),
    n = c(835473),
    o = c(626135),
    f = c(709054),
    p = c(814059),
    i = c(873128),
    r = c(428268),
    b = c(114201),
    u = c(154658),
    l = c(370611),
    m = c(981631),
    g = c(701488),
    j = c(231338),
    h = c(388032),
    _ = c(989662);
function v(t) {
    let { children: e } = t;
    return (0, d.jsx)(s.f6W, {
        theme: j.BR.DARK,
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
        n = a.useMemo(() => (0, p.n)(f.default.extractTimestamp(e.interval_end)), [e]),
        o = c.getIconURL(g.Si.LARGE),
        i =
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
            i,
            (0, d.jsx)(s.LZC, {
                size: 8,
                horizontal: !0
            }),
            (0, d.jsx)(s.X6q, {
                variant: 'text-xs/normal',
                className: _.leaderboardTitle,
                children: h.NW.format(h.t['MlT4+P'], {
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
let O = (t) => {
    var e;
    let { guildId: c, leaderboardId: f, previewMode: p = !1, source: b, trackRankingItemInteraction: g } = t,
        [j, O] = a.useState(p),
        y = a.useRef(null),
        N = (0, i.Z)({
            guildId: c,
            leaderboardId: f,
            intervalOffset: 0
        }),
        S = (0, i.Z)({
            guildId: c,
            leaderboardId: f,
            intervalOffset: -1
        });
    (0, s.Tbt)(y),
        (function (t) {
            let { guildId: e, leaderboardId: c, source: d } = t,
                s = {
                    leaderboard: (0, i.Z)({
                        guildId: null != e ? e : '',
                        leaderboardId: c,
                        intervalOffset: 0
                    }),
                    prevLeaderboard: (0, i.Z)({
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
                        var p, i;
                        let e = s.guild_settings.sort_by_statistic_id,
                            d = s.users[0];
                        (t = null == d ? void 0 : d.user_id), (c = null == d ? void 0 : null === (i = d.statistics) || void 0 === i ? void 0 : null === (p = i[e]) || void 0 === p ? void 0 : p.value);
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
    let Z = (0, n.q)(null == N ? void 0 : null === (e = N.settings) || void 0 === e ? void 0 : e.application_id);
    return null == N || null == Z
        ? null
        : (0, d.jsx)(v, {
              children: (0, d.jsxs)('div', {
                  className: _.popout,
                  ref: y,
                  children: [
                      (0, d.jsxs)('div', {
                          className: _.content,
                          children: [
                              (0, d.jsx)(x, {
                                  leaderboard: N,
                                  application: Z
                              }),
                              (0, d.jsx)(l.Z, {
                                  leaderboard: N,
                                  previewMode: j,
                                  trackRankingItemInteraction: g
                              }),
                              j
                                  ? null
                                  : (0, d.jsxs)(d.Fragment, {
                                        children: [
                                            null != S &&
                                                (0, d.jsx)(u.Z, {
                                                    className: _.previousChampion,
                                                    guildId: c,
                                                    leaderboard: S
                                                }),
                                            (0, d.jsx)(r.Z, {
                                                guildId: c,
                                                leaderboardId: f
                                            })
                                        ]
                                    })
                          ]
                      }),
                      j
                          ? (0, d.jsx)(d.Fragment, {
                                children: (0, d.jsx)(s.P3F, {
                                    onClick: () => O(!1),
                                    children: (0, d.jsx)('div', {
                                        className: _.exitPreviewModeButton,
                                        children: (0, d.jsx)(s.Text, {
                                            variant: 'text-sm/medium',
                                            className: _.exitPreviewModeText,
                                            children: h.NW.string(h.t.GLeQe3)
                                        })
                                    })
                                })
                            })
                          : null
                  ]
              })
          });
};
