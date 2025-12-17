n.d(t, { Z: () => b }), n(388685);
var i = n(54381),
    a = n(473749),
    l = n(120356),
    r = n.n(l),
    s = n(793030),
    o = n(442837),
    c = n(481060),
    d = n(565138),
    u = n(273387),
    f = n(16853),
    m = n(388032),
    x = n(969525),
    g = n(36705),
    C = n(216019);
function j(e) {
    let { guild: t, onClick: n } = e;
    return (0, i.jsxs)(c.P3F, {
        className: x.clickableGuildRow,
        onClick: n,
        children: [
            (0, i.jsx)(d.Z, {
                guild: t,
                size: d.Z.Sizes.MEDIUM,
                active: !0,
            }),
            (0, i.jsx)(c.Text, {
                className: x.guildName,
                variant: "text-md/semibold",
                children: t.name,
            }),
            (0, i.jsx)("img", {
                alt: "",
                src: C,
            }),
        ],
    });
}
function p(e) {
    let { directoryChannelId: t, guild: n } = e,
        l = (0, o.e7)([u.Z], () => u.Z.getDirectoryEntry(t, n.id)),
        r = a.useRef(null);
    return (0, i.jsxs)("div", {
        className: x.guildRow,
        children: [
            (0, i.jsx)(d.Z, {
                guild: n,
                size: d.Z.Sizes.MEDIUM,
                active: !0,
            }),
            (0, i.jsx)(c.Text, {
                className: x.guildName,
                variant: "text-md/normal",
                children: n.name,
            }),
            (0, i.jsx)(f.Z, {
                entry: l,
                targetElementRef: r,
                children: (e) => {
                    var t, n;
                    return (0, i.jsx)(
                        c.xhG,
                        ((t = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })(
                            {
                                ref: r,
                                size: "md",
                                color: "currentColor",
                            },
                            e,
                        )),
                        (n = n = { className: x.overflowIcon }),
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
                        t),
                    );
                },
            }),
        ],
    });
}
function b(e) {
    let t,
        {
            directoryChannelId: n,
            onGuildChosen: l,
            handleChooseCreate: o,
            directoryGuildName: d,
            availableGuilds: u,
            addedGuilds: f,
            loading: C,
        } = e,
        [b, h] = a.useState(0);
    return (
        (t = C
            ? (0, i.jsx)("div", {
                  className: x.emptyContainer,
                  children: (0, i.jsx)(c.$jN, {}),
              })
            : 0 === b
              ? 0 === u.length
                  ? (0, i.jsxs)("div", {
                        className: x.emptyContainer,
                        children: [
                            (0, i.jsx)("img", {
                                src: g,
                                alt: "",
                                className: x.emptyImage,
                            }),
                            (0, i.jsx)(c.Text, {
                                className: x.emptyText,
                                color: "text-default",
                                variant: "text-md/normal",
                                children: m.intl.string(m.t.liuEhd),
                            }),
                        ],
                    })
                  : u.map((e) =>
                        (0, i.jsx)(
                            j,
                            {
                                guild: e,
                                onClick: () => l(e),
                            },
                            e.id,
                        ),
                    )
              : 0 === f.length
                ? (0, i.jsxs)("div", {
                      className: x.emptyContainer,
                      children: [
                          (0, i.jsx)("img", {
                              src: g,
                              alt: "",
                              className: x.emptyImage,
                          }),
                          (0, i.jsx)(c.Text, {
                              className: x.emptyText,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: m.intl.string(m.t.WJLuKK),
                          }),
                      ],
                  })
                : f.map((e) =>
                      (0, i.jsx)(
                          p,
                          {
                              directoryChannelId: n,
                              guild: e,
                          },
                          e.id,
                      ),
                  )),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.xBx, {
                    title: m.intl.formatToPlainString(m.t["9SKJdF"], { guildName: d }),
                    subtitle: m.intl.string(m.t.pYFZ9p),
                }),
                (0, i.jsx)(s.fef, {
                    controls: (0, i.jsxs)(c.njP, {
                        className: x.tabBar,
                        selectedItem: b,
                        onItemSelect: h,
                        type: "top",
                        look: "brand",
                        children: [
                            (0, i.jsx)(c.njP.Item, {
                                className: r()(x.tabBarItem, { [x.selectedTab]: 0 === b }),
                                id: 0,
                                children: m.intl.string(m.t.FTe8HS),
                            }),
                            (0, i.jsx)(c.njP.Item, {
                                className: r()(x.tabBarItem, { [x.selectedTab]: 1 === b }),
                                id: 1,
                                children: m.intl.string(m.t.epOumr),
                            }),
                        ],
                    }),
                    children: (0, i.jsx)(c.Ttm, {
                        className: x.scroller,
                        children: (0, i.jsx)("div", {
                            className: x.guildList,
                            children: t,
                        }),
                    }),
                }),
                (0, i.jsxs)(s.mzw, {
                    children: [
                        (0, i.jsx)(c.Heading, {
                            variant: "heading-lg/semibold",
                            className: x.footerTitle,
                            children: m.intl.string(m.t.pgCZRP),
                        }),
                        (0, i.jsx)(s.Go$, {
                            actionsFullWidth: !0,
                            actions: [
                                {
                                    variant: "secondary",
                                    text: m.intl.string(m.t.WqJbLi),
                                    onClick: o,
                                },
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
