(r.d(t, { default: () => A }), r(388685));
var n = r(255367),
    i = r(73800),
    a = r(512722),
    o = r.n(a),
    s = r(990547),
    l = r(399606),
    c = r(755721),
    u = r(481060),
    d = r(232567),
    m = r(809206),
    g = r(479531),
    f = r(484459),
    p = r(594174),
    E = r(626135),
    h = r(51144),
    y = r(986197),
    O = r(135200),
    b = r(346585),
    S = r(361117),
    _ = r(108793),
    x = r(635774),
    v = r(387955),
    N = r(801461),
    j = r(448624),
    T = r(981631),
    I = r(388032),
    C = r(367019);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function A(e) {
    let t,
        { source: r, transitionState: a, onClose: A, oneClickFlow: w = !1 } = e,
        [M, L] = i.useState(w ? j.A.SUGGESTIONS : j.A.INFO),
        [k, D] = i.useState(!1),
        [U, Z] = i.useState(null),
        [G, W] = i.useState(w ? N.Wq.SUGGESTION : N.Wq.NONE),
        [F, q] = i.useState(!1),
        [z, B] = i.useState(!1),
        H = i.useRef(null),
        V = (0, l.e7)([O.Z], () => O.Z.isCurrentUsernameInvalid()),
        K = (0, l.e7)([p.default], () => {
            let e = p.default.getCurrentUser();
            return (o()(null != e, 'PomeloModal: user cannot be undefined'), e);
        }),
        { usernameSuggestion: X, usernameSuggestionLoading: Y } = (0, S.G)(w ? N.en : void 0);
    (i.useEffect(() => {
        (G === N.Wq.EDIT_USERNAME && B(!0),
            E.default.track(T.rMx.POMELO_EDIT_STEP_VIEWED, {
                source: r,
                step: G
            }));
    }, [G, r]),
        i.useEffect(() => {
            z ||
                F ||
                null == X ||
                !(X.length > 0) ||
                $((e) => {
                    var t, r;
                    return (
                        (t = P({}, e)),
                        (r = r = { username: X }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        t
                    );
                });
        }, [X, z, F]));
    let [Q, $] = i.useState({
            username: (0, b.e$)(K),
            globalName: h.ZP.getName(K)
        }),
        J = (e) => {
            (Z(null), null != e.username && q(!0), $((t) => P({}, t, e)));
        },
        ee = i.useMemo(
            () => [
                {
                    slideId: j.A.INFO,
                    next: j.A.EDIT_SCREEN,
                    footerButtons: ['REMIND_ME_LATER', 'GET_STARTED']
                },
                {
                    slideId: j.A.EDIT_SCREEN,
                    next: j.A.FINISH_LATER,
                    back: j.A.INFO,
                    footerButtons: [G === N.Wq.PREVIEW ? 'GOT_IT' : 'BACK', G === N.Wq.PREVIEW ? 'GOT_IT' : G === N.Wq.EDIT_USERNAME ? 'SUBMIT' : 'NEXT']
                },
                {
                    slideId: j.A.FINISH_LATER,
                    back: j.A.EDIT_SCREEN
                },
                {
                    slideId: j.A.SUGGESTIONS,
                    footerButtons: [G === N.Wq.PREVIEW ? 'GOT_IT' : 'UPDATE']
                },
                { slideId: j.A.FINISH_LATER }
            ],
            [G]
        ),
        et = ee.length,
        er = i.useCallback(async () => {
            if (Q.globalName.length <= 0) {
                let e = I.intl.formatToPlainString(I.t.IpijXF, {
                    minNum: 1,
                    maxNum: 32
                });
                (Z(e),
                    E.default.track(T.rMx.POMELO_ERRORS, {
                        reason: e,
                        display_name_error: !0,
                        location: 'modal'
                    }));
                return;
            }
            if (h.ZP.getGlobalName(K) === Q.globalName) return void W(N.Wq.EDIT_USERNAME);
            try {
                (Z(null), D(!0), await (0, m.S2)({ global_name: Q.globalName }), W(N.Wq.EDIT_USERNAME));
            } catch (t) {
                let e = new g.Z(t).getAnyErrorMessage();
                (E.default.track(T.rMx.POMELO_ERRORS, {
                    reason: e,
                    display_name_error: !0,
                    location: 'modal'
                }),
                    Z(e));
            } finally {
                D(!1);
            }
        }, [K, Q]),
        en = i.useCallback(async () => {
            try {
                (Z(null), D(!0), await y.Z.createPomelo({ username: (0, b.R_)(Q.username) }, w), await (0, d.In)(K.id), W(N.Wq.PREVIEW));
            } catch (r) {
                let e = new g.Z(r),
                    t = (null == e ? void 0 : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : I.intl.string(I.t.R0RpRU);
                (Z(t),
                    E.default.track(T.rMx.POMELO_ERRORS, {
                        reason: t,
                        username_error: !0,
                        location: 'modal',
                        one_click_flow: w
                    }));
            } finally {
                D(!1);
            }
        }, [Q, K.id, w]),
        ei = V || (0, b.NX)(K),
        ea = i.useCallback(() => {
            (W(ei ? N.Wq.EDIT_USERNAME : N.Wq.EDIT_DISPLAY_NAME), L(ee[Math.min(et - 1, M + 1)].slideId));
        }, [M, ee, et, ei]),
        eo = i.useCallback(() => {
            (Z(null), M === j.A.EDIT_SCREEN ? (G === N.Wq.EDIT_USERNAME ? (ei ? (W(N.Wq.NONE), L(ee[Math.max(0, M - 1)].slideId)) : W(N.Wq.EDIT_DISPLAY_NAME)) : G === N.Wq.EDIT_DISPLAY_NAME ? (W(N.Wq.NONE), L(ee[Math.max(0, M - 1)].slideId)) : G === N.Wq.PREVIEW && W(N.Wq.EDIT_USERNAME)) : L(ee[Math.max(0, M - 1)].slideId));
        }, [ee, M, G, ei]),
        es = i.useCallback(() => {
            L(j.A.FINISH_LATER);
        }, []),
        el = i.useMemo(() => (M === j.A.EDIT_SCREEN && G === N.Wq.EDIT_DISPLAY_NAME ? er : M === j.A.EDIT_SCREEN && G === N.Wq.EDIT_USERNAME ? en : M === j.A.SUGGESTIONS && G === N.Wq.SUGGESTION ? en : ea), [M, G, er, en, ea]),
        ec = i.useMemo(() => {
            var e, t;
            return R(
                null != (t = null == (e = ee.find((e) => e.slideId === M)) ? void 0 : e.footerButtons) ? t : [],
                {
                    handleNext: el,
                    handleBack: eo,
                    handleRemindMeLater: es,
                    onClose: A
                },
                k,
                Y,
                F
            );
        }, [eo, es, el, A, ee, M, k, Y, F]),
        eu = i.useMemo(() => (0, b.zV)(K), [K]);
    return (
        i.useLayoutEffect(() => {
            (0, f.Z)(K.id, eu);
        }, [K, eu]),
        i.useEffect(() => {
            var e, t;
            switch (G) {
                case N.Wq.EDIT_DISPLAY_NAME:
                    null == (e = H.current) || e.focusDisplayName();
                    break;
                case N.Wq.EDIT_USERNAME:
                case N.Wq.SUGGESTION:
                    null == (t = H.current) || t.focusUsername();
            }
        }, [G]),
        !F && null == U && (G === N.Wq.EDIT_USERNAME ? (t = I.intl.formatToPlainString(I.t.AJh8BQ, { source: K.username })) : G === N.Wq.SUGGESTION && (Y || null != X) && (t = I.intl.string(I.t['i/2SgI']))),
        (0, n.jsxs)(u.Y0X, {
            className: C.modalRoot,
            impression: {
                impressionName: s.ImpressionNames.POMELO_LANDING,
                impressionProperties: {
                    source: r,
                    impression_group: s.ImpressionGroups.POMELO_FLOW,
                    one_click_flow: w
                }
            },
            transitionState: a,
            size: u.CgR.DYNAMIC,
            parentComponent: 'PomeloModal',
            children: [
                (0, n.jsx)(c.zx, {
                    onClick: () => {
                        M === j.A.SUGGESTIONS || M === j.A.EDIT_SCREEN ? L(j.A.FINISH_LATER) : A();
                    },
                    size: c.zx.Sizes.MIN,
                    look: c.zx.Looks.BLANK,
                    className: C.closeContainer,
                    'aria-label': I.intl.string(I.t.cpT0Cg),
                    children: (0, n.jsx)(u.Dio, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 15,
                        height: 15,
                        className: C.close
                    })
                }),
                (0, n.jsx)(u.hzk, {
                    className: C.contentContainer,
                    children: (0, n.jsxs)(u.MyZ, {
                        activeSlide: M,
                        width: 480,
                        children: [
                            (0, n.jsx)(u.Mi4, {
                                id: j.A.INFO,
                                children: (0, n.jsx)(v.Z, { user: K })
                            }),
                            (0, n.jsx)(u.Mi4, {
                                id: j.A.EDIT_SCREEN,
                                children: (0, n.jsx)(_.Z, {
                                    user: K,
                                    error: U,
                                    editState: G,
                                    userRef: H,
                                    formValues: Q,
                                    footerNotice: t,
                                    onChangeFormValue: J,
                                    onFocusUsername: () => W(N.Wq.EDIT_USERNAME),
                                    onFocusDisplayName: () => W(N.Wq.EDIT_DISPLAY_NAME),
                                    onClose: A
                                })
                            }),
                            (0, n.jsx)(u.Mi4, {
                                id: j.A.FINISH_LATER,
                                children: (0, n.jsx)(x.Z, { onClose: A })
                            }),
                            (0, n.jsx)(u.Mi4, {
                                id: j.A.SUGGESTIONS,
                                children: (0, n.jsx)(_.Z, {
                                    user: K,
                                    error: U,
                                    editState: G,
                                    userRef: H,
                                    formValues: Q,
                                    footerNotice: t,
                                    onChangeFormValue: J,
                                    onFocusUsername: () => W(N.Wq.SUGGESTION),
                                    onFocusDisplayName: () => W(N.Wq.EDIT_DISPLAY_NAME),
                                    onClose: A,
                                    usernameSuggestionLoading: Y,
                                    oneClickFlow: w
                                })
                            })
                        ]
                    })
                }),
                ec
            ]
        })
    );
}
let R = (e, t, r, i, a) =>
    0 === e.length
        ? null
        : (0, n.jsxs)(u.mzw, {
              className: C.footer,
              children: [
                  (0, n.jsxs)('div', {
                      className: C.inline,
                      children: [
                          e.includes('REMIND_ME_LATER') &&
                              (0, n.jsx)(c.zx, {
                                  className: C.unfilledButton,
                                  type: 'button',
                                  size: c.zx.Sizes.SMALL,
                                  look: c.zx.Looks.BLANK,
                                  color: c.zx.Colors.CUSTOM,
                                  onClick: t.handleRemindMeLater,
                                  children: I.intl.string(I.t['1mGbXF'])
                              }),
                          e.includes('NEXT') &&
                              (0, n.jsx)(u.zxk, {
                                  variant: 'primary',
                                  size: 'sm',
                                  text: I.intl.string(I.t.PDTjLC),
                                  type: 'button',
                                  loading: r,
                                  onClick: t.handleNext
                              }),
                          e.includes('SUBMIT') &&
                              (0, n.jsx)(u.zxk, {
                                  variant: 'primary',
                                  size: 'sm',
                                  text: I.intl.string(I.t.geKm7u),
                                  type: 'button',
                                  loading: r,
                                  onClick: t.handleNext
                              }),
                          e.includes('GET_STARTED') &&
                              (0, n.jsx)(u.zxk, {
                                  variant: 'primary',
                                  size: 'sm',
                                  text: I.intl.string(I.t.LhlgY2),
                                  type: 'button',
                                  onClick: t.handleNext
                              }),
                          e.includes('GOT_IT') &&
                              (0, n.jsx)(u.zxk, {
                                  variant: 'primary',
                                  size: 'sm',
                                  text: I.intl.string(I.t['NX+WJC']),
                                  type: 'button',
                                  onClick: t.onClose
                              }),
                          e.includes('UPDATE') &&
                              (0, n.jsx)(u.zxk, {
                                  variant: 'primary',
                                  size: 'sm',
                                  text: I.intl.string(I.t.VZANAA),
                                  type: 'button',
                                  disabled: i && !a,
                                  loading: r,
                                  onClick: t.handleNext
                              })
                      ]
                  }),
                  e.includes('BACK') &&
                      (0, n.jsx)(c.zx, {
                          className: C.unfilledButton,
                          type: 'button',
                          size: c.zx.Sizes.SMALL,
                          look: c.zx.Looks.BLANK,
                          color: c.zx.Colors.CUSTOM,
                          onClick: t.handleBack,
                          children: I.intl.string(I.t['13/7kZ'])
                      })
              ]
          });
