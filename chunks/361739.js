l.d(n, { Ay: () => y, Fq: () => N, Py: () => A, ic: () => F });
var i,
    r = l(477900),
    o = l(582128),
    t = l(503698),
    s = l.n(t),
    c = l(461376),
    a = l(359459),
    d = l(607399),
    u = l(868285),
    m = l(475825),
    h = l(259678),
    x = l(866323),
    b = l(871682),
    C = l(689175),
    f = l(761508),
    j = l(43990),
    R = l(475743),
    p = l(723702),
    S = l(684136),
    v = l(244362);
let N = { HEADER: "HEADER", DIVIDER: "DIVIDER", CUSTOM: "CUSTOM" },
    g = o.createContext(null);
class F extends o.PureComponent {
    static defaultProps = { paddingTop: 60, paddingBottom: 60 };
    renderContent() {
        let { scrollerRef: e, ...n } = this.props;
        return (0, r.jsx)("div", {
            className: v.customContainer,
            children: (0, r.jsx)(m.Ei, { ...n, className: s()(v.customScroller, v.contentRegionScroller), ref: e }),
        });
    }
    render() {
        return (0, r.jsx)("div", { className: v.customColumn, children: this.renderContent() });
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
function w(e) {
    let { isMobile: n, mobileSidebarOpen: l, closeAction: i } = e,
        t = o.useRef(null);
    return null == i
        ? null
        : (0, r.jsx)("div", {
              className: s()(v.toolsContainer, {
                  [v.mobileToolsContainer]: n,
                  [v.mobileSidebarTools]: n,
                  [v.closeIconOnly]: !l,
                  [v.isMobileAndroid]: !l && !0 === (0, p.isAndroidWeb)(),
              }),
              ref: t,
              children: (0, r.jsx)(h.xp, {
                  containerRef: t,
                  children: (0, r.jsx)("div", {
                      className: v.tools,
                      children: (0, r.jsx)(S.A, {
                          className: s()({ [v.mobileToolsCloseIcon]: n }),
                          closeAction: i,
                          keybind: "ESC",
                      }),
                  }),
              }),
          });
}
let y = function (e) {
    let {
            sidebar: n,
            content: l,
            notice: i,
            section: t,
            closeAction: m,
            sidebarTheme: p,
            contentType: S,
            scrollerRef: N,
            mobileSidebarOpen: F,
            toggleSidebar: A,
            hideSidebar: y = !1,
        } = e,
        T = o.useRef(null),
        D = o.useRef(null),
        I = (0, R.A)(t),
        M = (0, x.p)(
            y,
            { from: { position: "absolute", opacity: 0 }, enter: { opacity: 1 }, reverse: y, config: c.config.stiff },
            "animate-always",
        ),
        H = o.useCallback(
            (e) => {
                (T.current = e), null != N && (N.current = e);
            },
            [N],
        );
    o.useLayoutEffect(() => {
        null != T.current && I !== t && T.current.scrollTo({ to: 0 });
    }, [t, I, T]);
    let O = (0, r.jsx)(w, { isMobile: d.Fr, mobileSidebarOpen: F, closeAction: m });
    function k() {
        return (0, r.jsx)(
            u.F,
            {
                component: "div",
                children:
                    null != i &&
                    (0, r.jsx)(
                        b.F,
                        { className: s()(v.noticeRegion, { [v.noticeRegionHiddenSidebar]: y }), children: i },
                        t,
                    ),
            },
            "notice-transition-group",
        );
    }
    return (0, r.jsx)(r.Fragment, {
        children: M((e, i) =>
            (0, r.jsxs)(c.animated.div, {
                style: e,
                className: v.standardSidebarView,
                children: [
                    !i &&
                        (null == n
                            ? null
                            : (0, r.jsx)(j.N, {
                                  theme: p,
                                  children: (e) =>
                                      (0, r.jsx)("div", {
                                          className: s()(v.sidebarRegion, e, {
                                              [v.flexFullWidth]: d.Fr,
                                              [v.hidden]: d.Fr && !1 === F,
                                          }),
                                          children: (0, r.jsx)(C.Ch, {
                                              className: v.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, r.jsxs)("nav", {
                                                  className: s()(v.sidebar, { [v.mobileSidebar]: d.Fr }),
                                                  children: [
                                                      d.Fr &&
                                                          (0, r.jsx)("div", {
                                                              className: v.mobileSidebarHeader,
                                                              children: O,
                                                          }),
                                                      n,
                                                  ],
                                              }),
                                          }),
                                      }),
                              })),
                    (function () {
                        let e = null != A && null != m && F,
                            n =
                                d.Fr &&
                                (0, r.jsxs)("div", {
                                    className: s()(v.mobileContentHeader, { [v.hideHamburger]: !e }),
                                    children: [e && (0, r.jsx)(a._, { onClick: A }), O],
                                });
                        if ("custom" === S)
                            return (0, r.jsxs)("div", {
                                className: v.contentRegion,
                                children: [n, l, !d.Fr && O, k()],
                            });
                        if ("scrollableCustom" === S)
                            return (0, r.jsxs)("div", {
                                className: v.contentRegion,
                                children: [
                                    n,
                                    (0, r.jsxs)(C.Gt, {
                                        className: s()(
                                            v.contentRegionScroller,
                                            y ? v.contentRegionHiddenSidebar : v.contentRegionShownSidebar,
                                        ),
                                        ref: H,
                                        children: [
                                            (0, r.jsx)(g.Provider, {
                                                value: T.current,
                                                children: (0, r.jsx)("div", {
                                                    ref: D,
                                                    className: v.contentColumnScrollable,
                                                    children: (0, r.jsx)(h.xp, { containerRef: D, children: l }),
                                                }),
                                            }),
                                            !d.Fr && O,
                                        ],
                                    }),
                                    k(),
                                ],
                            });
                        let i = E[S ?? "default"];
                        return (0, r.jsxs)("div", {
                            className: s()(v.contentRegion, { [v.hidden]: d.Fr && !0 === F }),
                            children: [
                                n,
                                (0, r.jsxs)(C.Gt, {
                                    className: s()(
                                        v.contentRegionScroller,
                                        y ? v.contentRegionHiddenSidebar : v.contentRegionShownSidebar,
                                    ),
                                    ref: H,
                                    children: [
                                        (0, r.jsx)(g.Provider, {
                                            value: T.current,
                                            children: (0, r.jsx)(f.V.Panel, {
                                                id: t,
                                                className: s()(v.contentColumn, v[i], { [v.mobileContent]: d.Fr }),
                                                ref: D,
                                                style: d.Fr ? { maxWidth: window.innerWidth } : void 0,
                                                children: y ? l : (0, r.jsx)(h.xp, { containerRef: D, children: l }),
                                            }),
                                        }),
                                        !d.Fr && O,
                                    ],
                                }),
                                k(),
                            ],
                        });
                    })(),
                ],
            }),
        ),
    });
};
