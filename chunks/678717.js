n.r(t),
    n.d(t, {
        default: () => w,
        openDevToolsPopout: () => O,
    }),
    n(388685);
var a = n(54381),
    l = n(473749),
    r = n(120356),
    i = n.n(r),
    s = n(990547),
    o = n(442837),
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
    let { resizableNode: t, onResize: n, onResizeEnd: l } = e,
        r = (0, d.Z)({
            minDimension: f.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: l,
            orientation: d.y.HORIZONTAL_LEFT,
        });
    return (0, a.jsx)("div", {
        onMouseDown: r,
        className: C.resizeHandle,
    });
}
function O() {
    (0, h.bA)(
        _.KJ3.DEVTOOLS_POPOUT,
        () =>
            (0, a.jsx)(p.Z, {
                windowKey: _.KJ3.DEVTOOLS_POPOUT,
                title: "DevTools",
                withTitleBar: !0,
                children: (0, a.jsx)(w, {
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
function T(e) {
    var t;
    let { isPopout: n = !1 } = e,
        l = (0, v.F)(),
        {
            TabBar: r,
            renderSelectedTab: i,
            selectedTabId: o,
        } = (0, j.ZP)(
            {
                tabs: l,
                initialSelectedTabId: null != (t = f.Z.lastOpenTabId) ? t : void 0,
                onChangeTab: (e) => {
                    (0, g.Qh)({ lastOpenTabId: e });
                },
            },
            [l],
        );
    return (
        (0, u.Z)({
            type: s.ImpressionTypes.PANE,
            name: s.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: o },
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
                                      onClick: O,
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
                (0, a.jsx)(r, {}),
                i(),
                (0, a.jsx)(b.Br, { className: C.layerContainer }),
            ],
        })
    );
}
function N() {
    let e = l.useRef(null),
        t = (0, o.e7)([f.Z], () => f.Z.sidebarWidth),
        [n, r] = l.useState(null),
        i = l.useCallback((e) => (0, g.Qh)({ sidebarWidth: e }), []);
    return (l.useEffect(() => {
        null === n && null !== t && r(t);
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
                      onResize: r,
                      onResizeEnd: i,
                  }),
                  (0, a.jsx)("div", {
                      className: C.sidebarContent,
                      children: (0, a.jsx)(T, {}),
                  }),
              ],
          });
}
function P() {
    return (0, o.e7)([f.Z], () => f.Z.displayTools)
        ? (0, a.jsx)("div", {
              className: i()(C.container, C.mobileContainerExpanded),
              children: (0, a.jsx)("div", {
                  className: C.sidebarContent,
                  children: (0, a.jsx)(T, {}),
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
function w(e) {
    let { mobile: t, isPopout: n = !1 } = e;
    return t
        ? (0, a.jsx)(P, {})
        : n
          ? (0, a.jsx)("div", {
                className: C.popoutContainer,
                children: (0, a.jsx)(T, { isPopout: !0 }),
            })
          : (0, a.jsx)(N, {});
}
