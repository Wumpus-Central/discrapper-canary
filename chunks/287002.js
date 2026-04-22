n.r(t), n.d(t, { default: () => p });
var i = n(627968);
n(64700);
var l = n(417597),
    a = n(691540),
    s = n(857250),
    r = n(97483),
    o = n(104217),
    d = n(135598),
    c = n(390248),
    u = n(900819),
    m = n(279547),
    _ = n(961997),
    h = n(985018);
function p(e) {
    let { channelId: t, messageId: n, transitionState: p, onClose: g } = e,
        A = (0, l.bG)([u.A], () => u.A.getFpMessageInfo(n)),
        f = A.attachments.map((e) => e.id),
        x = A.attachments.map((e) => e.filename),
        { reportFalsePositive: C, isReportFalsePositiveLoading: E } = (0, m.d)({
            onSuccess: () => {
                (0, _.o)(g), o.A.disableFalsePositiveButton(t, n);
            },
            onError: () => {
                (0, a.P0)((0, s.o)(h.intl.string(h.t.R0RpRX), r.Ck.FAILURE));
            },
            report: () => {
                (0, d.wV)(t, n, f, x);
            },
        });
    return (
        A.attachments.length > 0 || g(),
        (0, i.jsx)(_.k, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: E,
            analyticsContext: c.SW.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
            onConfirmPress: C,
            transitionState: p,
            onClose: g,
        })
    );
}
