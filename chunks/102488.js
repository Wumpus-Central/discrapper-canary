var C = e(582128),
    r = e(855986),
    a = e(469778),
    E = e(183972),
    I = e(919466),
    _ = e(297966),
    n = e(727811),
    N = e(631368),
    l = e(682901);
let i = {
    [_.gR.INITIAL]: n.P.CLAIM_IN_PROGRESS,
    [_.gR.AWAITING_ACTIVATION]: n.P.CLAIM_IN_PROGRESS,
    [_.gR.ACTIVATED]: n.P.CLAIMED,
    [_.gR.FAILED]: n.P.NOT_CLAIMED,
    [_.gR.EXPIRED]: n.P.NOT_CLAIMED,
    [_.gR.CANCELLATION_PENDING]: n.P.CANCELLATION_IN_PROGRESS,
};
e.d(
    A,
    {},
    {
        L: function () {
            let t = (0, N.$)(),
                A = (0, r.bG)([a.A], () => a.A.isFetchedForApplication(l.tv)),
                { activationStatus: e, activationRequestState: L } = (0, r.cf)([I.A], () => ({
                    activationStatus: I.A.getActivationStatus(),
                    activationRequestState: I.A.getRequestState(),
                })),
                c = A && (null != e ? e.state === _.gR.CANCELLATION_PENDING : L === _.db.NOT_FETCHED);
            return (
                C.useEffect(() => {
                    t === N.C.HAS_ACCESS && c && (0, E.x6)(_.n9.XGPP);
                }, [t, c]),
                (function (t) {
                    let { activationStatus: A, activationRequestState: e } = t,
                        C = e === _.db.FETCHING || e === _.db.CANCELLING;
                    return e === _.db.NOT_FETCHED || e === _.db.FETCHING
                        ? { status: n.P.NOT_CLAIMED, redirect: null, requestInProgress: !0 }
                        : {
                              status: null != A ? i[A.state] : n.P.NOT_CLAIMED,
                              redirect: A?.redirect ?? null,
                              requestInProgress: C,
                          };
                })({ activationStatus: e, activationRequestState: L })
            );
        },
    },
);
