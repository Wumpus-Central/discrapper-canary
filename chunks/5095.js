n.d(t, { _f: () => o, xC: () => s });
var i,
    l = n(36149),
    a = n(702841),
    r = n(900019),
    s =
        (((i = {}).MARK_AS_FALSE_POSITIVE = "mark_as_false_positive"),
        (i.AGE_VERIFICATION_RETRY = "age_verification_retry"),
        i);
function o(e, t) {
    let n = null != (0, a.bG)([r.A], () => r.A.getFpMessageInfo(e)),
        i = (0, l.YU)(t, e);
    return n ? "mark_as_false_positive" : i ? "age_verification_retry" : void 0;
}
