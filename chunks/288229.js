t.d(n, {
    Z: function () {
        return D;
    }
}),
    t(477488),
    t(47120);
var a = t(200651),
    r = t(192379),
    i = t(120356),
    l = t.n(i),
    o = t(299608),
    s = t.n(o),
    u = t(666912),
    c = t(442837),
    d = t(481060),
    f = t(794295),
    _ = t(95398),
    h = t(247206),
    p = t(394779),
    m = t(134432),
    C = t(254109),
    E = t(169525),
    S = t(375954),
    g = t(585483),
    L = t(44488),
    O = t(341176),
    x = t(981631),
    A = t(388032),
    v = t(401920);
function N(e, n) {
    return ((e % n) + n) % n;
}
function R(e) {
    let { width: n, height: t } = e;
    return null == n || 0 === n || null == t || 0 === t;
}
function b(e) {
    let { children: n, hasMediaControls: t, isObscured: i, src: o } = e,
        [s, u] = (0, r.useState)(!1);
    return i
        ? (0, a.jsx)(_.a.Provider, {
              value: s,
              children: (0, a.jsx)(
                  _.Z,
                  {
                      type: _.Z.Types.ATTACHMENT,
                      reason: E.wk.EXPLICIT_CONTENT,
                      className: v.obscureContainer,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      obscurityControlClassName: l()({ [v.controlsOffset]: t && s }),
                      onToggleObscurity: (e) => {
                          e.stopPropagation(), e.nativeEvent.stopPropagation(), u((e) => !e);
                      },
                      children: (e) =>
                          (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsx)('div', {
                                  className: l()(v.obscureWrapper, { [v.obscure]: e }),
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
    var n, t, i;
    let { items: l, fit: o, startIndex: _ = 0, shouldRedactExplicitContent: E = !1, shouldHideMediaOptions: N = !1, shouldAnimateCarousel: D = !1 } = e,
        [M, T] = (0, r.useState)(_),
        k = (0, r.useRef)(_),
        [y, P] = (0, r.useState)([]);
    (0, r.useEffect)(() => {
        var e, n;
        let t = (((M + 1) % (e = l.length)) + e) % e;
        let a = (((M - 1) % (n = l.length)) + n) % n;
        R(l[t]) && (0, m.po)(l[t].url), R(l[a]) && (0, m.po)(l[a].url);
    }, [M, l]);
    let I = (0, r.useCallback)(
        (e) => {
            var n;
            let t = e - k.current;
            T((e = ((e % (n = l.length)) + n) % n)), (k.current = e), P((e) => [...e, t]), (0, C.yg)(C.uG.SELECTED_ITEM_CHANGE);
        },
        [l]
    );
    (0, r.useEffect)(() => {
        let e = s()(() => {
                I(k.current + 1);
            }, 300),
            n = s()(() => {
                I(k.current - 1);
            }, 300);
        return (
            g.S.subscribe(x.CkL.MODAL_CAROUSEL_NEXT, e),
            g.S.subscribe(x.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
                g.S.unsubscribe(x.CkL.MODAL_CAROUSEL_NEXT, e), g.S.unsubscribe(x.CkL.MODAL_CAROUSEL_PREV, n);
            }
        );
    }, [I]);
    let j = l[M],
        w = null !== (i = j.sourceMetadata) && void 0 !== i ? i : {},
        Z = null == w ? void 0 : null === (n = w.message) || void 0 === n ? void 0 : n.id,
        F = null == w ? void 0 : null === (t = w.message) || void 0 === t ? void 0 : t.channel_id,
        G = (0, c.e7)([S.Z], () => (null != F && null != Z ? S.Z.getMessage(F, Z) : null), [F, Z]),
        U = null != G ? G : null == w ? void 0 : w.message,
        W = (0, r.useCallback)(() => (0, C.yg)(C.uG.FORWARD_PRESSED), []),
        H = null != U && null != w.identifier ? (0, p.s)(U, w.identifier, W) : null,
        B = (0, h.KP)(
            {
                type: h.lJ.GenericMedia,
                media: j
            },
            E
        ),
        z = N
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => (0, C.yg)(C.uG.CONTEXT_MENU_OPENED),
        X = (function (e) {
            if (0 === e) return ['translateX(0)'];
            let n = ['translateX(100px)', 'translateX(-100px)'];
            return e > 0 ? n : n.toReversed();
        })(y[y.length - 1]),
        K = (0, d.useTransition)(
            j,
            {
                key: j.url,
                from: {
                    opacity: 0,
                    transform: X[0]
                },
                enter: {
                    opacity: 1,
                    transform: 'translateX(0)'
                },
                leave: {
                    opacity: 0,
                    transform: X[X.length - 1]
                },
                config: {
                    friction: 20,
                    tension: 250
                }
            },
            D ? 'respect-motion-settings' : 'animate-never'
        );
    return (0, a.jsxs)('div', {
        className: v.wrapper,
        children: [
            l.length > 1
                ? (0, a.jsx)(L.am, {
                      className: v.navPrev,
                      onClick: () => g.S.dispatch(x.CkL.MODAL_CAROUSEL_PREV)
                  })
                : null,
            K((e, n) => {
                var t;
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(
                        u.animated.div,
                        {
                            style: e,
                            className: v.zoomedMediaFitWrapper,
                            children: (0, a.jsxs)('div', {
                                onClick: (e) => (null != o && [O.D.CONTAIN, O.D.SCALE_DOWN].includes(o) ? null : e.stopPropagation()),
                                children: [
                                    (0, a.jsx)(b, {
                                        isObscured: B,
                                        src: n.url,
                                        children: (e) =>
                                            (0, a.jsx)(O.Z, {
                                                media: n,
                                                fit: o,
                                                obscured: e,
                                                onContextMenu: z
                                            })
                                    }),
                                    ('IMAGE' !== n.type || null != n.original) &&
                                        !N &&
                                        (0, a.jsxs)('div', {
                                            className: v.optionsContainer,
                                            children: [
                                                (0, a.jsx)(f.Z, {
                                                    href: null !== (t = n.original) && void 0 !== t ? t : n.url,
                                                    className: v.downloadLink,
                                                    onClick: () => ((0, C.yg)(C.uG.OPEN_LINK_PRESSED), !1),
                                                    children: A.intl.string(A.t.q5jLJC)
                                                }),
                                                null != H && (0, a.jsx)(H, { className: v.forward })
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
                      className: v.navNext,
                      onClick: () => g.S.dispatch(x.CkL.MODAL_CAROUSEL_NEXT)
                  })
                : null
        ]
    });
}
