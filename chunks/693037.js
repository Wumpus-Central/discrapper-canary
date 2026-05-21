n.d(t, { r: () => E });
var i = n(64700),
    l = n(17928),
    r = n(469778),
    s = n(276666),
    a = n(545600),
    c = n(777376),
    o = n(674567),
    d = n(788868);
let u = {
    [c.gR.INITIAL]: c.p1.CLAIM_IN_PROGRESS,
    [c.gR.AWAITING_ACTIVATION]: c.p1.CLAIM_IN_PROGRESS,
    [c.gR.ACTIVATED]: c.p1.CLAIMED,
    [c.gR.FAILED]: c.p1.NOT_CLAIMED,
    [c.gR.EXPIRED]: c.p1.NOT_CLAIMED,
    [c.gR.CANCELLATION_PENDING]: c.p1.CANCELLATION_IN_PROGRESS,
};
function E() {
    let e = (0, o.V)(),
        t = (0, l.bG)([r.A], () => r.A.isFetchedForApplication(d.tv)),
        { activationStatus: n, activationRequestState: E } = (0, l.cf)([a.A], () => ({
            activationStatus: a.A.getActivationStatus(),
            activationRequestState: a.A.getRequestState(),
        })),
        A = t && (null != n ? n.state === c.gR.CANCELLATION_PENDING : E === c.Px.NOT_FETCHED);
    return (
        i.useEffect(() => {
            e === o.s.NITRO && A && (0, s.x6)(c.n9.XGPP);
        }, [e, A]),
        (function (e) {
            let { activationStatus: t, activationRequestState: n } = e,
                i = n === c.Px.FETCHING || n === c.Px.CANCELLING;
            return n === c.Px.NOT_FETCHED || n === c.Px.FETCHING
                ? { status: c.p1.NOT_CLAIMED, redirect: null, requestInProgress: !0 }
                : {
                      status: null != t ? u[t.state] : c.p1.NOT_CLAIMED,
                      redirect: t?.redirect ?? null,
                      requestInProgress: i,
                  };
        })({ activationStatus: n, activationRequestState: E })
    );
}
