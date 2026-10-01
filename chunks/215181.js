n.d(e, { v6: () => i, lE: () => C, OI: () => P });
var I = n(582128),
    u = n(478104),
    N = n(17928),
    E = n(73153),
    l = n(573163),
    s = n(935208),
    c = n(531685),
    o = n(790782);
function r(t, e) {
    return 0 === t
        ? null
        : null != e && (s.default.getNonTimestampBits(e) & u.I.NEEDS_INPUT) != 0
          ? u.I.NEEDS_INPUT
          : u.I.FINISHED;
}
function C(t) {
    return (0, N.bG)(
        [l.Ay],
        () =>
            null == t
                ? null
                : r(l.Ay.getMentionCount(t, o.P.CONJURING_PROJECT), l.Ay.ackMessageId(t, o.P.CONJURING_PROJECT)),
        [t],
    );
}
function P() {
    return (0, N.cf)([l.Ay], () => {
        let t = !1,
            e = 0;
        for (let n of l.Ay.getResourceIds(o.P.CONJURING_PROJECT)) {
            let I = r(l.Ay.getMentionCount(n, o.P.CONJURING_PROJECT), l.Ay.ackMessageId(n, o.P.CONJURING_PROJECT));
            null != I && ((t = !0), I === u.I.NEEDS_INPUT && e++);
        }
        return { hasUnread: t, badgeCount: e };
    });
}
function i(t) {
    let e = null != C(t),
        n = (0, N.bG)([c.A], () => c.A.isFocused());
    I.useEffect(() => {
        null != t && e && n && E.h.dispatch({ type: "VIBEGRATIONS_PROJECT_ACK", projectId: t });
    }, [t, e, n]);
}
