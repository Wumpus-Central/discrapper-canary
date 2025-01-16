n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var i,
    l,
    s = n(200651),
    a = n(192379),
    o = n(120356),
    r = n.n(o),
    c = n(442837),
    d = n(481060),
    u = n(600164),
    m = n(565138),
    C = n(273387),
    x = n(16853),
    f = n(388032),
    h = n(420049),
    g = n(36705),
    L = n(216019);
function p(e) {
    let { guild: t, onClick: n } = e;
    return (0, s.jsxs)(d.Clickable, {
        className: h.clickableGuildRow,
        onClick: n,
        children: [
            (0, s.jsx)(m.Z, {
                guild: t,
                size: m.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, s.jsx)(d.Text, {
                className: h.guildName,
                variant: 'text-md/semibold',
                children: t.name
            }),
            (0, s.jsx)('img', {
                className: h.__invalid_arrow,
                alt: '',
                src: L
            })
        ]
    });
}
function b(e) {
    let { directoryChannelId: t, guild: n } = e,
        i = (0, c.e7)([C.Z], () => C.Z.getDirectoryEntry(t, n.id));
    return (0, s.jsxs)('div', {
        className: h.guildRow,
        children: [
            (0, s.jsx)(m.Z, {
                guild: n,
                size: m.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, s.jsx)(d.Text, {
                className: h.guildName,
                variant: 'text-md/normal',
                children: n.name
            }),
            (0, s.jsx)(x.Z, {
                entry: i,
                children: (e) =>
                    (0, s.jsx)(d.MoreHorizontalIcon, {
                        size: 'md',
                        color: 'currentColor',
                        ...e,
                        className: h.overflowIcon
                    })
            })
        ]
    });
}
function j(e) {
    let t,
        { directoryChannelId: n, onClose: i, onGuildChosen: l, handleChooseCreate: o, directoryGuildName: c, availableGuilds: m, addedGuilds: C, loading: x } = e,
        [L, j] = a.useState(0);
    return (
        (t = x
            ? (0, s.jsx)('div', {
                  className: h.emptyContainer,
                  children: (0, s.jsx)(d.Spinner, {})
              })
            : 0 === L
              ? 0 === m.length
                  ? (0, s.jsxs)('div', {
                        className: h.emptyContainer,
                        children: [
                            (0, s.jsx)('img', {
                                src: g,
                                alt: '',
                                className: h.emptyImage
                            }),
                            (0, s.jsx)(d.Text, {
                                className: h.emptyText,
                                color: 'header-secondary',
                                variant: 'text-md/normal',
                                children: f.intl.string(f.t.liuEhY)
                            })
                        ]
                    })
                  : m.map((e) =>
                        (0, s.jsx)(
                            p,
                            {
                                guild: e,
                                onClick: () => l(e)
                            },
                            e.id
                        )
                    )
              : 0 === C.length
                ? (0, s.jsxs)('div', {
                      className: h.emptyContainer,
                      children: [
                          (0, s.jsx)('img', {
                              src: g,
                              alt: '',
                              className: h.emptyImage
                          }),
                          (0, s.jsx)(d.Text, {
                              className: h.emptyText,
                              color: 'header-secondary',
                              variant: 'text-md/normal',
                              children: f.intl.string(f.t.WJLuKC)
                          })
                      ]
                  })
                : C.map((e) =>
                      (0, s.jsx)(
                          b,
                          {
                              directoryChannelId: n,
                              guild: e
                          },
                          e.id
                      )
                  )),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(d.ModalHeader, {
                    direction: u.Z.Direction.VERTICAL,
                    className: h.header,
                    separator: !1,
                    children: [
                        null != i &&
                            (0, s.jsx)(d.ModalCloseButton, {
                                className: h.closeButton,
                                onClick: i
                            }),
                        (0, s.jsx)(d.Heading, {
                            className: h.title,
                            variant: 'heading-xl/semibold',
                            children: f.intl.format(f.t['9SKJdH'], { guildName: c })
                        }),
                        (0, s.jsx)(d.Text, {
                            className: h.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: f.intl.string(f.t.pYFZ9v)
                        }),
                        (0, s.jsxs)(d.TabBar, {
                            className: h.tabBar,
                            selectedItem: L,
                            onItemSelect: j,
                            type: 'top',
                            look: 'brand',
                            children: [
                                (0, s.jsx)(d.TabBar.Item, {
                                    className: r()(h.tabBarItem, { [h.selectedTab]: 0 === L }),
                                    id: 0,
                                    children: f.intl.string(f.t.FTe8HR)
                                }),
                                (0, s.jsx)(d.TabBar.Item, {
                                    className: r()(h.tabBarItem, { [h.selectedTab]: 1 === L }),
                                    id: 1,
                                    children: f.intl.string(f.t.epOump)
                                })
                            ]
                        })
                    ]
                }),
                (0, s.jsx)(d.ModalContent, {
                    className: h.guildList,
                    paddingFix: !1,
                    children: t
                }),
                (0, s.jsxs)(d.ModalFooter, {
                    className: h.footer,
                    children: [
                        (0, s.jsx)(d.Heading, {
                            variant: 'heading-lg/semibold',
                            className: h.footerTitle,
                            children: f.intl.string(f.t.pgCZRE)
                        }),
                        (0, s.jsx)(d.Button, {
                            className: h.footerButton,
                            color: d.Button.Colors.PRIMARY,
                            onClick: o,
                            children: f.intl.string(f.t.WqJbLi)
                        })
                    ]
                })
            ]
        })
    );
}
((l = i || (i = {}))[(l.AVAILABLE = 0)] = 'AVAILABLE'), (l[(l.ADDED = 1)] = 'ADDED');
