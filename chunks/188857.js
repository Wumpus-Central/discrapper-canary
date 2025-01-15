n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(192379),
    l = n(790333),
    s = n.n(l),
    r = n(442837),
    a = n(749210),
    o = n(911969),
    d = n(271383),
    c = n(594174),
    u = n(823379);
function h(e, t) {
    let n = (0, r.Wu)([d.ZP], () => d.ZP.getMemberIds(e), [e]),
        [l, h] = i.useMemo(() => {
            var e;
            return s()(
                null == (e = t)
                    ? []
                    : Object.values(e)
                          .filter((e) => e.type === o.BN.MEMBER)
                          .map((e) => e.id),
                (e) => n.includes(e)
            );
        }, [t, n]);
    return (
        i.useEffect(() => {
            h.length > 0 && null != e && a.Z.requestMembersById(e, h, !1);
        }, [h, e]),
        (0, r.Wu)([c.default], () => l.map(c.default.getUser).filter(u.lm), [l])
    );
}
