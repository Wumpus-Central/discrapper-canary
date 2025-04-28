n.d(t, { Z: () => N }), n(388685);
var o = n(200651),
    r = n(192379),
    i = n(120356),
    c = n.n(i),
    a = n(481060),
    l = n(37234),
    s = n(410030),
    d = n(81897),
    u = n(906732),
    f = n(566898),
    p = n(769654),
    m = n(785717),
    b = n(806729),
    h = n(708108),
    y = n(146078),
    g = n(857302),
    j = n(892001),
    _ = n(389190),
    x = n(428927),
    I = n(228168),
    v = n(388032),
    O = n(714905);
function N(e) {
    let { user: t, onClose: n } = e,
        { analyticsLocations: i } = (0, u.ZP)(),
        { context: N, trackUserProfileAction: P } = (0, m.KZ)(),
        A = (0, s.ZP)(),
        { mutualFriends: C, mutualFriendsCount: Z, mutualGuilds: T, isFetching: S } = (0, b.Z)(t),
        w = (0, d.Z)(),
        M = r.useMemo(
            () => [
                {
                    section: I.oh.MUTUAL_FRIENDS,
                    text: (0, h.Z)(Z)
                },
                {
                    section: I.oh.MUTUAL_GUILDS,
                    text: (0, y.Z)(null == T ? void 0 : T.length)
                }
            ],
            [Z, null == T ? void 0 : T.length]
        ),
        [{ section: E, text: U }, V] = r.useState(M[0]);
    return (
        r.useEffect(() => {
            E === I.oh.MUTUAL_FRIENDS && (0, g.Z)(t.id, w);
        }, [E, t.id, w]),
        (0, o.jsxs)('div', {
            className: O.container,
            children: [
                (0, o.jsx)(a.njP, {
                    className: O.tabBar,
                    selectedItem: E,
                    onItemSelect: (e) => {
                        V((t) => {
                            var n;
                            return null != (n = M.find((t) => t.section === e)) ? n : t;
                        }),
                            P({
                                action: 'PRESS_SECTION',
                                section: e
                            });
                    },
                    children: M.map((e) =>
                        (0, o.jsx)(
                            a.njP.Item,
                            {
                                id: e.section,
                                'aria-label': e.text,
                                className: O.tabBarItem,
                                children: (0, o.jsx)(a.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'text-primary',
                                    children: e.text
                                })
                            },
                            e.section
                        )
                    )
                }),
                (0, o.jsx)(a.njP.Panel, {
                    id: E,
                    'aria-label': U,
                    className: O.tabBarPanel,
                    children: (0, o.jsxs)(a.Ttm, {
                        className: O.scroller,
                        fade: !0,
                        children: [
                            E === I.oh.MUTUAL_FRIENDS &&
                                (null == C
                                    ? Array.from({ length: null != Z ? Z : 10 }).map((e, t) =>
                                          (0, o.jsxs)(
                                              'div',
                                              {
                                                  className: c()(O.loadingItem, O.loadingMutualFriend),
                                                  children: [
                                                      (0, o.jsx)(f.ZT, {
                                                          width: 40,
                                                          opacity: 0.08
                                                      }),
                                                      (0, o.jsx)(f.ZT, {
                                                          width: 135,
                                                          opacity: 0.08
                                                      })
                                                  ]
                                              },
                                              t
                                          )
                                      )
                                    : 0 === C.length
                                      ? (0, o.jsxs)('div', {
                                            className: O.empty,
                                            children: [
                                                (0, o.jsx)('div', { className: c()(O.emptyImage, O.noMutualFriends) }),
                                                (0, o.jsx)(a.Text, {
                                                    variant: 'text-sm/normal',
                                                    color: 'header-primary',
                                                    children: v.intl.string(v.t['ru+2j4'])
                                                })
                                            ]
                                        })
                                      : C.map((e) => {
                                            let { key: t, user: r, status: c } = e;
                                            return (0, o.jsx)(
                                                _.T,
                                                {
                                                    user: r,
                                                    status: c,
                                                    onSelect: () => {
                                                        var e, t;
                                                        n(),
                                                            P({ action: 'PRESS_MUTUAL_FRIEND' }),
                                                            (0, j.openUserProfileModal)(
                                                                ((e = (function (e) {
                                                                    for (var t = 1; t < arguments.length; t++) {
                                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                                            o = Object.keys(n);
                                                                        'function' == typeof Object.getOwnPropertySymbols &&
                                                                            (o = o.concat(
                                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                                })
                                                                            )),
                                                                            o.forEach(function (t) {
                                                                                var o;
                                                                                (o = n[t]),
                                                                                    t in e
                                                                                        ? Object.defineProperty(e, t, {
                                                                                              value: o,
                                                                                              enumerable: !0,
                                                                                              configurable: !0,
                                                                                              writable: !0
                                                                                          })
                                                                                        : (e[t] = o);
                                                                            });
                                                                    }
                                                                    return e;
                                                                })({}, N)),
                                                                (t = t =
                                                                    {
                                                                        userId: r.id,
                                                                        sourceAnalyticsLocations: i
                                                                    }),
                                                                Object.getOwnPropertyDescriptors
                                                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                                                    : (function (e, t) {
                                                                          var n = Object.keys(e);
                                                                          if (Object.getOwnPropertySymbols) {
                                                                              var o = Object.getOwnPropertySymbols(e);
                                                                              n.push.apply(n, o);
                                                                          }
                                                                          return n;
                                                                      })(Object(t)).forEach(function (n) {
                                                                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                                                      }),
                                                                e)
                                                            );
                                                    }
                                                },
                                                t
                                            );
                                        })),
                            E === I.oh.MUTUAL_GUILDS &&
                                (null == T && S
                                    ? Array.from({ length: 10 }).map((e, t) =>
                                          (0, o.jsxs)(
                                              'div',
                                              {
                                                  className: c()(O.loadingItem, O.loadingMutualGuild),
                                                  children: [
                                                      (0, o.jsx)(f.ZT, {
                                                          width: 40,
                                                          opacity: 0.08
                                                      }),
                                                      (0, o.jsx)(f.ZT, {
                                                          width: 135,
                                                          opacity: 0.08
                                                      })
                                                  ]
                                              },
                                              t
                                          )
                                      )
                                    : (null != T || S) && (null == T ? void 0 : T.length) !== 0
                                      ? null == T
                                          ? void 0
                                          : T.map((e) => {
                                                let { guild: r, nick: i } = e;
                                                return (0, o.jsx)(
                                                    x.D,
                                                    {
                                                        user: t,
                                                        guild: r,
                                                        nick: i,
                                                        theme: A,
                                                        onSelect: () => {
                                                            P({ action: 'PRESS_MUTUAL_GUILD' }), (0, p.X)(r.id), n(), (0, l.xf)();
                                                        }
                                                    },
                                                    r.id
                                                );
                                            })
                                      : (0, o.jsxs)('div', {
                                            className: O.empty,
                                            children: [
                                                (0, o.jsx)('div', { className: c()(O.emptyImage, O.noMutualGuilds) }),
                                                (0, o.jsx)(a.Text, {
                                                    variant: 'text-sm/normal',
                                                    color: 'header-primary',
                                                    children: v.intl.string(v.t.x5y3DA)
                                                })
                                            ]
                                        }))
                        ]
                    })
                })
            ]
        })
    );
}
