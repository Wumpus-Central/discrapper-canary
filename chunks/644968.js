l.d(t, { B5: () => m, S6: () => h, hY: () => g, qm: () => f });
var n = l(582128),
    a = l(17928),
    r = l(66834),
    i = l(696451),
    s = l(317525),
    u = l(287809),
    o = l(403362),
    d = l(695184),
    c = l(427262);
function f(e) {
    return (0, a.yK)([s.A], () => (null != e ? s.A.getSortedRoles(e) : []), [e]);
}
function m(e) {
    return (0, a.yK)(
        [i.Ay, u.default],
        () =>
            null != e
                ? i.Ay.getMemberIds(e)
                      .map((e) => u.default.getUser(e))
                      .filter(o.Vq)
                : [],
        [e],
    );
}
function g(e, t) {
    return (0, c.QV)(e, { identifiable: t ? "never" : "always" });
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    n.useEffect(() => {
        null != e && d.A.requestMembers(e, "", 25);
    }, [e]);
    let l = t.join(",");
    return (
        n.useEffect(() => {
            if (null == e || "" === l) return;
            let t = l.split(",").filter((t) => !i.Ay.isMember(e, t));
            t.length > 0 && r.A.requestMembersById(e, t);
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
