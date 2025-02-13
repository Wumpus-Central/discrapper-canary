n.d(t, {
    ID: () => S,
    NM: () => N,
    Xi: () => g,
    ZP: () => E,
    bT: () => _
});
var i,
    s,
    l,
    r,
    o = n(200651),
    a = n(192379),
    c = n(120356),
    d = n.n(c),
    u = n(642128),
    h = n(608863),
    m = n(873546),
    p = n(215569),
    f = n(481060),
    b = n(110924),
    C = n(358085),
    v = n(425493),
    x = n(76604);
let S = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    j = a.createContext(null);
class g extends (r = a.PureComponent) {
    renderContent() {
        let { scrollerRef: e, ...t } = this.props;
        return (0, o.jsx)('div', {
            className: x.customContainer,
            children: (0, o.jsx)(f._2F, {
                ...t,
                className: d()(x.customScroller, x.contentRegionScroller),
                ref: e
            })
        });
    }
    render() {
        return (0, o.jsx)('div', {
            className: x.customColumn,
            children: this.renderContent()
        });
    }
}
function N(e) {
    let { children: t } = e;
    return (0, o.jsx)('div', {
        className: x.customColumn,
        children: (0, o.jsx)('div', {
            className: x.customContainer,
            children: (0, o.jsx)(f.w0Z, {
                className: d()(x.customScroller, x.contentRegionScroller),
                children: t
            })
        })
    });
}
(s = {
    paddingTop: 60,
    paddingBottom: 60
}),
    (i = 'defaultProps') in g
        ? Object.defineProperty(g, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (g[i] = s);
var _ = (((l = {}).MINIMAL = 'minimal'), (l.CUSTOM = 'custom'), (l.DEFAULT = 'default'), (l.WIDE = 'wide'), (l.SCROLLABLE_CUSTOM = 'scrollableCustom'), l);
let P = Object.freeze({
    minimal: 'contentColumnMinimal',
    custom: 'contentColumnCustom',
    default: 'contentColumnDefault',
    wide: 'contentColumnWide',
    scrollableCustom: 'contentColumnCustom'
});
function R(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: i } = e,
        s = a.useRef(null);
    return null == i
        ? null
        : (0, o.jsx)('div', {
              className: d()(x.toolsContainer, {
                  [x.mobileToolsContainer]: t,
                  [x.mobileSidebarTools]: t,
                  [x.closeIconOnly]: !n,
                  [x.isMobileAndroid]: !n && !0 === (0, C.isAndroidWeb)()
              }),
              ref: s,
              children: (0, o.jsx)(f.JcV, {
                  containerRef: s,
                  children: (0, o.jsx)('div', {
                      className: x.tools,
                      children: (0, o.jsx)(v.Z, {
                          className: d()({ [x.mobileToolsCloseIcon]: t }),
                          closeAction: i,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
let E = function (e) {
    let { sidebar: t, content: n, notice: i, section: s, closeAction: l, sidebarTheme: r, contentType: c, scrollerRef: C, mobileSidebarOpen: v, toggleSidebar: S, hideSidebar: g = !1 } = e,
        N = a.useRef(null),
        _ = a.useRef(null),
        E = (0, b.Z)(s),
        y = (0, f.Yzy)(
            g,
            {
                from: {
                    position: 'absolute',
                    opacity: 0
                },
                enter: { opacity: 1 },
                reverse: g,
                config: u.config.stiff
            },
            'animate-always'
        ),
        I = a.useCallback(
            (e) => {
                (N.current = e), null != C && (C.current = e);
            },
            [C]
        );
    a.useLayoutEffect(() => {
        null != N.current && E !== s && N.current.scrollTo({ to: 0 });
    }, [s, E, N]);
    let T = (0, o.jsx)(R, {
        isMobile: m.tq,
        mobileSidebarOpen: v,
        closeAction: l
    });
    function w() {
        return null == i
            ? null
            : (0, o.jsx)(
                  f.oXn,
                  {
                      className: d()(x.noticeRegion, { [x.noticeRegionHiddenSidebar]: g }),
                      children: i
                  },
                  s
              );
    }
    return (0, o.jsx)(o.Fragment, {
        children: y((e, i) =>
            (0, o.jsxs)(u.animated.div, {
                style: e,
                className: x.standardSidebarView,
                children: [
                    !i &&
                        (null == t
                            ? null
                            : (0, o.jsx)(f.f6W, {
                                  theme: r,
                                  children: (e) =>
                                      (0, o.jsx)('div', {
                                          className: d()(x.sidebarRegion, e, {
                                              [x.flexFullWidth]: m.tq,
                                              [x.hidden]: m.tq && !1 === v
                                          }),
                                          children: (0, o.jsx)(f.h21, {
                                              className: x.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, o.jsxs)('nav', {
                                                  className: d()(x.sidebar, { [x.mobileSidebar]: m.tq }),
                                                  children: [
                                                      m.tq &&
                                                          (0, o.jsx)('div', {
                                                              className: x.mobileSidebarHeader,
                                                              children: T
                                                          }),
                                                      t
                                                  ]
                                              })
                                          })
                                      })
                              })),
                    (function () {
                        let e = null != S && null != l && v,
                            t =
                                m.tq &&
                                (0, o.jsxs)('div', {
                                    className: d()(x.mobileContentHeader, { [x.hideHamburger]: !e }),
                                    children: [e && (0, o.jsx)(h.r, { onClick: S }), T]
                                });
                        if ('custom' === c)
                            return (0, o.jsxs)(p.W, {
                                component: 'div',
                                className: x.contentRegion,
                                children: [t, n, !m.tq && T, w()]
                            });
                        if ('scrollableCustom' === c)
                            return (0, o.jsxs)(p.W, {
                                component: 'div',
                                className: x.contentRegion,
                                children: [
                                    t,
                                    (0, o.jsxs)(f.yWw, {
                                        className: d()(x.contentRegionScroller, g ? x.contentRegionHiddenSidebar : x.contentRegionShownSidebar),
                                        ref: I,
                                        children: [
                                            (0, o.jsx)(j.Provider, {
                                                value: N.current,
                                                children: n
                                            }),
                                            !m.tq && T
                                        ]
                                    }),
                                    w()
                                ]
                            });
                        let i = P[null != c ? c : 'default'];
                        return (0, o.jsxs)(p.W, {
                            component: 'div',
                            className: d()(x.contentRegion, { [x.hidden]: m.tq && !0 === v }),
                            children: [
                                (0, o.jsxs)('div', {
                                    className: x.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, o.jsxs)(f.yWw, {
                                            className: d()(x.contentRegionScroller, g ? x.contentRegionHiddenSidebar : x.contentRegionShownSidebar),
                                            ref: I,
                                            children: [
                                                (0, o.jsx)(j.Provider, {
                                                    value: N.current,
                                                    children: (0, o.jsx)(f.njP.Panel, {
                                                        id: s,
                                                        className: d()(x.contentColumn, x[i], { [x.mobileContent]: m.tq }),
                                                        ref: _,
                                                        style: m.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: g
                                                            ? n
                                                            : (0, o.jsx)(f.JcV, {
                                                                  containerRef: _,
                                                                  children: n
                                                              })
                                                    })
                                                }),
                                                !m.tq && T
                                            ]
                                        })
                                    ]
                                }),
                                w()
                            ]
                        });
                    })()
                ]
            })
        )
    });
};
