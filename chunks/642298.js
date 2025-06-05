n.d(t, { default: () => k }), n(388685);
var s = n(255367),
    r = n(73800),
    l = n(990547),
    i = n(442837),
    a = n(481060),
    o = n(809206),
    c = n(594174),
    x = n(626135),
    d = n(706734),
    m = n(264119),
    u = n(75788),
    E = n(22150),
    _ = n(361833),
    N = n(134562),
    A = n(526761),
    h = n(981631),
    C = n(308569),
    p = n(652297),
    j = n(800010),
    S = n(75277);
function k(e) {
    var t, n, k;
    let { transitionState: f, onClose: g } = e,
        M = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        I = r.useRef(null != (t = null == M ? void 0 : M.verified) && t);
    r.useEffect(() => (x.default.track(h.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, o.Zy)()), []);
    let O = null == M ? void 0 : M.verified,
        R = O ? A.Ax.CONFIRM_START : A.Ax.EMAIL_AND_PASSWORD,
        [T, v] = r.useState(R),
        [b, z] = r.useState(null),
        [L, y] = r.useState(null),
        [D, w] = r.useState(null),
        [U, P] = r.useState(''),
        [G, H] = r.useState(),
        [Z, F] = r.useState(''),
        B = T === A.Ax.CHANGE_EMAIL_WARNING ? p.wumpusExclamationImg : p.emailHeaderImg,
        W = T === A.Ax.CHANGE_EMAIL_WARNING ? S : j,
        K = { impression_group: l.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW };
    return (0, s.jsxs)(a.Y0X, {
        transitionState: f,
        disableTrack: !0,
        parentComponent: 'ChangeEmailModal',
        children: [
            (0, s.jsx)('img', {
                alt: '',
                className: B,
                src: W
            }),
            (0, s.jsxs)(a.MyZ, {
                activeSlide: T,
                width: 440,
                onSlideReady: (e) => z(e),
                children: [
                    (0, s.jsx)(a.Mi4, {
                        id: A.Ax.CONFIRM_START,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
                        impressionProperties: K,
                        children: (0, s.jsx)(E.Z, {
                            onNext: () => v(A.Ax.CONFIRM_CODE),
                            onClose: g
                        })
                    }),
                    (0, s.jsx)(a.Mi4, {
                        id: A.Ax.CONFIRM_CODE,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
                        impressionProperties: K,
                        children: (0, s.jsx)(u.Z, {
                            error: D,
                            setError: w,
                            setEmailToken: y,
                            isSlideReady: b === A.Ax.CONFIRM_CODE,
                            onNext: () => v(A.Ax.CHANGE_EMAIL_REASONS),
                            onClose: g
                        })
                    }),
                    (0, s.jsx)(a.Mi4, {
                        id: A.Ax.CHANGE_EMAIL_REASONS,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS,
                        impressionProperties: K,
                        children: (0, s.jsx)(d.Z, {
                            onNext: () => (x.default.track(h.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, { change_email_reason_enum: G }), null != G && C.Mr.has(G) ? v(A.Ax.CHANGE_EMAIL_WARNING) : v(A.Ax.EMAIL_AND_PASSWORD)),
                            onClose: g,
                            reason: G,
                            onReasonChange: H,
                            freeTextResponse: Z,
                            setFreeTextResponse: F
                        })
                    }),
                    (0, s.jsx)(a.Mi4, {
                        id: A.Ax.CHANGE_EMAIL_WARNING,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING,
                        impressionProperties: K,
                        children: (0, s.jsx)(N.Z, {
                            onNext: () => {
                                x.default.track(h.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, { change_email_reason_enum: G }), v(A.Ax.EMAIL_AND_PASSWORD);
                            },
                            onClose: g
                        })
                    }),
                    (0, s.jsx)(a.Mi4, {
                        id: A.Ax.EMAIL_AND_PASSWORD,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
                        impressionProperties:
                            ((n = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        s = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (s = s.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        s.forEach(function (t) {
                                            var s;
                                            (s = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: s,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = s);
                                        });
                                }
                                return e;
                            })({}, K)),
                            (k = k = { email_verified: I.current }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(k))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var s = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, s);
                                      }
                                      return n;
                                  })(Object(k)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(k, e));
                                  }),
                            n),
                        children: (0, s.jsx)(_.Z, {
                            emailToken: L,
                            isSlideReady: b === A.Ax.EMAIL_AND_PASSWORD,
                            onBack: O ? () => v(null != G && C.Mr.has(G) ? A.Ax.CHANGE_EMAIL_WARNING : A.Ax.CHANGE_EMAIL_REASONS) : null,
                            onNext: (e) => {
                                x.default.track(h.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, {
                                    change_email_reason_enum: G,
                                    free_text_response: Z
                                }),
                                    P(e),
                                    v(A.Ax.COMPLETE);
                            },
                            onClose: g
                        })
                    }),
                    (0, s.jsx)(a.Mi4, {
                        id: A.Ax.COMPLETE,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
                        impressionProperties: K,
                        children: (0, s.jsx)(m.Z, {
                            email: U,
                            onClose: g
                        })
                    })
                ]
            })
        ]
    });
}
