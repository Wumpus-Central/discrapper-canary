n.r(t), n.d(t, { default: () => A });
var i = n(627968);
n(64700);
var l = n(691540),
    a = n(857250),
    r = n(97483),
    s = n(135598),
    o = n(390248),
    d = n(279547),
    c = n(788322),
    u = n(961997),
    g = n(985018);
function A(e) {
    let { channelId: t, messageId: n, mediaItemUrl: A, embedId: h, transitionState: m, onClose: f } = e,
        p = (0, c.L)(t, n, A),
        E = (0, c.F)(t, n, h),
        { reportFalsePositive: y, isReportFalsePositiveLoading: v } = (0, d.d)({
            onSuccess: () => (0, u.o)(f),
            onError: () => {
                (0, l.P0)((0, a.o)(g.intl.string(g.t.R0RpRX), r.Ck.FAILURE));
            },
            report: () => {
                (0, s.XR)(
                    t,
                    n,
                    p.map((e) => e.id),
                    E.map((e) => e.id),
                );
            },
        });
    return (
        p.length > 0 || E.length > 0 || f(),
        (0, i.jsx)(u.k, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: v,
            analyticsContext: o.SW.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: y,
            attachmentPreview: 1 === p.length && 0 === E.length ? p[0] : void 0,
            embedPreview: 1 === E.length && 0 === p.length ? E[0] : void 0,
            transitionState: m,
            onClose: f,
        })
    );
}
