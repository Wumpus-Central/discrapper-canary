n.d(t, {
    Qk: () => O,
    WG: () => k,
    ZP: () => U
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(299608),
    l = n.n(o),
    u = n(484957),
    c = n(481060),
    d = n(95398),
    f = n(247206),
    _ = n(134432),
    p = n(982330),
    h = n(124347),
    m = n(169525),
    g = n(52824),
    E = n(585483),
    v = n(956664),
    y = n(254109),
    I = n(212459),
    T = n(369171),
    b = n(683528),
    S = n(549635),
    A = n(981631),
    N = n(388032),
    C = n(268707);
let R = 300;
function O(e) {
    let { src: t, width: n, height: i, options: r, hasMultiple: a = !1 } = e,
        s = (0, p.Kc)('preloadMediaViewerLazyImage') ? P + w + (a ? M : 0) : 0,
        { width: o, height: l } = (0, v.zp)(n, i, {
            vertical: s,
            horizontal: 0
        });
    h.ZP.preloadImage({
        src: t,
        dimensions: {
            maxWidth: o,
            maxHeight: l,
            imageWidth: n,
            imageHeight: i
        },
        options: r
    });
}
function D(e, t) {
    return ((e % t) + t) % t;
}
function L(e) {
    let { width: t, height: n } = e;
    return null == t || 0 === t || null == n || 0 === n;
}
function x(e) {
    let { children: t, isObscured: n, src: a } = e,
        [o, l] = r.useState(!1),
        u = r.useCallback(() => {
            l((e) => !e);
        }, []);
    return n
        ? (0, i.jsx)(d.a.Provider, {
              value: o,
              children: (0, i.jsx)(
                  d.Z,
                  {
                      type: d.Z.Types.ATTACHMENT,
                      reason: m.wk.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: u,
                      children: (e) =>
                          (0, i.jsx)(i.Fragment, {
                              children: (0, i.jsx)('div', {
                                  className: s()(C.obscureWrapper, { [C.obscure]: e }),
                                  children: t(e)
                              })
                          })
                  },
                  a
              )
          })
        : (0, i.jsx)(i.Fragment, { children: t(!1) });
}
let P = 112,
    w = 144,
    M = 64;
function k(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if ('IMAGE' === e.type) {
        if (L(e)) {
            (0, _.po)(e.url);
            return;
        }
        null != e.width &&
            null != e.height &&
            O({
                src: (0, g.q)({
                    proxyURL: e.proxyUrl,
                    url: e.url
                }),
                width: e.width,
                height: e.height,
                options: e,
                hasMultiple: t
            });
    }
}
function U(e) {
    let { items: t, onIndexChange: n, startIndex: a = 0, shouldRedactExplicitContent: o = !1, shouldHideMediaOptions: d = !1 } = e,
        [_, p] = r.useState(a),
        h = r.useRef(a),
        { zoomed: m, setZoomed: g } = (0, I.Y)();
    r.useEffect(() => {
        if (t.length > 1) {
            let e = D(_ + 1, t.length),
                n = D(_ - 1, t.length);
            k(t[e]), k(t[n]);
        }
    }, [_, t]);
    let v = r.useCallback(
        (e) => {
            p((e = D(e, t.length))), (h.current = e), null == n || n(e), g(!1);
        },
        [n, t, g]
    );
    r.useEffect(() => {
        let e = l()(() => {
                v(h.current + 1);
            }, R),
            t = l()(() => {
                v(h.current - 1);
            }, R);
        return (
            E.S.subscribe(A.CkL.MODAL_CAROUSEL_NEXT, e),
            E.S.subscribe(A.CkL.MODAL_CAROUSEL_PREV, t),
            () => {
                E.S.unsubscribe(A.CkL.MODAL_CAROUSEL_NEXT, e), E.S.unsubscribe(A.CkL.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [v, g]);
    let O = t[_],
        L = (0, f.KP)(
            {
                type: f.lJ.GenericMedia,
                media: O
            },
            o
        ),
        U = d
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => (0, y.yg)(y.uG.CONTEXT_MENU_OPENED),
        G = t.length > 1;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: C.wrapper,
            children: [
                G
                    ? (0, i.jsx)(T.ZP, {
                          children: (e) =>
                              (0, i.jsx)(c.M0o, {
                                  className: s()(C.navPrev, e),
                                  size: c.tT7.SIZE_36,
                                  onMouseDown: (e) => e.stopPropagation(),
                                  onClick: () => E.S.dispatch(A.CkL.MODAL_CAROUSEL_PREV),
                                  icon: (0, i.jsx)(u.j, {}),
                                  tooltip: N.intl.string(N.t.vgfxaG),
                                  color: c.YX$.PRIMARY
                              })
                      })
                    : null,
                (0, i.jsx)('div', {
                    className: C.mediaContainer,
                    children: (0, i.jsx)(
                        'div',
                        {
                            className: s()(C.mediaWrapper, { [C.hasPreviews]: G }),
                            children: (0, i.jsx)(x, {
                                isObscured: !m && L,
                                src: O.url,
                                children: (e) =>
                                    (0, i.jsx)(i.Fragment, {
                                        children: (0, i.jsx)('div', {
                                            onMouseDown: (e) => e.stopPropagation(),
                                            className: s()(C.innerWrapper, { [C.shifted]: m && G }),
                                            children: (0, i.jsx)(S.Z, {
                                                media: O,
                                                obscured: e,
                                                onContextMenu: U,
                                                padding: {
                                                    top: P,
                                                    bottom: w + (G ? M : 0)
                                                }
                                            })
                                        })
                                    })
                            })
                        },
                        O.url
                    )
                }),
                G
                    ? (0, i.jsx)(T.ZP, {
                          children: (e) =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(b.Z, {
                                          items: t,
                                          currentIndex: _,
                                          onGalleryItemClick: p,
                                          className: e
                                      }),
                                      (0, i.jsx)(c.M0o, {
                                          className: s()(C.navNext, e),
                                          size: c.tT7.SIZE_36,
                                          onMouseDown: (e) => e.stopPropagation(),
                                          onClick: () => E.S.dispatch(A.CkL.MODAL_CAROUSEL_NEXT),
                                          icon: (0, i.jsx)(c.d4D, {}),
                                          tooltip: N.intl.string(N.t.XiOHRU),
                                          color: c.YX$.PRIMARY
                                      })
                                  ]
                              })
                      })
                    : null
            ]
        })
    });
}
