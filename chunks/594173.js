n.d(t, {
    aD: () => o,
    ro: () => a,
});
var r = n(81643),
    i = n(703751),
    o = (function (e) {
        return (
            (e.MARK_AS_FALSE_POSITIVE = "mark_as_false_positive"),
            (e.AGE_VERIFICATION_RETRY = "age_verification_retry"),
            e
        );
    })({});
function a(e, t) {
    let n = (0, i.r)(e),
        o = (0, r.pY)(t, e);
    return n ? "mark_as_false_positive" : o ? "age_verification_retry" : void 0;
}
