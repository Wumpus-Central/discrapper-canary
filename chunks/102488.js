A.d(e, { L: () => u });
var C = A(582128),
    E = A(17928),
    r = A(469778),
    I = A(183972),
    _ = A(919466),
    a = A(297966),
    N = A(727811),
    n = A(631368),
    l = A(202541);
let L = {
    [a.gR.INITIAL]: N.P.CLAIM_IN_PROGRESS,
    [a.gR.AWAITING_ACTIVATION]: N.P.CLAIM_IN_PROGRESS,
    [a.gR.ACTIVATED]: N.P.CLAIMED,
    [a.gR.FAILED]: N.P.NOT_CLAIMED,
    [a.gR.EXPIRED]: N.P.NOT_CLAIMED,
    [a.gR.CANCELLATION_PENDING]: N.P.CANCELLATION_IN_PROGRESS,
};
function u() {
    let t = (0, n.$)(),
        e = (0, E.bG)([r.A], () => r.A.isFetchedForApplication(l.tv)),
        { activationStatus: A, activationRequestState: u } = (0, E.cf)([_.A], () => ({
            activationStatus: _.A.getActivationStatus(),
            activationRequestState: _.A.getRequestState(),
        })),
        c = e && (null != A ? A.state === a.gR.CANCELLATION_PENDING : u === a.db.NOT_FETCHED);
    return (
        C.useEffect(() => {
            t === n.C.HAS_ACCESS && c && (0, I.x6)(a.n9.XGPP);
        }, [t, c]),
        (function (t) {
            let { activationStatus: e, activationRequestState: A } = t,
                C = A === a.db.FETCHING || A === a.db.CANCELLING;
            return A === a.db.NOT_FETCHED || A === a.db.FETCHING
                ? { status: N.P.NOT_CLAIMED, redirect: null, requestInProgress: !0 }
                : {
                      status: null != e ? L[e.state] : N.P.NOT_CLAIMED,
                      redirect: e?.redirect ?? null,
                      requestInProgress: C,
                  };
        })({ activationStatus: A, activationRequestState: u })
    );
}
