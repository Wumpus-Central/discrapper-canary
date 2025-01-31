i.d(t, { Z: () => j }), i(47120);
var n = i(200651),
    s = i(192379),
    l = i(120356),
    a = i.n(l),
    r = i(442837),
    o = i(481060),
    c = i(600164),
    d = i(565138),
    u = i(273387),
    m = i(16853),
    x = i(388032),
    C = i(420049),
    h = i(36705),
    _ = i(216019);
function g(e) {
    let { guild: t, onClick: i } = e;
    return (0, n.jsxs)(o.P3F, {
        className: C.clickableGuildRow,
        onClick: i,
        children: [
            (0, n.jsx)(d.Z, {
                guild: t,
                size: d.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, n.jsx)(o.Text, {
                className: C.guildName,
                variant: 'text-md/semibold',
                children: t.name
            }),
            (0, n.jsx)('img', {
                className: C.__invalid_arrow,
                alt: '',
                src: _
            })
        ]
    });
}
function f(e) {
    let { directoryChannelId: t, guild: i } = e,
        s = (0, r.e7)([u.Z], () => u.Z.getDirectoryEntry(t, i.id));
    return (0, n.jsxs)('div', {
        className: C.guildRow,
        children: [
            (0, n.jsx)(d.Z, {
                guild: i,
                size: d.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, n.jsx)(o.Text, {
                className: C.guildName,
                variant: 'text-md/normal',
                children: i.name
            }),
            (0, n.jsx)(m.Z, {
                entry: s,
                children: (e) =>
                    (0, n.jsx)(o.xhG, {
                        size: 'md',
                        color: 'currentColor',
                        ...e,
                        className: C.overflowIcon
                    })
            })
        ]
    });
}
function j(e) {
    let t,
        { directoryChannelId: i, onClose: l, onGuildChosen: r, handleChooseCreate: d, directoryGuildName: u, availableGuilds: m, addedGuilds: _, loading: j } = e,
        [p, L] = s.useState(0);
    return (
        (t = j
            ? (0, n.jsx)('div', {
                  className: C.emptyContainer,
                  children: (0, n.jsx)(o.$jN, {})
              })
            : 0 === p
              ? 0 === m.length
                  ? (0, n.jsxs)('div', {
                        className: C.emptyContainer,
                        children: [
                            (0, n.jsx)('img', {
                                src: h,
                                alt: '',
                                className: C.emptyImage
                            }),
                            (0, n.jsx)(o.Text, {
                                className: C.emptyText,
                                color: 'header-secondary',
                                variant: 'text-md/normal',
                                children: x.intl.string(x.t.liuEhY)
                            })
                        ]
                    })
                  : m.map((e) =>
                        (0, n.jsx)(
                            g,
                            {
                                guild: e,
                                onClick: () => r(e)
                            },
                            e.id
                        )
                    )
              : 0 === _.length
                ? (0, n.jsxs)('div', {
                      className: C.emptyContainer,
                      children: [
                          (0, n.jsx)('img', {
                              src: h,
                              alt: '',
                              className: C.emptyImage
                          }),
                          (0, n.jsx)(o.Text, {
                              className: C.emptyText,
                              color: 'header-secondary',
                              variant: 'text-md/normal',
                              children: x.intl.string(x.t.WJLuKC)
                          })
                      ]
                  })
                : _.map((e) =>
                      (0, n.jsx)(
                          f,
                          {
                              directoryChannelId: i,
                              guild: e
                          },
                          e.id
                      )
                  )),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(o.xBx, {
                    direction: c.Z.Direction.VERTICAL,
                    className: C.header,
                    separator: !1,
                    children: [
                        null != l &&
                            (0, n.jsx)(o.olH, {
                                className: C.closeButton,
                                onClick: l
                            }),
                        (0, n.jsx)(o.X6q, {
                            className: C.title,
                            variant: 'heading-xl/semibold',
                            children: x.intl.format(x.t['9SKJdH'], { guildName: u })
                        }),
                        (0, n.jsx)(o.Text, {
                            className: C.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: x.intl.string(x.t.pYFZ9v)
                        }),
                        (0, n.jsxs)(o.njP, {
                            className: C.tabBar,
                            selectedItem: p,
                            onItemSelect: L,
                            type: 'top',
                            look: 'brand',
                            children: [
                                (0, n.jsx)(o.njP.Item, {
                                    className: a()(C.tabBarItem, { [C.selectedTab]: 0 === p }),
                                    id: 0,
                                    children: x.intl.string(x.t.FTe8HR)
                                }),
                                (0, n.jsx)(o.njP.Item, {
                                    className: a()(C.tabBarItem, { [C.selectedTab]: 1 === p }),
                                    id: 1,
                                    children: x.intl.string(x.t.epOump)
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(o.hzk, {
                    className: C.guildList,
                    paddingFix: !1,
                    children: t
                }),
                (0, n.jsxs)(o.mzw, {
                    className: C.footer,
                    children: [
                        (0, n.jsx)(o.X6q, {
                            variant: 'heading-lg/semibold',
                            className: C.footerTitle,
                            children: x.intl.string(x.t.pgCZRE)
                        }),
                        (0, n.jsx)(o.zxk, {
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
