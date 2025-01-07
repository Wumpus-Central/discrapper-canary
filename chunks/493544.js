n.d(t, {
    ID: function () {
        return N;
    },
    NM: function () {
        return P;
    },
    Xi: function () {
        return y;
    },
    bT: function () {
        return a;
    }
});
var i,
    l,
    s,
    r,
    o,
    a,
    c = n(200651),
    u = n(192379),
    d = n(120356),
    h = n.n(d),
    m = n(666912),
    p = n(608863),
    b = n(873546),
    f = n(215569),
    v = n(481060),
    S = n(110924),
    x = n(358085),
    g = n(425493),
    j = n(670189);
let N = {
        HEADER: 'HEADER',
        DIVIDER: 'DIVIDER',
        CUSTOM: 'CUSTOM'
    },
    C = u.createContext(null);
class y extends (o = u.PureComponent) {
    renderContent() {
        let { scrollerRef: e, ...t } = this.props;
        return (0, c.jsx)('div', {
            className: j.customContainer,
            children: (0, c.jsx)(v.ListAuto, {
                ...t,
                className: h()(j.customScroller, j.contentRegionScroller),
                ref: e
            })
        });
    }
    render() {
        return (0, c.jsx)('div', {
            className: j.customColumn,
            children: this.renderContent()
        });
    }
}
function P(e) {
    let { children: t } = e;
    return (0, c.jsx)('div', {
        className: j.customColumn,
        children: (0, c.jsx)('div', {
            className: j.customContainer,
            children: (0, c.jsx)(v.ScrollerAuto, {
                className: h()(j.customScroller, j.contentRegionScroller),
                children: t
            })
        })
    });
}
(s = {
    paddingTop: 60,
    paddingBottom: 60
}),
    (l = 'defaultProps') in (i = y)
        ? Object.defineProperty(i, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = s),
    ((r = a || (a = {})).MINIMAL = 'minimal'),
    (r.CUSTOM = 'custom'),
    (r.DEFAULT = 'default'),
    (r.WIDE = 'wide');
let T = Object.freeze({
    minimal: 'contentColumnMinimal',
    custom: 'contentColumnCustom',
    default: 'contentColumnDefault',
    wide: 'contentColumnWide'
});
function E(e) {
    let { isMobile: t, mobileSidebarOpen: n, closeAction: i } = e,
        l = u.useRef(null);
    return null == i
        ? null
        : (0, c.jsx)('div', {
              className: h()(j.toolsContainer, {
                  [j.mobileToolsContainer]: t,
                  [j.mobileSidebarTools]: t,
                  [j.closeIconOnly]: !n,
                  [j.isMobileAndroid]: !n && !0 === (0, x.isAndroidWeb)()
              }),
              ref: l,
              children: (0, c.jsx)(v.FocusRingScope, {
                  containerRef: l,
                  children: (0, c.jsx)('div', {
                      className: j.tools,
                      children: (0, c.jsx)(g.Z, {
                          className: h()({ [j.mobileToolsCloseIcon]: t }),
                          closeAction: i,
                          keybind: 'ESC'
                      })
                  })
              })
          });
}
t.ZP = function (e) {
    let { sidebar: t, content: n, notice: i, section: l, closeAction: s, sidebarTheme: r, contentType: o, scrollerRef: a, mobileSidebarOpen: d, toggleSidebar: x, hideSidebar: g = !1 } = e,
        N = u.useRef(null),
        y = u.useRef(null),
        P = (0, S.Z)(l),
        I = (0, v.useTransition)(
            g,
            {
                from: {
                    position: 'absolute',
                    opacity: 0
                },
                enter: { opacity: 1 },
                reverse: g,
                config: m.config.stiff
            },
            'animate-always'
        ),
        R = u.useCallback(
            (e) => {
                (N.current = e), null != a && (a.current = e);
            },
            [a]
        );
    u.useLayoutEffect(() => {
        null != N.current && P !== l && N.current.scrollTo({ to: 0 });
    }, [l, P, N]);
    let A = (0, c.jsx)(E, {
        isMobile: b.tq,
        mobileSidebarOpen: d,
        closeAction: s
    });
    function Z() {
        return null == i
            ? null
            : (0, c.jsx)(
                  v.SlideIn,
                  {
                      className: h()(j.noticeRegion, { [j.noticeRegionHiddenSidebar]: g }),
                      children: i
                  },
                  l
              );
    }
    return (0, c.jsx)(c.Fragment, {
        children: I((e, i) =>
            (0, c.jsxs)(m.animated.div, {
                style: e,
                className: j.standardSidebarView,
                children: [
                    !i &&
                        (null == t
                            ? null
                            : (0, c.jsx)(v.ThemeProvider, {
                                  theme: r,
                                  children: (e) =>
                                      (0, c.jsx)('div', {
                                          className: h()(j.sidebarRegion, e, {
                                              [j.flexFullWidth]: b.tq,
                                              [j.hidden]: b.tq && !1 === d
                                          }),
                                          children: (0, c.jsx)(v.AdvancedScrollerThin, {
                                              className: j.sidebarRegionScroller,
                                              fade: !0,
                                              children: (0, c.jsxs)('nav', {
                                                  className: h()(j.sidebar, { [j.mobileSidebar]: b.tq }),
                                                  children: [
                                                      b.tq &&
                                                          (0, c.jsx)('div', {
                                                              className: j.mobileSidebarHeader,
                                                              children: A
                                                          }),
                                                      t
                                                  ]
                                              })
                                          })
                                      })
                              })),
                    (function () {
                        let e = null != x && null != s && d,
                            t =
                                b.tq &&
                                (0, c.jsxs)('div', {
                                    className: h()(j.mobileContentHeader, { [j.hideHamburger]: !e }),
                                    children: [e && (0, c.jsx)(p.r, { onClick: x }), A]
                                });
                        if ('custom' === o)
                            return (0, c.jsxs)(f.W, {
                                component: 'div',
                                className: j.contentRegion,
                                children: [t, n, !b.tq && A, Z()]
                            });
                        let i = T[null != o ? o : 'default'];
                        return (0, c.jsxs)(f.W, {
                            component: 'div',
                            className: h()(j.contentRegion, { [j.hidden]: b.tq && !0 === d }),
                            children: [
                                (0, c.jsxs)('div', {
                                    className: j.contentTransitionWrap,
                                    children: [
                                        t,
                                        (0, c.jsxs)(v.AdvancedScrollerAuto, {
                                            className: h()(j.contentRegionScroller, g ? j.contentRegionHiddenSidebar : j.contentRegionShownSidebar),
                                            ref: R,
                                            children: [
                                                (0, c.jsx)(C.Provider, {
                                                    value: N.current,
                                                    children: (0, c.jsx)(v.TabBar.Panel, {
                                                        id: l,
                                                        className: h()(j.contentColumn, j[i], { [j.mobileContent]: b.tq }),
                                                        ref: y,
                                                        style: b.tq ? { maxWidth: window.innerWidth } : void 0,
                                                        children: g
                                                            ? n
                                                            : (0, c.jsx)(v.FocusRingScope, {
                                                                  containerRef: y,
                                                                  children: n
                                                              })
                                                    })
                                                }),
                                                !b.tq && A
                                            ]
                                        })
                                    ]
                                }),
                                Z()
                            ]
                        });
                    })()
                ]
            })
        )
    });
};
