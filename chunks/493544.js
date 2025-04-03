s.d(t, {
    ID: () => h,
    NM: () => C,
    Xi: () => y,
    ZP: () => w,
    bT: () => v
});
var r,
    n,
    i = s(200651),
    o = s(192379),
    l = s(120356),
    a = s.n(l),
    c = s(642128),
    u = s(608863),
    d = s(873546),
    p = s(215569),
    f = s(481060),
    b = s(110924),
    g = s(358085),
    O = s(425493),
    x = s(319586);
function m(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
let h = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    j = o.createContext(null);
class y extends (n = o.PureComponent) {
    renderContent() {
        var e, t;
        let s = this.props,
            { scrollerRef: r } = s,
            n = (function (e, t) {
                if (null == e) return {};
                var s,
                    r,
                    n = (function (e, t) {
                        if (null == e) return {};
                        var s,
                            r,
                            n = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) (s = i[r]), t.indexOf(s) >= 0 || (n[s] = e[s]);
                        return n;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) (s = i[r]), !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (n[s] = e[s]);
                }
                return n;
            })(s, ['scrollerRef']);
        return (0, i.jsx)('div', {
            className: x.customContainer,
            children: (0, i.jsx)(
                f._2F,
                ((e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(s);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(s).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                m(e, t, s[t]);
                            });
                    }
                    return e;
                })({}, n)),
                (t = t =
                    {
                        className: a()(x.customScroller, x.contentRegionScroller),
                        ref: r
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var s = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              s.push.apply(s, r);
                          }
                          return s;
                      })(Object(t)).forEach(function (s) {
                          Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
                      }),
                e)
            )
        });
    }
    render() {
        return (0, i.jsx)('div', {
            className: x.customColumn,
            children: this.renderContent()
        });
    }
}
function C(e) {
    let { children: t } = e;
    return (0, i.jsx)('div', {
        className: x.customColumn,
        children: (0, i.jsx)('div', {
            className: x.customContainer,
            children: (0, i.jsx)(f.w0Z, {
                className: a()(x.customScroller, x.contentRegionScroller),
                children: t
            })
        })
    });
}
m(y, 'defaultProps', {
    paddingTop: 60,
    paddingBottom: 60
});
var v = (((r = {}).MINIMAL = 'minimal'), (r.CUSTOM = 'custom'), (r.DEFAULT = 'default'), (r.WIDE = 'wide'), (r.SCROLLABLE_CUSTOM = 'scrollableCustom'), r);
let P = Object.freeze({
    minimal: 'contentColumnMinimal',
    custom: 'contentColumnCustom',
    default: 'contentColumnDefault',
    wide: 'contentColumnWide',
    scrollableCustom: 'contentColumnCustom'
});
function S(e) {
    let { isMobile: t, mobileSidebarOpen: s, closeAction: r } = e,
        n = o.useRef(null);
    return null == r
        ? null
        : (0, i.jsx)('div', {
              className: a()(x.toolsContainer, {
                  [x.mobileToolsContainer]: t,
                  [x.mobileSidebarTools]: t,
                  [x.closeIconOnly]: !s,
                  [x.isMobileAndroid]: !s && !0 === (0, g.isAndroidWeb)()
              }),
              ref: n,
              children: (0, i.jsx)(f.JcV, {
                  containerRef: n,
                  children: (0, i.jsx)('div', {
                      className: x.tools,
                      children: (0, i.jsx)(O.Z, {
                          className: a()({ [x.mobileToolsCloseIcon]: t }),
                          closeAction: r,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
let w = function (e) {
    let { sidebar: t, content: s, notice: r, section: n, closeAction: l, sidebarTheme: g, contentType: O, scrollerRef: m, mobileSidebarOpen: h, toggleSidebar: y, hideSidebar: C = !1 } = e,
        v = o.useRef(null),
        w = o.useRef(null),
        _ = (0, b.Z)(n),
        E = (0, f.Yzy)(
            C,
            {
                from: {
                    position: 'absolute',
                    opacity: 0
                },
                enter: { opacity: 1 },
                reverse: C,
                config: c.config.stiff
            },
            'animate-always'
        ),
        N = o.useCallback(
            (e) => {
                (v.current = e), null != m && (m.current = e);
            },
            [m]
        );
    o.useLayoutEffect(() => {
        null != v.current && _ !== n && v.current.scrollTo({ to: 0 });
    }, [n, _, v]);
    let T = (0, i.jsx)(S, {
        isMobile: d.tq,
        mobileSidebarOpen: h,
        closeAction: l
    });
    function L() {
        return null == r
            ? null
            : (0, i.jsx)(
                  f.oXn,
                  {
                      className: a()(x.noticeRegion, { [x.noticeRegionHiddenSidebar]: C }),
                      children: r
                  },
                  n
              );
    }
    return (0, i.jsx)(i.Fragment, {
        children: E((e, r) =>
            (0, i.jsxs)(c.animated.div, {
                style: e,
                className: x.standardSidebarView,
                children: [
                    !r &&
                        (null == t
                            ? null
                            : (0, i.jsx)(f.f6W, {
                                  theme: g,
                                  children: (e) =>
                                      (0, i.jsx)('div', {
                                          className: a()(x.sidebarRegion, e, {
                                              [x.flexFullWidth]: d.tq,
                                              [x.hidden]: d.tq && !1 === h
                                          }),
                                          children: (0, i.jsx)(f.h21, {
                                              className: x.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, i.jsxs)('nav', {
                                                  className: a()(x.sidebar, { [x.mobileSidebar]: d.tq }),
                                                  children: [
                                                      d.tq &&
                                                          (0, i.jsx)('div', {
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
                        let e = null != y && null != l && h,
                            t =
                                d.tq &&
                                (0, i.jsxs)('div', {
                                    className: a()(x.mobileContentHeader, { [x.hideHamburger]: !e }),
                                    children: [e && (0, i.jsx)(u.r, { onClick: y }), T]
                                });
                        if ('custom' === O)
                            return (0, i.jsxs)(p.W, {
                                component: 'div',
                                className: x.contentRegion,
                                children: [t, s, !d.tq && T, L()]
                            });
                        if ('scrollableCustom' === O)
                            return (0, i.jsxs)(p.W, {
                                component: 'div',
                                className: x.contentRegion,
                                children: [
                                    t,
                                    (0, i.jsxs)(f.yWw, {
                                        className: a()(x.contentRegionScroller, C ? x.contentRegionHiddenSidebar : x.contentRegionShownSidebar),
                                        ref: N,
                                        children: [
                                            (0, i.jsx)(j.Provider, {
                                                value: v.current,
                                                children: (0, i.jsx)('div', {
                                                    ref: w,
                                                    className: x.contentColumnScrollable,
                                                    children: (0, i.jsx)(f.JcV, {
                                                        containerRef: w,
                                                        children: s
                                                    })
                                                })
                                            }),
                                            !d.tq && T
                                        ]
                                    }),
                                    L()
                                ]
                            });
                        let r = P[null != O ? O : 'default'];
                        return (0, i.jsxs)(p.W, {
                            component: 'div',
                            className: a()(x.contentRegion, { [x.hidden]: d.tq && !0 === h }),
                            children: [
                                (0, i.jsxs)('div', {
                                    className: x.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, i.jsxs)(f.yWw, {
                                            className: a()(x.contentRegionScroller, C ? x.contentRegionHiddenSidebar : x.contentRegionShownSidebar),
                                            ref: N,
                                            children: [
                                                (0, i.jsx)(j.Provider, {
                                                    value: v.current,
                                                    children: (0, i.jsx)(f.njP.Panel, {
                                                        id: n,
                                                        className: a()(x.contentColumn, x[r], { [x.mobileContent]: d.tq }),
                                                        ref: w,
                                                        style: d.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: C
                                                            ? s
                                                            : (0, i.jsx)(f.JcV, {
                                                                  containerRef: w,
                                                                  children: s
                                                              })
                                                    })
                                                }),
                                                !d.tq && T
                                            ]
                                        })
                                    ]
                                }),
                                L()
                            ]
                        });
                    })()
                ]
            })
        )
    });
};
