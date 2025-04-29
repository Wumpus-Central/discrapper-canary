t.d(n, { Z: () => C }), t(388685);
var o = t(200651),
    r = t(192379),
    i = t(120356),
    c = t.n(i),
    a = t(481060),
    l = t(37234),
    s = t(410030),
    d = t(81897),
    u = t(906732),
    f = t(566898),
    p = t(769654),
    m = t(785717),
    b = t(806729),
    _ = t(708108),
    y = t(146078),
    h = t(857302),
    g = t(892001),
    x = t(389190),
    j = t(428927),
    I = t(228168),
    v = t(388032),
    O = t(714905);
function C(e) {
    let { user: n, onClose: t } = e,
        { analyticsLocations: i } = (0, u.ZP)(),
        { context: C, trackUserProfileAction: N } = (0, m.KZ)(),
        P = (0, s.ZP)(),
        { mutualFriends: A, mutualFriendsCount: Z, mutualGuilds: T, isFetching: w } = (0, b.Z)(n),
        S = (0, d.Z)(),
        M = r.useMemo(
            () => [
                {
                    section: I.oh.MUTUAL_FRIENDS,
                    text: (0, _.Z)(Z)
                },
                {
                    section: I.oh.MUTUAL_GUILDS,
                    text: (0, y.Z)(null == T ? void 0 : T.length)
                }
            ],
            [Z, null == T ? void 0 : T.length]
        ),
        [{ section: E, text: U }, B] = r.useState(M[0]);
    return (
        r.useEffect(() => {
            E === I.oh.MUTUAL_FRIENDS && (0, h.Z)(n.id, S);
        }, [E, n.id, S]),
        (0, o.jsxs)('div', {
            className: O.container,
            children: [
                (0, o.jsx)(a.njP, {
                    className: O.tabBar,
                    selectedItem: E,
                    onItemSelect: (e) => {
                        B((n) => {
                            var t;
                            return null != (t = M.find((n) => n.section === e)) ? t : n;
                        }),
                            N({
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
                                (null == A
                                    ? Array.from({ length: null != Z ? Z : 10 }).map((e, n) =>
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
                                              n
                                          )
                                      )
                                    : 0 === A.length
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
                                      : A.map((e) => {
                                            let { key: n, user: r, status: c } = e;
                                            return (0, o.jsx)(
                                                x.T,
                                                {
                                                    user: r,
                                                    status: c,
                                                    onSelect: () => {
                                                        var e, n;
                                                        t(),
                                                            N({ action: 'PRESS_MUTUAL_FRIEND' }),
                                                            (0, g.openUserProfileModal)(
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
                                                                })({}, C)),
                                                                (n = n =
                                                                    {
                                                                        userId: r.id,
                                                                        sourceAnalyticsLocations: i
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
                            E === I.oh.MUTUAL_GUILDS &&
                                (null == T && w
                                    ? Array.from({ length: 10 }).map((e, n) =>
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
                                              n
                                          )
                                      )
                                    : (null != T || w) && (null == T ? void 0 : T.length) !== 0
                                      ? null == T
                                          ? void 0
                                          : T.map((e) => {
                                                let { guild: r, nick: i } = e;
                                                return (0, o.jsx)(
                                                    j.D,
                                                    {
                                                        user: n,
                                                        guild: r,
                                                        nick: i,
                                                        theme: P,
                                                        onSelect: () => {
                                                            N({ action: 'PRESS_MUTUAL_GUILD' }), (0, p.X)(r.id), t(), (0, l.xf)();
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
