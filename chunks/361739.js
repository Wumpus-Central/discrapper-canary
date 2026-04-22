n.d(t, { Ay: () => O, Fq: () => _, Py: () => y, gJ: () => E, ic: () => C });
var i,
    s = n(627968),
    r = n(64700),
    l = n(503698),
    o = n.n(l),
    a = n(517738),
    c = n(359459),
    d = n(607399),
    u = n(73939),
    h = n(475825),
    m = n(573613),
    p = n(187322),
    x = n(866323),
    b = n(871682),
    S = n(599319),
    f = n(761508),
    g = n(43990),
    j = n(475743),
    v = n(723702),
    N = n(684136),
    A = n(515810);
let _ = { HEADER: "HEADER", DIVIDER: "DIVIDER", CUSTOM: "CUSTOM" },
    T = r.createContext(null);
class C extends r.PureComponent {
    static defaultProps = { paddingTop: 60, paddingBottom: 60 };
    renderContent() {
        let { scrollerRef: e, ...t } = this.props;
        return (0, s.jsx)("div", {
            className: A.customContainer,
            children: (0, s.jsx)(h.Ei, { ...t, className: o()(A.customScroller, A.contentRegionScroller), ref: e }),
        });
    }
    render() {
        return (0, s.jsx)("div", { className: A.customColumn, children: this.renderContent() });
    }
}
function E(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", {
        className: A.customColumn,
        children: (0, s.jsx)("div", {
            className: A.customContainer,
            children: (0, s.jsx)(m.Ar, { className: o()(A.customScroller, A.contentRegionScroller), children: t }),
        }),
    });
}
var y =
    (((i = {}).MINIMAL = "minimal"),
    (i.CUSTOM = "custom"),
    (i.DEFAULT = "default"),
    (i.WIDE = "wide"),
    (i.SCROLLABLE_CUSTOM = "scrollableCustom"),
    i);
