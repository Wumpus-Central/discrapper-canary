n.d(t, { A: () => T, Z: () => j });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(548411),
    o = n(554830),
    d = n(930125),
    u = n(338717),
    h = n(282108),
    c = n(776231),
    m = n(302031),
    g = n(644447),
    p = n(203982),
    f = n(515718),
    A = n(700331),
    x = n(454290),
    y = n(536763),
    w = n(976247),
    _ = n(358731),
    E = n(215050),
    C = n(597351),
    S = n(608214),
    b = n(652215),
    I = n(985018),
    v = n(420165);
function M(e) {
    let { children: t, isObscured: n, src: r } = e,
        [s, o] = a.useState(!1),
        d = a.useCallback(() => {
            o((e) => !e);
        }, []);
    return n
        ? (0, i.jsx)(m.Bs.Provider, {
              value: s,
              children: (0, i.jsx)(
                  m.Ay,
                  {
                      type: m.Ay.Types.ATTACHMENT,
                      reason: u.Oc.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: d,
                      children: (e) => (0, i.jsx)("div", { className: l()(v.JT, { [v.Qr]: e }), children: t(e) }),
                  },
                  r,
              ),
          })
        : (0, i.jsx)(i.Fragment, { children: t(!1) });
}
function j(e, t) {
    if ("IMAGE" !== e.type) return;
    if (!(0, f.eJ)(e)) return void (0, c.yt)(e.url);
    let n = (0, g.E)({ proxyURL: e.proxyUrl, url: e.url });
    (0, y.A)({ src: n, width: e.width, height: e.height, hasMultiple: t, options: e });
}
function T(e) {
    let {
            items: t,
            onIndexChange: n,
            startIndex: r = 0,
            enabledContentHarmTypeFlags: u = 0,
            shouldHideMediaOptions: c = !1,
        } = e,
        [m, g] = a.useState(r),
        f = a.useRef(r),
        { zoomed: y, setZoomed: j } = (0, x.Q)(),
        T = a.useCallback(
            (e) => {
                var i;
                g((e = ((e % (i = t.length)) + i) % i)), (f.current = e), n?.(e), j(!1);
            },
            [n, t, j],
        );
    a.useEffect(() => {
        let e = () => T(f.current + 1),
            t = () => T(f.current - 1);
        return (
            p._.subscribe(b.jej.MODAL_CAROUSEL_NEXT, e),
            p._.subscribe(b.jej.MODAL_CAROUSEL_PREV, t),
            () => {
                p._.unsubscribe(b.jej.MODAL_CAROUSEL_NEXT, e), p._.unsubscribe(b.jej.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [T, j]);
    let N = t[m],
        O = (0, h.qo)({ type: d.D.GenericMedia, media: N }, u),
        P = c
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => A.l.markActionPerformed(A.N.CONTEXT_MENU_OPENED),
        D = t.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(_.Ay, {
                children: (e) =>
                    D
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(C.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), p._.dispatch(b.jej.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: s.Z,
                                      tooltip: I.intl.string(I.t.vgfxaA),
                                      className: l()(v.vi, e),
                                  }),
                                  (0, i.jsx)(C.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), p._.dispatch(b.jej.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: o.K,
                                      tooltip: I.intl.string(I.t.XiOHRX),
                                      className: l()(v.f8, e),
                                  }),
                              ],
                          })
                        : void 0,
            }),
            (0, i.jsx)(w.A, {
                items: t,
                currentIndex: m,
                children: (e, t) =>
                    (0, i.jsx)(M, {
                        isObscured: !y && O,
                        src: N.url,
                        children: (n) =>
                            (0, i.jsx)(S.Ay, { media: N, maxWidth: e, maxHeight: t, obscured: n, onContextMenu: P }),
                    }),
            }),
            D &&
                (0, i.jsx)(_.Ay, {
                    children: (e) =>
                        (0, i.jsx)(E.A, {
                            items: t,
                            currentIndex: m,
                            onGalleryItemClick: T,
                            className: e,
                            enabledContentHarmTypeFlags: u,
                        }),
                }),
        ],
    });
}
