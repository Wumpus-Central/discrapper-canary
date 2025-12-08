n.d(t, { Z: () => b }), n(388685);
var i = n(54381),
    l = n(473749),
    a = n(120356),
    r = n.n(a),
    s = n(793030),
    o = n(442837),
    c = n(481060),
    d = n(565138),
    u = n(273387),
    m = n(16853),
    x = n(388032),
    g = n(149372),
    C = n(36705),
    f = n(216019);
function j(e) {
    let { guild: t, onClick: n } = e;
    return (0, i.jsxs)(c.P3F, {
        className: g.clickableGuildRow,
        onClick: n,
        children: [
            (0, i.jsx)(d.Z, {
                guild: t,
                size: d.Z.Sizes.MEDIUM,
                active: !0,
            }),
            (0, i.jsx)(c.Text, {
                className: g.guildName,
                variant: "text-md/semibold",
                children: t.name,
            }),
            (0, i.jsx)("img", {
                alt: "",
                src: f,
            }),
        ],
    });
}
function p(e) {
    let { directoryChannelId: t, guild: n } = e,
        a = (0, o.e7)([u.Z], () => u.Z.getDirectoryEntry(t, n.id)),
        r = l.useRef(null);
    return (0, i.jsxs)("div", {
        className: g.guildRow,
        children: [
            (0, i.jsx)(d.Z, {
                guild: n,
                size: d.Z.Sizes.MEDIUM,
                active: !0,
            }),
            (0, i.jsx)(c.Text, {
                className: g.guildName,
                variant: "text-md/normal",
                children: n.name,
            }),
            (0, i.jsx)(m.Z, {
                entry: a,
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
                        (n = n = { className: g.overflowIcon }),
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
            onGuildChosen: a,
            handleChooseCreate: o,
            directoryGuildName: d,
            availableGuilds: u,
            addedGuilds: m,
            loading: f,
        } = e,
        [b, h] = l.useState(0);
    return (
        (t = f
            ? (0, i.jsx)("div", {
                  className: g.emptyContainer,
                  children: (0, i.jsx)(c.$jN, {}),
              })
            : 0 === b
              ? 0 === u.length
                  ? (0, i.jsxs)("div", {
                        className: g.emptyContainer,
                        children: [
                            (0, i.jsx)("img", {
                                src: C,
                                alt: "",
                                className: g.emptyImage,
                            }),
                            (0, i.jsx)(c.Text, {
                                className: g.emptyText,
                                color: "text-default",
                                variant: "text-md/normal",
                                children: x.intl.string(x.t.liuEhd),
                            }),
                        ],
                    })
                  : u.map((e) =>
                        (0, i.jsx)(
                            j,
                            {
                                guild: e,
                                onClick: () => a(e),
                            },
                            e.id,
                        ),
                    )
              : 0 === m.length
                ? (0, i.jsxs)("div", {
                      className: g.emptyContainer,
                      children: [
                          (0, i.jsx)("img", {
                              src: C,
                              alt: "",
                              className: g.emptyImage,
                          }),
                          (0, i.jsx)(c.Text, {
                              className: g.emptyText,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: x.intl.string(x.t.WJLuKK),
                          }),
                      ],
                  })
                : m.map((e) =>
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
                    title: x.intl.formatToPlainString(x.t["9SKJdF"], { guildName: d }),
                    subtitle: x.intl.string(x.t.pYFZ9p),
                }),
                (0, i.jsx)(s.fef, {
                    controls: (0, i.jsxs)(c.njP, {
                        className: g.tabBar,
                        selectedItem: b,
                        onItemSelect: h,
                        type: "top",
                        look: "brand",
                        children: [
                            (0, i.jsx)(c.njP.Item, {
                                className: r()(g.tabBarItem, { [g.selectedTab]: 0 === b }),
                                id: 0,
                                children: x.intl.string(x.t.FTe8HS),
                            }),
                            (0, i.jsx)(c.njP.Item, {
                                className: r()(g.tabBarItem, { [g.selectedTab]: 1 === b }),
                                id: 1,
                                children: x.intl.string(x.t.epOumr),
                            }),
                        ],
                    }),
                    children: (0, i.jsx)(c.Ttm, {
                        className: g.scroller,
                        children: (0, i.jsx)("div", {
                            className: g.guildList,
                            children: t,
                        }),
                    }),
                }),
                (0, i.jsxs)(s.mzw, {
                    children: [
                        (0, i.jsx)(c.Heading, {
                            variant: "heading-lg/semibold",
                            className: g.footerTitle,
                            children: x.intl.string(x.t.pgCZRP),
                        }),
                        (0, i.jsx)(s.Go$, {
                            actionsFullWidth: !0,
                            actions: [
                                {
                                    variant: "secondary",
                                    text: x.intl.string(x.t.WqJbLi),
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
