n.d(t, {
    ID: () => S,
    NM: () => C,
    Xi: () => T,
    ZP: () => w,
    bT: () => A,
});
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(81239),
    c = n(608863),
    u = n(873546),
    d = n(215569),
    f = n(481060),
    p = n(110924),
    _ = n(358085),
    h = n(425493),
    m = n(306174);
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
let S = {
        HEADER: "HEADER",
        DIVIDER: "DIVIDER",
        CUSTOM: "CUSTOM",
    },
    I = a.createContext(null);
class T extends (r = a.PureComponent) {
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
function C(e) {
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
g(T, "defaultProps", {
    paddingTop: 60,
    paddingBottom: 60,
});
var A = (function (e) {
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
function P(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: r } = e,
        o = a.useRef(null);
    return null == r
        ? null
        : (0, i.jsx)("div", {
              className: s()(m.toolsContainer, {
                  [m.mobileToolsContainer]: t,
                  [m.mobileSidebarTools]: t,
                  [m.closeIconOnly]: !n,
                  [m.isMobileAndroid]: !n && !0 === (0, _.isAndroidWeb)(),
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
let w = function (e) {
    let {
            sidebar: t,
            content: n,
            notice: r,
            section: o,
            closeAction: _,
            sidebarTheme: h,
            contentType: g,
            scrollerRef: E,
            mobileSidebarOpen: b,
            toggleSidebar: y,
            hideSidebar: O = !1,
        } = e,
        v = a.useRef(null),
        S = a.useRef(null),
        T = (0, p.Z)(o),
        C = (0, f.Yzy)(
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
        A = a.useCallback(
            (e) => {
                (v.current = e), null != E && (E.current = e);
            },
            [E],
        );
    a.useLayoutEffect(() => {
        null != v.current && T !== o && v.current.scrollTo({ to: 0 });
    }, [o, T, v]);
    let w = (0, i.jsx)(P, {
        isMobile: u.tq,
        mobileSidebarOpen: b,
        closeAction: _,
    });
    function R() {
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
        let e = null != y && null != _ && b,
            t =
                u.tq &&
                (0, i.jsxs)("div", {
                    className: s()(m.mobileContentHeader, { [m.hideHamburger]: !e }),
                    children: [e && (0, i.jsx)(c.r, { onClick: y }), w],
                });
        if ("custom" === g)
            return (0, i.jsxs)(d.W, {
                component: "div",
                className: m.contentRegion,
                children: [t, n, !u.tq && w, R()],
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
                        ref: A,
                        children: [
                            (0, i.jsx)(I.Provider, {
                                value: v.current,
                                children: (0, i.jsx)("div", {
                                    ref: S,
                                    className: m.contentColumnScrollable,
                                    children: (0, i.jsx)(f.JcV, {
                                        containerRef: S,
                                        children: n,
                                    }),
                                }),
                            }),
                            !u.tq && w,
                        ],
                    }),
                    R(),
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
                            ref: A,
                            children: [
                                (0, i.jsx)(I.Provider, {
                                    value: v.current,
                                    children: (0, i.jsx)(f.njP.Panel, {
                                        id: o,
                                        className: s()(m.contentColumn, m[r], { [m.mobileContent]: u.tq }),
                                        ref: S,
                                        style: u.tq ? { maxWidth: window.innerWidth } : void 0,
                                        children: O
                                            ? n
                                            : (0, i.jsx)(f.JcV, {
                                                  containerRef: S,
                                                  children: n,
                                              }),
                                    }),
                                }),
                                !u.tq && w,
                            ],
                        }),
                    ],
                }),
                R(),
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
                                              children: w,
                                          }),
                                      t,
                                  ],
                              }),
                          }),
                      }),
              });
    }
    return (0, i.jsx)(i.Fragment, {
        children: C((e, t) =>
            (0, i.jsxs)(l.animated.div, {
                style: e,
                className: m.standardSidebarView,
                children: [!t && x(), D()],
            }),
        ),
    });
};
