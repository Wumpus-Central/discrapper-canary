n.d(t, { Nk: () => u, Px: () => c, gR: () => d, n9: () => o, p1: () => l });
var a,
    i,
    r,
    s,
    l =
        (((a = {}).NOT_CLAIMED = "NOT_CLAIMED"),
        (a.CLAIM_IN_PROGRESS = "CLAIM_IN_PROGRESS"),
        (a.CLAIMED = "CLAIMED"),
        (a.CANCELLATION_IN_PROGRESS = "CANCELLATION_IN_PROGRESS"),
        a),
    c =
        (((i = {}).NOT_FETCHED = "NOT_FETCHED"),
        (i.FETCHING = "FETCHING"),
        (i.FETCHED = "FETCHED"),
        (i.CANCELLING = "CANCELLING"),
        i),
    o = (((r = {})[(r.XGPP = 1)] = "XGPP"), r),
    d =
        (((s = {})[(s.INITIAL = 1)] = "INITIAL"),
        (s[(s.AWAITING_ACTIVATION = 2)] = "AWAITING_ACTIVATION"),
        (s[(s.ACTIVATED = 3)] = "ACTIVATED"),
        (s[(s.FAILED = 4)] = "FAILED"),
        (s[(s.EXPIRED = 5)] = "EXPIRED"),
        s);
function u(e) {
    return null != e && new Date(e.expires_at).getTime() > Date.now();
}
