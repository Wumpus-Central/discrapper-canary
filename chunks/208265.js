t.r(n),
    t.d(n, {
        default: function () {
            return N;
        }
    }),
    t(47120);
var i = t(200651),
    l = t(192379),
    a = t(990547),
    s = t(481060),
    o = t(613734),
    r = t(409617),
    c = t(451426),
    d = t(384725),
    u = t(534044),
    x = t(670199),
    m = t(800530),
    C = t(981631),
    h = t(676566);
function N(e) {
    let { classificationId: n, transitionState: t, initialSlide: N = m.Cs.SPEED_BUMP, onClose: p } = e,
        [g, _] = l.useState(N),
        { classification: j, isDsaEligible: b } = (0, o.YG)(null != n ? n : C.lds),
        I = (null == j ? void 0 : j.is_spam) || !1,
        E = (null == j ? void 0 : j.is_coppa) || !1;
    l.useEffect(() => {
        _(N);
    }, [_, N]);
    let T = l.useCallback(() => {
            d.Z.close(), p();
        }, [p]),
        S = l.useCallback(() => {
            var e;
            let n = null === (e = m.JQ[g]) || void 0 === e ? void 0 : e.next;
            n ? _(n) : T();
        }, [g, T]),
        v = l.useCallback(() => {
            var e;
            let n = null === (e = m.JQ[g]) || void 0 === e ? void 0 : e.prev;
            n ? _(n) : T();
        }, [g, T]);
    return (0, i.jsx)(s.ModalRoot, {
        transitionState: t,
        disableTrack: !0,
        size: s.ModalSize.DYNAMIC,
        children: (0, i.jsx)('div', {
            className: h.container,
            children: (0, i.jsxs)(s.Slides, {
                activeSlide: g,
                width: 500,
                children: [
                    (0, i.jsx)(s.Slide, {
                        id: m.Cs.SPEED_BUMP,
                        impressionName: a.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
                        impressionProperties: m.ZW,
                        children: (0, i.jsx)(x.Z, {
                            classification: j,
                            onClose: T,
                            onNext: S,
                            isSpam: I,
                            isCoppa: E,
                            isDsaEligible: b
                        })
                    }),
                    (0, i.jsx)(s.Slide, {
                        id: m.Cs.COLLECT_SIGNAL,
                        impressionName: a.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
                        impressionProperties: m.ZW,
                        children: (0, i.jsx)(r.Z, {
                            isDsaEligible: b,
                            onClose: T,
                            onNext: S,
                            onBack: v
                        })
                    }),
                    (0, i.jsx)(s.Slide, {
                        id: m.Cs.CONFIRM_SUBMISSION,
                        impressionName: a.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                        impressionProperties: m.ZW,
                        children: (0, i.jsx)(c.Z, {
                            isDsaEligible: b,
                            onClose: T,
                            onNext: S,
                            onBack: v
                        })
                    }),
                    (0, i.jsx)(s.Slide, {
                        id: m.Cs.REQUEST_SENT,
                        impressionName: a.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
                        impressionProperties: m.ZW,
                        children: (0, i.jsx)(u.Z, { onNext: S })
                    })
                ]
            })
        })
    });
}
