r.d(t, { P: () => s }), r(518263), r(970173), r(520712), r(268111), r(941497), r(32026), r(480839), r(744285), r(492257), r(873817), r(610885), r(126298);
var n = r(192379),
    l = r(442837),
    i = r(253135),
    u = r(651941);
function s(e) {
    let { userId: t, keyToOmit: r } = e,
        s = n.useMemo(() => {
            if (null == r) return null;
            let e = new Uint8Array(r);
            return (0, i.MK)(e);
        }, [r]);
    return (0, l.e7)(
        [u.Z],
        () => {
            let e = u.Z.getUserVerifiedKeys(t);
            return null == e ? 0 : Object.keys(e).filter((e) => e !== s).length;
        },
        [s, t]
    );
}
