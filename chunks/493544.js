n.d(t, {
    ID: () => O,
    NM: () => j,
    Xi: () => E,
    ZP: () => C,
    bT: () => S
});
var r,
    i,
    s = n(255367),
    l = n(73800),
    o = n(120356),
    a = n.n(o),
    c = n(42133),
    u = n(608863),
    d = n(873546),
    f = n(215569),
    p = n(481060),
    g = n(110924),
    b = n(358085),
    v = n(425493),
    m = n(319586);
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
    y = l.createContext(null);
class E extends (i = l.PureComponent) {
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
                        for (r = 0; r < s.length; r++) ((n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) ((n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(n, ['scrollerRef']);
        return (0, s.jsx)('div', {
            className: m.customContainer,
            children: (0, s.jsx)(
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
                                h(e, t, n[t]);
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
        return (0, s.jsx)('div', {
            className: m.customColumn,
            children: this.renderContent()
        });
    }
}
function j(e) {
    let { children: t } = e;
    return (0, s.jsx)('div', {
        className: m.customColumn,
        children: (0, s.jsx)('div', {
            className: m.customContainer,
            children: (0, s.jsx)(p.w0Z, {
                className: a()(m.customScroller, m.contentRegionScroller),
                children: t
            })
        })
    });
}
h(E, 'defaultProps', {
    paddingTop: 60,
    paddingBottom: 60
});
var S = (((r = {}).MINIMAL = 'minimal'), (r.CUSTOM = 'custom'), (r.DEFAULT = 'default'), (r.WIDE = 'wide'), (r.SCROLLABLE_CUSTOM = 'scrollableCustom'), r);
let x = Object.freeze({
    minimal: 'contentColumnMinimal',
    custom: 'contentColumnCustom',
    default: 'contentColumnDefault',
    wide: 'contentColumnWide',
    scrollableCustom: 'contentColumnCustom'
});
function P(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: r } = e,
        i = l.useRef(null);
    return null == r
        ? null
        : (0, s.jsx)('div', {
              className: a()(m.toolsContainer, {
                  [m.mobileToolsContainer]: t,
                  [m.mobileSidebarTools]: t,
                  [m.closeIconOnly]: !n,
                  [m.isMobileAndroid]: !n && !0 === (0, b.isAndroidWeb)()
              }),
              ref: i,
              children: (0, s.jsx)(p.JcV, {
                  containerRef: i,
                  children: (0, s.jsx)('div', {
                      className: m.tools,
                      children: (0, s.jsx)(v.Z, {
                          className: a()({ [m.mobileToolsCloseIcon]: t }),
                          closeAction: r,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
let C = function (e) {
    let { sidebar: t, content: n, notice: r, section: i, closeAction: o, sidebarTheme: b, contentType: v, scrollerRef: h, mobileSidebarOpen: O, toggleSidebar: E, hideSidebar: j = !1 } = e,
        S = l.useRef(null),
        C = l.useRef(null),
        _ = (0, g.Z)(i),
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
        N = l.useCallback(
            (e) => {
                ((S.current = e), null != h && (h.current = e));
            },
            [h]
        );
    l.useLayoutEffect(() => {
        null != S.current && _ !== i && S.current.scrollTo({ to: 0 });
    }, [i, _, S]);
    let T = (0, s.jsx)(P, {
        isMobile: d.tq,
        mobileSidebarOpen: O,
        closeAction: o
    });
    function D() {
        return null == r
            ? null
            : (0, s.jsx)(
                  p.oXn,
                  {
                      className: a()(m.noticeRegion, { [m.noticeRegionHiddenSidebar]: j }),
                      children: r
                  },
                  i
              );
    }
    return (0, s.jsx)(s.Fragment, {
        children: w((e, r) =>
            (0, s.jsxs)(c.animated.div, {
                style: e,
                className: m.standardSidebarView,
                children: [
                    !r &&
                        (null == t
                            ? null
                            : (0, s.jsx)(p.f6W, {
                                  theme: b,
                                  children: (e) =>
                                      (0, s.jsx)('div', {
                                          className: a()(m.sidebarRegion, e, {
                                              [m.flexFullWidth]: d.tq,
                                              [m.hidden]: d.tq && !1 === O
                                          }),
                                          children: (0, s.jsx)(p.h21, {
                                              className: m.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, s.jsxs)('nav', {
                                                  className: a()(m.sidebar, { [m.mobileSidebar]: d.tq }),
                                                  children: [
                                                      d.tq &&
                                                          (0, s.jsx)('div', {
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
                        let e = null != E && null != o && O,
                            t =
                                d.tq &&
                                (0, s.jsxs)('div', {
                                    className: a()(m.mobileContentHeader, { [m.hideHamburger]: !e }),
                                    children: [e && (0, s.jsx)(u.r, { onClick: E }), T]
                                });
                        if ('custom' === v)
                            return (0, s.jsxs)(f.W, {
                                component: 'div',
                                className: m.contentRegion,
                                children: [t, n, !d.tq && T, D()]
                            });
                        if ('scrollableCustom' === v)
                            return (0, s.jsxs)(f.W, {
                                component: 'div',
                                className: m.contentRegion,
                                children: [
                                    t,
                                    (0, s.jsxs)(p.yWw, {
                                        className: a()(m.contentRegionScroller, j ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar),
                                        ref: N,
                                        children: [
                                            (0, s.jsx)(y.Provider, {
                                                value: S.current,
                                                children: (0, s.jsx)('div', {
                                                    ref: C,
                                                    className: m.contentColumnScrollable,
                                                    children: (0, s.jsx)(p.JcV, {
                                                        containerRef: C,
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
                        let r = x[null != v ? v : 'default'];
                        return (0, s.jsxs)(f.W, {
                            component: 'div',
                            className: a()(m.contentRegion, { [m.hidden]: d.tq && !0 === O }),
                            children: [
                                (0, s.jsxs)('div', {
                                    className: m.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, s.jsxs)(p.yWw, {
                                            className: a()(m.contentRegionScroller, j ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar),
                                            ref: N,
                                            children: [
                                                (0, s.jsx)(y.Provider, {
                                                    value: S.current,
                                                    children: (0, s.jsx)(p.njP.Panel, {
                                                        id: i,
                                                        className: a()(m.contentColumn, m[r], { [m.mobileContent]: d.tq }),
                                                        ref: C,
                                                        style: d.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: j
                                                            ? n
                                                            : (0, s.jsx)(p.JcV, {
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
                                D()
                            ]
                        });
                    })()
                ]
            })
        )
    });
};
