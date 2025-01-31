n.d(t, { default: () => L }), n(47120);
var i = n(200651),
    s = n(192379),
    a = n(512722),
    l = n.n(a),
    r = n(990547),
    o = n(399606),
    u = n(481060),
    d = n(232567),
    c = n(809206),
    m = n(479531),
    g = n(484459),
    E = n(594174),
    h = n(626135),
    S = n(51144),
    f = n(986197),
    x = n(135200),
    N = n(346585),
    T = n(347649),
    _ = n(361117),
    I = n(108793),
    C = n(635774),
    v = n(387955),
    p = n(801461),
    A = n(448624),
    y = n(981631),
    M = n(388032),
    O = n(617083);
function L(e) {
    let t,
        { source: n, transitionState: a, onClose: L, oneClickFlow: k = !1 } = e,
        [P, b] = s.useState(k ? A.A.SUGGESTIONS : A.A.INFO),
        [j, U] = s.useState(!1),
        [Z, G] = s.useState(null),
        [D, W] = s.useState(k ? p.Wq.SUGGESTION : p.Wq.NONE),
        [w, q] = s.useState(!1),
        [z, F] = s.useState(!1),
        H = s.useRef(null),
        B = (0, o.e7)([x.Z], () => x.Z.isCurrentUsernameInvalid()),
        V = (0, o.e7)([E.default], () => {
            let e = E.default.getCurrentUser();
            return l()(null != e, 'PomeloModal: user cannot be undefined'), e;
        }),
        X = (0, T.CC)(),
        { usernameSuggestion: K, usernameSuggestionLoading: Y } = (0, _.G)(k ? p.en : void 0);
    s.useEffect(() => {
        D === p.Wq.EDIT_USERNAME && F(!0),
            h.default.track(y.rMx.POMELO_EDIT_STEP_VIEWED, {
                source: n,
                step: D
            });
    }, [D, n]),
        s.useEffect(() => {
            z ||
                w ||
                null == K ||
                !(K.length > 0) ||
                J((e) => ({
                    ...e,
                    username: K
                }));
        }, [K, z, w]);
    let [Q, J] = s.useState({
            username: (0, N.e$)(V),
            globalName: S.ZP.getName(V)
        }),
        $ = (e) => {
            G(null),
                null != e.username && q(!0),
                J((t) => ({
                    ...t,
                    ...e
                }));
        },
        ee = s.useMemo(
            () => [
                {
                    slideId: A.A.INFO,
                    next: A.A.EDIT_SCREEN,
                    footerButtons: ['REMIND_ME_LATER', 'GET_STARTED']
                },
                {
                    slideId: A.A.EDIT_SCREEN,
                    next: A.A.FINISH_LATER,
                    back: A.A.INFO,
                    footerButtons: [D === p.Wq.PREVIEW ? 'GOT_IT' : 'BACK', D === p.Wq.PREVIEW ? 'GOT_IT' : D === p.Wq.EDIT_USERNAME ? 'SUBMIT' : 'NEXT']
                },
                {
                    slideId: A.A.FINISH_LATER,
                    back: A.A.EDIT_SCREEN
                },
                {
                    slideId: A.A.SUGGESTIONS,
                    footerButtons: [D === p.Wq.PREVIEW ? 'GOT_IT' : 'UPDATE']
                },
                { slideId: A.A.FINISH_LATER }
            ],
            [D]
        ),
        et = ee.length,
        en = s.useCallback(async () => {
            if (Q.globalName.length <= 0) {
                let e = M.intl.formatToPlainString(M.t.IpijXF, {
                    minNum: 1,
                    maxNum: 32
                });
                G(e),
                    h.default.track(y.rMx.POMELO_ERRORS, {
                        reason: e,
                        display_name_error: !0,
                        location: 'modal'
                    });
                return;
            }
            if (S.ZP.getGlobalName(V) === Q.globalName) {
                W(p.Wq.EDIT_USERNAME);
                return;
            }
            try {
                G(null), U(!0), await (0, c.S2)({ global_name: Q.globalName }), W(p.Wq.EDIT_USERNAME);
            } catch (t) {
                let e = new m.Z(t).getAnyErrorMessage();
                h.default.track(y.rMx.POMELO_ERRORS, {
                    reason: e,
                    display_name_error: !0,
                    location: 'modal'
                }),
                    G(e);
            } finally {
                U(!1);
            }
        }, [V, Q]),
        ei = s.useCallback(async () => {
            try {
                G(null), U(!0), await f.Z.createPomelo({ username: (0, N.R_)(Q.username) }, k), await (0, d.In)(V.id), W(p.Wq.PREVIEW);
            } catch (n) {
                let e = new m.Z(n),
                    t = (null == e ? void 0 : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : M.intl.string(M.t.R0RpRU);
                G(t),
                    h.default.track(y.rMx.POMELO_ERRORS, {
                        reason: t,
                        username_error: !0,
                        location: 'modal',
                        one_click_flow: k
                    });
            } finally {
                U(!1);
            }
        }, [Q, V.id, k]),
        es = B || (0, N.NX)(V),
        ea = s.useCallback(() => {
            W(es ? p.Wq.EDIT_USERNAME : p.Wq.EDIT_DISPLAY_NAME), b(ee[Math.min(et - 1, P + 1)].slideId);
        }, [P, ee, et, es]),
        el = s.useCallback(() => {
            G(null), P === A.A.EDIT_SCREEN ? (D === p.Wq.EDIT_USERNAME ? (es ? (W(p.Wq.NONE), b(ee[Math.max(0, P - 1)].slideId)) : W(p.Wq.EDIT_DISPLAY_NAME)) : D === p.Wq.EDIT_DISPLAY_NAME ? (W(p.Wq.NONE), b(ee[Math.max(0, P - 1)].slideId)) : D === p.Wq.PREVIEW && W(p.Wq.EDIT_USERNAME)) : b(ee[Math.max(0, P - 1)].slideId);
        }, [ee, P, D, es]),
        er = s.useCallback(() => {
            b(A.A.FINISH_LATER);
        }, []),
        eo = s.useCallback(() => {
            k ? (b(A.A.SUGGESTIONS), W(p.Wq.SUGGESTION)) : (b(A.A.INFO), W(p.Wq.NONE));
        }, [k]),
        eu = s.useMemo(() => (P === A.A.EDIT_SCREEN && D === p.Wq.EDIT_DISPLAY_NAME ? en : P === A.A.EDIT_SCREEN && D === p.Wq.EDIT_USERNAME ? ei : P === A.A.SUGGESTIONS && D === p.Wq.SUGGESTION ? ei : ea), [P, D, en, ei, ea]),
        ed = s.useMemo(() => {
            var e, t;
            return R(
                null !== (t = null === (e = ee.find((e) => e.slideId === P)) || void 0 === e ? void 0 : e.footerButtons) && void 0 !== t ? t : [],
                {
                    handleNext: eu,
                    handleBack: el,
                    handleRemindMeLater: er,
                    onClose: L
                },
                j,
                Y,
                w
            );
        }, [el, er, eu, L, ee, P, j, Y, w]),
        ec = s.useMemo(() => (0, N.zV)(V), [V]);
    return (
        s.useLayoutEffect(() => {
            (0, g.Z)(V.id, ec);
        }, [V, ec]),
        s.useEffect(() => {
            var e, t;
            switch (D) {
                case p.Wq.EDIT_DISPLAY_NAME:
                    null === (e = H.current) || void 0 === e || e.focusDisplayName();
                    break;
                case p.Wq.EDIT_USERNAME:
                case p.Wq.SUGGESTION:
                    null === (t = H.current) || void 0 === t || t.focusUsername();
            }
        }, [D]),
        !w && null == Z && (D === p.Wq.EDIT_USERNAME ? (t = M.intl.formatToPlainString(M.t.AJh8BQ, { source: V.username })) : D === p.Wq.SUGGESTION && (Y || null != K) && (t = M.intl.string(M.t['i/2SgI']))),
        (0, i.jsxs)(u.Y0X, {
            className: O.modalRoot,
            impression: {
                impressionName: r.ImpressionNames.POMELO_LANDING,
                impressionProperties: {
                    source: n,
                    impression_group: r.ImpressionGroups.POMELO_FLOW,
                    one_click_flow: k
                }
            },
            transitionState: a,
            size: u.CgR.DYNAMIC,
            children: [
                (0, i.jsx)(u.zxk, {
                    onClick: () => {
                        X && (P === A.A.SUGGESTIONS || P === A.A.EDIT_SCREEN) ? b(A.A.FINISH_LATER) : L();
                    },
                    size: u.zxk.Sizes.MIN,
                    look: u.zxk.Looks.BLANK,
                    className: O.closeContainer,
                    'aria-label': M.intl.string(M.t.cpT0Cg),
                    children: (0, i.jsx)(u.Dio, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 15,
                        height: 15,
                        className: O.close
                    })
                }),
                (0, i.jsx)(u.hzk, {
                    className: O.contentContainer,
                    children: (0, i.jsxs)(u.MyZ, {
                        activeSlide: P,
                        width: 480,
                        children: [
                            (0, i.jsx)(u.Mi4, {
                                id: A.A.INFO,
                                children: (0, i.jsx)(v.Z, { user: V })
                            }),
                            (0, i.jsx)(u.Mi4, {
                                id: A.A.EDIT_SCREEN,
                                children: (0, i.jsx)(I.Z, {
                                    user: V,
                                    error: Z,
                                    editState: D,
                                    userRef: H,
                                    formValues: Q,
                                    footerNotice: t,
                                    onChangeFormValue: $,
                                    onFocusUsername: () => W(p.Wq.EDIT_USERNAME),
                                    onFocusDisplayName: () => W(p.Wq.EDIT_DISPLAY_NAME),
                                    onClose: L
                                })
                            }),
                            (0, i.jsx)(u.Mi4, {
                                id: A.A.FINISH_LATER,
                                children: (0, i.jsx)(C.Z, {
                                    onClose: L,
                                    handleStartFlow: eo
                                })
                            }),
                            (0, i.jsx)(u.Mi4, {
                                id: A.A.SUGGESTIONS,
                                children: (0, i.jsx)(I.Z, {
                                    user: V,
                                    error: Z,
                                    editState: D,
                                    userRef: H,
                                    formValues: Q,
                                    footerNotice: t,
                                    onChangeFormValue: $,
                                    onFocusUsername: () => W(p.Wq.SUGGESTION),
                                    onFocusDisplayName: () => W(p.Wq.EDIT_DISPLAY_NAME),
                                    onClose: L,
                                    usernameSuggestionLoading: Y,
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
let R = (e, t, n, s, a) =>
    0 === e.length
        ? null
        : (0, i.jsxs)(u.mzw, {
              className: O.footer,
              children: [
                  (0, i.jsxs)('div', {
                      className: O.inline,
                      children: [
                          e.includes('REMIND_ME_LATER') &&
                              (0, i.jsx)(u.zxk, {
                                  className: O.unfilledButton,
                                  type: 'button',
                                  size: u.zxk.Sizes.SMALL,
                                  look: u.zxk.Looks.BLANK,
                                  color: u.zxk.Colors.CUSTOM,
                                  onClick: t.handleRemindMeLater,
                                  children: M.intl.string(M.t['1mGbXF'])
                              }),
                          e.includes('NEXT') &&
                              (0, i.jsx)(u.zxk, {
                                  type: 'button',
                                  size: u.zxk.Sizes.SMALL,
                                  submitting: n,
                                  onClick: t.handleNext,
                                  children: M.intl.string(M.t.PDTjLC)
                              }),
                          e.includes('SUBMIT') &&
                              (0, i.jsx)(u.zxk, {
                                  type: 'button',
                                  size: u.zxk.Sizes.SMALL,
                                  submitting: n,
                                  onClick: t.handleNext,
                                  children: M.intl.string(M.t.geKm7u)
                              }),
                          e.includes('GET_STARTED') &&
                              (0, i.jsx)(u.zxk, {
                                  type: 'button',
                                  size: u.zxk.Sizes.SMALL,
                                  onClick: t.handleNext,
                                  children: M.intl.string(M.t.LhlgY2)
                              }),
                          e.includes('GOT_IT') &&
                              (0, i.jsx)(u.zxk, {
                                  type: 'button',
                                  size: u.zxk.Sizes.SMALL,
                                  onClick: t.onClose,
                                  children: M.intl.string(M.t['NX+WJC'])
                              }),
                          e.includes('UPDATE') &&
                              (0, i.jsx)(u.zxk, {
                                  type: 'button',
                                  size: u.zxk.Sizes.SMALL,
                                  disabled: s && !a,
                                  submitting: n,
                                  onClick: t.handleNext,
                                  children: M.intl.string(M.t.VZANAA)
                              })
                      ]
                  }),
                  e.includes('BACK') &&
                      (0, i.jsx)(u.zxk, {
                          className: O.unfilledButton,
                          type: 'button',
                          size: u.zxk.Sizes.SMALL,
                          look: u.zxk.Looks.BLANK,
                          color: u.zxk.Colors.CUSTOM,
                          onClick: t.handleBack,
                          children: M.intl.string(M.t['13/7kZ'])
                      })
              ]
          });
