(t.d(n, { default: () => p }), t(388685));
var i = t(255367),
    s = t(73800),
    a = t(990547),
    l = t(481060),
    r = t(613734),
    o = t(409617),
    c = t(451426),
    d = t(384725),
    x = t(534044),
    m = t(670199),
    u = t(800530),
    _ = t(981631),
    h = t(704906);
function p(e) {
    let { classificationId: n, transitionState: t, initialSlide: p = u.Cs.SPEED_BUMP, onClose: C } = e,
        [N, g] = s.useState(p),
        { classification: j, isDsaEligible: I } = (0, r.YG)(null != n ? n : _.lds),
        E = (null == j ? void 0 : j.is_spam) || !1,
        T = (null == j ? void 0 : j.is_coppa) || !1,
        v = null == j ? void 0 : j.appeal_ingestion_type;
    s.useEffect(() => {
        g(p);
    }, [g, p]);
    let f = s.useCallback(() => {
            (d.Z.close(), C());
        }, [C]),
        S = s.useCallback(() => {
            var e;
            let n = null == (e = u.JQ[N]) ? void 0 : e.next;
            n ? g(n) : f();
        }, [N, f]),
        k = s.useCallback(() => {
            var e;
            let n = null == (e = u.JQ[N]) ? void 0 : e.prev;
            n ? g(n) : f();
        }, [N, f]);
    return (0, i.jsx)(l.Y0X, {
        transitionState: t,
        disableTrack: !0,
        size: l.CgR.DYNAMIC,
        parentComponent: 'AppealIngestionModal',
        children: (0, i.jsx)('div', {
            className: h.container,
            children: (0, i.jsxs)(l.MyZ, {
                activeSlide: N,
                width: 500,
                children: [
                    (0, i.jsx)(l.Mi4, {
                        id: u.Cs.SPEED_BUMP,
                        impressionName: a.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
                        impressionProperties: u.ZW,
                        children: (0, i.jsx)(m.Z, {
                            classification: j,
                            onClose: f,
                            onNext: S,
                            isSpam: E,
                            isCoppa: T,
                            appealIngestionType: v,
                            isDsaEligible: I
                        })
                    }),
                    (0, i.jsx)(l.Mi4, {
                        id: u.Cs.COLLECT_SIGNAL,
                        impressionName: a.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
                        impressionProperties: u.ZW,
                        children: (0, i.jsx)(o.Z, {
                            isDsaEligible: I,
                            onClose: f,
                            onNext: S,
                            onBack: k
                        })
                    }),
                    (0, i.jsx)(l.Mi4, {
                        id: u.Cs.CONFIRM_SUBMISSION,
                        impressionName: a.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                        impressionProperties: u.ZW,
                        children: (0, i.jsx)(c.Z, {
                            isDsaEligible: I,
                            onClose: f,
                            onNext: S,
                            onBack: k
                        })
                    }),
                    (0, i.jsx)(l.Mi4, {
                        id: u.Cs.REQUEST_SENT,
                        impressionName: a.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
                        impressionProperties: u.ZW,
                        children: (0, i.jsx)(x.Z, { onNext: S })
                    })
                ]
            })
        })
    });
}
