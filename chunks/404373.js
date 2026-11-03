n.d(t, { E1: () => A, tz: () => u, wB: () => E, xp: () => _ });
var i = n(582128),
    r = n(17928),
    a = n(73153);
n(617617);
var s = n(573163),
    l = n(935208);
(n(260498), n(189714));
var o = n(790782);
function d(e) {
    a.h.dispatch({ type: "CONJURE_PROJECT_ACK", projectId: e });
}
function c(e, t) {
    return e > 0 || (null != t && 0 !== l.default.getNonTimestampBits(t));
}
function u(e) {
    return c(s.Ay.getMentionCount(e, o.P.CONJURING_PROJECT), s.Ay.ackMessageId(e, o.P.CONJURING_PROJECT));
}
function _(e) {
    return s.Ay.getMentionCount(e, o.P.CONJURING_PROJECT);
}
function E(e) {
    i.useLayoutEffect(() => () => d(e), [e]);
}
function A(e, t) {
    let n = (0, r.bG)(
        [s.Ay],
        () =>
            null != e && c(s.Ay.getMentionCount(e, o.P.CONJURING_PROJECT), s.Ay.ackMessageId(e, o.P.CONJURING_PROJECT)),
        [e],
    );
    i.useEffect(() => {
        null != e && n && t && d(e);
    }, [e, n, t]);
}
