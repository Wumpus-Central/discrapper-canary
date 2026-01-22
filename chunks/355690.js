n.d(i, { default: () => u }), n(896048);
var t = n(627968),
    a = n(64700),
    s = n(110259),
    l = n(397927),
    r = n(985481),
    d = n(890811),
    c = n(766298),
    o = n(26095),
    x = n(700741),
    m = n(885737),
    g = n(239093),
    p = n(652215),
    N = n(277000);
function u(e) {
    let { classificationId: i, transitionState: n, initialSlide: u = g.yN.SPEED_BUMP, onClose: A } = e,
        [h, j] = a.useState(u),
        { classification: _, isDsaEligible: C } = (0, r.LJ)(null != i ? i : p.dJq),
        E = (null == _ ? void 0 : _.is_spam) || !1,
        I = (null == _ ? void 0 : _.is_coppa) || !1,
        v = null == _ ? void 0 : _.appeal_ingestion_type;
    a.useEffect(() => {
        j(u);
    }, [j, u]);
    let S = a.useCallback(() => {
            o.A.close(), A();
        }, [A]),
        T = a.useCallback(() => {
            var e;
            let i = null == (e = g.A8[h]) ? void 0 : e.next;
            i ? j(i) : S();
        }, [h, S]),
        k = a.useCallback(() => {
            var e;
            let i = null == (e = g.A8[h]) ? void 0 : e.prev;
            i ? j(i) : S();
        }, [h, S]);
    return (0, t.jsx)(l.EOs, {
        "data-migration-pending": !0,
        transitionState: n,
        disableTrack: !0,
        size: l.rIJ.DYNAMIC,
        parentComponent: "AppealIngestionModal",
        children: (0, t.jsx)("div", {
            className: N.k,
            children: (0, t.jsxs)(l.tN_, {
                activeSlide: h,
                width: 500,
                children: [
                    (0, t.jsx)(l.q7S, {
                        id: g.yN.SPEED_BUMP,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
                        impressionProperties: g.nY,
                        children: (0, t.jsx)(m.A, {
                            classification: _,
                            onClose: S,
                            onNext: T,
                            isSpam: E,
                            isCoppa: I,
                            appealIngestionType: v,
                            isDsaEligible: C,
                        }),
                    }),
                    (0, t.jsx)(l.q7S, {
                        id: g.yN.COLLECT_SIGNAL,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
                        impressionProperties: g.nY,
                        children: (0, t.jsx)(d.A, {
                            isDsaEligible: C,
                            onClose: S,
                            onNext: T,
                            onBack: k,
                        }),
                    }),
                    (0, t.jsx)(l.q7S, {
                        id: g.yN.CONFIRM_SUBMISSION,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                        impressionProperties: g.nY,
                        children: (0, t.jsx)(c.A, {
                            isDsaEligible: C,
                            onClose: S,
                            onNext: T,
                            onBack: k,
                        }),
                    }),
                    (0, t.jsx)(l.q7S, {
                        id: g.yN.REQUEST_SENT,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
                        impressionProperties: g.nY,
                        children: (0, t.jsx)(x.A, { onNext: T }),
                    }),
                ],
            }),
        }),
    });
}
