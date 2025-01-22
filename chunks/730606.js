t.d(n, {
    Z: function () {
        return O;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(299608),
    s = t.n(o),
    u = t(484957),
    c = t(481060),
    d = t(95398),
    f = t(247206),
    m = t(134432),
    h = t(169525),
    p = t(585483),
    g = t(254109),
    _ = t(212459),
    E = t(369171),
    S = t(683528),
    x = t(549635),
    C = t(981631),
    v = t(388032),
    y = t(563297);
function I(e, n) {
    return ((e % n) + n) % n;
}
function b(e) {
    let { width: n, height: t } = e;
    return null == n || 0 === n || null == t || 0 === t;
}
function M(e) {
    let { children: n, isObscured: t, src: r } = e,
        [o, s] = l.useState(!1),
        u = l.useCallback(() => {
            s((e) => !e);
        }, []);
    return t
        ? (0, i.jsx)(d.a.Provider, {
              value: o,
              children: (0, i.jsx)(
                  d.Z,
                  {
                      type: d.Z.Types.ATTACHMENT,
                      reason: h.wk.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: u,
                      children: (e) =>
                          (0, i.jsx)(i.Fragment, {
                              children: (0, i.jsx)('div', {
                                  className: a()(y.obscureWrapper, { [y.obscure]: e }),
                                  children: n(e)
                              })
                          })
                  },
                  r
              )
          })
        : (0, i.jsx)(i.Fragment, { children: n(!1) });
}
function O(e) {
    let { items: n, onIndexChange: t, startIndex: r = 0, shouldRedactExplicitContent: o = !1, shouldHideMediaOptions: d = !1 } = e,
        [h, I] = l.useState(r),
        O = l.useRef(r),
        { zoomed: L, setZoomed: T } = (0, _.Y)();
    l.useEffect(() => {
        var e, t;
        let i = (((h + 1) % (e = n.length)) + e) % e;
        let l = (((h - 1) % (t = n.length)) + t) % t;
        b(n[i]) && (0, m.po)(n[i].url), b(n[l]) && (0, m.po)(n[l].url);
    }, [h, n]);
    let A = l.useCallback(
        (e) => {
            var i;
            I((e = ((e % (i = n.length)) + i) % i)), (O.current = e), null == t || t(e), T(!1);
        },
        [t, n, T]
    );
    l.useEffect(() => {
        let e = s()(() => {
                A(O.current + 1);
            }, 300),
            n = s()(() => {
                A(O.current - 1);
            }, 300);
        return (
            p.S.subscribe(C.CkL.MODAL_CAROUSEL_NEXT, e),
            p.S.subscribe(C.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
                p.S.unsubscribe(C.CkL.MODAL_CAROUSEL_NEXT, e), p.S.unsubscribe(C.CkL.MODAL_CAROUSEL_PREV, n);
            }
        );
    }, [A, T]);
    let R = n[h],
        D = (0, f.KP)(
            {
                type: f.lJ.GenericMedia,
                media: R
            },
            o
        ),
        j = d
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => (0, g.yg)(g.uG.CONTEXT_MENU_OPENED),
        N = n.length > 1;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: y.wrapper,
            children: [
                N
                    ? (0, i.jsx)(E.ZP, {
                          children: (e) =>
                              (0, i.jsx)(c.CircleIconButton, {
                                  className: a()(y.navPrev, e),
                                  size: c.CircleIconButtonSizes.SIZE_36,
                                  onMouseDown: (e) => e.stopPropagation(),
                                  onClick: () => p.S.dispatch(C.CkL.MODAL_CAROUSEL_PREV),
                                  icon: (0, i.jsx)(u.j, {}),
                                  tooltip: v.intl.string(v.t.vgfxaG),
                                  color: c.CircleIconButtonColors.PRIMARY
                              })
                      })
                    : null,
                (0, i.jsx)('div', {
                    className: y.mediaContainer,
                    children: (0, i.jsx)(
                        'div',
                        {
                            className: a()(y.mediaWrapper, { [y.hasPreviews]: N }),
                            children: (0, i.jsx)(M, {
                                isObscured: !L && D,
                                src: R.url,
                                children: (e) =>
                                    (0, i.jsx)(i.Fragment, {
                                        children: (0, i.jsx)('div', {
                                            onMouseDown: (e) => e.stopPropagation(),
                                            className: a()(y.innerWrapper, { [y.shifted]: L && N }),
                                            children: (0, i.jsx)(x.Z, {
                                                media: R,
                                                obscured: e,
                                                onContextMenu: j,
                                                padding: {
                                                    top: 112,
                                                    bottom: 144 + (N ? 64 : 0)
                                                }
                                            })
                                        })
                                    })
                            })
                        },
                        R.url
                    )
                }),
                N
                    ? (0, i.jsx)(E.ZP, {
                          children: (e) =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(S.Z, {
                                          items: n,
                                          currentIndex: h,
                                          onGalleryItemClick: I,
                                          className: e
                                      }),
                                      (0, i.jsx)(c.CircleIconButton, {
                                          className: a()(y.navNext, e),
                                          size: c.CircleIconButtonSizes.SIZE_36,
                                          onMouseDown: (e) => e.stopPropagation(),
                                          onClick: () => p.S.dispatch(C.CkL.MODAL_CAROUSEL_NEXT),
                                          icon: (0, i.jsx)(c.ArrowLargeRightIcon, {}),
                                          tooltip: v.intl.string(v.t.XiOHRU),
                                          color: c.CircleIconButtonColors.PRIMARY
                                      })
                                  ]
                              })
                      })
                    : null
            ]
        })
    });
}
