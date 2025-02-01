n.d(t, { Z: () => b }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(835473),
    o = n(626135),
    l = n(709054),
    u = n(814059),
    c = n(873128),
    d = n(428268),
    f = n(114201),
    _ = n(154658),
    p = n(370611),
    h = n(981631),
    m = n(701488),
    g = n(231338),
    E = n(388032),
    v = n(743022);
function y(e) {
    let { children: t } = e;
    return (0, i.jsx)(a.f6W, {
        theme: g.BR.DARK,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, i.jsx)('div', {
                className: e,
                children: t
            })
    });
}
function I(e) {
    let { guildId: t, leaderboardId: n, source: i } = e,
        a = {
            leaderboard: (0, c.Z)({
                guildId: null != t ? t : '',
                leaderboardId: n,
                intervalOffset: 0
            }),
            prevLeaderboard: (0, c.Z)({
                guildId: null != t ? t : '',
                leaderboardId: n,
                intervalOffset: -1
            })
        },
        s = r.useRef(a);
    r.useEffect(() => {
        s.current = a;
    }),
        r.useEffect(() => {
            let e, n;
            let { leaderboard: r, prevLeaderboard: a } = s.current;
            if (null == r) return;
            let l = r.guild_settings.sort_by_statistic_id;
            if (null != a) {
                var u, c;
                let t = a.guild_settings.sort_by_statistic_id,
                    i = a.users[0];
                (e = null == i ? void 0 : i.user_id), (n = null == i ? void 0 : null === (c = i.statistics) || void 0 === c ? void 0 : null === (u = c[t]) || void 0 === u ? void 0 : u.value);
            }
            o.default.track(h.rMx.LEADERBOARD_POPOUT_VIEWED, {
                guild_id: t,
                leaderboard_id: r.leaderboard_id,
                interval_start: r.interval_start,
                interval_end: r.interval_end,
                sort_by_statistic_id: l,
                sort_desc: r.guild_settings.sort_desc,
                ordered_leaderboard_user_ids: r.users.map((e) => e.user_id),
                ordered_leaderboard_user_values: r.users.map((e) => {
                    var t, n;
                    return null !== (n = null === (t = e.statistics[l]) || void 0 === t ? void 0 : t.value) && void 0 !== n ? n : 0;
                }),
                opened_from_source: i,
                last_interval_champion_id: e,
                last_interval_champion_value: n
            });
        }, [t, n, i]);
}
function T(e) {
    let { leaderboard: t, application: n } = e,
        s = r.useMemo(() => (0, u.n)(l.default.extractTimestamp(t.interval_end)), [t]),
        o = n.getIconURL(m.Si.LARGE),
        c =
            null == o
                ? null
                : (0, i.jsx)('img', {
                      className: v.gameIcon,
                      src: o,
                      'aria-hidden': !0,
                      alt: ''
                  });
    return (0, i.jsxs)('div', {
        className: v.header,
        children: [
            c,
            (0, i.jsx)(a.LZC, {
                size: 8,
                horizontal: !0
            }),
            (0, i.jsx)(a.X6q, {
                variant: 'text-xs/normal',
                className: v.leaderboardTitle,
                children: E.intl.format(E.t['MlT4+P'], {
                    leaderboardName: n.name,
                    timeLeft: s,
                    leaderboardNameHook: (e, t) =>
                        (0, i.jsx)(
                            a.Text,
                            {
                                variant: 'text-sm/medium',
                                className: v.leaderboardName,
                                children: e
                            },
                            t
                        )
                })
            }),
            (0, i.jsx)(f.Z, {
                guildId: t.guild_id,
                leaderboardId: t.leaderboard_id
            })
        ]
    });
}
let b = (e) => {
    var t;
    let { guildId: n, leaderboardId: o, previewMode: l = !1, source: u, trackRankingItemInteraction: f } = e,
        [h, m] = r.useState(l),
        g = r.useRef(null),
        b = (0, c.Z)({
            guildId: n,
            leaderboardId: o,
            intervalOffset: 0
        }),
        S = (0, c.Z)({
            guildId: n,
            leaderboardId: o,
            intervalOffset: -1
        });
    (0, a.Tbt)(g),
        I({
            guildId: n,
            leaderboardId: o,
            source: u
        });
    let A = (0, s.q)(null == b ? void 0 : null === (t = b.settings) || void 0 === t ? void 0 : t.application_id);
    return null == b || null == A
        ? null
        : (0, i.jsx)(y, {
              children: (0, i.jsxs)('div', {
                  className: v.popout,
                  ref: g,
                  children: [
                      (0, i.jsxs)('div', {
                          className: v.content,
                          children: [
                              (0, i.jsx)(T, {
                                  leaderboard: b,
                                  application: A
                              }),
                              (0, i.jsx)(p.Z, {
                                  leaderboard: b,
                                  previewMode: h,
                                  trackRankingItemInteraction: f
                              }),
                              h
                                  ? null
                                  : (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            null != S &&
                                                (0, i.jsx)(_.Z, {
                                                    className: v.previousChampion,
                                                    guildId: n,
                                                    leaderboard: S
                                                }),
                                            (0, i.jsx)(d.Z, {
                                                guildId: n,
                                                leaderboardId: o
                                            })
                                        ]
                                    })
                          ]
                      }),
                      h
                          ? (0, i.jsx)(i.Fragment, {
                                children: (0, i.jsx)(a.P3F, {
                                    onClick: () => m(!1),
                                    children: (0, i.jsx)('div', {
                                        className: v.exitPreviewModeButton,
                                        children: (0, i.jsx)(a.Text, {
                                            variant: 'text-sm/medium',
                                            className: v.exitPreviewModeText,
                                            children: E.intl.string(E.t.GLeQe3)
                                        })
                                    })
                                })
                            })
                          : null
                  ]
              })
          });
};
