n.d(t, {
    ID: () => j,
    NM: () => S,
    Xi: () => v,
    ZP: () => C,
    bT: () => E
});
var r,
    i,
    l = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    c = n(66546),
    u = n(608863),
    d = n(873546),
    f = n(215569),
    p = n(481060),
    b = n(110924),
    O = n(358085),
    h = n(425493),
    m = n(319586);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let j = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    y = s.createContext(null);
class v extends (i = s.PureComponent) {
    renderContent() {
        var e, t;
        let n = this.props,
            { scrollerRef: r } = n,
            i = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(n, ['scrollerRef']);
        return (0, l.jsx)('div', {
            className: m.customContainer,
            children: (0, l.jsx)(
                p._2F,
                ((e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                g(e, t, n[t]);
                            }));
                    }
                    return e;
                })({}, i)),
                (t = t =
                    {
                        className: a()(m.customScroller, m.contentRegionScroller),
                        ref: r
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(t)).forEach(function (n) {
                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                      }),
                e)
            )
        });
    }
    render() {
        return (0, l.jsx)('div', {
            className: m.customColumn,
            children: this.renderContent()
        });
    }
}
function S(e) {
    let { children: t } = e;
    return (0, l.jsx)('div', {
        className: m.customColumn,
        children: (0, l.jsx)('div', {
            className: m.customContainer,
            children: (0, l.jsx)(p.w0Z, {
                className: a()(m.customScroller, m.contentRegionScroller),
                children: t
            })
        })
    });
}
g(v, 'defaultProps', {
    paddingTop: 60,
    paddingBottom: 60
});
var E = (((r = {}).MINIMAL = 'minimal'), (r.CUSTOM = 'custom'), (r.DEFAULT = 'default'), (r.WIDE = 'wide'), (r.SCROLLABLE_CUSTOM = 'scrollableCustom'), r);
let x = Object.freeze({
    minimal: 'contentColumnMinimal',
    custom: 'contentColumnCustom',
    default: 'contentColumnDefault',
    wide: 'contentColumnWide',
    scrollableCustom: 'contentColumnCustom'
});
function P(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: r } = e,
        i = s.useRef(null);
    return null == r
        ? null
        : (0, l.jsx)('div', {
              className: a()(m.toolsContainer, {
                  [m.mobileToolsContainer]: t,
                  [m.mobileSidebarTools]: t,
                  [m.closeIconOnly]: !n,
                  [m.isMobileAndroid]: !n && !0 === (0, O.isAndroidWeb)()
              }),
              ref: i,
              children: (0, l.jsx)(p.JcV, {
                  containerRef: i,
                  children: (0, l.jsx)('div', {
                      className: m.tools,
                      children: (0, l.jsx)(h.Z, {
                          className: a()({ [m.mobileToolsCloseIcon]: t }),
                          closeAction: r,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
let C = function (e) {
    let { sidebar: t, content: n, notice: r, section: i, closeAction: o, sidebarTheme: O, contentType: h, scrollerRef: g, mobileSidebarOpen: j, toggleSidebar: v, hideSidebar: S = !1 } = e,
        E = s.useRef(null),
        C = s.useRef(null),
        w = (0, b.Z)(i),
        N = (0, p.Yzy)(
            S,
            {
                from: {
                    position: 'absolute',
                    opacity: 0
                },
                enter: { opacity: 1 },
                reverse: S,
                config: c.config.stiff
            },
            'animate-always'
        ),
        _ = s.useCallback(
            (e) => {
                ((E.current = e), null != g && (g.current = e));
            },
            [g]
        );
    s.useLayoutEffect(() => {
        null != E.current && w !== i && E.current.scrollTo({ to: 0 });
    }, [i, w, E]);
    let T = (0, l.jsx)(P, {
        isMobile: d.tq,
        mobileSidebarOpen: j,
        closeAction: o
    });
    function R() {
        return null == r
            ? null
            : (0, l.jsx)(
                  p.oXn,
                  {
                      className: a()(m.noticeRegion, { [m.noticeRegionHiddenSidebar]: S }),
                      children: r
                  },
                  i
              );
    }
    return (0, l.jsx)(l.Fragment, {
        children: N((e, r) =>
            (0, l.jsxs)(c.animated.div, {
                style: e,
                className: m.standardSidebarView,
                children: [
                    !r &&
                        (null == t
                            ? null
                            : (0, l.jsx)(p.f6W, {
                                  theme: O,
                                  children: (e) =>
                                      (0, l.jsx)('div', {
                                          className: a()(m.sidebarRegion, e, {
                                              [m.flexFullWidth]: d.tq,
                                              [m.hidden]: d.tq && !1 === j
                                          }),
                                          children: (0, l.jsx)(p.h21, {
                                              className: m.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, l.jsxs)('nav', {
                                                  className: a()(m.sidebar, { [m.mobileSidebar]: d.tq }),
                                                  children: [
                                                      d.tq &&
                                                          (0, l.jsx)('div', {
                                                              className: m.mobileSidebarHeader,
                                                              children: T
                                                          }),
                                                      t
                                                  ]
                                              })
                                          })
                                      })
                              })),
                    (function () {
                        let e = null != v && null != o && j,
                            t =
                                d.tq &&
                                (0, l.jsxs)('div', {
                                    className: a()(m.mobileContentHeader, { [m.hideHamburger]: !e }),
                                    children: [e && (0, l.jsx)(u.r, { onClick: v }), T]
                                });
                        if ('custom' === h)
                            return (0, l.jsxs)(f.W, {
                                component: 'div',
                                className: m.contentRegion,
                                children: [t, n, !d.tq && T, R()]
                            });
                        if ('scrollableCustom' === h)
                            return (0, l.jsxs)(f.W, {
                                component: 'div',
                                className: m.contentRegion,
                                children: [
                                    t,
                                    (0, l.jsxs)(p.yWw, {
                                        className: a()(m.contentRegionScroller, S ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar),
                                        ref: _,
                                        children: [
                                            (0, l.jsx)(y.Provider, {
                                                value: E.current,
                                                children: (0, l.jsx)('div', {
                                                    ref: C,
                                                    className: m.contentColumnScrollable,
                                                    children: (0, l.jsx)(p.JcV, {
                                                        containerRef: C,
                                                        children: n
                                                    })
                                                })
                                            }),
                                            !d.tq && T
                                        ]
                                    }),
                                    R()
                                ]
                            });
                        let r = x[null != h ? h : 'default'];
                        return (0, l.jsxs)(f.W, {
                            component: 'div',
                            className: a()(m.contentRegion, { [m.hidden]: d.tq && !0 === j }),
                            children: [
                                (0, l.jsxs)('div', {
                                    className: m.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, l.jsxs)(p.yWw, {
                                            className: a()(m.contentRegionScroller, S ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar),
                                            ref: _,
                                            children: [
                                                (0, l.jsx)(y.Provider, {
                                                    value: E.current,
                                                    children: (0, l.jsx)(p.njP.Panel, {
                                                        id: i,
                                                        className: a()(m.contentColumn, m[r], { [m.mobileContent]: d.tq }),
                                                        ref: C,
                                                        style: d.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: S
                                                            ? n
                                                            : (0, l.jsx)(p.JcV, {
                                                                  containerRef: C,
                                                                  children: n
                                                              })
                                                    })
                                                }),
                                                !d.tq && T
                                            ]
                                        })
                                    ]
                                }),
                                R()
                            ]
                        });
                    })()
                ]
            })
        )
    });
};
