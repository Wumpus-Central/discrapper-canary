r.d(t, { default: () => A }), r(388685);
var n = r(951288),
    i = r(647438),
    o = r(512722),
    a = r.n(o),
    s = r(990547),
    l = r(399606),
    c = r(755721),
    u = r(481060),
    d = r(232567),
    m = r(809206),
    g = r(479531),
    f = r(484459),
    E = r(594174),
    p = r(626135),
    y = r(51144),
    O = r(986197),
    h = r(135200),
    b = r(346585),
    S = r(361117),
    _ = r(108793),
    v = r(635774),
    j = r(387955),
    N = r(801461),
    x = r(448624),
    T = r(981631),
    I = r(388032),
    P = r(770718);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function A(e) {
    let t,
        { source: r, transitionState: o, onClose: A, oneClickFlow: w = !1 } = e,
        [M, L] = i.useState(w ? x.A.SUGGESTIONS : x.A.INFO),
        [k, D] = i.useState(!1),
        [Z, U] = i.useState(null),
        [G, W] = i.useState(w ? N.Wq.SUGGESTION : N.Wq.NONE),
        [q, F] = i.useState(!1),
        [z, B] = i.useState(!1),
        H = i.useRef(null),
        V = (0, l.e7)([h.Z], () => h.Z.isCurrentUsernameInvalid()),
        K = (0, l.e7)([E.default], () => {
            let e = E.default.getCurrentUser();
            return a()(null != e, "PomeloModal: user cannot be undefined"), e;
        }),
        { usernameSuggestion: X, usernameSuggestionLoading: Y } = (0, S.G)(w ? N.en : void 0);
    i.useEffect(() => {
        G === N.Wq.EDIT_USERNAME && B(!0),
            p.default.track(T.rMx.POMELO_EDIT_STEP_VIEWED, {
                source: r,
                step: G,
            });
    }, [G, r]),
        i.useEffect(() => {
            z ||
                q ||
                null == X ||
                !(X.length > 0) ||
                $((e) => {
                    var t, r;
                    return (
                        (t = C({}, e)),
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
        }, [X, z, q]);
    let [Q, $] = i.useState({
            username: (0, b.e$)(K),
            globalName: y.ZP.getName(K),
        }),
        J = (e) => {
            U(null), null != e.username && F(!0), $((t) => C({}, t, e));
        },
        ee = i.useMemo(
            () => [
                {
                    slideId: x.A.INFO,
                    next: x.A.EDIT_SCREEN,
                    footerButtons: ["REMIND_ME_LATER", "GET_STARTED"],
                },
                {
                    slideId: x.A.EDIT_SCREEN,
                    next: x.A.FINISH_LATER,
                    back: x.A.INFO,
                    footerButtons: [
                        G === N.Wq.PREVIEW ? "GOT_IT" : "BACK",
                        G === N.Wq.PREVIEW ? "GOT_IT" : G === N.Wq.EDIT_USERNAME ? "SUBMIT" : "NEXT",
                    ],
                },
                {
                    slideId: x.A.FINISH_LATER,
                    back: x.A.EDIT_SCREEN,
                },
                {
                    slideId: x.A.SUGGESTIONS,
                    footerButtons: [G === N.Wq.PREVIEW ? "GOT_IT" : "UPDATE"],
                },
                { slideId: x.A.FINISH_LATER },
            ],
            [G],
        ),
        et = ee.length,
        er = i.useCallback(async () => {
            if (Q.globalName.length <= 0) {
                let e = I.intl.formatToPlainString(I.t.IpijXF, {
                    minNum: 1,
                    maxNum: 32,
                });
                U(e),
                    p.default.track(T.rMx.POMELO_ERRORS, {
                        reason: e,
                        display_name_error: !0,
                        location: "modal",
                    });
                return;
            }
            if (y.ZP.getGlobalName(K) === Q.globalName) return void W(N.Wq.EDIT_USERNAME);
            try {
                U(null), D(!0), await (0, m.S2)({ global_name: Q.globalName }), W(N.Wq.EDIT_USERNAME);
            } catch (t) {
                let e = new g.Z(t).getAnyErrorMessage();
                p.default.track(T.rMx.POMELO_ERRORS, {
                    reason: e,
                    display_name_error: !0,
                    location: "modal",
                }),
                    U(e);
            } finally {
                D(!1);
            }
        }, [K, Q]),
        en = i.useCallback(async () => {
            try {
                U(null),
                    D(!0),
                    await O.Z.createPomelo({ username: (0, b.R_)(Q.username) }, w),
                    await (0, d.In)(K.id),
                    W(N.Wq.PREVIEW);
            } catch (r) {
                let e = new g.Z(r),
                    t =
                        (null == e ? void 0 : e.status) != null && e.status >= 400 && e.status < 500
                            ? e.getAnyErrorMessage()
                            : I.intl.string(I.t.R0RpRU);
                U(t),
                    p.default.track(T.rMx.POMELO_ERRORS, {
                        reason: t,
                        username_error: !0,
                        location: "modal",
                        one_click_flow: w,
                    });
            } finally {
                D(!1);
            }
        }, [Q, K.id, w]),
        ei = V || (0, b.NX)(K),
        eo = i.useCallback(() => {
            W(ei ? N.Wq.EDIT_USERNAME : N.Wq.EDIT_DISPLAY_NAME), L(ee[Math.min(et - 1, M + 1)].slideId);
        }, [M, ee, et, ei]),
        ea = i.useCallback(() => {
            U(null),
                M === x.A.EDIT_SCREEN
                    ? G === N.Wq.EDIT_USERNAME
                        ? ei
                            ? (W(N.Wq.NONE), L(ee[Math.max(0, M - 1)].slideId))
                            : W(N.Wq.EDIT_DISPLAY_NAME)
                        : G === N.Wq.EDIT_DISPLAY_NAME
                          ? (W(N.Wq.NONE), L(ee[Math.max(0, M - 1)].slideId))
                          : G === N.Wq.PREVIEW && W(N.Wq.EDIT_USERNAME)
                    : L(ee[Math.max(0, M - 1)].slideId);
        }, [ee, M, G, ei]),
        es = i.useCallback(() => {
            L(x.A.FINISH_LATER);
        }, []),
        el = i.useMemo(
            () =>
                M === x.A.EDIT_SCREEN && G === N.Wq.EDIT_DISPLAY_NAME
                    ? er
                    : M === x.A.EDIT_SCREEN && G === N.Wq.EDIT_USERNAME
                      ? en
                      : M === x.A.SUGGESTIONS && G === N.Wq.SUGGESTION
                        ? en
                        : eo,
            [M, G, er, en, eo],
        ),
        ec = i.useMemo(() => {
            var e, t;
            return R(
                null != (t = null == (e = ee.find((e) => e.slideId === M)) ? void 0 : e.footerButtons) ? t : [],
                {
                    handleNext: el,
                    handleBack: ea,
                    handleRemindMeLater: es,
                    onClose: A,
                },
                k,
                Y,
                q,
            );
        }, [ea, es, el, A, ee, M, k, Y, q]),
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
        !q &&
            null == Z &&
            (G === N.Wq.EDIT_USERNAME
                ? (t = I.intl.formatToPlainString(I.t.AJh8BQ, { source: K.username }))
                : G === N.Wq.SUGGESTION && (Y || null != X) && (t = I.intl.string(I.t["i/2SgI"]))),
        (0, n.jsxs)(u.Y0X, {
            className: P.modalRoot,
            impression: {
                impressionName: s.ImpressionNames.POMELO_LANDING,
                impressionProperties: {
                    source: r,
                    impression_group: s.ImpressionGroups.POMELO_FLOW,
                    one_click_flow: w,
                },
            },
            transitionState: o,
            size: u.CgR.DYNAMIC,
            parentComponent: "PomeloModal",
            children: [
                (0, n.jsx)(c.zx, {
                    onClick: () => {
                        M === x.A.SUGGESTIONS || M === x.A.EDIT_SCREEN ? L(x.A.FINISH_LATER) : A();
                    },
                    size: c.zx.Sizes.MIN,
                    look: c.zx.Looks.BLANK,
                    className: P.closeContainer,
                    "aria-label": I.intl.string(I.t.cpT0Cg),
                    children: (0, n.jsx)(u.Dio, {
                        size: "custom",
                        color: "currentColor",
                        width: 15,
                        height: 15,
                        className: P.close,
                    }),
                }),
                (0, n.jsx)(u.hzk, {
                    className: P.contentContainer,
                    children: (0, n.jsxs)(u.MyZ, {
                        activeSlide: M,
                        width: 480,
                        children: [
                            (0, n.jsx)(u.Mi4, {
                                id: x.A.INFO,
                                children: (0, n.jsx)(j.Z, { user: K }),
                            }),
                            (0, n.jsx)(u.Mi4, {
                                id: x.A.EDIT_SCREEN,
                                children: (0, n.jsx)(_.Z, {
                                    user: K,
                                    error: Z,
                                    editState: G,
                                    userRef: H,
                                    formValues: Q,
                                    footerNotice: t,
                                    onChangeFormValue: J,
                                    onFocusUsername: () => W(N.Wq.EDIT_USERNAME),
                                    onFocusDisplayName: () => W(N.Wq.EDIT_DISPLAY_NAME),
                                    onClose: A,
                                }),
                            }),
                            (0, n.jsx)(u.Mi4, {
                                id: x.A.FINISH_LATER,
                                children: (0, n.jsx)(v.Z, { onClose: A }),
                            }),
                            (0, n.jsx)(u.Mi4, {
                                id: x.A.SUGGESTIONS,
                                children: (0, n.jsx)(_.Z, {
                                    user: K,
                                    error: Z,
                                    editState: G,
                                    userRef: H,
                                    formValues: Q,
                                    footerNotice: t,
                                    onChangeFormValue: J,
                                    onFocusUsername: () => W(N.Wq.SUGGESTION),
                                    onFocusDisplayName: () => W(N.Wq.EDIT_DISPLAY_NAME),
                                    onClose: A,
                                    usernameSuggestionLoading: Y,
                                    oneClickFlow: w,
                                }),
                            }),
                        ],
                    }),
                }),
                ec,
            ],
        })
    );
}
let R = (e, t, r, i, o) =>
    0 === e.length
        ? null
        : (0, n.jsxs)(u.mzw, {
              className: P.footer,
              children: [
                  (0, n.jsxs)("div", {
                      className: P.inline,
                      children: [
                          e.includes("REMIND_ME_LATER") &&
                              (0, n.jsx)(c.zx, {
                                  className: P.unfilledButton,
                                  type: "button",
                                  size: c.zx.Sizes.SMALL,
                                  look: c.zx.Looks.BLANK,
                                  color: c.zx.Colors.CUSTOM,
                                  onClick: t.handleRemindMeLater,
                                  children: I.intl.string(I.t["1mGbXF"]),
                              }),
                          e.includes("NEXT") &&
                              (0, n.jsx)(u.zxk, {
                                  variant: "primary",
                                  size: "sm",
                                  text: I.intl.string(I.t.PDTjLC),
                                  type: "button",
                                  loading: r,
                                  onClick: t.handleNext,
                              }),
                          e.includes("SUBMIT") &&
                              (0, n.jsx)(u.zxk, {
                                  variant: "primary",
                                  size: "sm",
                                  text: I.intl.string(I.t.geKm7u),
                                  type: "button",
                                  loading: r,
                                  onClick: t.handleNext,
                              }),
                          e.includes("GET_STARTED") &&
                              (0, n.jsx)(u.zxk, {
                                  variant: "primary",
                                  size: "sm",
                                  text: I.intl.string(I.t.LhlgY2),
                                  type: "button",
                                  onClick: t.handleNext,
                              }),
                          e.includes("GOT_IT") &&
                              (0, n.jsx)(u.zxk, {
                                  variant: "primary",
                                  size: "sm",
                                  text: I.intl.string(I.t["NX+WJC"]),
                                  type: "button",
                                  onClick: t.onClose,
                              }),
                          e.includes("UPDATE") &&
                              (0, n.jsx)(u.zxk, {
                                  variant: "primary",
                                  size: "sm",
                                  text: I.intl.string(I.t.VZANAA),
                                  type: "button",
                                  disabled: i && !o,
                                  loading: r,
                                  onClick: t.handleNext,
                              }),
                      ],
                  }),
                  e.includes("BACK") &&
                      (0, n.jsx)(c.zx, {
                          className: P.unfilledButton,
                          type: "button",
                          size: c.zx.Sizes.SMALL,
                          look: c.zx.Looks.BLANK,
                          color: c.zx.Colors.CUSTOM,
                          onClick: t.handleBack,
                          children: I.intl.string(I.t["13/7kZ"]),
                      }),
              ],
          });
