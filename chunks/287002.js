n.r(t), n.d(t, { default: () => _ });
var i = n(627968);
n(64700);
var l = n(417597),
    a = n(397927),
    r = n(104217),
    s = n(135598),
    o = n(390248),
    d = n(900819),
    c = n(279547),
    u = n(961997),
    m = n(985018);
function _(e) {
    let { channelId: t, messageId: n, transitionState: _, onClose: h } = e,
        p = (0, l.bG)([d.A], () => d.A.getFpMessageInfo(n)),
        g = p.attachments.map((e) => e.id),
        A = p.attachments.map((e) => e.filename),
        { reportFalsePositive: f, isReportFalsePositiveLoading: x } = (0, c.d)({
            onSuccess: () => {
                (0, u.o)(h), r.A.disableFalsePositiveButton(t, n);
            },
            onError: () => {
                (0, a.showToast)((0, a.createToast)(m.intl.string(m.t.R0RpRX), a.ToastType.FAILURE));
            },
            report: () => {
                (0, s.wV)(t, n, g, A);
            },
        });
    return (
        p.attachments.length > 0 || h(),
        (0, i.jsx)(u.k, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: x,
            analyticsContext: o.SW.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
            onConfirmPress: f,
            transitionState: _,
            onClose: h,
        })
    );
}
