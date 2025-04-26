n.d(t, { Z: () => A }), n(388685);
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
    _ = n(146078),
    y = n(857302),
    g = n(892001),
    j = n(389190),
    x = n(428927),
    v = n(228168),
    I = n(388032),
    O = n(714905);
function A(e) {
    let { user: t, onClose: n } = e,
        { analyticsLocations: i } = (0, u.ZP)(),
        { context: A, trackUserProfileAction: N } = (0, m.KZ)(),
        P = (0, s.ZP)(),
        { mutualFriends: T, mutualFriendsCount: C, mutualGuilds: S, isFetching: Z } = (0, b.Z)(t),
        w = (0, d.Z)(),
        M = r.useMemo(
            () => [
                {
                    section: v.oh.MUTUAL_FRIENDS,
                    text: (0, h.Z)(C)
                },
                {
                    section: v.oh.MUTUAL_GUILDS,
                    text: (0, _.Z)(null == S ? void 0 : S.length)
                }
            ],
            [C, null == S ? void 0 : S.length]
        ),
        [{ section: U, text: E }, V] = r.useState(M[0]);
    return (
        r.useEffect(() => {
            U === v.oh.MUTUAL_FRIENDS && (0, y.Z)(t.id, w);
        }, [U, t.id, w]),
        (0, o.jsxs)('div', {
            className: O.container,
            children: [
                (0, o.jsx)(a.njP, {
                    className: O.tabBar,
                    selectedItem: U,
                    onItemSelect: (e) => {
                        V((t) => {
                            var n;
                            return null != (n = M.find((t) => t.section === e)) ? n : t;
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
                    id: U,
                    'aria-label': E,
                    className: O.tabBarPanel,
                    children: (0, o.jsxs)(a.Ttm, {
                        className: O.scroller,
                        fade: !0,
                        children: [
                            U === v.oh.MUTUAL_FRIENDS &&
                                (null == T
                                    ? Array.from({ length: null != C ? C : 10 }).map((e, t) =>
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
                                    : 0 === T.length
                                      ? (0, o.jsxs)('div', {
                                            className: O.empty,
                                            children: [
                                                (0, o.jsx)('div', { className: c()(O.emptyImage, O.noMutualFriends) }),
                                                (0, o.jsx)(a.Text, {
                                                    variant: 'text-sm/normal',
                                                    color: 'header-primary',
                                                    children: I.intl.string(I.t['ru+2j4'])
                                                })
                                            ]
                                        })
                                      : T.map((e) => {
                                            let { key: t, user: r, status: c } = e;
                                            return (0, o.jsx)(
                                                j.T,
                                                {
                                                    user: r,
                                                    status: c,
                                                    onSelect: () => {
                                                        var e, t;
                                                        n(),
                                                            N({ action: 'PRESS_MUTUAL_FRIEND' }),
                                                            (0, g.openUserProfileModal)(
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
                                                                })({}, A)),
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
                            U === v.oh.MUTUAL_GUILDS &&
                                (null == S && Z
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
                                    : (null != S || Z) && (null == S ? void 0 : S.length) !== 0
                                      ? null == S
                                          ? void 0
                                          : S.map((e) => {
                                                let { guild: r, nick: i } = e;
                                                return (0, o.jsx)(
                                                    x.D,
                                                    {
                                                        user: t,
                                                        guild: r,
                                                        nick: i,
                                                        theme: P,
                                                        onSelect: () => {
                                                            N({ action: 'PRESS_MUTUAL_GUILD' }), (0, p.X)(r.id), n(), (0, l.xf)();
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
                                                    children: I.intl.string(I.t.x5y3DA)
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
