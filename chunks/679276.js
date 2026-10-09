(n.r(t), n.d(t, { default: () => m }));
var i = n(477900);
n(582128);
var r = n(858899),
    a = n(135598),
    s = n(390248),
    l = n(279547),
    o = n(702841),
    d = n(232835),
    c = n(930125),
    u = n(282108),
    h = n(33358),
    p = n(961997),
    g = n(660183);
function m(e) {
    let { channelId: t, messageId: n, mediaItemUrl: m, embedId: v, transitionState: f, onClose: P } = e,
        b = (function (e, t, n) {
            let i = (0, o.bG)([d.A], () => d.A.getMessage(e, t)),
                r = (0, h.P)(i);
            if (null == i) return [];
            let a =
                void 0 !== n
                    ? (e) => e.url === n || e.id === n
                    : (e) => (0, u.qo)({ type: c.D.Attachment, media: e }, r);
            return i?.attachments?.filter(a) ?? [];
        })(t, n, m),
        A = (function (e, t, n) {
            let i = (0, o.bG)([d.A], () => d.A.getMessage(e, t)),
                r = (0, h.P)(i);
            if (null == i) return [];
            let a = void 0 !== n ? (e) => e.id === n : (e) => (0, u.qo)({ type: c.D.Embed, media: e }, r);
            return i?.embeds?.filter(a) ?? [];
        })(t, n, v),
        { reportFalsePositive: C, isReportFalsePositiveLoading: E } = (0, l.d)({
            onSuccess: () => (0, p.o)(P),
            onError: () => {
                (0, r.P0)({ text: g.intl.string(g.t.R0RpRX), variant: "critical" });
            },
            report: () => {
                (0, a.XR)(
                    t,
                    n,
                    b.map((e) => e.id),
                    A.map((e) => e.id),
                );
            },
        });
    return (
        b.length > 0 || A.length > 0 || P(),
        (0, i.jsx)(p.k, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: E,
            analyticsContext: s.SW.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: C,
            attachmentPreview: 1 === b.length && 0 === A.length ? b[0] : void 0,
            embedPreview: 1 === A.length && 0 === b.length ? A[0] : void 0,
            transitionState: f,
            onClose: P,
        })
    );
}
