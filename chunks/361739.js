n.d(t, { Ay: () => v, Fq: () => E, Py: () => g, gJ: () => N, ic: () => f });
var s,
    i = n(627968),
    r = n(64700),
    l = n(503698),
    o = n.n(l),
    a = n(40153),
    c = n(359459),
    d = n(607399),
    u = n(73939),
    h = n(397927),
    _ = n(475743),
    p = n(723702),
    S = n(684136),
    m = n(63135);
let E = { HEADER: "HEADER", DIVIDER: "DIVIDER", CUSTOM: "CUSTOM" },
    A = r.createContext(null);
class f extends r.PureComponent {
    static defaultProps = { paddingTop: 60, paddingBottom: 60 };
    renderContent() {
        let { scrollerRef: e, ...t } = this.props;
        return (0, i.jsx)("div", {
            className: m.customContainer,
            children: (0, i.jsx)(h.Eie, { ...t, className: o()(m.customScroller, m.contentRegionScroller), ref: e }),
        });
    }
    render() {
        return (0, i.jsx)("div", { className: m.customColumn, children: this.renderContent() });
    }
}
function N(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: m.customColumn,
        children: (0, i.jsx)("div", {
            className: m.customContainer,
            children: (0, i.jsx)(h.ArX, { className: o()(m.customScroller, m.contentRegionScroller), children: t }),
        }),
    });
}
var g =
    (((s = {}).MINIMAL = "minimal"),
    (s.CUSTOM = "custom"),
    (s.DEFAULT = "default"),
    (s.WIDE = "wide"),
    (s.SCROLLABLE_CUSTOM = "scrollableCustom"),
    s);
let I = Object.freeze({
    minimal: "contentColumnMinimal",
    custom: "contentColumnCustom",
    default: "contentColumnDefault",
    wide: "contentColumnWide",
    scrollableCustom: "contentColumnCustom",
});
function b(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: s } = e,
        l = r.useRef(null);
    return null == s
        ? null
        : (0, i.jsx)("div", {
              className: o()(m.toolsContainer, {
                  [m.mobileToolsContainer]: t,
                  [m.mobileSidebarTools]: t,
                  [m.closeIconOnly]: !n,
                  [m.isMobileAndroid]: !n && !0 === (0, p.isAndroidWeb)(),
              }),
              ref: l,
              children: (0, i.jsx)(h.xpW, {
                  containerRef: l,
                  children: (0, i.jsx)("div", {
                      className: m.tools,
                      children: (0, i.jsx)(S.A, {
                          className: o()({ [m.mobileToolsCloseIcon]: t }),
                          closeAction: s,
                          keybind: "ESC",
                      }),
                  }),
              }),
          });
}
let v = function (e) {
    let {
            sidebar: t,
            content: n,
            notice: s,
            section: l,
            closeAction: p,
            sidebarTheme: S,
            contentType: E,
            scrollerRef: f,
            mobileSidebarOpen: N,
            toggleSidebar: g,
            hideSidebar: v = !1,
        } = e,
        x = r.useRef(null),
        T = r.useRef(null),
        C = (0, _.A)(l),
        R = (0, h.pnh)(
            v,
            { from: { position: "absolute", opacity: 0 }, enter: { opacity: 1 }, reverse: v, config: a.config.stiff },
            "animate-always",
        ),
        j = r.useCallback(
            (e) => {
                (x.current = e), null != f && (f.current = e);
            },
            [f],
        );
    r.useLayoutEffect(() => {
        null != x.current && C !== l && x.current.scrollTo({ to: 0 });
    }, [l, C, x]);
    let O = (0, i.jsx)(b, { isMobile: d.Fr, mobileSidebarOpen: N, closeAction: p });
    function L() {
        return null == s
            ? null
            : (0, i.jsx)(
                  h.FQk,
                  { className: o()(m.noticeRegion, { [m.noticeRegionHiddenSidebar]: v }), children: s },
                  l,
              );
    }
    return (0, i.jsx)(i.Fragment, {
        children: R((e, s) =>
            (0, i.jsxs)(a.animated.div, {
                style: e,
                className: m.standardSidebarView,
                children: [
                    !s &&
                        (null == t
                            ? null
                            : (0, i.jsx)(h.NPJ, {
                                  theme: S,
                                  children: (e) =>
                                      (0, i.jsx)("div", {
                                          className: o()(m.sidebarRegion, e, {
                                              [m.flexFullWidth]: d.Fr,
                                              [m.hidden]: d.Fr && !1 === N,
                                          }),
                                          children: (0, i.jsx)(h.ChK, {
                                              className: m.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, i.jsxs)("nav", {
                                                  className: o()(m.sidebar, { [m.mobileSidebar]: d.Fr }),
                                                  children: [
                                                      d.Fr &&
                                                          (0, i.jsx)("div", {
                                                              className: m.mobileSidebarHeader,
                                                              children: O,
                                                          }),
                                                      t,
                                                  ],
                                              }),
                                          }),
                                      }),
                              })),
                    (function () {
                        let e = null != g && null != p && N,
                            t =
                                d.Fr &&
                                (0, i.jsxs)("div", {
                                    className: o()(m.mobileContentHeader, { [m.hideHamburger]: !e }),
                                    children: [e && (0, i.jsx)(c._, { onClick: g }), O],
                                });
                        if ("custom" === E)
                            return (0, i.jsxs)(u.F, {
                                component: "div",
                                className: m.contentRegion,
                                children: [t, n, !d.Fr && O, L()],
                            });
                        if ("scrollableCustom" === E)
                            return (0, i.jsxs)(u.F, {
                                component: "div",
                                className: m.contentRegion,
                                children: [
                                    t,
                                    (0, i.jsxs)(h.GtU, {
                                        className: o()(
                                            m.contentRegionScroller,
                                            v ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar,
                                        ),
                                        ref: j,
                                        children: [
                                            (0, i.jsx)(A.Provider, {
                                                value: x.current,
                                                children: (0, i.jsx)("div", {
                                                    ref: T,
                                                    className: m.contentColumnScrollable,
                                                    children: (0, i.jsx)(h.xpW, { containerRef: T, children: n }),
                                                }),
                                            }),
                                            !d.Fr && O,
                                        ],
                                    }),
                                    L(),
                                ],
                            });
                        let s = I[E ?? "default"];
                        return (0, i.jsxs)(u.F, {
                            component: "div",
                            className: o()(m.contentRegion, { [m.hidden]: d.Fr && !0 === N }),
                            children: [
                                (0, i.jsxs)("div", {
                                    className: m.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, i.jsxs)(h.GtU, {
                                            className: o()(
                                                m.contentRegionScroller,
                                                v ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar,
                                            ),
                                            ref: j,
                                            children: [
                                                (0, i.jsx)(A.Provider, {
                                                    value: x.current,
                                                    children: (0, i.jsx)(h.VQ0.Panel, {
                                                        id: l,
                                                        className: o()(m.contentColumn, m[s], {
                                                            [m.mobileContent]: d.Fr,
                                                        }),
                                                        ref: T,
                                                        style: d.Fr ? { maxWidth: window.innerWidth } : void 0,
                                                        children: v
                                                            ? n
                                                            : (0, i.jsx)(h.xpW, { containerRef: T, children: n }),
                                                    }),
                                                }),
                                                !d.Fr && O,
                                            ],
                                        }),
                                    ],
                                }),
                                L(),
                            ],
                        });
                    })(),
                ],
            }),
        ),
    });
};
