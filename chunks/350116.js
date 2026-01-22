n.d(e, {
    default: () => S,
}),
    n(896048);
var a = n(627968),
    r = n(64700),
    i = n(311907),
    l = n(631670),
    s = n(287809),
    o = n(954571),
    c = n(29711),
    u = n(755447),
    E = n(972201),
    A = n(627396),
    _ = n(334622),
    C = n(599436),
    d = n(355097),
    g = n(652215),
    N = n(87404);

function S(t) {
    let { transitionState: e, onClose: n } = t,
        S = (0, i.bG)([s.default], () => s.default.getCurrentUser());
    r.useEffect(() => (o.default.track(g.HAw.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, l.Uo)()), []);
    let k = null == S ? void 0 : S.verified,
        m = k ? d.ko.CONFIRM_START : d.ko.EMAIL_AND_PASSWORD,
        [h, x] = r.useState(m),
        [p, v] = r.useState(null),
        [T, f] = r.useState(null),
        [y, R] = r.useState(""),
        [M, O] = r.useState();
    switch (h) {
        case d.ko.CONFIRM_START:
            return (0, a.jsx)(A.A, {
                onNext: () => x(d.ko.CONFIRM_CODE),
                onClose: n,
                transitionState: e,
            });
        case d.ko.CONFIRM_CODE:
            return (0, a.jsx)(E.A, {
                error: T,
                setError: f,
                setEmailToken: v,
                onNext: () => x(d.ko.CHANGE_EMAIL_REASONS),
                transitionState: e,
                onClose: n,
            });
        case d.ko.CHANGE_EMAIL_REASONS:
            return (0, a.jsx)(c.A, {
                onNext: () => (
                    o.default.track(g.HAw.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, {
                        change_email_reason_enum: M,
                    }),
                    null != M && N.qr.has(M) ? x(d.ko.CHANGE_EMAIL_WARNING) : x(d.ko.EMAIL_AND_PASSWORD)
                ),
                transitionState: e,
                onClose: n,
                reason: M,
                onReasonChange: O,
            });
        case d.ko.CHANGE_EMAIL_WARNING:
            return (0, a.jsx)(C.A, {
                onNext: () => {
                    o.default.track(g.HAw.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, {
                        change_email_reason_enum: M,
                    }),
                        x(d.ko.EMAIL_AND_PASSWORD);
                },
                onClose: n,
                transitionState: e,
            });
        case d.ko.EMAIL_AND_PASSWORD:
            return (0, a.jsx)(_.A, {
                emailToken: p,
                onBack: k
                    ? () => x(null != M && N.qr.has(M) ? d.ko.CHANGE_EMAIL_WARNING : d.ko.CHANGE_EMAIL_REASONS)
                    : null,
                onNext: (t) => {
                    o.default.track(g.HAw.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, {
                        change_email_reason_enum: M,
                    }),
                        R(t),
                        x(d.ko.COMPLETE);
                },
                onClose: n,
                transitionState: e,
            });
        case d.ko.COMPLETE:
            return (0, a.jsx)(u.A, {
                email: y,
                onClose: n,
                transitionState: e,
            });
        default:
            return null;
    }
}
