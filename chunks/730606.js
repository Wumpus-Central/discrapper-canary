n.d(t, {
    Qk: () => N,
    WG: () => P,
    ZP: () => w
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(95398),
    c = n(991621),
    u = n(936141),
    d = n(629710),
    f = n(134432),
    _ = n(124347),
    p = n(52824),
    h = n(585483),
    m = n(956664),
    g = n(254109),
    E = n(212459),
    b = n(792297),
    y = n(369171),
    O = n(683528),
    v = n(545093),
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
    _.ZP.preloadImage({
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
        [s, c] = i.useState(!1),
        d = i.useCallback(() => {
            c((e) => !e);
        }, []);
    return n
        ? (0, r.jsx)(l.aQ.Provider, {
              value: s,
              children: (0, r.jsx)(
                  l.ZP,
                  {
                      type: l.ZP.Types.ATTACHMENT,
                      reason: u.wk.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: d,
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
        if (!(0, m._H)(e)) return void (0, f.po)(e.url);
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
    let { items: t, onIndexChange: n, startIndex: a = 0, enabledContentHarmTypeFlags: l = 0, shouldHideMediaOptions: u = !1 } = e,
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
        D = (0, d.g4)(
            {
                type: c.l.GenericMedia,
                media: w
            },
            l
        ),
        L = u
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
                                  (0, r.jsx)(v.Z, {
                                      onClick: (e) => {
                                          e.stopPropagation(), h.S.dispatch(S.CkL.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: s.j9r,
                                      tooltip: T.intl.string(T.t.vgfxaG),
                                      className: o()(A.navPrev, e)
                                  }),
                                  (0, r.jsx)(v.Z, {
                                      onClick: (e) => {
                                          e.stopPropagation(), h.S.dispatch(S.CkL.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: s.d4D,
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
                            (0, r.jsx)(I.ZP, {
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
                        (0, r.jsx)(O.Z, {
                            items: t,
                            currentIndex: f,
                            onGalleryItemClick: P,
                            className: e
                        })
                })
        ]
    });
}
