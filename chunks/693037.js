"use strict";
n.d(t, { r: () => h });
var i = n(64700),
    r = n(17928),
    s = n(183972),
    a = n(919466),
    o = n(297966),
    l = n(469778),
    u = n(777376),
    c = n(674567),
    d = n(202541);
let _ = {
    [o.gR.INITIAL]: u.p.CLAIM_IN_PROGRESS,
    [o.gR.AWAITING_ACTIVATION]: u.p.CLAIM_IN_PROGRESS,
    [o.gR.ACTIVATED]: u.p.CLAIMED,
    [o.gR.FAILED]: u.p.NOT_CLAIMED,
    [o.gR.EXPIRED]: u.p.NOT_CLAIMED,
    [o.gR.CANCELLATION_PENDING]: u.p.CANCELLATION_IN_PROGRESS,
};
function h() {
    let e = (0, c.V)(),
        t = (0, r.bG)([l.A], () => l.A.isFetchedForApplication(d.tv)),
        { activationStatus: n, activationRequestState: h } = (0, r.cf)([a.A], () => ({
            activationStatus: a.A.getActivationStatus(),
            activationRequestState: a.A.getRequestState(),
        })),
        f = t && (null != n ? n.state === o.gR.CANCELLATION_PENDING : h === o.db.NOT_FETCHED);
    return (
        i.useEffect(() => {
            e === c.s.HAS_ACCESS && f && (0, s.x6)(o.n9.XGPP);
        }, [e, f]),
        (function (e) {
            let { activationStatus: t, activationRequestState: n } = e,
                i = n === o.db.FETCHING || n === o.db.CANCELLING;
            return n === o.db.NOT_FETCHED || n === o.db.FETCHING
                ? { status: u.p.NOT_CLAIMED, redirect: null, requestInProgress: !0 }
                : {
                      status: null != t ? _[t.state] : u.p.NOT_CLAIMED,
                      redirect: t?.redirect ?? null,
                      requestInProgress: i,
                  };
        })({ activationStatus: n, activationRequestState: h })
    );
}
