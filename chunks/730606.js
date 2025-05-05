n.d(t, {
    Qk: () => A,
    WG: () => R,
    ZP: () => P
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(95398),
    c = n(247206),
    u = n(134432),
    d = n(124347),
    f = n(169525),
    _ = n(52824),
    p = n(585483),
    h = n(956664),
    m = n(254109),
    g = n(212459),
    E = n(792297),
    b = n(369171),
    y = n(683528),
    O = n(545093),
    v = n(549635),
    I = n(981631),
    S = n(388032),
    T = n(606584);
function A(e) {
    let { src: t, width: n, height: r, hasMultiple: i = !1, options: a } = e,
        { width: o, height: s } = (0, E.p)(i, {
            width: n,
            height: r
        });
    d.ZP.preloadImage({
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
function N(e, t) {
    return ((e % t) + t) % t;
}
function C(e) {
    let { children: t, isObscured: n, src: a } = e,
        [s, c] = i.useState(!1),
        u = i.useCallback(() => {
            c((e) => !e);
        }, []);
    return n
        ? (0, r.jsx)(l.aQ.Provider, {
              value: s,
              children: (0, r.jsx)(
                  l.ZP,
                  {
                      type: l.ZP.Types.ATTACHMENT,
                      reason: f.wk.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: u,
                      children: (e) =>
                          (0, r.jsx)('div', {
                              className: o()(T.obscureWrapper, { [T.obscure]: e }),
                              children: t(e)
                          })
                  },
                  a
              )
          })
        : (0, r.jsx)(r.Fragment, { children: t(!1) });
}
function R(e, t) {
    if ('IMAGE' === e.type) {
        if (!(0, h._H)(e)) return void (0, u.po)(e.url);
        A({
            src: (0, _.q)({
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
function P(e) {
    let { items: t, onIndexChange: n, startIndex: a = 0, shouldRedactExplicitContent: l = !1, shouldHideMediaOptions: u = !1 } = e,
        [d, f] = i.useState(a),
        _ = i.useRef(a),
        { zoomed: h, setZoomed: A } = (0, g.Y)(),
        R = i.useCallback(
            (e) => {
                f((e = N(e, t.length))), (_.current = e), null == n || n(e), A(!1);
            },
            [n, t, A]
        );
    i.useEffect(() => {
        let e = () => R(_.current + 1),
            t = () => R(_.current - 1);
        return (
            p.S.subscribe(I.CkL.MODAL_CAROUSEL_NEXT, e),
            p.S.subscribe(I.CkL.MODAL_CAROUSEL_PREV, t),
            () => {
                p.S.unsubscribe(I.CkL.MODAL_CAROUSEL_NEXT, e), p.S.unsubscribe(I.CkL.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [R, A]);
    let P = t[d],
        w = (0, c.KP)(
            {
                type: c.lJ.GenericMedia,
                media: P
            },
            l
        ),
        D = u
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => (0, m.yg)(m.uG.CONTEXT_MENU_OPENED),
        L = t.length > 1;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(b.ZP, {
                children: (e) =>
                    L
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(O.Z, {
                                      onClick: (e) => {
                                          e.stopPropagation(), p.S.dispatch(I.CkL.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: s.j9r,
                                      tooltip: S.intl.string(S.t.vgfxaG),
                                      className: o()(T.navPrev, e)
                                  }),
                                  (0, r.jsx)(O.Z, {
                                      onClick: (e) => {
                                          e.stopPropagation(), p.S.dispatch(I.CkL.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: s.d4D,
                                      tooltip: S.intl.string(S.t.XiOHRU),
                                      className: o()(T.navNext, e)
                                  })
                              ]
                          })
                        : void 0
            }),
            (0, r.jsx)(E.Z, {
                items: t,
                currentIndex: d,
                children: (e, t) =>
                    (0, r.jsx)(C, {
                        isObscured: !h && w,
                        src: P.url,
                        children: (n) =>
                            (0, r.jsx)(v.Z, {
                                media: P,
                                maxWidth: e,
                                maxHeight: t,
                                obscured: n,
                                onContextMenu: D
                            })
                    })
            }),
            L &&
                (0, r.jsx)(b.ZP, {
                    children: (e) =>
                        (0, r.jsx)(y.Z, {
                            items: t,
                            currentIndex: d,
                            onGalleryItemClick: R,
                            className: e
                        })
                })
        ]
    });
}
