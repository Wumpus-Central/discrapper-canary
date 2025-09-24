n.d(t, { Z: () => L }), n(388685);
var i = n(951288),
    l = n(647438),
    s = n(120356),
    r = n.n(s),
    a = n(442837),
    o = n(369585),
    c = n(103866),
    d = n(213734),
    u = n(37148),
    m = n(481060),
    x = n(565138),
    C = n(273387),
    g = n(16853),
    p = n(388032),
    f = n(149372),
    j = n(36705),
    h = n(216019);
function _(e) {
    let { guild: t, onClick: n } = e;
    return (0, i.jsxs)(m.P3F, {
        className: f.clickableGuildRow,
        onClick: n,
        children: [
            (0, i.jsx)(x.Z, {
                guild: t,
                size: x.Z.Sizes.MEDIUM,
                active: !0,
            }),
            (0, i.jsx)(m.Text, {
                className: f.guildName,
                variant: "text-md/semibold",
                children: t.name,
            }),
            (0, i.jsx)("img", {
                alt: "",
                src: h,
            }),
        ],
    });
}
function b(e) {
    let { directoryChannelId: t, guild: n } = e,
        s = (0, a.e7)([C.Z], () => C.Z.getDirectoryEntry(t, n.id)),
        r = l.useRef(null);
    return (0, i.jsxs)("div", {
        className: f.guildRow,
        children: [
            (0, i.jsx)(x.Z, {
                guild: n,
                size: x.Z.Sizes.MEDIUM,
                active: !0,
            }),
            (0, i.jsx)(m.Text, {
                className: f.guildName,
                variant: "text-md/normal",
                children: n.name,
            }),
            (0, i.jsx)(g.Z, {
                entry: s,
                targetElementRef: r,
                children: (e) => {
                    var t, n;
                    return (0, i.jsx)(
                        m.xhG,
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
                        (n = n = { className: f.overflowIcon }),
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
function L(e) {
    let t,
        {
            directoryChannelId: n,
            onGuildChosen: s,
            handleChooseCreate: a,
            directoryGuildName: x,
            availableGuilds: C,
            addedGuilds: g,
            loading: h,
        } = e,
        [L, I] = l.useState(0);
    return (
        (t = h
            ? (0, i.jsx)("div", {
                  className: f.emptyContainer,
                  children: (0, i.jsx)(m.$jN, {}),
              })
            : 0 === L
              ? 0 === C.length
                  ? (0, i.jsxs)("div", {
                        className: f.emptyContainer,
                        children: [
                            (0, i.jsx)("img", {
                                src: j,
                                alt: "",
                                className: f.emptyImage,
                            }),
                            (0, i.jsx)(m.Text, {
                                className: f.emptyText,
                                color: "header-secondary",
                                variant: "text-md/normal",
                                children: p.intl.string(p.t.liuEhY),
                            }),
                        ],
                    })
                  : C.map((e) =>
                        (0, i.jsx)(
                            _,
                            {
                                guild: e,
                                onClick: () => s(e),
                            },
                            e.id,
                        ),
                    )
              : 0 === g.length
                ? (0, i.jsxs)("div", {
                      className: f.emptyContainer,
                      children: [
                          (0, i.jsx)("img", {
                              src: j,
                              alt: "",
                              className: f.emptyImage,
                          }),
                          (0, i.jsx)(m.Text, {
                              className: f.emptyText,
                              color: "header-secondary",
                              variant: "text-md/normal",
                              children: p.intl.string(p.t.WJLuKC),
                          }),
                      ],
                  })
                : g.map((e) =>
                      (0, i.jsx)(
                          b,
                          {
                              directoryChannelId: n,
                              guild: e,
                          },
                          e.id,
                      ),
                  )),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.x, {
                    title: p.intl.formatToPlainString(p.t["9SKJdH"], { guildName: x }),
                    subtitle: p.intl.string(p.t.pYFZ9v),
                }),
                (0, i.jsx)(c.f, {
                    controls: (0, i.jsxs)(m.njP, {
                        className: f.tabBar,
                        selectedItem: L,
                        onItemSelect: I,
                        type: "top",
                        look: "brand",
                        children: [
                            (0, i.jsx)(m.njP.Item, {
                                className: r()(f.tabBarItem, { [f.selectedTab]: 0 === L }),
                                id: 0,
                                children: p.intl.string(p.t.FTe8HR),
                            }),
                            (0, i.jsx)(m.njP.Item, {
                                className: r()(f.tabBarItem, { [f.selectedTab]: 1 === L }),
                                id: 1,
                                children: p.intl.string(p.t.epOump),
                            }),
                        ],
                    }),
                    children: (0, i.jsx)(m.Ttm, {
                        className: f.scroller,
                        children: (0, i.jsx)("div", {
                            className: f.guildList,
                            children: t,
                        }),
                    }),
                }),
                (0, i.jsxs)(d.m, {
                    children: [
                        (0, i.jsx)(m.X6q, {
                            variant: "heading-lg/semibold",
                            className: f.footerTitle,
                            children: p.intl.string(p.t.pgCZRE),
                        }),
                        (0, i.jsx)(o.G, {
                            actionsFullWidth: !0,
                            actions: [
                                {
                                    variant: "secondary",
                                    text: p.intl.string(p.t.WqJbLi),
                                    onClick: a,
                                },
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
