t.d(n, {
    Z: function () {
        return M;
    }
}),
    t(47120);
var i = t(200651),
    r = t(192379),
    a = t(120356),
    l = t.n(a),
    o = t(299608),
    s = t.n(o),
    u = t(484957),
    c = t(481060),
    d = t(95398),
    f = t(247206),
    h = t(134432),
    m = t(169525),
    p = t(585483),
    _ = t(254109),
    E = t(212459),
    g = t(369171),
    S = t(683528),
    x = t(549635),
    C = t(981631),
    y = t(388032),
    I = t(563297);
function v(e, n) {
    return ((e % n) + n) % n;
}
function O(e) {
    let { width: n, height: t } = e;
    return null == n || 0 === n || null == t || 0 === t;
}
function b(e) {
    let { children: n, isObscured: t, src: a } = e,
        [o, s] = r.useState(!1),
        u = r.useCallback(() => {
            s((e) => !e);
        }, []);
    return t
        ? (0, i.jsx)(d.a.Provider, {
              value: o,
              children: (0, i.jsx)(
                  d.Z,
                  {
                      type: d.Z.Types.ATTACHMENT,
                      reason: m.wk.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: u,
                      children: (e) =>
                          (0, i.jsx)(i.Fragment, {
                              children: (0, i.jsx)('div', {
                                  className: l()(I.obscureWrapper, { [I.obscure]: e }),
                                  children: n(e)
                              })
                          })
                  },
                  a
              )
          })
        : (0, i.jsx)(i.Fragment, { children: n(!1) });
}
function M(e) {
    let { items: n, onIndexChange: t, startIndex: a = 0, shouldRedactExplicitContent: o = !1, shouldHideMediaOptions: d = !1 } = e,
        [m, v] = r.useState(a),
        M = r.useRef(a),
        { zoomed: L, setZoomed: A } = (0, E.Y)();
    r.useEffect(() => {
        var e, t;
        let i = (((m + 1) % (e = n.length)) + e) % e;
        let r = (((m - 1) % (t = n.length)) + t) % t;
        O(n[i]) && (0, h.po)(n[i].url), O(n[r]) && (0, h.po)(n[r].url);
    }, [m, n]);
    let T = r.useCallback(
        (e) => {
            var i;
            v((e = ((e % (i = n.length)) + i) % i)), (M.current = e), null == t || t(e), A(!1);
        },
        [t, n, A]
    );
    r.useEffect(() => {
        let e = s()(() => {
                T(M.current + 1);
            }, 300),
            n = s()(() => {
                T(M.current - 1);
            }, 300);
        return (
            p.S.subscribe(C.CkL.MODAL_CAROUSEL_NEXT, e),
            p.S.subscribe(C.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
                p.S.unsubscribe(C.CkL.MODAL_CAROUSEL_NEXT, e), p.S.unsubscribe(C.CkL.MODAL_CAROUSEL_PREV, n);
            }
        );
    }, [T, A]);
    let R = n[m],
        j = (0, f.KP)(
            {
                type: f.lJ.GenericMedia,
                media: R
            },
            o
        ),
        N = d
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => (0, _.yg)(_.uG.CONTEXT_MENU_OPENED),
        D = n.length > 1;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: I.wrapper,
            children: [
                D
                    ? (0, i.jsx)(g.ZP, {
                          children: (e) =>
                              (0, i.jsx)(c.CircleIconButton, {
                                  className: l()(I.navPrev, e),
                                  size: c.CircleIconButtonSizes.SIZE_36,
                                  onClick: (e) => {
                                      e.stopPropagation(), p.S.dispatch(C.CkL.MODAL_CAROUSEL_PREV);
                                  },
                                  icon: (0, i.jsx)(u.j, {}),
                                  tooltip: y.intl.string(y.t.vgfxaG),
                                  color: c.CircleIconButtonColors.PRIMARY
                              })
                      })
                    : null,
                (0, i.jsx)('div', {
                    className: I.mediaContainer,
                    children: (0, i.jsx)(
                        'div',
                        {
                            className: I.mediaWrapper,
                            children: (0, i.jsx)(b, {
                                isObscured: !L && j,
                                src: R.url,
                                children: (e) =>
                                    (0, i.jsx)(i.Fragment, {
                                        children: (0, i.jsx)('div', {
                                            onClick: (e) => e.stopPropagation(),
                                            className: l()(I.innerWrapper, { [I.shifted]: L && D }),
                                            children: (0, i.jsx)(x.Z, {
                                                media: R,
                                                obscured: e,
                                                onContextMenu: N
                                            })
                                        })
                                    })
                            })
                        },
                        R.url
                    )
                }),
                D
                    ? (0, i.jsx)(g.ZP, {
                          children: (e) =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(S.Z, {
                                          items: n,
                                          currentIndex: m,
                                          onGalleryItemClick: v,
                                          className: e
                                      }),
                                      (0, i.jsx)(c.CircleIconButton, {
                                          className: l()(I.navNext, e),
                                          size: c.CircleIconButtonSizes.SIZE_36,
                                          onClick: (e) => {
                                              e.stopPropagation(), p.S.dispatch(C.CkL.MODAL_CAROUSEL_NEXT);
                                          },
                                          icon: (0, i.jsx)(c.ArrowLargeRightIcon, {}),
                                          tooltip: y.intl.string(y.t.XiOHRU),
                                          color: c.CircleIconButtonColors.PRIMARY
                                      })
                                  ]
                              })
                      })
                    : null
            ]
        })
    });
}
