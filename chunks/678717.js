n.r(t),
    n.d(t, {
        default: () => I,
        openDevToolsPopout: () => T,
    }),
    n(388685);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    o = n(990547),
    s = n(442837),
    c = n(481060),
    d = n(347469),
    u = n(213609),
    m = n(665149),
    p = n(238246),
    h = n(788983),
    x = n(259580),
    g = n(31336),
    f = n(19759),
    b = n(246992),
    v = n(682475),
    j = n(621060),
    _ = n(981631),
    y = n(388032),
    C = n(552883),
    S = n(451429);
function E(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r } = e,
        l = (0, d.Z)({
            minDimension: f.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: d.y.HORIZONTAL_LEFT,
        });
    return (0, a.jsx)("div", {
        onMouseDown: l,
        className: C.resizeHandle,
    });
}
function T() {
    (0, h.bA)(
        _.KJ3.DEVTOOLS_POPOUT,
        () =>
            (0, a.jsx)(p.Z, {
                windowKey: _.KJ3.DEVTOOLS_POPOUT,
                title: "DevTools",
                withTitleBar: !0,
                children: (0, a.jsx)(I, {
                    mobile: !1,
                    isPopout: !0,
                }),
            }),
        {
            width: 800,
            height: 600,
        },
    );
}
function O(e) {
    var t;
    let { isPopout: n = !1 } = e,
        r = (0, v.F)(),
        {
            TabBar: l,
            renderSelectedTab: i,
            selectedTabId: s,
        } = (0, j.ZP)(
            {
                tabs: r,
                initialSelectedTabId: null != (t = f.Z.lastOpenTabId) ? t : void 0,
                onChangeTab: (e) => {
                    (0, g.Qh)({ lastOpenTabId: e });
                },
            },
            [r],
        );
    return (
        (0, u.Z)({
            type: o.ImpressionTypes.PANE,
            name: o.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: s },
        }),
        (0, a.jsxs)(b.Gk, {
            children: [
                (0, a.jsxs)(m.ZP, {
                    className: S.headerBar,
                    toolbar: n
                        ? null
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(m.ZP.Icon, {
                                      icon: c.rgF,
                                      tooltip: "Pop Out",
                                      onClick: T,
                                  }),
                                  (0, a.jsx)(m.ZP.Icon, {
                                      icon: c.Dio,
                                      tooltip: y.intl.string(y.t.cpT0Cq),
                                      onClick: g.SO,
                                  }),
                              ],
                          }),
                    children: [
                        (0, a.jsx)(m.ZP.Icon, {
                            icon: c.Ymb,
                            tooltip: "DevTools",
                        }),
                        (0, a.jsx)(m.ZP.Title, { children: "DevTools" }),
                    ],
                }),
                (0, a.jsx)(l, {}),
                i(),
                (0, a.jsx)(b.Br, { className: C.layerContainer }),
            ],
        })
    );
}
function N() {
    let e = r.useRef(null),
        t = (0, s.e7)([f.Z], () => f.Z.sidebarWidth),
        [n, l] = r.useState(null),
        i = r.useCallback((e) => (0, g.Qh)({ sidebarWidth: e }), []);
    return (r.useEffect(() => {
        null === n && null !== t && l(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, a.jsxs)("div", {
              ref: e,
              className: C.container,
              style: {
                  minWidth: f.h,
                  width: n,
              },
              "data-app-right-panel": !0,
              children: [
                  (0, a.jsx)(E, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: i,
                  }),
                  (0, a.jsx)("div", {
                      className: C.sidebarContent,
                      children: (0, a.jsx)(O, {}),
                  }),
              ],
          });
}
function P() {
    return (0, s.e7)([f.Z], () => f.Z.displayTools)
        ? (0, a.jsx)("div", {
              className: i()(C.container, C.mobileContainerExpanded),
              children: (0, a.jsx)("div", {
                  className: C.sidebarContent,
                  children: (0, a.jsx)(O, {}),
              }),
          })
        : (0, a.jsx)("div", {
              className: C.container,
              children: (0, a.jsx)(c.P3F, {
                  onClick: g.SO,
                  children: (0, a.jsxs)(m.ZP, {
                      className: i()(S.headerBar, C.mobileHeaderCollapsed),
                      toolbar: (0, a.jsx)(x.Z, { direction: x.Z.Directions.UP }),
                      children: [
                          (0, a.jsx)(m.ZP.Icon, {
                              icon: c.Ymb,
                              tooltip: "DevTools",
                          }),
                          (0, a.jsx)(m.ZP.Title, { children: "DevTools" }),
                      ],
                  }),
              }),
          });
}
function I(e) {
    let { mobile: t, isPopout: n = !1 } = e;
    return t
        ? (0, a.jsx)(P, {})
        : n
          ? (0, a.jsx)("div", {
                className: C.popoutContainer,
                children: (0, a.jsx)(O, { isPopout: !0 }),
            })
          : (0, a.jsx)(N, {});
}
