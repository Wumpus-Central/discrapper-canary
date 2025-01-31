t.d(n, { default: () => _ }), t(47120);
var i = t(200651),
    s = t(192379),
    l = t(990547),
    a = t(481060),
    r = t(613734),
    o = t(409617),
    c = t(451426),
    d = t(384725),
    x = t(534044),
    m = t(670199),
    u = t(800530),
    C = t(981631),
    h = t(676566);
function _(e) {
    let { classificationId: n, transitionState: t, initialSlide: _ = u.Cs.SPEED_BUMP, onClose: N } = e,
        [p, g] = s.useState(_),
        { classification: j, isDsaEligible: I } = (0, r.YG)(null != n ? n : C.lds),
        k = (null == j ? void 0 : j.is_spam) || !1,
        E = (null == j ? void 0 : j.is_coppa) || !1;
    s.useEffect(() => {
        g(_);
    }, [g, _]);
    let T = s.useCallback(() => {
            d.Z.close(), N();
        }, [N]),
        v = s.useCallback(() => {
            var e;
            let n = null === (e = u.JQ[p]) || void 0 === e ? void 0 : e.next;
            n ? g(n) : T();
        }, [p, T]),
        f = s.useCallback(() => {
            var e;
            let n = null === (e = u.JQ[p]) || void 0 === e ? void 0 : e.prev;
            n ? g(n) : T();
        }, [p, T]);
    return (0, i.jsx)(a.Y0X, {
        transitionState: t,
        disableTrack: !0,
        size: a.CgR.DYNAMIC,
        children: (0, i.jsx)('div', {
            className: h.container,
            children: (0, i.jsxs)(a.MyZ, {
                activeSlide: p,
                width: 500,
                children: [
                    (0, i.jsx)(a.Mi4, {
                        id: u.Cs.SPEED_BUMP,
                        impressionName: l.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
                        impressionProperties: u.ZW,
                        children: (0, i.jsx)(m.Z, {
                            classification: j,
                            onClose: T,
                            onNext: v,
                            isSpam: k,
                            isCoppa: E,
                            isDsaEligible: I
                        })
                    }),
                    (0, i.jsx)(a.Mi4, {
                        id: u.Cs.COLLECT_SIGNAL,
                        impressionName: l.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
                        impressionProperties: u.ZW,
                        children: (0, i.jsx)(o.Z, {
                            isDsaEligible: I,
                            onClose: T,
                            onNext: v,
                            onBack: f
                        })
                    }),
                    (0, i.jsx)(a.Mi4, {
                        id: u.Cs.CONFIRM_SUBMISSION,
                        impressionName: l.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                        impressionProperties: u.ZW,
                        children: (0, i.jsx)(c.Z, {
                            isDsaEligible: I,
                            onClose: T,
                            onNext: v,
                            onBack: f
                        })
                    }),
                    (0, i.jsx)(a.Mi4, {
                        id: u.Cs.REQUEST_SENT,
                        impressionName: l.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
                        impressionProperties: u.ZW,
                        children: (0, i.jsx)(x.Z, { onNext: v })
                    })
                ]
            })
        })
    });
}
