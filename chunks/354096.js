n.d(e, { default: () => d });
var a = n(627968),
    r = n(64700),
    i = n(311907),
    s = n(631670),
    l = n(287809),
    o = n(954571),
    c = n(660307),
    E = n(179659),
    u = n(703117),
    A = n(677768),
    _ = n(606917),
    C = n(330248),
    g = n(355097),
    N = n(652215),
    S = n(87404);
function d(t) {
    let { transitionState: e, onClose: n } = t,
        d = (0, i.bG)([l.default], () => l.default.getCurrentUser());
    r.useEffect(() => (o.default.track(N.HAw.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, s.Uo)()), []);
    let k = d?.verified,
        m = k ? g.ko.CONFIRM_START : g.ko.EMAIL_AND_PASSWORD,
        [h, x] = r.useState(m),
        [p, T] = r.useState(null),
        [f, R] = r.useState(null),
        [y, v] = r.useState(""),
        [M, O] = r.useState();
    switch (h) {
        case g.ko.CONFIRM_START:
            return (0, a.jsx)(A.A, { onNext: () => x(g.ko.CONFIRM_CODE), onClose: n, transitionState: e });
        case g.ko.CONFIRM_CODE:
            return (0, a.jsx)(u.A, {
                error: f,
                setError: R,
                setEmailToken: T,
                onNext: () => x(g.ko.CHANGE_EMAIL_REASONS),
                transitionState: e,
                onClose: n,
            });
        case g.ko.CHANGE_EMAIL_REASONS:
            return (0, a.jsx)(c.A, {
                onNext: () => (
                    o.default.track(N.HAw.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, { change_email_reason_enum: M }),
                    null != M && S.qr.has(M) ? x(g.ko.CHANGE_EMAIL_WARNING) : x(g.ko.EMAIL_AND_PASSWORD)
                ),
                transitionState: e,
                onClose: n,
                reason: M,
                onReasonChange: O,
            });
        case g.ko.CHANGE_EMAIL_WARNING:
            return (0, a.jsx)(C.A, {
                onNext: () => {
                    o.default.track(N.HAw.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, { change_email_reason_enum: M }),
                        x(g.ko.EMAIL_AND_PASSWORD);
                },
                onClose: n,
                transitionState: e,
            });
        case g.ko.EMAIL_AND_PASSWORD:
            return (0, a.jsx)(_.A, {
                emailToken: p,
                onBack: k
                    ? () => x(null != M && S.qr.has(M) ? g.ko.CHANGE_EMAIL_WARNING : g.ko.CHANGE_EMAIL_REASONS)
                    : null,
                onNext: (t) => {
                    o.default.track(N.HAw.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, { change_email_reason_enum: M }),
                        v(t),
                        x(g.ko.COMPLETE);
                },
                onClose: n,
                transitionState: e,
            });
        case g.ko.COMPLETE:
            return (0, a.jsx)(E.A, { email: y, onClose: n, transitionState: e });
        default:
            return null;
    }
}
