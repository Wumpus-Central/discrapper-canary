n.r(t), n.d(t, { default: () => v });
var i = n(627968);
n(64700);
var r = n(691540),
    s = n(857250),
    a = n(97483),
    o = n(135598),
    l = n(390248),
    d = n(279547),
    u = n(702841),
    c = n(232835),
    h = n(930125),
    p = n(282108),
    g = n(33358),
    m = n(961997),
    f = n(375708);
function v(e) {
    let { channelId: t, messageId: n, mediaItemUrl: v, embedId: P, transitionState: A, onClose: C } = e,
        E = (function (e, t, n) {
            let i = (0, u.bG)([c.A], () => c.A.getMessage(e, t)),
                r = (0, g.P)(i);
            if (null == i) return [];
            let s =
                void 0 !== n
                    ? (e) => e.url === n || e.id === n
                    : (e) => (0, p.qo)({ type: h.D.Attachment, media: e }, r);
            return i?.attachments?.filter(s) ?? [];
        })(t, n, v),
        I = (function (e, t, n) {
            let i = (0, u.bG)([c.A], () => c.A.getMessage(e, t)),
                r = (0, g.P)(i);
            if (null == i) return [];
            let s = void 0 !== n ? (e) => e.id === n : (e) => (0, p.qo)({ type: h.D.Embed, media: e }, r);
            return i?.embeds?.filter(s) ?? [];
        })(t, n, P),
        { reportFalsePositive: b, isReportFalsePositiveLoading: R } = (0, d.d)({
            onSuccess: () => (0, m.o)(C),
            onError: () => {
                (0, r.P0)((0, s.o)(f.intl.string(f.t.R0RpRX), a.Ck.FAILURE));
            },
            report: () => {
                (0, o.XR)(
                    t,
                    n,
                    E.map((e) => e.id),
                    I.map((e) => e.id),
                );
            },
        });
    return (
        E.length > 0 || I.length > 0 || C(),
        (0, i.jsx)(m.k, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: R,
            analyticsContext: l.SW.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: b,
            attachmentPreview: 1 === E.length && 0 === I.length ? E[0] : void 0,
            embedPreview: 1 === I.length && 0 === E.length ? I[0] : void 0,
            transitionState: A,
            onClose: C,
        })
    );
}
