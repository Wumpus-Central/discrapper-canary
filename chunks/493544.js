n.d(t, {
    ID: () => O,
    NM: () => y,
    Xi: () => j,
    ZP: () => E,
    bT: () => x
});
var r,
    s,
    i = n(200651),
    o = n(192379),
    l = n(120356),
    a = n.n(l),
    c = n(272573),
    u = n(608863),
    d = n(873546),
    f = n(215569),
    p = n(481060),
    g = n(110924),
    b = n(358085),
    m = n(425493),
    v = n(319586);
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
let O = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    _ = o.createContext(null);
class j extends (s = o.PureComponent) {
    renderContent() {
        var e, t;
        let n = this.props,
            { scrollerRef: r } = n,
            s = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            s = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                }
                return s;
            })(n, ['scrollerRef']);
        return (0, i.jsx)('div', {
            className: v.customContainer,
            children: (0, i.jsx)(
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
                                h(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, s)),
                (t = t =
                    {
                        className: a()(v.customScroller, v.contentRegionScroller),
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
        return (0, i.jsx)('div', {
            className: v.customColumn,
            children: this.renderContent()
        });
    }
}
function y(e) {
    let { children: t } = e;
    return (0, i.jsx)('div', {
        className: v.customColumn,
        children: (0, i.jsx)('div', {
            className: v.customContainer,
            children: (0, i.jsx)(p.w0Z, {
                className: a()(v.customScroller, v.contentRegionScroller),
                children: t
            })
        })
    });
}
h(j, 'defaultProps', {
    paddingTop: 60,
    paddingBottom: 60
});
var x = (((r = {}).MINIMAL = 'minimal'), (r.CUSTOM = 'custom'), (r.DEFAULT = 'default'), (r.WIDE = 'wide'), (r.SCROLLABLE_CUSTOM = 'scrollableCustom'), r);
let S = Object.freeze({
    minimal: 'contentColumnMinimal',
    custom: 'contentColumnCustom',
    default: 'contentColumnDefault',
    wide: 'contentColumnWide',
    scrollableCustom: 'contentColumnCustom'
});
function C(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: r } = e,
        s = o.useRef(null);
    return null == r
        ? null
        : (0, i.jsx)('div', {
              className: a()(v.toolsContainer, {
                  [v.mobileToolsContainer]: t,
                  [v.mobileSidebarTools]: t,
                  [v.closeIconOnly]: !n,
                  [v.isMobileAndroid]: !n && !0 === (0, b.isAndroidWeb)()
              }),
              ref: s,
              children: (0, i.jsx)(p.JcV, {
                  containerRef: s,
                  children: (0, i.jsx)('div', {
                      className: v.tools,
                      children: (0, i.jsx)(m.Z, {
                          className: a()({ [v.mobileToolsCloseIcon]: t }),
                          closeAction: r,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
let E = function (e) {
    let { sidebar: t, content: n, notice: r, section: s, closeAction: l, sidebarTheme: b, contentType: m, scrollerRef: h, mobileSidebarOpen: O, toggleSidebar: j, hideSidebar: y = !1 } = e,
        x = o.useRef(null),
        E = o.useRef(null),
        P = (0, g.Z)(s),
        w = (0, p.Yzy)(
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
                (x.current = e), null != h && (h.current = e);
            },
            [h]
        );
    o.useLayoutEffect(() => {
        null != x.current && P !== s && x.current.scrollTo({ to: 0 });
    }, [s, P, x]);
    let T = (0, i.jsx)(C, {
        isMobile: d.tq,
        mobileSidebarOpen: O,
        closeAction: l
    });
    function D() {
        return null == r
            ? null
            : (0, i.jsx)(
                  p.oXn,
                  {
                      className: a()(v.noticeRegion, { [v.noticeRegionHiddenSidebar]: y }),
                      children: r
                  },
                  s
              );
    }
    return (0, i.jsx)(i.Fragment, {
        children: w((e, r) =>
            (0, i.jsxs)(c.animated.div, {
                style: e,
                className: v.standardSidebarView,
                children: [
                    !r &&
                        (null == t
                            ? null
                            : (0, i.jsx)(p.f6W, {
                                  theme: b,
                                  children: (e) =>
                                      (0, i.jsx)('div', {
                                          className: a()(v.sidebarRegion, e, {
                                              [v.flexFullWidth]: d.tq,
                                              [v.hidden]: d.tq && !1 === O
                                          }),
                                          children: (0, i.jsx)(p.h21, {
                                              className: v.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, i.jsxs)('nav', {
                                                  className: a()(v.sidebar, { [v.mobileSidebar]: d.tq }),
                                                  children: [
                                                      d.tq &&
                                                          (0, i.jsx)('div', {
                                                              className: v.mobileSidebarHeader,
                                                              children: T
                                                          }),
                                                      t
                                                  ]
                                              })
                                          })
                                      })
                              })),
                    (function () {
                        let e = null != j && null != l && O,
                            t =
                                d.tq &&
                                (0, i.jsxs)('div', {
                                    className: a()(v.mobileContentHeader, { [v.hideHamburger]: !e }),
                                    children: [e && (0, i.jsx)(u.r, { onClick: j }), T]
                                });
                        if ('custom' === m)
                            return (0, i.jsxs)(f.W, {
                                component: 'div',
                                className: v.contentRegion,
                                children: [t, n, !d.tq && T, D()]
                            });
                        if ('scrollableCustom' === m)
                            return (0, i.jsxs)(f.W, {
                                component: 'div',
                                className: v.contentRegion,
                                children: [
                                    t,
                                    (0, i.jsxs)(p.yWw, {
                                        className: a()(v.contentRegionScroller, y ? v.contentRegionHiddenSidebar : v.contentRegionShownSidebar),
                                        ref: N,
                                        children: [
                                            (0, i.jsx)(_.Provider, {
                                                value: x.current,
                                                children: (0, i.jsx)('div', {
                                                    ref: E,
                                                    className: v.contentColumnScrollable,
                                                    children: (0, i.jsx)(p.JcV, {
                                                        containerRef: E,
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
                        let r = S[null != m ? m : 'default'];
                        return (0, i.jsxs)(f.W, {
                            component: 'div',
                            className: a()(v.contentRegion, { [v.hidden]: d.tq && !0 === O }),
                            children: [
                                (0, i.jsxs)('div', {
                                    className: v.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, i.jsxs)(p.yWw, {
                                            className: a()(v.contentRegionScroller, y ? v.contentRegionHiddenSidebar : v.contentRegionShownSidebar),
                                            ref: N,
                                            children: [
                                                (0, i.jsx)(_.Provider, {
                                                    value: x.current,
                                                    children: (0, i.jsx)(p.njP.Panel, {
                                                        id: s,
                                                        className: a()(v.contentColumn, v[r], { [v.mobileContent]: d.tq }),
                                                        ref: E,
                                                        style: d.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: y
                                                            ? n
                                                            : (0, i.jsx)(p.JcV, {
                                                                  containerRef: E,
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
