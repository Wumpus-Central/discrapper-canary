"use strict";
n.d(t, { Il: () => p, PN: () => h, RH: () => f, Wi: () => _, Xo: () => c, Z9: () => d, nU: () => E });
var i,
    r,
    s,
    a,
    o,
    l,
    u,
    c = (((i = {}).MESSAGE = "message"), i),
    d = (((r = {})[(r.OWNER = 1)] = "OWNER"), (r[(r.MEMBER = 2)] = "MEMBER"), r),
    _ =
        (((s = {})[(s.REVIEW_PENDING = 1)] = "REVIEW_PENDING"),
        (s[(s.CLASSIFICATION_UPHELD = 2)] = "CLASSIFICATION_UPHELD"),
        (s[(s.CLASSIFICATION_INVALIDATED = 3)] = "CLASSIFICATION_INVALIDATED"),
        s),
    h =
        (((a = {})[(a.ALL_GOOD = 100)] = "ALL_GOOD"),
        (a[(a.LIMITED = 200)] = "LIMITED"),
        (a[(a.VERY_LIMITED = 300)] = "VERY_LIMITED"),
        (a[(a.AT_RISK = 400)] = "AT_RISK"),
        (a[(a.SUSPENDED = 500)] = "SUSPENDED"),
        a),
    f =
        (((o = {})[(o.DSA_ELIGIBLE = 1)] = "DSA_ELIGIBLE"),
        (o[(o.IN_APP_ELIGIBLE = 2)] = "IN_APP_ELIGIBLE"),
        (o[(o.AGE_VERIFY_ELIGIBLE = 3)] = "AGE_VERIFY_ELIGIBLE"),
        (o[(o.AGE_VERIFY_GLOBAL_ELIGIBLE = 4)] = "AGE_VERIFY_GLOBAL_ELIGIBLE"),
        o),
    p =
        (((l = {})[(l.WEBFORM = 0)] = "WEBFORM"),
        (l[(l.AGE_VERIFY = 1)] = "AGE_VERIFY"),
        (l[(l.IN_APP = 2)] = "IN_APP"),
        l),
    E = (((u = {})[(u.PENDING = 0)] = "PENDING"), (u[(u.SUCCESS = 1)] = "SUCCESS"), (u[(u.FAILED = 2)] = "FAILED"), u);
