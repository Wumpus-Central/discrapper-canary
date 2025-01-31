n.r(t), n.d(t, { default: () => h });
var i = n(200651);
n(192379);
var l = n(399606),
    a = n(481060),
    r = n(923500),
    s = n(522664),
    o = n(247206),
    c = n(774863),
    d = n(668058),
    u = n(160877),
    m = n(388032);
function h(e) {
    let { channelId: t, messageId: n, transitionState: h, onClose: _ } = e,
        p = (0, l.e7)([c.Z], () => c.Z.getFpMessageInfo(n)),
        g = p.attachments.map((e) => e.id),
        f = p.attachments.map((e) => e.filename),
        { reportFalsePositive: x, isReportFalsePositiveLoading: E } = (0, d.$)({
            onSuccess: () => {
                (0, u.s)(_), r.Z.disableFalsePositiveButton(t, n);
            },
            onError: () => {
                (0, a.showToast)((0, a.createToast)(m.intl.string(m.t.R0RpRU), a.ToastType.FAILURE));
            },
            report: () => {
                (0, s.Eq)(t, n, g, f);
            }
        });
    return (
        p.attachments.length > 0 || _(),
        (0, i.jsx)(u.$, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: E,
            analyticsContext: o.UU.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
            onConfirmPress: x,
            transitionState: h,
            onClose: _
        })
    );
}
