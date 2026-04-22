n.d(t, { A: () => O, Z: () => P });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    o = n(548411),
    s = n(554830),
    d = n(930125),
    u = n(338717),
    h = n(282108),
    c = n(776231),
    m = n(302031),
    p = n(644447),
    g = n(203982),
    f = n(515718),
    x = n(700331),
    A = n(454290),
    y = n(536763),
    w = n(976247),
    C = n(358731),
    v = n(215050),
    E = n(597351),
    I = n(608214),
    j = n(652215),
    M = n(985018),
    S = n(420165);
function N(e) {
    let { children: t, isObscured: n, src: a } = e,
        [o, s] = r.useState(!1),
        d = r.useCallback(() => {
            s((e) => !e);
        }, []);
    return n
        ? (0, i.jsx)(m.Bs.Provider, {
              value: o,
              children: (0, i.jsx)(
                  m.Ay,
                  {
                      type: m.Ay.Types.ATTACHMENT,
                      reason: u.Oc.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: d,
                      children: (e) => (0, i.jsx)("div", { className: l()(S.JT, { [S.Qr]: e }), children: t(e) }),
                  },
                  a,
              ),
          })
        : (0, i.jsx)(i.Fragment, { children: t(!1) });
}
function P(e, t) {
    if ("IMAGE" !== e.type) return;
    if (!(0, f.eJ)(e)) return void (0, c.yt)(e.url);
    let n = (0, p.E)({ proxyURL: e.proxyUrl, url: e.url });
    (0, y.A)({ src: n, width: e.width, height: e.height, hasMultiple: t, options: e });
}
function O(e) {
    let {
            items: t,
            onIndexChange: n,
            startIndex: a = 0,
            enabledContentHarmTypeFlags: u = 0,
            shouldHideMediaOptions: c = !1,
        } = e,
        [m, p] = r.useState(a),
        f = r.useRef(a),
        { zoomed: y, setZoomed: P } = (0, A.Q)(),
        O = r.useCallback(
            (e) => {
                var i;
                p((e = ((e % (i = t.length)) + i) % i)), (f.current = e), n?.(e), P(!1);
            },
            [n, t, P],
        );
    r.useEffect(() => {
        let e = () => O(f.current + 1),
            t = () => O(f.current - 1);
        return (
            g._.subscribe(j.jej.MODAL_CAROUSEL_NEXT, e),
            g._.subscribe(j.jej.MODAL_CAROUSEL_PREV, t),
            () => {
                g._.unsubscribe(j.jej.MODAL_CAROUSEL_NEXT, e), g._.unsubscribe(j.jej.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [O, P]);
    let _ = t[m],
        V = (0, h.qo)({ type: d.D.GenericMedia, media: _ }, u),
        b = c
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => x.l.markActionPerformed(x.N.CONTEXT_MENU_OPENED),
        D = t.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(C.Ay, {
                children: (e) =>
                    D
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(E.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), g._.dispatch(j.jej.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: o.Z,
                                      tooltip: M.intl.string(M.t.vgfxaA),
                                      className: l()(S.vi, e),
                                  }),
                                  (0, i.jsx)(E.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), g._.dispatch(j.jej.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: s.K,
                                      tooltip: M.intl.string(M.t.XiOHRX),
                                      className: l()(S.f8, e),
                                  }),
                              ],
                          })
                        : void 0,
            }),
            (0, i.jsx)(w.A, {
                items: t,
                currentIndex: m,
                children: (e, t) =>
                    (0, i.jsx)(N, {
                        isObscured: !y && V,
                        src: _.url,
                        children: (n) =>
                            (0, i.jsx)(I.Ay, { media: _, maxWidth: e, maxHeight: t, obscured: n, onContextMenu: b }),
                    }),
            }),
            D &&
                (0, i.jsx)(C.Ay, {
                    children: (e) =>
                        (0, i.jsx)(v.A, {
                            items: t,
                            currentIndex: m,
                            onGalleryItemClick: O,
                            className: e,
                            enabledContentHarmTypeFlags: u,
                        }),
                }),
        ],
    });
}
