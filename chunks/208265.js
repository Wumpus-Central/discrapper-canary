t.d(n, { default: () => h }), t(388685);
var i = t(255367),
    a = t(73800),
    s = t(990547),
    l = t(481060),
    r = t(613734),
    o = t(409617),
    c = t(451426),
    d = t(384725),
    x = t(534044),
    m = t(670199),
    p = t(800530),
    u = t(981631),
    _ = t(140379);
function h(e) {
    let { classificationId: n, transitionState: t, initialSlide: h = p.Cs.SPEED_BUMP, onClose: g } = e,
        [C, N] = a.useState(h),
        { classification: j, isDsaEligible: I } = (0, r.YG)(null != n ? n : u.lds),
        E = (null == j ? void 0 : j.is_spam) || !1,
        T = (null == j ? void 0 : j.is_coppa) || !1,
        v = null == j ? void 0 : j.appeal_ingestion_type;
    a.useEffect(() => {
        N(h);
    }, [N, h]);
    let f = a.useCallback(() => {
            d.Z.close(), g();
        }, [g]),
        S = a.useCallback(() => {
            var e;
            let n = null == (e = p.JQ[C]) ? void 0 : e.next;
            n ? N(n) : f();
        }, [C, f]),
        k = a.useCallback(() => {
            var e;
            let n = null == (e = p.JQ[C]) ? void 0 : e.prev;
            n ? N(n) : f();
        }, [C, f]);
    return (0, i.jsx)(l.Y0X, {
        "data-migration-pending": !0,
        transitionState: t,
        disableTrack: !0,
        size: l.CgR.DYNAMIC,
        parentComponent: "AppealIngestionModal",
        children: (0, i.jsx)("div", {
            className: _.container,
            children: (0, i.jsxs)(l.MyZ, {
                activeSlide: C,
                width: 500,
                children: [
                    (0, i.jsx)(l.Mi4, {
                        id: p.Cs.SPEED_BUMP,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
                        impressionProperties: p.ZW,
                        children: (0, i.jsx)(m.Z, {
                            classification: j,
                            onClose: f,
                            onNext: S,
                            isSpam: E,
                            isCoppa: T,
                            appealIngestionType: v,
                            isDsaEligible: I,
                        }),
                    }),
                    (0, i.jsx)(l.Mi4, {
                        id: p.Cs.COLLECT_SIGNAL,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
                        impressionProperties: p.ZW,
                        children: (0, i.jsx)(o.Z, {
                            isDsaEligible: I,
                            onClose: f,
                            onNext: S,
                            onBack: k,
                        }),
                    }),
                    (0, i.jsx)(l.Mi4, {
                        id: p.Cs.CONFIRM_SUBMISSION,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                        impressionProperties: p.ZW,
                        children: (0, i.jsx)(c.Z, {
                            isDsaEligible: I,
                            onClose: f,
                            onNext: S,
                            onBack: k,
                        }),
                    }),
                    (0, i.jsx)(l.Mi4, {
                        id: p.Cs.REQUEST_SENT,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
                        impressionProperties: p.ZW,
                        children: (0, i.jsx)(x.Z, { onNext: S }),
                    }),
                ],
            }),
        }),
    });
}
