r.d(n, {
    Qk: function () {
        return x;
    },
    WG: function () {
        return B;
    },
    ZP: function () {
        return G;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(299608),
    c = r.n(u),
    d = r(484957),
    f = r(481060),
    p = r(95398),
    h = r(247206),
    _ = r(134432),
    m = r(982330),
    g = r(124347),
    E = r(169525),
    v = r(52824),
    y = r(585483),
    b = r(956664),
    I = r(254109),
    T = r(212459),
    S = r(369171),
    A = r(683528),
    C = r(549635),
    N = r(981631),
    R = r(388032),
    O = r(563297);
let D = 300;
function x(e) {
    let { src: n, width: r, height: i, options: a, hasMultiple: o = !1 } = e,
        s = (0, m.Kc)('preloadMediaViewerLazyImage') ? M + k + (o ? U : 0) : 0,
        { width: l, height: u } = (0, b.zp)(r, i, {
            vertical: s,
            horizontal: 0
        });
    g.ZP.preloadImage({
        src: n,
        dimensions: {
            maxWidth: l,
            maxHeight: u,
            imageWidth: r,
            imageHeight: i
        },
        options: a
    });
}
function L(e, n) {
    return ((e % n) + n) % n;
}
function w(e) {
    let { width: n, height: r } = e;
    return null == n || 0 === n || null == r || 0 === r;
}
function P(e) {
    let { children: n, isObscured: r, src: i } = e,
        [s, u] = o.useState(!1),
        c = o.useCallback(() => {
            u((e) => !e);
        }, []);
    return r
        ? (0, a.jsx)(p.a.Provider, {
              value: s,
              children: (0, a.jsx)(
                  p.Z,
                  {
                      type: p.Z.Types.ATTACHMENT,
                      reason: E.wk.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: c,
                      children: (e) =>
                          (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsx)('div', {
                                  className: l()(O.obscureWrapper, { [O.obscure]: e }),
                                  children: n(e)
                              })
                          })
                  },
                  i
              )
          })
        : (0, a.jsx)(a.Fragment, { children: n(!1) });
}
let M = 112,
    k = 144,
    U = 64;
function B(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if ('IMAGE' !== e.type) return;
    if (w(e)) {
        (0, _.po)(e.url);
        return;
    }
    if (null != e.width && null != e.height)
        x({
            src: (0, v.q)({
                proxyURL: e.proxyUrl,
                url: e.url
            }),
            width: e.width,
            height: e.height,
            options: e,
            hasMultiple: n
        });
}
function G(e) {
    let { items: n, onIndexChange: r, startIndex: i = 0, shouldRedactExplicitContent: s = !1, shouldHideMediaOptions: u = !1 } = e,
        [p, _] = o.useState(i),
        m = o.useRef(i),
        { zoomed: g, setZoomed: E } = (0, T.Y)();
    o.useEffect(() => {
        if (n.length > 1) {
            let e = L(p + 1, n.length),
                r = L(p - 1, n.length);
            B(n[e]), B(n[r]);
        }
    }, [p, n]);
    let v = o.useCallback(
        (e) => {
            _((e = L(e, n.length))), (m.current = e), null == r || r(e), E(!1);
        },
        [r, n, E]
    );
    o.useEffect(() => {
        let e = c()(() => {
                v(m.current + 1);
            }, D),
            n = c()(() => {
                v(m.current - 1);
            }, D);
        return (
            y.S.subscribe(N.CkL.MODAL_CAROUSEL_NEXT, e),
            y.S.subscribe(N.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
                y.S.unsubscribe(N.CkL.MODAL_CAROUSEL_NEXT, e), y.S.unsubscribe(N.CkL.MODAL_CAROUSEL_PREV, n);
            }
        );
    }, [v, E]);
    let b = n[p],
        x = (0, h.KP)(
            {
                type: h.lJ.GenericMedia,
                media: b
            },
            s
        ),
        w = u
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => (0, I.yg)(I.uG.CONTEXT_MENU_OPENED),
        G = n.length > 1;
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: O.wrapper,
            children: [
                G
                    ? (0, a.jsx)(S.ZP, {
                          children: (e) =>
                              (0, a.jsx)(f.CircleIconButton, {
                                  className: l()(O.navPrev, e),
                                  size: f.CircleIconButtonSizes.SIZE_36,
                                  onMouseDown: (e) => e.stopPropagation(),
                                  onClick: () => y.S.dispatch(N.CkL.MODAL_CAROUSEL_PREV),
                                  icon: (0, a.jsx)(d.j, {}),
                                  tooltip: R.intl.string(R.t.vgfxaG),
                                  color: f.CircleIconButtonColors.PRIMARY
                              })
                      })
                    : null,
                (0, a.jsx)('div', {
                    className: O.mediaContainer,
                    children: (0, a.jsx)(
                        'div',
                        {
                            className: l()(O.mediaWrapper, { [O.hasPreviews]: G }),
                            children: (0, a.jsx)(P, {
                                isObscured: !g && x,
                                src: b.url,
                                children: (e) =>
                                    (0, a.jsx)(a.Fragment, {
                                        children: (0, a.jsx)('div', {
                                            onMouseDown: (e) => e.stopPropagation(),
                                            className: l()(O.innerWrapper, { [O.shifted]: g && G }),
                                            children: (0, a.jsx)(C.Z, {
                                                media: b,
                                                obscured: e,
                                                onContextMenu: w,
                                                padding: {
                                                    top: M,
                                                    bottom: k + (G ? U : 0)
                                                }
                                            })
                                        })
                                    })
                            })
                        },
                        b.url
                    )
                }),
                G
                    ? (0, a.jsx)(S.ZP, {
                          children: (e) =>
                              (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(A.Z, {
                                          items: n,
                                          currentIndex: p,
                                          onGalleryItemClick: _,
                                          className: e
                                      }),
                                      (0, a.jsx)(f.CircleIconButton, {
                                          className: l()(O.navNext, e),
                                          size: f.CircleIconButtonSizes.SIZE_36,
                                          onMouseDown: (e) => e.stopPropagation(),
                                          onClick: () => y.S.dispatch(N.CkL.MODAL_CAROUSEL_NEXT),
                                          icon: (0, a.jsx)(f.ArrowLargeRightIcon, {}),
                                          tooltip: R.intl.string(R.t.XiOHRU),
                                          color: f.CircleIconButtonColors.PRIMARY
                                      })
                                  ]
                              })
                      })
                    : null
            ]
        })
    });
}
