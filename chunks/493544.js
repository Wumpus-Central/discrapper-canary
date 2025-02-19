n.d(t, {
    ID: () => v,
    NM: () => y,
    Xi: () => j,
    ZP: () => N,
    bT: () => S
});
var s,
    r,
    i = n(200651),
    o = n(192379),
    c = n(120356),
    a = n.n(c),
    l = n(642128),
    u = n(608863),
    d = n(873546),
    p = n(215569),
    f = n(481060),
    b = n(110924),
    g = n(358085),
    m = n(425493),
    O = n(229083);
function h(e, t, n) {
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
let v = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    x = o.createContext(null);
class j extends (r = o.PureComponent) {
    renderContent() {
        var e, t;
        let n = this.props,
            { scrollerRef: s } = n,
            r = (function (e, t) {
                if (null == e) return {};
                var n,
                    s,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            s,
                            r = {},
                            i = Object.keys(e);
                        for (s = 0; s < i.length; s++) (n = i[s]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (s = 0; s < i.length; s++) (n = i[s]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(n, ['scrollerRef']);
        return (0, i.jsx)('div', {
            className: O.customContainer,
            children: (0, i.jsx)(
                f._2F,
                ((e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            s = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (s = s.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            s.forEach(function (t) {
                                h(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, r)),
                (t = t =
                    {
                        className: a()(O.customScroller, O.contentRegionScroller),
                        ref: s
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var s = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, s);
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
        return (0, i.jsx)('div', {
            className: O.customColumn,
            children: this.renderContent()
        });
    }
}
function y(e) {
    let { children: t } = e;
    return (0, i.jsx)('div', {
        className: O.customColumn,
        children: (0, i.jsx)('div', {
            className: O.customContainer,
            children: (0, i.jsx)(f.w0Z, {
                className: a()(O.customScroller, O.contentRegionScroller),
                children: t
            })
        })
    });
}
h(j, 'defaultProps', {
    paddingTop: 60,
    paddingBottom: 60
});
var S = (((s = {}).MINIMAL = 'minimal'), (s.CUSTOM = 'custom'), (s.DEFAULT = 'default'), (s.WIDE = 'wide'), (s.SCROLLABLE_CUSTOM = 'scrollableCustom'), s);
let P = Object.freeze({
    minimal: 'contentColumnMinimal',
    custom: 'contentColumnCustom',
    default: 'contentColumnDefault',
    wide: 'contentColumnWide',
    scrollableCustom: 'contentColumnCustom'
});
function C(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: s } = e,
        r = o.useRef(null);
    return null == s
        ? null
        : (0, i.jsx)('div', {
              className: a()(O.toolsContainer, {
                  [O.mobileToolsContainer]: t,
                  [O.mobileSidebarTools]: t,
                  [O.closeIconOnly]: !n,
                  [O.isMobileAndroid]: !n && !0 === (0, g.isAndroidWeb)()
              }),
              ref: r,
              children: (0, i.jsx)(f.JcV, {
                  containerRef: r,
                  children: (0, i.jsx)('div', {
                      className: O.tools,
                      children: (0, i.jsx)(m.Z, {
                          className: a()({ [O.mobileToolsCloseIcon]: t }),
                          closeAction: s,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
let N = function (e) {
    let { sidebar: t, content: n, notice: s, section: r, closeAction: c, sidebarTheme: g, contentType: m, scrollerRef: h, mobileSidebarOpen: v, toggleSidebar: j, hideSidebar: y = !1 } = e,
        S = o.useRef(null),
        N = o.useRef(null),
        E = (0, b.Z)(r),
        w = (0, f.Yzy)(
            y,
            {
                from: {
                    position: 'absolute',
                    opacity: 0
                },
                enter: { opacity: 1 },
                reverse: y,
                config: l.config.stiff
            },
            'animate-always'
        ),
        _ = o.useCallback(
            (e) => {
                (S.current = e), null != h && (h.current = e);
            },
            [h]
        );
    o.useLayoutEffect(() => {
        null != S.current && E !== r && S.current.scrollTo({ to: 0 });
    }, [r, E, S]);
    let T = (0, i.jsx)(C, {
        isMobile: d.tq,
        mobileSidebarOpen: v,
        closeAction: c
    });
    function R() {
        return null == s
            ? null
            : (0, i.jsx)(
                  f.oXn,
                  {
                      className: a()(O.noticeRegion, { [O.noticeRegionHiddenSidebar]: y }),
                      children: s
                  },
                  r
              );
    }
    return (0, i.jsx)(i.Fragment, {
        children: w((e, s) =>
            (0, i.jsxs)(l.animated.div, {
                style: e,
                className: O.standardSidebarView,
                children: [
                    !s &&
                        (null == t
                            ? null
                            : (0, i.jsx)(f.f6W, {
                                  theme: g,
                                  children: (e) =>
                                      (0, i.jsx)('div', {
                                          className: a()(O.sidebarRegion, e, {
                                              [O.flexFullWidth]: d.tq,
                                              [O.hidden]: d.tq && !1 === v
                                          }),
                                          children: (0, i.jsx)(f.h21, {
                                              className: O.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, i.jsxs)('nav', {
                                                  className: a()(O.sidebar, { [O.mobileSidebar]: d.tq }),
                                                  children: [
                                                      d.tq &&
                                                          (0, i.jsx)('div', {
                                                              className: O.mobileSidebarHeader,
                                                              children: T
                                                          }),
                                                      t
                                                  ]
                                              })
                                          })
                                      })
                              })),
                    (function () {
                        let e = null != j && null != c && v,
                            t =
                                d.tq &&
                                (0, i.jsxs)('div', {
                                    className: a()(O.mobileContentHeader, { [O.hideHamburger]: !e }),
                                    children: [e && (0, i.jsx)(u.r, { onClick: j }), T]
                                });
                        if ('custom' === m)
                            return (0, i.jsxs)(p.W, {
                                component: 'div',
                                className: O.contentRegion,
                                children: [t, n, !d.tq && T, R()]
                            });
                        if ('scrollableCustom' === m)
                            return (0, i.jsxs)(p.W, {
                                component: 'div',
                                className: O.contentRegion,
                                children: [
                                    t,
                                    (0, i.jsxs)(f.yWw, {
                                        className: a()(O.contentRegionScroller, y ? O.contentRegionHiddenSidebar : O.contentRegionShownSidebar),
                                        ref: _,
                                        children: [
                                            (0, i.jsx)(x.Provider, {
                                                value: S.current,
                                                children: (0, i.jsx)('div', {
                                                    ref: N,
                                                    className: O.contentColumnScrollable,
                                                    children: (0, i.jsx)(f.JcV, {
                                                        containerRef: N,
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
                        let s = P[null != m ? m : 'default'];
                        return (0, i.jsxs)(p.W, {
                            component: 'div',
                            className: a()(O.contentRegion, { [O.hidden]: d.tq && !0 === v }),
                            children: [
                                (0, i.jsxs)('div', {
                                    className: O.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, i.jsxs)(f.yWw, {
                                            className: a()(O.contentRegionScroller, y ? O.contentRegionHiddenSidebar : O.contentRegionShownSidebar),
                                            ref: _,
                                            children: [
                                                (0, i.jsx)(x.Provider, {
                                                    value: S.current,
                                                    children: (0, i.jsx)(f.njP.Panel, {
                                                        id: r,
                                                        className: a()(O.contentColumn, O[s], { [O.mobileContent]: d.tq }),
                                                        ref: N,
                                                        style: d.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: y
                                                            ? n
                                                            : (0, i.jsx)(f.JcV, {
                                                                  containerRef: N,
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
