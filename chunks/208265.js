t.d(n, { default: () => _ }), t(47120);
var i = t(200651),
    s = t(192379),
    a = t(990547),
    l = t(481060),
    r = t(613734),
    o = t(409617),
    c = t(451426),
    d = t(384725),
    x = t(534044),
    m = t(670199),
    N = t(800530),
    u = t(981631),
    h = t(704906);
function _(e) {
    let { classificationId: n, transitionState: t, initialSlide: _ = N.Cs.SPEED_BUMP, onClose: C } = e,
        [p, g] = s.useState(_),
        { classification: j, isDsaEligible: I } = (0, r.YG)(null != n ? n : u.lds),
        k = (null == j ? void 0 : j.is_spam) || !1,
        E = (null == j ? void 0 : j.is_coppa) || !1;
    s.useEffect(() => {
        g(_);
    }, [g, _]);
    let T = s.useCallback(() => {
            d.Z.close(), C();
        }, [C]),
        f = s.useCallback(() => {
            var e;
            let n = null == (e = N.JQ[p]) ? void 0 : e.next;
            n ? g(n) : T();
        }, [p, T]),
        S = s.useCallback(() => {
            var e;
            let n = null == (e = N.JQ[p]) ? void 0 : e.prev;
            n ? g(n) : T();
        }, [p, T]);
    return (0, i.jsx)(l.Y0X, {
        transitionState: t,
        disableTrack: !0,
        size: l.CgR.DYNAMIC,
        children: (0, i.jsx)('div', {
            className: h.container,
            children: (0, i.jsxs)(l.MyZ, {
                activeSlide: p,
                width: 500,
                children: [
                    (0, i.jsx)(l.Mi4, {
                        id: N.Cs.SPEED_BUMP,
                        impressionName: a.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
                        impressionProperties: N.ZW,
                        children: (0, i.jsx)(m.Z, {
                            classification: j,
                            onClose: T,
                            onNext: f,
                            isSpam: k,
                            isCoppa: E,
                            isDsaEligible: I
                        })
                    }),
                    (0, i.jsx)(l.Mi4, {
                        id: N.Cs.COLLECT_SIGNAL,
                        impressionName: a.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
                        impressionProperties: N.ZW,
                        children: (0, i.jsx)(o.Z, {
                            isDsaEligible: I,
                            onClose: T,
                            onNext: f,
                            onBack: S
                        })
                    }),
                    (0, i.jsx)(l.Mi4, {
                        id: N.Cs.CONFIRM_SUBMISSION,
                        impressionName: a.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                        impressionProperties: N.ZW,
                        children: (0, i.jsx)(c.Z, {
                            isDsaEligible: I,
                            onClose: T,
                            onNext: f,
                            onBack: S
                        })
                    }),
                    (0, i.jsx)(l.Mi4, {
                        id: N.Cs.REQUEST_SENT,
                        impressionName: a.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
                        impressionProperties: N.ZW,
                        children: (0, i.jsx)(x.Z, { onNext: f })
                    })
                ]
            })
        })
    });
}
