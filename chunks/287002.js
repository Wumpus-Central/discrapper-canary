(e.r(n), e.d(n, { default: () => E }));
var i = e(477900);
e(582128);
var a = e(702841),
    l = e(376357),
    s = e(104217),
    r = e(135598),
    o = e(390248),
    c = e(900019),
    u = e(279547),
    d = e(961997),
    I = e(660183);
function E(t) {
    let { channelId: n, messageId: e, transitionState: E, onClose: _ } = t,
        C = (0, a.bG)([c.A], () => c.A.getFpMessageInfo(e)),
        p = C.attachments.map((t) => t.id),
        h = C.attachments.map((t) => t.filename),
        { reportFalsePositive: A, isReportFalsePositiveLoading: S } = (0, u.d)({
            onSuccess: () => {
                ((0, d.o)(_), s.A.disableFalsePositiveButton(n, e));
            },
            onError: () => {
                (0, l.P0)((0, l.ox)(I.intl.string(I.t.R0RpRX), l.Ck.FAILURE));
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
            isReportFalsePositiveLoading: S,
            analyticsContext: o.SW.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
            onConfirmPress: A,
            transitionState: E,
            onClose: _,
        })
    );
}
