s.d(t, {
    ID: () => C,
    NM: () => j,
    Xi: () => E,
    ZP: () => R,
    bT: () => N
});
var n,
    i,
    r,
    l,
    o = s(200651),
    a = s(192379),
    c = s(120356),
    u = s.n(c),
    d = s(642128),
    f = s(608863),
    p = s(873546),
    g = s(215569),
    x = s(481060),
    h = s(110924),
    m = s(358085),
    v = s(425493),
    b = s(76604);
let C = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    S = a.createContext(null);
class E extends (l = a.PureComponent) {
    renderContent() {
        let { scrollerRef: e, ...t } = this.props;
        return (0, o.jsx)('div', {
            className: b.customContainer,
            children: (0, o.jsx)(x._2F, {
                ...t,
                className: u()(b.customScroller, b.contentRegionScroller),
                ref: e
            })
        });
    }
    render() {
        return (0, o.jsx)('div', {
            className: b.customColumn,
            children: this.renderContent()
        });
    }
}
function j(e) {
    let { children: t } = e;
    return (0, o.jsx)('div', {
        className: b.customColumn,
        children: (0, o.jsx)('div', {
            className: b.customContainer,
            children: (0, o.jsx)(x.w0Z, {
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
var N = (((r = {}).MINIMAL = 'minimal'), (r.CUSTOM = 'custom'), (r.DEFAULT = 'default'), (r.WIDE = 'wide'), (r.SCROLLABLE_CUSTOM = 'scrollableCustom'), r);
let _ = Object.freeze({
    minimal: 'contentColumnMinimal',
    custom: 'contentColumnCustom',
    default: 'contentColumnDefault',
    wide: 'contentColumnWide',
    scrollableCustom: 'contentColumnCustom'
});
function T(e) {
    let { isMobile: t, mobileSidebarOpen: s, closeAction: n } = e,
        i = a.useRef(null);
    return null == n
        ? null
        : (0, o.jsx)('div', {
              className: u()(b.toolsContainer, {
                  [b.mobileToolsContainer]: t,
                  [b.mobileSidebarTools]: t,
                  [b.closeIconOnly]: !s,
                  [b.isMobileAndroid]: !s && !0 === (0, m.isAndroidWeb)()
              }),
              ref: i,
              children: (0, o.jsx)(x.JcV, {
                  containerRef: i,
                  children: (0, o.jsx)('div', {
                      className: b.tools,
                      children: (0, o.jsx)(v.Z, {
                          className: u()({ [b.mobileToolsCloseIcon]: t }),
                          closeAction: n,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
let R = function (e) {
    let { sidebar: t, content: s, notice: n, section: i, closeAction: r, sidebarTheme: l, contentType: c, scrollerRef: m, mobileSidebarOpen: v, toggleSidebar: C, hideSidebar: E = !1 } = e,
        j = a.useRef(null),
        N = a.useRef(null),
        R = (0, h.Z)(i),
        P = (0, x.Yzy)(
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
        O = a.useCallback(
            (e) => {
                (j.current = e), null != m && (m.current = e);
            },
            [m]
        );
    a.useLayoutEffect(() => {
        null != j.current && R !== i && j.current.scrollTo({ to: 0 });
    }, [i, R, j]);
    let L = (0, o.jsx)(T, {
        isMobile: p.tq,
        mobileSidebarOpen: v,
        closeAction: r
    });
    function I() {
        return null == n
            ? null
            : (0, o.jsx)(
                  x.oXn,
                  {
                      className: u()(b.noticeRegion, { [b.noticeRegionHiddenSidebar]: E }),
                      children: n
                  },
                  i
              );
    }
    return (0, o.jsx)(o.Fragment, {
        children: P((e, n) =>
            (0, o.jsxs)(d.animated.div, {
                style: e,
                className: b.standardSidebarView,
                children: [
                    !n &&
                        (null == t
                            ? null
                            : (0, o.jsx)(x.f6W, {
                                  theme: l,
                                  children: (e) =>
                                      (0, o.jsx)('div', {
                                          className: u()(b.sidebarRegion, e, {
                                              [b.flexFullWidth]: p.tq,
                                              [b.hidden]: p.tq && !1 === v
                                          }),
                                          children: (0, o.jsx)(x.h21, {
                                              className: b.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, o.jsxs)('nav', {
                                                  className: u()(b.sidebar, { [b.mobileSidebar]: p.tq }),
                                                  children: [
                                                      p.tq &&
                                                          (0, o.jsx)('div', {
                                                              className: b.mobileSidebarHeader,
                                                              children: L
                                                          }),
                                                      t
                                                  ]
                                              })
                                          })
                                      })
                              })),
                    (function () {
                        let e = null != C && null != r && v,
                            t =
                                p.tq &&
                                (0, o.jsxs)('div', {
                                    className: u()(b.mobileContentHeader, { [b.hideHamburger]: !e }),
                                    children: [e && (0, o.jsx)(f.r, { onClick: C }), L]
                                });
                        if ('custom' === c)
                            return (0, o.jsxs)(g.W, {
                                component: 'div',
                                className: b.contentRegion,
                                children: [t, s, !p.tq && L, I()]
                            });
                        if ('scrollableCustom' === c)
                            return (0, o.jsxs)(g.W, {
                                component: 'div',
                                className: b.contentRegion,
                                children: [
                                    t,
                                    (0, o.jsxs)(x.yWw, {
                                        className: u()(b.contentRegionScroller, E ? b.contentRegionHiddenSidebar : b.contentRegionShownSidebar),
                                        ref: O,
                                        children: [
                                            (0, o.jsx)(S.Provider, {
                                                value: j.current,
                                                children: (0, o.jsx)('div', {
                                                    ref: N,
                                                    className: b.contentColumnScrollable,
                                                    children: (0, o.jsx)(x.JcV, {
                                                        containerRef: N,
                                                        children: s
                                                    })
                                                })
                                            }),
                                            !p.tq && L
                                        ]
                                    }),
                                    I()
                                ]
                            });
                        let n = _[null != c ? c : 'default'];
                        return (0, o.jsxs)(g.W, {
                            component: 'div',
                            className: u()(b.contentRegion, { [b.hidden]: p.tq && !0 === v }),
                            children: [
                                (0, o.jsxs)('div', {
                                    className: b.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, o.jsxs)(x.yWw, {
                                            className: u()(b.contentRegionScroller, E ? b.contentRegionHiddenSidebar : b.contentRegionShownSidebar),
                                            ref: O,
                                            children: [
                                                (0, o.jsx)(S.Provider, {
                                                    value: j.current,
                                                    children: (0, o.jsx)(x.njP.Panel, {
                                                        id: i,
                                                        className: u()(b.contentColumn, b[n], { [b.mobileContent]: p.tq }),
                                                        ref: N,
                                                        style: p.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: E
                                                            ? s
                                                            : (0, o.jsx)(x.JcV, {
                                                                  containerRef: N,
                                                                  children: s
                                                              })
                                                    })
                                                }),
                                                !p.tq && L
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
