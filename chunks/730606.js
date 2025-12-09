n.d(t, {
    Qk: () => C,
    WG: () => R,
    ZP: () => D,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(991621),
    c = n(936141),
    u = n(629710),
    d = n(134432),
    f = n(124347),
    p = n(411405),
    _ = n(52824),
    m = n(585483),
    h = n(956664),
    g = n(254109),
    E = n(212459),
    b = n(792297),
    y = n(369171),
    O = n(683528),
    v = n(545093),
    S = n(549635),
    I = n(981631),
    T = n(388032),
    A = n(810348);
function C(e) {
    let { src: t, width: n, height: r, hasMultiple: i = !1, options: a } = e,
        { width: o, height: s } = (0, b.p)(i, {
            width: n,
            height: r,
        });
    f.ZP.preloadImage({
        src: t,
        dimensions: {
            maxWidth: o,
            maxHeight: s,
            imageWidth: n,
            imageHeight: r,
        },
        options: a,
    });
}
function N(e, t) {
    return ((e % t) + t) % t;
}
function P(e) {
    let { children: t, isObscured: n, src: a } = e,
        [s, l] = i.useState(!1),
        u = i.useCallback(() => {
            l((e) => !e);
        }, []);
    return n
        ? (0, r.jsx)(p.aQ.Provider, {
              value: s,
              children: (0, r.jsx)(
                  p.ZP,
                  {
                      type: p.ZP.Types.ATTACHMENT,
                      reason: c.wk.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: u,
                      children: (e) =>
                          (0, r.jsx)("div", {
                              className: o()(A.obscureWrapper, { [A.obscure]: e }),
                              children: t(e),
                          }),
                  },
                  a,
              ),
          })
        : (0, r.jsx)(r.Fragment, { children: t(!1) });
}
function R(e, t) {
    if ("IMAGE" === e.type) {
        if (!(0, h._H)(e)) return void (0, d.po)(e.url);
        C({
            src: (0, _.q)({
                proxyURL: e.proxyUrl,
                url: e.url,
            }),
            width: e.width,
            height: e.height,
            hasMultiple: t,
            options: e,
        });
    }
}
function D(e) {
    let {
            items: t,
            onIndexChange: n,
            startIndex: a = 0,
            enabledContentHarmTypeFlags: c = 0,
            shouldHideMediaOptions: d = !1,
        } = e,
        [f, p] = i.useState(a),
        _ = i.useRef(a),
        { zoomed: h, setZoomed: C } = (0, E.Y)(),
        R = i.useCallback(
            (e) => {
                p((e = N(e, t.length))), (_.current = e), null == n || n(e), C(!1);
            },
            [n, t, C],
        );
    i.useEffect(() => {
        let e = () => R(_.current + 1),
            t = () => R(_.current - 1);
        return (
            m.S.subscribe(I.CkL.MODAL_CAROUSEL_NEXT, e),
            m.S.subscribe(I.CkL.MODAL_CAROUSEL_PREV, t),
            () => {
                m.S.unsubscribe(I.CkL.MODAL_CAROUSEL_NEXT, e), m.S.unsubscribe(I.CkL.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [R, C]);
    let D = t[f],
        w = (0, u.g4)(
            {
                type: l.l.GenericMedia,
                media: D,
            },
            c,
        ),
        x = d
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => (0, g.yg)(g.uG.CONTEXT_MENU_OPENED),
        L = t.length > 1;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(y.ZP, {
                children: (e) =>
                    L
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(v.Z, {
                                      onClick: (e) => {
                                          e.stopPropagation(), m.S.dispatch(I.CkL.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: s.j9r,
                                      tooltip: T.intl.string(T.t.vgfxaA),
                                      className: o()(A.navPrev, e),
                                  }),
                                  (0, r.jsx)(v.Z, {
                                      onClick: (e) => {
                                          e.stopPropagation(), m.S.dispatch(I.CkL.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: s.d4D,
                                      tooltip: T.intl.string(T.t.XiOHRX),
                                      className: o()(A.navNext, e),
                                  }),
                              ],
                          })
                        : void 0,
            }),
            (0, r.jsx)(b.Z, {
                items: t,
                currentIndex: f,
                children: (e, t) =>
                    (0, r.jsx)(P, {
                        isObscured: !h && w,
                        src: D.url,
                        children: (n) =>
                            (0, r.jsx)(S.ZP, {
                                media: D,
                                maxWidth: e,
                                maxHeight: t,
                                obscured: n,
                                onContextMenu: x,
                            }),
                    }),
            }),
            L &&
                (0, r.jsx)(y.ZP, {
                    children: (e) =>
                        (0, r.jsx)(O.Z, {
                            items: t,
                            currentIndex: f,
                            onGalleryItemClick: R,
                            className: e,
                            enabledContentHarmTypeFlags: c,
                        }),
                }),
        ],
    });
}
