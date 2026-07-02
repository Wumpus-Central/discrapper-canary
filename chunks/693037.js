n.d(t, { r: () => A });
var i = n(64700),
    a = n(17928),
    s = n(183972),
    r = n(919466),
    l = n(297966),
    c = n(469778),
    o = n(777376),
    d = n(674567),
    u = n(202541);
let m = {
    [l.gR.INITIAL]: o.p.CLAIM_IN_PROGRESS,
    [l.gR.AWAITING_ACTIVATION]: o.p.CLAIM_IN_PROGRESS,
    [l.gR.ACTIVATED]: o.p.CLAIMED,
    [l.gR.FAILED]: o.p.NOT_CLAIMED,
    [l.gR.EXPIRED]: o.p.NOT_CLAIMED,
    [l.gR.CANCELLATION_PENDING]: o.p.CANCELLATION_IN_PROGRESS,
};
function A() {
    let e = (0, d.V)(),
        t = (0, a.bG)([c.A], () => c.A.isFetchedForApplication(u.tv)),
        { activationStatus: n, activationRequestState: A } = (0, a.cf)([r.A], () => ({
            activationStatus: r.A.getActivationStatus(),
            activationRequestState: r.A.getRequestState(),
        })),
        g = t && (null != n ? n.state === l.gR.CANCELLATION_PENDING : A === l.db.NOT_FETCHED);
    return (
        i.useEffect(() => {
            e === d.s.HAS_ACCESS && g && (0, s.x6)(l.n9.XGPP);
        }, [e, g]),
        (function (e) {
            let { activationStatus: t, activationRequestState: n } = e,
                i = n === l.db.FETCHING || n === l.db.CANCELLING;
            return n === l.db.NOT_FETCHED || n === l.db.FETCHING
                ? { status: o.p.NOT_CLAIMED, redirect: null, requestInProgress: !0 }
                : {
                      status: null != t ? m[t.state] : o.p.NOT_CLAIMED,
                      redirect: t?.redirect ?? null,
                      requestInProgress: i,
                  };
        })({ activationStatus: n, activationRequestState: A })
    );
}
