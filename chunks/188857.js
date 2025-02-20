n.d(t, { Z: () => h }), n(47120);
var r = n(192379),
    i = n(790333),
    l = n.n(i),
    s = n(442837),
    a = n(749210),
    o = n(911969),
    c = n(271383),
    d = n(594174),
    u = n(823379);
function h(e, t) {
    let n = (0, s.Wu)([c.ZP], () => c.ZP.getMemberIds(e), [e]),
        [i, h] = r.useMemo(
            () =>
                l()(
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
        r.useEffect(() => {
            h.length > 0 && null != e && a.Z.requestMembersById(e, h, !1);
        }, [h, e]),
        (0, s.Wu)([d.default], () => i.map(d.default.getUser).filter(u.lm), [i])
    );
}
