n.d(t, {
    Ay: () => P,
    Z5: () => R,
    t1: () => C,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(397927),
    l = n(930125),
    c = n(338717),
    u = n(282108),
    d = n(776231),
    f = n(619517),
    p = n(302031),
    _ = n(644447),
    h = n(203982),
    m = n(515718),
    g = n(700331),
    E = n(454290),
    y = n(976247),
    b = n(358731),
    O = n(215050),
    v = n(597351),
    A = n(608214),
    I = n(652215),
    S = n(985018),
    T = n(720308);

function C(e) {
    let { src: t, width: n, height: r, hasMultiple: i = !1, options: a } = e,
        { width: o, height: s } = (0, y.z)(i, {
            width: n,
            height: r,
        });
    f.Ay.preloadImage({
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

function w(e) {
    let { children: t, isObscured: n, src: a } = e,
        [s, l] = i.useState(!1),
        u = i.useCallback(() => {
            l((e) => !e);
        }, []);
    return n
        ? (0, r.jsx)(p.Bs.Provider, {
              value: s,
              children: (0, r.jsx)(
                  p.Ay,
                  {
                      type: p.Ay.Types.ATTACHMENT,
                      reason: c.Oc.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: u,
                      children: (e) =>
                          (0, r.jsx)("div", {
                              className: o()(T.JT, {
                                  [T.Qr]: e,
                              }),
                              children: t(e),
                          }),
                  },
                  a,
              ),
          })
        : (0, r.jsx)(r.Fragment, {
              children: t(!1),
          });
}

function R(e, t) {
    "IMAGE" !== e.type ||
        ((0, m.eJ)(e)
            ? C({
                  src: (0, _.E)({
                      proxyURL: e.proxyUrl,
                      url: e.url,
                  }),
                  width: e.width,
                  height: e.height,
                  hasMultiple: t,
                  options: e,
              })
            : (0, d.yt)(e.url));
}

function P(e) {
    let {
            items: t,
            onIndexChange: n,
            startIndex: a = 0,
            enabledContentHarmTypeFlags: c = 0,
            shouldHideMediaOptions: d = !1,
        } = e,
        [f, p] = i.useState(a),
        _ = i.useRef(a),
        { zoomed: m, setZoomed: C } = (0, E.Q)(),
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
            h._.subscribe(I.jej.MODAL_CAROUSEL_NEXT, e),
            h._.subscribe(I.jej.MODAL_CAROUSEL_PREV, t),
            () => {
                h._.unsubscribe(I.jej.MODAL_CAROUSEL_NEXT, e), h._.unsubscribe(I.jej.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [R, C]);
    let P = t[f],
        D = (0, u.qo)(
            {
                type: l.D.GenericMedia,
                media: P,
            },
            c,
        ),
        L = d
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => g.l.markActionPerformed(g.N.CONTEXT_MENU_OPENED),
        x = t.length > 1;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(b.Ay, {
                children: (e) =>
                    x
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(v.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), h._.dispatch(I.jej.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: s.Zge,
                                      tooltip: S.intl.string(S.t.vgfxaA),
                                      className: o()(T.vi, e),
                                  }),
                                  (0, r.jsx)(v.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), h._.dispatch(I.jej.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: s.KS6,
                                      tooltip: S.intl.string(S.t.XiOHRX),
                                      className: o()(T.f8, e),
                                  }),
                              ],
                          })
                        : void 0,
            }),
            (0, r.jsx)(y.A, {
                items: t,
                currentIndex: f,
                children: (e, t) =>
                    (0, r.jsx)(w, {
                        isObscured: !m && D,
                        src: P.url,
                        children: (n) =>
                            (0, r.jsx)(A.Ay, {
                                media: P,
                                maxWidth: e,
                                maxHeight: t,
                                obscured: n,
                                onContextMenu: L,
                            }),
                    }),
            }),
            x &&
                (0, r.jsx)(b.Ay, {
                    children: (e) =>
                        (0, r.jsx)(O.A, {
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
