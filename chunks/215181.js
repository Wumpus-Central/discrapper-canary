n.d(e, { v6: () => O, lE: () => A, OI: () => r });
var I = n(582128),
    N = n(478104),
    u = n(17928),
    s = n(73153),
    E = n(617617),
    l = n(573163),
    c = n(935208),
    C = n(531685),
    i = n(313007),
    o = n(790782);
function P(t, e, n) {
    return n || 0 === t
        ? null
        : null != e && (c.default.getNonTimestampBits(e) & N.I.NEEDS_INPUT) != 0
          ? N.I.NEEDS_INPUT
          : N.I.FINISHED;
}
function A(t) {
    return (0, u.bG)(
        [l.Ay, E.A],
        () =>
            null == t
                ? null
                : P(
                      l.Ay.getMentionCount(t, o.P.CONJURING_PROJECT),
                      l.Ay.ackMessageId(t, o.P.CONJURING_PROJECT),
                      (0, i.cI)(E.A.settings, t),
                  ),
        [t],
    );
}
function r() {
    return (0, u.cf)([l.Ay, E.A], () => {
        let t = !1,
            e = 0;
        for (let n of l.Ay.getResourceIds(o.P.CONJURING_PROJECT)) {
            let I = P(
                l.Ay.getMentionCount(n, o.P.CONJURING_PROJECT),
                l.Ay.ackMessageId(n, o.P.CONJURING_PROJECT),
                (0, i.cI)(E.A.settings, n),
            );
            null != I && ((t = !0), I === N.I.NEEDS_INPUT && e++);
        }
        return { hasUnread: t, badgeCount: e };
    });
}
function O(t) {
    let e = (0, u.bG)([l.Ay], () => null != t && l.Ay.getMentionCount(t, o.P.CONJURING_PROJECT) > 0, [t]),
        n = (0, u.bG)([C.A], () => C.A.isFocused());
    I.useEffect(() => {
        null != t && e && n && s.h.dispatch({ type: "VIBEGRATIONS_PROJECT_ACK", projectId: t });
    }, [t, e, n]);
}
