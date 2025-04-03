r.d(t, { default: () => A }), r(47120);
var n = r(200651),
    i = r(192379),
    s = r(512722),
    o = r.n(s),
    a = r(990547),
    l = r(399606),
    c = r(481060),
    u = r(232567),
    d = r(809206),
    g = r(479531),
    m = r(484459),
    f = r(594174),
    E = r(626135),
    h = r(51144),
    O = r(986197),
    p = r(135200),
    y = r(346585),
    b = r(347649),
    S = r(361117),
    N = r(108793),
    x = r(635774),
    j = r(387955),
    v = r(801461),
    T = r(448624),
    P = r(981631),
    _ = r(388032),
    I = r(367019);
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
        { source: r, transitionState: s, onClose: A, oneClickFlow: k = !1 } = e,
        [M, L] = i.useState(k ? T.A.SUGGESTIONS : T.A.INFO),
        [R, W] = i.useState(!1),
        [D, U] = i.useState(null),
        [Z, G] = i.useState(k ? v.Wq.SUGGESTION : v.Wq.NONE),
        [q, z] = i.useState(!1),
        [F, H] = i.useState(!1),
        B = i.useRef(null),
        V = (0, l.e7)([p.Z], () => p.Z.isCurrentUsernameInvalid()),
        X = (0, l.e7)([f.default], () => {
            let e = f.default.getCurrentUser();
            return o()(null != e, 'PomeloModal: user cannot be undefined'), e;
        }),
        K = (0, b.CC)(),
        { usernameSuggestion: Y, usernameSuggestionLoading: Q } = (0, S.G)(k ? v.en : void 0);
    i.useEffect(() => {
        Z === v.Wq.EDIT_USERNAME && H(!0),
            E.default.track(P.rMx.POMELO_EDIT_STEP_VIEWED, {
                source: r,
                step: Z
            });
    }, [Z, r]),
        i.useEffect(() => {
            F ||
                q ||
                null == Y ||
                !(Y.length > 0) ||
                $((e) => {
                    var t, r;
                    return (
                        (t = C({}, e)),
                        (r = r = { username: Y }),
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
        }, [Y, F, q]);
    let [J, $] = i.useState({
            username: (0, y.e$)(X),
            globalName: h.ZP.getName(X)
        }),
        ee = (e) => {
            U(null), null != e.username && z(!0), $((t) => C({}, t, e));
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
                    footerButtons: [Z === v.Wq.PREVIEW ? 'GOT_IT' : 'BACK', Z === v.Wq.PREVIEW ? 'GOT_IT' : Z === v.Wq.EDIT_USERNAME ? 'SUBMIT' : 'NEXT']
                },
                {
                    slideId: T.A.FINISH_LATER,
                    back: T.A.EDIT_SCREEN
                },
                {
                    slideId: T.A.SUGGESTIONS,
                    footerButtons: [Z === v.Wq.PREVIEW ? 'GOT_IT' : 'UPDATE']
                },
                { slideId: T.A.FINISH_LATER }
            ],
            [Z]
        ),
        er = et.length,
        en = i.useCallback(async () => {
            if (J.globalName.length <= 0) {
                let e = _.NW.formatToPlainString(_.t.IpijXF, {
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
            if (h.ZP.getGlobalName(X) === J.globalName) return void G(v.Wq.EDIT_USERNAME);
            try {
                U(null), W(!0), await (0, d.S2)({ global_name: J.globalName }), G(v.Wq.EDIT_USERNAME);
            } catch (t) {
                let e = new g.Z(t).getAnyErrorMessage();
                E.default.track(P.rMx.POMELO_ERRORS, {
                    reason: e,
                    display_name_error: !0,
                    location: 'modal'
                }),
                    U(e);
            } finally {
                W(!1);
            }
        }, [X, J]),
        ei = i.useCallback(async () => {
            try {
                U(null), W(!0), await O.Z.createPomelo({ username: (0, y.R_)(J.username) }, k), await (0, u.In)(X.id), G(v.Wq.PREVIEW);
            } catch (r) {
                let e = new g.Z(r),
                    t = (null == e ? void 0 : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : _.NW.string(_.t.R0RpRU);
                U(t),
                    E.default.track(P.rMx.POMELO_ERRORS, {
                        reason: t,
                        username_error: !0,
                        location: 'modal',
                        one_click_flow: k
                    });
            } finally {
                W(!1);
            }
        }, [J, X.id, k]),
        es = V || (0, y.NX)(X),
        eo = i.useCallback(() => {
            G(es ? v.Wq.EDIT_USERNAME : v.Wq.EDIT_DISPLAY_NAME), L(et[Math.min(er - 1, M + 1)].slideId);
        }, [M, et, er, es]),
        ea = i.useCallback(() => {
            U(null), M === T.A.EDIT_SCREEN ? (Z === v.Wq.EDIT_USERNAME ? (es ? (G(v.Wq.NONE), L(et[Math.max(0, M - 1)].slideId)) : G(v.Wq.EDIT_DISPLAY_NAME)) : Z === v.Wq.EDIT_DISPLAY_NAME ? (G(v.Wq.NONE), L(et[Math.max(0, M - 1)].slideId)) : Z === v.Wq.PREVIEW && G(v.Wq.EDIT_USERNAME)) : L(et[Math.max(0, M - 1)].slideId);
        }, [et, M, Z, es]),
        el = i.useCallback(() => {
            L(T.A.FINISH_LATER);
        }, []),
        ec = i.useCallback(() => {
            k ? (L(T.A.SUGGESTIONS), G(v.Wq.SUGGESTION)) : (L(T.A.INFO), G(v.Wq.NONE));
        }, [k]),
        eu = i.useMemo(() => (M === T.A.EDIT_SCREEN && Z === v.Wq.EDIT_DISPLAY_NAME ? en : M === T.A.EDIT_SCREEN && Z === v.Wq.EDIT_USERNAME ? ei : M === T.A.SUGGESTIONS && Z === v.Wq.SUGGESTION ? ei : eo), [M, Z, en, ei, eo]),
        ed = i.useMemo(() => {
            var e, t;
            return w(
                null != (t = null == (e = et.find((e) => e.slideId === M)) ? void 0 : e.footerButtons) ? t : [],
                {
                    handleNext: eu,
                    handleBack: ea,
                    handleRemindMeLater: el,
                    onClose: A
                },
                R,
                Q,
                q
            );
        }, [ea, el, eu, A, et, M, R, Q, q]),
        eg = i.useMemo(() => (0, y.zV)(X), [X]);
    return (
        i.useLayoutEffect(() => {
            (0, m.Z)(X.id, eg);
        }, [X, eg]),
        i.useEffect(() => {
            var e, t;
            switch (Z) {
                case v.Wq.EDIT_DISPLAY_NAME:
                    null == (e = B.current) || e.focusDisplayName();
                    break;
                case v.Wq.EDIT_USERNAME:
                case v.Wq.SUGGESTION:
                    null == (t = B.current) || t.focusUsername();
            }
        }, [Z]),
        !q && null == D && (Z === v.Wq.EDIT_USERNAME ? (t = _.NW.formatToPlainString(_.t.AJh8BQ, { source: X.username })) : Z === v.Wq.SUGGESTION && (Q || null != Y) && (t = _.NW.string(_.t['i/2SgI']))),
        (0, n.jsxs)(c.Y0X, {
            className: I.modalRoot,
            impression: {
                impressionName: a.ImpressionNames.POMELO_LANDING,
                impressionProperties: {
                    source: r,
                    impression_group: a.ImpressionGroups.POMELO_FLOW,
                    one_click_flow: k
                }
            },
            transitionState: s,
            size: c.CgR.DYNAMIC,
            children: [
                (0, n.jsx)(c.zxk, {
                    onClick: () => {
                        K && (M === T.A.SUGGESTIONS || M === T.A.EDIT_SCREEN) ? L(T.A.FINISH_LATER) : A();
                    },
                    size: c.zxk.Sizes.MIN,
                    look: c.zxk.Looks.BLANK,
                    className: I.closeContainer,
                    'aria-label': _.NW.string(_.t.cpT0Cg),
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
                        activeSlide: M,
                        width: 480,
                        children: [
                            (0, n.jsx)(c.Mi4, {
                                id: T.A.INFO,
                                children: (0, n.jsx)(j.Z, { user: X })
                            }),
                            (0, n.jsx)(c.Mi4, {
                                id: T.A.EDIT_SCREEN,
                                children: (0, n.jsx)(N.Z, {
                                    user: X,
                                    error: D,
                                    editState: Z,
                                    userRef: B,
                                    formValues: J,
                                    footerNotice: t,
                                    onChangeFormValue: ee,
                                    onFocusUsername: () => G(v.Wq.EDIT_USERNAME),
                                    onFocusDisplayName: () => G(v.Wq.EDIT_DISPLAY_NAME),
                                    onClose: A
                                })
                            }),
                            (0, n.jsx)(c.Mi4, {
                                id: T.A.FINISH_LATER,
                                children: (0, n.jsx)(x.Z, {
                                    onClose: A,
                                    handleStartFlow: ec
                                })
                            }),
                            (0, n.jsx)(c.Mi4, {
                                id: T.A.SUGGESTIONS,
                                children: (0, n.jsx)(N.Z, {
                                    user: X,
                                    error: D,
                                    editState: Z,
                                    userRef: B,
                                    formValues: J,
                                    footerNotice: t,
                                    onChangeFormValue: ee,
                                    onFocusUsername: () => G(v.Wq.SUGGESTION),
                                    onFocusDisplayName: () => G(v.Wq.EDIT_DISPLAY_NAME),
                                    onClose: A,
                                    usernameSuggestionLoading: Q,
                                    oneClickFlow: k
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
let w = (e, t, r, i, s) =>
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
                                  children: _.NW.string(_.t['1mGbXF'])
                              }),
                          e.includes('NEXT') &&
                              (0, n.jsx)(c.zxk, {
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  submitting: r,
                                  onClick: t.handleNext,
                                  children: _.NW.string(_.t.PDTjLC)
                              }),
                          e.includes('SUBMIT') &&
                              (0, n.jsx)(c.zxk, {
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  submitting: r,
                                  onClick: t.handleNext,
                                  children: _.NW.string(_.t.geKm7u)
                              }),
                          e.includes('GET_STARTED') &&
                              (0, n.jsx)(c.zxk, {
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  onClick: t.handleNext,
                                  children: _.NW.string(_.t.LhlgY2)
                              }),
                          e.includes('GOT_IT') &&
                              (0, n.jsx)(c.zxk, {
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  onClick: t.onClose,
                                  children: _.NW.string(_.t['NX+WJC'])
                              }),
                          e.includes('UPDATE') &&
                              (0, n.jsx)(c.zxk, {
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  disabled: i && !s,
                                  submitting: r,
                                  onClick: t.handleNext,
                                  children: _.NW.string(_.t.VZANAA)
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
                          children: _.NW.string(_.t['13/7kZ'])
                      })
              ]
          });
