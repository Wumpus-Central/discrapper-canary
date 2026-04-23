n.r(e), n.d(e, { default: () => c });
var i = n(627968);
n(64700);
var r = n(691540),
    l = n(857250),
    E = n(97483),
    o = n(135598),
    a = n(390248),
    s = n(279547),
    _ = n(702841),
    I = n(232835),
    A = n(930125),
    d = n(282108),
    C = n(33358),
    u = n(961997),
    R = n(985018);
function c(t) {
    let { channelId: e, messageId: n, mediaItemUrl: c, embedId: L, transitionState: M, onClose: g } = t,
        f = ((t, e, n) => {
            let i = (0, _.bG)([I.A], () => I.A.getMessage(t, e)),
                r = (0, C.P)(i);
            if (null == i) return [];
            let l =
                void 0 !== n
                    ? (t) => t.url === n || t.id === n
                    : (t) => (0, d.qo)({ type: A.D.Attachment, media: t }, r);
            return i?.attachments?.filter(l) ?? [];
        })(e, n, c),
        T = ((t, e, n) => {
            let i = (0, _.bG)([I.A], () => I.A.getMessage(t, e)),
                r = (0, C.P)(i);
            if (null == i) return [];
            let l = void 0 !== n ? (t) => t.id === n : (t) => (0, d.qo)({ type: A.D.Embed, media: t }, r);
            return i?.embeds?.filter(l) ?? [];
        })(e, n, L),
        { reportFalsePositive: h, isReportFalsePositiveLoading: P } = (0, s.d)({
            onSuccess: () => (0, u.o)(g),
            onError: () => {
                (0, r.P0)((0, l.o)(R.intl.string(R.t.R0RpRX), E.Ck.FAILURE));
            },
            report: () => {
                (0, o.XR)(
                    e,
                    n,
                    f.map((t) => t.id),
                    T.map((t) => t.id),
                );
            },
        });
    return (
        f.length > 0 || T.length > 0 || g(),
        (0, i.jsx)(u.k, {
            messageId: n,
            channelId: e,
            isReportFalsePositiveLoading: P,
            analyticsContext: a.SW.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: h,
            attachmentPreview: 1 === f.length && 0 === T.length ? f[0] : void 0,
            embedPreview: 1 === T.length && 0 === f.length ? T[0] : void 0,
            transitionState: M,
            onClose: g,
        })
    );
}
