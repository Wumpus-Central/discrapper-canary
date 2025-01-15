n.d(t, {
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
        return l;
    }
});
var s,
    i,
    r,
    o,
    c,
    l,
    a = n(200651),
    u = n(192379),
    d = n(120356),
    f = n.n(d),
    p = n(476183),
    g = n(608863),
    x = n(873546),
    h = n(215569),
    b = n(481060),
    m = n(110924),
    v = n(358085),
    S = n(425493),
    C = n(670189);
let E = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    N = u.createContext(null);
class j extends (c = u.PureComponent) {
    renderContent() {
        let { scrollerRef: e, ...t } = this.props;
        return (0, a.jsx)('div', {
            className: C.customContainer,
            children: (0, a.jsx)(b.ListAuto, {
                ...t,
                className: f()(C.customScroller, C.contentRegionScroller),
                ref: e
            })
        });
    }
    render() {
        return (0, a.jsx)('div', {
            className: C.customColumn,
            children: this.renderContent()
        });
    }
}
function T(e) {
    let { children: t } = e;
    return (0, a.jsx)('div', {
        className: C.customColumn,
        children: (0, a.jsx)('div', {
            className: C.customContainer,
            children: (0, a.jsx)(b.ScrollerAuto, {
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
    (i = 'defaultProps') in (s = j)
        ? Object.defineProperty(s, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[i] = r),
    ((o = l || (l = {})).MINIMAL = 'minimal'),
    (o.CUSTOM = 'custom'),
    (o.DEFAULT = 'default'),
    (o.WIDE = 'wide');
let _ = Object.freeze({
    minimal: 'contentColumnMinimal',
    custom: 'contentColumnCustom',
    default: 'contentColumnDefault',
    wide: 'contentColumnWide'
});
function I(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: s } = e,
        i = u.useRef(null);
    return null == s
        ? null
        : (0, a.jsx)('div', {
              className: f()(C.toolsContainer, {
                  [C.mobileToolsContainer]: t,
                  [C.mobileSidebarTools]: t,
                  [C.closeIconOnly]: !n,
                  [C.isMobileAndroid]: !n && !0 === (0, v.isAndroidWeb)()
              }),
              ref: i,
              children: (0, a.jsx)(b.FocusRingScope, {
                  containerRef: i,
                  children: (0, a.jsx)('div', {
                      className: C.tools,
                      children: (0, a.jsx)(S.Z, {
                          className: f()({ [C.mobileToolsCloseIcon]: t }),
                          closeAction: s,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
t.ZP = function (e) {
    let { sidebar: t, content: n, notice: s, section: i, closeAction: r, sidebarTheme: o, contentType: c, scrollerRef: l, mobileSidebarOpen: d, toggleSidebar: v, hideSidebar: S = !1 } = e,
        E = u.useRef(null),
        j = u.useRef(null),
        T = (0, m.Z)(i),
        B = (0, b.useTransition)(
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
                (E.current = e), null != l && (l.current = e);
            },
            [l]
        );
    u.useLayoutEffect(() => {
        null != E.current && T !== i && E.current.scrollTo({ to: 0 });
    }, [i, T, E]);
    let R = (0, a.jsx)(I, {
        isMobile: x.tq,
        mobileSidebarOpen: d,
        closeAction: r
    });
    function O() {
        return null == s
            ? null
            : (0, a.jsx)(
                  b.SlideIn,
                  {
                      className: f()(C.noticeRegion, { [C.noticeRegionHiddenSidebar]: S }),
                      children: s
                  },
                  i
              );
    }
    return (0, a.jsx)(a.Fragment, {
        children: B((e, s) =>
            (0, a.jsxs)(p.animated.div, {
                style: e,
                className: C.standardSidebarView,
                children: [
                    !s &&
                        (null == t
                            ? null
                            : (0, a.jsx)(b.ThemeProvider, {
                                  theme: o,
                                  children: (e) =>
                                      (0, a.jsx)('div', {
                                          className: f()(C.sidebarRegion, e, {
                                              [C.flexFullWidth]: x.tq,
                                              [C.hidden]: x.tq && !1 === d
                                          }),
                                          children: (0, a.jsx)(b.AdvancedScrollerThin, {
                                              className: C.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, a.jsxs)('nav', {
                                                  className: f()(C.sidebar, { [C.mobileSidebar]: x.tq }),
                                                  children: [
                                                      x.tq &&
                                                          (0, a.jsx)('div', {
                                                              className: C.mobileSidebarHeader,
                                                              children: R
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
                                (0, a.jsxs)('div', {
                                    className: f()(C.mobileContentHeader, { [C.hideHamburger]: !e }),
                                    children: [e && (0, a.jsx)(g.r, { onClick: v }), R]
                                });
                        if ('custom' === c)
                            return (0, a.jsxs)(h.W, {
                                component: 'div',
                                className: C.contentRegion,
                                children: [t, n, !x.tq && R, O()]
                            });
                        let s = _[null != c ? c : 'default'];
                        return (0, a.jsxs)(h.W, {
                            component: 'div',
                            className: f()(C.contentRegion, { [C.hidden]: x.tq && !0 === d }),
                            children: [
                                (0, a.jsxs)('div', {
                                    className: C.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, a.jsxs)(b.AdvancedScrollerAuto, {
                                            className: f()(C.contentRegionScroller, S ? C.contentRegionHiddenSidebar : C.contentRegionShownSidebar),
                                            ref: L,
                                            children: [
                                                (0, a.jsx)(N.Provider, {
                                                    value: E.current,
                                                    children: (0, a.jsx)(b.TabBar.Panel, {
                                                        id: i,
                                                        className: f()(C.contentColumn, C[s], { [C.mobileContent]: x.tq }),
                                                        ref: j,
                                                        style: x.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: S
                                                            ? n
                                                            : (0, a.jsx)(b.FocusRingScope, {
                                                                  containerRef: j,
                                                                  children: n
                                                              })
                                                    })
                                                }),
                                                !x.tq && R
                                            ]
                                        })
                                    ]
                                }),
                                O()
                            ]
                        });
                    })()
                ]
            })
        )
    });
};
