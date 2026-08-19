e.r(n), e.d(n, { default: () => C });
var i = e(477900);
e(582128);
var a = e(702841),
    l = e(691540),
    s = e(857250),
    o = e(97483),
    r = e(104217),
    c = e(135598),
    d = e(390248),
    u = e(900019),
    I = e(279547),
    E = e(961997),
    _ = e(375708);
function C(t) {
    let { channelId: n, messageId: e, transitionState: C, onClose: p } = t,
        h = (0, a.bG)([u.A], () => u.A.getFpMessageInfo(e)),
        v = h.attachments.map((t) => t.id),
        m = h.attachments.map((t) => t.filename),
        { reportFalsePositive: x, isReportFalsePositiveLoading: S } = (0, I.d)({
            onSuccess: () => {
                (0, E.o)(p), r.A.disableFalsePositiveButton(n, e);
            },
            onError: () => {
                (0, l.P0)((0, s.o)(_.intl.string(_.t.R0RpRX), o.Ck.FAILURE));
            },
            report: () => {
                (0, c.wV)(n, e, v, m);
            },
        });
    return (
        h.attachments.length > 0 || p(),
        (0, i.jsx)(E.k, {
            messageId: e,
            channelId: n,
            isReportFalsePositiveLoading: S,
            analyticsContext: d.SW.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
            onConfirmPress: x,
            transitionState: C,
            onClose: p,
        })
    );
}
