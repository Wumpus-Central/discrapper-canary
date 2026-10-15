(e.r(n), e.d(n, { default: () => E }));
var i = e(477900);
e(582128);
var a = e(702841),
    l = e(858899),
    s = e(104217),
    r = e(135598),
    o = e(390248),
    c = e(900019),
    u = e(279547),
    d = e(961997),
    I = e(105292);
function E(t) {
    let { channelId: n, messageId: e, transitionState: E, onClose: _ } = t,
        C = (0, a.bG)([c.A], () => c.A.getFpMessageInfo(e)),
        p = C.attachments.map((t) => t.id),
        h = C.attachments.map((t) => t.filename),
        { reportFalsePositive: S, isReportFalsePositiveLoading: v } = (0, u.d)({
            onSuccess: () => {
                ((0, d.o)(_), s.A.disableFalsePositiveButton(n, e));
            },
            onError: () => {
                (0, l.P0)({ text: I.intl.string(I.t.R0RpRX), variant: "critical" });
            },
            report: () => {
                (0, r.wV)(n, e, p, h);
            },
        });
    return (
        C.attachments.length > 0 || _(),
        (0, i.jsx)(d.k, {
            messageId: e,
            channelId: n,
            isReportFalsePositiveLoading: v,
            analyticsContext: o.SW.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
            onConfirmPress: S,
            transitionState: E,
            onClose: _,
        })
    );
}
