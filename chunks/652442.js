n.r(t),
    n.d(t, {
        default: () => u,
    });
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(135598),
    o = n(390248),
    a = n(279547),
    c = n(788322),
    s = n(961997),
    d = n(985018);

function u(e) {
    let { channelId: t, messageId: n, mediaItemUrl: u, embedId: f, transitionState: g, onClose: p } = e,
        b = (0, c.L)(t, n, u),
        m = (0, c.F)(t, n, f),
        { reportFalsePositive: y, isReportFalsePositiveLoading: O } = (0, a.d)({
            onSuccess: () => (0, s.o)(p),
            onError: () => {
                (0, l.showToast)((0, l.createToast)(d.intl.string(d.t.R0RpRX), l.ToastType.FAILURE));
            },
            report: () => {
                (0, i.XR)(
                    t,
                    n,
                    b.map((e) => e.id),
                    m.map((e) => e.id),
                );
            },
        });
    return (
        b.length > 0 || m.length > 0 || p(),
        (0, r.jsx)(s.k, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: O,
            analyticsContext: o.SW.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: y,
            attachmentPreview: 1 === b.length && 0 === m.length ? b[0] : void 0,
            embedPreview: 1 === m.length && 0 === b.length ? m[0] : void 0,
            transitionState: g,
            onClose: p,
        })
    );
}
