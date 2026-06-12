n.r(e), n.d(e, { default: () => C });
var i = n(627968);
n(64700);
var l = n(702841),
    a = n(691540),
    s = n(857250),
    r = n(97483),
    o = n(104217),
    c = n(135598),
    d = n(390248),
    u = n(900019),
    I = n(279547),
    E = n(961997),
    _ = n(375708);
function C(t) {
    let { channelId: e, messageId: n, transitionState: C, onClose: p } = t,
        v = (0, l.bG)([u.A], () => u.A.getFpMessageInfo(n)),
        h = v.attachments.map((t) => t.id),
        m = v.attachments.map((t) => t.filename),
        { reportFalsePositive: x, isReportFalsePositiveLoading: A } = (0, I.d)({
            onSuccess: () => {
                (0, E.o)(p), o.A.disableFalsePositiveButton(e, n);
            },
            onError: () => {
                (0, a.P0)((0, s.o)(_.intl.string(_.t.R0RpRX), r.Ck.FAILURE));
            },
            report: () => {
                (0, c.wV)(e, n, h, m);
            },
        });
    return (
        v.attachments.length > 0 || p(),
        (0, i.jsx)(E.k, {
            messageId: n,
            channelId: e,
            isReportFalsePositiveLoading: A,
            analyticsContext: d.SW.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
            onConfirmPress: x,
            transitionState: C,
            onClose: p,
        })
    );
}
