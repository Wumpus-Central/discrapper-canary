n.d(e, { default: () => p }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(442837),
    l = n(809206),
    s = n(594174),
    o = n(626135),
    c = n(706734),
    u = n(264119),
    E = n(75788),
    _ = n(22150),
    d = n(361833),
    A = n(134562),
    x = n(526761),
    C = n(981631),
    g = n(308569);
function p(t) {
    let { transitionState: e, onClose: n } = t,
        p = (0, i.e7)([s.default], () => s.default.getCurrentUser());
    r.useEffect(() => (o.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, l.Zy)()), []);
    let S = null == p ? void 0 : p.verified,
        f = S ? x.Ax.CONFIRM_START : x.Ax.EMAIL_AND_PASSWORD,
        [N, m] = r.useState(f),
        [h, T] = r.useState(null),
        [v, y] = r.useState(null),
        [M, R] = r.useState(""),
        [I, O] = r.useState(),
        [k, L] = r.useState("");
    switch (N) {
        case x.Ax.CONFIRM_START:
            return (0, a.jsx)(_.Z, {
                onNext: () => m(x.Ax.CONFIRM_CODE),
                onClose: n,
                transitionState: e,
            });
        case x.Ax.CONFIRM_CODE:
            return (0, a.jsx)(E.Z, {
                error: v,
                setError: y,
                setEmailToken: T,
                onNext: () => m(x.Ax.CHANGE_EMAIL_REASONS),
                transitionState: e,
                onClose: n,
            });
        case x.Ax.CHANGE_EMAIL_REASONS:
            return (0, a.jsx)(c.Z, {
                onNext: () => (
                    o.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, { change_email_reason_enum: I }),
                    null != I && g.Mr.has(I) ? m(x.Ax.CHANGE_EMAIL_WARNING) : m(x.Ax.EMAIL_AND_PASSWORD)
                ),
                transitionState: e,
                onClose: n,
                reason: I,
                onReasonChange: O,
                freeTextResponse: k,
                setFreeTextResponse: L,
            });
        case x.Ax.CHANGE_EMAIL_WARNING:
            return (0, a.jsx)(A.Z, {
                onNext: () => {
                    o.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, { change_email_reason_enum: I }),
                        m(x.Ax.EMAIL_AND_PASSWORD);
                },
                onClose: n,
                transitionState: e,
            });
        case x.Ax.EMAIL_AND_PASSWORD:
            return (0, a.jsx)(d.Z, {
                emailToken: h,
                onBack: S
                    ? () => m(null != I && g.Mr.has(I) ? x.Ax.CHANGE_EMAIL_WARNING : x.Ax.CHANGE_EMAIL_REASONS)
                    : null,
                onNext: (t) => {
                    o.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, {
                        change_email_reason_enum: I,
                        free_text_response: k,
                    }),
                        R(t),
                        m(x.Ax.COMPLETE);
                },
                onClose: n,
                transitionState: e,
            });
        case x.Ax.COMPLETE:
            return (0, a.jsx)(u.Z, {
                email: M,
                onClose: n,
                transitionState: e,
            });
        default:
            return null;
    }
}
