n.d(t, { _f: () => c, xC: () => d });
var i,
    l = n(17928),
    s = n(36149),
    r = n(702841),
    a = n(900019),
    o = n(138054),
    d =
        (((i = {}).MARK_AS_FALSE_POSITIVE = "mark_as_false_positive"),
        (i.AGE_VERIFICATION_RETRY = "age_verification_retry"),
        (i.CONNECT_TO_TEEN = "connect_to_teen"),
        i);
function c(e, t) {
    let n = null != (0, r.bG)([a.A], () => a.A.getFpMessageInfo(e)),
        i = (0, s.YU)(t, e),
        d = null != (0, l.bG)([o.A], () => o.A.getPendingConnection()) && (0, s.lW)(t, e);
    return n ? "mark_as_false_positive" : i ? "age_verification_retry" : d ? "connect_to_teen" : void 0;
}
