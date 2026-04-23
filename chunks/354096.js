n.d(e, { default: () => S });
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
    d = n(355097),
    g = n(652215),
    N = n(87404);
function S(t) {
    let { transitionState: e, onClose: n } = t,
        S = (0, i.bG)([l.default], () => l.default.getCurrentUser());
    r.useEffect(() => (o.default.track(g.HAw.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, s.Uo)()), []);
    let k = S?.verified,
        m = k ? d.ko.CONFIRM_START : d.ko.EMAIL_AND_PASSWORD,
        [h, f] = r.useState(m),
        [x, p] = r.useState(null),
        [R, v] = r.useState(null),
        [y, O] = r.useState(""),
        [I, M] = r.useState();
    switch (h) {
        case d.ko.CONFIRM_START:
            return (0, a.jsx)(A.A, { onNext: () => f(d.ko.CONFIRM_CODE), onClose: n, transitionState: e });
        case d.ko.CONFIRM_CODE:
            return (0, a.jsx)(u.A, {
                error: R,
                setError: v,
                setEmailToken: p,
                onNext: () => f(d.ko.CHANGE_EMAIL_REASONS),
                transitionState: e,
                onClose: n,
            });
        case d.ko.CHANGE_EMAIL_REASONS:
            return (0, a.jsx)(c.A, {
                onNext: () => (
                    o.default.track(g.HAw.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, { change_email_reason_enum: I }),
                    null != I && N.qr.has(I) ? f(d.ko.CHANGE_EMAIL_WARNING) : f(d.ko.EMAIL_AND_PASSWORD)
                ),
                transitionState: e,
                onClose: n,
                reason: I,
                onReasonChange: M,
            });
        case d.ko.CHANGE_EMAIL_WARNING:
            return (0, a.jsx)(C.A, {
                onNext: () => {
                    o.default.track(g.HAw.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, { change_email_reason_enum: I }),
                        f(d.ko.EMAIL_AND_PASSWORD);
                },
                onClose: n,
                transitionState: e,
            });
        case d.ko.EMAIL_AND_PASSWORD:
            return (0, a.jsx)(_.A, {
                emailToken: x,
                onBack: k
                    ? () => f(null != I && N.qr.has(I) ? d.ko.CHANGE_EMAIL_WARNING : d.ko.CHANGE_EMAIL_REASONS)
                    : null,
                onNext: (t) => {
                    o.default.track(g.HAw.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, { change_email_reason_enum: I }),
                        O(t),
                        f(d.ko.COMPLETE);
                },
                onClose: n,
                transitionState: e,
            });
        case d.ko.COMPLETE:
            return (0, a.jsx)(E.A, { email: y, onClose: n, transitionState: e });
        default:
            return null;
    }
}
