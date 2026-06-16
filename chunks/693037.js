a.d(t, { r: () => m });
var s = a(64700),
    i = a(17928),
    n = a(469778),
    r = a(276666),
    l = a(545600),
    c = a(777376),
    o = a(674567),
    d = a(788868);
let u = {
    [c.gR.INITIAL]: c.p1.CLAIM_IN_PROGRESS,
    [c.gR.AWAITING_ACTIVATION]: c.p1.CLAIM_IN_PROGRESS,
    [c.gR.ACTIVATED]: c.p1.CLAIMED,
    [c.gR.FAILED]: c.p1.NOT_CLAIMED,
    [c.gR.EXPIRED]: c.p1.NOT_CLAIMED,
    [c.gR.CANCELLATION_PENDING]: c.p1.CANCELLATION_IN_PROGRESS,
};
function m() {
    let e = (0, o.V)(),
        t = (0, i.bG)([n.A], () => n.A.isFetchedForApplication(d.tv)),
        { activationStatus: a, activationRequestState: m } = (0, i.cf)([l.A], () => ({
            activationStatus: l.A.getActivationStatus(),
            activationRequestState: l.A.getRequestState(),
        })),
        A = t && (null != a ? a.state === c.gR.CANCELLATION_PENDING : m === c.Px.NOT_FETCHED);
    return (
        s.useEffect(() => {
            e === o.s.NITRO && A && (0, r.x6)(c.n9.XGPP);
        }, [e, A]),
        (function (e) {
            let { activationStatus: t, activationRequestState: a } = e,
                s = a === c.Px.FETCHING || a === c.Px.CANCELLING;
            return a === c.Px.NOT_FETCHED || a === c.Px.FETCHING
                ? { status: c.p1.NOT_CLAIMED, redirect: null, requestInProgress: !0 }
                : {
                      status: null != t ? u[t.state] : c.p1.NOT_CLAIMED,
                      redirect: t?.redirect ?? null,
                      requestInProgress: s,
                  };
        })({ activationStatus: a, activationRequestState: m })
    );
}