let R = Object.freeze({
    minimal: "contentColumnMinimal",
    custom: "contentColumnCustom",
    default: "contentColumnDefault",
    wide: "contentColumnWide",
    scrollableCustom: "contentColumnCustom",
});
function I(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: i } = e,
        l = r.useRef(null);
    return null == i
        ? null
        : (0, s.jsx)("div", {
              className: o()(A.toolsContainer, {
                  [A.mobileToolsContainer]: t,
                  [A.mobileSidebarTools]: t,
                  [A.closeIconOnly]: !n,
                  [A.isMobileAndroid]: !n && !0 === (0, v.isAndroidWeb)(),
              }),
              ref: l,
              children: (0, s.jsx)(p.xp, {
                  containerRef: l,
                  children: (0, s.jsx)("div", {
                      className: A.tools,
                      children: (0, s.jsx)(N.A, {
                          className: o()({ [A.mobileToolsCloseIcon]: t }),
                          closeAction: i,
                          keybind: "ESC",
                      }),
                  }),
              }),
          });
}
let O = function (e) {
    let {
            sidebar: t,
            content: n,
            notice: i,
            section: l,
            closeAction: h,
            sidebarTheme: m,
            contentType: v,
            scrollerRef: N,
            mobileSidebarOpen: _,
            toggleSidebar: C,
            hideSidebar: E = !1,
        } = e,
        y = r.useRef(null),
        O = r.useRef(null),
        M = (0, j.A)(l),
        P = (0, x.p)(
            E,
            { from: { position: "absolute", opacity: 0 }, enter: { opacity: 1 }, reverse: E, config: a.config.stiff },
            "animate-always",
        ),
        F = r.useCallback(
            (e) => {
                (y.current = e), null != N && (N.current = e);
            },
            [N],
        );
    r.useLayoutEffect(() => {
        null != y.current && M !== l && y.current.scrollTo({ to: 0 });
    }, [l, M, y]);
    let w = (0, s.jsx)(I, { isMobile: d.Fr, mobileSidebarOpen: _, closeAction: h });
    function D() {
        return (0, s.jsx)(
            u.F,
            {
                component: "div",
                children:
                    null != i &&
                    (0, s.jsx)(
                        b.F,
                        { className: o()(A.noticeRegion, { [A.noticeRegionHiddenSidebar]: E }), children: i },
                        l,
                    ),
            },
            "notice-transition-group",
        );
    }
    return (0, s.jsx)(s.Fragment, {
        children: P((e, i) =>
            (0, s.jsxs)(a.animated.div, {
                style: e,
                className: A.standardSidebarView,
                children: [
                    !i &&
                        (null == t
                            ? null
                            : (0, s.jsx)(g.N, {
                                  theme: m,
                                  children: (e) =>
                                      (0, s.jsx)("div", {
                                          className: o()(A.sidebarRegion, e, {
                                              [A.flexFullWidth]: d.Fr,
                                              [A.hidden]: d.Fr && !1 === _,
                                          }),
                                          children: (0, s.jsx)(S.Ch, {
                                              className: A.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, s.jsxs)("nav", {
                                                  className: o()(A.sidebar, { [A.mobileSidebar]: d.Fr }),
                                                  children: [
                                                      d.Fr &&
                                                          (0, s.jsx)("div", {
                                                              className: A.mobileSidebarHeader,
                                                              children: w,
                                                          }),
                                                      t,
                                                  ],
                                              }),
                                          }),
                                      }),
                              })),
                    (function () {
                        let e = null != C && null != h && _,
                            t =
                                d.Fr &&
                                (0, s.jsxs)("div", {
                                    className: o()(A.mobileContentHeader, { [A.hideHamburger]: !e }),
                                    children: [e && (0, s.jsx)(c._, { onClick: C }), w],
                                });
                        if ("custom" === v)
                            return (0, s.jsxs)("div", {
                                className: A.contentRegion,
                                children: [t, n, !d.Fr && w, D()],
                            });
                        if ("scrollableCustom" === v)
                            return (0, s.jsxs)("div", {
                                className: A.contentRegion,
                                children: [
                                    t,
                                    (0, s.jsxs)(S.Gt, {
                                        className: o()(
                                            A.contentRegionScroller,
                                            E ? A.contentRegionHiddenSidebar : A.contentRegionShownSidebar,
                                        ),
                                        ref: F,
                                        children: [
                                            (0, s.jsx)(T.Provider, {
                                                value: y.current,
                                                children: (0, s.jsx)("div", {
                                                    ref: O,
                                                    className: A.contentColumnScrollable,
                                                    children: (0, s.jsx)(p.xp, { containerRef: O, children: n }),
                                                }),
                                            }),
                                            !d.Fr && w,
                                        ],
                                    }),
                                    D(),
                                ],
                            });
                        let i = R[v ?? "default"];
                        return (0, s.jsxs)("div", {
                            className: o()(A.contentRegion, { [A.hidden]: d.Fr && !0 === _ }),
                            children: [
                                t,
                                (0, s.jsxs)(S.Gt, {
                                    className: o()(
                                        A.contentRegionScroller,
                                        E ? A.contentRegionHiddenSidebar : A.contentRegionShownSidebar,
                                    ),
                                    ref: F,
                                    children: [
                                        (0, s.jsx)(T.Provider, {
                                            value: y.current,
                                            children: (0, s.jsx)(f.V.Panel, {
                                                id: l,
                                                className: o()(A.contentColumn, A[i], { [A.mobileContent]: d.Fr }),
                                                ref: O,
                                                style: d.Fr ? { maxWidth: window.innerWidth } : void 0,
                                                children: E ? n : (0, s.jsx)(p.xp, { containerRef: O, children: n }),
                                            }),
                                        }),
                                        !d.Fr && w,
                                    ],
                                }),
                                D(),
                            ],
                        });
                    })(),
                ],
            }),
        ),
    });
};
