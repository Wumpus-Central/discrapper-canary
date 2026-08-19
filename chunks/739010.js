"use strict";
n.d(t, { Il: () => h, PN: () => E, RH: () => A, Wi: () => _, Xo: () => c, Z9: () => u, nU: () => I });
var i,
    r,
    a,
    s,
    l,
    o,
    d,
    c = (((i = {}).MESSAGE = "message"), i),
    u = (((r = {})[(r.OWNER = 1)] = "OWNER"), (r[(r.MEMBER = 2)] = "MEMBER"), r),
    _ =
        (((a = {})[(a.REVIEW_PENDING = 1)] = "REVIEW_PENDING"),
        (a[(a.CLASSIFICATION_UPHELD = 2)] = "CLASSIFICATION_UPHELD"),
        (a[(a.CLASSIFICATION_INVALIDATED = 3)] = "CLASSIFICATION_INVALIDATED"),
        a),
    E =
        (((s = {})[(s.ALL_GOOD = 100)] = "ALL_GOOD"),
        (s[(s.LIMITED = 200)] = "LIMITED"),
        (s[(s.VERY_LIMITED = 300)] = "VERY_LIMITED"),
        (s[(s.AT_RISK = 400)] = "AT_RISK"),
        (s[(s.SUSPENDED = 500)] = "SUSPENDED"),
        s),
    A =
        (((l = {})[(l.DSA_ELIGIBLE = 1)] = "DSA_ELIGIBLE"),
        (l[(l.IN_APP_ELIGIBLE = 2)] = "IN_APP_ELIGIBLE"),
        (l[(l.AGE_VERIFY_ELIGIBLE = 3)] = "AGE_VERIFY_ELIGIBLE"),
        (l[(l.AGE_VERIFY_GLOBAL_ELIGIBLE = 4)] = "AGE_VERIFY_GLOBAL_ELIGIBLE"),
        l),
    h =
        (((o = {})[(o.WEBFORM = 0)] = "WEBFORM"),
        (o[(o.AGE_VERIFY = 1)] = "AGE_VERIFY"),
        (o[(o.IN_APP = 2)] = "IN_APP"),
        o),
    I = (((d = {})[(d.PENDING = 0)] = "PENDING"), (d[(d.SUCCESS = 1)] = "SUCCESS"), (d[(d.FAILED = 2)] = "FAILED"), d);
