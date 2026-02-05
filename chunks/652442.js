n.r(t), n.d(t, { default: () => u });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(135598),
    r = n(390248),
    s = n(279547),
    o = n(788322),
    d = n(961997),
    c = n(985018);
function u(e) {
    let { channelId: t, messageId: n, mediaItemUrl: u, embedId: g, transitionState: A, onClose: p } = e,
        m = (0, o.L)(t, n, u),
        f = (0, o.F)(t, n, g),
        { reportFalsePositive: y, isReportFalsePositiveLoading: h } = (0, s.d)({
            onSuccess: () => (0, d.o)(p),
            onError: () => {
                (0, l.showToast)((0, l.createToast)(c.intl.string(c.t.R0RpRX), l.ToastType.FAILURE));
            },
            report: () => {
                (0, a.XR)(
                    t,
                    n,
                    m.map((e) => e.id),
                    f.map((e) => e.id),
                );
            },
        });
    return (
        m.length > 0 || f.length > 0 || p(),
        (0, i.jsx)(d.k, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: h,
            analyticsContext: r.SW.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: y,
            attachmentPreview: 1 === m.length && 0 === f.length ? m[0] : void 0,
            embedPreview: 1 === f.length && 0 === m.length ? f[0] : void 0,
            transitionState: A,
            onClose: p,
        })
    );
}
