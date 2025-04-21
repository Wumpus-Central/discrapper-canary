s.d(t, { default: () => k }), s(388685);
var n = s(200651),
    r = s(192379),
    l = s(990547),
    i = s(442837),
    a = s(481060),
    o = s(809206),
    c = s(594174),
    x = s(626135),
    d = s(706734),
    m = s(264119),
    u = s(75788),
    _ = s(22150),
    E = s(361833),
    N = s(134562),
    A = s(526761),
    h = s(981631),
    C = s(308569),
    p = s(652297),
    j = s(800010),
    S = s(75277);
function k(e) {
    var t, s, k;
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
    return (0, n.jsxs)(a.Y0X, {
        transitionState: f,
        disableTrack: !0,
        children: [
            (0, n.jsx)('img', {
                alt: '',
                className: B,
                src: W
            }),
            (0, n.jsxs)(a.MyZ, {
                activeSlide: T,
                width: 440,
                onSlideReady: (e) => z(e),
                children: [
                    (0, n.jsx)(a.Mi4, {
                        id: A.Ax.CONFIRM_START,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
                        impressionProperties: K,
                        children: (0, n.jsx)(_.Z, {
                            onNext: () => v(A.Ax.CONFIRM_CODE),
                            onClose: g
                        })
                    }),
                    (0, n.jsx)(a.Mi4, {
                        id: A.Ax.CONFIRM_CODE,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
                        impressionProperties: K,
                        children: (0, n.jsx)(u.Z, {
                            error: D,
                            setError: w,
                            setEmailToken: y,
                            isSlideReady: b === A.Ax.CONFIRM_CODE,
                            onNext: () => v(A.Ax.CHANGE_EMAIL_REASONS),
                            onClose: g
                        })
                    }),
                    (0, n.jsx)(a.Mi4, {
                        id: A.Ax.CHANGE_EMAIL_REASONS,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS,
                        impressionProperties: K,
                        children: (0, n.jsx)(d.Z, {
                            onNext: () => (x.default.track(h.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, { change_email_reason_enum: G }), null != G && C.Mr.has(G) ? v(A.Ax.CHANGE_EMAIL_WARNING) : v(A.Ax.EMAIL_AND_PASSWORD)),
                            onClose: g,
                            reason: G,
                            onReasonChange: H,
                            freeTextResponse: Z,
                            setFreeTextResponse: F
                        })
                    }),
                    (0, n.jsx)(a.Mi4, {
                        id: A.Ax.CHANGE_EMAIL_WARNING,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING,
                        impressionProperties: K,
                        children: (0, n.jsx)(N.Z, {
                            onNext: () => {
                                x.default.track(h.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, { change_email_reason_enum: G }), v(A.Ax.EMAIL_AND_PASSWORD);
                            },
                            onClose: g
                        })
                    }),
                    (0, n.jsx)(a.Mi4, {
                        id: A.Ax.EMAIL_AND_PASSWORD,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
                        impressionProperties:
                            ((s = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var s = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(s);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(s).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(s, e).enumerable;
                                            })
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = s[t]),
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
                            })({}, K)),
                            (k = k = { email_verified: I.current }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(k))
                                : (function (e, t) {
                                      var s = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          s.push.apply(s, n);
                                      }
                                      return s;
                                  })(Object(k)).forEach(function (e) {
                                      Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(k, e));
                                  }),
                            s),
                        children: (0, n.jsx)(E.Z, {
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
                    (0, n.jsx)(a.Mi4, {
                        id: A.Ax.COMPLETE,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
                        impressionProperties: K,
                        children: (0, n.jsx)(m.Z, {
                            email: U,
                            onClose: g
                        })
                    })
                ]
            })
        ]
    });
}
