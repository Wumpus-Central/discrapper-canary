var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(481060),
    l = r(835473),
    u = r(626135),
    c = r(709054),
    d = r(814059),
    f = r(873128),
    _ = r(428268),
    h = r(114201),
    p = r(154658),
    m = r(370611),
    g = r(981631),
    E = r(701488),
    v = r(231338),
    I = r(388032),
    T = r(743022);
function b(e) {
    let { children: n } = e;
    return (0, a.jsx)(o.ThemeProvider, {
        theme: v.BR.DARK,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, a.jsx)('div', {
                className: e,
                children: n
            })
    });
}
function y(e) {
    let { guildId: n, leaderboardId: r, source: i } = e,
        a = (0, f.Z)({
            guildId: null != n ? n : '',
            leaderboardId: r,
            intervalOffset: 0
        }),
        o = {
            leaderboard: a,
            prevLeaderboard: (0, f.Z)({
                guildId: null != n ? n : '',
                leaderboardId: r,
                intervalOffset: -1
            })
        },
        l = s.useRef(o);
    s.useEffect(() => {
        l.current = o;
    }),
        s.useEffect(() => {
            let e, r;
            let { leaderboard: a, prevLeaderboard: s } = l.current;
            if (null == a) return;
            let o = a.guild_settings.sort_by_statistic_id;
            if (null != s) {
                var c, d;
                let n = s.guild_settings.sort_by_statistic_id,
                    i = s.users[0];
                (e = null == i ? void 0 : i.user_id), (r = null == i ? void 0 : null === (d = i.statistics) || void 0 === d ? void 0 : null === (c = d[n]) || void 0 === c ? void 0 : c.value);
            }
            u.default.track(g.rMx.LEADERBOARD_POPOUT_VIEWED, {
                guild_id: n,
                leaderboard_id: a.leaderboard_id,
                interval_start: a.interval_start,
                interval_end: a.interval_end,
                sort_by_statistic_id: o,
                sort_desc: a.guild_settings.sort_desc,
                ordered_leaderboard_user_ids: a.users.map((e) => e.user_id),
                ordered_leaderboard_user_values: a.users.map((e) => {
                    var n, r;
                    return null !== (r = null === (n = e.statistics[o]) || void 0 === n ? void 0 : n.value) && void 0 !== r ? r : 0;
                }),
                opened_from_source: i,
                last_interval_champion_id: e,
                last_interval_champion_value: r
            });
        }, [n, r, i]);
}
let S = (e) => {
    var n;
    let { guildId: r, leaderboardId: i, previewMode: u = !1, source: c, trackRankingItemInteraction: d } = e,
        [h, g] = s.useState(u),
        E = s.useRef(null),
        v = (0, f.Z)({
            guildId: r,
            leaderboardId: i,
            intervalOffset: 0
        }),
        S = (0, f.Z)({
            guildId: r,
            leaderboardId: i,
            intervalOffset: -1
        });
    (0, o.useFocusLock)(E),
        y({
            guildId: r,
            leaderboardId: i,
            source: c
        });
    let N = (0, l.q)(null == v ? void 0 : null === (n = v.settings) || void 0 === n ? void 0 : n.application_id);
    return null == v || null == N
        ? null
        : (0, a.jsx)(b, {
              children: (0, a.jsxs)('div', {
                  className: T.popout,
                  ref: E,
                  children: [
                      (0, a.jsxs)('div', {
                          className: T.content,
                          children: [
                              (0, a.jsx)(A, {
                                  leaderboard: v,
                                  application: N
                              }),
                              (0, a.jsx)(m.Z, {
                                  leaderboard: v,
                                  previewMode: h,
                                  trackRankingItemInteraction: d
                              }),
                              h
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            null != S &&
                                                (0, a.jsx)(p.Z, {
                                                    className: T.previousChampion,
                                                    guildId: r,
                                                    leaderboard: S
                                                }),
                                            (0, a.jsx)(_.Z, {
                                                guildId: r,
                                                leaderboardId: i
                                            })
                                        ]
                                    })
                          ]
                      }),
                      h
                          ? (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(o.Clickable, {
                                    onClick: () => g(!1),
                                    children: (0, a.jsx)('div', {
                                        className: T.exitPreviewModeButton,
                                        children: (0, a.jsx)(o.Text, {
                                            variant: 'text-sm/medium',
                                            className: T.exitPreviewModeText,
                                            children: I.intl.string(I.t.GLeQe3)
                                        })
                                    })
                                })
                            })
                          : null
                  ]
              })
          });
};
function A(e) {
    let { leaderboard: n, application: r } = e,
        i = s.useMemo(() => (0, d.n)(c.default.extractTimestamp(n.interval_end)), [n]),
        l = r.getIconURL(E.Si.LARGE),
        u =
            null == l
                ? null
                : (0, a.jsx)('img', {
                      className: T.gameIcon,
                      src: l,
                      'aria-hidden': !0,
                      alt: ''
                  });
    return (0, a.jsxs)('div', {
        className: T.header,
        children: [
            u,
            (0, a.jsx)(o.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, a.jsx)(o.Heading, {
                variant: 'text-xs/normal',
                className: T.leaderboardTitle,
                children: I.intl.format(I.t['MlT4+P'], {
                    leaderboardName: r.name,
                    timeLeft: i,
                    leaderboardNameHook: (e, n) =>
                        (0, a.jsx)(
                            o.Text,
                            {
                                variant: 'text-sm/medium',
                                className: T.leaderboardName,
                                children: e
                            },
                            n
                        )
                })
            }),
            (0, a.jsx)(h.Z, {
                guildId: n.guild_id,
                leaderboardId: n.leaderboard_id
            })
        ]
    });
}
n.Z = S;
