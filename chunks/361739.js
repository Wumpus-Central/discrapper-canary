n.d(t, { Ay: () => T, Fq: () => N, Py: () => A, ic: () => R });
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
    m = n(187322),
    p = n(866323),
    b = n(871682),
    f = n(689175),
    S = n(761508),
    x = n(43990),
    j = n(475743),
    g = n(723702),
    v = n(684136),
    C = n(515810);
let N = { HEADER: "HEADER", DIVIDER: "DIVIDER", CUSTOM: "CUSTOM" },
    _ = l.createContext(null);
class R extends l.PureComponent {
    static defaultProps = { paddingTop: 60, paddingBottom: 60 };
    renderContent() {
        let { scrollerRef: e, ...t } = this.props;
        return (0, s.jsx)("div", {
            className: C.customContainer,
            children: (0, s.jsx)(h.Ei, { ...t, className: o()(C.customScroller, C.contentRegionScroller), ref: e }),
        });
    }
    render() {
        return (0, s.jsx)("div", { className: C.customColumn, children: this.renderContent() });
    }
}
var A =
    (((i = {}).MINIMAL = "minimal"),
    (i.CUSTOM = "custom"),
    (i.DEFAULT = "default"),
    (i.WIDE = "wide"),
    (i.SCROLLABLE_CUSTOM = "scrollableCustom"),
    i);
let E = Object.freeze({
    minimal: "contentColumnMinimal",
    custom: "contentColumnCustom",
    default: "contentColumnDefault",
    wide: "contentColumnWide",
    scrollableCustom: "contentColumnCustom",
});
function I(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: i } = e,
        r = l.useRef(null);
    return null == i
        ? null
        : (0, s.jsx)("div", {
              className: o()(C.toolsContainer, {
                  [C.mobileToolsContainer]: t,
                  [C.mobileSidebarTools]: t,
                  [C.closeIconOnly]: !n,
                  [C.isMobileAndroid]: !n && !0 === (0, g.isAndroidWeb)(),
              }),
              ref: r,
              children: (0, s.jsx)(m.xp, {
                  containerRef: r,
                  children: (0, s.jsx)("div", {
                      className: C.tools,
                      children: (0, s.jsx)(v.A, {
                          className: o()({ [C.mobileToolsCloseIcon]: t }),
                          closeAction: i,
                          keybind: "ESC",
                      }),
                  }),
              }),
          });
}
let T = function (e) {
    let {
            sidebar: t,
            content: n,
            notice: i,
            section: r,
            closeAction: h,
            sidebarTheme: g,
            contentType: v,
            scrollerRef: N,
            mobileSidebarOpen: R,
            toggleSidebar: A,
            hideSidebar: T = !1,
        } = e,
        y = l.useRef(null),
        O = l.useRef(null),
        P = (0, j.A)(r),
        F = (0, p.p)(
            T,
            { from: { position: "absolute", opacity: 0 }, enter: { opacity: 1 }, reverse: T, config: a.config.stiff },
            "animate-always",
        ),
        M = l.useCallback(
            (e) => {
                (y.current = e), null != N && (N.current = e);
            },
            [N],
        );
    l.useLayoutEffect(() => {
        null != y.current && P !== r && y.current.scrollTo({ to: 0 });
    }, [r, P, y]);
    let D = (0, s.jsx)(I, { isMobile: d.Fr, mobileSidebarOpen: R, closeAction: h });
    function U() {
        return (0, s.jsx)(
            u.F,
            {
                component: "div",
                children:
                    null != i &&
                    (0, s.jsx)(
                        b.F,
                        { className: o()(C.noticeRegion, { [C.noticeRegionHiddenSidebar]: T }), children: i },
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
                className: C.standardSidebarView,
                children: [
                    !i &&
                        (null == t
                            ? null
                            : (0, s.jsx)(x.N, {
                                  theme: g,
                                  children: (e) =>
                                      (0, s.jsx)("div", {
                                          className: o()(C.sidebarRegion, e, {
                                              [C.flexFullWidth]: d.Fr,
                                              [C.hidden]: d.Fr && !1 === R,
                                          }),
                                          children: (0, s.jsx)(f.Ch, {
                                              className: C.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, s.jsxs)("nav", {
                                                  className: o()(C.sidebar, { [C.mobileSidebar]: d.Fr }),
                                                  children: [
                                                      d.Fr &&
                                                          (0, s.jsx)("div", {
                                                              className: C.mobileSidebarHeader,
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
                                    className: o()(C.mobileContentHeader, { [C.hideHamburger]: !e }),
                                    children: [e && (0, s.jsx)(c._, { onClick: A }), D],
                                });
                        if ("custom" === v)
                            return (0, s.jsxs)("div", {
                                className: C.contentRegion,
                                children: [t, n, !d.Fr && D, U()],
                            });
                        if ("scrollableCustom" === v)
                            return (0, s.jsxs)("div", {
                                className: C.contentRegion,
                                children: [
                                    t,
                                    (0, s.jsxs)(f.Gt, {
                                        className: o()(
                                            C.contentRegionScroller,
                                            T ? C.contentRegionHiddenSidebar : C.contentRegionShownSidebar,
                                        ),
                                        ref: M,
                                        children: [
                                            (0, s.jsx)(_.Provider, {
                                                value: y.current,
                                                children: (0, s.jsx)("div", {
                                                    ref: O,
                                                    className: C.contentColumnScrollable,
                                                    children: (0, s.jsx)(m.xp, { containerRef: O, children: n }),
                                                }),
                                            }),
                                            !d.Fr && D,
                                        ],
                                    }),
                                    U(),
                                ],
                            });
                        let i = E[v ?? "default"];
                        return (0, s.jsxs)("div", {
                            className: o()(C.contentRegion, { [C.hidden]: d.Fr && !0 === R }),
                            children: [
                                t,
                                (0, s.jsxs)(f.Gt, {
                                    className: o()(
                                        C.contentRegionScroller,
                                        T ? C.contentRegionHiddenSidebar : C.contentRegionShownSidebar,
                                    ),
                                    ref: M,
                                    children: [
                                        (0, s.jsx)(_.Provider, {
                                            value: y.current,
                                            children: (0, s.jsx)(S.V.Panel, {
                                                id: r,
                                                className: o()(C.contentColumn, C[i], { [C.mobileContent]: d.Fr }),
                                                ref: O,
                                                style: d.Fr ? { maxWidth: window.innerWidth } : void 0,
                                                children: T ? n : (0, s.jsx)(m.xp, { containerRef: O, children: n }),
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
