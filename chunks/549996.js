var A = _(582128),
    n = _(855986),
    l = _(19191),
    T = _(158476),
    N = _(412260),
    E = _(852218);
_.d(
    e,
    {},
    {
        c: function (t) {
            return (function (t) {
                A.useEffect(() => {
                    (0, T.BE)();
                }, []);
                let e = (0, n.bG)([N.A, l.A], () => {
                        let e = t();
                        if (null == e) return null;
                        let _ = e.promotionId,
                            A = N.A.getPromotionByTypeAndId(E.pt.MARKETING_MOMENT, _);
                        if (A?.trialId != null) {
                            let t = l.A.getUserTrialOffer(A.trialId);
                            if (null == t || t.hasExpired) return null;
                        }
                        return e;
                    }),
                    _ = (0, n.bG)([N.A], () =>
                        N.A.getPromotionByTypeAndId(E.pt.MARKETING_MOMENT, e?.promotionId ?? ""),
                    ),
                    r = _?.endDate,
                    [O, R] = A.useState(!1),
                    I = A.useRef(null);
                return (
                    A.useEffect(() => {
                        if (null != r) {
                            let t = r.getTime() - Date.now();
                            return (
                                t > 0 && t < 864e5
                                    ? (R(!1),
                                      clearTimeout(I.current),
                                      (I.current = setTimeout(() => {
                                          R(!0);
                                      }, t)))
                                    : t <= 0 && R(!0),
                                () => {
                                    clearTimeout(I.current);
                                }
                            );
                        }
                        (R(!1), clearTimeout(I.current));
                    }, [r]),
                    O ? null : e
                );
            })(() => N.A.getMarketingComponentByType(t));
        },
    },
);
