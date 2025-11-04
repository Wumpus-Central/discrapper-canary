n.d(t, {
    ID: () => I,
    NM: () => A,
    Xi: () => S,
    ZP: () => P,
    bT: () => C,
});
var r,
    i = n(951288),
    a = n(647438),
    o = n(120356),
    s = n.n(o),
    l = n(358458),
    c = n(608863),
    u = n(873546),
    d = n(215569),
    f = n(481060),
    _ = n(110924),
    p = n(358085),
    h = n(425493),
    m = n(630016);
function g(e, t, n) {
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
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let I = {
        HEADER: "HEADER",
        DIVIDER: "DIVIDER",
        CUSTOM: "CUSTOM",
    },
    T = a.createContext(null);
class S extends (r = a.PureComponent) {
    renderContent() {
        let e = this.props,
            { scrollerRef: t } = e,
            n = O(e, ["scrollerRef"]);
        return (0, i.jsx)("div", {
            className: m.customContainer,
            children: (0, i.jsx)(
                f._2F,
                y(E({}, n), {
                    className: s()(m.customScroller, m.contentRegionScroller),
                    ref: t,
                }),
            ),
        });
    }
    render() {
        return (0, i.jsx)("div", {
            className: m.customColumn,
            children: this.renderContent(),
        });
    }
}
function A(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: m.customColumn,
        children: (0, i.jsx)("div", {
            className: m.customContainer,
            children: (0, i.jsx)(f.w0Z, {
                className: s()(m.customScroller, m.contentRegionScroller),
                children: t,
            }),
        }),
    });
}
g(S, "defaultProps", {
    paddingTop: 60,
    paddingBottom: 60,
});
var C = (function (e) {
    return (
        (e.MINIMAL = "minimal"),
        (e.CUSTOM = "custom"),
        (e.DEFAULT = "default"),
        (e.WIDE = "wide"),
        (e.SCROLLABLE_CUSTOM = "scrollableCustom"),
        e
    );
})({});
let N = Object.freeze({
    minimal: "contentColumnMinimal",
    custom: "contentColumnCustom",
    default: "contentColumnDefault",
    wide: "contentColumnWide",
    scrollableCustom: "contentColumnCustom",
});
function R(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: r } = e,
        o = a.useRef(null);
    return null == r
        ? null
        : (0, i.jsx)("div", {
              className: s()(m.toolsContainer, {
                  [m.mobileToolsContainer]: t,
                  [m.mobileSidebarTools]: t,
                  [m.closeIconOnly]: !n,
                  [m.isMobileAndroid]: !n && !0 === (0, p.isAndroidWeb)(),
              }),
              ref: o,
              children: (0, i.jsx)(f.JcV, {
                  containerRef: o,
                  children: (0, i.jsx)("div", {
                      className: m.tools,
                      children: (0, i.jsx)(h.Z, {
                          className: s()({ [m.mobileToolsCloseIcon]: t }),
                          closeAction: r,
                          keybind: "ESC",
                      }),
                  }),
              }),
          });
}
let P = function (e) {
    let {
            sidebar: t,
            content: n,
            notice: r,
            section: o,
            closeAction: p,
            sidebarTheme: h,
            contentType: g,
            scrollerRef: E,
            mobileSidebarOpen: b,
            toggleSidebar: y,
            hideSidebar: O = !1,
        } = e,
        v = a.useRef(null),
        I = a.useRef(null),
        S = (0, _.Z)(o),
        A = (0, f.Yzy)(
            O,
            {
                from: {
                    position: "absolute",
                    opacity: 0,
                },
                enter: { opacity: 1 },
                reverse: O,
                config: l.config.stiff,
            },
            "animate-always",
        ),
        C = a.useCallback(
            (e) => {
                (v.current = e), null != E && (E.current = e);
            },
            [E],
        );
    a.useLayoutEffect(() => {
        null != v.current && S !== o && v.current.scrollTo({ to: 0 });
    }, [o, S, v]);
    let P = (0, i.jsx)(R, {
        isMobile: u.tq,
        mobileSidebarOpen: b,
        closeAction: p,
    });
    function w() {
        return null == r
            ? null
            : (0, i.jsx)(
                  f.oXn,
                  {
                      className: s()(m.noticeRegion, { [m.noticeRegionHiddenSidebar]: O }),
                      children: r,
                  },
                  o,
              );
    }
    function D() {
        let e = null != y && null != p && b,
            t =
                u.tq &&
                (0, i.jsxs)("div", {
                    className: s()(m.mobileContentHeader, { [m.hideHamburger]: !e }),
                    children: [e && (0, i.jsx)(c.r, { onClick: y }), P],
                });
        if ("custom" === g)
            return (0, i.jsxs)(d.W, {
                component: "div",
                className: m.contentRegion,
                children: [t, n, !u.tq && P, w()],
            });
        if ("scrollableCustom" === g)
            return (0, i.jsxs)(d.W, {
                component: "div",
                className: m.contentRegion,
                children: [
                    t,
                    (0, i.jsxs)(f.yWw, {
                        className: s()(
                            m.contentRegionScroller,
                            O ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar,
                        ),
                        ref: C,
                        children: [
                            (0, i.jsx)(T.Provider, {
                                value: v.current,
                                children: (0, i.jsx)("div", {
                                    ref: I,
                                    className: m.contentColumnScrollable,
                                    children: (0, i.jsx)(f.JcV, {
                                        containerRef: I,
                                        children: n,
                                    }),
                                }),
                            }),
                            !u.tq && P,
                        ],
                    }),
                    w(),
                ],
            });
        let r = N[null != g ? g : "default"];
        return (0, i.jsxs)(d.W, {
            component: "div",
            className: s()(m.contentRegion, { [m.hidden]: u.tq && !0 === b }),
            children: [
                (0, i.jsxs)("div", {
                    className: m.contentTransitionWrap,
                    children: [
                        t,
                        (0, i.jsxs)(f.yWw, {
                            className: s()(
                                m.contentRegionScroller,
                                O ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar,
                            ),
                            ref: C,
                            children: [
                                (0, i.jsx)(T.Provider, {
                                    value: v.current,
                                    children: (0, i.jsx)(f.njP.Panel, {
                                        id: o,
                                        className: s()(m.contentColumn, m[r], { [m.mobileContent]: u.tq }),
                                        ref: I,
                                        style: u.tq ? { maxWidth: window.innerWidth } : void 0,
                                        children: O
                                            ? n
                                            : (0, i.jsx)(f.JcV, {
                                                  containerRef: I,
                                                  children: n,
                                              }),
                                    }),
                                }),
                                !u.tq && P,
                            ],
                        }),
                    ],
                }),
                w(),
            ],
        });
    }
    function x() {
        return null == t
            ? null
            : (0, i.jsx)(f.f6W, {
                  theme: h,
                  children: (e) =>
                      (0, i.jsx)("div", {
                          className: s()(m.sidebarRegion, e, {
                              [m.flexFullWidth]: u.tq,
                              [m.hidden]: u.tq && !1 === b,
                          }),
                          children: (0, i.jsx)(f.h21, {
                              className: m.sidebarRegionScroller,
                              fade: !0,
                              children: (0, i.jsxs)("nav", {
                                  className: s()(m.sidebar, { [m.mobileSidebar]: u.tq }),
                                  children: [
                                      u.tq &&
                                          (0, i.jsx)("div", {
                                              className: m.mobileSidebarHeader,
                                              children: P,
                                          }),
                                      t,
                                  ],
                              }),
                          }),
                      }),
              });
    }
    return (0, i.jsx)(i.Fragment, {
        children: A((e, t) =>
            (0, i.jsxs)(l.animated.div, {
                style: e,
                className: m.standardSidebarView,
                children: [!t && x(), D()],
            }),
        ),
    });
};
