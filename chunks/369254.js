n.d(t, {
    Ay: () => P,
    Z5: () => w,
    t1: () => C,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(930125),
    c = n(338717),
    u = n(282108),
    d = n(776231),
    f = n(619517),
    p = n(302031),
    _ = n(644447),
    h = n(203982),
    m = n(515718),
    g = n(793367),
    E = n(454290),
    b = n(976247),
    y = n(358731),
    O = n(215050),
    A = n(597351),
    v = n(608214),
    S = n(652215),
    I = n(985018),
    T = n(720308);

function C(e) {
    let { src: t, width: n, height: r, hasMultiple: i = !1, options: a } = e,
        { width: s, height: o } = (0, b.z)(i, {
            width: n,
            height: r,
        });
    f.Ay.preloadImage({
        src: t,
        dimensions: {
            maxWidth: s,
            maxHeight: o,
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
        [o, l] = i.useState(!1),
        u = i.useCallback(() => {
            l((e) => !e);
        }, []);
    return n
        ? (0, r.jsx)(p.Bs.Provider, {
              value: o,
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
                              className: s()(T.JT, {
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

function w(e, t) {
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
        w = i.useCallback(
            (e) => {
                p((e = N(e, t.length))), (_.current = e), null == n || n(e), C(!1);
            },
            [n, t, C],
        );
    i.useEffect(() => {
        let e = () => w(_.current + 1),
            t = () => w(_.current - 1);
        return (
            h._.subscribe(S.jej.MODAL_CAROUSEL_NEXT, e),
            h._.subscribe(S.jej.MODAL_CAROUSEL_PREV, t),
            () => {
                h._.unsubscribe(S.jej.MODAL_CAROUSEL_NEXT, e), h._.unsubscribe(S.jej.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [w, C]);
    let P = t[f],
        D = (0, u.qo)(
            {
                type: l.D.GenericMedia,
                media: P,
            },
            c,
        ),
        x = d
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => (0, g.Yq)(g.NJ.CONTEXT_MENU_OPENED),
        L = t.length > 1;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(y.Ay, {
                children: (e) =>
                    L
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(A.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), h._.dispatch(S.jej.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: o.Zge,
                                      tooltip: I.intl.string(I.t.vgfxaA),
                                      className: s()(T.vi, e),
                                  }),
                                  (0, r.jsx)(A.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), h._.dispatch(S.jej.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: o.KS6,
                                      tooltip: I.intl.string(I.t.XiOHRX),
                                      className: s()(T.f8, e),
                                  }),
                              ],
                          })
                        : void 0,
            }),
            (0, r.jsx)(b.A, {
                items: t,
                currentIndex: f,
                children: (e, t) =>
                    (0, r.jsx)(R, {
                        isObscured: !m && D,
                        src: P.url,
                        children: (n) =>
                            (0, r.jsx)(v.Ay, {
                                media: P,
                                maxWidth: e,
                                maxHeight: t,
                                obscured: n,
                                onContextMenu: x,
                            }),
                    }),
            }),
            L &&
                (0, r.jsx)(y.Ay, {
                    children: (e) =>
                        (0, r.jsx)(O.A, {
                            items: t,
                            currentIndex: f,
                            onGalleryItemClick: w,
                            className: e,
                            enabledContentHarmTypeFlags: c,
                        }),
                }),
        ],
    });
}
