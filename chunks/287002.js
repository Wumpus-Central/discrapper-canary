n.r(t),
    n.d(t, {
        default: () => p,
    });
var r = n(627968);
n(64700);
var i = n(417597),
    a = n(397927),
    s = n(104217),
    o = n(135598),
    l = n(390248),
    c = n(900819),
    u = n(279547),
    d = n(961997),
    f = n(985018);

function p(e) {
    let { channelId: t, messageId: n, transitionState: p, onClose: _ } = e,
        h = (0, i.bG)([c.A], () => c.A.getFpMessageInfo(n)),
        m = h.attachments.map((e) => e.id),
        g = h.attachments.map((e) => e.filename),
        { reportFalsePositive: E, isReportFalsePositiveLoading: b } = (0, u.d)({
            onSuccess: () => {
                (0, d.o)(_), s.A.disableFalsePositiveButton(t, n);
            },
            onError: () => {
                (0, a.showToast)((0, a.createToast)(f.intl.string(f.t.R0RpRX), a.ToastType.FAILURE));
            },
            report: () => {
                (0, o.wV)(t, n, m, g);
            },
        });
    return (
        h.attachments.length > 0 || _(),
        (0, r.jsx)(d.k, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: b,
            analyticsContext: l.SW.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
            onConfirmPress: E,
            transitionState: p,
            onClose: _,
        })
    );
}
