n.d(t, { Z: () => _ }), n(47120);
var s = n(200651),
    i = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(600164),
    d = n(565138),
    u = n(273387),
    m = n(16853),
    x = n(388032),
    C = n(275017),
    h = n(36705),
    g = n(216019);
function p(e) {
    let { guild: t, onClick: n } = e;
    return (0, s.jsxs)(o.P3F, {
        className: C.clickableGuildRow,
        onClick: n,
        children: [
            (0, s.jsx)(d.Z, {
                guild: t,
                size: d.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, s.jsx)(o.Text, {
                className: C.guildName,
                variant: 'text-md/semibold',
                children: t.name
            }),
            (0, s.jsx)('img', {
                className: C.__invalid_arrow,
                alt: '',
                src: g
            })
        ]
    });
}
function f(e) {
    let { directoryChannelId: t, guild: n } = e,
        i = (0, a.e7)([u.Z], () => u.Z.getDirectoryEntry(t, n.id));
    return (0, s.jsxs)('div', {
        className: C.guildRow,
        children: [
            (0, s.jsx)(d.Z, {
                guild: n,
                size: d.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, s.jsx)(o.Text, {
                className: C.guildName,
                variant: 'text-md/normal',
                children: n.name
            }),
            (0, s.jsx)(m.Z, {
                entry: i,
                children: (e) => {
                    var t, n;
                    return (0, s.jsx)(
                        o.xhG,
                        ((t = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    s = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (s = s.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    s.forEach(function (t) {
                                        var s;
                                        (s = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: s,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = s);
                                    });
                            }
                            return e;
                        })(
                            {
                                size: 'md',
                                color: 'currentColor'
                            },
                            e
                        )),
                        (n = n = { className: C.overflowIcon }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var s = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, s);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t)
                    );
                }
            })
        ]
    });
}
function _(e) {
    let t,
        { directoryChannelId: n, onClose: r, onGuildChosen: a, handleChooseCreate: d, directoryGuildName: u, availableGuilds: m, addedGuilds: g, loading: _ } = e,
        [j, N] = i.useState(0);
    return (
        (t = _
            ? (0, s.jsx)('div', {
                  className: C.emptyContainer,
                  children: (0, s.jsx)(o.$jN, {})
              })
            : 0 === j
              ? 0 === m.length
                  ? (0, s.jsxs)('div', {
                        className: C.emptyContainer,
                        children: [
                            (0, s.jsx)('img', {
                                src: h,
                                alt: '',
                                className: C.emptyImage
                            }),
                            (0, s.jsx)(o.Text, {
                                className: C.emptyText,
                                color: 'header-secondary',
                                variant: 'text-md/normal',
                                children: x.NW.string(x.t.liuEhY)
                            })
                        ]
                    })
                  : m.map((e) =>
                        (0, s.jsx)(
                            p,
                            {
                                guild: e,
                                onClick: () => a(e)
                            },
                            e.id
                        )
                    )
              : 0 === g.length
                ? (0, s.jsxs)('div', {
                      className: C.emptyContainer,
                      children: [
                          (0, s.jsx)('img', {
                              src: h,
                              alt: '',
                              className: C.emptyImage
                          }),
                          (0, s.jsx)(o.Text, {
                              className: C.emptyText,
                              color: 'header-secondary',
                              variant: 'text-md/normal',
                              children: x.NW.string(x.t.WJLuKC)
                          })
                      ]
                  })
                : g.map((e) =>
                      (0, s.jsx)(
                          f,
                          {
                              directoryChannelId: n,
                              guild: e
                          },
                          e.id
                      )
                  )),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(o.xBx, {
                    direction: c.Z.Direction.VERTICAL,
                    className: C.header,
                    separator: !1,
                    children: [
                        null != r &&
                            (0, s.jsx)(o.olH, {
                                className: C.closeButton,
                                onClick: r
                            }),
                        (0, s.jsx)(o.X6q, {
                            className: C.title,
                            variant: 'heading-xl/semibold',
                            children: x.NW.format(x.t['9SKJdH'], { guildName: u })
                        }),
                        (0, s.jsx)(o.Text, {
                            className: C.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: x.NW.string(x.t.pYFZ9v)
                        }),
                        (0, s.jsxs)(o.njP, {
                            className: C.tabBar,
                            selectedItem: j,
                            onItemSelect: N,
                            type: 'top',
                            look: 'brand',
                            children: [
                                (0, s.jsx)(o.njP.Item, {
                                    className: l()(C.tabBarItem, { [C.selectedTab]: 0 === j }),
                                    id: 0,
                                    children: x.NW.string(x.t.FTe8HR)
                                }),
                                (0, s.jsx)(o.njP.Item, {
                                    className: l()(C.tabBarItem, { [C.selectedTab]: 1 === j }),
                                    id: 1,
                                    children: x.NW.string(x.t.epOump)
                                })
                            ]
                        })
                    ]
                }),
                (0, s.jsx)(o.hzk, {
                    className: C.guildList,
                    paddingFix: !1,
                    children: t
                }),
                (0, s.jsxs)(o.mzw, {
                    className: C.footer,
                    children: [
                        (0, s.jsx)(o.X6q, {
                            variant: 'heading-lg/semibold',
                            className: C.footerTitle,
                            children: x.NW.string(x.t.pgCZRE)
                        }),
                        (0, s.jsx)(o.zxk, {
                            className: C.footerButton,
                            color: o.zxk.Colors.PRIMARY,
                            onClick: d,
                            children: x.NW.string(x.t.WqJbLi)
                        })
                    ]
                })
            ]
        })
    );
}
