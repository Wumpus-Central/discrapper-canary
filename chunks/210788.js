t.d(n, { Z: () => v }), t(388685);
var o = t(200651),
    r = t(192379),
    c = t(120356),
    a = t.n(c),
    i = t(481060),
    l = t(37234),
    s = t(81897),
    d = t(906732),
    u = t(566898),
    f = t(769654),
    p = t(785717),
    m = t(806729),
    _ = t(708108),
    b = t(146078),
    y = t(857302),
    h = t(892001),
    x = t(252417),
    j = t(821179),
    g = t(228168),
    I = t(388032),
    O = t(714905);
function v(e) {
    let { user: n, guildId: t, channelId: c, onClose: v } = e,
        { analyticsLocations: P } = (0, d.ZP)(),
        { context: N, trackUserProfileAction: C } = (0, p.KZ)(),
        { mutualFriends: Z, mutualFriendsCount: A, mutualGuilds: T, isFetching: w } = (0, m.Z)(n),
        S = (0, s.Z)(),
        M = r.useMemo(
            () => [
                {
                    section: g.oh.MUTUAL_FRIENDS,
                    text: (0, _.Z)(A)
                },
                {
                    section: g.oh.MUTUAL_GUILDS,
                    text: (0, b.Z)(null == T ? void 0 : T.length)
                }
            ],
            [A, null == T ? void 0 : T.length]
        ),
        [{ section: E, text: U }, B] = r.useState(M[0]);
    return (
        r.useEffect(() => {
            E === g.oh.MUTUAL_FRIENDS && (0, y.Z)(n.id, S);
        }, [E, n.id, S]),
        (0, o.jsxs)('div', {
            className: O.container,
            children: [
                (0, o.jsx)(i.njP, {
                    className: O.tabBar,
                    selectedItem: E,
                    onItemSelect: (e) => {
                        B((n) => {
                            var t;
                            return null != (t = M.find((n) => n.section === e)) ? t : n;
                        }),
                            C({
                                action: 'PRESS_SECTION',
                                section: e
                            });
                    },
                    children: M.map((e) =>
                        (0, o.jsx)(
                            i.njP.Item,
                            {
                                id: e.section,
                                'aria-label': e.text,
                                className: O.tabBarItem,
                                children: (0, o.jsx)(i.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'text-primary',
                                    children: e.text
                                })
                            },
                            e.section
                        )
                    )
                }),
                (0, o.jsx)(i.njP.Panel, {
                    id: E,
                    'aria-label': U,
                    className: O.tabBarPanel,
                    children: (0, o.jsxs)(i.Ttm, {
                        className: O.scroller,
                        fade: !0,
                        children: [
                            E === g.oh.MUTUAL_FRIENDS &&
                                (null == Z
                                    ? Array.from({ length: null != A ? A : 10 }).map((e, n) =>
                                          (0, o.jsxs)(
                                              'div',
                                              {
                                                  className: a()(O.loadingItem, O.loadingMutualFriend),
                                                  children: [
                                                      (0, o.jsx)(u.ZT, {
                                                          width: 40,
                                                          opacity: 0.08
                                                      }),
                                                      (0, o.jsx)(u.ZT, {
                                                          width: 135,
                                                          opacity: 0.08
                                                      })
                                                  ]
                                              },
                                              n
                                          )
                                      )
                                    : 0 === Z.length
                                      ? (0, o.jsxs)('div', {
                                            className: O.empty,
                                            children: [
                                                (0, o.jsx)('div', { className: a()(O.emptyImage, O.noMutualFriends) }),
                                                (0, o.jsx)(i.Text, {
                                                    variant: 'text-sm/normal',
                                                    color: 'header-primary',
                                                    children: I.intl.string(I.t['ru+2j4'])
                                                })
                                            ]
                                        })
                                      : Z.map((e) => {
                                            let { key: n, user: r, status: a } = e;
                                            return (0, o.jsx)(
                                                x.Z,
                                                {
                                                    user: r,
                                                    status: a,
                                                    guildId: t,
                                                    channelId: c,
                                                    onSelect: () => {
                                                        var e, n;
                                                        v(),
                                                            C({ action: 'PRESS_MUTUAL_FRIEND' }),
                                                            (0, h.openUserProfileModal)(
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
                                                                        userId: r.id,
                                                                        sourceAnalyticsLocations: P
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
                            E === g.oh.MUTUAL_GUILDS &&
                                (null == T && w
                                    ? Array.from({ length: 10 }).map((e, n) =>
                                          (0, o.jsxs)(
                                              'div',
                                              {
                                                  className: a()(O.loadingItem, O.loadingMutualGuild),
                                                  children: [
                                                      (0, o.jsx)(u.ZT, {
                                                          width: 40,
                                                          opacity: 0.08
                                                      }),
                                                      (0, o.jsx)(u.ZT, {
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
                                                let { guild: t, nick: r } = e;
                                                return (0, o.jsx)(
                                                    j.Z,
                                                    {
                                                        user: n,
                                                        guild: t,
                                                        nick: r,
                                                        onSelect: () => {
                                                            C({ action: 'PRESS_MUTUAL_GUILD' }), (0, f.X)(t.id), v(), (0, l.xf)();
                                                        }
                                                    },
                                                    t.id
                                                );
                                            })
                                      : (0, o.jsxs)('div', {
                                            className: O.empty,
                                            children: [
                                                (0, o.jsx)('div', { className: a()(O.emptyImage, O.noMutualGuilds) }),
                                                (0, o.jsx)(i.Text, {
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
