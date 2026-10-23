l.d(t, { B5: () => p, S6: () => g, hY: () => h, qm: () => f });
var n = l(582128),
    a = l(17928),
    i = l(66834),
    r = l(696451),
    u = l(317525),
    s = l(287809),
    o = l(403362),
    d = l(695184),
    c = l(427262);
function f(e) {
    return (0, a.yK)([u.A], () => (null != e ? u.A.getSortedRoles(e) : []), [e]);
}
function p(e) {
    return (0, a.yK)(
        [r.Ay, s.default],
        () =>
            null != e
                ? r.Ay.getMemberIds(e)
                      .map((e) => s.default.getUser(e))
                      .filter(o.Vq)
                : [],
        [e],
    );
}
function h(e, t) {
    return (0, c.QV)(e, { identifiable: t ? "never" : "always" });
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    n.useEffect(() => {
        null != e && d.A.requestMembers(e, "", 25);
    }, [e]);
    let l = t.join(",");
    return (
        n.useEffect(() => {
            if (null == e || "" === l) return;
            let t = l.split(",").filter((t) => !r.Ay.isMember(e, t));
            t.length > 0 && i.A.requestMembersById(e, t);
        }, [e, l]),
        n.useCallback(
            (t) => {
                let l = t.trim();
                null != e && "" !== l && d.A.requestMembers(e, l, 25);
            },
            [e],
        )
    );
}
