n.d(t, {
    Ay: () => w,
    Fq: () => v,
    Py: () => C,
    gJ: () => T,
    ic: () => I,
});
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(432022),
    c = n(359459),
    u = n(607399),
    d = n(73939),
    f = n(397927),
    p = n(475743),
    _ = n(723702),
    h = n(684136),
    m = n(63135);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = A(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let v = {
        HEADER: "HEADER",
        DIVIDER: "DIVIDER",
        CUSTOM: "CUSTOM",
    },
    S = a.createContext(null);
class I extends (r = a.PureComponent) {
    renderContent() {
        let e = this.props,
            { scrollerRef: t } = e,
            n = O(e, ["scrollerRef"]);
        return (0, i.jsx)("div", {
            className: m.customContainer,
            children: (0, i.jsx)(
                f.Eie,
                y(E({}, n), {
                    className: o()(m.customScroller, m.contentRegionScroller),
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
function T(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: m.customColumn,
        children: (0, i.jsx)("div", {
            className: m.customContainer,
            children: (0, i.jsx)(f.ArX, {
                className: o()(m.customScroller, m.contentRegionScroller),
                children: t,
            }),
        }),
    });
}
g(I, "defaultProps", {
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
        s = a.useRef(null);
    return null == r
        ? null
        : (0, i.jsx)("div", {
              className: o()(m.toolsContainer, {
                  [m.mobileToolsContainer]: t,
                  [m.mobileSidebarTools]: t,
                  [m.closeIconOnly]: !n,
                  [m.isMobileAndroid]: !n && !0 === (0, _.isAndroidWeb)(),
              }),
              ref: s,
              children: (0, i.jsx)(f.xpW, {
                  containerRef: s,
                  children: (0, i.jsx)("div", {
                      className: m.tools,
                      children: (0, i.jsx)(h.A, {
                          className: o()({ [m.mobileToolsCloseIcon]: t }),
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
            section: s,
            closeAction: _,
            sidebarTheme: h,
            contentType: g,
            scrollerRef: E,
            mobileSidebarOpen: b,
            toggleSidebar: y,
            hideSidebar: O = !1,
        } = e,
        A = a.useRef(null),
        v = a.useRef(null),
        I = (0, p.A)(s),
        T = (0, f.pnh)(
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
                (A.current = e), null != E && (E.current = e);
            },
            [E],
        );
    a.useLayoutEffect(() => {
        null != A.current && I !== s && A.current.scrollTo({ to: 0 });
    }, [s, I, A]);
    let w = (0, i.jsx)(R, {
        isMobile: u.Fr,
        mobileSidebarOpen: b,
        closeAction: _,
    });
    function P() {
        return null == r
            ? null
            : (0, i.jsx)(
                  f.FQk,
                  {
                      className: o()(m.noticeRegion, { [m.noticeRegionHiddenSidebar]: O }),
                      children: r,
                  },
                  s,
              );
    }
    function D() {
        let e = null != y && null != _ && b,
            t =
                u.Fr &&
                (0, i.jsxs)("div", {
                    className: o()(m.mobileContentHeader, { [m.hideHamburger]: !e }),
                    children: [e && (0, i.jsx)(c._, { onClick: y }), w],
                });
        if ("custom" === g)
            return (0, i.jsxs)(d.F, {
                component: "div",
                className: m.contentRegion,
                children: [t, n, !u.Fr && w, P()],
            });
        if ("scrollableCustom" === g)
            return (0, i.jsxs)(d.F, {
                component: "div",
                className: m.contentRegion,
                children: [
                    t,
                    (0, i.jsxs)(f.GtU, {
                        className: o()(
                            m.contentRegionScroller,
                            O ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar,
                        ),
                        ref: C,
                        children: [
                            (0, i.jsx)(S.Provider, {
                                value: A.current,
                                children: (0, i.jsx)("div", {
                                    ref: v,
                                    className: m.contentColumnScrollable,
                                    children: (0, i.jsx)(f.xpW, {
                                        containerRef: v,
                                        children: n,
                                    }),
                                }),
                            }),
                            !u.Fr && w,
                        ],
                    }),
                    P(),
                ],
            });
        let r = N[null != g ? g : "default"];
        return (0, i.jsxs)(d.F, {
            component: "div",
            className: o()(m.contentRegion, { [m.hidden]: u.Fr && !0 === b }),
            children: [
                (0, i.jsxs)("div", {
                    className: m.contentTransitionWrap,
                    children: [
                        t,
                        (0, i.jsxs)(f.GtU, {
                            className: o()(
                                m.contentRegionScroller,
                                O ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar,
                            ),
                            ref: C,
                            children: [
                                (0, i.jsx)(S.Provider, {
                                    value: A.current,
                                    children: (0, i.jsx)(f.VQ0.Panel, {
                                        id: s,
                                        className: o()(m.contentColumn, m[r], { [m.mobileContent]: u.Fr }),
                                        ref: v,
                                        style: u.Fr ? { maxWidth: window.innerWidth } : void 0,
                                        children: O
                                            ? n
                                            : (0, i.jsx)(f.xpW, {
                                                  containerRef: v,
                                                  children: n,
                                              }),
                                    }),
                                }),
                                !u.Fr && w,
                            ],
                        }),
                    ],
                }),
                P(),
            ],
        });
    }
    function x() {
        return null == t
            ? null
            : (0, i.jsx)(f.NPJ, {
                  theme: h,
                  children: (e) =>
                      (0, i.jsx)("div", {
                          className: o()(m.sidebarRegion, e, {
                              [m.flexFullWidth]: u.Fr,
                              [m.hidden]: u.Fr && !1 === b,
                          }),
                          children: (0, i.jsx)(f.ChK, {
                              className: m.sidebarRegionScroller,
                              fade: !0,
                              children: (0, i.jsxs)("nav", {
                                  className: o()(m.sidebar, { [m.mobileSidebar]: u.Fr }),
                                  children: [
                                      u.Fr &&
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
        children: T((e, t) =>
            (0, i.jsxs)(l.animated.div, {
                style: e,
                className: m.standardSidebarView,
                children: [!t && x(), D()],
            }),
        ),
    });
};
