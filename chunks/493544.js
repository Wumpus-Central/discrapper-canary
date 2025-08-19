n.d(t, {
    ID: () => C,
    NM: () => O,
    Xi: () => y,
    ZP: () => I,
    bT: () => S,
});
var i,
    r,
    s = n(951288),
    l = n(647438),
    o = n(120356),
    a = n.n(o),
    c = n(803948),
    u = n(608863),
    d = n(873546),
    h = n(215569),
    p = n(481060),
    g = n(110924),
    f = n(358085),
    m = n(425493),
    b = n(630016);
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
let C = {
        HEADER: "HEADER",
        DIVIDER: "DIVIDER",
        CUSTOM: "CUSTOM",
    },
    _ = l.createContext(null);
class y extends (r = l.PureComponent) {
    renderContent() {
        var e, t;
        let n = this.props,
            { scrollerRef: i } = n,
            r = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            s = Object.keys(e);
                        for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < s.length; i++)
                        (n = s[i]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(n, ["scrollerRef"]);
        return (0, s.jsx)("div", {
            className: b.customContainer,
            children: (0, s.jsx)(
                p._2F,
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
                })({}, r)),
                (t = t =
                    {
                        className: a()(b.customScroller, b.contentRegionScroller),
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
        return (0, s.jsx)("div", {
            className: b.customColumn,
            children: this.renderContent(),
        });
    }
}
function O(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", {
        className: b.customColumn,
        children: (0, s.jsx)("div", {
            className: b.customContainer,
            children: (0, s.jsx)(p.w0Z, {
                className: a()(b.customScroller, b.contentRegionScroller),
                children: t,
            }),
        }),
    });
}
v(y, "defaultProps", {
    paddingTop: 60,
    paddingBottom: 60,
});
var S =
    (((i = {}).MINIMAL = "minimal"),
    (i.CUSTOM = "custom"),
    (i.DEFAULT = "default"),
    (i.WIDE = "wide"),
    (i.SCROLLABLE_CUSTOM = "scrollableCustom"),
    i);
