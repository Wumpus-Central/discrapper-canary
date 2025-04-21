n.d(t, { Z: () => I }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    o = n(835473),
    s = n(626135),
    l = n(709054),
    c = n(814059),
    u = n(873128),
    d = n(428268),
    f = n(114201),
    _ = n(154658),
    p = n(370611),
    h = n(981631),
    m = n(701488),
    g = n(231338),
    E = n(388032),
    b = n(75923);
function y(e) {
    let { children: t } = e;
    return (0, r.jsx)(a.f6W, {
        theme: g.BR.DARK,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)('div', {
                className: e,
                children: t
            })
    });
}
function v(e) {
    let { guildId: t, leaderboardId: n, source: r } = e,
        a = {
            leaderboard: (0, u.Z)({
                guildId: null != t ? t : '',
                leaderboardId: n,
                intervalOffset: 0
            }),
            prevLeaderboard: (0, u.Z)({
                guildId: null != t ? t : '',
                leaderboardId: n,
                intervalOffset: -1
            })
        },
        o = i.useRef(a);
    i.useEffect(() => {
        o.current = a;
    }),
        i.useEffect(() => {
            let e,
                n,
                { leaderboard: i, prevLeaderboard: a } = o.current;
            if (null == i) return;
            let l = i.guild_settings.sort_by_statistic_id;
            if (null != a) {
                var c, u;
                let t = a.guild_settings.sort_by_statistic_id,
                    r = a.users[0];
                (e = null == r ? void 0 : r.user_id), (n = null == r || null == (u = r.statistics) || null == (c = u[t]) ? void 0 : c.value);
            }
            s.default.track(h.rMx.LEADERBOARD_POPOUT_VIEWED, {
                guild_id: t,
                leaderboard_id: i.leaderboard_id,
                interval_start: i.interval_start,
                interval_end: i.interval_end,
                sort_by_statistic_id: l,
                sort_desc: i.guild_settings.sort_desc,
                ordered_leaderboard_user_ids: i.users.map((e) => e.user_id),
                ordered_leaderboard_user_values: i.users.map((e) => {
                    var t, n;
                    return null != (n = null == (t = e.statistics[l]) ? void 0 : t.value) ? n : 0;
                }),
                opened_from_source: r,
                last_interval_champion_id: e,
                last_interval_champion_value: n
            });
        }, [t, n, r]);
}
function O(e) {
    let { leaderboard: t, application: n } = e,
        o = i.useMemo(() => (0, c.n)(l.default.extractTimestamp(t.interval_end)), [t]),
        s = n.getIconURL(m.Si.LARGE),
        u =
            null == s
                ? null
                : (0, r.jsx)('img', {
                      className: b.gameIcon,
                      src: s,
                      'aria-hidden': !0,
                      alt: ''
                  });
    return (0, r.jsxs)('div', {
        className: b.header,
        children: [
            u,
            (0, r.jsx)(a.LZC, {
                size: 8,
                horizontal: !0
            }),
            (0, r.jsx)(a.X6q, {
                variant: 'text-xs/normal',
                className: b.leaderboardTitle,
                children: E.intl.format(E.t['MlT4+P'], {
                    leaderboardName: n.name,
                    timeLeft: o,
                    leaderboardNameHook: (e, t) =>
                        (0, r.jsx)(
                            a.Text,
                            {
                                variant: 'text-sm/medium',
                                className: b.leaderboardName,
                                children: e
                            },
                            t
                        )
                })
            }),
            (0, r.jsx)(f.Z, {
                guildId: t.guild_id,
                leaderboardId: t.leaderboard_id
            })
        ]
    });
}
let I = (e) => {
    var t;
    let { guildId: n, leaderboardId: s, previewMode: l = !1, source: c, trackRankingItemInteraction: f } = e,
        [h, m] = i.useState(l),
        g = i.useRef(null),
        I = (0, u.Z)({
            guildId: n,
            leaderboardId: s,
            intervalOffset: 0
        }),
        S = (0, u.Z)({
            guildId: n,
            leaderboardId: s,
            intervalOffset: -1
        });
    (0, a.Tbt)(g),
        v({
            guildId: n,
            leaderboardId: s,
            source: c
        });
    let T = (0, o.q)(null == I || null == (t = I.settings) ? void 0 : t.application_id);
    return null == I || null == T
        ? null
        : (0, r.jsx)(y, {
              children: (0, r.jsxs)('div', {
                  className: b.popout,
                  ref: g,
                  children: [
                      (0, r.jsxs)('div', {
                          className: b.content,
                          children: [
                              (0, r.jsx)(O, {
                                  leaderboard: I,
                                  application: T
                              }),
                              (0, r.jsx)(p.Z, {
                                  leaderboard: I,
                                  previewMode: h,
                                  trackRankingItemInteraction: f
                              }),
                              h
                                  ? null
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            null != S &&
                                                (0, r.jsx)(_.Z, {
                                                    className: b.previousChampion,
                                                    guildId: n,
                                                    leaderboard: S
                                                }),
                                            (0, r.jsx)(d.Z, {
                                                guildId: n,
                                                leaderboardId: s
                                            })
                                        ]
                                    })
                          ]
                      }),
                      h
                          ? (0, r.jsx)(a.P3F, {
                                onClick: () => m(!1),
                                children: (0, r.jsx)('div', {
                                    className: b.exitPreviewModeButton,
                                    children: (0, r.jsx)(a.Text, {
                                        variant: 'text-sm/medium',
                                        className: b.exitPreviewModeText,
                                        children: E.intl.string(E.t.GLeQe3)
                                    })
                                })
                            })
                          : null
                  ]
              })
          });
};
