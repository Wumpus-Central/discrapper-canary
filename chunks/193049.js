n.d(t, { default: () => A }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(512722),
    o = n.n(s),
    l = n(990547),
    a = n(399606),
    c = n(481060),
    u = n(232567),
    d = n(809206),
    g = n(479531),
    m = n(484459),
    f = n(594174),
    E = n(626135),
    h = n(51144),
    O = n(986197),
    p = n(135200),
    y = n(346585),
    b = n(347649),
    S = n(361117),
    x = n(108793),
    j = n(635774),
    N = n(387955),
    v = n(801461),
    T = n(448624),
    P = n(981631),
    _ = n(388032),
    I = n(367019);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function A(e) {
    let t,
        { source: n, transitionState: s, onClose: A, oneClickFlow: k = !1 } = e,
        [M, L] = i.useState(k ? T.A.SUGGESTIONS : T.A.INFO),
        [R, D] = i.useState(!1),
        [U, Z] = i.useState(null),
        [G, W] = i.useState(k ? v.Wq.SUGGESTION : v.Wq.NONE),
        [q, z] = i.useState(!1),
        [F, H] = i.useState(!1),
        B = i.useRef(null),
        V = (0, a.e7)([p.Z], () => p.Z.isCurrentUsernameInvalid()),
        X = (0, a.e7)([f.default], () => {
            let e = f.default.getCurrentUser();
            return o()(null != e, 'PomeloModal: user cannot be undefined'), e;
        }),
        K = (0, b.CC)(),
        { usernameSuggestion: Y, usernameSuggestionLoading: Q } = (0, S.G)(k ? v.en : void 0);
    i.useEffect(() => {
        G === v.Wq.EDIT_USERNAME && H(!0),
            E.default.track(P.rMx.POMELO_EDIT_STEP_VIEWED, {
                source: n,
                step: G
            });
    }, [G, n]),
        i.useEffect(() => {
            F ||
                q ||
                null == Y ||
                !(Y.length > 0) ||
                $((e) => {
                    var t, n;
                    return (
                        (t = C({}, e)),
                        (n = n = { username: Y }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
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
            Z(null), null != e.username && z(!0), $((t) => C({}, t, e));
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
        en = et.length,
        er = i.useCallback(async () => {
            if (J.globalName.length <= 0) {
                let e = _.intl.formatToPlainString(_.t.IpijXF, {
                    minNum: 1,
                    maxNum: 32
                });
                Z(e),
                    E.default.track(P.rMx.POMELO_ERRORS, {
                        reason: e,
                        display_name_error: !0,
                        location: 'modal'
                    });
                return;
            }
            if (h.ZP.getGlobalName(X) === J.globalName) return void W(v.Wq.EDIT_USERNAME);
            try {
                Z(null), D(!0), await (0, d.S2)({ global_name: J.globalName }), W(v.Wq.EDIT_USERNAME);
            } catch (t) {
                let e = new g.Z(t).getAnyErrorMessage();
                E.default.track(P.rMx.POMELO_ERRORS, {
                    reason: e,
                    display_name_error: !0,
                    location: 'modal'
                }),
                    Z(e);
            } finally {
                D(!1);
            }
        }, [X, J]),
        ei = i.useCallback(async () => {
            try {
                Z(null), D(!0), await O.Z.createPomelo({ username: (0, y.R_)(J.username) }, k), await (0, u.In)(X.id), W(v.Wq.PREVIEW);
            } catch (n) {
                let e = new g.Z(n),
                    t = (null == e ? void 0 : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : _.intl.string(_.t.R0RpRU);
                Z(t),
                    E.default.track(P.rMx.POMELO_ERRORS, {
                        reason: t,
                        username_error: !0,
                        location: 'modal',
                        one_click_flow: k
                    });
            } finally {
                D(!1);
            }
        }, [J, X.id, k]),
        es = V || (0, y.NX)(X),
        eo = i.useCallback(() => {
            W(es ? v.Wq.EDIT_USERNAME : v.Wq.EDIT_DISPLAY_NAME), L(et[Math.min(en - 1, M + 1)].slideId);
        }, [M, et, en, es]),
        el = i.useCallback(() => {
            Z(null), M === T.A.EDIT_SCREEN ? (G === v.Wq.EDIT_USERNAME ? (es ? (W(v.Wq.NONE), L(et[Math.max(0, M - 1)].slideId)) : W(v.Wq.EDIT_DISPLAY_NAME)) : G === v.Wq.EDIT_DISPLAY_NAME ? (W(v.Wq.NONE), L(et[Math.max(0, M - 1)].slideId)) : G === v.Wq.PREVIEW && W(v.Wq.EDIT_USERNAME)) : L(et[Math.max(0, M - 1)].slideId);
        }, [et, M, G, es]),
        ea = i.useCallback(() => {
            L(T.A.FINISH_LATER);
        }, []),
        ec = i.useCallback(() => {
            k ? (L(T.A.SUGGESTIONS), W(v.Wq.SUGGESTION)) : (L(T.A.INFO), W(v.Wq.NONE));
        }, [k]),
        eu = i.useMemo(() => (M === T.A.EDIT_SCREEN && G === v.Wq.EDIT_DISPLAY_NAME ? er : M === T.A.EDIT_SCREEN && G === v.Wq.EDIT_USERNAME ? ei : M === T.A.SUGGESTIONS && G === v.Wq.SUGGESTION ? ei : eo), [M, G, er, ei, eo]),
        ed = i.useMemo(() => {
            var e, t;
            return w(
                null != (t = null == (e = et.find((e) => e.slideId === M)) ? void 0 : e.footerButtons) ? t : [],
                {
                    handleNext: eu,
                    handleBack: el,
                    handleRemindMeLater: ea,
                    onClose: A
                },
                R,
                Q,
                q
            );
        }, [el, ea, eu, A, et, M, R, Q, q]),
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
        !q && null == U && (G === v.Wq.EDIT_USERNAME ? (t = _.intl.formatToPlainString(_.t.AJh8BQ, { source: X.username })) : G === v.Wq.SUGGESTION && (Q || null != Y) && (t = _.intl.string(_.t['i/2SgI']))),
        (0, r.jsxs)(c.Y0X, {
            className: I.modalRoot,
            impression: {
                impressionName: l.ImpressionNames.POMELO_LANDING,
                impressionProperties: {
                    source: n,
                    impression_group: l.ImpressionGroups.POMELO_FLOW,
                    one_click_flow: k
                }
            },
            transitionState: s,
            size: c.CgR.DYNAMIC,
            children: [
                (0, r.jsx)(c.zxk, {
                    onClick: () => {
                        K && (M === T.A.SUGGESTIONS || M === T.A.EDIT_SCREEN) ? L(T.A.FINISH_LATER) : A();
                    },
                    size: c.zxk.Sizes.MIN,
                    look: c.zxk.Looks.BLANK,
                    className: I.closeContainer,
                    'aria-label': _.intl.string(_.t.cpT0Cg),
                    children: (0, r.jsx)(c.Dio, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 15,
                        height: 15,
                        className: I.close
                    })
                }),
                (0, r.jsx)(c.hzk, {
                    className: I.contentContainer,
                    children: (0, r.jsxs)(c.MyZ, {
                        activeSlide: M,
                        width: 480,
                        children: [
                            (0, r.jsx)(c.Mi4, {
                                id: T.A.INFO,
                                children: (0, r.jsx)(N.Z, { user: X })
                            }),
                            (0, r.jsx)(c.Mi4, {
                                id: T.A.EDIT_SCREEN,
                                children: (0, r.jsx)(x.Z, {
                                    user: X,
                                    error: U,
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
                            (0, r.jsx)(c.Mi4, {
                                id: T.A.FINISH_LATER,
                                children: (0, r.jsx)(j.Z, {
                                    onClose: A,
                                    handleStartFlow: ec
                                })
                            }),
                            (0, r.jsx)(c.Mi4, {
                                id: T.A.SUGGESTIONS,
                                children: (0, r.jsx)(x.Z, {
                                    user: X,
                                    error: U,
                                    editState: G,
                                    userRef: B,
                                    formValues: J,
                                    footerNotice: t,
                                    onChangeFormValue: ee,
                                    onFocusUsername: () => W(v.Wq.SUGGESTION),
                                    onFocusDisplayName: () => W(v.Wq.EDIT_DISPLAY_NAME),
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
let w = (e, t, n, i, s) =>
    0 === e.length
        ? null
        : (0, r.jsxs)(c.mzw, {
              className: I.footer,
              children: [
                  (0, r.jsxs)('div', {
                      className: I.inline,
                      children: [
                          e.includes('REMIND_ME_LATER') &&
                              (0, r.jsx)(c.zxk, {
                                  className: I.unfilledButton,
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  look: c.zxk.Looks.BLANK,
                                  color: c.zxk.Colors.CUSTOM,
                                  onClick: t.handleRemindMeLater,
                                  children: _.intl.string(_.t['1mGbXF'])
                              }),
                          e.includes('NEXT') &&
                              (0, r.jsx)(c.zxk, {
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  submitting: n,
                                  onClick: t.handleNext,
                                  children: _.intl.string(_.t.PDTjLC)
                              }),
                          e.includes('SUBMIT') &&
                              (0, r.jsx)(c.zxk, {
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  submitting: n,
                                  onClick: t.handleNext,
                                  children: _.intl.string(_.t.geKm7u)
                              }),
                          e.includes('GET_STARTED') &&
                              (0, r.jsx)(c.zxk, {
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  onClick: t.handleNext,
                                  children: _.intl.string(_.t.LhlgY2)
                              }),
                          e.includes('GOT_IT') &&
                              (0, r.jsx)(c.zxk, {
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  onClick: t.onClose,
                                  children: _.intl.string(_.t['NX+WJC'])
                              }),
                          e.includes('UPDATE') &&
                              (0, r.jsx)(c.zxk, {
                                  type: 'button',
                                  size: c.zxk.Sizes.SMALL,
                                  disabled: i && !s,
                                  submitting: n,
                                  onClick: t.handleNext,
                                  children: _.intl.string(_.t.VZANAA)
                              })
                      ]
                  }),
                  e.includes('BACK') &&
                      (0, r.jsx)(c.zxk, {
                          className: I.unfilledButton,
                          type: 'button',
                          size: c.zxk.Sizes.SMALL,
                          look: c.zxk.Looks.BLANK,
                          color: c.zxk.Colors.CUSTOM,
                          onClick: t.handleBack,
                          children: _.intl.string(_.t['13/7kZ'])
                      })
              ]
          });
