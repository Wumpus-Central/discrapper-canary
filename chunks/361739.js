n.d(t, { Ay: () => N, Fq: () => f, Py: () => A, gJ: () => v, ic: () => x });
var i,
    s = n(627968),
    r = n(64700),
    l = n(503698),
    o = n.n(l),
    a = n(92674),
    c = n(359459),
    d = n(607399),
    u = n(73939),
    h = n(397927),
    m = n(475743),
    p = n(723702),
    S = n(684136),
    E = n(63135);
let f = { HEADER: "HEADER", DIVIDER: "DIVIDER", CUSTOM: "CUSTOM" },
    g = r.createContext(null);
class x extends r.PureComponent {
    static defaultProps = { paddingTop: 60, paddingBottom: 60 };
    renderContent() {
        let { scrollerRef: e, ...t } = this.props;
        return (0, s.jsx)("div", {
            className: E.customContainer,
            children: (0, s.jsx)(h.Eie, { ...t, className: o()(E.customScroller, E.contentRegionScroller), ref: e }),
        });
    }
    render() {
        return (0, s.jsx)("div", { className: E.customColumn, children: this.renderContent() });
    }
}
function v(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", {
        className: E.customColumn,
        children: (0, s.jsx)("div", {
            className: E.customContainer,
            children: (0, s.jsx)(h.ArX, { className: o()(E.customScroller, E.contentRegionScroller), children: t }),
        }),
    });
}
var A =
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
function C(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: i } = e,
        l = r.useRef(null);
    return null == i
        ? null
        : (0, s.jsx)("div", {
              className: o()(E.toolsContainer, {
                  [E.mobileToolsContainer]: t,
                  [E.mobileSidebarTools]: t,
                  [E.closeIconOnly]: !n,
                  [E.isMobileAndroid]: !n && !0 === (0, p.isAndroidWeb)(),
              }),
              ref: l,
              children: (0, s.jsx)(h.xpW, {
                  containerRef: l,
                  children: (0, s.jsx)("div", {
                      className: E.tools,
                      children: (0, s.jsx)(S.A, {
                          className: o()({ [E.mobileToolsCloseIcon]: t }),
                          closeAction: i,
                          keybind: "ESC",
                      }),
                  }),
              }),
          });
}
let N = function (e) {
    let {
            sidebar: t,
            content: n,
            notice: i,
            section: l,
            closeAction: p,
            sidebarTheme: S,
            contentType: f,
            scrollerRef: x,
            mobileSidebarOpen: v,
            toggleSidebar: A,
            hideSidebar: N = !1,
        } = e,
        b = r.useRef(null),
        j = r.useRef(null),
        T = (0, m.A)(l),
        O = (0, h.pnh)(
            N,
            { from: { position: "absolute", opacity: 0 }, enter: { opacity: 1 }, reverse: N, config: a.config.stiff },
            "animate-always",
        ),
        R = r.useCallback(
            (e) => {
                (b.current = e), null != x && (x.current = e);
            },
            [x],
        );
    r.useLayoutEffect(() => {
        null != b.current && T !== l && b.current.scrollTo({ to: 0 });
    }, [l, T, b]);
    let P = (0, s.jsx)(C, { isMobile: d.Fr, mobileSidebarOpen: v, closeAction: p });
    function I() {
        return null == i
            ? null
            : (0, s.jsx)(
                  h.FQk,
                  { className: o()(E.noticeRegion, { [E.noticeRegionHiddenSidebar]: N }), children: i },
                  l,
              );
    }
    return (0, s.jsx)(s.Fragment, {
        children: O((e, i) =>
            (0, s.jsxs)(a.animated.div, {
                style: e,
                className: E.standardSidebarView,
                children: [
                    !i &&
                        (null == t
                            ? null
                            : (0, s.jsx)(h.NPJ, {
                                  theme: S,
                                  children: (e) =>
                                      (0, s.jsx)("div", {
                                          className: o()(E.sidebarRegion, e, {
                                              [E.flexFullWidth]: d.Fr,
                                              [E.hidden]: d.Fr && !1 === v,
                                          }),
                                          children: (0, s.jsx)(h.ChK, {
                                              className: E.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, s.jsxs)("nav", {
                                                  className: o()(E.sidebar, { [E.mobileSidebar]: d.Fr }),
                                                  children: [
                                                      d.Fr &&
                                                          (0, s.jsx)("div", {
                                                              className: E.mobileSidebarHeader,
                                                              children: P,
                                                          }),
                                                      t,
                                                  ],
                                              }),
                                          }),
                                      }),
                              })),
                    (function () {
                        let e = null != A && null != p && v,
                            t =
                                d.Fr &&
                                (0, s.jsxs)("div", {
                                    className: o()(E.mobileContentHeader, { [E.hideHamburger]: !e }),
                                    children: [e && (0, s.jsx)(c._, { onClick: A }), P],
                                });
                        if ("custom" === f)
                            return (0, s.jsxs)(u.F, {
                                component: "div",
                                className: E.contentRegion,
                                children: [t, n, !d.Fr && P, I()],
                            });
                        if ("scrollableCustom" === f)
                            return (0, s.jsxs)(u.F, {
                                component: "div",
                                className: E.contentRegion,
                                children: [
                                    t,
                                    (0, s.jsxs)(h.GtU, {
                                        className: o()(
                                            E.contentRegionScroller,
                                            N ? E.contentRegionHiddenSidebar : E.contentRegionShownSidebar,
                                        ),
                                        ref: R,
                                        children: [
                                            (0, s.jsx)(g.Provider, {
                                                value: b.current,
                                                children: (0, s.jsx)("div", {
                                                    ref: j,
                                                    className: E.contentColumnScrollable,
                                                    children: (0, s.jsx)(h.xpW, { containerRef: j, children: n }),
                                                }),
                                            }),
                                            !d.Fr && P,
                                        ],
                                    }),
                                    I(),
                                ],
                            });
                        let i = _[f ?? "default"];
                        return (0, s.jsxs)(u.F, {
                            component: "div",
                            className: o()(E.contentRegion, { [E.hidden]: d.Fr && !0 === v }),
                            children: [
                                (0, s.jsxs)("div", {
                                    className: E.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, s.jsxs)(h.GtU, {
                                            className: o()(
                                                E.contentRegionScroller,
                                                N ? E.contentRegionHiddenSidebar : E.contentRegionShownSidebar,
                                            ),
                                            ref: R,
                                            children: [
                                                (0, s.jsx)(g.Provider, {
                                                    value: b.current,
                                                    children: (0, s.jsx)(h.VQ0.Panel, {
                                                        id: l,
                                                        className: o()(E.contentColumn, E[i], {
                                                            [E.mobileContent]: d.Fr,
                                                        }),
                                                        ref: j,
                                                        style: d.Fr ? { maxWidth: window.innerWidth } : void 0,
                                                        children: N
                                                            ? n
                                                            : (0, s.jsx)(h.xpW, { containerRef: j, children: n }),
                                                    }),
                                                }),
                                                !d.Fr && P,
                                            ],
                                        }),
                                    ],
                                }),
                                I(),
                            ],
                        });
                    })(),
                ],
            }),
        ),
    });
};
