n.d(t, { Z: () => j }), n(975844), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(299608),
    s = n.n(l),
    c = n(200100),
    u = n(442837),
    d = n(481060),
    f = n(794295),
    p = n(95398),
    _ = n(247206),
    h = n(394779),
    b = n(134432),
    O = n(254109),
    m = n(169525),
    g = n(375954),
    y = n(585483),
    C = n(44488),
    E = n(341176),
    S = n(981631),
    v = n(388032),
    P = n(302597);
function L(e) {
    let { width: t, height: n } = e;
    return null == t || 0 === t || null == n || 0 === n;
}
function x(e) {
    let { children: t, hasMediaControls: n, isObscured: o, src: l } = e,
        [s, c] = (0, i.useState)(!1);
    return o
        ? (0, r.jsx)(p.aQ.Provider, {
              value: s,
              children: (0, r.jsx)(
                  p.ZP,
                  {
                      type: p.ZP.Types.ATTACHMENT,
                      reason: m.wk.EXPLICIT_CONTENT,
                      className: P.obscureContainer,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      obscurityControlClassName: a()({ [P.controlsOffset]: n && s }),
                      onToggleObscurity: (e) => {
                          e.stopPropagation(), e.nativeEvent.stopPropagation(), c((e) => !e);
                      },
                      children: (e) =>
                          (0, r.jsx)('div', {
                              className: a()(P.obscureWrapper, { [P.obscure]: e }),
                              children: t(e)
                          })
                  },
                  l
              )
          })
        : (0, r.jsx)(r.Fragment, { children: t(!1) });
}
function j(e) {
    var t, n, o;
    let { items: a, fit: l, startIndex: p = 0, shouldRedactExplicitContent: m = !1, shouldHideMediaOptions: j = !1, shouldAnimateCarousel: D = !1 } = e,
        [N, A] = (0, i.useState)(p),
        w = (0, i.useRef)(p),
        [R, k] = (0, i.useState)([]);
    (0, i.useEffect)(() => {
        var e, t;
        let n = (((N + 1) % (e = a.length)) + e) % e,
            r = (((N - 1) % (t = a.length)) + t) % t;
        L(a[n]) && (0, b.po)(a[n].url), L(a[r]) && (0, b.po)(a[r].url);
    }, [N, a]);
    let M = (0, i.useCallback)(
        (e) => {
            var t;
            let n = e - w.current;
            A((e = ((e % (t = a.length)) + t) % t)), (w.current = e), k((e) => [...e, n]), (0, O.yg)(O.uG.SELECTED_ITEM_CHANGE);
        },
        [a]
    );
    (0, i.useEffect)(() => {
        let e = s()(() => {
                M(w.current + 1);
            }, 300),
            t = s()(() => {
                M(w.current - 1);
            }, 300);
        return (
            y.S.subscribe(S.CkL.MODAL_CAROUSEL_NEXT, e),
            y.S.subscribe(S.CkL.MODAL_CAROUSEL_PREV, t),
            () => {
                y.S.unsubscribe(S.CkL.MODAL_CAROUSEL_NEXT, e), y.S.unsubscribe(S.CkL.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [M]);
    let T = a[N],
        I = null != (o = T.sourceMetadata) ? o : {},
        Z = null == I || null == (t = I.message) ? void 0 : t.id,
        W = null == I || null == (n = I.message) ? void 0 : n.channel_id,
        U = (0, u.e7)([g.Z], () => (null != W && null != Z ? g.Z.getMessage(W, Z) : null), [W, Z]),
        F = null != U ? U : null == I ? void 0 : I.message,
        G = (0, i.useCallback)(() => (0, O.yg)(O.uG.FORWARD_PRESSED), []),
        H = null != F && null != I.identifier ? (0, h.s)(F, I.identifier, G) : null,
        z = (0, _.KP)(
            {
                type: _.lJ.GenericMedia,
                media: T
            },
            m
        ),
        X = j
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => (0, O.yg)(O.uG.CONTEXT_MENU_OPENED),
        B = (function (e) {
            if (0 === e) return ['translateX(0)'];
            let t = ['translateX(100px)', 'translateX(-100px)'];
            return e > 0 ? t : t.toReversed();
        })(R[R.length - 1]),
        V = (0, d.Yzy)(
            T,
            {
                key: T.url,
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
            D ? 'respect-motion-settings' : 'animate-never'
        );
    return (0, r.jsxs)('div', {
        className: P.wrapper,
        children: [
            a.length > 1
                ? (0, r.jsx)(C.am, {
                      className: P.navPrev,
                      onClick: () => y.S.dispatch(S.CkL.MODAL_CAROUSEL_PREV)
                  })
                : null,
            V((e, t) => {
                var n;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(
                        c.animated.div,
                        {
                            style: e,
                            className: P.zoomedMediaFitWrapper,
                            children: (0, r.jsxs)('div', {
                                onClick: (e) => (null != l && [E.D.CONTAIN, E.D.SCALE_DOWN].includes(l) ? null : e.stopPropagation()),
                                children: [
                                    (0, r.jsx)(x, {
                                        isObscured: z,
                                        src: t.url,
                                        children: (e) =>
                                            (0, r.jsx)(E.Z, {
                                                media: t,
                                                fit: l,
                                                obscured: e,
                                                onContextMenu: X
                                            })
                                    }),
                                    ('IMAGE' !== t.type || null != t.original) &&
                                        !j &&
                                        (0, r.jsxs)('div', {
                                            className: P.optionsContainer,
                                            children: [
                                                (0, r.jsx)(f.Z, {
                                                    href: null != (n = t.original) ? n : t.url,
                                                    className: P.downloadLink,
                                                    onClick: () => ((0, O.yg)(O.uG.OPEN_LINK_PRESSED), !1),
                                                    children: v.NW.string(v.t.q5jLJC)
                                                }),
                                                null != H && (0, r.jsx)(H, { className: P.forward })
                                            ]
                                        })
                                ]
                            })
                        },
                        t.url
                    )
                });
            }),
            a.length > 1
                ? (0, r.jsx)(C.Pz, {
                      className: P.navNext,
                      onClick: () => y.S.dispatch(S.CkL.MODAL_CAROUSEL_NEXT)
                  })
                : null
        ]
    });
}
