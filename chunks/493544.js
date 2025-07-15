n.d(t, {
    ID: () => O,
    NM: () => S,
    Xi: () => j,
    ZP: () => C,
    bT: () => E
});
var r,
    s,
    i = n(255367),
    l = n(73800),
    o = n(120356),
    a = n.n(o),
    c = n(108542),
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
class j extends (s = l.PureComponent) {
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
                        for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]));
                }
                return s;
            })(n, ['scrollerRef']);
        return (0, i.jsx)('div', {
            className: m.customContainer,
            children: (0, i.jsx)(
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
                })({}, s)),
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
        return (0, i.jsx)('div', {
            className: m.customColumn,
            children: this.renderContent()
        });
    }
}
function S(e) {
    let { children: t } = e;
    return (0, i.jsx)('div', {
        className: m.customColumn,
        children: (0, i.jsx)('div', {
            className: m.customContainer,
            children: (0, i.jsx)(p.w0Z, {
                className: a()(m.customScroller, m.contentRegionScroller),
                children: t
            })
        })
    });
}
h(j, 'defaultProps', {
    paddingTop: 60,
    paddingBottom: 60
});
var E = (((r = {}).MINIMAL = 'minimal'), (r.CUSTOM = 'custom'), (r.DEFAULT = 'default'), (r.WIDE = 'wide'), (r.SCROLLABLE_CUSTOM = 'scrollableCustom'), r);
let P = Object.freeze({
    minimal: 'contentColumnMinimal',
    custom: 'contentColumnCustom',
    default: 'contentColumnDefault',
    wide: 'contentColumnWide',
    scrollableCustom: 'contentColumnCustom'
});
function x(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: r } = e,
        s = l.useRef(null);
    return null == r
        ? null
        : (0, i.jsx)('div', {
              className: a()(m.toolsContainer, {
                  [m.mobileToolsContainer]: t,
                  [m.mobileSidebarTools]: t,
                  [m.closeIconOnly]: !n,
                  [m.isMobileAndroid]: !n && !0 === (0, b.isAndroidWeb)()
              }),
              ref: s,
              children: (0, i.jsx)(p.JcV, {
                  containerRef: s,
                  children: (0, i.jsx)('div', {
                      className: m.tools,
                      children: (0, i.jsx)(v.Z, {
                          className: a()({ [m.mobileToolsCloseIcon]: t }),
                          closeAction: r,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
let C = function (e) {
    let { sidebar: t, content: n, notice: r, section: s, closeAction: o, sidebarTheme: b, contentType: v, scrollerRef: h, mobileSidebarOpen: O, toggleSidebar: j, hideSidebar: S = !1 } = e,
        E = l.useRef(null),
        C = l.useRef(null),
        _ = (0, g.Z)(s),
        w = (0, p.Yzy)(
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
        N = l.useCallback(
            (e) => {
                ((E.current = e), null != h && (h.current = e));
            },
            [h]
        );
    l.useLayoutEffect(() => {
        null != E.current && _ !== s && E.current.scrollTo({ to: 0 });
    }, [s, _, E]);
    let T = (0, i.jsx)(x, {
        isMobile: d.tq,
        mobileSidebarOpen: O,
        closeAction: o
    });
    function I() {
        return null == r
            ? null
            : (0, i.jsx)(
                  p.oXn,
                  {
                      className: a()(m.noticeRegion, { [m.noticeRegionHiddenSidebar]: S }),
                      children: r
                  },
                  s
              );
    }
    return (0, i.jsx)(i.Fragment, {
        children: w((e, r) =>
            (0, i.jsxs)(c.animated.div, {
                style: e,
                className: m.standardSidebarView,
                children: [
                    !r &&
                        (null == t
                            ? null
                            : (0, i.jsx)(p.f6W, {
                                  theme: b,
                                  children: (e) =>
                                      (0, i.jsx)('div', {
                                          className: a()(m.sidebarRegion, e, {
                                              [m.flexFullWidth]: d.tq,
                                              [m.hidden]: d.tq && !1 === O
                                          }),
                                          children: (0, i.jsx)(p.h21, {
                                              className: m.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, i.jsxs)('nav', {
                                                  className: a()(m.sidebar, { [m.mobileSidebar]: d.tq }),
                                                  children: [
                                                      d.tq &&
                                                          (0, i.jsx)('div', {
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
                        let e = null != j && null != o && O,
                            t =
                                d.tq &&
                                (0, i.jsxs)('div', {
                                    className: a()(m.mobileContentHeader, { [m.hideHamburger]: !e }),
                                    children: [e && (0, i.jsx)(u.r, { onClick: j }), T]
                                });
                        if ('custom' === v)
                            return (0, i.jsxs)(f.W, {
                                component: 'div',
                                className: m.contentRegion,
                                children: [t, n, !d.tq && T, I()]
                            });
                        if ('scrollableCustom' === v)
                            return (0, i.jsxs)(f.W, {
                                component: 'div',
                                className: m.contentRegion,
                                children: [
                                    t,
                                    (0, i.jsxs)(p.yWw, {
                                        className: a()(m.contentRegionScroller, S ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar),
                                        ref: N,
                                        children: [
                                            (0, i.jsx)(y.Provider, {
                                                value: E.current,
                                                children: (0, i.jsx)('div', {
                                                    ref: C,
                                                    className: m.contentColumnScrollable,
                                                    children: (0, i.jsx)(p.JcV, {
                                                        containerRef: C,
                                                        children: n
                                                    })
                                                })
                                            }),
                                            !d.tq && T
                                        ]
                                    }),
                                    I()
                                ]
                            });
                        let r = P[null != v ? v : 'default'];
                        return (0, i.jsxs)(f.W, {
                            component: 'div',
                            className: a()(m.contentRegion, { [m.hidden]: d.tq && !0 === O }),
                            children: [
                                (0, i.jsxs)('div', {
                                    className: m.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, i.jsxs)(p.yWw, {
                                            className: a()(m.contentRegionScroller, S ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar),
                                            ref: N,
                                            children: [
                                                (0, i.jsx)(y.Provider, {
                                                    value: E.current,
                                                    children: (0, i.jsx)(p.njP.Panel, {
                                                        id: s,
                                                        className: a()(m.contentColumn, m[r], { [m.mobileContent]: d.tq }),
                                                        ref: C,
                                                        style: d.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: S
                                                            ? n
                                                            : (0, i.jsx)(p.JcV, {
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
                                I()
                            ]
                        });
                    })()
                ]
            })
        )
    });
};
