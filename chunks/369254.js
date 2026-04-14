"use strict";
n.d(t, { Ay: () => L, Z5: () => D, t1: () => R });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(930125),
    u = n(338717),
    c = n(282108),
    d = n(776231),
    _ = n(619517),
    f = n(302031),
    h = n(644447),
    p = n(203982),
    m = n(515718),
    E = n(700331),
    g = n(454290),
    A = n(976247),
    I = n(358731),
    T = n(215050),
    S = n(597351),
    y = n(608214),
    v = n(652215),
    C = n(985018),
    N = n(108661);
function R(e) {
    let { src: t, width: n, height: r, hasMultiple: i = !1, options: s } = e,
        { width: a, height: o } = (0, A.z)(i, { width: n, height: r });
    _.Ay.preloadImage({ src: t, dimensions: { maxWidth: a, maxHeight: o, imageWidth: n, imageHeight: r }, options: s });
}
function b(e, t) {
    return ((e % t) + t) % t;
}
function O(e) {
    let { children: t, isObscured: n, src: s } = e,
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
                      children: (e) => (0, r.jsx)("div", { className: a()(N.JT, { [N.Qr]: e }), children: t(e) }),
                  },
                  s,
              ),
          })
        : (0, r.jsx)(r.Fragment, { children: t(!1) });
}
function D(e, t) {
    "IMAGE" !== e.type ||
        ((0, m.eJ)(e)
            ? R({
                  src: (0, h.E)({ proxyURL: e.proxyUrl, url: e.url }),
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
            startIndex: s = 0,
            enabledContentHarmTypeFlags: u = 0,
            shouldHideMediaOptions: d = !1,
        } = e,
        [_, f] = i.useState(s),
        h = i.useRef(s),
        { zoomed: m, setZoomed: R } = (0, g.Q)(),
        D = i.useCallback(
            (e) => {
                f((e = b(e, t.length))), (h.current = e), n?.(e), R(!1);
            },
            [n, t, R],
        );
    i.useEffect(() => {
        let e = () => D(h.current + 1),
            t = () => D(h.current - 1);
        return (
            p._.subscribe(v.jej.MODAL_CAROUSEL_NEXT, e),
            p._.subscribe(v.jej.MODAL_CAROUSEL_PREV, t),
            () => {
                p._.unsubscribe(v.jej.MODAL_CAROUSEL_NEXT, e), p._.unsubscribe(v.jej.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [D, R]);
    let L = t[_],
        w = (0, c.qo)({ type: l.D.GenericMedia, media: L }, u),
        M = d
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => E.l.markActionPerformed(E.N.CONTEXT_MENU_OPENED),
        x = t.length > 1;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(I.Ay, {
                children: (e) =>
                    x
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(S.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), p._.dispatch(v.jej.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: o.Zge,
                                      tooltip: C.intl.string(C.t.vgfxaA),
                                      className: a()(N.vi, e),
                                  }),
                                  (0, r.jsx)(S.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), p._.dispatch(v.jej.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: o.KS6,
                                      tooltip: C.intl.string(C.t.XiOHRX),
                                      className: a()(N.f8, e),
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
                            (0, r.jsx)(y.Ay, { media: L, maxWidth: e, maxHeight: t, obscured: n, onContextMenu: M }),
                    }),
            }),
            x &&
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
