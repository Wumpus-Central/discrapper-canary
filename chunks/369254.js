"use strict";
n.d(t, { Ay: () => L, Z5: () => D, t1: () => N });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(930125),
    u = n(338717),
    c = n(282108),
    d = n(776231),
    _ = n(619517),
    f = n(302031),
    p = n(644447),
    h = n(203982),
    m = n(515718),
    g = n(700331),
    E = n(454290),
    A = n(976247),
    I = n(358731),
    T = n(215050),
    y = n(597351),
    S = n(608214),
    v = n(652215),
    C = n(985018),
    b = n(720308);
function N(e) {
    let { src: t, width: n, height: r, hasMultiple: i = !1, options: a } = e,
        { width: s, height: o } = (0, A.z)(i, { width: n, height: r });
    _.Ay.preloadImage({ src: t, dimensions: { maxWidth: s, maxHeight: o, imageWidth: n, imageHeight: r }, options: a });
}
function R(e, t) {
    return ((e % t) + t) % t;
}
function O(e) {
    let { children: t, isObscured: n, src: a } = e,
        [o, l] = i.useState(!1),
        c = i.useCallback(() => {
            l((e) => !e);
        }, []);
    return n
        ? (0, r.jsx)(f.Bs.Provider, {
              value: o,
              children: (0, r.jsx)(
                  f.Ay,
                  {
                      type: f.Ay.Types.ATTACHMENT,
                      reason: u.Oc.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: c,
                      children: (e) => (0, r.jsx)("div", { className: s()(b.JT, { [b.Qr]: e }), children: t(e) }),
                  },
                  a,
              ),
          })
        : (0, r.jsx)(r.Fragment, { children: t(!1) });
}
function D(e, t) {
    "IMAGE" !== e.type ||
        ((0, m.eJ)(e)
            ? N({
                  src: (0, p.E)({ proxyURL: e.proxyUrl, url: e.url }),
                  width: e.width,
                  height: e.height,
                  hasMultiple: t,
                  options: e,
              })
            : (0, d.yt)(e.url));
}
function L(e) {
    let {
            items: t,
            onIndexChange: n,
            startIndex: a = 0,
            enabledContentHarmTypeFlags: u = 0,
            shouldHideMediaOptions: d = !1,
        } = e,
        [_, f] = i.useState(a),
        p = i.useRef(a),
        { zoomed: m, setZoomed: N } = (0, E.Q)(),
        D = i.useCallback(
            (e) => {
                f((e = R(e, t.length))), (p.current = e), n?.(e), N(!1);
            },
            [n, t, N],
        );
    i.useEffect(() => {
        let e = () => D(p.current + 1),
            t = () => D(p.current - 1);
        return (
            h._.subscribe(v.jej.MODAL_CAROUSEL_NEXT, e),
            h._.subscribe(v.jej.MODAL_CAROUSEL_PREV, t),
            () => {
                h._.unsubscribe(v.jej.MODAL_CAROUSEL_NEXT, e), h._.unsubscribe(v.jej.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [D, N]);
    let L = t[_],
        w = (0, c.qo)({ type: l.D.GenericMedia, media: L }, u),
        x = d
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => g.l.markActionPerformed(g.N.CONTEXT_MENU_OPENED),
        P = t.length > 1;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(I.Ay, {
                children: (e) =>
                    P
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(y.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), h._.dispatch(v.jej.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: o.Zge,
                                      tooltip: C.intl.string(C.t.vgfxaA),
                                      className: s()(b.vi, e),
                                  }),
                                  (0, r.jsx)(y.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), h._.dispatch(v.jej.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: o.KS6,
                                      tooltip: C.intl.string(C.t.XiOHRX),
                                      className: s()(b.f8, e),
                                  }),
                              ],
                          })
                        : void 0,
            }),
            (0, r.jsx)(A.A, {
                items: t,
                currentIndex: _,
                children: (e, t) =>
                    (0, r.jsx)(O, {
                        isObscured: !m && w,
                        src: L.url,
                        children: (n) =>
                            (0, r.jsx)(S.Ay, { media: L, maxWidth: e, maxHeight: t, obscured: n, onContextMenu: x }),
                    }),
            }),
            P &&
                (0, r.jsx)(I.Ay, {
                    children: (e) =>
                        (0, r.jsx)(T.A, {
                            items: t,
                            currentIndex: _,
                            onGalleryItemClick: D,
                            className: e,
                            enabledContentHarmTypeFlags: u,
                        }),
                }),
        ],
    });
}
