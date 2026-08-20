n.d(t, { _f: () => d, xC: () => c });
var i,
    l = n(17928),
    s = n(931374),
    a = n(702841),
    r = n(900019),
    o = n(138054),
    c =
        (((i = {}).MARK_AS_FALSE_POSITIVE = "mark_as_false_positive"),
        (i.AGE_VERIFICATION_RETRY = "age_verification_retry"),
        (i.CONNECT_TO_TEEN = "connect_to_teen"),
        i);
function d(e, t) {
    let n = null != (0, a.bG)([r.A], () => r.A.getFpMessageInfo(e)),
        i = (0, s.YU)(t, e),
        c = null != (0, l.bG)([o.A], () => o.A.getPendingConnection()) && (0, s.lW)(t, e);
    return n ? "mark_as_false_positive" : i ? "age_verification_retry" : c ? "connect_to_teen" : void 0;
}
