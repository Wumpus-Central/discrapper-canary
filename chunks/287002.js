(e.r(n), e.d(n, { default: () => C }));
var i = e(477900);
e(582128);
var a = e(702841),
    s = e(691540),
    l = e(857250),
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
        h = (0, a.bG)([d.A], () => d.A.getFpMessageInfo(e)),
        v = h.attachments.map((t) => t.id),
        m = h.attachments.map((t) => t.filename),
        { reportFalsePositive: x, isReportFalsePositiveLoading: S } = (0, I.d)({
            onSuccess: () => {
                ((0, E.o)(p), o.A.disableFalsePositiveButton(n, e));
            },
            onError: () => {
                (0, s.P0)((0, l.o)(_.intl.string(_.t.R0RpRX), r.Ck.FAILURE));
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
            analyticsContext: u.SW.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
            onConfirmPress: x,
            transitionState: C,
            onClose: p,
        })
    );
}