let E = Object.freeze({
    minimal: "contentColumnMinimal",
    custom: "contentColumnCustom",
    default: "contentColumnDefault",
    wide: "contentColumnWide",
    scrollableCustom: "contentColumnCustom",
});
function w(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: i } = e,
        r = l.useRef(null);
    return null == i
        ? null
        : (0, s.jsx)("div", {
              className: a()(b.toolsContainer, {
                  [b.mobileToolsContainer]: t,
                  [b.mobileSidebarTools]: t,
                  [b.closeIconOnly]: !n,
                  [b.isMobileAndroid]: !n && !0 === (0, f.isAndroidWeb)(),
              }),
              ref: r,
              children: (0, s.jsx)(p.JcV, {
                  containerRef: r,
                  children: (0, s.jsx)("div", {
                      className: b.tools,
                      children: (0, s.jsx)(m.Z, {
                          className: a()({ [b.mobileToolsCloseIcon]: t }),
                          closeAction: i,
                          keybind: "ESC",
                      }),
                  }),
              }),
          });
}
let I = function (e) {
    let {
            sidebar: t,
            content: n,
            notice: i,
            section: r,
            closeAction: o,
            sidebarTheme: f,
            contentType: m,
            scrollerRef: v,
            mobileSidebarOpen: C,
            toggleSidebar: y,
            hideSidebar: O = !1,
        } = e,
        S = l.useRef(null),
        I = l.useRef(null),
        j = (0, g.Z)(r),
        P = (0, p.Yzy)(
            O,
            {
                from: {
                    position: "absolute",
                    opacity: 0,
                },
                enter: { opacity: 1 },
                reverse: O,
                config: c.config.stiff,
            },
            "animate-always",
        ),
        N = l.useCallback(
            (e) => {
                (S.current = e), null != v && (v.current = e);
            },
            [v],
        );
    l.useLayoutEffect(() => {
        null != S.current && j !== r && S.current.scrollTo({ to: 0 });
    }, [r, j, S]);
    let x = (0, s.jsx)(w, {
        isMobile: d.tq,
        mobileSidebarOpen: C,
        closeAction: o,
    });
    function T() {
        return null == i
            ? null
            : (0, s.jsx)(
                  p.oXn,
                  {
                      className: a()(b.noticeRegion, { [b.noticeRegionHiddenSidebar]: O }),
                      children: i,
                  },
                  r,
              );
    }
    return (0, s.jsx)(s.Fragment, {
        children: P((e, i) =>
            (0, s.jsxs)(c.animated.div, {
                style: e,
                className: b.standardSidebarView,
                children: [
                    !i &&
                        (null == t
                            ? null
                            : (0, s.jsx)(p.f6W, {
                                  theme: f,
                                  children: (e) =>
                                      (0, s.jsx)("div", {
                                          className: a()(b.sidebarRegion, e, {
                                              [b.flexFullWidth]: d.tq,
                                              [b.hidden]: d.tq && !1 === C,
                                          }),
                                          children: (0, s.jsx)(p.h21, {
                                              className: b.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, s.jsxs)("nav", {
                                                  className: a()(b.sidebar, { [b.mobileSidebar]: d.tq }),
                                                  children: [
                                                      d.tq &&
                                                          (0, s.jsx)("div", {
                                                              className: b.mobileSidebarHeader,
                                                              children: x,
                                                          }),
                                                      t,
                                                  ],
                                              }),
                                          }),
                                      }),
                              })),
                    (function () {
                        let e = null != y && null != o && C,
                            t =
                                d.tq &&
                                (0, s.jsxs)("div", {
                                    className: a()(b.mobileContentHeader, { [b.hideHamburger]: !e }),
                                    children: [e && (0, s.jsx)(u.r, { onClick: y }), x],
                                });
                        if ("custom" === m)
                            return (0, s.jsxs)(h.W, {
                                component: "div",
                                className: b.contentRegion,
                                children: [t, n, !d.tq && x, T()],
                            });
                        if ("scrollableCustom" === m)
                            return (0, s.jsxs)(h.W, {
                                component: "div",
                                className: b.contentRegion,
                                children: [
                                    t,
                                    (0, s.jsxs)(p.yWw, {
                                        className: a()(
                                            b.contentRegionScroller,
                                            O ? b.contentRegionHiddenSidebar : b.contentRegionShownSidebar,
                                        ),
                                        ref: N,
                                        children: [
                                            (0, s.jsx)(_.Provider, {
                                                value: S.current,
                                                children: (0, s.jsx)("div", {
                                                    ref: I,
                                                    className: b.contentColumnScrollable,
                                                    children: (0, s.jsx)(p.JcV, {
                                                        containerRef: I,
                                                        children: n,
                                                    }),
                                                }),
                                            }),
                                            !d.tq && x,
                                        ],
                                    }),
                                    T(),
                                ],
                            });
                        let i = E[null != m ? m : "default"];
                        return (0, s.jsxs)(h.W, {
                            component: "div",
                            className: a()(b.contentRegion, { [b.hidden]: d.tq && !0 === C }),
                            children: [
                                (0, s.jsxs)("div", {
                                    className: b.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, s.jsxs)(p.yWw, {
                                            className: a()(
                                                b.contentRegionScroller,
                                                O ? b.contentRegionHiddenSidebar : b.contentRegionShownSidebar,
                                            ),
                                            ref: N,
                                            children: [
                                                (0, s.jsx)(_.Provider, {
                                                    value: S.current,
                                                    children: (0, s.jsx)(p.njP.Panel, {
                                                        id: r,
                                                        className: a()(b.contentColumn, b[i], {
                                                            [b.mobileContent]: d.tq,
                                                        }),
                                                        ref: I,
                                                        style: d.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: O
                                                            ? n
                                                            : (0, s.jsx)(p.JcV, {
                                                                  containerRef: I,
                                                                  children: n,
                                                              }),
                                                    }),
                                                }),
                                                !d.tq && x,
                                            ],
                                        }),
                                    ],
                                }),
                                T(),
                            ],
                        });
                    })(),
                ],
            }),
        ),
    });
};
