t.d(n, { Z: () => N }), t(388685);
var o = t(200651),
    i = t(192379),
    c = t(120356),
    r = t.n(c),
    a = t(481060),
    l = t(37234),
    s = t(410030),
    d = t(81897),
    u = t(906732),
    f = t(566898),
    p = t(769654),
    m = t(785717),
    h = t(806729),
    _ = t(708108),
    b = t(146078),
    g = t(857302),
    y = t(892001),
    x = t(389190),
    j = t(428927),
    I = t(228168),
    v = t(388032),
    A = t(714905);
function N(e) {
    let { user: n, onClose: t } = e,
        { analyticsLocations: c } = (0, u.ZP)(),
        { context: N, trackUserProfileAction: T } = (0, m.KZ)(),
        O = (0, s.ZP)(),
        { mutualFriends: C, mutualFriendsCount: Z, mutualGuilds: P, isFetching: S } = (0, h.Z)(n),
        w = (0, d.Z)(),
        M = i.useMemo(
            () => [
                {
                    section: I.oh.MUTUAL_FRIENDS,
                    text: (0, _.Z)(Z)
                },
                {
                    section: I.oh.MUTUAL_GUILDS,
                    text: (0, b.Z)(null == P ? void 0 : P.length)
                }
            ],
            [Z, null == P ? void 0 : P.length]
        ),
        [{ section: U }, E] = i.useState(M[0]);
    return (
        i.useEffect(() => {
            U === I.oh.MUTUAL_FRIENDS && (0, g.Z)(n.id, w);
        }, [U, n.id, w]),
        (0, o.jsxs)('div', {
            className: A.container,
            children: [
                (0, o.jsx)(a.njP, {
                    className: A.tabBar,
                    selectedItem: U,
                    onItemSelect: (e) => {
                        E((n) => {
                            var t;
                            return null != (t = M.find((n) => n.section === e)) ? t : n;
                        }),
                            T({
                                action: 'PRESS_SECTION',
                                section: e
                            });
                    },
                    children: M.map((e) => {
                        let { section: n, text: t } = e;
                        return (0, o.jsx)(
                            a.njP.Item,
                            {
                                id: n,
                                'aria-label': t,
                                className: A.tabBarItem,
                                children: (0, o.jsx)(a.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'text-primary',
                                    children: t
                                })
                            },
                            n
                        );
                    })
                }),
                (0, o.jsxs)(a.Ttm, {
                    className: A.scroller,
                    fade: !0,
                    children: [
                        U === I.oh.MUTUAL_FRIENDS &&
                            (null == C
                                ? Array.from({ length: null != Z ? Z : 10 }).map((e, n) =>
                                      (0, o.jsxs)(
                                          'div',
                                          {
                                              className: r()(A.loadingItem, A.loadingMutualFriend),
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
                                          n
                                      )
                                  )
                                : 0 === C.length
                                  ? (0, o.jsxs)('div', {
                                        className: A.empty,
                                        children: [
                                            (0, o.jsx)('div', { className: r()(A.emptyImage, A.noMutualFriends) }),
                                            (0, o.jsx)(a.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'header-primary',
                                                children: v.intl.string(v.t['ru+2j4'])
                                            })
                                        ]
                                    })
                                  : C.map((e) => {
                                        let { key: n, user: i, status: r } = e;
                                        return (0, o.jsx)(
                                            x.T,
                                            {
                                                user: i,
                                                status: r,
                                                onSelect: () => {
                                                    var e, n;
                                                    t(),
                                                        T({ action: 'PRESS_MUTUAL_FRIEND' }),
                                                        (0, y.openUserProfileModal)(
                                                            ((e = (function (e) {
                                                                for (var n = 1; n < arguments.length; n++) {
                                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                                        o = Object.keys(t);
                                                                    'function' == typeof Object.getOwnPropertySymbols &&
                                                                        (o = o.concat(
                                                                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                                            })
                                                                        )),
                                                                        o.forEach(function (n) {
                                                                            var o;
                                                                            (o = t[n]),
                                                                                n in e
                                                                                    ? Object.defineProperty(e, n, {
                                                                                          value: o,
                                                                                          enumerable: !0,
                                                                                          configurable: !0,
                                                                                          writable: !0
                                                                                      })
                                                                                    : (e[n] = o);
                                                                        });
                                                                }
                                                                return e;
                                                            })({}, N)),
                                                            (n = n =
                                                                {
                                                                    userId: i.id,
                                                                    sourceAnalyticsLocations: c
                                                                }),
                                                            Object.getOwnPropertyDescriptors
                                                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                                                : (function (e, n) {
                                                                      var t = Object.keys(e);
                                                                      if (Object.getOwnPropertySymbols) {
                                                                          var o = Object.getOwnPropertySymbols(e);
                                                                          t.push.apply(t, o);
                                                                      }
                                                                      return t;
                                                                  })(Object(n)).forEach(function (t) {
                                                                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                                                  }),
                                                            e)
                                                        );
                                                }
                                            },
                                            n
                                        );
                                    })),
                        U === I.oh.MUTUAL_GUILDS &&
                            (null == P && S
                                ? Array.from({ length: 10 }).map((e, n) =>
                                      (0, o.jsxs)(
                                          'div',
                                          {
                                              className: r()(A.loadingItem, A.loadingMutualGuild),
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
                                          n
                                      )
                                  )
                                : (null != P || S) && (null == P ? void 0 : P.length) !== 0
                                  ? null == P
                                      ? void 0
                                      : P.map((e) => {
                                            let { guild: i, nick: c } = e;
                                            return (0, o.jsx)(
                                                j.D,
                                                {
                                                    user: n,
                                                    guild: i,
                                                    nick: c,
                                                    theme: O,
                                                    onSelect: () => {
                                                        T({ action: 'PRESS_MUTUAL_GUILD' }), (0, p.X)(i.id), t(), (0, l.xf)();
                                                    }
                                                },
                                                i.id
                                            );
                                        })
                                  : (0, o.jsxs)('div', {
                                        className: A.empty,
                                        children: [
                                            (0, o.jsx)('div', { className: r()(A.emptyImage, A.noMutualGuilds) }),
                                            (0, o.jsx)(a.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'header-primary',
                                                children: v.intl.string(v.t.x5y3DA)
                                            })
                                        ]
                                    }))
                    ]
                })
            ]
        })
    );
}
