n.d(t, { Z: () => _ }), n(388685);
var i = n(255367),
    s = n(73800),
    l = n(120356),
    r = n.n(l),
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
    return (0, i.jsxs)(o.P3F, {
        className: C.clickableGuildRow,
        onClick: n,
        children: [
            (0, i.jsx)(d.Z, {
                guild: t,
                size: d.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, i.jsx)(o.Text, {
                className: C.guildName,
                variant: 'text-md/semibold',
                children: t.name
            }),
            (0, i.jsx)('img', {
                className: C.__invalid_arrow,
                alt: '',
                src: g
            })
        ]
    });
}
function f(e) {
    let { directoryChannelId: t, guild: n } = e,
        s = (0, a.e7)([u.Z], () => u.Z.getDirectoryEntry(t, n.id));
    return (0, i.jsxs)('div', {
        className: C.guildRow,
        children: [
            (0, i.jsx)(d.Z, {
                guild: n,
                size: d.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, i.jsx)(o.Text, {
                className: C.guildName,
                variant: 'text-md/normal',
                children: n.name
            }),
            (0, i.jsx)(m.Z, {
                entry: s,
                children: (e) => {
                    var t, n;
                    return (0, i.jsx)(
                        o.xhG,
                        ((t = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = i);
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
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
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
        { directoryChannelId: n, onClose: l, onGuildChosen: a, handleChooseCreate: d, directoryGuildName: u, availableGuilds: m, addedGuilds: g, loading: _ } = e,
        [j, b] = s.useState(0);
    return (
        (t = _
            ? (0, i.jsx)('div', {
                  className: C.emptyContainer,
                  children: (0, i.jsx)(o.$jN, {})
              })
            : 0 === j
              ? 0 === m.length
                  ? (0, i.jsxs)('div', {
                        className: C.emptyContainer,
                        children: [
                            (0, i.jsx)('img', {
                                src: h,
                                alt: '',
                                className: C.emptyImage
                            }),
                            (0, i.jsx)(o.Text, {
                                className: C.emptyText,
                                color: 'header-secondary',
                                variant: 'text-md/normal',
                                children: x.intl.string(x.t.liuEhY)
                            })
                        ]
                    })
                  : m.map((e) =>
                        (0, i.jsx)(
                            p,
                            {
                                guild: e,
                                onClick: () => a(e)
                            },
                            e.id
                        )
                    )
              : 0 === g.length
                ? (0, i.jsxs)('div', {
                      className: C.emptyContainer,
                      children: [
                          (0, i.jsx)('img', {
                              src: h,
                              alt: '',
                              className: C.emptyImage
                          }),
                          (0, i.jsx)(o.Text, {
                              className: C.emptyText,
                              color: 'header-secondary',
                              variant: 'text-md/normal',
                              children: x.intl.string(x.t.WJLuKC)
                          })
                      ]
                  })
                : g.map((e) =>
                      (0, i.jsx)(
                          f,
                          {
                              directoryChannelId: n,
                              guild: e
                          },
                          e.id
                      )
                  )),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(o.xBx, {
                    direction: c.Z.Direction.VERTICAL,
                    className: C.header,
                    separator: !1,
                    children: [
                        null != l &&
                            (0, i.jsx)(o.olH, {
                                className: C.closeButton,
                                onClick: l
                            }),
                        (0, i.jsx)(o.X6q, {
                            className: C.title,
                            variant: 'heading-xl/semibold',
                            children: x.intl.format(x.t['9SKJdH'], { guildName: u })
                        }),
                        (0, i.jsx)(o.Text, {
                            className: C.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: x.intl.string(x.t.pYFZ9v)
                        }),
                        (0, i.jsxs)(o.njP, {
                            className: C.tabBar,
                            selectedItem: j,
                            onItemSelect: b,
                            type: 'top',
                            look: 'brand',
                            children: [
                                (0, i.jsx)(o.njP.Item, {
                                    className: r()(C.tabBarItem, { [C.selectedTab]: 0 === j }),
                                    id: 0,
                                    children: x.intl.string(x.t.FTe8HR)
                                }),
                                (0, i.jsx)(o.njP.Item, {
                                    className: r()(C.tabBarItem, { [C.selectedTab]: 1 === j }),
                                    id: 1,
                                    children: x.intl.string(x.t.epOump)
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(o.hzk, {
                    className: C.guildList,
                    paddingFix: !1,
                    children: t
                }),
                (0, i.jsxs)(o.mzw, {
                    className: C.footer,
                    children: [
                        (0, i.jsx)(o.X6q, {
                            variant: 'heading-lg/semibold',
                            className: C.footerTitle,
                            children: x.intl.string(x.t.pgCZRE)
                        }),
                        (0, i.jsx)(o.zxk, {
                            className: C.footerButton,
                            color: o.zxk.Colors.PRIMARY,
                            onClick: d,
                            children: x.intl.string(x.t.WqJbLi)
                        })
                    ]
                })
            ]
        })
    );
}
