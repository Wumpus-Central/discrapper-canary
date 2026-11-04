var C = e(582128),
    E = e(855986),
    r = e(469778),
    I = e(183972),
    _ = e(919466),
    a = e(297966),
    N = e(727811),
    n = e(631368),
    l = e(682901);
let L = {
    [a.gR.INITIAL]: N.P.CLAIM_IN_PROGRESS,
    [a.gR.AWAITING_ACTIVATION]: N.P.CLAIM_IN_PROGRESS,
    [a.gR.ACTIVATED]: N.P.CLAIMED,
    [a.gR.FAILED]: N.P.NOT_CLAIMED,
    [a.gR.EXPIRED]: N.P.NOT_CLAIMED,
    [a.gR.CANCELLATION_PENDING]: N.P.CANCELLATION_IN_PROGRESS,
};
e.d(
    A,
    {},
    {
        L: function () {
            let t = (0, n.$)(),
                A = (0, E.bG)([r.A], () => r.A.isFetchedForApplication(l.tv)),
                { activationStatus: e, activationRequestState: u } = (0, E.cf)([_.A], () => ({
                    activationStatus: _.A.getActivationStatus(),
                    activationRequestState: _.A.getRequestState(),
                })),
                c = A && (null != e ? e.state === a.gR.CANCELLATION_PENDING : u === a.db.NOT_FETCHED);
            return (
                C.useEffect(() => {
                    t === n.C.HAS_ACCESS && c && (0, I.x6)(a.n9.XGPP);
                }, [t, c]),
                (function (t) {
                    let { activationStatus: A, activationRequestState: e } = t,
                        C = e === a.db.FETCHING || e === a.db.CANCELLING;
                    return e === a.db.NOT_FETCHED || e === a.db.FETCHING
                        ? { status: N.P.NOT_CLAIMED, redirect: null, requestInProgress: !0 }
                        : {
                              status: null != A ? L[A.state] : N.P.NOT_CLAIMED,
                              redirect: A?.redirect ?? null,
                              requestInProgress: C,
                          };
                })({ activationStatus: e, activationRequestState: u })
            );
        },
    },
);
