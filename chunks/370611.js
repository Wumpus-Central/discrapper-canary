r.d(n, {
    Z: function () {
        return M;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(442837),
    l = r(481060),
    u = r(195302),
    c = r(206295),
    d = r(134432),
    f = r(706454),
    p = r(314897),
    h = r(158776),
    _ = r(594174),
    m = r(302221),
    g = r(5192),
    E = r(358085),
    v = r(998502),
    y = r(528567),
    b = r(371583),
    I = r(246627),
    T = r(249268),
    S = r(864138),
    A = r(473188),
    C = r(169080),
    N = r(986398),
    R = r(463031),
    O = r(206583),
    D = r(388032),
    x = r(508806);
let L = 10,
    w = 15,
    P = 'leaderboard.png';
function M(e) {
    let { leaderboard: n, previewMode: r = !1, trackRankingItemInteraction: i } = e,
        u = (0, s.e7)([p.default], () => p.default.getId()),
        h = (0, s.e7)([f.default], () => f.default.locale),
        { rankChanges: _ } = (0, I.Z)({
            guildId: n.guild_id,
            leaderboardId: n.leaderboard_id,
            intervalStart: n.interval_start
        }),
        g = o.useMemo(() => {
            let e = new Map();
            _.forEach((n) => {
                let { userId: r, previousRank: i } = n;
                e.set(r, i);
            });
            let { sort_by_statistic_id: r } = n.guild_settings;
            return n.users.map((n, i) => {
                var a, o;
                return {
                    userId: n.user_id,
                    value: null !== (o = null === (a = n.statistics[r]) || void 0 === a ? void 0 : a.value) && void 0 !== o ? o : 0,
                    rank: i + 1,
                    previousRank: e.get(n.user_id)
                };
            });
        }, [n, _]),
        E = (0, b.r)(n),
        { primaryColor: v } = (0, c.Z)(E),
        S = o.useMemo(() => {
            let e = (0, m.oo)(v),
                n = {
                    ...(0, m.pz)(e.r, e.g, e.b),
                    l: w
                };
            return (0, m.ZJ)(n.h, n.s, n.l);
        }, [v]),
        A = o.useMemo(() => null == g.find((e) => e.userId === u) && g.length <= L, [g, u]);
    if (
        (o.useEffect(() => {
            C.M.forEach((e) => (0, d.po)(e));
        }),
        0 === n.users.length)
    )
        return (0, a.jsx)(k, { leaderboard: n });
    let { sort_by_statistic_id: N, sort_desc: R } = n.guild_settings,
        O = n.settings.statistics[N];
    return (0, a.jsxs)('div', {
        className: x.container,
        style: { background: S },
        children: [
            (0, a.jsx)(T.Z, {
                userId: g[0].userId,
                leaderboard: n
            }),
            r
                ? null
                : (0, a.jsx)(a.Fragment, {
                      children: (0, a.jsxs)('div', {
                          className: x.table,
                          children: [
                              (0, a.jsxs)('div', {
                                  className: x.headerRow,
                                  children: [
                                      (0, a.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: x.headerRank,
                                          children: '#'
                                      }),
                                      (0, a.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: x.headerPlayer,
                                          children: D.intl.string(D.t['6ii1+/'])
                                      }),
                                      (0, a.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: x.headerValue,
                                          children: (0, y.s)({
                                              statisticId: N,
                                              sortDesc: R,
                                              aggregationType: null == O ? void 0 : O.aggregation_type
                                          })
                                      })
                                  ]
                              }),
                              (0, a.jsxs)(l.ScrollerNone, {
                                  className: x.rows,
                                  children: [
                                      g.map((e) =>
                                          (0, o.createElement)(U, {
                                              ...e,
                                              key: e.userId,
                                              guildId: n.guild_id,
                                              locale: h,
                                              leaderboard: n,
                                              trackRankingItemInteraction: i
                                          })
                                      ),
                                      A ? (0, a.jsx)(B, { leaderboard: n }) : null
                                  ]
                              })
                          ]
                      })
                  })
        ]
    });
}
function k(e) {
    let { leaderboard: n } = e,
        r = (0, b.r)(n);
    return (0, a.jsx)(S.z, {
        imageUrl: r,
        children: (0, a.jsxs)('span', {
            className: x.emptyTitleContainer,
            children: [
                (0, a.jsx)(l.Text, {
                    tag: 'span',
                    variant: 'text-lg/normal',
                    className: x.emptyTitle,
                    children: D.intl.string(D.t.BfRGk5)
                }),
                (0, a.jsx)(N.Z, {
                    className: x.emptyWinnerImage,
                    leaderboard: n
                })
            ]
        })
    });
}
function U(e) {
    let { userId: n, rank: r, value: i, guildId: c, previousRank: d, locale: f, leaderboard: p, trackRankingItemInteraction: m } = e,
        y = (0, s.e7)([_.default], () => _.default.getUser(n)),
        b = g.ZP.getName(c, void 0, y),
        I = null != d && d > r,
        [T, S] = o.useState('default'),
        L = (0, s.e7)([h.Z], () => {
            let e = h.Z.getPrimaryActivity(n);
            return (null == e ? void 0 : e.application_id) != null && R.T.includes(e.application_id);
        }),
        { generatingImage: w, generateImage: M } = (0, u.d)({
            renderComponent: (e) =>
                (0, a.jsx)(C.Z, {
                    ...e,
                    userId: n,
                    leaderboard: p,
                    guildId: c
                }),
            imageOptions: { pixelRatio: 4 }
        }),
        k = async () => {
            try {
                let e = await M();
                await v.ZP.copyImageBlob(e, P), S('copied'), null == m || m(O.xP.COPIED_LEADERBOARD_ROW);
            } catch (e) {
                S('error');
            }
        },
        U = (0, a.jsx)(l.Text, {
            className: x.tooltip,
            variant: 'text-sm/medium',
            children:
                'copied' === T
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(l.CheckmarkSmallBoldIcon, {
                                  size: 'xs',
                                  color: l.tokens.colors.STATUS_POSITIVE
                              }),
                              D.intl.string(D.t.ZO0ku7)
                          ]
                      })
                    : 'error' === T
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(l.XSmallBoldIcon, {
                                    size: 'xs',
                                    color: l.tokens.colors.STATUS_DANGER
                                }),
                                D.intl.string(D.t.j2d6Ki)
                            ]
                        })
                      : (0, a.jsx)(a.Fragment, { children: D.intl.string(D.t.mikfoa) })
        });
    return (0, a.jsxs)('div', {
        className: x.userRow,
        children: [
            I ? (0, a.jsx)('div', { className: x.rankChangeIndicator }) : null,
            (0, a.jsx)('div', {
                className: x.userRank,
                children:
                    r <= 3
                        ? (0, a.jsx)(A._, { rank: r })
                        : (0, a.jsx)(l.Text, {
                              tabularNumbers: !0,
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: r
                          })
            }),
            (0, a.jsxs)('div', {
                className: x.userPlayer,
                children: [
                    (0, a.jsx)(l.Avatar, {
                        src: null == y ? void 0 : y.getAvatarURL(c, 16),
                        size: l.AvatarSizes.SIZE_16,
                        'aria-label': 'avatar'
                    }),
                    (0, a.jsx)(l.Spacer, {
                        size: 6,
                        horizontal: !0
                    }),
                    (0, a.jsx)(l.Heading, {
                        lineClamp: 1,
                        variant: 'heading-sm/medium',
                        color: 'header-primary',
                        children: b
                    }),
                    1 === r
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(l.Spacer, {
                                      size: 4,
                                      horizontal: !0
                                  }),
                                  (0, a.jsx)(N.Z, {
                                      className: x.userWinnerImage,
                                      leaderboard: p
                                  })
                              ]
                          })
                        : null,
                    I ? (0, a.jsx)(G, { rankChange: d - r }) : null
                ]
            }),
            (0, a.jsxs)('div', {
                className: x.badgesContainer,
                children: [
                    L &&
                        (0, a.jsx)(l.GameControllerIcon, {
                            size: 'xs',
                            color: l.tokens.colors.TEXT_POSITIVE,
                            className: x.liveIcon
                        }),
                    E.isPlatformEmbedded &&
                        (0, a.jsx)(l.Tooltip, {
                            text: U,
                            'aria-label': !1,
                            shouldShow: !w,
                            onTooltipHide: () => S('default'),
                            children: (e) =>
                                (0, a.jsx)(l.Clickable, {
                                    ...e,
                                    onClick: w ? void 0 : k,
                                    'aria-busy': w,
                                    className: x.copyLinkContainer,
                                    children: w
                                        ? (0, a.jsx)(l.Spinner, {
                                              type: l.Spinner.Type.SPINNING_CIRCLE_SIMPLE,
                                              className: x.copySpinner
                                          })
                                        : (0, a.jsx)(l.LinkIcon, {
                                              size: 'xs',
                                              className: x.copyLink
                                          })
                                })
                        })
                ]
            }),
            (0, a.jsx)(l.Heading, {
                variant: 'heading-sm/medium',
                color: 'header-primary',
                tabularNumbers: !0,
                children: i.toLocaleString(f)
            })
        ]
    });
}
function B(e) {
    let { leaderboard: n } = e;
    return (0, a.jsxs)('div', {
        className: x.joinLeaderboardCTAContainer,
        children: [
            (0, a.jsx)(l.Text, {
                variant: 'text-xs/normal',
                children: D.intl.string(D.t.BfRGk5)
            }),
            (0, a.jsx)(N.Z, {
                className: x.joinLeaderboardCTAWinnerImage,
                leaderboard: n
            })
        ]
    });
}
function G(e) {
    let { rankChange: n } = e;
    return (0, a.jsxs)('div', {
        className: x.rankChangeBadge,
        children: [
            (0, a.jsx)(l.ArrowSmallUpIcon, {
                size: 'xxs',
                color: l.tokens.colors.TEXT_MUTED
            }),
            (0, a.jsx)(l.Text, {
                variant: 'text-xs/medium',
                color: 'text-muted',
                children: n
            })
        ]
    });
}
