n.d(t, {
    ID: () => O,
    NM: () => S,
    Xi: () => E,
    ZP: () => x,
    bT: () => j
});
var r,
    i,
    l = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    c = n(652141),
    u = n(608863),
    d = n(873546),
    f = n(215569),
    p = n(481060),
    g = n(110924),
    m = n(358085),
    b = n(425493),
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
let O = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    y = s.createContext(null);
class E extends (i = s.PureComponent) {
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
            className: h.customContainer,
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
                                v(e, t, n[t]);
                            }));
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
        return (0, l.jsx)('div', {
            className: h.customColumn,
            children: this.renderContent()
        });
    }
}
function S(e) {
    let { children: t } = e;
    return (0, l.jsx)('div', {
        className: h.customColumn,
        children: (0, l.jsx)('div', {
            className: h.customContainer,
            children: (0, l.jsx)(p.w0Z, {
                className: a()(h.customScroller, h.contentRegionScroller),
                children: t
            })
        })
    });
}
v(E, 'defaultProps', {
    paddingTop: 60,
    paddingBottom: 60
});
var j = (((r = {}).MINIMAL = 'minimal'), (r.CUSTOM = 'custom'), (r.DEFAULT = 'default'), (r.WIDE = 'wide'), (r.SCROLLABLE_CUSTOM = 'scrollableCustom'), r);
let C = Object.freeze({
    minimal: 'contentColumnMinimal',
    custom: 'contentColumnCustom',
    default: 'contentColumnDefault',
    wide: 'contentColumnWide',
    scrollableCustom: 'contentColumnCustom'
});
function _(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: r } = e,
        i = s.useRef(null);
    return null == r
        ? null
        : (0, l.jsx)('div', {
              className: a()(h.toolsContainer, {
                  [h.mobileToolsContainer]: t,
                  [h.mobileSidebarTools]: t,
                  [h.closeIconOnly]: !n,
                  [h.isMobileAndroid]: !n && !0 === (0, m.isAndroidWeb)()
              }),
              ref: i,
              children: (0, l.jsx)(p.JcV, {
                  containerRef: i,
                  children: (0, l.jsx)('div', {
                      className: h.tools,
                      children: (0, l.jsx)(b.Z, {
                          className: a()({ [h.mobileToolsCloseIcon]: t }),
                          closeAction: r,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
let x = function (e) {
    let { sidebar: t, content: n, notice: r, section: i, closeAction: o, sidebarTheme: m, contentType: b, scrollerRef: v, mobileSidebarOpen: O, toggleSidebar: E, hideSidebar: S = !1 } = e,
        j = s.useRef(null),
        x = s.useRef(null),
        P = (0, g.Z)(i),
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
        w = s.useCallback(
            (e) => {
                ((j.current = e), null != v && (v.current = e));
            },
            [v]
        );
    s.useLayoutEffect(() => {
        null != j.current && P !== i && j.current.scrollTo({ to: 0 });
    }, [i, P, j]);
    let T = (0, l.jsx)(_, {
        isMobile: d.tq,
        mobileSidebarOpen: O,
        closeAction: o
    });
    function D() {
        return null == r
            ? null
            : (0, l.jsx)(
                  p.oXn,
                  {
                      className: a()(h.noticeRegion, { [h.noticeRegionHiddenSidebar]: S }),
                      children: r
                  },
                  i
              );
    }
    return (0, l.jsx)(l.Fragment, {
        children: N((e, r) =>
            (0, l.jsxs)(c.animated.div, {
                style: e,
                className: h.standardSidebarView,
                children: [
                    !r &&
                        (null == t
                            ? null
                            : (0, l.jsx)(p.f6W, {
                                  theme: m,
                                  children: (e) =>
                                      (0, l.jsx)('div', {
                                          className: a()(h.sidebarRegion, e, {
                                              [h.flexFullWidth]: d.tq,
                                              [h.hidden]: d.tq && !1 === O
                                          }),
                                          children: (0, l.jsx)(p.h21, {
                                              className: h.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, l.jsxs)('nav', {
                                                  className: a()(h.sidebar, { [h.mobileSidebar]: d.tq }),
                                                  children: [
                                                      d.tq &&
                                                          (0, l.jsx)('div', {
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
                        let e = null != E && null != o && O,
                            t =
                                d.tq &&
                                (0, l.jsxs)('div', {
                                    className: a()(h.mobileContentHeader, { [h.hideHamburger]: !e }),
                                    children: [e && (0, l.jsx)(u.r, { onClick: E }), T]
                                });
                        if ('custom' === b)
                            return (0, l.jsxs)(f.W, {
                                component: 'div',
                                className: h.contentRegion,
                                children: [t, n, !d.tq && T, D()]
                            });
                        if ('scrollableCustom' === b)
                            return (0, l.jsxs)(f.W, {
                                component: 'div',
                                className: h.contentRegion,
                                children: [
                                    t,
                                    (0, l.jsxs)(p.yWw, {
                                        className: a()(h.contentRegionScroller, S ? h.contentRegionHiddenSidebar : h.contentRegionShownSidebar),
                                        ref: w,
                                        children: [
                                            (0, l.jsx)(y.Provider, {
                                                value: j.current,
                                                children: (0, l.jsx)('div', {
                                                    ref: x,
                                                    className: h.contentColumnScrollable,
                                                    children: (0, l.jsx)(p.JcV, {
                                                        containerRef: x,
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
                        let r = C[null != b ? b : 'default'];
                        return (0, l.jsxs)(f.W, {
                            component: 'div',
                            className: a()(h.contentRegion, { [h.hidden]: d.tq && !0 === O }),
                            children: [
                                (0, l.jsxs)('div', {
                                    className: h.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, l.jsxs)(p.yWw, {
                                            className: a()(h.contentRegionScroller, S ? h.contentRegionHiddenSidebar : h.contentRegionShownSidebar),
                                            ref: w,
                                            children: [
                                                (0, l.jsx)(y.Provider, {
                                                    value: j.current,
                                                    children: (0, l.jsx)(p.njP.Panel, {
                                                        id: i,
                                                        className: a()(h.contentColumn, h[r], { [h.mobileContent]: d.tq }),
                                                        ref: x,
                                                        style: d.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: S
                                                            ? n
                                                            : (0, l.jsx)(p.JcV, {
                                                                  containerRef: x,
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
