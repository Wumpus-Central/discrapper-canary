n.d(t, {
    Qk: () => C,
    WG: () => w,
    ZP: () => D
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(484957),
    l = n(481060),
    c = n(95398),
    u = n(247206),
    d = n(134432),
    f = n(982330),
    _ = n(124347),
    p = n(169525),
    h = n(52824),
    m = n(585483),
    g = n(956664),
    E = n(254109),
    b = n(212459),
    y = n(792297),
    v = n(369171),
    O = n(683528),
    I = n(545093),
    S = n(549635),
    T = n(981631),
    N = n(388032),
    A = n(606584);
function C(e) {
    let { src: t, width: n, height: r, hasMultiple: i = !1, options: o } = e,
        { width: a, height: s } = (0, f.Kc)('preloadMediaViewerLazyImage')
            ? (0, y.p)(i, {
                  width: n,
                  height: r
              })
            : (0, g.zp)(n, r);
    _.ZP.preloadImage({
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
function R(e, t) {
    return ((e % t) + t) % t;
}
function P(e) {
    let { children: t, isObscured: n, src: o } = e,
        [s, l] = i.useState(!1),
        u = i.useCallback(() => {
            l((e) => !e);
        }, []);
    return n
        ? (0, r.jsx)(c.aQ.Provider, {
              value: s,
              children: (0, r.jsx)(
                  c.ZP,
                  {
                      type: c.ZP.Types.ATTACHMENT,
                      reason: p.wk.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: u,
                      children: (e) =>
                          (0, r.jsx)('div', {
                              className: a()(A.obscureWrapper, { [A.obscure]: e }),
                              children: t(e)
                          })
                  },
                  o
              )
          })
        : (0, r.jsx)(r.Fragment, { children: t(!1) });
}
function w(e, t) {
    if ('IMAGE' === e.type) {
        if (!(0, g._H)(e)) return void (0, d.po)(e.url);
        C({
            src: (0, h.q)({
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
function D(e) {
    let { items: t, onIndexChange: n, startIndex: o = 0, shouldRedactExplicitContent: c = !1, shouldHideMediaOptions: d = !1 } = e,
        [f, _] = i.useState(o),
        p = i.useRef(o),
        { zoomed: h, setZoomed: g } = (0, b.Y)(),
        C = i.useCallback(
            (e) => {
                _((e = R(e, t.length))), (p.current = e), null == n || n(e), g(!1);
            },
            [n, t, g]
        );
    i.useEffect(() => {
        let e = () => C(p.current + 1),
            t = () => C(p.current - 1);
        return (
            m.S.subscribe(T.CkL.MODAL_CAROUSEL_NEXT, e),
            m.S.subscribe(T.CkL.MODAL_CAROUSEL_PREV, t),
            () => {
                m.S.unsubscribe(T.CkL.MODAL_CAROUSEL_NEXT, e), m.S.unsubscribe(T.CkL.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [C, g]);
    let w = t[f],
        D = (0, u.KP)(
            {
                type: u.lJ.GenericMedia,
                media: w
            },
            c
        ),
        L = d
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => (0, E.yg)(E.uG.CONTEXT_MENU_OPENED),
        x = t.length > 1;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(v.ZP, {
                children: (e) =>
                    x
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(I.Z, {
                                      onClick: (e) => {
                                          e.stopPropagation(), m.S.dispatch(T.CkL.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: s.j,
                                      tooltip: N.NW.string(N.t.vgfxaG),
                                      className: a()(A.navPrev, e)
                                  }),
                                  (0, r.jsx)(I.Z, {
                                      onClick: (e) => {
                                          e.stopPropagation(), m.S.dispatch(T.CkL.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: l.d4D,
                                      tooltip: N.NW.string(N.t.XiOHRU),
                                      className: a()(A.navNext, e)
                                  })
                              ]
                          })
                        : void 0
            }),
            (0, r.jsx)(y.Z, {
                items: t,
                currentIndex: f,
                children: (e, t) =>
                    (0, r.jsx)(P, {
                        isObscured: !h && D,
                        src: w.url,
                        children: (n) =>
                            (0, r.jsx)(S.Z, {
                                media: w,
                                maxWidth: e,
                                maxHeight: t,
                                obscured: n,
                                onContextMenu: L
                            })
                    })
            }),
            x &&
                (0, r.jsx)(v.ZP, {
                    children: (e) =>
                        (0, r.jsx)(O.Z, {
                            items: t,
                            currentIndex: f,
                            onGalleryItemClick: C,
                            className: e
                        })
                })
        ]
    });
}
