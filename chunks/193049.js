n.r(t),
    n.d(t, {
        default: function () {
            return L;
        }
    }),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(512722),
    a = n.n(r),
    l = n(990547),
    o = n(399606),
    u = n(481060),
    c = n(232567),
    d = n(809206),
    m = n(479531),
    g = n(484459),
    E = n(594174),
    h = n(626135),
    f = n(51144),
    S = n(986197),
    N = n(135200),
    T = n(346585),
    x = n(347649),
    _ = n(361117),
    I = n(108793),
    C = n(635774),
    v = n(387955),
    p = n(801461),
    A = n(448624),
    y = n(981631),
    O = n(388032),
    M = n(617083);
function L(e) {
    let t,
        { source: n, transitionState: r, onClose: L, oneClickFlow: b = !1 } = e,
        [P, j] = s.useState(b ? A.A.SUGGESTIONS : A.A.INFO),
        [U, k] = s.useState(!1),
        [Z, G] = s.useState(null),
        [W, D] = s.useState(b ? p.Wq.SUGGESTION : p.Wq.NONE),
        [w, q] = s.useState(!1),
        [B, F] = s.useState(!1),
        H = s.useRef(null),
        z = (0, o.e7)([N.Z], () => N.Z.isCurrentUsernameInvalid()),
        V = (0, o.e7)([E.default], () => {
            let e = E.default.getCurrentUser();
            return a()(null != e, 'PomeloModal: user cannot be undefined'), e;
        }),
        X = (0, x.CC)(),
        { usernameSuggestion: K, usernameSuggestionLoading: Y } = (0, _.G)(b ? p.en : void 0);
    s.useEffect(() => {
        W === p.Wq.EDIT_USERNAME && F(!0),
            h.default.track(y.rMx.POMELO_EDIT_STEP_VIEWED, {
                source: n,
                step: W
            });
    }, [W, n]),
        s.useEffect(() => {
            !B &&
                !w &&
                null != K &&
                K.length > 0 &&
                J((e) => ({
                    ...e,
                    username: K
                }));
        }, [K, B, w]);
    let [Q, J] = s.useState({
            username: (0, T.e$)(V),
            globalName: f.ZP.getName(V)
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
                    footerButtons: [W === p.Wq.PREVIEW ? 'GOT_IT' : 'BACK', W === p.Wq.PREVIEW ? 'GOT_IT' : W === p.Wq.EDIT_USERNAME ? 'SUBMIT' : 'NEXT']
                },
                {
                    slideId: A.A.FINISH_LATER,
                    back: A.A.EDIT_SCREEN
                },
                {
                    slideId: A.A.SUGGESTIONS,
                    footerButtons: [W === p.Wq.PREVIEW ? 'GOT_IT' : 'UPDATE']
                },
                { slideId: A.A.FINISH_LATER }
            ],
            [W]
        ),
        et = ee.length,
        en = s.useCallback(async () => {
            if (Q.globalName.length <= 0) {
                let e = O.intl.formatToPlainString(O.t.IpijXF, {
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
            if (f.ZP.getGlobalName(V) === Q.globalName) {
                D(p.Wq.EDIT_USERNAME);
                return;
            }
            try {
                G(null), k(!0), await (0, d.S2)({ global_name: Q.globalName }), D(p.Wq.EDIT_USERNAME);
            } catch (t) {
                let e = new m.Z(t).getAnyErrorMessage();
                h.default.track(y.rMx.POMELO_ERRORS, {
                    reason: e,
                    display_name_error: !0,
                    location: 'modal'
                }),
                    G(e);
            } finally {
                k(!1);
            }
        }, [V, Q]),
        ei = s.useCallback(async () => {
            try {
                G(null), k(!0), await S.Z.createPomelo({ username: (0, T.R_)(Q.username) }, b), await (0, c.In)(V.id), D(p.Wq.PREVIEW);
            } catch (n) {
                let e = new m.Z(n),
                    t = (null == e ? void 0 : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : O.intl.string(O.t.R0RpRU);
                G(t),
                    h.default.track(y.rMx.POMELO_ERRORS, {
                        reason: t,
                        username_error: !0,
                        location: 'modal',
                        one_click_flow: b
                    });
            } finally {
                k(!1);
            }
        }, [Q, V.id, b]),
        es = z || (0, T.NX)(V),
        er = s.useCallback(() => {
            D(es ? p.Wq.EDIT_USERNAME : p.Wq.EDIT_DISPLAY_NAME), j(ee[Math.min(et - 1, P + 1)].slideId);
        }, [P, ee, et, es]),
        ea = s.useCallback(() => {
            G(null), P === A.A.EDIT_SCREEN ? (W === p.Wq.EDIT_USERNAME ? (es ? (D(p.Wq.NONE), j(ee[Math.max(0, P - 1)].slideId)) : D(p.Wq.EDIT_DISPLAY_NAME)) : W === p.Wq.EDIT_DISPLAY_NAME ? (D(p.Wq.NONE), j(ee[Math.max(0, P - 1)].slideId)) : W === p.Wq.PREVIEW && D(p.Wq.EDIT_USERNAME)) : j(ee[Math.max(0, P - 1)].slideId);
        }, [ee, P, W, es]),
        el = s.useCallback(() => {
            j(A.A.FINISH_LATER);
        }, []),
        eo = s.useCallback(() => {
            b ? (j(A.A.SUGGESTIONS), D(p.Wq.SUGGESTION)) : (j(A.A.INFO), D(p.Wq.NONE));
        }, [b]),
        eu = s.useMemo(() => {
            if (P === A.A.EDIT_SCREEN && W === p.Wq.EDIT_DISPLAY_NAME) return en;
            if (P === A.A.EDIT_SCREEN && W === p.Wq.EDIT_USERNAME) return ei;
            if (P === A.A.SUGGESTIONS && W === p.Wq.SUGGESTION) return ei;
            else return er;
        }, [P, W, en, ei, er]),
        ec = s.useMemo(() => {
            var e, t;
            return R(
                null !== (t = null === (e = ee.find((e) => e.slideId === P)) || void 0 === e ? void 0 : e.footerButtons) && void 0 !== t ? t : [],
                {
                    handleNext: eu,
                    handleBack: ea,
                    handleRemindMeLater: el,
                    onClose: L
                },
                U,
                Y,
                w
            );
        }, [ea, el, eu, L, ee, P, U, Y, w]),
        ed = s.useMemo(() => (0, T.zV)(V), [V]);
    s.useLayoutEffect(() => {
        (0, g.Z)(V.id, ed);
    }, [V, ed]),
        s.useEffect(() => {
            var e, t;
            switch (W) {
                case p.Wq.EDIT_DISPLAY_NAME:
                    null === (e = H.current) || void 0 === e || e.focusDisplayName();
                    break;
                case p.Wq.EDIT_USERNAME:
                case p.Wq.SUGGESTION:
                    null === (t = H.current) || void 0 === t || t.focusUsername();
            }
        }, [W]);
    return (
        !w && null == Z && (W === p.Wq.EDIT_USERNAME ? (t = O.intl.formatToPlainString(O.t.AJh8BQ, { source: V.username })) : W === p.Wq.SUGGESTION && (Y || null != K) && (t = O.intl.string(O.t['i/2SgI']))),
        (0, i.jsxs)(u.ModalRoot, {
            className: M.modalRoot,
            impression: {
                impressionName: l.ImpressionNames.POMELO_LANDING,
                impressionProperties: {
                    source: n,
                    impression_group: l.ImpressionGroups.POMELO_FLOW,
                    one_click_flow: b
                }
            },
            transitionState: r,
            size: u.ModalSize.DYNAMIC,
            children: [
                (0, i.jsx)(u.Button, {
                    onClick: () => {
                        X && (P === A.A.SUGGESTIONS || P === A.A.EDIT_SCREEN) ? j(A.A.FINISH_LATER) : L();
                    },
                    size: u.Button.Sizes.MIN,
                    look: u.Button.Looks.BLANK,
                    className: M.closeContainer,
                    'aria-label': O.intl.string(O.t.cpT0Cg),
                    children: (0, i.jsx)(u.XSmallIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 15,
                        height: 15,
                        className: M.close
                    })
                }),
                (0, i.jsx)(u.ModalContent, {
                    className: M.contentContainer,
                    children: (0, i.jsxs)(u.Slides, {
                        activeSlide: P,
                        width: 480,
                        children: [
                            (0, i.jsx)(u.Slide, {
                                id: A.A.INFO,
                                children: (0, i.jsx)(v.Z, { user: V })
                            }),
                            (0, i.jsx)(u.Slide, {
                                id: A.A.EDIT_SCREEN,
                                children: (0, i.jsx)(I.Z, {
                                    user: V,
                                    error: Z,
                                    editState: W,
                                    userRef: H,
                                    formValues: Q,
                                    footerNotice: t,
                                    onChangeFormValue: $,
                                    onFocusUsername: () => D(p.Wq.EDIT_USERNAME),
                                    onFocusDisplayName: () => D(p.Wq.EDIT_DISPLAY_NAME),
                                    onClose: L
                                })
                            }),
                            (0, i.jsx)(u.Slide, {
                                id: A.A.FINISH_LATER,
                                children: (0, i.jsx)(C.Z, {
                                    onClose: L,
                                    handleStartFlow: eo
                                })
                            }),
                            (0, i.jsx)(u.Slide, {
                                id: A.A.SUGGESTIONS,
                                children: (0, i.jsx)(I.Z, {
                                    user: V,
                                    error: Z,
                                    editState: W,
                                    userRef: H,
                                    formValues: Q,
                                    footerNotice: t,
                                    onChangeFormValue: $,
                                    onFocusUsername: () => D(p.Wq.SUGGESTION),
                                    onFocusDisplayName: () => D(p.Wq.EDIT_DISPLAY_NAME),
                                    onClose: L,
                                    usernameSuggestionLoading: Y,
                                    oneClickFlow: b
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
let R = (e, t, n, s, r) =>
    0 === e.length
        ? null
        : (0, i.jsxs)(u.ModalFooter, {
              className: M.footer,
              children: [
                  (0, i.jsxs)('div', {
                      className: M.inline,
                      children: [
                          e.includes('REMIND_ME_LATER') &&
                              (0, i.jsx)(u.Button, {
                                  className: M.unfilledButton,
                                  type: 'button',
                                  size: u.Button.Sizes.SMALL,
                                  look: u.Button.Looks.BLANK,
                                  color: u.Button.Colors.CUSTOM,
                                  onClick: t.handleRemindMeLater,
                                  children: O.intl.string(O.t['1mGbXF'])
                              }),
                          e.includes('NEXT') &&
                              (0, i.jsx)(u.Button, {
                                  type: 'button',
                                  size: u.Button.Sizes.SMALL,
                                  submitting: n,
                                  onClick: t.handleNext,
                                  children: O.intl.string(O.t.PDTjLC)
                              }),
                          e.includes('SUBMIT') &&
                              (0, i.jsx)(u.Button, {
                                  type: 'button',
                                  size: u.Button.Sizes.SMALL,
                                  submitting: n,
                                  onClick: t.handleNext,
                                  children: O.intl.string(O.t.geKm7u)
                              }),
                          e.includes('GET_STARTED') &&
                              (0, i.jsx)(u.Button, {
                                  type: 'button',
                                  size: u.Button.Sizes.SMALL,
                                  onClick: t.handleNext,
                                  children: O.intl.string(O.t.LhlgY2)
                              }),
                          e.includes('GOT_IT') &&
                              (0, i.jsx)(u.Button, {
                                  type: 'button',
                                  size: u.Button.Sizes.SMALL,
                                  onClick: t.onClose,
                                  children: O.intl.string(O.t['NX+WJC'])
                              }),
                          e.includes('UPDATE') &&
                              (0, i.jsx)(u.Button, {
                                  type: 'button',
                                  size: u.Button.Sizes.SMALL,
                                  disabled: s && !r,
                                  submitting: n,
                                  onClick: t.handleNext,
                                  children: O.intl.string(O.t.VZANAA)
                              })
                      ]
                  }),
                  e.includes('BACK') &&
                      (0, i.jsx)(u.Button, {
                          className: M.unfilledButton,
                          type: 'button',
                          size: u.Button.Sizes.SMALL,
                          look: u.Button.Looks.BLANK,
                          color: u.Button.Colors.CUSTOM,
                          onClick: t.handleBack,
                          children: O.intl.string(O.t['13/7kZ'])
                      })
              ]
          });
