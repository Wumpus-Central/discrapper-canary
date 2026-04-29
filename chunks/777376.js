i.d(t, { Nk: () => u, Px: () => c, gR: () => o, n9: () => d, p1: () => l });
var a,
    s,
    n,
    r,
    l =
        (((a = {}).NOT_CLAIMED = "NOT_CLAIMED"),
        (a.CLAIM_IN_PROGRESS = "CLAIM_IN_PROGRESS"),
        (a.CLAIMED = "CLAIMED"),
        (a.CANCELLATION_IN_PROGRESS = "CANCELLATION_IN_PROGRESS"),
        a),
    c =
        (((s = {}).NOT_FETCHED = "NOT_FETCHED"),
        (s.FETCHING = "FETCHING"),
        (s.FETCHED = "FETCHED"),
        (s.CANCELLING = "CANCELLING"),
        s),
    d = (((n = {})[(n.XGPP = 1)] = "XGPP"), n),
    o =
        (((r = {})[(r.INITIAL = 1)] = "INITIAL"),
        (r[(r.AWAITING_ACTIVATION = 2)] = "AWAITING_ACTIVATION"),
        (r[(r.ACTIVATED = 3)] = "ACTIVATED"),
        (r[(r.FAILED = 4)] = "FAILED"),
        (r[(r.EXPIRED = 5)] = "EXPIRED"),
        (r[(r.CANCELLATION_PENDING = 6)] = "CANCELLATION_PENDING"),
        r);
function u(e) {
    return null != e && new Date(e.expires_at).getTime() > Date.now();
}
