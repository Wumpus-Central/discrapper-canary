e.d(n, { default: () => S }), e(388685);
var a = e(54381),
    r = e(473749),
    i = e(442837),
    l = e(809206),
    s = e(594174),
    o = e(626135),
    c = e(706734),
    u = e(264119),
    E = e(75788),
    A = e(22150),
    _ = e(361833),
    d = e(134562),
    C = e(526761),
    x = e(981631),
    N = e(308569);
function S(t) {
    let { transitionState: n, onClose: e } = t,
        S = (0, i.e7)([s.default], () => s.default.getCurrentUser());
    r.useEffect(() => (o.default.track(x.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, l.Zy)()), []);
    let g = null == S ? void 0 : S.verified,
        p = g ? C.Ax.CONFIRM_START : C.Ax.EMAIL_AND_PASSWORD,
        [f, m] = r.useState(p),
        [v, h] = r.useState(null),
        [y, T] = r.useState(null),
        [M, I] = r.useState(""),
        [R, O] = r.useState();
    switch (f) {
        case C.Ax.CONFIRM_START:
            return (0, a.jsx)(A.Z, {
                onNext: () => m(C.Ax.CONFIRM_CODE),
                onClose: e,
                transitionState: n,
            });
        case C.Ax.CONFIRM_CODE:
            return (0, a.jsx)(E.Z, {
                error: y,
                setError: T,
                setEmailToken: h,
                onNext: () => m(C.Ax.CHANGE_EMAIL_REASONS),
                transitionState: n,
                onClose: e,
            });
        case C.Ax.CHANGE_EMAIL_REASONS:
            return (0, a.jsx)(c.Z, {
                onNext: () => (
                    o.default.track(x.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, { change_email_reason_enum: R }),
                    null != R && N.Mr.has(R) ? m(C.Ax.CHANGE_EMAIL_WARNING) : m(C.Ax.EMAIL_AND_PASSWORD)
                ),
                transitionState: n,
                onClose: e,
                reason: R,
                onReasonChange: O,
            });
        case C.Ax.CHANGE_EMAIL_WARNING:
            return (0, a.jsx)(d.Z, {
                onNext: () => {
                    o.default.track(x.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, { change_email_reason_enum: R }),
                        m(C.Ax.EMAIL_AND_PASSWORD);
                },
                onClose: e,
                transitionState: n,
            });
        case C.Ax.EMAIL_AND_PASSWORD:
            return (0, a.jsx)(_.Z, {
                emailToken: v,
                onBack: g
                    ? () => m(null != R && N.Mr.has(R) ? C.Ax.CHANGE_EMAIL_WARNING : C.Ax.CHANGE_EMAIL_REASONS)
                    : null,
                onNext: (t) => {
                    o.default.track(x.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, { change_email_reason_enum: R }),
                        I(t),
                        m(C.Ax.COMPLETE);
                },
                onClose: e,
                transitionState: n,
            });
        case C.Ax.COMPLETE:
            return (0, a.jsx)(u.Z, {
                email: M,
                onClose: e,
                transitionState: n,
            });
        default:
            return null;
    }
}
