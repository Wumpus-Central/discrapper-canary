s.d(t, {
    ID: function () {
        return E;
    },
    NM: function () {
        return T;
    },
    Xi: function () {
        return j;
    },
    bT: function () {
        return a;
    }
});
var n,
    i,
    r,
    o,
    c,
    a,
    l = s(200651),
    u = s(192379),
    d = s(120356),
    f = s.n(d),
    p = s(476183),
    g = s(608863),
    x = s(873546),
    b = s(215569),
    h = s(481060),
    m = s(110924),
    v = s(358085),
    S = s(425493),
    C = s(545192);
let E = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    N = u.createContext(null);
class j extends (c = u.PureComponent) {
    renderContent() {
        let { scrollerRef: e, ...t } = this.props;
        return (0, l.jsx)('div', {
            className: C.customContainer,
            children: (0, l.jsx)(h.ListAuto, {
                ...t,
                className: f()(C.customScroller, C.contentRegionScroller),
                ref: e
            })
        });
    }
    render() {
        return (0, l.jsx)('div', {
            className: C.customColumn,
            children: this.renderContent()
        });
    }
}
function T(e) {
    let { children: t } = e;
    return (0, l.jsx)('div', {
        className: C.customColumn,
        children: (0, l.jsx)('div', {
            className: C.customContainer,
            children: (0, l.jsx)(h.ScrollerAuto, {
                className: f()(C.customScroller, C.contentRegionScroller),
                children: t
            })
        })
    });
}
(r = {
    paddingTop: 60,
    paddingBottom: 60
}),
    (i = 'defaultProps') in (n = j)
        ? Object.defineProperty(n, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (n[i] = r),
    ((o = a || (a = {})).MINIMAL = 'minimal'),
    (o.CUSTOM = 'custom'),
    (o.DEFAULT = 'default'),
    (o.WIDE = 'wide');
let _ = Object.freeze({
    minimal: 'contentColumnMinimal',
    custom: 'contentColumnCustom',
    default: 'contentColumnDefault',
    wide: 'contentColumnWide'
});
function B(e) {
    let { isMobile: t, mobileSidebarOpen: s, closeAction: n } = e,
        i = u.useRef(null);
    return null == n
        ? null
        : (0, l.jsx)('div', {
              className: f()(C.toolsContainer, {
                  [C.mobileToolsContainer]: t,
                  [C.mobileSidebarTools]: t,
                  [C.closeIconOnly]: !s,
                  [C.isMobileAndroid]: !s && !0 === (0, v.isAndroidWeb)()
              }),
              ref: i,
              children: (0, l.jsx)(h.FocusRingScope, {
                  containerRef: i,
                  children: (0, l.jsx)('div', {
                      className: C.tools,
                      children: (0, l.jsx)(S.Z, {
                          className: f()({ [C.mobileToolsCloseIcon]: t }),
                          closeAction: n,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
t.ZP = function (e) {
    let { sidebar: t, content: s, notice: n, section: i, closeAction: r, sidebarTheme: o, contentType: c, scrollerRef: a, mobileSidebarOpen: d, toggleSidebar: v, hideSidebar: S = !1 } = e,
        E = u.useRef(null),
        j = u.useRef(null),
        T = (0, m.Z)(i),
        I = (0, h.useTransition)(
            S,
            {
                from: {
                    position: 'absolute',
                    opacity: 0
                },
                enter: { opacity: 1 },
                reverse: S,
                config: p.config.stiff
            },
            'animate-always'
        ),
        L = u.useCallback(
            (e) => {
                (E.current = e), null != a && (a.current = e);
            },
            [a]
        );
    u.useLayoutEffect(() => {
        null != E.current && T !== i && E.current.scrollTo({ to: 0 });
    }, [i, T, E]);
    let O = (0, l.jsx)(B, {
        isMobile: x.tq,
        mobileSidebarOpen: d,
        closeAction: r
    });
    function R() {
        return null == n
            ? null
            : (0, l.jsx)(
                  h.SlideIn,
                  {
                      className: f()(C.noticeRegion, { [C.noticeRegionHiddenSidebar]: S }),
                      children: n
                  },
                  i
              );
    }
    return (0, l.jsx)(l.Fragment, {
        children: I((e, n) =>
            (0, l.jsxs)(p.animated.div, {
                style: e,
                className: C.standardSidebarView,
                children: [
                    !n &&
                        (null == t
                            ? null
                            : (0, l.jsx)(h.ThemeProvider, {
                                  theme: o,
                                  children: (e) =>
                                      (0, l.jsx)('div', {
                                          className: f()(C.sidebarRegion, e, {
                                              [C.flexFullWidth]: x.tq,
                                              [C.hidden]: x.tq && !1 === d
                                          }),
                                          children: (0, l.jsx)(h.AdvancedScrollerThin, {
                                              className: C.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, l.jsxs)('nav', {
                                                  className: f()(C.sidebar, { [C.mobileSidebar]: x.tq }),
                                                  children: [
                                                      x.tq &&
                                                          (0, l.jsx)('div', {
                                                              className: C.mobileSidebarHeader,
                                                              children: O
                                                          }),
                                                      t
                                                  ]
                                              })
                                          })
                                      })
                              })),
                    (function () {
                        let e = null != v && null != r && d,
                            t =
                                x.tq &&
                                (0, l.jsxs)('div', {
                                    className: f()(C.mobileContentHeader, { [C.hideHamburger]: !e }),
                                    children: [e && (0, l.jsx)(g.r, { onClick: v }), O]
                                });
                        if ('custom' === c)
                            return (0, l.jsxs)(b.W, {
                                component: 'div',
                                className: C.contentRegion,
                                children: [t, s, !x.tq && O, R()]
                            });
                        let n = _[null != c ? c : 'default'];
                        return (0, l.jsxs)(b.W, {
                            component: 'div',
                            className: f()(C.contentRegion, { [C.hidden]: x.tq && !0 === d }),
                            children: [
                                (0, l.jsxs)('div', {
                                    className: C.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, l.jsxs)(h.AdvancedScrollerAuto, {
                                            className: f()(C.contentRegionScroller, S ? C.contentRegionHiddenSidebar : C.contentRegionShownSidebar),
                                            ref: L,
                                            children: [
                                                (0, l.jsx)(N.Provider, {
                                                    value: E.current,
                                                    children: (0, l.jsx)(h.TabBar.Panel, {
                                                        id: i,
                                                        className: f()(C.contentColumn, C[n], { [C.mobileContent]: x.tq }),
                                                        ref: j,
                                                        style: x.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: S
                                                            ? s
                                                            : (0, l.jsx)(h.FocusRingScope, {
                                                                  containerRef: j,
                                                                  children: s
                                                              })
                                                    })
                                                }),
                                                !x.tq && O
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
