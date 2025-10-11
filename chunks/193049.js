n.d(t, { default: () => A }), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(512722),
    a = n.n(o),
    s = n(990547),
    l = n(399606),
    c = n(755721),
    u = n(481060),
    d = n(232567),
    m = n(809206),
    g = n(479531),
    f = n(484459),
    E = n(594174),
    p = n(626135),
    y = n(51144),
    O = n(986197),
    h = n(135200),
    b = n(346585),
    S = n(361117),
    _ = n(108793),
    v = n(635774),
    j = n(387955),
    N = n(801461),
    x = n(448624),
    T = n(981631),
    I = n(388032),
    P = n(770718);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function A(e) {
    let t,
        { source: n, transitionState: o, onClose: A, oneClickFlow: w = !1 } = e,
        [M, L] = i.useState(w ? x.A.SUGGESTIONS : x.A.INFO),
        [D, k] = i.useState(!1),
        [Z, U] = i.useState(null),
        [G, W] = i.useState(w ? N.Wq.SUGGESTION : N.Wq.NONE),
        [F, q] = i.useState(!1),
        [B, z] = i.useState(!1),
        H = i.useRef(null),
        V = (0, l.e7)([h.Z], () => h.Z.isCurrentUsernameInvalid()),
        K = (0, l.e7)([E.default], () => {
            let e = E.default.getCurrentUser();
            return a()(null != e, "PomeloModal: user cannot be undefined"), e;
        }),
        { usernameSuggestion: Y, usernameSuggestionLoading: X } = (0, S.G)(w ? N.en : void 0);
    i.useEffect(() => {
        G === N.Wq.EDIT_USERNAME && z(!0),
            p.default.track(T.rMx.POMELO_EDIT_STEP_VIEWED, {
                source: n,
                step: G,
            });
    }, [G, n]),
        i.useEffect(() => {
            B ||
                F ||
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
        }, [Y, B, F]);
    let [Q, $] = i.useState({
            username: (0, b.e$)(K),
            globalName: y.ZP.getName(K),
        }),
        J = (e) => {
            U(null), null != e.username && q(!0), $((t) => C({}, t, e));
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
        en = i.useCallback(async () => {
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
                U(null), k(!0), await (0, m.S2)({ global_name: Q.globalName }), W(N.Wq.EDIT_USERNAME);
            } catch (t) {
                let e = new g.Z(t).getAnyErrorMessage();
                p.default.track(T.rMx.POMELO_ERRORS, {
                    reason: e,
                    display_name_error: !0,
                    location: "modal",
                }),
                    U(e);
            } finally {
                k(!1);
            }
        }, [K, Q]),
        er = i.useCallback(async () => {
            try {
                U(null),
                    k(!0),
                    await O.Z.createPomelo({ username: (0, b.R_)(Q.username) }, w),
                    await (0, d.In)(K.id),
                    W(N.Wq.PREVIEW);
            } catch (n) {
                let e = new g.Z(n),
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
                k(!1);
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
                    ? en
                    : M === x.A.EDIT_SCREEN && G === N.Wq.EDIT_USERNAME
                      ? er
                      : M === x.A.SUGGESTIONS && G === N.Wq.SUGGESTION
                        ? er
                        : eo,
            [M, G, en, er, eo],
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
                D,
                X,
                F,
            );
        }, [ea, es, el, A, ee, M, D, X, F]),
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
        !F &&
            null == Z &&
            (G === N.Wq.EDIT_USERNAME
                ? (t = I.intl.formatToPlainString(I.t.AJh8BQ, { source: K.username }))
                : G === N.Wq.SUGGESTION && (X || null != Y) && (t = I.intl.string(I.t["i/2SgI"]))),
        (0, r.jsxs)(u.Y0X, {
            className: P.modalRoot,
            impression: {
                impressionName: s.ImpressionNames.POMELO_LANDING,
                impressionProperties: {
                    source: n,
                    impression_group: s.ImpressionGroups.POMELO_FLOW,
                    one_click_flow: w,
                },
            },
            transitionState: o,
            size: u.CgR.DYNAMIC,
            parentComponent: "PomeloModal",
            children: [
                (0, r.jsx)(c.zx, {
                    onClick: () => {
                        M === x.A.SUGGESTIONS || M === x.A.EDIT_SCREEN ? L(x.A.FINISH_LATER) : A();
                    },
                    size: c.zx.Sizes.MIN,
                    look: c.zx.Looks.BLANK,
                    className: P.closeContainer,
                    "aria-label": I.intl.string(I.t.cpT0Cg),
                    children: (0, r.jsx)(u.Dio, {
                        size: "custom",
                        color: "currentColor",
                        width: 15,
                        height: 15,
                        className: P.close,
                    }),
                }),
                (0, r.jsx)(u.hzk, {
                    className: P.contentContainer,
                    children: (0, r.jsxs)(u.MyZ, {
                        activeSlide: M,
                        width: 480,
                        children: [
                            (0, r.jsx)(u.Mi4, {
                                id: x.A.INFO,
                                children: (0, r.jsx)(j.Z, { user: K }),
                            }),
                            (0, r.jsx)(u.Mi4, {
                                id: x.A.EDIT_SCREEN,
                                children: (0, r.jsx)(_.Z, {
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
                            (0, r.jsx)(u.Mi4, {
                                id: x.A.FINISH_LATER,
                                children: (0, r.jsx)(v.Z, { onClose: A }),
                            }),
                            (0, r.jsx)(u.Mi4, {
                                id: x.A.SUGGESTIONS,
                                children: (0, r.jsx)(_.Z, {
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
                                    usernameSuggestionLoading: X,
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
let R = (e, t, n, i, o) =>
    0 === e.length
        ? null
        : (0, r.jsxs)(u.mzw, {
              className: P.footer,
              children: [
                  (0, r.jsxs)("div", {
                      className: P.inline,
                      children: [
                          e.includes("REMIND_ME_LATER") &&
                              (0, r.jsx)(c.zx, {
                                  className: P.unfilledButton,
                                  type: "button",
                                  size: c.zx.Sizes.SMALL,
                                  look: c.zx.Looks.BLANK,
                                  color: c.zx.Colors.CUSTOM,
                                  onClick: t.handleRemindMeLater,
                                  children: I.intl.string(I.t["1mGbXF"]),
                              }),
                          e.includes("NEXT") &&
                              (0, r.jsx)(u.Button, {
                                  variant: "primary",
                                  size: "sm",
                                  text: I.intl.string(I.t.PDTjLC),
                                  type: "button",
                                  loading: n,
                                  onClick: t.handleNext,
                              }),
                          e.includes("SUBMIT") &&
                              (0, r.jsx)(u.Button, {
                                  variant: "primary",
                                  size: "sm",
                                  text: I.intl.string(I.t.geKm7u),
                                  type: "button",
                                  loading: n,
                                  onClick: t.handleNext,
                              }),
                          e.includes("GET_STARTED") &&
                              (0, r.jsx)(u.Button, {
                                  variant: "primary",
                                  size: "sm",
                                  text: I.intl.string(I.t.LhlgY2),
                                  type: "button",
                                  onClick: t.handleNext,
                              }),
                          e.includes("GOT_IT") &&
                              (0, r.jsx)(u.Button, {
                                  variant: "primary",
                                  size: "sm",
                                  text: I.intl.string(I.t["NX+WJC"]),
                                  type: "button",
                                  onClick: t.onClose,
                              }),
                          e.includes("UPDATE") &&
                              (0, r.jsx)(u.Button, {
                                  variant: "primary",
                                  size: "sm",
                                  text: I.intl.string(I.t.VZANAA),
                                  type: "button",
                                  disabled: i && !o,
                                  loading: n,
                                  onClick: t.handleNext,
                              }),
                      ],
                  }),
                  e.includes("BACK") &&
                      (0, r.jsx)(c.zx, {
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
