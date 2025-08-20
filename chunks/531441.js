n.d(t, {
    OY: () => c,
    Sn: () => o,
    hQ: () => a,
    j4: () => l,
    lK: () => r,
    tG: () => s,
    wO: () => i,
});
var r = (function (e) {
        return (e.MESSAGE = "message"), e;
    })({}),
    i = (function (e) {
        return (e[(e.OWNER = 1)] = "OWNER"), (e[(e.MEMBER = 2)] = "MEMBER"), e;
    })({}),
    a = (function (e) {
        return (
            (e[(e.REVIEW_PENDING = 1)] = "REVIEW_PENDING"),
            (e[(e.CLASSIFICATION_UPHELD = 2)] = "CLASSIFICATION_UPHELD"),
            (e[(e.CLASSIFICATION_INVALIDATED = 3)] = "CLASSIFICATION_INVALIDATED"),
            e
        );
    })({}),
    o = (function (e) {
        return (
            (e[(e.ALL_GOOD = 100)] = "ALL_GOOD"),
            (e[(e.LIMITED = 200)] = "LIMITED"),
            (e[(e.VERY_LIMITED = 300)] = "VERY_LIMITED"),
            (e[(e.AT_RISK = 400)] = "AT_RISK"),
            (e[(e.SUSPENDED = 500)] = "SUSPENDED"),
            e
        );
    })({}),
    s = (function (e) {
        return (
            (e[(e.DSA_ELIGIBLE = 1)] = "DSA_ELIGIBLE"),
            (e[(e.IN_APP_ELIGIBLE = 2)] = "IN_APP_ELIGIBLE"),
            (e[(e.AGE_VERIFY_ELIGIBLE = 3)] = "AGE_VERIFY_ELIGIBLE"),
            e
        );
    })({}),
    l = (function (e) {
        return (
            (e[(e.WEBFORM = 0)] = "WEBFORM"), (e[(e.AGE_VERIFY = 1)] = "AGE_VERIFY"), (e[(e.IN_APP = 2)] = "IN_APP"), e
        );
    })({}),
    c = (function (e) {
        return (e[(e.PENDING = 0)] = "PENDING"), (e[(e.SUCCESS = 1)] = "SUCCESS"), (e[(e.FAILED = 2)] = "FAILED"), e;
    })({});
