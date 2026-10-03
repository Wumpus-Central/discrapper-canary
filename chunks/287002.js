(e.r(n), e.d(n, { default: () => C }));
var i = e(477900);
e(582128);
var s = e(702841),
    a = e(739187),
    l = e(857250),
    o = e(97483),
    r = e(104217),
    c = e(135598),
    d = e(390248),
    u = e(900019),
    I = e(279547),
    E = e(961997),
    _ = e(375708);
function C(t) {
    let { channelId: n, messageId: e, transitionState: C, onClose: h } = t,
        p = (0, s.bG)([u.A], () => u.A.getFpMessageInfo(e)),
        S = p.attachments.map((t) => t.id),
        v = p.attachments.map((t) => t.filename),
        { reportFalsePositive: A, isReportFalsePositiveLoading: m } = (0, I.d)({
            onSuccess: () => {
                ((0, E.o)(h), r.A.disableFalsePositiveButton(n, e));
            },
            onError: () => {
                (0, a.P)((0, l.o)(_.intl.string(_.t.R0RpRX), o.Ck.FAILURE));
            },
            report: () => {
                (0, c.wV)(n, e, S, v);
            },
        });
    return (
        p.attachments.length > 0 || h(),
        (0, i.jsx)(E.k, {
            messageId: e,
            channelId: n,
            isReportFalsePositiveLoading: m,
            analyticsContext: d.SW.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
            onConfirmPress: A,
            transitionState: C,
            onClose: h,
        })
    );
}
