n.d(e, { default: () => h });
var t = n(627968),
    a = n(64700),
    s = n(110259),
    l = n(935462),
    r = n(430690),
    c = n(985481),
    d = n(890811),
    o = n(766298),
    x = n(26095),
    m = n(700741),
    g = n(885737),
    p = n(239093),
    N = n(652215),
    A = n(732217);
function h(i) {
    let { classificationId: e, transitionState: n, initialSlide: h = p.yN.SPEED_BUMP, onClose: j } = i,
        [E, u] = a.useState(h),
        { classification: _, isDsaEligible: C } = (0, c.LJ)(e ?? N.dJq),
        I = _?.is_spam || !1,
        S = _?.is_coppa || !1,
        v = _?.appeal_ingestion_type;
    a.useEffect(() => {
        u(h);
    }, [u, h]);
    let k = a.useCallback(() => {
            x.A.close(), j();
        }, [j]),
        L = a.useCallback(() => {
            let i = p.A8[E]?.next;
            null != i ? u(i) : k();
        }, [E, k]),
        T = a.useCallback(() => {
            let i = p.A8[E]?.prev;
            null != i ? u(i) : k();
        }, [E, k]);
    return (0, t.jsx)(l.EO, {
        "data-migration-pending": !0,
        transitionState: n,
        disableTrack: !0,
        size: l.rI.DYNAMIC,
        parentComponent: "AppealIngestionModal",
        children: (0, t.jsx)("div", {
            className: A.k,
            children: (0, t.jsxs)(r.t, {
                activeSlide: E,
                width: 500,
                children: [
                    (0, t.jsx)(r.q, {
                        id: p.yN.SPEED_BUMP,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
                        impressionProperties: p.nY,
                        children: (0, t.jsx)(g.A, {
                            classification: _,
                            onClose: k,
                            onNext: L,
                            isSpam: I,
                            isCoppa: S,
                            appealIngestionType: v,
                            isDsaEligible: C,
                        }),
                    }),
                    (0, t.jsx)(r.q, {
                        id: p.yN.COLLECT_SIGNAL,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
                        impressionProperties: p.nY,
                        children: (0, t.jsx)(d.A, { isDsaEligible: C, onClose: k, onNext: L, onBack: T }),
                    }),
                    (0, t.jsx)(r.q, {
                        id: p.yN.CONFIRM_SUBMISSION,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                        impressionProperties: p.nY,
                        children: (0, t.jsx)(o.A, { isDsaEligible: C, onClose: k, onNext: L, onBack: T }),
                    }),
                    (0, t.jsx)(r.q, {
                        id: p.yN.REQUEST_SENT,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
                        impressionProperties: p.nY,
                        children: (0, t.jsx)(m.A, { onNext: L }),
                    }),
                ],
            }),
        }),
    });
}
