n.d(t, { Z: () => h }), n(47120);
var i = n(192379),
    l = n(790333),
    s = n.n(l),
    a = n(442837),
    r = n(749210),
    o = n(911969),
    d = n(271383),
    c = n(594174),
    u = n(823379);
function h(e, t) {
    let n = (0, a.Wu)([d.ZP], () => d.ZP.getMemberIds(e), [e]),
        [l, h] = i.useMemo(
            () =>
                s()(
                    null == t
                        ? []
                        : Object.values(t)
                              .filter((e) => e.type === o.BN.MEMBER)
                              .map((e) => e.id),
                    (e) => n.includes(e)
                ),
            [t, n]
        );
    return (
        i.useEffect(() => {
            h.length > 0 && null != e && r.Z.requestMembersById(e, h, !1);
        }, [h, e]),
        (0, a.Wu)([c.default], () => l.map(c.default.getUser).filter(u.lm), [l])
    );
}
