a.d(e, { Z: () => R }), a(47120);
var c = a(200651),
    d = a(192379),
    s = a(442837),
    n = a(481060),
    f = a(195302),
    i = a(206295),
    o = a(134432),
    p = a(706454),
    r = a(314897),
    l = a(158776),
    b = a(594174),
    u = a(302221),
    m = a(5192),
    g = a(358085),
    j = a(998502),
    h = a(528567),
    y = a(371583),
    _ = a(246627),
    B = a(249268),
    x = a(864138),
    v = a(473188),
    O = a(169080),
    N = a(986398),
    S = a(463031),
    Z = a(206583),
    P = a(388032),
    E = a(667450);
function T(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = null != arguments[e] ? arguments[e] : {},
            c = Object.keys(a);
        'function' == typeof Object.getOwnPropertySymbols &&
            (c = c.concat(
                Object.getOwnPropertySymbols(a).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(a, t).enumerable;
                })
            )),
            c.forEach(function (e) {
                var c;
                (c = a[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: c,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = c);
            });
    }
    return t;
}
function I(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var a = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var c = Object.getOwnPropertySymbols(t);
                      a.push.apply(a, c);
                  }
                  return a;
              })(Object(e)).forEach(function (a) {
                  Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
              }),
        t
    );
}
function R(t) {
    let { leaderboard: e, previewMode: a = !1, trackRankingItemInteraction: f } = t,
        l = (0, s.e7)([r.default], () => r.default.getId()),
        b = (0, s.e7)([p.default], () => p.default.locale),
        { rankChanges: m } = (0, _.Z)({
            guildId: e.guild_id,
            leaderboardId: e.leaderboard_id,
            intervalStart: e.interval_start
        }),
        g = d.useMemo(() => {
            let t = new Map();
            m.forEach((e) => {
                let { userId: a, previousRank: c } = e;
                t.set(a, c);
            });
            let { sort_by_statistic_id: a } = e.guild_settings;
            return e.users.map((e, c) => {
                var d, s;
                return {
                    userId: e.user_id,
                    value: null != (s = null == (d = e.statistics[a]) ? void 0 : d.value) ? s : 0,
                    rank: c + 1,
                    previousRank: t.get(e.user_id)
                };
            });
        }, [e, m]),
        j = (0, y.r)(e),
        { primaryColor: x } = (0, i.Z)(j),
        v = d.useMemo(() => {
            let t = (0, u.oo)(x),
                e = I(T({}, (0, u.pz)(t.r, t.g, t.b)), { l: 15 });
            return (0, u.ZJ)(e.h, e.s, e.l);
        }, [x]),
        N = d.useMemo(() => null == g.find((t) => t.userId === l) && g.length <= 10, [g, l]);
    if (
        (d.useEffect(() => {
            O.M.forEach((t) => (0, o.po)(t));
        }),
        0 === e.users.length)
    )
        return (0, c.jsx)(w, { leaderboard: e });
    let { sort_by_statistic_id: S, sort_desc: Z } = e.guild_settings,
        R = e.settings.statistics[S];
    return (0, c.jsxs)('div', {
        className: E.container,
        style: { background: v },
        children: [
            (0, c.jsx)(B.Z, {
                userId: g[0].userId,
                leaderboard: e
            }),
            a
                ? null
                : (0, c.jsxs)('div', {
                      className: E.table,
                      children: [
                          (0, c.jsxs)('div', {
                              className: E.headerRow,
                              children: [
                                  (0, c.jsx)(n.Text, {
                                      variant: 'text-xxs/medium',
                                      className: E.headerRank,
                                      children: '#'
                                  }),
                                  (0, c.jsx)(n.Text, {
                                      variant: 'text-xxs/medium',
                                      className: E.headerPlayer,
                                      children: P.NW.string(P.t['6ii1+/'])
                                  }),
                                  (0, c.jsx)(n.Text, {
                                      variant: 'text-xxs/medium',
                                      className: E.headerValue,
                                      children: (0, h.s)({
                                          statisticId: S,
                                          sortDesc: Z,
                                          aggregationType: null == R ? void 0 : R.aggregation_type
                                      })
                                  })
                              ]
                          }),
                          (0, c.jsxs)(n.u2D, {
                              className: E.rows,
                              children: [
                                  g.map((t) =>
                                      (0, d.createElement)(
                                          D,
                                          I(T({}, t), {
                                              key: t.userId,
                                              guildId: e.guild_id,
                                              locale: b,
                                              leaderboard: e,
                                              trackRankingItemInteraction: f
                                          })
                                      )
                                  ),
                                  N ? (0, c.jsx)(k, { leaderboard: e }) : null
                              ]
                          })
                      ]
                  })
        ]
    });
}
function w(t) {
    let { leaderboard: e } = t,
        a = (0, y.r)(e);
    return (0, c.jsx)(x.z, {
        imageUrl: a,
        children: (0, c.jsxs)('span', {
            className: E.emptyTitleContainer,
            children: [
                (0, c.jsx)(n.Text, {
                    tag: 'span',
                    variant: 'text-lg/normal',
                    className: E.emptyTitle,
                    children: P.NW.string(P.t.BfRGk5)
                }),
                (0, c.jsx)(N.Z, {
                    className: E.emptyWinnerImage,
                    leaderboard: e
                })
            ]
        })
    });
}
function D(t) {
    let { userId: e, rank: a, value: i, guildId: o, previousRank: p, locale: r, leaderboard: u, trackRankingItemInteraction: h } = t,
        y = (0, s.e7)([b.default], () => b.default.getUser(e)),
        _ = m.ZP.getName(o, void 0, y),
        B = null != p && p > a,
        [x, R] = d.useState('default'),
        w = (0, s.e7)([l.Z], () => {
            let t = l.Z.getPrimaryActivity(e);
            return (null == t ? void 0 : t.application_id) != null && S.T.includes(t.application_id);
        }),
        { generatingImage: D, generateImage: k } = (0, f.d)({
            renderComponent: (t) =>
                (0, c.jsx)(
                    O.Z,
                    I(T({}, t), {
                        userId: e,
                        leaderboard: u,
                        guildId: o
                    })
                ),
            imageOptions: { pixelRatio: 4 }
        }),
        A = async () => {
            try {
                let t = await k();
                await j.ZP.copyImageBlob(t, 'leaderboard.png'), R('copied'), null == h || h(Z.xP.COPIED_LEADERBOARD_ROW);
            } catch (t) {
                R('error');
            }
        },
        C = (0, c.jsx)(n.Text, {
            className: E.tooltip,
            variant: 'text-sm/medium',
            children:
                'copied' === x
                    ? (0, c.jsxs)(c.Fragment, {
                          children: [
                              (0, c.jsx)(n.kSu, {
                                  size: 'xs',
                                  color: n.TVs.colors.STATUS_POSITIVE
                              }),
                              P.NW.string(P.t.ZO0ku7)
                          ]
                      })
                    : 'error' === x
                      ? (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsx)(n.P$X, {
                                    size: 'xs',
                                    color: n.TVs.colors.STATUS_DANGER
                                }),
                                P.NW.string(P.t.j2d6Ki)
                            ]
                        })
                      : (0, c.jsx)(c.Fragment, { children: P.NW.string(P.t.mikfoa) })
        });
    return (0, c.jsxs)('div', {
        className: E.userRow,
        children: [
            B ? (0, c.jsx)('div', { className: E.rankChangeIndicator }) : null,
            (0, c.jsx)('div', {
                className: E.userRank,
                children:
                    a <= 3
                        ? (0, c.jsx)(v._, { rank: a })
                        : (0, c.jsx)(n.Text, {
                              tabularNumbers: !0,
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: a
                          })
            }),
            (0, c.jsxs)('div', {
                className: E.userPlayer,
                children: [
                    (0, c.jsx)(n.qEK, {
                        src: null == y ? void 0 : y.getAvatarURL(o, 16),
                        size: n.EFr.SIZE_16,
                        'aria-label': 'avatar'
                    }),
                    (0, c.jsx)(n.LZC, {
                        size: 6,
                        horizontal: !0
                    }),
                    (0, c.jsx)(n.X6q, {
                        lineClamp: 1,
                        variant: 'heading-sm/medium',
                        color: 'header-primary',
                        children: _
                    }),
                    1 === a
                        ? (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsx)(n.LZC, {
                                      size: 4,
                                      horizontal: !0
                                  }),
                                  (0, c.jsx)(N.Z, {
                                      className: E.userWinnerImage,
                                      leaderboard: u
                                  })
                              ]
                          })
                        : null,
                    B ? (0, c.jsx)(L, { rankChange: p - a }) : null
                ]
            }),
            (0, c.jsxs)('div', {
                className: E.badgesContainer,
                children: [
                    w &&
                        (0, c.jsx)(n.iWm, {
                            size: 'xs',
                            color: n.TVs.colors.TEXT_POSITIVE,
                            className: E.liveIcon
                        }),
                    g.isPlatformEmbedded &&
                        (0, c.jsx)(n.ua7, {
                            text: C,
                            'aria-label': !1,
                            shouldShow: !D,
                            onTooltipHide: () => R('default'),
                            children: (t) =>
                                (0, c.jsx)(
                                    n.P3F,
                                    I(T({}, t), {
                                        onClick: D ? void 0 : A,
                                        'aria-busy': D,
                                        className: E.copyLinkContainer,
                                        children: D
                                            ? (0, c.jsx)(n.$jN, {
                                                  type: n.$jN.Type.SPINNING_CIRCLE_SIMPLE,
                                                  className: E.copySpinner
                                              })
                                            : (0, c.jsx)(n.xPt, {
                                                  size: 'xs',
                                                  className: E.copyLink
                                              })
                                    })
                                )
                        })
                ]
            }),
            (0, c.jsx)(n.X6q, {
                variant: 'heading-sm/medium',
                color: 'header-primary',
                tabularNumbers: !0,
                children: i.toLocaleString(r)
            })
        ]
    });
}
function k(t) {
    let { leaderboard: e } = t;
    return (0, c.jsxs)('div', {
        className: E.joinLeaderboardCTAContainer,
        children: [
            (0, c.jsx)(n.Text, {
                variant: 'text-xs/normal',
                children: P.NW.string(P.t.BfRGk5)
            }),
            (0, c.jsx)(N.Z, {
                className: E.joinLeaderboardCTAWinnerImage,
                leaderboard: e
            })
        ]
    });
}
function L(t) {
    let { rankChange: e } = t;
    return (0, c.jsxs)('div', {
        className: E.rankChangeBadge,
        children: [
            (0, c.jsx)(n.wj7, {
                size: 'xxs',
                color: n.TVs.colors.TEXT_MUTED
            }),
            (0, c.jsx)(n.Text, {
                variant: 'text-xs/medium',
                color: 'text-muted',
                children: e
            })
        ]
    });
}
