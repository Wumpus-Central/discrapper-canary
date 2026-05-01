"use strict";
n.d(t, { r: () => _ });
var i = n(64700),
    r = n(17928),
    s = n(469778),
    a = n(276666),
    o = n(545600),
    l = n(777376),
    u = n(674567),
    c = n(788868);
let d = {
    [l.gR.INITIAL]: l.p1.CLAIM_IN_PROGRESS,
    [l.gR.AWAITING_ACTIVATION]: l.p1.CLAIM_IN_PROGRESS,
    [l.gR.ACTIVATED]: l.p1.CLAIMED,
    [l.gR.FAILED]: l.p1.NOT_CLAIMED,
    [l.gR.EXPIRED]: l.p1.NOT_CLAIMED,
    [l.gR.CANCELLATION_PENDING]: l.p1.CANCELLATION_IN_PROGRESS,
};
function _() {
    let e = (0, u.V)(),
        t = (0, r.bG)([s.A], () => s.A.isFetchedForApplication(c.tv)),
        { activationStatus: n, activationRequestState: _ } = (0, r.cf)([o.A], () => ({
            activationStatus: o.A.getActivationStatus(),
            activationRequestState: o.A.getRequestState(),
        })),
        f = t && (null != n ? n.state === l.gR.CANCELLATION_PENDING : _ === l.Px.NOT_FETCHED);
    return (
        i.useEffect(() => {
            e === u.s.NITRO && f && (0, a.x6)(l.n9.XGPP);
        }, [e, f]),
        (function (e) {
            let { activationStatus: t, activationRequestState: n } = e,
                i = n === l.Px.FETCHING || n === l.Px.CANCELLING;
            return n === l.Px.NOT_FETCHED || n === l.Px.FETCHING
                ? { status: l.p1.NOT_CLAIMED, redirect: null, requestInProgress: !0 }
                : {
                      status: null != t ? d[t.state] : l.p1.NOT_CLAIMED,
                      redirect: t?.redirect ?? null,
                      requestInProgress: i,
                  };
        })({ activationStatus: n, activationRequestState: _ })
    );
}
