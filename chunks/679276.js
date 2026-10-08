(n.r(t), n.d(t, { default: () => m }));
var i = n(477900);
n(582128);
var r = n(376357),
    s = n(135598),
    a = n(390248),
    o = n(279547),
    l = n(702841),
    d = n(232835),
    u = n(930125),
    c = n(282108),
    h = n(33358),
    p = n(961997),
    g = n(660183);
function m(e) {
    let { channelId: t, messageId: n, mediaItemUrl: m, embedId: f, transitionState: v, onClose: P } = e,
        A = (function (e, t, n) {
            let i = (0, l.bG)([d.A], () => d.A.getMessage(e, t)),
                r = (0, h.P)(i);
            if (null == i) return [];
            let s =
                void 0 !== n
                    ? (e) => e.url === n || e.id === n
                    : (e) => (0, c.qo)({ type: u.D.Attachment, media: e }, r);
            return i?.attachments?.filter(s) ?? [];
        })(t, n, m),
        C = (function (e, t, n) {
            let i = (0, l.bG)([d.A], () => d.A.getMessage(e, t)),
                r = (0, h.P)(i);
            if (null == i) return [];
            let s = void 0 !== n ? (e) => e.id === n : (e) => (0, c.qo)({ type: u.D.Embed, media: e }, r);
            return i?.embeds?.filter(s) ?? [];
        })(t, n, f),
        { reportFalsePositive: E, isReportFalsePositiveLoading: I } = (0, o.d)({
            onSuccess: () => (0, p.o)(P),
            onError: () => {
                (0, r.P0)((0, r.ox)(g.intl.string(g.t.R0RpRX), r.Ck.FAILURE));
            },
            report: () => {
                (0, s.XR)(
                    t,
                    n,
                    A.map((e) => e.id),
                    C.map((e) => e.id),
                );
            },
        });
    return (
        A.length > 0 || C.length > 0 || P(),
        (0, i.jsx)(p.k, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: I,
            analyticsContext: a.SW.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: E,
            attachmentPreview: 1 === A.length && 0 === C.length ? A[0] : void 0,
            embedPreview: 1 === C.length && 0 === A.length ? C[0] : void 0,
            transitionState: v,
            onClose: P,
        })
    );
}
