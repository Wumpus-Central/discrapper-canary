r.d(t, {
    ID: () => j,
    NM: () => y,
    Xi: () => O,
    ZP: () => V,
    bT: () => m
});
var n,
    i,
    s = r(200651),
    o = r(192379),
    l = r(120356),
    a = r.n(l),
    c = r(200100),
    h = r(608863),
    v = r(873546),
    u = r(215569),
    f = r(481060),
    p = r(110924),
    d = r(358085),
    b = r(425493),
    g = r(319586);
function Z(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
let j = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    M = o.createContext(null);
class O extends (i = o.PureComponent) {
    renderContent() {
        var e, t;
        let r = this.props,
            { scrollerRef: n } = r,
            i = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            i = {},
                            s = Object.keys(e);
                        for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) (r = s[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                }
                return i;
            })(r, ['scrollerRef']);
        return (0, s.jsx)('div', {
            className: g.customContainer,
            children: (0, s.jsx)(
                f._2F,
                ((e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                })
                            )),
                            n.forEach(function (t) {
                                Z(e, t, r[t]);
                            });
                    }
                    return e;
                })({}, i)),
                (t = t =
                    {
                        className: a()(g.customScroller, g.contentRegionScroller),
                        ref: n
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(t)).forEach(function (r) {
                          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                      }),
                e)
            )
        });
    }
    render() {
        return (0, s.jsx)('div', {
            className: g.customColumn,
            children: this.renderContent()
        });
    }
}
function y(e) {
    let { children: t } = e;
    return (0, s.jsx)('div', {
        className: g.customColumn,
        children: (0, s.jsx)('div', {
            className: g.customContainer,
            children: (0, s.jsx)(f.w0Z, {
                className: a()(g.customScroller, g.contentRegionScroller),
                children: t
            })
        })
    });
}
Z(O, 'defaultProps', {
    paddingTop: 60,
    paddingBottom: 60
});
var m = (((n = {}).MINIMAL = 'minimal'), (n.CUSTOM = 'custom'), (n.DEFAULT = 'default'), (n.WIDE = 'wide'), (n.SCROLLABLE_CUSTOM = 'scrollableCustom'), n);
let H = Object.freeze({
    minimal: 'contentColumnMinimal',
    custom: 'contentColumnCustom',
    default: 'contentColumnDefault',
    wide: 'contentColumnWide',
    scrollableCustom: 'contentColumnCustom'
});
function x(e) {
    let { isMobile: t, mobileSidebarOpen: r, closeAction: n } = e,
        i = o.useRef(null);
    return null == n
        ? null
        : (0, s.jsx)('div', {
              className: a()(g.toolsContainer, {
                  [g.mobileToolsContainer]: t,
                  [g.mobileSidebarTools]: t,
                  [g.closeIconOnly]: !r,
                  [g.isMobileAndroid]: !r && !0 === (0, d.isAndroidWeb)()
              }),
              ref: i,
              children: (0, s.jsx)(f.JcV, {
                  containerRef: i,
                  children: (0, s.jsx)('div', {
                      className: g.tools,
                      children: (0, s.jsx)(b.Z, {
                          className: a()({ [g.mobileToolsCloseIcon]: t }),
                          closeAction: n,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
let V = function (e) {
    let { sidebar: t, content: r, notice: n, section: i, closeAction: l, sidebarTheme: d, contentType: b, scrollerRef: Z, mobileSidebarOpen: j, toggleSidebar: O, hideSidebar: y = !1 } = e,
        m = o.useRef(null),
        V = o.useRef(null),
        w = (0, p.Z)(i),
        C = (0, f.Yzy)(
            y,
            {
                from: {
                    position: 'absolute',
                    opacity: 0
                },
                enter: { opacity: 1 },
                reverse: y,
                config: c.config.stiff
            },
            'animate-always'
        ),
        P = o.useCallback(
            (e) => {
                (m.current = e), null != Z && (Z.current = e);
            },
            [Z]
        );
    o.useLayoutEffect(() => {
        null != m.current && w !== i && m.current.scrollTo({ to: 0 });
    }, [i, w, m]);
    let _ = (0, s.jsx)(x, {
        isMobile: v.tq,
        mobileSidebarOpen: j,
        closeAction: l
    });
    function S() {
        return null == n
            ? null
            : (0, s.jsx)(
                  f.oXn,
                  {
                      className: a()(g.noticeRegion, { [g.noticeRegionHiddenSidebar]: y }),
                      children: n
                  },
                  i
              );
    }
    return (0, s.jsx)(s.Fragment, {
        children: C((e, n) =>
            (0, s.jsxs)(c.animated.div, {
                style: e,
                className: g.standardSidebarView,
                children: [
                    !n &&
                        (null == t
                            ? null
                            : (0, s.jsx)(f.f6W, {
                                  theme: d,
                                  children: (e) =>
                                      (0, s.jsx)('div', {
                                          className: a()(g.sidebarRegion, e, {
                                              [g.flexFullWidth]: v.tq,
                                              [g.hidden]: v.tq && !1 === j
                                          }),
                                          children: (0, s.jsx)(f.h21, {
                                              className: g.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, s.jsxs)('nav', {
                                                  className: a()(g.sidebar, { [g.mobileSidebar]: v.tq }),
                                                  children: [
                                                      v.tq &&
                                                          (0, s.jsx)('div', {
                                                              className: g.mobileSidebarHeader,
                                                              children: _
                                                          }),
                                                      t
                                                  ]
                                              })
                                          })
                                      })
                              })),
                    (function () {
                        let e = null != O && null != l && j,
                            t =
                                v.tq &&
                                (0, s.jsxs)('div', {
                                    className: a()(g.mobileContentHeader, { [g.hideHamburger]: !e }),
                                    children: [e && (0, s.jsx)(h.r, { onClick: O }), _]
                                });
                        if ('custom' === b)
                            return (0, s.jsxs)(u.W, {
                                component: 'div',
                                className: g.contentRegion,
                                children: [t, r, !v.tq && _, S()]
                            });
                        if ('scrollableCustom' === b)
                            return (0, s.jsxs)(u.W, {
                                component: 'div',
                                className: g.contentRegion,
                                children: [
                                    t,
                                    (0, s.jsxs)(f.yWw, {
                                        className: a()(g.contentRegionScroller, y ? g.contentRegionHiddenSidebar : g.contentRegionShownSidebar),
                                        ref: P,
                                        children: [
                                            (0, s.jsx)(M.Provider, {
                                                value: m.current,
                                                children: (0, s.jsx)('div', {
                                                    ref: V,
                                                    className: g.contentColumnScrollable,
                                                    children: (0, s.jsx)(f.JcV, {
                                                        containerRef: V,
                                                        children: r
                                                    })
                                                })
                                            }),
                                            !v.tq && _
                                        ]
                                    }),
                                    S()
                                ]
                            });
                        let n = H[null != b ? b : 'default'];
                        return (0, s.jsxs)(u.W, {
                            component: 'div',
                            className: a()(g.contentRegion, { [g.hidden]: v.tq && !0 === j }),
                            children: [
                                (0, s.jsxs)('div', {
                                    className: g.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, s.jsxs)(f.yWw, {
                                            className: a()(g.contentRegionScroller, y ? g.contentRegionHiddenSidebar : g.contentRegionShownSidebar),
                                            ref: P,
                                            children: [
                                                (0, s.jsx)(M.Provider, {
                                                    value: m.current,
                                                    children: (0, s.jsx)(f.njP.Panel, {
                                                        id: i,
                                                        className: a()(g.contentColumn, g[n], { [g.mobileContent]: v.tq }),
                                                        ref: V,
                                                        style: v.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: y
                                                            ? r
                                                            : (0, s.jsx)(f.JcV, {
                                                                  containerRef: V,
                                                                  children: r
                                                              })
                                                    })
                                                }),
                                                !v.tq && _
                                            ]
                                        })
                                    ]
                                }),
                                S()
                            ]
                        });
                    })()
                ]
            })
        )
    });
};
