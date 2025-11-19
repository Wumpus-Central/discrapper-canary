i.d(e, { default: () => h }), i(388685);
var t = i(54381),
    a = i(473749),
    s = i(990547),
    l = i(481060),
    r = i(613734),
    o = i(409617),
    c = i(451426),
    d = i(384725),
    x = i(534044),
    m = i(670199),
    g = i(800530),
    p = i(981631),
    u = i(149390);
function h(n) {
    let { classificationId: e, transitionState: i, initialSlide: h = g.Cs.SPEED_BUMP, onClose: N } = n,
        [C, j] = a.useState(h),
        { classification: _, isDsaEligible: E } = (0, r.YG)(null != e ? e : p.lds),
        I = (null == _ ? void 0 : _.is_spam) || !1,
        v = (null == _ ? void 0 : _.is_coppa) || !1,
        T = null == _ ? void 0 : _.appeal_ingestion_type;
    a.useEffect(() => {
        j(h);
    }, [j, h]);
    let S = a.useCallback(() => {
            d.Z.close(), N();
        }, [N]),
        A = a.useCallback(() => {
            var n;
            let e = null == (n = g.JQ[C]) ? void 0 : n.next;
            e ? j(e) : S();
        }, [C, S]),
        k = a.useCallback(() => {
            var n;
            let e = null == (n = g.JQ[C]) ? void 0 : n.prev;
            e ? j(e) : S();
        }, [C, S]);
    return (0, t.jsx)(l.Y0X, {
        "data-migration-pending": !0,
        transitionState: i,
        disableTrack: !0,
        size: l.CgR.DYNAMIC,
        parentComponent: "AppealIngestionModal",
        children: (0, t.jsx)("div", {
            className: u.container,
            children: (0, t.jsxs)(l.MyZ, {
                activeSlide: C,
                width: 500,
                children: [
                    (0, t.jsx)(l.Mi4, {
                        id: g.Cs.SPEED_BUMP,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
                        impressionProperties: g.ZW,
                        children: (0, t.jsx)(m.Z, {
                            classification: _,
                            onClose: S,
                            onNext: A,
                            isSpam: I,
                            isCoppa: v,
                            appealIngestionType: T,
                            isDsaEligible: E,
                        }),
                    }),
                    (0, t.jsx)(l.Mi4, {
                        id: g.Cs.COLLECT_SIGNAL,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
                        impressionProperties: g.ZW,
                        children: (0, t.jsx)(o.Z, {
                            isDsaEligible: E,
                            onClose: S,
                            onNext: A,
                            onBack: k,
                        }),
                    }),
                    (0, t.jsx)(l.Mi4, {
                        id: g.Cs.CONFIRM_SUBMISSION,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                        impressionProperties: g.ZW,
                        children: (0, t.jsx)(c.Z, {
                            isDsaEligible: E,
                            onClose: S,
                            onNext: A,
                            onBack: k,
                        }),
                    }),
                    (0, t.jsx)(l.Mi4, {
                        id: g.Cs.REQUEST_SENT,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
                        impressionProperties: g.ZW,
                        children: (0, t.jsx)(x.Z, { onNext: A }),
                    }),
                ],
            }),
        }),
    });
}
