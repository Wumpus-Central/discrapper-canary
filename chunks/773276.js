n.r(t),
    n.d(t, {
        default: function () {
            return h;
        }
    });
var i = n(200651);
n(192379);
var r = n(399606),
    l = n(481060),
    a = n(923500),
    o = n(522664),
    s = n(247206),
    c = n(774863),
    u = n(668058),
    d = n(160877),
    m = n(388032);
function h(e) {
    let { channelId: t, messageId: n, transitionState: h, onClose: f } = e,
        p = (0, r.e7)([c.Z], () => c.Z.getFpMessageInfo(n)),
        _ = p.attachments.map((e) => e.id),
        g = p.attachments.map((e) => e.filename),
        { reportFalsePositive: E, isReportFalsePositiveLoading: C } = (0, u.$)({
            onSuccess: () => {
                (0, d.s)(f), a.Z.disableFalsePositiveButton(t, n);
            },
            onError: () => {
                (0, l.showToast)((0, l.createToast)(m.intl.string(m.t.R0RpRU), l.ToastType.FAILURE));
            },
            report: () => {
                (0, o.Eq)(t, n, _, g);
            }
        });
    return (
        !(p.attachments.length > 0) && f(),
        (0, i.jsx)(d.$, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: C,
            analyticsContext: s.UU.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
            onConfirmPress: E,
            transitionState: h,
            onClose: f
        })
    );
}
