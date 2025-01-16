n.r(t),
    n.d(t, {
        default: function () {
            return I;
        }
    }),
    n(47120);
var s = n(200651),
    o = n(192379),
    l = n(990547),
    a = n(442837),
    i = n(481060),
    r = n(809206),
    d = n(594174),
    c = n(626135),
    u = n(706734),
    m = n(264119),
    _ = n(75788),
    E = n(22150),
    N = n(361833),
    x = n(134562),
    A = n(526761),
    C = n(981631),
    h = n(308569),
    M = n(981818),
    S = n(800010),
    p = n(75277);
function I(e) {
    var t;
    let { transitionState: n, onClose: I } = e,
        f = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        j = o.useRef(null !== (t = null == f ? void 0 : f.verified) && void 0 !== t && t);
    o.useEffect(() => (c.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, r.Zy)()), []);
    let g = null == f ? void 0 : f.verified,
        R = g ? A.Ax.CONFIRM_START : A.Ax.EMAIL_AND_PASSWORD,
        [v, T] = o.useState(R),
        [O, L] = o.useState(null),
        [B, k] = o.useState(null),
        [D, U] = o.useState(null),
        [b, H] = o.useState(''),
        [y, G] = o.useState(),
        [F, w] = o.useState(''),
        Z = v === A.Ax.CHANGE_EMAIL_WARNING ? M.wumpusExclamationImg : M.emailHeaderImg,
        P = v === A.Ax.CHANGE_EMAIL_WARNING ? p : S,
        W = { impression_group: l.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW };
    return (0, s.jsxs)(i.ModalRoot, {
        transitionState: n,
        disableTrack: !0,
        children: [
            (0, s.jsx)('img', {
                alt: '',
                className: Z,
                src: P
            }),
            (0, s.jsxs)(i.Slides, {
                activeSlide: v,
                width: 440,
                onSlideReady: (e) => L(e),
                children: [
                    (0, s.jsx)(i.Slide, {
                        id: A.Ax.CONFIRM_START,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
                        impressionProperties: W,
                        children: (0, s.jsx)(E.Z, {
                            onNext: () => T(A.Ax.CONFIRM_CODE),
                            onClose: I
                        })
                    }),
                    (0, s.jsx)(i.Slide, {
                        id: A.Ax.CONFIRM_CODE,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
                        impressionProperties: W,
                        children: (0, s.jsx)(_.Z, {
                            error: D,
                            setError: U,
                            setEmailToken: k,
                            isSlideReady: O === A.Ax.CONFIRM_CODE,
                            onNext: () => T(A.Ax.CHANGE_EMAIL_REASONS),
                            onClose: I
                        })
                    }),
                    (0, s.jsx)(i.Slide, {
                        id: A.Ax.CHANGE_EMAIL_REASONS,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS,
                        impressionProperties: W,
                        children: (0, s.jsx)(u.Z, {
                            onNext: () => (c.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, { change_email_reason_enum: y }), null != y && h.Mr.has(y) ? T(A.Ax.CHANGE_EMAIL_WARNING) : T(A.Ax.EMAIL_AND_PASSWORD)),
                            onClose: I,
                            reason: y,
                            onReasonChange: G,
                            freeTextResponse: F,
                            setFreeTextResponse: w
                        })
                    }),
                    (0, s.jsx)(i.Slide, {
                        id: A.Ax.CHANGE_EMAIL_WARNING,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING,
                        impressionProperties: W,
                        children: (0, s.jsx)(x.Z, {
                            onNext: () => {
                                c.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, { change_email_reason_enum: y }), T(A.Ax.EMAIL_AND_PASSWORD);
                            },
                            onClose: I
                        })
                    }),
                    (0, s.jsx)(i.Slide, {
                        id: A.Ax.EMAIL_AND_PASSWORD,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
                        impressionProperties: {
                            ...W,
                            email_verified: j.current
                        },
                        children: (0, s.jsx)(N.Z, {
                            emailToken: B,
                            isSlideReady: O === A.Ax.EMAIL_AND_PASSWORD,
                            onBack: g ? () => T(null != y && h.Mr.has(y) ? A.Ax.CHANGE_EMAIL_WARNING : A.Ax.CHANGE_EMAIL_REASONS) : null,
                            onNext: (e) => {
                                c.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, {
                                    change_email_reason_enum: y,
                                    free_text_response: F
                                }),
                                    H(e),
                                    T(A.Ax.COMPLETE);
                            },
                            onClose: I
                        })
                    }),
                    (0, s.jsx)(i.Slide, {
                        id: A.Ax.COMPLETE,
                        impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
                        impressionProperties: W,
                        children: (0, s.jsx)(m.Z, {
                            email: b,
                            onClose: I
                        })
                    })
                ]
            })
        ]
    });
}
