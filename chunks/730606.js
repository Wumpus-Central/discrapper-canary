n.d(t, {
    Qk: () => w,
    WG: () => L,
    ZP: () => M
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(299608),
    l = n.n(s),
    c = n(484957),
    u = n(481060),
    d = n(95398),
    f = n(247206),
    p = n(134432),
    _ = n(982330),
    h = n(124347),
    m = n(169525),
    g = n(52824),
    E = n(585483),
    v = n(956664),
    b = n(254109),
    y = n(212459),
    O = n(792297),
    S = n(369171),
    I = n(683528),
    T = n(545093),
    N = n(549635),
    A = n(981631),
    C = n(388032),
    R = n(609748);
let P = 300;
function w(e) {
    let { src: t, width: n, height: r, hasMultiple: i = !1, options: o } = e,
        { width: a, height: s } = (0, _.Kc)('preloadMediaViewerLazyImage')
            ? (0, O.p)(i, {
                  width: n,
                  height: r
              })
            : (0, v.zp)(n, r);
    h.ZP.preloadImage({
        src: t,
        dimensions: {
            maxWidth: a,
            maxHeight: s,
            imageWidth: n,
            imageHeight: r
        },
        options: o
    });
}
function D(e, t) {
    return ((e % t) + t) % t;
}
function x(e) {
    let { children: t, isObscured: n, src: o } = e,
        [s, l] = i.useState(!1),
        c = i.useCallback(() => {
            l((e) => !e);
        }, []);
    return n
        ? (0, r.jsx)(d.a.Provider, {
              value: s,
              children: (0, r.jsx)(
                  d.Z,
                  {
                      type: d.Z.Types.ATTACHMENT,
                      reason: m.wk.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: c,
                      children: (e) =>
                          (0, r.jsx)(r.Fragment, {
                              children: (0, r.jsx)('div', {
                                  className: a()(R.obscureWrapper, { [R.obscure]: e }),
                                  children: t(e)
                              })
                          })
                  },
                  o
              )
          })
        : (0, r.jsx)(r.Fragment, { children: t(!1) });
}
function L(e, t) {
    if ('IMAGE' === e.type) {
        if (!(0, v._H)(e)) {
            (0, p.po)(e.url);
            return;
        }
        w({
            src: (0, g.q)({
                proxyURL: e.proxyUrl,
                url: e.url
            }),
            width: e.width,
            height: e.height,
            hasMultiple: t,
            options: e
        });
    }
}
function M(e) {
    let { items: t, onIndexChange: n, startIndex: o = 0, shouldRedactExplicitContent: s = !1, shouldHideMediaOptions: d = !1 } = e,
        [p, _] = i.useState(o),
        h = i.useRef(o),
        { zoomed: m, setZoomed: g } = (0, y.Y)(),
        v = i.useCallback(
            (e) => {
                _((e = D(e, t.length))), (h.current = e), null == n || n(e), g(!1);
            },
            [n, t, g]
        );
    i.useEffect(() => {
        let e = l()(() => {
                v(h.current + 1);
            }, P),
            t = l()(() => {
                v(h.current - 1);
            }, P);
        return (
            E.S.subscribe(A.CkL.MODAL_CAROUSEL_NEXT, e),
            E.S.subscribe(A.CkL.MODAL_CAROUSEL_PREV, t),
            () => {
                E.S.unsubscribe(A.CkL.MODAL_CAROUSEL_NEXT, e), E.S.unsubscribe(A.CkL.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [v, g]);
    let w = t[p],
        L = (0, f.KP)(
            {
                type: f.lJ.GenericMedia,
                media: w
            },
            s
        ),
        M = d
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => (0, b.yg)(b.uG.CONTEXT_MENU_OPENED),
        k = t.length > 1;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(S.ZP, {
                children: (e) =>
                    k
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(T.Z, {
                                      onClick: (e) => {
                                          e.stopPropagation(), E.S.dispatch(A.CkL.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: c.j,
                                      tooltip: C.NW.string(C.t.vgfxaG),
                                      className: a()(R.navPrev, e)
                                  }),
                                  (0, r.jsx)(T.Z, {
                                      onClick: (e) => {
                                          e.stopPropagation(), E.S.dispatch(A.CkL.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: u.d4D,
                                      tooltip: C.NW.string(C.t.XiOHRU),
                                      className: a()(R.navNext, e)
                                  })
                              ]
                          })
                        : void 0
            }),
            (0, r.jsx)(O.Z, {
                items: t,
                currentIndex: p,
                children: (e, t) =>
                    (0, r.jsx)(x, {
                        isObscured: !m && L,
                        src: w.url,
                        children: (n) =>
                            (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(N.Z, {
                                    media: w,
                                    maxWidth: e,
                                    maxHeight: t,
                                    obscured: n,
                                    onContextMenu: M
                                })
                            })
                    })
            }),
            k &&
                (0, r.jsx)(S.ZP, {
                    children: (e) =>
                        (0, r.jsx)(I.Z, {
                            items: t,
                            currentIndex: p,
                            onGalleryItemClick: v,
                            className: e
                        })
                })
        ]
    });
}
