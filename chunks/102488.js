n.d(e, { L: () => b });
var i = n(582128),
    A = n(17928),
    d = n(469778),
    r = n(183972),
    C = n(919466),
    a = n(297966),
    E = n(727811),
    l = n(631368),
    N = n(202541);
let I = {
    [a.gR.INITIAL]: E.P.CLAIM_IN_PROGRESS,
    [a.gR.AWAITING_ACTIVATION]: E.P.CLAIM_IN_PROGRESS,
    [a.gR.ACTIVATED]: E.P.CLAIMED,
    [a.gR.FAILED]: E.P.NOT_CLAIMED,
    [a.gR.EXPIRED]: E.P.NOT_CLAIMED,
    [a.gR.CANCELLATION_PENDING]: E.P.CANCELLATION_IN_PROGRESS,
};
function b() {
    let t = (0, l.$)(),
        e = (0, A.bG)([d.A], () => d.A.isFetchedForApplication(N.tv)),
        { activationStatus: n, activationRequestState: b } = (0, A.cf)([C.A], () => ({
            activationStatus: C.A.getActivationStatus(),
            activationRequestState: C.A.getRequestState(),
        })),
        h = e && (null != n ? n.state === a.gR.CANCELLATION_PENDING : b === a.db.NOT_FETCHED);
    return (
        i.useEffect(() => {
            t === l.C.HAS_ACCESS && h && (0, r.x6)(a.n9.XGPP);
        }, [t, h]),
        (function (t) {
            let { activationStatus: e, activationRequestState: n } = t,
                i = n === a.db.FETCHING || n === a.db.CANCELLING;
            return n === a.db.NOT_FETCHED || n === a.db.FETCHING
                ? { status: E.P.NOT_CLAIMED, redirect: null, requestInProgress: !0 }
                : {
                      status: null != e ? I[e.state] : E.P.NOT_CLAIMED,
                      redirect: e?.redirect ?? null,
                      requestInProgress: i,
                  };
        })({ activationStatus: n, activationRequestState: b })
    );
}
