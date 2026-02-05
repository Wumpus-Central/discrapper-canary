"use strict";
n.d(t, { Ay: () => _, Fq: () => S, Py: () => I, gJ: () => E, ic: () => m });
var s,
    i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(563495),
    d = n(359459),
    h = n(607399),
    c = n(73939),
    u = n(397927),
    g = n(475743),
    p = n(723702),
    C = n(684136),
    f = n(63135);
let S = { HEADER: "HEADER", DIVIDER: "DIVIDER", CUSTOM: "CUSTOM" },
    A = r.createContext(null);
class m extends r.PureComponent {
    static defaultProps = { paddingTop: 60, paddingBottom: 60 };
    renderContent() {
        let { scrollerRef: e, ...t } = this.props;
        return (0, i.jsx)("div", {
            className: f.customContainer,
            children: (0, i.jsx)(u.Eie, { ...t, className: a()(f.customScroller, f.contentRegionScroller), ref: e }),
        });
    }
    render() {
        return (0, i.jsx)("div", { className: f.customColumn, children: this.renderContent() });
    }
}
function E(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: f.customColumn,
        children: (0, i.jsx)("div", {
            className: f.customContainer,
            children: (0, i.jsx)(u.ArX, { className: a()(f.customScroller, f.contentRegionScroller), children: t }),
        }),
    });
}
var I =
    (((s = {}).MINIMAL = "minimal"),
    (s.CUSTOM = "custom"),
    (s.DEFAULT = "default"),
    (s.WIDE = "wide"),
    (s.SCROLLABLE_CUSTOM = "scrollableCustom"),
    s);
let v = Object.freeze({
    minimal: "contentColumnMinimal",
    custom: "contentColumnCustom",
    default: "contentColumnDefault",
    wide: "contentColumnWide",
    scrollableCustom: "contentColumnCustom",
});
function y(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: s } = e,
        l = r.useRef(null);
    return null == s
        ? null
        : (0, i.jsx)("div", {
              className: a()(f.toolsContainer, {
                  [f.mobileToolsContainer]: t,
                  [f.mobileSidebarTools]: t,
                  [f.closeIconOnly]: !n,
                  [f.isMobileAndroid]: !n && !0 === (0, p.isAndroidWeb)(),
              }),
              ref: l,
              children: (0, i.jsx)(u.xpW, {
                  containerRef: l,
                  children: (0, i.jsx)("div", {
                      className: f.tools,
                      children: (0, i.jsx)(C.A, {
                          className: a()({ [f.mobileToolsCloseIcon]: t }),
                          closeAction: s,
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
            notice: s,
            section: l,
            closeAction: p,
            sidebarTheme: C,
            contentType: S,
            scrollerRef: m,
            mobileSidebarOpen: E,
            toggleSidebar: I,
            hideSidebar: _ = !1,
        } = e,
        b = r.useRef(null),
        N = r.useRef(null),
        x = (0, g.A)(l),
        R = (0, u.pnh)(
            _,
            { from: { position: "absolute", opacity: 0 }, enter: { opacity: 1 }, reverse: _, config: o.config.stiff },
            "animate-always",
        ),
        w = r.useCallback(
            (e) => {
                (b.current = e), null != m && (m.current = e);
            },
            [m],
        );
    r.useLayoutEffect(() => {
        null != b.current && x !== l && b.current.scrollTo({ to: 0 });
    }, [l, x, b]);
    let O = (0, i.jsx)(y, { isMobile: h.Fr, mobileSidebarOpen: E, closeAction: p });
    function T() {
        return null == s
            ? null
            : (0, i.jsx)(
                  u.FQk,
                  { className: a()(f.noticeRegion, { [f.noticeRegionHiddenSidebar]: _ }), children: s },
                  l,
              );
    }
    return (0, i.jsx)(i.Fragment, {
        children: R((e, s) =>
            (0, i.jsxs)(o.animated.div, {
                style: e,
                className: f.standardSidebarView,
                children: [
                    !s &&
                        (null == t
                            ? null
                            : (0, i.jsx)(u.NPJ, {
                                  theme: C,
                                  children: (e) =>
                                      (0, i.jsx)("div", {
                                          className: a()(f.sidebarRegion, e, {
                                              [f.flexFullWidth]: h.Fr,
                                              [f.hidden]: h.Fr && !1 === E,
                                          }),
                                          children: (0, i.jsx)(u.ChK, {
                                              className: f.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, i.jsxs)("nav", {
                                                  className: a()(f.sidebar, { [f.mobileSidebar]: h.Fr }),
                                                  children: [
                                                      h.Fr &&
                                                          (0, i.jsx)("div", {
                                                              className: f.mobileSidebarHeader,
                                                              children: O,
                                                          }),
                                                      t,
                                                  ],
                                              }),
                                          }),
                                      }),
                              })),
                    (function () {
                        let e = null != I && null != p && E,
                            t =
                                h.Fr &&
                                (0, i.jsxs)("div", {
                                    className: a()(f.mobileContentHeader, { [f.hideHamburger]: !e }),
                                    children: [e && (0, i.jsx)(d._, { onClick: I }), O],
                                });
                        if ("custom" === S)
                            return (0, i.jsxs)(c.F, {
                                component: "div",
                                className: f.contentRegion,
                                children: [t, n, !h.Fr && O, T()],
                            });
                        if ("scrollableCustom" === S)
                            return (0, i.jsxs)(c.F, {
                                component: "div",
                                className: f.contentRegion,
                                children: [
                                    t,
                                    (0, i.jsxs)(u.GtU, {
                                        className: a()(
                                            f.contentRegionScroller,
                                            _ ? f.contentRegionHiddenSidebar : f.contentRegionShownSidebar,
                                        ),
                                        ref: w,
                                        children: [
                                            (0, i.jsx)(A.Provider, {
                                                value: b.current,
                                                children: (0, i.jsx)("div", {
                                                    ref: N,
                                                    className: f.contentColumnScrollable,
                                                    children: (0, i.jsx)(u.xpW, { containerRef: N, children: n }),
                                                }),
                                            }),
                                            !h.Fr && O,
                                        ],
                                    }),
                                    T(),
                                ],
                            });
                        let s = v[S ?? "default"];
                        return (0, i.jsxs)(c.F, {
                            component: "div",
                            className: a()(f.contentRegion, { [f.hidden]: h.Fr && !0 === E }),
                            children: [
                                (0, i.jsxs)("div", {
                                    className: f.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, i.jsxs)(u.GtU, {
                                            className: a()(
                                                f.contentRegionScroller,
                                                _ ? f.contentRegionHiddenSidebar : f.contentRegionShownSidebar,
                                            ),
                                            ref: w,
                                            children: [
                                                (0, i.jsx)(A.Provider, {
                                                    value: b.current,
                                                    children: (0, i.jsx)(u.VQ0.Panel, {
                                                        id: l,
                                                        className: a()(f.contentColumn, f[s], {
                                                            [f.mobileContent]: h.Fr,
                                                        }),
                                                        ref: N,
                                                        style: h.Fr ? { maxWidth: window.innerWidth } : void 0,
                                                        children: _
                                                            ? n
                                                            : (0, i.jsx)(u.xpW, { containerRef: N, children: n }),
                                                    }),
                                                }),
                                                !h.Fr && O,
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
