i.d(t, { default: () => A });
var n = i(627968),
    a = i(64700),
    s = i(110259),
    l = i(397927),
    r = i(985481),
    d = i(890811),
    c = i(766298),
    o = i(26095),
    x = i(700741),
    m = i(885737),
    g = i(239093),
    p = i(652215),
    N = i(217970);
function A(e) {
    let { classificationId: t, transitionState: i, initialSlide: A = g.yN.SPEED_BUMP, onClose: h } = e,
        [j, u] = a.useState(A),
        { classification: _, isDsaEligible: C } = (0, r.LJ)(t ?? p.dJq),
        E = _?.is_spam || !1,
        I = _?.is_coppa || !1,
        S = _?.appeal_ingestion_type;
    a.useEffect(() => {
        u(A);
    }, [u, A]);
    let T = a.useCallback(() => {
            o.A.close(), h();
        }, [h]),
        v = a.useCallback(() => {
            let e = g.A8[j]?.next;
            e ? u(e) : T();
        }, [j, T]),
        k = a.useCallback(() => {
            let e = g.A8[j]?.prev;
            e ? u(e) : T();
        }, [j, T]);
    return (0, n.jsx)(l.EOs, {
        "data-migration-pending": !0,
        transitionState: i,
        disableTrack: !0,
        size: l.rIJ.DYNAMIC,
        parentComponent: "AppealIngestionModal",
        children: (0, n.jsx)("div", {
            className: N.k,
            children: (0, n.jsxs)(l.tN_, {
                activeSlide: j,
                width: 500,
                children: [
                    (0, n.jsx)(l.q7S, {
                        id: g.yN.SPEED_BUMP,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
                        impressionProperties: g.nY,
                        children: (0, n.jsx)(m.A, {
                            classification: _,
                            onClose: T,
                            onNext: v,
                            isSpam: E,
                            isCoppa: I,
                            appealIngestionType: S,
                            isDsaEligible: C,
                        }),
                    }),
                    (0, n.jsx)(l.q7S, {
                        id: g.yN.COLLECT_SIGNAL,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
                        impressionProperties: g.nY,
                        children: (0, n.jsx)(d.A, { isDsaEligible: C, onClose: T, onNext: v, onBack: k }),
                    }),
                    (0, n.jsx)(l.q7S, {
                        id: g.yN.CONFIRM_SUBMISSION,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                        impressionProperties: g.nY,
                        children: (0, n.jsx)(c.A, { isDsaEligible: C, onClose: T, onNext: v, onBack: k }),
                    }),
                    (0, n.jsx)(l.q7S, {
                        id: g.yN.REQUEST_SENT,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
                        impressionProperties: g.nY,
                        children: (0, n.jsx)(x.A, { onNext: v }),
                    }),
                ],
            }),
        }),
    });
}
