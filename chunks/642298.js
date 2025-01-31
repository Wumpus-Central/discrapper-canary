t.d(s, { default: () => j }), t(47120);
var n = t(200651),
    l = t(192379),
    i = t(990547),
    a = t(442837),
    r = t(481060),
    o = t(809206),
    c = t(594174),
    d = t(626135),
    x = t(706734),
    m = t(264119),
    u = t(75788),
    _ = t(22150),
    E = t(361833),
    N = t(134562),
    A = t(526761),
    C = t(981631),
    h = t(308569),
    S = t(981818),
    k = t(800010),
    p = t(75277);
function j(e) {
    var s;
    let { transitionState: t, onClose: j } = e,
        M = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        I = l.useRef(null !== (s = null == M ? void 0 : M.verified) && void 0 !== s && s);
    l.useEffect(() => (d.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, o.Zy)()), []);
    let R = null == M ? void 0 : M.verified,
        g = R ? A.Ax.CONFIRM_START : A.Ax.EMAIL_AND_PASSWORD,
        [f, v] = l.useState(g),
        [T, O] = l.useState(null),
        [z, L] = l.useState(null),
        [D, U] = l.useState(null),
        [b, w] = l.useState(''),
        [y, G] = l.useState(),
        [H, Z] = l.useState(''),
        F = f === A.Ax.CHANGE_EMAIL_WARNING ? S.wumpusExclamationImg : S.emailHeaderImg,
        B = f === A.Ax.CHANGE_EMAIL_WARNING ? p : k,
        P = { impression_group: i.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW };
    return (0, n.jsxs)(r.Y0X, {
        transitionState: t,
        disableTrack: !0,
        children: [
            (0, n.jsx)('img', {
                alt: '',
                className: F,
                src: B
            }),
            (0, n.jsxs)(r.MyZ, {
                activeSlide: f,
                width: 440,
                onSlideReady: (e) => O(e),
                children: [
                    (0, n.jsx)(r.Mi4, {
                        id: A.Ax.CONFIRM_START,
                        impressionName: i.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
                        impressionProperties: P,
                        children: (0, n.jsx)(_.Z, {
                            onNext: () => v(A.Ax.CONFIRM_CODE),
                            onClose: j
                        })
                    }),
                    (0, n.jsx)(r.Mi4, {
                        id: A.Ax.CONFIRM_CODE,
                        impressionName: i.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
                        impressionProperties: P,
                        children: (0, n.jsx)(u.Z, {
                            error: D,
                            setError: U,
                            setEmailToken: L,
                            isSlideReady: T === A.Ax.CONFIRM_CODE,
                            onNext: () => v(A.Ax.CHANGE_EMAIL_REASONS),
                            onClose: j
                        })
                    }),
                    (0, n.jsx)(r.Mi4, {
                        id: A.Ax.CHANGE_EMAIL_REASONS,
                        impressionName: i.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS,
                        impressionProperties: P,
                        children: (0, n.jsx)(x.Z, {
                            onNext: () => (d.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, { change_email_reason_enum: y }), null != y && h.Mr.has(y) ? v(A.Ax.CHANGE_EMAIL_WARNING) : v(A.Ax.EMAIL_AND_PASSWORD)),
                            onClose: j,
                            reason: y,
                            onReasonChange: G,
                            freeTextResponse: H,
                            setFreeTextResponse: Z
                        })
                    }),
                    (0, n.jsx)(r.Mi4, {
                        id: A.Ax.CHANGE_EMAIL_WARNING,
                        impressionName: i.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING,
                        impressionProperties: P,
                        children: (0, n.jsx)(N.Z, {
                            onNext: () => {
                                d.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, { change_email_reason_enum: y }), v(A.Ax.EMAIL_AND_PASSWORD);
                            },
                            onClose: j
                        })
                    }),
                    (0, n.jsx)(r.Mi4, {
                        id: A.Ax.EMAIL_AND_PASSWORD,
                        impressionName: i.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
                        impressionProperties: {
                            ...P,
                            email_verified: I.current
                        },
                        children: (0, n.jsx)(E.Z, {
                            emailToken: z,
                            isSlideReady: T === A.Ax.EMAIL_AND_PASSWORD,
                            onBack: R ? () => v(null != y && h.Mr.has(y) ? A.Ax.CHANGE_EMAIL_WARNING : A.Ax.CHANGE_EMAIL_REASONS) : null,
                            onNext: (e) => {
                                d.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, {
                                    change_email_reason_enum: y,
                                    free_text_response: H
                                }),
                                    w(e),
                                    v(A.Ax.COMPLETE);
                            },
                            onClose: j
                        })
                    }),
                    (0, n.jsx)(r.Mi4, {
                        id: A.Ax.COMPLETE,
                        impressionName: i.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
                        impressionProperties: P,
                        children: (0, n.jsx)(m.Z, {
                            email: b,
                            onClose: j
                        })
                    })
                ]
            })
        ]
    });
}
