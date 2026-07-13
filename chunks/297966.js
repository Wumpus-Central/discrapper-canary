"use strict";
n.d(t, { db: () => l, gR: () => o, n9: () => s });
var i,
    r,
    a,
    s = (((i = {})[(i.XGPP = 1)] = "XGPP"), i),
    l =
        (((r = {}).NOT_FETCHED = "NOT_FETCHED"),
        (r.FETCHING = "FETCHING"),
        (r.FETCHED = "FETCHED"),
        (r.CANCELLING = "CANCELLING"),
        r),
    o =
        (((a = {})[(a.INITIAL = 1)] = "INITIAL"),
        (a[(a.AWAITING_ACTIVATION = 2)] = "AWAITING_ACTIVATION"),
        (a[(a.ACTIVATED = 3)] = "ACTIVATED"),
        (a[(a.FAILED = 4)] = "FAILED"),
        (a[(a.EXPIRED = 5)] = "EXPIRED"),
        (a[(a.CANCELLATION_PENDING = 6)] = "CANCELLATION_PENDING"),
        a);
