n.d(t, { Ay: () => C, Fq: () => _, Py: () => f, gJ: () => x, ic: () => A });
var i,
    s = n(627968),
    r = n(64700),
    l = n(503698),
    o = n.n(l),
    a = n(687498),
    c = n(359459),
    d = n(607399),
    u = n(73939),
    h = n(397927),
    m = n(475743),
    p = n(723702),
    E = n(684136),
    S = n(223698);
let _ = { HEADER: "HEADER", DIVIDER: "DIVIDER", CUSTOM: "CUSTOM" },
    g = r.createContext(null);
class A extends r.PureComponent {
    static defaultProps = { paddingTop: 60, paddingBottom: 60 };
    renderContent() {
        let { scrollerRef: e, ...t } = this.props;
        return (0, s.jsx)("div", {
            className: S.customContainer,
            children: (0, s.jsx)(h.Eie, { ...t, className: o()(S.customScroller, S.contentRegionScroller), ref: e }),
        });
    }
    render() {
        return (0, s.jsx)("div", { className: S.customColumn, children: this.renderContent() });
    }
}
function x(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", {
        className: S.customColumn,
        children: (0, s.jsx)("div", {
            className: S.customContainer,
            children: (0, s.jsx)(h.ArX, { className: o()(S.customScroller, S.contentRegionScroller), children: t }),
        }),
    });
}
var f =
    (((i = {}).MINIMAL = "minimal"),
    (i.CUSTOM = "custom"),
    (i.DEFAULT = "default"),
    (i.WIDE = "wide"),
    (i.SCROLLABLE_CUSTOM = "scrollableCustom"),
    i);
let v = Object.freeze({
    minimal: "contentColumnMinimal",
    custom: "contentColumnCustom",
    default: "contentColumnDefault",
    wide: "contentColumnWide",
    scrollableCustom: "contentColumnCustom",
});
function N(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: i } = e,
        l = r.useRef(null);
    return null == i
        ? null
        : (0, s.jsx)("div", {
              className: o()(S.toolsContainer, {
                  [S.mobileToolsContainer]: t,
                  [S.mobileSidebarTools]: t,
                  [S.closeIconOnly]: !n,
                  [S.isMobileAndroid]: !n && !0 === (0, p.isAndroidWeb)(),
              }),
              ref: l,
              children: (0, s.jsx)(h.xpW, {
                  containerRef: l,
                  children: (0, s.jsx)("div", {
                      className: S.tools,
                      children: (0, s.jsx)(E.A, {
                          className: o()({ [S.mobileToolsCloseIcon]: t }),
                          closeAction: i,
                          keybind: "ESC",
                      }),
                  }),
              }),
          });
}
let C = function (e) {
    let {
            sidebar: t,
            content: n,
            notice: i,
            section: l,
            closeAction: p,
            sidebarTheme: E,
            contentType: _,
            scrollerRef: A,
            mobileSidebarOpen: x,
            toggleSidebar: f,
            hideSidebar: C = !1,
        } = e,
        b = r.useRef(null),
        j = r.useRef(null),
        T = (0, m.A)(l),
        O = (0, h.pnh)(
            C,
            { from: { position: "absolute", opacity: 0 }, enter: { opacity: 1 }, reverse: C, config: a.config.stiff },
            "animate-always",
        ),
        R = r.useCallback(
            (e) => {
                (b.current = e), null != A && (A.current = e);
            },
            [A],
        );
    r.useLayoutEffect(() => {
        null != b.current && T !== l && b.current.scrollTo({ to: 0 });
    }, [l, T, b]);
    let I = (0, s.jsx)(N, { isMobile: d.Fr, mobileSidebarOpen: x, closeAction: p });
    function P() {
        return (0, s.jsx)(
            u.F,
            {
                component: "div",
                children:
                    null != i &&
                    (0, s.jsx)(
                        h.FQk,
                        { className: o()(S.noticeRegion, { [S.noticeRegionHiddenSidebar]: C }), children: i },
                        l,
                    ),
            },
            "notice-transition-group",
        );
    }
    return (0, s.jsx)(s.Fragment, {
        children: O((e, i) =>
            (0, s.jsxs)(a.animated.div, {
                style: e,
                className: S.standardSidebarView,
                children: [
                    !i &&
                        (null == t
                            ? null
                            : (0, s.jsx)(h.NPJ, {
                                  theme: E,
                                  children: (e) =>
                                      (0, s.jsx)("div", {
                                          className: o()(S.sidebarRegion, e, {
                                              [S.flexFullWidth]: d.Fr,
                                              [S.hidden]: d.Fr && !1 === x,
                                          }),
                                          children: (0, s.jsx)(h.ChK, {
                                              className: S.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, s.jsxs)("nav", {
                                                  className: o()(S.sidebar, { [S.mobileSidebar]: d.Fr }),
                                                  children: [
                                                      d.Fr &&
                                                          (0, s.jsx)("div", {
                                                              className: S.mobileSidebarHeader,
                                                              children: I,
                                                          }),
                                                      t,
                                                  ],
                                              }),
                                          }),
                                      }),
                              })),
                    (function () {
                        let e = null != f && null != p && x,
                            t =
                                d.Fr &&
                                (0, s.jsxs)("div", {
                                    className: o()(S.mobileContentHeader, { [S.hideHamburger]: !e }),
                                    children: [e && (0, s.jsx)(c._, { onClick: f }), I],
                                });
                        if ("custom" === _)
                            return (0, s.jsxs)("div", {
                                className: S.contentRegion,
                                children: [t, n, !d.Fr && I, P()],
                            });
                        if ("scrollableCustom" === _)
                            return (0, s.jsxs)("div", {
                                className: S.contentRegion,
                                children: [
                                    t,
                                    (0, s.jsxs)(h.GtU, {
                                        className: o()(
                                            S.contentRegionScroller,
                                            C ? S.contentRegionHiddenSidebar : S.contentRegionShownSidebar,
                                        ),
                                        ref: R,
                                        children: [
                                            (0, s.jsx)(g.Provider, {
                                                value: b.current,
                                                children: (0, s.jsx)("div", {
                                                    ref: j,
                                                    className: S.contentColumnScrollable,
                                                    children: (0, s.jsx)(h.xpW, { containerRef: j, children: n }),
                                                }),
                                            }),
                                            !d.Fr && I,
                                        ],
                                    }),
                                    P(),
                                ],
                            });
                        let i = v[_ ?? "default"];
                        return (0, s.jsxs)("div", {
                            className: o()(S.contentRegion, { [S.hidden]: d.Fr && !0 === x }),
                            children: [
                                t,
                                (0, s.jsxs)(h.GtU, {
                                    className: o()(
                                        S.contentRegionScroller,
                                        C ? S.contentRegionHiddenSidebar : S.contentRegionShownSidebar,
                                    ),
                                    ref: R,
                                    children: [
                                        (0, s.jsx)(g.Provider, {
                                            value: b.current,
                                            children: (0, s.jsx)(h.VQ0.Panel, {
                                                id: l,
                                                className: o()(S.contentColumn, S[i], { [S.mobileContent]: d.Fr }),
                                                ref: j,
                                                style: d.Fr ? { maxWidth: window.innerWidth } : void 0,
                                                children: C ? n : (0, s.jsx)(h.xpW, { containerRef: j, children: n }),
                                            }),
                                        }),
                                        !d.Fr && I,
                                    ],
                                }),
                                P(),
                            ],
                        });
                    })(),
                ],
            }),
        ),
    });
};
