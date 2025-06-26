t.d(n, { default: () => C }), t(388685);
var i = t(255367),
    s = t(73800),
    l = t(990547),
    a = t(481060),
    r = t(613734),
    o = t(409617),
    c = t(451426),
    d = t(384725),
    x = t(534044),
    m = t(670199),
    u = t(800530),
    _ = t(981631),
    h = t(704906);
function C(e) {
    let { classificationId: n, transitionState: t, initialSlide: C = u.Cs.SPEED_BUMP, onClose: p } = e,
        [N, g] = s.useState(C),
        { classification: j, isDsaEligible: I } = (0, r.YG)(null != n ? n : _.lds),
        k = (null == j ? void 0 : j.is_spam) || !1,
        E = (null == j ? void 0 : j.is_coppa) || !1,
        T = null == j ? void 0 : j.appeal_ingestion_type;
    s.useEffect(() => {
        g(C);
    }, [g, C]);
    let f = s.useCallback(() => {
            d.Z.close(), p();
        }, [p]),
        A = s.useCallback(() => {
            var e;
            let n = null == (e = u.JQ[N]) ? void 0 : e.next;
            n ? g(n) : f();
        }, [N, f]),
        S = s.useCallback(() => {
            var e;
            let n = null == (e = u.JQ[N]) ? void 0 : e.prev;
            n ? g(n) : f();
        }, [N, f]);
    return (0, i.jsx)(a.Y0X, {
        transitionState: t,
        disableTrack: !0,
        size: a.CgR.DYNAMIC,
        parentComponent: 'AppealIngestionModal',
        children: (0, i.jsx)('div', {
            className: h.container,
            children: (0, i.jsxs)(a.MyZ, {
                activeSlide: N,
                width: 500,
                children: [
                    (0, i.jsx)(a.Mi4, {
                        id: u.Cs.SPEED_BUMP,
                        impressionName: l.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
                        impressionProperties: u.ZW,
                        children: (0, i.jsx)(m.Z, {
                            classification: j,
                            onClose: f,
                            onNext: A,
                            isSpam: k,
                            isCoppa: E,
                            appealIngestionType: T,
                            isDsaEligible: I
                        })
                    }),
                    (0, i.jsx)(a.Mi4, {
                        id: u.Cs.COLLECT_SIGNAL,
                        impressionName: l.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
                        impressionProperties: u.ZW,
                        children: (0, i.jsx)(o.Z, {
                            isDsaEligible: I,
                            onClose: f,
                            onNext: A,
                            onBack: S
                        })
                    }),
                    (0, i.jsx)(a.Mi4, {
                        id: u.Cs.CONFIRM_SUBMISSION,
                        impressionName: l.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                        impressionProperties: u.ZW,
                        children: (0, i.jsx)(c.Z, {
                            isDsaEligible: I,
                            onClose: f,
                            onNext: A,
                            onBack: S
                        })
                    }),
                    (0, i.jsx)(a.Mi4, {
                        id: u.Cs.REQUEST_SENT,
                        impressionName: l.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
                        impressionProperties: u.ZW,
                        children: (0, i.jsx)(x.Z, { onNext: A })
                    })
                ]
            })
        })
    });
}
