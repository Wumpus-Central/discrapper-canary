n.d(t, {
    ID: () => _,
    NM: () => j,
    Xi: () => y,
    ZP: () => P,
    bT: () => x
});
var r,
    i,
    s = n(200651),
    o = n(192379),
    l = n(120356),
    a = n.n(l),
    c = n(200100),
    u = n(608863),
    d = n(873546),
    f = n(215569),
    p = n(481060),
    g = n(110924),
    b = n(358085),
    m = n(425493),
    h = n(319586);
function v(e, t, n) {
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
let _ = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    O = o.createContext(null);
class y extends (i = o.PureComponent) {
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
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(n, ['scrollerRef']);
        return (0, s.jsx)('div', {
            className: h.customContainer,
            children: (0, s.jsx)(
                p._2F,
                ((e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                v(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, i)),
                (t = t =
                    {
                        className: a()(h.customScroller, h.contentRegionScroller),
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
        return (0, s.jsx)('div', {
            className: h.customColumn,
            children: this.renderContent()
        });
    }
}
function j(e) {
    let { children: t } = e;
    return (0, s.jsx)('div', {
        className: h.customColumn,
        children: (0, s.jsx)('div', {
            className: h.customContainer,
            children: (0, s.jsx)(p.w0Z, {
                className: a()(h.customScroller, h.contentRegionScroller),
                children: t
            })
        })
    });
}
v(y, 'defaultProps', {
    paddingTop: 60,
    paddingBottom: 60
});
var x = (((r = {}).MINIMAL = 'minimal'), (r.CUSTOM = 'custom'), (r.DEFAULT = 'default'), (r.WIDE = 'wide'), (r.SCROLLABLE_CUSTOM = 'scrollableCustom'), r);
let C = Object.freeze({
    minimal: 'contentColumnMinimal',
    custom: 'contentColumnCustom',
    default: 'contentColumnDefault',
    wide: 'contentColumnWide',
    scrollableCustom: 'contentColumnCustom'
});
function S(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: r } = e,
        i = o.useRef(null);
    return null == r
        ? null
        : (0, s.jsx)('div', {
              className: a()(h.toolsContainer, {
                  [h.mobileToolsContainer]: t,
                  [h.mobileSidebarTools]: t,
                  [h.closeIconOnly]: !n,
                  [h.isMobileAndroid]: !n && !0 === (0, b.isAndroidWeb)()
              }),
              ref: i,
              children: (0, s.jsx)(p.JcV, {
                  containerRef: i,
                  children: (0, s.jsx)('div', {
                      className: h.tools,
                      children: (0, s.jsx)(m.Z, {
                          className: a()({ [h.mobileToolsCloseIcon]: t }),
                          closeAction: r,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
let P = function (e) {
    let { sidebar: t, content: n, notice: r, section: i, closeAction: l, sidebarTheme: b, contentType: m, scrollerRef: v, mobileSidebarOpen: _, toggleSidebar: y, hideSidebar: j = !1 } = e,
        x = o.useRef(null),
        P = o.useRef(null),
        E = (0, g.Z)(i),
        w = (0, p.Yzy)(
            j,
            {
                from: {
                    position: 'absolute',
                    opacity: 0
                },
                enter: { opacity: 1 },
                reverse: j,
                config: c.config.stiff
            },
            'animate-always'
        ),
        N = o.useCallback(
            (e) => {
                (x.current = e), null != v && (v.current = e);
            },
            [v]
        );
    o.useLayoutEffect(() => {
        null != x.current && E !== i && x.current.scrollTo({ to: 0 });
    }, [i, E, x]);
    let T = (0, s.jsx)(S, {
        isMobile: d.tq,
        mobileSidebarOpen: _,
        closeAction: l
    });
    function D() {
        return null == r
            ? null
            : (0, s.jsx)(
                  p.oXn,
                  {
                      className: a()(h.noticeRegion, { [h.noticeRegionHiddenSidebar]: j }),
                      children: r
                  },
                  i
              );
    }
    return (0, s.jsx)(s.Fragment, {
        children: w((e, r) =>
            (0, s.jsxs)(c.animated.div, {
                style: e,
                className: h.standardSidebarView,
                children: [
                    !r &&
                        (null == t
                            ? null
                            : (0, s.jsx)(p.f6W, {
                                  theme: b,
                                  children: (e) =>
                                      (0, s.jsx)('div', {
                                          className: a()(h.sidebarRegion, e, {
                                              [h.flexFullWidth]: d.tq,
                                              [h.hidden]: d.tq && !1 === _
                                          }),
                                          children: (0, s.jsx)(p.h21, {
                                              className: h.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, s.jsxs)('nav', {
                                                  className: a()(h.sidebar, { [h.mobileSidebar]: d.tq }),
                                                  children: [
                                                      d.tq &&
                                                          (0, s.jsx)('div', {
                                                              className: h.mobileSidebarHeader,
                                                              children: T
                                                          }),
                                                      t
                                                  ]
                                              })
                                          })
                                      })
                              })),
                    (function () {
                        let e = null != y && null != l && _,
                            t =
                                d.tq &&
                                (0, s.jsxs)('div', {
                                    className: a()(h.mobileContentHeader, { [h.hideHamburger]: !e }),
                                    children: [e && (0, s.jsx)(u.r, { onClick: y }), T]
                                });
                        if ('custom' === m)
                            return (0, s.jsxs)(f.W, {
                                component: 'div',
                                className: h.contentRegion,
                                children: [t, n, !d.tq && T, D()]
                            });
                        if ('scrollableCustom' === m)
                            return (0, s.jsxs)(f.W, {
                                component: 'div',
                                className: h.contentRegion,
                                children: [
                                    t,
                                    (0, s.jsxs)(p.yWw, {
                                        className: a()(h.contentRegionScroller, j ? h.contentRegionHiddenSidebar : h.contentRegionShownSidebar),
                                        ref: N,
                                        children: [
                                            (0, s.jsx)(O.Provider, {
                                                value: x.current,
                                                children: (0, s.jsx)('div', {
                                                    ref: P,
                                                    className: h.contentColumnScrollable,
                                                    children: (0, s.jsx)(p.JcV, {
                                                        containerRef: P,
                                                        children: n
                                                    })
                                                })
                                            }),
                                            !d.tq && T
                                        ]
                                    }),
                                    D()
                                ]
                            });
                        let r = C[null != m ? m : 'default'];
                        return (0, s.jsxs)(f.W, {
                            component: 'div',
                            className: a()(h.contentRegion, { [h.hidden]: d.tq && !0 === _ }),
                            children: [
                                (0, s.jsxs)('div', {
                                    className: h.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, s.jsxs)(p.yWw, {
                                            className: a()(h.contentRegionScroller, j ? h.contentRegionHiddenSidebar : h.contentRegionShownSidebar),
                                            ref: N,
                                            children: [
                                                (0, s.jsx)(O.Provider, {
                                                    value: x.current,
                                                    children: (0, s.jsx)(p.njP.Panel, {
                                                        id: i,
                                                        className: a()(h.contentColumn, h[r], { [h.mobileContent]: d.tq }),
                                                        ref: P,
                                                        style: d.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: j
                                                            ? n
                                                            : (0, s.jsx)(p.JcV, {
                                                                  containerRef: P,
                                                                  children: n
                                                              })
                                                    })
                                                }),
                                                !d.tq && T
                                            ]
                                        })
                                    ]
                                }),
                                D()
                            ]
                        });
                    })()
                ]
            })
        )
    });
};
