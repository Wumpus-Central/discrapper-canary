n.r(t), n.d(t, { default: () => _ });
var r = n(54381);
n(473749);
var i = n(399606),
    a = n(481060),
    o = n(923500),
    s = n(522664),
    l = n(247206),
    c = n(774863),
    u = n(668058),
    d = n(160877),
    f = n(388032);
function _(e) {
    let { channelId: t, messageId: n, transitionState: _, onClose: p } = e,
        h = (0, i.e7)([c.Z], () => c.Z.getFpMessageInfo(n)),
        m = h.attachments.map((e) => e.id),
        g = h.attachments.map((e) => e.filename),
        { reportFalsePositive: E, isReportFalsePositiveLoading: b } = (0, u.$)({
            onSuccess: () => {
                (0, d.s)(p), o.Z.disableFalsePositiveButton(t, n);
            },
            onError: () => {
                (0, a.showToast)((0, a.createToast)(f.intl.string(f.t.R0RpRX), a.ToastType.FAILURE));
            },
            report: () => {
                (0, s.Eq)(t, n, m, g);
            },
        });
    return (
        h.attachments.length > 0 || p(),
        (0, r.jsx)(d.$, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: b,
            analyticsContext: l.UU.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
            onConfirmPress: E,
            transitionState: _,
            onClose: p,
        })
    );
}
