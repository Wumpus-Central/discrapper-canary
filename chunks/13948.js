"use strict";
n.d(t, { A: () => h });
var l = n(64700),
    i = n(508573),
    s = n.n(i),
    a = n(311907),
    r = n(686956),
    o = n(155718),
    d = n(696451),
    c = n(287809),
    u = n(403362);
function h(e, t) {
    let n = (0, a.yK)([d.Ay], () => d.Ay.getMemberIds(e), [e]),
        [i, h] = l.useMemo(
            () =>
                s()(
                    null == t
                        ? []
                        : Object.values(t)
                              .filter((e) => e.type === o.r2.MEMBER)
                              .map((e) => e.id),
                    (e) => n.includes(e),
                ),
            [t, n],
        );
    return (
        l.useEffect(() => {
            h.length > 0 && null != e && r.A.requestMembersById(e, h, !1);
        }, [h, e]),
        (0, a.yK)([c.default], () => i.map(c.default.getUser).filter(u.Vq), [i])
    );
}
