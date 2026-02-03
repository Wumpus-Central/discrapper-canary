n.d(t, {
    Ay: () => _,
    Fq: () => b,
    Py: () => E,
    gJ: () => O,
    ic: () => S,
});
var i,
    s,
    r = n(627968),
    l = n(64700),
    o = n(503698),
    a = n.n(o),
    d = n(92674),
    u = n(359459),
    c = n(607399),
    h = n(73939),
    p = n(397927),
    g = n(475743),
    f = n(723702),
    C = n(684136),
    y = n(63135);

function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let b = {
        HEADER: "HEADER",
        DIVIDER: "DIVIDER",
        CUSTOM: "CUSTOM",
    },
    m = l.createContext(null);
class S extends (s = l.PureComponent) {
    renderContent() {
        var e, t;
        let n = this.props,
            { scrollerRef: i } = n,
            s = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    s,
                    r = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (s = 0, n = Reflect.ownKeys(e); s < n.length; s++)
                        (i = n[s]),
                            !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
                    return r;
                }
                if (
                    ((r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            s = {},
                            r = Object.getOwnPropertyNames(e);
                        for (i = 0; i < r.length; i++)
                            (n = r[i]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (s[n] = e[n]);
                        return s;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
                        (i = n[s]),
                            !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
                return r;
            })(n, ["scrollerRef"]);
        return (0, r.jsx)("div", {
            className: y.customContainer,
            children: (0, r.jsx)(
                p.Eie,
                ((e = (function (e) {
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
                                v(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, s)),
                (t = t =
                    {
                        className: a()(y.customScroller, y.contentRegionScroller),
                        ref: i,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(t)).forEach(function (n) {
                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                      }),
                e),
            ),
        });
    }
    render() {
        return (0, r.jsx)("div", {
            className: y.customColumn,
            children: this.renderContent(),
        });
    }
}

function O(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: y.customColumn,
        children: (0, r.jsx)("div", {
            className: y.customContainer,
            children: (0, r.jsx)(p.ArX, {
                className: a()(y.customScroller, y.contentRegionScroller),
                children: t,
            }),
        }),
    });
}
v(S, "defaultProps", {
    paddingTop: 60,
    paddingBottom: 60,
});
var E =
    (((i = {}).MINIMAL = "minimal"),
    (i.CUSTOM = "custom"),
    (i.DEFAULT = "default"),
    (i.WIDE = "wide"),
    (i.SCROLLABLE_CUSTOM = "scrollableCustom"),
    i);
let A = Object.freeze({
    minimal: "contentColumnMinimal",
    custom: "contentColumnCustom",
    default: "contentColumnDefault",
    wide: "contentColumnWide",
    scrollableCustom: "contentColumnCustom",
});

function I(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: i } = e,
        s = l.useRef(null);
    return null == i
        ? null
        : (0, r.jsx)("div", {
              className: a()(y.toolsContainer, {
                  [y.mobileToolsContainer]: t,
                  [y.mobileSidebarTools]: t,
                  [y.closeIconOnly]: !n,
                  [y.isMobileAndroid]: !n && !0 === (0, f.isAndroidWeb)(),
              }),
              ref: s,
              children: (0, r.jsx)(p.xpW, {
                  containerRef: s,
                  children: (0, r.jsx)("div", {
                      className: y.tools,
                      children: (0, r.jsx)(C.A, {
                          className: a()({
                              [y.mobileToolsCloseIcon]: t,
                          }),
                          closeAction: i,
                          keybind: "ESC",
                      }),
                  }),
              }),
          });
}
let _ = function (e) {
    let {
            sidebar: t,
            content: n,
            notice: i,
            section: s,
            closeAction: o,
            sidebarTheme: f,
            contentType: C,
            scrollerRef: v,
            mobileSidebarOpen: b,
            toggleSidebar: S,
            hideSidebar: O = !1,
        } = e,
        E = l.useRef(null),
        _ = l.useRef(null),
        w = (0, g.A)(s),
        j = (0, p.pnh)(
            O,
            {
                from: {
                    position: "absolute",
                    opacity: 0,
                },
                enter: {
                    opacity: 1,
                },
                reverse: O,
                config: d.config.stiff,
            },
            "animate-always",
        ),
        N = l.useCallback(
            (e) => {
                (E.current = e), null != v && (v.current = e);
            },
            [v],
        );
    l.useLayoutEffect(() => {
        null != E.current &&
            w !== s &&
            E.current.scrollTo({
                to: 0,
            });
    }, [s, w, E]);
    let R = (0, r.jsx)(I, {
        isMobile: c.Fr,
        mobileSidebarOpen: b,
        closeAction: o,
    });

    function x() {
        return null == i
            ? null
            : (0, r.jsx)(
                  p.FQk,
                  {
                      className: a()(y.noticeRegion, {
                          [y.noticeRegionHiddenSidebar]: O,
                      }),
                      children: i,
                  },
                  s,
              );
    }
    return (0, r.jsx)(r.Fragment, {
        children: j((e, i) =>
            (0, r.jsxs)(d.animated.div, {
                style: e,
                className: y.standardSidebarView,
                children: [
                    !i &&
                        (null == t
                            ? null
                            : (0, r.jsx)(p.NPJ, {
                                  theme: f,
                                  children: (e) =>
                                      (0, r.jsx)("div", {
                                          className: a()(y.sidebarRegion, e, {
                                              [y.flexFullWidth]: c.Fr,
                                              [y.hidden]: c.Fr && !1 === b,
                                          }),
                                          children: (0, r.jsx)(p.ChK, {
                                              className: y.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, r.jsxs)("nav", {
                                                  className: a()(y.sidebar, {
                                                      [y.mobileSidebar]: c.Fr,
                                                  }),
                                                  children: [
                                                      c.Fr &&
                                                          (0, r.jsx)("div", {
                                                              className: y.mobileSidebarHeader,
                                                              children: R,
                                                          }),
                                                      t,
                                                  ],
                                              }),
                                          }),
                                      }),
                              })),
                    (function () {
                        let e = null != S && null != o && b,
                            t =
                                c.Fr &&
                                (0, r.jsxs)("div", {
                                    className: a()(y.mobileContentHeader, {
                                        [y.hideHamburger]: !e,
                                    }),
                                    children: [
                                        e &&
                                            (0, r.jsx)(u._, {
                                                onClick: S,
                                            }),
                                        R,
                                    ],
                                });
                        if ("custom" === C)
                            return (0, r.jsxs)(h.F, {
                                component: "div",
                                className: y.contentRegion,
                                children: [t, n, !c.Fr && R, x()],
                            });
                        if ("scrollableCustom" === C)
                            return (0, r.jsxs)(h.F, {
                                component: "div",
                                className: y.contentRegion,
                                children: [
                                    t,
                                    (0, r.jsxs)(p.GtU, {
                                        className: a()(
                                            y.contentRegionScroller,
                                            O ? y.contentRegionHiddenSidebar : y.contentRegionShownSidebar,
                                        ),
                                        ref: N,
                                        children: [
                                            (0, r.jsx)(m.Provider, {
                                                value: E.current,
                                                children: (0, r.jsx)("div", {
                                                    ref: _,
                                                    className: y.contentColumnScrollable,
                                                    children: (0, r.jsx)(p.xpW, {
                                                        containerRef: _,
                                                        children: n,
                                                    }),
                                                }),
                                            }),
                                            !c.Fr && R,
                                        ],
                                    }),
                                    x(),
                                ],
                            });
                        let i = A[null != C ? C : "default"];
                        return (0, r.jsxs)(h.F, {
                            component: "div",
                            className: a()(y.contentRegion, {
                                [y.hidden]: c.Fr && !0 === b,
                            }),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: y.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, r.jsxs)(p.GtU, {
                                            className: a()(
                                                y.contentRegionScroller,
                                                O ? y.contentRegionHiddenSidebar : y.contentRegionShownSidebar,
                                            ),
                                            ref: N,
                                            children: [
                                                (0, r.jsx)(m.Provider, {
                                                    value: E.current,
                                                    children: (0, r.jsx)(p.VQ0.Panel, {
                                                        id: s,
                                                        className: a()(y.contentColumn, y[i], {
                                                            [y.mobileContent]: c.Fr,
                                                        }),
                                                        ref: _,
                                                        style: c.Fr
                                                            ? {
                                                                  maxWidth: window.innerWidth,
                                                              }
                                                            : void 0,
                                                        children: O
                                                            ? n
                                                            : (0, r.jsx)(p.xpW, {
                                                                  containerRef: _,
                                                                  children: n,
                                                              }),
                                                    }),
                                                }),
                                                !c.Fr && R,
                                            ],
                                        }),
                                    ],
                                }),
                                x(),
                            ],
                        });
                    })(),
                ],
            }),
        ),
    });
};
