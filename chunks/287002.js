e.r(n), e.d(n, { default: () => C });
var i = e(477900);
e(582128);
var a = e(702841),
    l = e(691540),
    s = e(857250),
    r = e(97483),
    o = e(104217),
    c = e(135598),
    u = e(390248),
    d = e(900019),
    I = e(279547),
    E = e(961997),
    _ = e(375708);
function C(t) {
    let { channelId: n, messageId: e, transitionState: C, onClose: p } = t,
        v = (0, a.bG)([d.A], () => d.A.getFpMessageInfo(e)),
        h = v.attachments.map((t) => t.id),
        m = v.attachments.map((t) => t.filename),
        { reportFalsePositive: x, isReportFalsePositiveLoading: A } = (0, I.d)({
            onSuccess: () => {
                (0, E.o)(p), o.A.disableFalsePositiveButton(n, e);
            },
            onError: () => {
                (0, l.P0)((0, s.o)(_.intl.string(_.t.R0RpRX), r.Ck.FAILURE));
            },
            report: () => {
                (0, c.wV)(n, e, h, m);
            },
        });
    return (
        v.attachments.length > 0 || p(),
        (0, i.jsx)(E.k, {
            messageId: e,
            channelId: n,
            isReportFalsePositiveLoading: A,
            analyticsContext: u.SW.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
            onConfirmPress: x,
            transitionState: C,
            onClose: p,
        })
    );
}
