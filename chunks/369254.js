n.d(t, { A: () => P, Z: () => M });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(397927),
    o = n(930125),
    d = n(338717),
    u = n(282108),
    c = n(776231),
    h = n(302031),
    m = n(644447),
    p = n(203982),
    g = n(515718),
    x = n(700331),
    f = n(454290),
    A = n(536763),
    y = n(976247),
    w = n(358731),
    j = n(215050),
    v = n(597351),
    C = n(608214),
    E = n(652215),
    I = n(985018),
    N = n(108661);
function S(e) {
    let { children: t, isObscured: n, src: r } = e,
        [s, o] = l.useState(!1),
        u = l.useCallback(() => {
            o((e) => !e);
        }, []);
    return n
        ? (0, i.jsx)(h.Bs.Provider, {
              value: s,
              children: (0, i.jsx)(
                  h.Ay,
                  {
                      type: h.Ay.Types.ATTACHMENT,
                      reason: d.Oc.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: u,
                      children: (e) => (0, i.jsx)("div", { className: a()(N.JT, { [N.Qr]: e }), children: t(e) }),
                  },
                  r,
              ),
          })
        : (0, i.jsx)(i.Fragment, { children: t(!1) });
}
function M(e, t) {
    if ("IMAGE" !== e.type) return;
    if (!(0, g.eJ)(e)) return void (0, c.yt)(e.url);
    let n = (0, m.E)({ proxyURL: e.proxyUrl, url: e.url });
    (0, A.A)({ src: n, width: e.width, height: e.height, hasMultiple: t, options: e });
}
function P(e) {
    let {
            items: t,
            onIndexChange: n,
            startIndex: r = 0,
            enabledContentHarmTypeFlags: d = 0,
            shouldHideMediaOptions: c = !1,
        } = e,
        [h, m] = l.useState(r),
        g = l.useRef(r),
        { zoomed: A, setZoomed: M } = (0, f.Q)(),
        P = l.useCallback(
            (e) => {
                var i;
                m((e = ((e % (i = t.length)) + i) % i)), (g.current = e), n?.(e), M(!1);
            },
            [n, t, M],
        );
    l.useEffect(() => {
        let e = () => P(g.current + 1),
            t = () => P(g.current - 1);
        return (
            p._.subscribe(E.jej.MODAL_CAROUSEL_NEXT, e),
            p._.subscribe(E.jej.MODAL_CAROUSEL_PREV, t),
            () => {
                p._.unsubscribe(E.jej.MODAL_CAROUSEL_NEXT, e), p._.unsubscribe(E.jej.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [P, M]);
    let b = t[h],
        O = (0, u.qo)({ type: o.D.GenericMedia, media: b }, d),
        U = c
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => x.l.markActionPerformed(x.N.CONTEXT_MENU_OPENED),
        D = t.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(w.Ay, {
                children: (e) =>
                    D
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(v.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), p._.dispatch(E.jej.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: s.Zge,
                                      tooltip: I.intl.string(I.t.vgfxaA),
                                      className: a()(N.vi, e),
                                  }),
                                  (0, i.jsx)(v.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), p._.dispatch(E.jej.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: s.KS6,
                                      tooltip: I.intl.string(I.t.XiOHRX),
                                      className: a()(N.f8, e),
                                  }),
                              ],
                          })
                        : void 0,
            }),
            (0, i.jsx)(y.A, {
                items: t,
                currentIndex: h,
                children: (e, t) =>
                    (0, i.jsx)(S, {
                        isObscured: !A && O,
                        src: b.url,
                        children: (n) =>
                            (0, i.jsx)(C.Ay, { media: b, maxWidth: e, maxHeight: t, obscured: n, onContextMenu: U }),
                    }),
            }),
            D &&
                (0, i.jsx)(w.Ay, {
                    children: (e) =>
                        (0, i.jsx)(j.A, {
                            items: t,
                            currentIndex: h,
                            onGalleryItemClick: P,
                            className: e,
                            enabledContentHarmTypeFlags: d,
                        }),
                }),
        ],
    });
}
