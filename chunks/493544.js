s.d(t, {
    ID: () => S,
    NM: () => N,
    Xi: () => E,
    ZP: () => O,
    bT: () => j
});
var n,
    i,
    r,
    o,
    l = s(200651),
    a = s(192379),
    c = s(120356),
    u = s.n(c),
    d = s(642128),
    p = s(608863),
    f = s(873546),
    g = s(215569),
    x = s(481060),
    h = s(110924),
    m = s(358085),
    v = s(425493),
    b = s(670189);
let S = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    C = a.createContext(null);
class E extends (o = a.PureComponent) {
    renderContent() {
        let { scrollerRef: e, ...t } = this.props;
        return (0, l.jsx)('div', {
            className: b.customContainer,
            children: (0, l.jsx)(x._2F, {
                ...t,
                className: u()(b.customScroller, b.contentRegionScroller),
                ref: e
            })
        });
    }
    render() {
        return (0, l.jsx)('div', {
            className: b.customColumn,
            children: this.renderContent()
        });
    }
}
function N(e) {
    let { children: t } = e;
    return (0, l.jsx)('div', {
        className: b.customColumn,
        children: (0, l.jsx)('div', {
            className: b.customContainer,
            children: (0, l.jsx)(x.w0Z, {
                className: u()(b.customScroller, b.contentRegionScroller),
                children: t
            })
        })
    });
}
(i = {
    paddingTop: 60,
    paddingBottom: 60
}),
    (n = 'defaultProps') in E
        ? Object.defineProperty(E, n, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (E[n] = i);
var j = (((r = {}).MINIMAL = 'minimal'), (r.CUSTOM = 'custom'), (r.DEFAULT = 'default'), (r.WIDE = 'wide'), (r.SCROLLABLE_CUSTOM = 'scrollableCustom'), r);
let T = Object.freeze({
    minimal: 'contentColumnMinimal',
    custom: 'contentColumnCustom',
    default: 'contentColumnDefault',
    wide: 'contentColumnWide',
    scrollableCustom: 'contentColumnCustom'
});
function _(e) {
    let { isMobile: t, mobileSidebarOpen: s, closeAction: n } = e,
        i = a.useRef(null);
    return null == n
        ? null
        : (0, l.jsx)('div', {
              className: u()(b.toolsContainer, {
                  [b.mobileToolsContainer]: t,
                  [b.mobileSidebarTools]: t,
                  [b.closeIconOnly]: !s,
                  [b.isMobileAndroid]: !s && !0 === (0, m.isAndroidWeb)()
              }),
              ref: i,
              children: (0, l.jsx)(x.JcV, {
                  containerRef: i,
                  children: (0, l.jsx)('div', {
                      className: b.tools,
                      children: (0, l.jsx)(v.Z, {
                          className: u()({ [b.mobileToolsCloseIcon]: t }),
                          closeAction: n,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
let O = function (e) {
    let { sidebar: t, content: s, notice: n, section: i, closeAction: r, sidebarTheme: o, contentType: c, scrollerRef: m, mobileSidebarOpen: v, toggleSidebar: S, hideSidebar: E = !1 } = e,
        N = a.useRef(null),
        j = a.useRef(null),
        O = (0, h.Z)(i),
        L = (0, x.Yzy)(
            E,
            {
                from: {
                    position: 'absolute',
                    opacity: 0
                },
                enter: { opacity: 1 },
                reverse: E,
                config: d.config.stiff
            },
            'animate-always'
        ),
        P = a.useCallback(
            (e) => {
                (N.current = e), null != m && (m.current = e);
            },
            [m]
        );
    a.useLayoutEffect(() => {
        null != N.current && O !== i && N.current.scrollTo({ to: 0 });
    }, [i, O, N]);
    let R = (0, l.jsx)(_, {
        isMobile: f.tq,
        mobileSidebarOpen: v,
        closeAction: r
    });
    function I() {
        return null == n
            ? null
            : (0, l.jsx)(
                  x.oXn,
                  {
                      className: u()(b.noticeRegion, { [b.noticeRegionHiddenSidebar]: E }),
                      children: n
                  },
                  i
              );
    }
    return (0, l.jsx)(l.Fragment, {
        children: L((e, n) =>
            (0, l.jsxs)(d.animated.div, {
                style: e,
                className: b.standardSidebarView,
                children: [
                    !n &&
                        (null == t
                            ? null
                            : (0, l.jsx)(x.f6W, {
                                  theme: o,
                                  children: (e) =>
                                      (0, l.jsx)('div', {
                                          className: u()(b.sidebarRegion, e, {
                                              [b.flexFullWidth]: f.tq,
                                              [b.hidden]: f.tq && !1 === v
                                          }),
                                          children: (0, l.jsx)(x.h21, {
                                              className: b.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, l.jsxs)('nav', {
                                                  className: u()(b.sidebar, { [b.mobileSidebar]: f.tq }),
                                                  children: [
                                                      f.tq &&
                                                          (0, l.jsx)('div', {
                                                              className: b.mobileSidebarHeader,
                                                              children: R
                                                          }),
                                                      t
                                                  ]
                                              })
                                          })
                                      })
                              })),
                    (function () {
                        let e = null != S && null != r && v,
                            t =
                                f.tq &&
                                (0, l.jsxs)('div', {
                                    className: u()(b.mobileContentHeader, { [b.hideHamburger]: !e }),
                                    children: [e && (0, l.jsx)(p.r, { onClick: S }), R]
                                });
                        if ('custom' === c)
                            return (0, l.jsxs)(g.W, {
                                component: 'div',
                                className: b.contentRegion,
                                children: [t, s, !f.tq && R, I()]
                            });
                        if ('scrollableCustom' === c)
                            return (0, l.jsxs)(g.W, {
                                component: 'div',
                                className: b.contentRegion,
                                children: [
                                    t,
                                    (0, l.jsxs)(x.yWw, {
                                        className: u()(b.contentRegionScroller, E ? b.contentRegionHiddenSidebar : b.contentRegionShownSidebar),
                                        ref: P,
                                        children: [
                                            (0, l.jsx)(C.Provider, {
                                                value: N.current,
                                                children: s
                                            }),
                                            !f.tq && R
                                        ]
                                    }),
                                    I()
                                ]
                            });
                        let n = T[null != c ? c : 'default'];
                        return (0, l.jsxs)(g.W, {
                            component: 'div',
                            className: u()(b.contentRegion, { [b.hidden]: f.tq && !0 === v }),
                            children: [
                                (0, l.jsxs)('div', {
                                    className: b.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, l.jsxs)(x.yWw, {
                                            className: u()(b.contentRegionScroller, E ? b.contentRegionHiddenSidebar : b.contentRegionShownSidebar),
                                            ref: P,
                                            children: [
                                                (0, l.jsx)(C.Provider, {
                                                    value: N.current,
                                                    children: (0, l.jsx)(x.njP.Panel, {
                                                        id: i,
                                                        className: u()(b.contentColumn, b[n], { [b.mobileContent]: f.tq }),
                                                        ref: j,
                                                        style: f.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: E
                                                            ? s
                                                            : (0, l.jsx)(x.JcV, {
                                                                  containerRef: j,
                                                                  children: s
                                                              })
                                                    })
                                                }),
                                                !f.tq && R
                                            ]
                                        })
                                    ]
                                }),
                                I()
                            ]
                        });
                    })()
                ]
            })
        )
    });
};
