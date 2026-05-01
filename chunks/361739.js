n.d(t, { Ay: () => O, Fq: () => R, Py: () => I, gJ: () => E, ic: () => A });
var i,
    s = n(627968),
    l = n(64700),
    r = n(503698),
    o = n.n(r),
    a = n(785651),
    c = n(359459),
    d = n(607399),
    u = n(868285),
    h = n(475825),
    m = n(364522),
    p = n(187322),
    b = n(866323),
    S = n(871682),
    f = n(689175),
    x = n(761508),
    j = n(43990),
    g = n(475743),
    v = n(723702),
    C = n(684136),
    N = n(515810);
let R = { HEADER: "HEADER", DIVIDER: "DIVIDER", CUSTOM: "CUSTOM" },
    _ = l.createContext(null);
class A extends l.PureComponent {
    static defaultProps = { paddingTop: 60, paddingBottom: 60 };
    renderContent() {
        let { scrollerRef: e, ...t } = this.props;
        return (0, s.jsx)("div", {
            className: N.customContainer,
            children: (0, s.jsx)(h.Ei, { ...t, className: o()(N.customScroller, N.contentRegionScroller), ref: e }),
        });
    }
    render() {
        return (0, s.jsx)("div", { className: N.customColumn, children: this.renderContent() });
    }
}
function E(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", {
        className: N.customColumn,
        children: (0, s.jsx)("div", {
            className: N.customContainer,
            children: (0, s.jsx)(m.Ar, { className: o()(N.customScroller, N.contentRegionScroller), children: t }),
        }),
    });
}
var I =
    (((i = {}).MINIMAL = "minimal"),
    (i.CUSTOM = "custom"),
    (i.DEFAULT = "default"),
    (i.WIDE = "wide"),
    (i.SCROLLABLE_CUSTOM = "scrollableCustom"),
    i);
let T = Object.freeze({
    minimal: "contentColumnMinimal",
    custom: "contentColumnCustom",
    default: "contentColumnDefault",
    wide: "contentColumnWide",
    scrollableCustom: "contentColumnCustom",
});
function y(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: i } = e,
        r = l.useRef(null);
    return null == i
        ? null
        : (0, s.jsx)("div", {
              className: o()(N.toolsContainer, {
                  [N.mobileToolsContainer]: t,
                  [N.mobileSidebarTools]: t,
                  [N.closeIconOnly]: !n,
                  [N.isMobileAndroid]: !n && !0 === (0, v.isAndroidWeb)(),
              }),
              ref: r,
              children: (0, s.jsx)(p.xp, {
                  containerRef: r,
                  children: (0, s.jsx)("div", {
                      className: N.tools,
                      children: (0, s.jsx)(C.A, {
                          className: o()({ [N.mobileToolsCloseIcon]: t }),
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
            section: r,
            closeAction: h,
            sidebarTheme: m,
            contentType: v,
            scrollerRef: C,
            mobileSidebarOpen: R,
            toggleSidebar: A,
            hideSidebar: E = !1,
        } = e,
        I = l.useRef(null),
        O = l.useRef(null),
        P = (0, g.A)(r),
        F = (0, b.p)(
            E,
            { from: { position: "absolute", opacity: 0 }, enter: { opacity: 1 }, reverse: E, config: a.config.stiff },
            "animate-always",
        ),
        M = l.useCallback(
            (e) => {
                (I.current = e), null != C && (C.current = e);
            },
            [C],
        );
    l.useLayoutEffect(() => {
        null != I.current && P !== r && I.current.scrollTo({ to: 0 });
    }, [r, P, I]);
    let D = (0, s.jsx)(y, { isMobile: d.Fr, mobileSidebarOpen: R, closeAction: h });
    function U() {
        return (0, s.jsx)(
            u.F,
            {
                component: "div",
                children:
                    null != i &&
                    (0, s.jsx)(
                        S.F,
                        { className: o()(N.noticeRegion, { [N.noticeRegionHiddenSidebar]: E }), children: i },
                        r,
                    ),
            },
            "notice-transition-group",
        );
    }
    return (0, s.jsx)(s.Fragment, {
        children: F((e, i) =>
            (0, s.jsxs)(a.animated.div, {
                style: e,
                className: N.standardSidebarView,
                children: [
                    !i &&
                        (null == t
                            ? null
                            : (0, s.jsx)(j.N, {
                                  theme: m,
                                  children: (e) =>
                                      (0, s.jsx)("div", {
                                          className: o()(N.sidebarRegion, e, {
                                              [N.flexFullWidth]: d.Fr,
                                              [N.hidden]: d.Fr && !1 === R,
                                          }),
                                          children: (0, s.jsx)(f.Ch, {
                                              className: N.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, s.jsxs)("nav", {
                                                  className: o()(N.sidebar, { [N.mobileSidebar]: d.Fr }),
                                                  children: [
                                                      d.Fr &&
                                                          (0, s.jsx)("div", {
                                                              className: N.mobileSidebarHeader,
                                                              children: D,
                                                          }),
                                                      t,
                                                  ],
                                              }),
                                          }),
                                      }),
                              })),
                    (function () {
                        let e = null != A && null != h && R,
                            t =
                                d.Fr &&
                                (0, s.jsxs)("div", {
                                    className: o()(N.mobileContentHeader, { [N.hideHamburger]: !e }),
                                    children: [e && (0, s.jsx)(c._, { onClick: A }), D],
                                });
                        if ("custom" === v)
                            return (0, s.jsxs)("div", {
                                className: N.contentRegion,
                                children: [t, n, !d.Fr && D, U()],
                            });
                        if ("scrollableCustom" === v)
                            return (0, s.jsxs)("div", {
                                className: N.contentRegion,
                                children: [
                                    t,
                                    (0, s.jsxs)(f.Gt, {
                                        className: o()(
                                            N.contentRegionScroller,
                                            E ? N.contentRegionHiddenSidebar : N.contentRegionShownSidebar,
                                        ),
                                        ref: M,
                                        children: [
                                            (0, s.jsx)(_.Provider, {
                                                value: I.current,
                                                children: (0, s.jsx)("div", {
                                                    ref: O,
                                                    className: N.contentColumnScrollable,
                                                    children: (0, s.jsx)(p.xp, { containerRef: O, children: n }),
                                                }),
                                            }),
                                            !d.Fr && D,
                                        ],
                                    }),
                                    U(),
                                ],
                            });
                        let i = T[v ?? "default"];
                        return (0, s.jsxs)("div", {
                            className: o()(N.contentRegion, { [N.hidden]: d.Fr && !0 === R }),
                            children: [
                                t,
                                (0, s.jsxs)(f.Gt, {
                                    className: o()(
                                        N.contentRegionScroller,
                                        E ? N.contentRegionHiddenSidebar : N.contentRegionShownSidebar,
                                    ),
                                    ref: M,
                                    children: [
                                        (0, s.jsx)(_.Provider, {
                                            value: I.current,
                                            children: (0, s.jsx)(x.V.Panel, {
                                                id: r,
                                                className: o()(N.contentColumn, N[i], { [N.mobileContent]: d.Fr }),
                                                ref: O,
                                                style: d.Fr ? { maxWidth: window.innerWidth } : void 0,
                                                children: E ? n : (0, s.jsx)(p.xp, { containerRef: O, children: n }),
                                            }),
                                        }),
                                        !d.Fr && D,
                                    ],
                                }),
                                U(),
                            ],
                        });
                    })(),
                ],
            }),
        ),
    });
};
