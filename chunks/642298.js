(n.d(t, { default: () => S }), n(388685));
var s = n(255367),
    a = n(73800),
    r = n(990547),
    i = n(442837),
    l = n(481060),
    o = n(809206),
    c = n(594174),
    d = n(626135),
    x = n(706734),
    m = n(264119),
    u = n(75788),
    _ = n(22150),
    E = n(361833),
    N = n(134562),
    h = n(526761),
    A = n(981631),
    p = n(308569),
    C = n(652297),
    j = n(800010),
    f = n(75277);
function S(e) {
    var t, n, S;
    let { transitionState: g, onClose: v } = e,
        O = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        M = a.useRef(null != (t = null == O ? void 0 : O.verified) && t);
    a.useEffect(() => (d.default.track(A.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, o.Zy)()), []);
    let T = null == O ? void 0 : O.verified,
        I = T ? h.Ax.CONFIRM_START : h.Ax.EMAIL_AND_PASSWORD,
        [y, R] = a.useState(I),
        [b, k] = a.useState(null),
        [w, L] = a.useState(null),
        [U, D] = a.useState(null),
        [G, H] = a.useState(''),
        [P, z] = a.useState(),
        [Z, F] = a.useState(''),
        W = y === h.Ax.CHANGE_EMAIL_WARNING ? C.wumpusExclamationImg : C.emailHeaderImg,
        B = y === h.Ax.CHANGE_EMAIL_WARNING ? f : j,
        X = { impression_group: r.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW };
    return (0, s.jsxs)(l.Y0X, {
        transitionState: g,
        disableTrack: !0,
        parentComponent: 'ChangeEmailModal',
        children: [
            (0, s.jsx)('img', {
                alt: '',
                className: W,
                src: B
            }),
            (0, s.jsxs)(l.MyZ, {
                activeSlide: y,
                width: 440,
                onSlideReady: (e) => k(e),
                children: [
                    (0, s.jsx)(l.Mi4, {
                        id: h.Ax.CONFIRM_START,
                        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
                        impressionProperties: X,
                        children: (0, s.jsx)(_.Z, {
                            onNext: () => R(h.Ax.CONFIRM_CODE),
                            onClose: v
                        })
                    }),
                    (0, s.jsx)(l.Mi4, {
                        id: h.Ax.CONFIRM_CODE,
                        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
                        impressionProperties: X,
                        children: (0, s.jsx)(u.Z, {
                            error: U,
                            setError: D,
                            setEmailToken: L,
                            isSlideReady: b === h.Ax.CONFIRM_CODE,
                            onNext: () => R(h.Ax.CHANGE_EMAIL_REASONS),
                            onClose: v
                        })
                    }),
                    (0, s.jsx)(l.Mi4, {
                        id: h.Ax.CHANGE_EMAIL_REASONS,
                        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS,
                        impressionProperties: X,
                        children: (0, s.jsx)(x.Z, {
                            onNext: () => (d.default.track(A.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, { change_email_reason_enum: P }), null != P && p.Mr.has(P) ? R(h.Ax.CHANGE_EMAIL_WARNING) : R(h.Ax.EMAIL_AND_PASSWORD)),
                            onClose: v,
                            reason: P,
                            onReasonChange: z,
                            freeTextResponse: Z,
                            setFreeTextResponse: F
                        })
                    }),
                    (0, s.jsx)(l.Mi4, {
                        id: h.Ax.CHANGE_EMAIL_WARNING,
                        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING,
                        impressionProperties: X,
                        children: (0, s.jsx)(N.Z, {
                            onNext: () => {
                                (d.default.track(A.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, { change_email_reason_enum: P }), R(h.Ax.EMAIL_AND_PASSWORD));
                            },
                            onClose: v
                        })
                    }),
                    (0, s.jsx)(l.Mi4, {
                        id: h.Ax.EMAIL_AND_PASSWORD,
                        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
                        impressionProperties:
                            ((n = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        s = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (s = s.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        s.forEach(function (t) {
                                            var s;
                                            ((s = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: s,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = s));
                                        }));
                                }
                                return e;
                            })({}, X)),
                            (S = S = { email_verified: M.current }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(S))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var s = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, s);
                                      }
                                      return n;
                                  })(Object(S)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(S, e));
                                  }),
                            n),
                        children: (0, s.jsx)(E.Z, {
                            emailToken: w,
                            isSlideReady: b === h.Ax.EMAIL_AND_PASSWORD,
                            onBack: T ? () => R(null != P && p.Mr.has(P) ? h.Ax.CHANGE_EMAIL_WARNING : h.Ax.CHANGE_EMAIL_REASONS) : null,
                            onNext: (e) => {
                                (d.default.track(A.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, {
                                    change_email_reason_enum: P,
                                    free_text_response: Z
                                }),
                                    H(e),
                                    R(h.Ax.COMPLETE));
                            },
                            onClose: v
                        })
                    }),
                    (0, s.jsx)(l.Mi4, {
                        id: h.Ax.COMPLETE,
                        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
                        impressionProperties: X,
                        children: (0, s.jsx)(m.Z, {
                            email: G,
                            onClose: v
                        })
                    })
                ]
            })
        ]
    });
}
