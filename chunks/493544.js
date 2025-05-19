n.d(t, {
    ID: () => h,
    NM: () => y,
    Xi: () => j,
    ZP: () => P,
    bT: () => x
});
var r,
    i,
    s = n(255367),
    o = n(73800),
    a = n(120356),
    l = n.n(a),
    c = n(950035),
    u = n(608863),
    d = n(873546),
    p = n(215569),
    f = n(481060),
    g = n(110924),
    b = n(358085),
    m = n(425493),
    _ = n(832992);
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
let h = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    O = o.createContext(null);
class j extends (i = o.PureComponent) {
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
            className: _.customContainer,
            children: (0, s.jsx)(
                f._2F,
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
                        className: l()(_.customScroller, _.contentRegionScroller),
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
            className: _.customColumn,
            children: this.renderContent()
        });
    }
}
function y(e) {
    let { children: t } = e;
    return (0, s.jsx)('div', {
        className: _.customColumn,
        children: (0, s.jsx)('div', {
            className: _.customContainer,
            children: (0, s.jsx)(f.w0Z, {
                className: l()(_.customScroller, _.contentRegionScroller),
                children: t
            })
        })
    });
}
v(j, 'defaultProps', {
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
              className: l()(_.toolsContainer, {
                  [_.mobileToolsContainer]: t,
                  [_.mobileSidebarTools]: t,
                  [_.closeIconOnly]: !n,
                  [_.isMobileAndroid]: !n && !0 === (0, b.isAndroidWeb)()
              }),
              ref: i,
              children: (0, s.jsx)(f.JcV, {
                  containerRef: i,
                  children: (0, s.jsx)('div', {
                      className: _.tools,
                      children: (0, s.jsx)(m.Z, {
                          className: l()({ [_.mobileToolsCloseIcon]: t }),
                          closeAction: r,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
let P = function (e) {
    let { sidebar: t, content: n, notice: r, section: i, closeAction: a, sidebarTheme: b, contentType: m, scrollerRef: v, mobileSidebarOpen: h, toggleSidebar: j, hideSidebar: y = !1 } = e,
        x = o.useRef(null),
        P = o.useRef(null),
        E = (0, g.Z)(i),
        w = (0, f.Yzy)(
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
        mobileSidebarOpen: h,
        closeAction: a
    });
    function D() {
        return null == r
            ? null
            : (0, s.jsx)(
                  f.oXn,
                  {
                      className: l()(_.noticeRegion, { [_.noticeRegionHiddenSidebar]: y }),
                      children: r
                  },
                  i
              );
    }
    return (0, s.jsx)(s.Fragment, {
        children: w((e, r) =>
            (0, s.jsxs)(c.animated.div, {
                style: e,
                className: _.standardSidebarView,
                children: [
                    !r &&
                        (null == t
                            ? null
                            : (0, s.jsx)(f.f6W, {
                                  theme: b,
                                  children: (e) =>
                                      (0, s.jsx)('div', {
                                          className: l()(_.sidebarRegion, e, {
                                              [_.flexFullWidth]: d.tq,
                                              [_.hidden]: d.tq && !1 === h
                                          }),
                                          children: (0, s.jsx)(f.h21, {
                                              className: _.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, s.jsxs)('nav', {
                                                  className: l()(_.sidebar, { [_.mobileSidebar]: d.tq }),
                                                  children: [
                                                      d.tq &&
                                                          (0, s.jsx)('div', {
                                                              className: _.mobileSidebarHeader,
                                                              children: T
                                                          }),
                                                      t
                                                  ]
                                              })
                                          })
                                      })
                              })),
                    (function () {
                        let e = null != j && null != a && h,
                            t =
                                d.tq &&
                                (0, s.jsxs)('div', {
                                    className: l()(_.mobileContentHeader, { [_.hideHamburger]: !e }),
                                    children: [e && (0, s.jsx)(u.r, { onClick: j }), T]
                                });
                        if ('custom' === m)
                            return (0, s.jsxs)(p.W, {
                                component: 'div',
                                className: _.contentRegion,
                                children: [t, n, !d.tq && T, D()]
                            });
                        if ('scrollableCustom' === m)
                            return (0, s.jsxs)(p.W, {
                                component: 'div',
                                className: _.contentRegion,
                                children: [
                                    t,
                                    (0, s.jsxs)(f.yWw, {
                                        className: l()(_.contentRegionScroller, y ? _.contentRegionHiddenSidebar : _.contentRegionShownSidebar),
                                        ref: N,
                                        children: [
                                            (0, s.jsx)(O.Provider, {
                                                value: x.current,
                                                children: (0, s.jsx)('div', {
                                                    ref: P,
                                                    className: _.contentColumnScrollable,
                                                    children: (0, s.jsx)(f.JcV, {
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
                        return (0, s.jsxs)(p.W, {
                            component: 'div',
                            className: l()(_.contentRegion, { [_.hidden]: d.tq && !0 === h }),
                            children: [
                                (0, s.jsxs)('div', {
                                    className: _.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, s.jsxs)(f.yWw, {
                                            className: l()(_.contentRegionScroller, y ? _.contentRegionHiddenSidebar : _.contentRegionShownSidebar),
                                            ref: N,
                                            children: [
                                                (0, s.jsx)(O.Provider, {
                                                    value: x.current,
                                                    children: (0, s.jsx)(f.njP.Panel, {
                                                        id: i,
                                                        className: l()(_.contentColumn, _[r], { [_.mobileContent]: d.tq }),
                                                        ref: P,
                                                        style: d.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: y
                                                            ? n
                                                            : (0, s.jsx)(f.JcV, {
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
