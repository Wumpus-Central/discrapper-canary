t.d(s, { default: () => k }), t(47120);
var n = t(200651),
    r = t(192379),
    a = t(990547),
    l = t(442837),
    o = t(481060),
    i = t(809206),
    c = t(594174),
    x = t(626135),
    d = t(706734),
    N = t(264119),
    m = t(75788),
    u = t(22150),
    _ = t(361833),
    E = t(134562),
    A = t(526761),
    h = t(981631),
    C = t(308569),
    p = t(652297),
    j = t(800010),
    S = t(75277);
function k(e) {
    var s, t, k;
    let { transitionState: f, onClose: g } = e,
        M = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        I = r.useRef(null != (s = null == M ? void 0 : M.verified) && s);
    r.useEffect(() => (x.default.track(h.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, i.Zy)()), []);
    let O = null == M ? void 0 : M.verified,
        R = O ? A.Ax.CONFIRM_START : A.Ax.EMAIL_AND_PASSWORD,
        [T, v] = r.useState(R),
        [b, z] = r.useState(null),
        [L, W] = r.useState(null),
        [y, D] = r.useState(null),
        [w, U] = r.useState(''),
        [P, G] = r.useState(),
        [H, Z] = r.useState(''),
        F = T === A.Ax.CHANGE_EMAIL_WARNING ? p.wumpusExclamationImg : p.emailHeaderImg,
        B = T === A.Ax.CHANGE_EMAIL_WARNING ? S : j,
        K = { impression_group: a.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW };
    return (0, n.jsxs)(o.Y0X, {
        transitionState: f,
        disableTrack: !0,
        children: [
            (0, n.jsx)('img', {
                alt: '',
                className: F,
                src: B
            }),
            (0, n.jsxs)(o.MyZ, {
                activeSlide: T,
                width: 440,
                onSlideReady: (e) => z(e),
                children: [
                    (0, n.jsx)(o.Mi4, {
                        id: A.Ax.CONFIRM_START,
                        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
                        impressionProperties: K,
                        children: (0, n.jsx)(u.Z, {
                            onNext: () => v(A.Ax.CONFIRM_CODE),
                            onClose: g
                        })
                    }),
                    (0, n.jsx)(o.Mi4, {
                        id: A.Ax.CONFIRM_CODE,
                        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
                        impressionProperties: K,
                        children: (0, n.jsx)(m.Z, {
                            error: y,
                            setError: D,
                            setEmailToken: W,
                            isSlideReady: b === A.Ax.CONFIRM_CODE,
                            onNext: () => v(A.Ax.CHANGE_EMAIL_REASONS),
                            onClose: g
                        })
                    }),
                    (0, n.jsx)(o.Mi4, {
                        id: A.Ax.CHANGE_EMAIL_REASONS,
                        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS,
                        impressionProperties: K,
                        children: (0, n.jsx)(d.Z, {
                            onNext: () => (x.default.track(h.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, { change_email_reason_enum: P }), null != P && C.Mr.has(P) ? v(A.Ax.CHANGE_EMAIL_WARNING) : v(A.Ax.EMAIL_AND_PASSWORD)),
                            onClose: g,
                            reason: P,
                            onReasonChange: G,
                            freeTextResponse: H,
                            setFreeTextResponse: Z
                        })
                    }),
                    (0, n.jsx)(o.Mi4, {
                        id: A.Ax.CHANGE_EMAIL_WARNING,
                        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING,
                        impressionProperties: K,
                        children: (0, n.jsx)(E.Z, {
                            onNext: () => {
                                x.default.track(h.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, { change_email_reason_enum: P }), v(A.Ax.EMAIL_AND_PASSWORD);
                            },
                            onClose: g
                        })
                    }),
                    (0, n.jsx)(o.Mi4, {
                        id: A.Ax.EMAIL_AND_PASSWORD,
                        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
                        impressionProperties:
                            ((t = (function (e) {
                                for (var s = 1; s < arguments.length; s++) {
                                    var t = null != arguments[s] ? arguments[s] : {},
                                        n = Object.keys(t);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                            })
                                        )),
                                        n.forEach(function (s) {
                                            var n;
                                            (n = t[s]),
                                                s in e
                                                    ? Object.defineProperty(e, s, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[s] = n);
                                        });
                                }
                                return e;
                            })({}, K)),
                            (k = k = { email_verified: I.current }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(k))
                                : (function (e, s) {
                                      var t = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          t.push.apply(t, n);
                                      }
                                      return t;
                                  })(Object(k)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(k, e));
                                  }),
                            t),
                        children: (0, n.jsx)(_.Z, {
                            emailToken: L,
                            isSlideReady: b === A.Ax.EMAIL_AND_PASSWORD,
                            onBack: O ? () => v(null != P && C.Mr.has(P) ? A.Ax.CHANGE_EMAIL_WARNING : A.Ax.CHANGE_EMAIL_REASONS) : null,
                            onNext: (e) => {
                                x.default.track(h.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, {
                                    change_email_reason_enum: P,
                                    free_text_response: H
                                }),
                                    U(e),
                                    v(A.Ax.COMPLETE);
                            },
                            onClose: g
                        })
                    }),
                    (0, n.jsx)(o.Mi4, {
                        id: A.Ax.COMPLETE,
                        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
                        impressionProperties: K,
                        children: (0, n.jsx)(N.Z, {
                            email: w,
                            onClose: g
                        })
                    })
                ]
            })
        ]
    });
}
