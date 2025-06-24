n.r(t), n.d(t, { default: () => m });
var r = n(255367);
n(73800);
var i = n(399606),
    l = n(481060),
    a = n(923500),
    o = n(522664),
    s = n(247206),
    c = n(774863),
    u = n(668058),
    d = n(160877),
    p = n(388032);
function m(e) {
    let { channelId: t, messageId: n, transitionState: m, onClose: f } = e,
        h = (0, i.e7)([c.Z], () => c.Z.getFpMessageInfo(n)),
        g = h.attachments.map((e) => e.id),
        _ = h.attachments.map((e) => e.filename),
        { reportFalsePositive: b, isReportFalsePositiveLoading: x } = (0, u.$)({
            onSuccess: () => {
                (0, d.s)(f), a.Z.disableFalsePositiveButton(t, n);
            },
            onError: () => {
                (0, l.showToast)((0, l.createToast)(p.intl.string(p.t.R0RpRU), l.ToastType.FAILURE));
            },
            report: () => {
                (0, o.Eq)(t, n, g, _);
            }
        });
    return (
        h.attachments.length > 0 || f(),
        (0, r.jsx)(d.$, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: x,
            analyticsContext: s.UU.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
            onConfirmPress: b,
            transitionState: m,
            onClose: f
        })
    );
}
