n.d(t, { B5: () => p, S6: () => g, hY: () => h, qm: () => f });
var l = n(582128),
    i = n(17928),
    a = n(66834),
    r = n(696451),
    u = n(317525),
    s = n(287809),
    o = n(403362),
    d = n(695184),
    c = n(427262);
function f(e) {
    return (0, i.yK)([u.A], () => (null != e ? u.A.getSortedRoles(e) : []), [e]);
}
function p(e) {
    return (0, i.yK)(
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
    let n = (0, c.QV)(e, { mode: "username", identifiable: t ? "never" : "always" });
    return `${n}${!t && !e.hasUniqueUsername() ? `#${e.discriminator}` : ""}`;
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    l.useEffect(() => {
        null != e && d.A.requestMembers(e, "", 25);
    }, [e]);
    let n = t.join(",");
    return (
        l.useEffect(() => {
            if (null == e || "" === n) return;
            let t = n.split(",").filter((t) => !r.Ay.isMember(e, t));
            t.length > 0 && a.A.requestMembersById(e, t);
        }, [e, n]),
        l.useCallback(
            (t) => {
                let n = t.trim();
                null != e && "" !== n && d.A.requestMembers(e, n, 25);
            },
            [e],
        )
    );
}
