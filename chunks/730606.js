n.d(t, {
    Qk: () => N,
    WG: () => P,
    ZP: () => w
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(484957),
    l = n(481060),
    c = n(95398),
    u = n(247206),
    d = n(134432),
    f = n(124347),
    _ = n(169525),
    p = n(52824),
    h = n(585483),
    m = n(956664),
    g = n(254109),
    E = n(212459),
    b = n(792297),
    y = n(369171),
    v = n(683528),
    O = n(545093),
    I = n(549635),
    S = n(981631),
    T = n(388032),
    A = n(606584);
function N(e) {
    let { src: t, width: n, height: r, hasMultiple: i = !1, options: a } = e,
        { width: o, height: s } = (0, b.p)(i, {
            width: n,
            height: r
        });
    f.ZP.preloadImage({
        src: t,
        dimensions: {
            maxWidth: o,
            maxHeight: s,
            imageWidth: n,
            imageHeight: r
        },
        options: a
    });
}
function C(e, t) {
    return ((e % t) + t) % t;
}
function R(e) {
    let { children: t, isObscured: n, src: a } = e,
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
                      reason: _.wk.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: u,
                      children: (e) =>
                          (0, r.jsx)('div', {
                              className: o()(A.obscureWrapper, { [A.obscure]: e }),
                              children: t(e)
                          })
                  },
                  a
              )
          })
        : (0, r.jsx)(r.Fragment, { children: t(!1) });
}
function P(e, t) {
    if ('IMAGE' === e.type) {
        if (!(0, m._H)(e)) return void (0, d.po)(e.url);
        N({
            src: (0, p.q)({
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
function w(e) {
    let { items: t, onIndexChange: n, startIndex: a = 0, shouldRedactExplicitContent: c = !1, shouldHideMediaOptions: d = !1 } = e,
        [f, _] = i.useState(a),
        p = i.useRef(a),
        { zoomed: m, setZoomed: N } = (0, E.Y)(),
        P = i.useCallback(
            (e) => {
                _((e = C(e, t.length))), (p.current = e), null == n || n(e), N(!1);
            },
            [n, t, N]
        );
    i.useEffect(() => {
        let e = () => P(p.current + 1),
            t = () => P(p.current - 1);
        return (
            h.S.subscribe(S.CkL.MODAL_CAROUSEL_NEXT, e),
            h.S.subscribe(S.CkL.MODAL_CAROUSEL_PREV, t),
            () => {
                h.S.unsubscribe(S.CkL.MODAL_CAROUSEL_NEXT, e), h.S.unsubscribe(S.CkL.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [P, N]);
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
            : () => (0, g.yg)(g.uG.CONTEXT_MENU_OPENED),
        x = t.length > 1;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(y.ZP, {
                children: (e) =>
                    x
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(O.Z, {
                                      onClick: (e) => {
                                          e.stopPropagation(), h.S.dispatch(S.CkL.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: s.j,
                                      tooltip: T.intl.string(T.t.vgfxaG),
                                      className: o()(A.navPrev, e)
                                  }),
                                  (0, r.jsx)(O.Z, {
                                      onClick: (e) => {
                                          e.stopPropagation(), h.S.dispatch(S.CkL.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: l.d4D,
                                      tooltip: T.intl.string(T.t.XiOHRU),
                                      className: o()(A.navNext, e)
                                  })
                              ]
                          })
                        : void 0
            }),
            (0, r.jsx)(b.Z, {
                items: t,
                currentIndex: f,
                children: (e, t) =>
                    (0, r.jsx)(R, {
                        isObscured: !m && D,
                        src: w.url,
                        children: (n) =>
                            (0, r.jsx)(I.Z, {
                                media: w,
                                maxWidth: e,
                                maxHeight: t,
                                obscured: n,
                                onContextMenu: L
                            })
                    })
            }),
            x &&
                (0, r.jsx)(y.ZP, {
                    children: (e) =>
                        (0, r.jsx)(v.Z, {
                            items: t,
                            currentIndex: f,
                            onGalleryItemClick: P,
                            className: e
                        })
                })
        ]
    });
}
