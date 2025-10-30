n.d(t, {
    Qk: () => C,
    WG: () => P,
    ZP: () => w,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(991621),
    c = n(936141),
    u = n(629710),
    d = n(134432),
    f = n(124347),
    _ = n(411405),
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
    T = n(981631),
    S = n(388032),
    A = n(652683);
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
function R(e) {
    let { children: t, isObscured: n, src: a } = e,
        [s, l] = i.useState(!1),
        u = i.useCallback(() => {
            l((e) => !e);
        }, []);
    return n
        ? (0, r.jsx)(_.aQ.Provider, {
              value: s,
              children: (0, r.jsx)(
                  _.ZP,
                  {
                      type: _.ZP.Types.ATTACHMENT,
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
function P(e, t) {
    if ("IMAGE" === e.type) {
        if (!(0, m._H)(e)) return void (0, d.po)(e.url);
        C({
            src: (0, p.q)({
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
function w(e) {
    let {
            items: t,
            onIndexChange: n,
            startIndex: a = 0,
            enabledContentHarmTypeFlags: c = 0,
            shouldHideMediaOptions: d = !1,
        } = e,
        [f, _] = i.useState(a),
        p = i.useRef(a),
        { zoomed: m, setZoomed: C } = (0, E.Y)(),
        P = i.useCallback(
            (e) => {
                _((e = N(e, t.length))), (p.current = e), null == n || n(e), C(!1);
            },
            [n, t, C],
        );
    i.useEffect(() => {
        let e = () => P(p.current + 1),
            t = () => P(p.current - 1);
        return (
            h.S.subscribe(T.CkL.MODAL_CAROUSEL_NEXT, e),
            h.S.subscribe(T.CkL.MODAL_CAROUSEL_PREV, t),
            () => {
                h.S.unsubscribe(T.CkL.MODAL_CAROUSEL_NEXT, e), h.S.unsubscribe(T.CkL.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [P, C]);
    let w = t[f],
        D = (0, u.g4)(
            {
                type: l.l.GenericMedia,
                media: w,
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
                                          e.stopPropagation(), h.S.dispatch(T.CkL.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: s.j9r,
                                      tooltip: S.intl.string(S.t.vgfxaA),
                                      className: o()(A.navPrev, e),
                                  }),
                                  (0, r.jsx)(v.Z, {
                                      onClick: (e) => {
                                          e.stopPropagation(), h.S.dispatch(T.CkL.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: s.d4D,
                                      tooltip: S.intl.string(S.t.XiOHRX),
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
                    (0, r.jsx)(R, {
                        isObscured: !m && D,
                        src: w.url,
                        children: (n) =>
                            (0, r.jsx)(I.ZP, {
                                media: w,
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
                            onGalleryItemClick: P,
                            className: e,
                            enabledContentHarmTypeFlags: c,
                        }),
                }),
        ],
    });
}
