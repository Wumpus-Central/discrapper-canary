t.d(n, { Z: () => D }), t(477488), t(47120);
var a = t(200651),
    i = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(299608),
    s = t.n(o),
    c = t(642128),
    u = t(442837),
    d = t(481060),
    _ = t(794295),
    h = t(95398),
    f = t(247206),
    p = t(394779),
    C = t(134432),
    m = t(254109),
    E = t(169525),
    S = t(375954),
    g = t(585483),
    L = t(44488),
    x = t(341176),
    O = t(981631),
    v = t(388032),
    b = t(808278);
function A(e) {
    let { width: n, height: t } = e;
    return null == n || 0 === n || null == t || 0 === t;
}
function N(e) {
    let { children: n, hasMediaControls: t, isObscured: r, src: o } = e,
        [s, c] = (0, i.useState)(!1);
    return r
        ? (0, a.jsx)(h.a.Provider, {
              value: s,
              children: (0, a.jsx)(
                  h.Z,
                  {
                      type: h.Z.Types.ATTACHMENT,
                      reason: E.wk.EXPLICIT_CONTENT,
                      className: b.obscureContainer,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      obscurityControlClassName: l()({ [b.controlsOffset]: t && s }),
                      onToggleObscurity: (e) => {
                          e.stopPropagation(), e.nativeEvent.stopPropagation(), c((e) => !e);
                      },
                      children: (e) =>
                          (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsx)('div', {
                                  className: l()(b.obscureWrapper, { [b.obscure]: e }),
                                  children: n(e)
                              })
                          })
                  },
                  o
              )
          })
        : (0, a.jsx)(a.Fragment, { children: n(!1) });
}
function D(e) {
    var n, t, r;
    let { items: l, fit: o, startIndex: h = 0, shouldRedactExplicitContent: E = !1, shouldHideMediaOptions: D = !1, shouldAnimateCarousel: R = !1 } = e,
        [k, M] = (0, i.useState)(h),
        T = (0, i.useRef)(h),
        [y, P] = (0, i.useState)([]);
    (0, i.useEffect)(() => {
        var e, n;
        let t = (((k + 1) % (e = l.length)) + e) % e,
            a = (((k - 1) % (n = l.length)) + n) % n;
        A(l[t]) && (0, C.po)(l[t].url), A(l[a]) && (0, C.po)(l[a].url);
    }, [k, l]);
    let I = (0, i.useCallback)(
        (e) => {
            var n;
            let t = e - T.current;
            M((e = ((e % (n = l.length)) + n) % n)), (T.current = e), P((e) => [...e, t]), (0, m.yg)(m.uG.SELECTED_ITEM_CHANGE);
        },
        [l]
    );
    (0, i.useEffect)(() => {
        let e = s()(() => {
                I(T.current + 1);
            }, 300),
            n = s()(() => {
                I(T.current - 1);
            }, 300);
        return (
            g.S.subscribe(O.CkL.MODAL_CAROUSEL_NEXT, e),
            g.S.subscribe(O.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
                g.S.unsubscribe(O.CkL.MODAL_CAROUSEL_NEXT, e), g.S.unsubscribe(O.CkL.MODAL_CAROUSEL_PREV, n);
            }
        );
    }, [I]);
    let w = l[k],
        j = null !== (r = w.sourceMetadata) && void 0 !== r ? r : {},
        Z = null == j ? void 0 : null === (n = j.message) || void 0 === n ? void 0 : n.id,
        F = null == j ? void 0 : null === (t = j.message) || void 0 === t ? void 0 : t.channel_id,
        W = (0, u.e7)([S.Z], () => (null != F && null != Z ? S.Z.getMessage(F, Z) : null), [F, Z]),
        G = null != W ? W : null == j ? void 0 : j.message,
        U = (0, i.useCallback)(() => (0, m.yg)(m.uG.FORWARD_PRESSED), []),
        z = null != G && null != j.identifier ? (0, p.s)(G, j.identifier, U) : null,
        H = (0, f.KP)(
            {
                type: f.lJ.GenericMedia,
                media: w
            },
            E
        ),
        X = D
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => (0, m.yg)(m.uG.CONTEXT_MENU_OPENED),
        B = (function (e) {
            if (0 === e) return ['translateX(0)'];
            let n = ['translateX(100px)', 'translateX(-100px)'];
            return e > 0 ? n : n.toReversed();
        })(y[y.length - 1]),
        V = (0, d.Yzy)(
            w,
            {
                key: w.url,
                from: {
                    opacity: 0,
                    transform: B[0]
                },
                enter: {
                    opacity: 1,
                    transform: 'translateX(0)'
                },
                leave: {
                    opacity: 0,
                    transform: B[B.length - 1]
                },
                config: {
                    friction: 20,
                    tension: 250
                }
            },
            R ? 'respect-motion-settings' : 'animate-never'
        );
    return (0, a.jsxs)('div', {
        className: b.wrapper,
        children: [
            l.length > 1
                ? (0, a.jsx)(L.am, {
                      className: b.navPrev,
                      onClick: () => g.S.dispatch(O.CkL.MODAL_CAROUSEL_PREV)
                  })
                : null,
            V((e, n) => {
                var t;
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(
                        c.animated.div,
                        {
                            style: e,
                            className: b.zoomedMediaFitWrapper,
                            children: (0, a.jsxs)('div', {
                                onClick: (e) => (null != o && [x.D.CONTAIN, x.D.SCALE_DOWN].includes(o) ? null : e.stopPropagation()),
                                children: [
                                    (0, a.jsx)(N, {
                                        isObscured: H,
                                        src: n.url,
                                        children: (e) =>
                                            (0, a.jsx)(x.Z, {
                                                media: n,
                                                fit: o,
                                                obscured: e,
                                                onContextMenu: X
                                            })
                                    }),
                                    ('IMAGE' !== n.type || null != n.original) &&
                                        !D &&
                                        (0, a.jsxs)('div', {
                                            className: b.optionsContainer,
                                            children: [
                                                (0, a.jsx)(_.Z, {
                                                    href: null !== (t = n.original) && void 0 !== t ? t : n.url,
                                                    className: b.downloadLink,
                                                    onClick: () => ((0, m.yg)(m.uG.OPEN_LINK_PRESSED), !1),
                                                    children: v.intl.string(v.t.q5jLJC)
                                                }),
                                                null != z && (0, a.jsx)(z, { className: b.forward })
                                            ]
                                        })
                                ]
                            })
                        },
                        n.url
                    )
                });
            }),
            l.length > 1
                ? (0, a.jsx)(L.Pz, {
                      className: b.navNext,
                      onClick: () => g.S.dispatch(O.CkL.MODAL_CAROUSEL_NEXT)
                  })
                : null
        ]
    });
}
