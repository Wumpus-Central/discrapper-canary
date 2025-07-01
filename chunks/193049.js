(r.d(t, { default: () => P }), r(388685));
var n = r(255367),
    i = r(73800),
    o = r(512722),
    s = r.n(o),
    a = r(990547),
    l = r(399606),
    c = r(481060),
    u = r(232567),
    d = r(809206),
    m = r(479531),
    g = r(484459),
    f = r(594174),
    h = r(626135),
    E = r(51144),
    p = r(986197),
    O = r(135200),
    y = r(346585),
    S = r(361117),
    b = r(108793),
    _ = r(635774),
    x = r(387955),
    N = r(801461),
    j = r(448624),
    v = r(981631),
    T = r(388032),
    I = r(367019);
function C(e) {
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
function P(e) {
    let t,
        { source: r, transitionState: o, onClose: P, oneClickFlow: R = !1 } = e,
        [w, L] = i.useState(R ? j.A.SUGGESTIONS : j.A.INFO),
        [M, k] = i.useState(!1),
        [D, U] = i.useState(null),
        [Z, G] = i.useState(R ? N.Wq.SUGGESTION : N.Wq.NONE),
        [W, z] = i.useState(!1),
        [F, q] = i.useState(!1),
        B = i.useRef(null),
        H = (0, l.e7)([O.Z], () => O.Z.isCurrentUsernameInvalid()),
        V = (0, l.e7)([f.default], () => {
            let e = f.default.getCurrentUser();
            return (s()(null != e, 'PomeloModal: user cannot be undefined'), e);
        }),
        { usernameSuggestion: K, usernameSuggestionLoading: X } = (0, S.G)(R ? N.en : void 0);
    (i.useEffect(() => {
        (Z === N.Wq.EDIT_USERNAME && q(!0),
            h.default.track(v.rMx.POMELO_EDIT_STEP_VIEWED, {
                source: r,
                step: Z
            }));
    }, [Z, r]),
        i.useEffect(() => {
            F ||
                W ||
                null == K ||
                !(K.length > 0) ||
                Q((e) => {
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
        }, [K, F, W]));
    let [Y, Q] = i.useState({
            username: (0, y.e$)(V),
            globalName: E.ZP.getName(V)
        }),
        $ = (e) => {
            (U(null), null != e.username && z(!0), Q((t) => C({}, t, e)));
        },
        J = i.useMemo(
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
                    footerButtons: [Z === N.Wq.PREVIEW ? 'GOT_IT' : 'BACK', Z === N.Wq.PREVIEW ? 'GOT_IT' : Z === N.Wq.EDIT_USERNAME ? 'SUBMIT' : 'NEXT']
                },
                {
                    slideId: j.A.FINISH_LATER,
                    back: j.A.EDIT_SCREEN
                },
                {
                    slideId: j.A.SUGGESTIONS,
                    footerButtons: [Z === N.Wq.PREVIEW ? 'GOT_IT' : 'UPDATE']
                },
                { slideId: j.A.FINISH_LATER }
            ],
            [Z]
        ),
        ee = J.length,
        et = i.useCallback(async () => {
            if (Y.globalName.length <= 0) {
                let e = T.intl.formatToPlainString(T.t.IpijXF, {
                    minNum: 1,
                    maxNum: 32
                });
                (U(e),
                    h.default.track(v.rMx.POMELO_ERRORS, {
                        reason: e,
                        display_name_error: !0,
                        location: 'modal'
                    }));
                return;
            }
            if (E.ZP.getGlobalName(V) === Y.globalName) return void G(N.Wq.EDIT_USERNAME);
            try {
                (U(null), k(!0), await (0, d.S2)({ global_name: Y.globalName }), G(N.Wq.EDIT_USERNAME));
            } catch (t) {
                let e = new m.Z(t).getAnyErrorMessage();
                (h.default.track(v.rMx.POMELO_ERRORS, {
                    reason: e,
                    display_name_error: !0,
                    location: 'modal'
                }),
                    U(e));
            } finally {
                k(!1);
            }
        }, [V, Y]),
        er = i.useCallback(async () => {
            try {
                (U(null), k(!0), await p.Z.createPomelo({ username: (0, y.R_)(Y.username) }, R), await (0, u.In)(V.id), G(N.Wq.PREVIEW));
            } catch (r) {
                let e = new m.Z(r),
                    t = (null == e ? void 0 : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : T.intl.string(T.t.R0RpRU);
                (U(t),
                    h.default.track(v.rMx.POMELO_ERRORS, {
                        reason: t,
                        username_error: !0,
                        location: 'modal',
                        one_click_flow: R
                    }));
            } finally {
                k(!1);
            }
        }, [Y, V.id, R]),
        en = H || (0, y.NX)(V),
        ei = i.useCallback(() => {
            (G(en ? N.Wq.EDIT_USERNAME : N.Wq.EDIT_DISPLAY_NAME), L(J[Math.min(ee - 1, w + 1)].slideId));
        }, [w, J, ee, en]),
        eo = i.useCallback(() => {
            (U(null), w === j.A.EDIT_SCREEN ? (Z === N.Wq.EDIT_USERNAME ? (en ? (G(N.Wq.NONE), L(J[Math.max(0, w - 1)].slideId)) : G(N.Wq.EDIT_DISPLAY_NAME)) : Z === N.Wq.EDIT_DISPLAY_NAME ? (G(N.Wq.NONE), L(J[Math.max(0, w - 1)].slideId)) : Z === N.Wq.PREVIEW && G(N.Wq.EDIT_USERNAME)) : L(J[Math.max(0, w - 1)].slideId));
        }, [J, w, Z, en]),
        es = i.useCallback(() => {
            L(j.A.FINISH_LATER);
        }, []),
        ea = i.useMemo(() => (w === j.A.EDIT_SCREEN && Z === N.Wq.EDIT_DISPLAY_NAME ? et : w === j.A.EDIT_SCREEN && Z === N.Wq.EDIT_USERNAME ? er : w === j.A.SUGGESTIONS && Z === N.Wq.SUGGESTION ? er : ei), [w, Z, et, er, ei]),
        el = i.useMemo(() => {
            var e, t;
            return A(
                null != (t = null == (e = J.find((e) => e.slideId === w)) ? void 0 : e.footerButtons) ? t : [],
                {
                    handleNext: ea,
                    handleBack: eo,
                    handleRemindMeLater: es,
                    onClose: P
                },
                M,
                X,
                W
            );
        }, [eo, es, ea, P, J, w, M, X, W]),
        ec = i.useMemo(() => (0, y.zV)(V), [V]);
    return (
        i.useLayoutEffect(() => {
            (0, g.Z)(V.id, ec);
        }, [V, ec]),
        i.useEffect(() => {
            var e, t;
            switch (Z) {
                case N.Wq.EDIT_DISPLAY_NAME:
                    null == (e = B.current) || e.focusDisplayName();
                    break;
                case N.Wq.EDIT_USERNAME:
                case N.Wq.SUGGESTION:
                    null == (t = B.current) || t.focusUsername();
            }
        }, [Z]),
        !W && null == D && (Z === N.Wq.EDIT_USERNAME ? (t = T.intl.formatToPlainString(T.t.AJh8BQ, { source: V.username })) : Z === N.Wq.SUGGESTION && (X || null != K) && (t = T.intl.string(T.t['i/2SgI']))),
        (0, n.jsxs)(c.Y0X, {
            className: I.modalRoot,
            impression: {
                impressionName: a.ImpressionNames.POMELO_LANDING,
                impressionProperties: {
                    source: r,
                    impression_group: a.ImpressionGroups.POMELO_FLOW,
                    one_click_flow: R
                }
            },
            transitionState: o,
            size: c.CgR.DYNAMIC,
            parentComponent: 'PomeloModal',
            children: [
                (0, n.jsx)(c.zxk, {
                    onClick: () => {
                        w === j.A.SUGGESTIONS || w === j.A.EDIT_SCREEN ? L(j.A.FINISH_LATER) : P();
                    },
                    size: c.zxk.Sizes.MIN,
                    look: c.zxk.Looks.BLANK,
                    className: I.closeContainer,
                    'aria-label': T.intl.string(T.t.cpT0Cg),
                    children: (0, n.jsx)(c.Dio, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 15,
                        height: 15,
                        className: I.close
                    })
                }),
                (0, n.jsx)(c.hzk, {
                    className: I.contentContainer,
                    children: (0, n.jsxs)(c.MyZ, {
                        activeSlide: w,
                        width: 480,
                        children: [
                            (0, n.jsx)(c.Mi4, {
                                id: j.A.INFO,
                                children: (0, n.jsx)(x.Z, { user: V })
                            }),
                            (0, n.jsx)(c.Mi4, {
                                id: j.A.EDIT_SCREEN,
                                children: (0, n.jsx)(b.Z, {
                                    user: V,
                                    error: D,
                                    editState: Z,
                                    userRef: B,
                                    formValues: Y,
                                    footerNotice: t,
                                    onChangeFormValue: $,
                                    onFocusUsername: () => G(N.Wq.EDIT_USERNAME),
                                    onFocusDisplayName: () => G(N.Wq.EDIT_DISPLAY_NAME),
                                    onClose: P
                                })
                            }),
                            (0, n.jsx)(c.Mi4, {
                                id: j.A.FINISH_LATER,
                                children: (0, n.jsx)(_.Z, { onClose: P })
                            }),
                            (0, n.jsx)(c.Mi4, {
                                id: j.A.SUGGESTIONS,
                                children: (0, n.jsx)(b.Z, {
                                    user: V,
                                    error: D,
                                    editState: Z,
                                    userRef: B,
                                    formValues: Y,
                                    footerNotice: t,
                                    onChangeFormValue: $,
                                    onFocusUsername: () => G(N.Wq.SUGGESTION),
                                    onFocusDisplayName: () => G(N.Wq.EDIT_DISPLAY_NAME),
                                    onClose: P,
                                    usernameSuggestionLoading: X,
                                    oneClickFlow: R
                                })
                            })
                        ]
                    })
                }),
                el
            ]
        })
    );
}
let A = (e, t, r, i, o) =>
    0 === e.length
        ? null
        : (0, n.jsxs)(c.mzw, {
              className: I.footer,
              children: [
                  (0, n.jsxs)('div', {
                      className: I.inline,
                      children: [
                          e.includes('REMIND_ME_LATER') &&
                              (0, n.jsx)(c.zxk, {
                                  className: I.unfilledButton,
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  look: c.zxk.Looks.BLANK,
                                  color: c.zxk.Colors.CUSTOM,
                                  onClick: t.handleRemindMeLater,
                                  children: T.intl.string(T.t['1mGbXF'])
                              }),
                          e.includes('NEXT') &&
                              (0, n.jsx)(c.zxk, {
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  submitting: r,
                                  onClick: t.handleNext,
                                  children: T.intl.string(T.t.PDTjLC)
                              }),
                          e.includes('SUBMIT') &&
                              (0, n.jsx)(c.zxk, {
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  submitting: r,
                                  onClick: t.handleNext,
                                  children: T.intl.string(T.t.geKm7u)
                              }),
                          e.includes('GET_STARTED') &&
                              (0, n.jsx)(c.zxk, {
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  onClick: t.handleNext,
                                  children: T.intl.string(T.t.LhlgY2)
                              }),
                          e.includes('GOT_IT') &&
                              (0, n.jsx)(c.zxk, {
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  onClick: t.onClose,
                                  children: T.intl.string(T.t['NX+WJC'])
                              }),
                          e.includes('UPDATE') &&
                              (0, n.jsx)(c.zxk, {
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  disabled: i && !o,
                                  submitting: r,
                                  onClick: t.handleNext,
                                  children: T.intl.string(T.t.VZANAA)
                              })
                      ]
                  }),
                  e.includes('BACK') &&
                      (0, n.jsx)(c.zxk, {
                          className: I.unfilledButton,
                          type: 'button',
                          size: c.zxk.Sizes.SMALL,
                          look: c.zxk.Looks.BLANK,
                          color: c.zxk.Colors.CUSTOM,
                          onClick: t.handleBack,
                          children: T.intl.string(T.t['13/7kZ'])
                      })
              ]
          });
