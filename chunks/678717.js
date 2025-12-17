n.r(t),
    n.d(t, {
        default: () => P,
        openDevToolsPopout: () => T,
    }),
    n(388685);
var a = n(54381),
    r = n(473749),
    l = n(120356),
    i = n.n(l),
    s = n(990547),
    o = n(442837),
    c = n(481060),
    d = n(347469),
    u = n(213609),
    m = n(665149),
    p = n(238246),
    h = n(788983),
    f = n(259580),
    x = n(31336),
    b = n(19759),
    g = n(246992),
    v = n(682475),
    j = n(621060),
    y = n(981631),
    C = n(388032),
    _ = n(718728),
    S = n(663618);
function E(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r } = e,
        l = (0, d.Z)({
            minDimension: b.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: d.y.HORIZONTAL_LEFT,
        });
    return (0, a.jsx)("div", {
        onMouseDown: l,
        className: _.resizeHandle,
    });
}
function T() {
    (0, h.open)(
        y.KJ3.DEVTOOLS_POPOUT,
        () =>
            (0, a.jsx)(p.Z, {
                windowKey: y.KJ3.DEVTOOLS_POPOUT,
                title: "DevTools",
                withTitleBar: !0,
                children: (0, a.jsx)(P, {
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
            selectedTabId: o,
        } = (0, j.ZP)(
            {
                tabs: r,
                initialSelectedTabId: null != (t = b.Z.lastOpenTabId) ? t : void 0,
                onChangeTab: (e) => {
                    (0, x.Qh)({ lastOpenTabId: e });
                },
            },
            [r],
        );
    return (
        (0, u.Z)({
            type: s.ImpressionTypes.PANE,
            name: s.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: o },
        }),
        (0, a.jsxs)(g.Gk, {
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
                                      tooltip: C.intl.string(C.t.cpT0Cq),
                                      onClick: x.SO,
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
                (0, a.jsx)(g.Br, { className: _.layerContainer }),
            ],
        })
    );
}
function N() {
    let e = r.useRef(null),
        t = (0, o.e7)([b.Z], () => b.Z.sidebarWidth),
        [n, l] = r.useState(null),
        i = r.useCallback((e) => (0, x.Qh)({ sidebarWidth: e }), []);
    return (r.useEffect(() => {
        null === n && null !== t && l(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, a.jsxs)("div", {
              ref: e,
              className: _.container,
              style: {
                  minWidth: b.h,
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
                      className: _.sidebarContent,
                      children: (0, a.jsx)(O, {}),
                  }),
              ],
          });
}
function w() {
    return (0, o.e7)([b.Z], () => b.Z.displayTools)
        ? (0, a.jsx)("div", {
              className: i()(_.container, _.mobileContainerExpanded),
              children: (0, a.jsx)("div", {
                  className: _.sidebarContent,
                  children: (0, a.jsx)(O, {}),
              }),
          })
        : (0, a.jsx)("div", {
              className: _.container,
              children: (0, a.jsx)(c.P3F, {
                  onClick: x.SO,
                  children: (0, a.jsxs)(m.ZP, {
                      className: i()(S.headerBar, _.mobileHeaderCollapsed),
                      toolbar: (0, a.jsx)(f.Z, { direction: f.Z.Directions.UP }),
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
function P(e) {
    let { mobile: t, isPopout: n = !1 } = e;
    return t
        ? (0, a.jsx)(w, {})
        : n
          ? (0, a.jsx)("div", {
                className: _.popoutContainer,
                children: (0, a.jsx)(O, { isPopout: !0 }),
            })
          : (0, a.jsx)(N, {});
}
