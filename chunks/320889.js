n.d(t, { xC: () => d, _f: () => c });
var i,
    l = n(855986),
    s = n(424743),
    r = n(164636),
    a = n(705833),
    o = n(138054),
    d =
        (((i = {}).MARK_AS_FALSE_POSITIVE = "mark_as_false_positive"),
        (i.AGE_VERIFICATION_RETRY = "age_verification_retry"),
        (i.CONNECT_TO_TEEN = "connect_to_teen"),
        (i.AGE_VERIFICATION_MANUAL_REVIEW = "age_verification_manual_review"),
        i);
function c(e, t) {
    let n = null != (0, r.bG)([a.A], () => a.A.getFpMessageInfo(e)),
        i = (0, s.YU)(t, e),
        d = null != (0, l.bG)([o.A], () => o.A.getPendingConnection()) && (0, s.lW)(t, e);
    return n ? "mark_as_false_positive" : i ? "age_verification_retry" : d ? "connect_to_teen" : void 0;
}
