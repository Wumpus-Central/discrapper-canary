n.d(t, { B: () => o, q: () => s });
var l = n(17928),
    i = n(696451),
    a = n(317525),
    r = n(287809),
    u = n(403362);
function s(e) {
    return (0, l.yK)([a.A], () => (null != e ? a.A.getSortedRoles(e) : []), [e]);
}
function o(e) {
    return (0, l.yK)(
        [i.Ay, r.default],
        () =>
            null != e
                ? i.Ay.getMemberIds(e)
                      .map((e) => r.default.getUser(e))
                      .filter(u.Vq)
                : [],
        [e],
    );
}
