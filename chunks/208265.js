e.d(t, { default: () => h }), e(388685);
var i = e(54381),
    a = e(473749),
    s = e(990547),
    l = e(481060),
    r = e(613734),
    o = e(409617),
    c = e(451426),
    d = e(384725),
    x = e(534044),
    m = e(670199),
    g = e(800530),
    u = e(981631),
    p = e(149390);
function h(n) {
    let { classificationId: t, transitionState: e, initialSlide: h = g.Cs.SPEED_BUMP, onClose: N } = n,
        [C, j] = a.useState(h),
        { classification: _, isDsaEligible: E } = (0, r.YG)(null != t ? t : u.lds),
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
            let t = null == (n = g.JQ[C]) ? void 0 : n.next;
            t ? j(t) : S();
        }, [C, S]),
        k = a.useCallback(() => {
            var n;
            let t = null == (n = g.JQ[C]) ? void 0 : n.prev;
            t ? j(t) : S();
        }, [C, S]);
    return (0, i.jsx)(l.Y0X, {
        "data-migration-pending": !0,
        transitionState: e,
        disableTrack: !0,
        size: l.CgR.DYNAMIC,
        parentComponent: "AppealIngestionModal",
        children: (0, i.jsx)("div", {
            className: p.container,
            children: (0, i.jsxs)(l.MyZ, {
                activeSlide: C,
                width: 500,
                children: [
                    (0, i.jsx)(l.Mi4, {
                        id: g.Cs.SPEED_BUMP,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
                        impressionProperties: g.ZW,
                        children: (0, i.jsx)(m.Z, {
                            classification: _,
                            onClose: S,
                            onNext: A,
                            isSpam: I,
                            isCoppa: v,
                            appealIngestionType: T,
                            isDsaEligible: E,
                        }),
                    }),
                    (0, i.jsx)(l.Mi4, {
                        id: g.Cs.COLLECT_SIGNAL,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
                        impressionProperties: g.ZW,
                        children: (0, i.jsx)(o.Z, {
                            isDsaEligible: E,
                            onClose: S,
                            onNext: A,
                            onBack: k,
                        }),
                    }),
                    (0, i.jsx)(l.Mi4, {
                        id: g.Cs.CONFIRM_SUBMISSION,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                        impressionProperties: g.ZW,
                        children: (0, i.jsx)(c.Z, {
                            isDsaEligible: E,
                            onClose: S,
                            onNext: A,
                            onBack: k,
                        }),
                    }),
                    (0, i.jsx)(l.Mi4, {
                        id: g.Cs.REQUEST_SENT,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
                        impressionProperties: g.ZW,
                        children: (0, i.jsx)(x.Z, { onNext: A }),
                    }),
                ],
            }),
        }),
    });
}
