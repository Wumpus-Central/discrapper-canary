n.d(e, { L: () => N });
var i = n(582128),
    A = n(17928),
    C = n(469778),
    d = n(183972),
    r = n(919466),
    a = n(297966),
    E = n(727811),
    I = n(631368),
    _ = n(202541);
let l = {
    [a.gR.INITIAL]: E.P.CLAIM_IN_PROGRESS,
    [a.gR.AWAITING_ACTIVATION]: E.P.CLAIM_IN_PROGRESS,
    [a.gR.ACTIVATED]: E.P.CLAIMED,
    [a.gR.FAILED]: E.P.NOT_CLAIMED,
    [a.gR.EXPIRED]: E.P.NOT_CLAIMED,
    [a.gR.CANCELLATION_PENDING]: E.P.CANCELLATION_IN_PROGRESS,
};
function N() {
    let t = (0, I.$)(),
        e = (0, A.bG)([C.A], () => C.A.isFetchedForApplication(_.tv)),
        { activationStatus: n, activationRequestState: N } = (0, A.cf)([r.A], () => ({
            activationStatus: r.A.getActivationStatus(),
            activationRequestState: r.A.getRequestState(),
        })),
        b = e && (null != n ? n.state === a.gR.CANCELLATION_PENDING : N === a.db.NOT_FETCHED);
    return (
        i.useEffect(() => {
            t === I.C.HAS_ACCESS && b && (0, d.x6)(a.n9.XGPP);
        }, [t, b]),
        (function (t) {
            let { activationStatus: e, activationRequestState: n } = t,
                i = n === a.db.FETCHING || n === a.db.CANCELLING;
            return n === a.db.NOT_FETCHED || n === a.db.FETCHING
                ? { status: E.P.NOT_CLAIMED, redirect: null, requestInProgress: !0 }
                : {
                      status: null != e ? l[e.state] : E.P.NOT_CLAIMED,
                      redirect: e?.redirect ?? null,
                      requestInProgress: i,
                  };
        })({ activationStatus: n, activationRequestState: N })
    );
}
