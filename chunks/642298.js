n.d(t, { default: () => g }), n(388685);
var a = n(951288),
    s = n(647438),
    r = n(990547),
    i = n(442837),
    l = n(481060),
    o = n(809206),
    c = n(594174),
    d = n(626135),
    u = n(706734),
    m = n(264119),
    x = n(75788),
    _ = n(22150),
    E = n(361833),
    N = n(134562),
    p = n(526761),
    h = n(981631),
    A = n(308569),
    C = n(780187),
    f = n(800010),
    j = n(75277);
function g(e) {
    var t, n, g;
    let { transitionState: S, onClose: v } = e,
        O = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        M = s.useRef(null != (t = null == O ? void 0 : O.verified) && t);
    s.useEffect(() => (d.default.track(h.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, o.Zy)()), []);
    let I = null == O ? void 0 : O.verified,
        T = I ? p.Ax.CONFIRM_START : p.Ax.EMAIL_AND_PASSWORD,
        [b, y] = s.useState(T),
        [R, w] = s.useState(null),
        [k, L] = s.useState(null),
        [H, U] = s.useState(null),
        [D, G] = s.useState(""),
        [B, P] = s.useState(),
        [Z, F] = s.useState(""),
        W = b === p.Ax.CHANGE_EMAIL_WARNING ? C.wumpusExclamationImg : C.emailHeaderImg,
        z = b === p.Ax.CHANGE_EMAIL_WARNING ? j : f,
        K = { impression_group: r.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW };
    return (0, a.jsxs)(l.Y0X, {
        transitionState: S,
        disableTrack: !0,
        parentComponent: "ChangeEmailModal",
        children: [
            (0, a.jsx)("img", {
                alt: "",
                className: W,
                src: z,
            }),
            (0, a.jsxs)(l.MyZ, {
                activeSlide: b,
                width: 440,
                onSlideReady: (e) => w(e),
                children: [
                    (0, a.jsx)(l.Mi4, {
                        id: p.Ax.CONFIRM_START,
                        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
                        impressionProperties: K,
                        children: (0, a.jsx)(_.Z, {
                            onNext: () => y(p.Ax.CONFIRM_CODE),
                            onClose: v,
                        }),
                    }),
                    (0, a.jsx)(l.Mi4, {
                        id: p.Ax.CONFIRM_CODE,
                        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
                        impressionProperties: K,
                        children: (0, a.jsx)(x.Z, {
                            error: H,
                            setError: U,
                            setEmailToken: L,
                            isSlideReady: R === p.Ax.CONFIRM_CODE,
                            onNext: () => y(p.Ax.CHANGE_EMAIL_REASONS),
                            onClose: v,
                        }),
                    }),
                    (0, a.jsx)(l.Mi4, {
                        id: p.Ax.CHANGE_EMAIL_REASONS,
                        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS,
                        impressionProperties: K,
                        children: (0, a.jsx)(u.Z, {
                            onNext: () => (
                                d.default.track(h.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, {
                                    change_email_reason_enum: B,
                                }),
                                null != B && A.Mr.has(B) ? y(p.Ax.CHANGE_EMAIL_WARNING) : y(p.Ax.EMAIL_AND_PASSWORD)
                            ),
                            onClose: v,
                            reason: B,
                            onReasonChange: P,
                            freeTextResponse: Z,
                            setFreeTextResponse: F,
                        }),
                    }),
                    (0, a.jsx)(l.Mi4, {
                        id: p.Ax.CHANGE_EMAIL_WARNING,
                        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING,
                        impressionProperties: K,
                        children: (0, a.jsx)(N.Z, {
                            onNext: () => {
                                d.default.track(h.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, {
                                    change_email_reason_enum: B,
                                }),
                                    y(p.Ax.EMAIL_AND_PASSWORD);
                            },
                            onClose: v,
                        }),
                    }),
                    (0, a.jsx)(l.Mi4, {
                        id: p.Ax.EMAIL_AND_PASSWORD,
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
                            })({}, K)),
                            (g = g = { email_verified: M.current }),
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
                            emailToken: k,
                            isSlideReady: R === p.Ax.EMAIL_AND_PASSWORD,
                            onBack: I
                                ? () =>
                                      y(
                                          null != B && A.Mr.has(B)
                                              ? p.Ax.CHANGE_EMAIL_WARNING
                                              : p.Ax.CHANGE_EMAIL_REASONS,
                                      )
                                : null,
                            onNext: (e) => {
                                d.default.track(h.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, {
                                    change_email_reason_enum: B,
                                    free_text_response: Z,
                                }),
                                    G(e),
                                    y(p.Ax.COMPLETE);
                            },
                            onClose: v,
                        }),
                    }),
                    (0, a.jsx)(l.Mi4, {
                        id: p.Ax.COMPLETE,
                        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
                        impressionProperties: K,
                        children: (0, a.jsx)(m.Z, {
                            email: D,
                            onClose: v,
                        }),
                    }),
                ],
            }),
        ],
    });
}
