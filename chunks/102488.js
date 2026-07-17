A.d(e, { L: () => c });
var r = A(64700),
    I = A(17928),
    a = A(469778),
    C = A(183972),
    E = A(919466),
    _ = A(297966),
    l = A(727811),
    N = A(631368),
    n = A(202541);
let u = {
    [_.gR.INITIAL]: l.P.CLAIM_IN_PROGRESS,
    [_.gR.AWAITING_ACTIVATION]: l.P.CLAIM_IN_PROGRESS,
    [_.gR.ACTIVATED]: l.P.CLAIMED,
    [_.gR.FAILED]: l.P.NOT_CLAIMED,
    [_.gR.EXPIRED]: l.P.NOT_CLAIMED,
    [_.gR.CANCELLATION_PENDING]: l.P.CANCELLATION_IN_PROGRESS,
};
function c() {
    let t = (0, N.$)(),
        e = (0, I.bG)([a.A], () => a.A.isFetchedForApplication(n.tv)),
        { activationStatus: A, activationRequestState: c } = (0, I.cf)([E.A], () => ({
            activationStatus: E.A.getActivationStatus(),
            activationRequestState: E.A.getRequestState(),
        })),
        i = e && (null != A ? A.state === _.gR.CANCELLATION_PENDING : c === _.db.NOT_FETCHED);
    return (
        r.useEffect(() => {
            t === N.C.HAS_ACCESS && i && (0, C.x6)(_.n9.XGPP);
        }, [t, i]),
        (function (t) {
            let { activationStatus: e, activationRequestState: A } = t,
                r = A === _.db.FETCHING || A === _.db.CANCELLING;
            return A === _.db.NOT_FETCHED || A === _.db.FETCHING
                ? { status: l.P.NOT_CLAIMED, redirect: null, requestInProgress: !0 }
                : {
                      status: null != e ? u[e.state] : l.P.NOT_CLAIMED,
                      redirect: e?.redirect ?? null,
                      requestInProgress: r,
                  };
        })({ activationStatus: A, activationRequestState: c })
    );
}
