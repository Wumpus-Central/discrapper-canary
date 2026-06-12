n.r(t), n.d(t, { default: () => P });
var i = n(627968);
n(64700);
var r = n(691540),
    s = n(857250),
    a = n(97483),
    l = n(135598),
    o = n(390248),
    d = n(279547),
    h = n(702841),
    u = n(232835),
    p = n(930125),
    c = n(282108),
    g = n(33358),
    m = n(961997),
    v = n(375708);
function P(e) {
    let { channelId: t, messageId: n, mediaItemUrl: P, embedId: A, transitionState: C, onClose: E } = e,
        I = ((e, t, n) => {
            let i = (0, h.bG)([u.A], () => u.A.getMessage(e, t)),
                r = (0, g.P)(i);
            if (null == i) return [];
            let s =
                void 0 !== n
                    ? (e) => e.url === n || e.id === n
                    : (e) => (0, c.qo)({ type: p.D.Attachment, media: e }, r);
            return i?.attachments?.filter(s) ?? [];
        })(t, n, P),
        b = ((e, t, n) => {
            let i = (0, h.bG)([u.A], () => u.A.getMessage(e, t)),
                r = (0, g.P)(i);
            if (null == i) return [];
            let s = void 0 !== n ? (e) => e.id === n : (e) => (0, c.qo)({ type: p.D.Embed, media: e }, r);
            return i?.embeds?.filter(s) ?? [];
        })(t, n, A),
        { reportFalsePositive: f, isReportFalsePositiveLoading: R } = (0, d.d)({
            onSuccess: () => (0, m.o)(E),
            onError: () => {
                (0, r.P0)((0, s.o)(v.intl.string(v.t.R0RpRX), a.Ck.FAILURE));
            },
            report: () => {
                (0, l.XR)(
                    t,
                    n,
                    I.map((e) => e.id),
                    b.map((e) => e.id),
                );
            },
        });
    return (
        I.length > 0 || b.length > 0 || E(),
        (0, i.jsx)(m.k, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: R,
            analyticsContext: o.SW.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: f,
            attachmentPreview: 1 === I.length && 0 === b.length ? I[0] : void 0,
            embedPreview: 1 === b.length && 0 === I.length ? b[0] : void 0,
            transitionState: C,
            onClose: E,
        })
    );
}
