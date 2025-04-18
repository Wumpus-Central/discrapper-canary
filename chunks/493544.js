r.d(t, {
    ID: () => g,
    NM: () => y,
    Xi: () => O,
    ZP: () => x,
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
    Z = r(319586);
function M(e, t, r) {
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
let g = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    j = o.createContext(null);
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
            className: Z.customContainer,
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
                                M(e, t, r[t]);
                            });
                    }
                    return e;
                })({}, i)),
                (t = t =
                    {
                        className: a()(Z.customScroller, Z.contentRegionScroller),
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
            className: Z.customColumn,
            children: this.renderContent()
        });
    }
}
function y(e) {
    let { children: t } = e;
    return (0, s.jsx)('div', {
        className: Z.customColumn,
        children: (0, s.jsx)('div', {
            className: Z.customContainer,
            children: (0, s.jsx)(f.w0Z, {
                className: a()(Z.customScroller, Z.contentRegionScroller),
                children: t
            })
        })
    });
}
M(O, 'defaultProps', {
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
function V(e) {
    let { isMobile: t, mobileSidebarOpen: r, closeAction: n } = e,
        i = o.useRef(null);
    return null == n
        ? null
        : (0, s.jsx)('div', {
              className: a()(Z.toolsContainer, {
                  [Z.mobileToolsContainer]: t,
                  [Z.mobileSidebarTools]: t,
                  [Z.closeIconOnly]: !r,
                  [Z.isMobileAndroid]: !r && !0 === (0, d.isAndroidWeb)()
              }),
              ref: i,
              children: (0, s.jsx)(f.JcV, {
                  containerRef: i,
                  children: (0, s.jsx)('div', {
                      className: Z.tools,
                      children: (0, s.jsx)(b.Z, {
                          className: a()({ [Z.mobileToolsCloseIcon]: t }),
                          closeAction: n,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
let x = function (e) {
    let { sidebar: t, content: r, notice: n, section: i, closeAction: l, sidebarTheme: d, contentType: b, scrollerRef: M, mobileSidebarOpen: g, toggleSidebar: O, hideSidebar: y = !1 } = e,
        m = o.useRef(null),
        x = o.useRef(null),
        w = (0, p.Z)(i),
        P = (0, f.Yzy)(
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
        _ = o.useCallback(
            (e) => {
                (m.current = e), null != M && (M.current = e);
            },
            [M]
        );
    o.useLayoutEffect(() => {
        null != m.current && w !== i && m.current.scrollTo({ to: 0 });
    }, [i, w, m]);
    let C = (0, s.jsx)(V, {
        isMobile: v.tq,
        mobileSidebarOpen: g,
        closeAction: l
    });
    function S() {
        return null == n
            ? null
            : (0, s.jsx)(
                  f.oXn,
                  {
                      className: a()(Z.noticeRegion, { [Z.noticeRegionHiddenSidebar]: y }),
                      children: n
                  },
                  i
              );
    }
    return (0, s.jsx)(s.Fragment, {
        children: P((e, n) =>
            (0, s.jsxs)(c.animated.div, {
                style: e,
                className: Z.standardSidebarView,
                children: [
                    !n &&
                        (null == t
                            ? null
                            : (0, s.jsx)(f.f6W, {
                                  theme: d,
                                  children: (e) =>
                                      (0, s.jsx)('div', {
                                          className: a()(Z.sidebarRegion, e, {
                                              [Z.flexFullWidth]: v.tq,
                                              [Z.hidden]: v.tq && !1 === g
                                          }),
                                          children: (0, s.jsx)(f.h21, {
                                              className: Z.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, s.jsxs)('nav', {
                                                  className: a()(Z.sidebar, { [Z.mobileSidebar]: v.tq }),
                                                  children: [
                                                      v.tq &&
                                                          (0, s.jsx)('div', {
                                                              className: Z.mobileSidebarHeader,
                                                              children: C
                                                          }),
                                                      t
                                                  ]
                                              })
                                          })
                                      })
                              })),
                    (function () {
                        let e = null != O && null != l && g,
                            t =
                                v.tq &&
                                (0, s.jsxs)('div', {
                                    className: a()(Z.mobileContentHeader, { [Z.hideHamburger]: !e }),
                                    children: [e && (0, s.jsx)(h.r, { onClick: O }), C]
                                });
                        if ('custom' === b)
                            return (0, s.jsxs)(u.W, {
                                component: 'div',
                                className: Z.contentRegion,
                                children: [t, r, !v.tq && C, S()]
                            });
                        if ('scrollableCustom' === b)
                            return (0, s.jsxs)(u.W, {
                                component: 'div',
                                className: Z.contentRegion,
                                children: [
                                    t,
                                    (0, s.jsxs)(f.yWw, {
                                        className: a()(Z.contentRegionScroller, y ? Z.contentRegionHiddenSidebar : Z.contentRegionShownSidebar),
                                        ref: _,
                                        children: [
                                            (0, s.jsx)(j.Provider, {
                                                value: m.current,
                                                children: (0, s.jsx)('div', {
                                                    ref: x,
                                                    className: Z.contentColumnScrollable,
                                                    children: (0, s.jsx)(f.JcV, {
                                                        containerRef: x,
                                                        children: r
                                                    })
                                                })
                                            }),
                                            !v.tq && C
                                        ]
                                    }),
                                    S()
                                ]
                            });
                        let n = H[null != b ? b : 'default'];
                        return (0, s.jsxs)(u.W, {
                            component: 'div',
                            className: a()(Z.contentRegion, { [Z.hidden]: v.tq && !0 === g }),
                            children: [
                                (0, s.jsxs)('div', {
                                    className: Z.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, s.jsxs)(f.yWw, {
                                            className: a()(Z.contentRegionScroller, y ? Z.contentRegionHiddenSidebar : Z.contentRegionShownSidebar),
                                            ref: _,
                                            children: [
                                                (0, s.jsx)(j.Provider, {
                                                    value: m.current,
                                                    children: (0, s.jsx)(f.njP.Panel, {
                                                        id: i,
                                                        className: a()(Z.contentColumn, Z[n], { [Z.mobileContent]: v.tq }),
                                                        ref: x,
                                                        style: v.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: y
                                                            ? r
                                                            : (0, s.jsx)(f.JcV, {
                                                                  containerRef: x,
                                                                  children: r
                                                              })
                                                    })
                                                }),
                                                !v.tq && C
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
