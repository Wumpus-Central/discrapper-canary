r.d(t, { default: () => A }), r(388685);
var n = r(255367),
    i = r(73800),
    o = r(512722),
    s = r.n(o),
    l = r(990547),
    a = r(399606),
    c = r(481060),
    u = r(232567),
    d = r(809206),
    g = r(479531),
    m = r(484459),
    f = r(594174),
    E = r(626135),
    O = r(51144),
    h = r(986197),
    p = r(135200),
    y = r(346585),
    S = r(347649),
    b = r(361117),
    x = r(108793),
    j = r(635774),
    N = r(387955),
    v = r(801461),
    T = r(448624),
    P = r(981631),
    I = r(388032),
    _ = r(367019);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function A(e) {
    let t,
        { source: r, transitionState: o, onClose: A, oneClickFlow: M = !1 } = e,
        [L, k] = i.useState(M ? T.A.SUGGESTIONS : T.A.INFO),
        [R, D] = i.useState(!1),
        [Z, U] = i.useState(null),
        [G, W] = i.useState(M ? v.Wq.SUGGESTION : v.Wq.NONE),
        [z, q] = i.useState(!1),
        [F, H] = i.useState(!1),
        B = i.useRef(null),
        V = (0, a.e7)([p.Z], () => p.Z.isCurrentUsernameInvalid()),
        X = (0, a.e7)([f.default], () => {
            let e = f.default.getCurrentUser();
            return s()(null != e, 'PomeloModal: user cannot be undefined'), e;
        }),
        Y = (0, S.CC)(),
        { usernameSuggestion: K, usernameSuggestionLoading: Q } = (0, b.G)(M ? v.en : void 0);
    i.useEffect(() => {
        G === v.Wq.EDIT_USERNAME && H(!0),
            E.default.track(P.rMx.POMELO_EDIT_STEP_VIEWED, {
                source: r,
                step: G
            });
    }, [G, r]),
        i.useEffect(() => {
            F ||
                z ||
                null == K ||
                !(K.length > 0) ||
                $((e) => {
                    var t, r;
                    return (
                        (t = C({}, e)),
                        (r = r = { username: K }),
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
        }, [K, F, z]);
    let [J, $] = i.useState({
            username: (0, y.e$)(X),
            globalName: O.ZP.getName(X)
        }),
        ee = (e) => {
            U(null), null != e.username && q(!0), $((t) => C({}, t, e));
        },
        et = i.useMemo(
            () => [
                {
                    slideId: T.A.INFO,
                    next: T.A.EDIT_SCREEN,
                    footerButtons: ['REMIND_ME_LATER', 'GET_STARTED']
                },
                {
                    slideId: T.A.EDIT_SCREEN,
                    next: T.A.FINISH_LATER,
                    back: T.A.INFO,
                    footerButtons: [G === v.Wq.PREVIEW ? 'GOT_IT' : 'BACK', G === v.Wq.PREVIEW ? 'GOT_IT' : G === v.Wq.EDIT_USERNAME ? 'SUBMIT' : 'NEXT']
                },
                {
                    slideId: T.A.FINISH_LATER,
                    back: T.A.EDIT_SCREEN
                },
                {
                    slideId: T.A.SUGGESTIONS,
                    footerButtons: [G === v.Wq.PREVIEW ? 'GOT_IT' : 'UPDATE']
                },
                { slideId: T.A.FINISH_LATER }
            ],
            [G]
        ),
        er = et.length,
        en = i.useCallback(async () => {
            if (J.globalName.length <= 0) {
                let e = I.intl.formatToPlainString(I.t.IpijXF, {
                    minNum: 1,
                    maxNum: 32
                });
                U(e),
                    E.default.track(P.rMx.POMELO_ERRORS, {
                        reason: e,
                        display_name_error: !0,
                        location: 'modal'
                    });
                return;
            }
            if (O.ZP.getGlobalName(X) === J.globalName) return void W(v.Wq.EDIT_USERNAME);
            try {
                U(null), D(!0), await (0, d.S2)({ global_name: J.globalName }), W(v.Wq.EDIT_USERNAME);
            } catch (t) {
                let e = new g.Z(t).getAnyErrorMessage();
                E.default.track(P.rMx.POMELO_ERRORS, {
                    reason: e,
                    display_name_error: !0,
                    location: 'modal'
                }),
                    U(e);
            } finally {
                D(!1);
            }
        }, [X, J]),
        ei = i.useCallback(async () => {
            try {
                U(null), D(!0), await h.Z.createPomelo({ username: (0, y.R_)(J.username) }, M), await (0, u.In)(X.id), W(v.Wq.PREVIEW);
            } catch (r) {
                let e = new g.Z(r),
                    t = (null == e ? void 0 : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : I.intl.string(I.t.R0RpRU);
                U(t),
                    E.default.track(P.rMx.POMELO_ERRORS, {
                        reason: t,
                        username_error: !0,
                        location: 'modal',
                        one_click_flow: M
                    });
            } finally {
                D(!1);
            }
        }, [J, X.id, M]),
        eo = V || (0, y.NX)(X),
        es = i.useCallback(() => {
            W(eo ? v.Wq.EDIT_USERNAME : v.Wq.EDIT_DISPLAY_NAME), k(et[Math.min(er - 1, L + 1)].slideId);
        }, [L, et, er, eo]),
        el = i.useCallback(() => {
            U(null), L === T.A.EDIT_SCREEN ? (G === v.Wq.EDIT_USERNAME ? (eo ? (W(v.Wq.NONE), k(et[Math.max(0, L - 1)].slideId)) : W(v.Wq.EDIT_DISPLAY_NAME)) : G === v.Wq.EDIT_DISPLAY_NAME ? (W(v.Wq.NONE), k(et[Math.max(0, L - 1)].slideId)) : G === v.Wq.PREVIEW && W(v.Wq.EDIT_USERNAME)) : k(et[Math.max(0, L - 1)].slideId);
        }, [et, L, G, eo]),
        ea = i.useCallback(() => {
            k(T.A.FINISH_LATER);
        }, []),
        ec = i.useCallback(() => {
            M ? (k(T.A.SUGGESTIONS), W(v.Wq.SUGGESTION)) : (k(T.A.INFO), W(v.Wq.NONE));
        }, [M]),
        eu = i.useMemo(() => (L === T.A.EDIT_SCREEN && G === v.Wq.EDIT_DISPLAY_NAME ? en : L === T.A.EDIT_SCREEN && G === v.Wq.EDIT_USERNAME ? ei : L === T.A.SUGGESTIONS && G === v.Wq.SUGGESTION ? ei : es), [L, G, en, ei, es]),
        ed = i.useMemo(() => {
            var e, t;
            return w(
                null != (t = null == (e = et.find((e) => e.slideId === L)) ? void 0 : e.footerButtons) ? t : [],
                {
                    handleNext: eu,
                    handleBack: el,
                    handleRemindMeLater: ea,
                    onClose: A
                },
                R,
                Q,
                z
            );
        }, [el, ea, eu, A, et, L, R, Q, z]),
        eg = i.useMemo(() => (0, y.zV)(X), [X]);
    return (
        i.useLayoutEffect(() => {
            (0, m.Z)(X.id, eg);
        }, [X, eg]),
        i.useEffect(() => {
            var e, t;
            switch (G) {
                case v.Wq.EDIT_DISPLAY_NAME:
                    null == (e = B.current) || e.focusDisplayName();
                    break;
                case v.Wq.EDIT_USERNAME:
                case v.Wq.SUGGESTION:
                    null == (t = B.current) || t.focusUsername();
            }
        }, [G]),
        !z && null == Z && (G === v.Wq.EDIT_USERNAME ? (t = I.intl.formatToPlainString(I.t.AJh8BQ, { source: X.username })) : G === v.Wq.SUGGESTION && (Q || null != K) && (t = I.intl.string(I.t['i/2SgI']))),
        (0, n.jsxs)(c.Y0X, {
            className: _.modalRoot,
            impression: {
                impressionName: l.ImpressionNames.POMELO_LANDING,
                impressionProperties: {
                    source: r,
                    impression_group: l.ImpressionGroups.POMELO_FLOW,
                    one_click_flow: M
                }
            },
            transitionState: o,
            size: c.CgR.DYNAMIC,
            children: [
                (0, n.jsx)(c.zxk, {
                    onClick: () => {
                        Y && (L === T.A.SUGGESTIONS || L === T.A.EDIT_SCREEN) ? k(T.A.FINISH_LATER) : A();
                    },
                    size: c.zxk.Sizes.MIN,
                    look: c.zxk.Looks.BLANK,
                    className: _.closeContainer,
                    'aria-label': I.intl.string(I.t.cpT0Cg),
                    children: (0, n.jsx)(c.Dio, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 15,
                        height: 15,
                        className: _.close
                    })
                }),
                (0, n.jsx)(c.hzk, {
                    className: _.contentContainer,
                    children: (0, n.jsxs)(c.MyZ, {
                        activeSlide: L,
                        width: 480,
                        children: [
                            (0, n.jsx)(c.Mi4, {
                                id: T.A.INFO,
                                children: (0, n.jsx)(N.Z, { user: X })
                            }),
                            (0, n.jsx)(c.Mi4, {
                                id: T.A.EDIT_SCREEN,
                                children: (0, n.jsx)(x.Z, {
                                    user: X,
                                    error: Z,
                                    editState: G,
                                    userRef: B,
                                    formValues: J,
                                    footerNotice: t,
                                    onChangeFormValue: ee,
                                    onFocusUsername: () => W(v.Wq.EDIT_USERNAME),
                                    onFocusDisplayName: () => W(v.Wq.EDIT_DISPLAY_NAME),
                                    onClose: A
                                })
                            }),
                            (0, n.jsx)(c.Mi4, {
                                id: T.A.FINISH_LATER,
                                children: (0, n.jsx)(j.Z, {
                                    onClose: A,
                                    handleStartFlow: ec
                                })
                            }),
                            (0, n.jsx)(c.Mi4, {
                                id: T.A.SUGGESTIONS,
                                children: (0, n.jsx)(x.Z, {
                                    user: X,
                                    error: Z,
                                    editState: G,
                                    userRef: B,
                                    formValues: J,
                                    footerNotice: t,
                                    onChangeFormValue: ee,
                                    onFocusUsername: () => W(v.Wq.SUGGESTION),
                                    onFocusDisplayName: () => W(v.Wq.EDIT_DISPLAY_NAME),
                                    onClose: A,
                                    usernameSuggestionLoading: Q,
                                    oneClickFlow: M
                                })
                            })
                        ]
                    })
                }),
                ed
            ]
        })
    );
}
let w = (e, t, r, i, o) =>
    0 === e.length
        ? null
        : (0, n.jsxs)(c.mzw, {
              className: _.footer,
              children: [
                  (0, n.jsxs)('div', {
                      className: _.inline,
                      children: [
                          e.includes('REMIND_ME_LATER') &&
                              (0, n.jsx)(c.zxk, {
                                  className: _.unfilledButton,
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  look: c.zxk.Looks.BLANK,
                                  color: c.zxk.Colors.CUSTOM,
                                  onClick: t.handleRemindMeLater,
                                  children: I.intl.string(I.t['1mGbXF'])
                              }),
                          e.includes('NEXT') &&
                              (0, n.jsx)(c.zxk, {
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  submitting: r,
                                  onClick: t.handleNext,
                                  children: I.intl.string(I.t.PDTjLC)
                              }),
                          e.includes('SUBMIT') &&
                              (0, n.jsx)(c.zxk, {
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  submitting: r,
                                  onClick: t.handleNext,
                                  children: I.intl.string(I.t.geKm7u)
                              }),
                          e.includes('GET_STARTED') &&
                              (0, n.jsx)(c.zxk, {
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  onClick: t.handleNext,
                                  children: I.intl.string(I.t.LhlgY2)
                              }),
                          e.includes('GOT_IT') &&
                              (0, n.jsx)(c.zxk, {
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  onClick: t.onClose,
                                  children: I.intl.string(I.t['NX+WJC'])
                              }),
                          e.includes('UPDATE') &&
                              (0, n.jsx)(c.zxk, {
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  disabled: i && !o,
                                  submitting: r,
                                  onClick: t.handleNext,
                                  children: I.intl.string(I.t.VZANAA)
                              })
                      ]
                  }),
                  e.includes('BACK') &&
                      (0, n.jsx)(c.zxk, {
                          className: _.unfilledButton,
                          type: 'button',
                          size: c.zxk.Sizes.SMALL,
                          look: c.zxk.Looks.BLANK,
                          color: c.zxk.Colors.CUSTOM,
                          onClick: t.handleBack,
                          children: I.intl.string(I.t['13/7kZ'])
                      })
              ]
          });
