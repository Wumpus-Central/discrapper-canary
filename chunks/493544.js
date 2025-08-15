n.d(t, {
    ID: () => b,
    NM: () => S,
    Xi: () => O,
    ZP: () => I,
    bT: () => E,
});
var i,
    r,
    s = n(951288),
    l = n(647438),
    o = n(120356),
    a = n.n(o),
    u = n(815061),
    c = n(608863),
    d = n(873546),
    h = n(215569),
    p = n(481060),
    g = n(110924),
    f = n(358085),
    v = n(425493),
    m = n(630016);
function C(e, t, n) {
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
    y = l.createContext(null);
class O extends (r = l.PureComponent) {
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
            className: m.customContainer,
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
                                C(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, r)),
                (t = t =
                    {
                        className: a()(m.customScroller, m.contentRegionScroller),
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
            className: m.customColumn,
            children: this.renderContent(),
        });
    }
}
function S(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", {
        className: m.customColumn,
        children: (0, s.jsx)("div", {
            className: m.customContainer,
            children: (0, s.jsx)(p.w0Z, {
                className: a()(m.customScroller, m.contentRegionScroller),
                children: t,
            }),
        }),
    });
}
C(O, "defaultProps", {
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
let _ = Object.freeze({
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
              className: a()(m.toolsContainer, {
                  [m.mobileToolsContainer]: t,
                  [m.mobileSidebarTools]: t,
                  [m.closeIconOnly]: !n,
                  [m.isMobileAndroid]: !n && !0 === (0, f.isAndroidWeb)(),
              }),
              ref: r,
              children: (0, s.jsx)(p.JcV, {
                  containerRef: r,
                  children: (0, s.jsx)("div", {
                      className: m.tools,
                      children: (0, s.jsx)(v.Z, {
                          className: a()({ [m.mobileToolsCloseIcon]: t }),
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
            contentType: v,
            scrollerRef: C,
            mobileSidebarOpen: b,
            toggleSidebar: O,
            hideSidebar: S = !1,
        } = e,
        E = l.useRef(null),
        I = l.useRef(null),
        j = (0, g.Z)(r),
        P = (0, p.Yzy)(
            S,
            {
                from: {
                    position: "absolute",
                    opacity: 0,
                },
                enter: { opacity: 1 },
                reverse: S,
                config: u.config.stiff,
            },
            "animate-always",
        ),
        N = l.useCallback(
            (e) => {
                (E.current = e), null != C && (C.current = e);
            },
            [C],
        );
    l.useLayoutEffect(() => {
        null != E.current && j !== r && E.current.scrollTo({ to: 0 });
    }, [r, j, E]);
    let x = (0, s.jsx)(w, {
        isMobile: d.tq,
        mobileSidebarOpen: b,
        closeAction: o,
    });
    function T() {
        return null == i
            ? null
            : (0, s.jsx)(
                  p.oXn,
                  {
                      className: a()(m.noticeRegion, { [m.noticeRegionHiddenSidebar]: S }),
                      children: i,
                  },
                  r,
              );
    }
    return (0, s.jsx)(s.Fragment, {
        children: P((e, i) =>
            (0, s.jsxs)(u.animated.div, {
                style: e,
                className: m.standardSidebarView,
                children: [
                    !i &&
                        (null == t
                            ? null
                            : (0, s.jsx)(p.f6W, {
                                  theme: f,
                                  children: (e) =>
                                      (0, s.jsx)("div", {
                                          className: a()(m.sidebarRegion, e, {
                                              [m.flexFullWidth]: d.tq,
                                              [m.hidden]: d.tq && !1 === b,
                                          }),
                                          children: (0, s.jsx)(p.h21, {
                                              className: m.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, s.jsxs)("nav", {
                                                  className: a()(m.sidebar, { [m.mobileSidebar]: d.tq }),
                                                  children: [
                                                      d.tq &&
                                                          (0, s.jsx)("div", {
                                                              className: m.mobileSidebarHeader,
                                                              children: x,
                                                          }),
                                                      t,
                                                  ],
                                              }),
                                          }),
                                      }),
                              })),
                    (function () {
                        let e = null != O && null != o && b,
                            t =
                                d.tq &&
                                (0, s.jsxs)("div", {
                                    className: a()(m.mobileContentHeader, { [m.hideHamburger]: !e }),
                                    children: [e && (0, s.jsx)(c.r, { onClick: O }), x],
                                });
                        if ("custom" === v)
                            return (0, s.jsxs)(h.W, {
                                component: "div",
                                className: m.contentRegion,
                                children: [t, n, !d.tq && x, T()],
                            });
                        if ("scrollableCustom" === v)
                            return (0, s.jsxs)(h.W, {
                                component: "div",
                                className: m.contentRegion,
                                children: [
                                    t,
                                    (0, s.jsxs)(p.yWw, {
                                        className: a()(
                                            m.contentRegionScroller,
                                            S ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar,
                                        ),
                                        ref: N,
                                        children: [
                                            (0, s.jsx)(y.Provider, {
                                                value: E.current,
                                                children: (0, s.jsx)("div", {
                                                    ref: I,
                                                    className: m.contentColumnScrollable,
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
                        let i = _[null != v ? v : "default"];
                        return (0, s.jsxs)(h.W, {
                            component: "div",
                            className: a()(m.contentRegion, { [m.hidden]: d.tq && !0 === b }),
                            children: [
                                (0, s.jsxs)("div", {
                                    className: m.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, s.jsxs)(p.yWw, {
                                            className: a()(
                                                m.contentRegionScroller,
                                                S ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar,
                                            ),
                                            ref: N,
                                            children: [
                                                (0, s.jsx)(y.Provider, {
                                                    value: E.current,
                                                    children: (0, s.jsx)(p.njP.Panel, {
                                                        id: r,
                                                        className: a()(m.contentColumn, m[i], {
                                                            [m.mobileContent]: d.tq,
                                                        }),
                                                        ref: I,
                                                        style: d.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: S
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
