n.d(t, { default: () => g }), n(388685);
var a = n(951288),
    s = n(647438),
    r = n(990547),
    i = n(442837),
    l = n(481060),
    o = n(809206),
    c = n(594174),
    d = n(626135),
    m = n(706734),
    x = n(264119),
    u = n(75788),
    _ = n(22150),
    E = n(361833),
    N = n(134562),
    h = n(526761),
    p = n(981631),
    A = n(308569),
    C = n(780187),
    j = n(800010),
    f = n(75277);
function g(e) {
    var t, n, g;
    let { transitionState: S, onClose: v } = e,
        O = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        I = s.useRef(null != (t = null == O ? void 0 : O.verified) && t);
    s.useEffect(() => (d.default.track(p.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, o.Zy)()), []);
    let M = null == O ? void 0 : O.verified,
        T = M ? h.Ax.CONFIRM_START : h.Ax.EMAIL_AND_PASSWORD,
        [y, R] = s.useState(T),
        [b, k] = s.useState(null),
        [w, L] = s.useState(null),
        [U, D] = s.useState(null),
        [G, H] = s.useState(""),
        [P, z] = s.useState(),
        [F, Z] = s.useState(""),
        W = y === h.Ax.CHANGE_EMAIL_WARNING ? C.wumpusExclamationImg : C.emailHeaderImg,
        B = y === h.Ax.CHANGE_EMAIL_WARNING ? f : j,
        X = { impression_group: r.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW };
    return (0, a.jsxs)(l.Y0X, {
        transitionState: S,
        disableTrack: !0,
        parentComponent: "ChangeEmailModal",
        children: [
            (0, a.jsx)("img", {
                alt: "",
                className: W,
                src: B,
            }),
            (0, a.jsxs)(l.MyZ, {
                activeSlide: y,
                width: 440,
                onSlideReady: (e) => k(e),
                children: [
                    (0, a.jsx)(l.Mi4, {
                        id: h.Ax.CONFIRM_START,
                        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
                        impressionProperties: X,
                        children: (0, a.jsx)(_.Z, {
                            onNext: () => R(h.Ax.CONFIRM_CODE),
                            onClose: v,
                        }),
                    }),
                    (0, a.jsx)(l.Mi4, {
                        id: h.Ax.CONFIRM_CODE,
                        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
                        impressionProperties: X,
                        children: (0, a.jsx)(u.Z, {
                            error: U,
                            setError: D,
                            setEmailToken: L,
                            isSlideReady: b === h.Ax.CONFIRM_CODE,
                            onNext: () => R(h.Ax.CHANGE_EMAIL_REASONS),
                            onClose: v,
                        }),
                    }),
                    (0, a.jsx)(l.Mi4, {
                        id: h.Ax.CHANGE_EMAIL_REASONS,
                        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS,
                        impressionProperties: X,
                        children: (0, a.jsx)(m.Z, {
                            onNext: () => (
                                d.default.track(p.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, {
                                    change_email_reason_enum: P,
                                }),
                                null != P && A.Mr.has(P) ? R(h.Ax.CHANGE_EMAIL_WARNING) : R(h.Ax.EMAIL_AND_PASSWORD)
                            ),
                            onClose: v,
                            reason: P,
                            onReasonChange: z,
                            freeTextResponse: F,
                            setFreeTextResponse: Z,
                        }),
                    }),
                    (0, a.jsx)(l.Mi4, {
                        id: h.Ax.CHANGE_EMAIL_WARNING,
                        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING,
                        impressionProperties: X,
                        children: (0, a.jsx)(N.Z, {
                            onNext: () => {
                                d.default.track(p.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, {
                                    change_email_reason_enum: P,
                                }),
                                    R(h.Ax.EMAIL_AND_PASSWORD);
                            },
                            onClose: v,
                        }),
                    }),
                    (0, a.jsx)(l.Mi4, {
                        id: h.Ax.EMAIL_AND_PASSWORD,
                        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
                        impressionProperties:
                            ((n = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        a = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (a = a.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        a.forEach(function (t) {
                                            var a;
                                            (a = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: a,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = a);
                                        });
                                }
                                return e;
                            })({}, X)),
                            (g = g = { email_verified: I.current }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(g))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var a = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, a);
                                      }
                                      return n;
                                  })(Object(g)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(g, e));
                                  }),
                            n),
                        children: (0, a.jsx)(E.Z, {
                            emailToken: w,
                            isSlideReady: b === h.Ax.EMAIL_AND_PASSWORD,
                            onBack: M
                                ? () =>
                                      R(
                                          null != P && A.Mr.has(P)
                                              ? h.Ax.CHANGE_EMAIL_WARNING
                                              : h.Ax.CHANGE_EMAIL_REASONS,
                                      )
                                : null,
                            onNext: (e) => {
                                d.default.track(p.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, {
                                    change_email_reason_enum: P,
                                    free_text_response: F,
                                }),
                                    H(e),
                                    R(h.Ax.COMPLETE);
                            },
                            onClose: v,
                        }),
                    }),
                    (0, a.jsx)(l.Mi4, {
                        id: h.Ax.COMPLETE,
                        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
                        impressionProperties: X,
                        children: (0, a.jsx)(x.Z, {
                            email: G,
                            onClose: v,
                        }),
                    }),
                ],
            }),
        ],
    });
}
