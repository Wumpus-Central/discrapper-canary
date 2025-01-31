n.d(t, { P: () => s }), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
var r = n(192379),
    l = n(442837),
    i = n(253135),
    u = n(651941);
function s(e) {
    let { userId: t, keyToOmit: n } = e,
        s = r.useMemo(() => {
            if (null == n) return null;
            let e = new Uint8Array(n);
            return (0, i.MK)(e);
        }, [n]);
    return (0, l.e7)(
        [u.Z],
        () => {
            let e = u.Z.getUserVerifiedKeys(t);
            return null == e ? 0 : Object.keys(e).filter((e) => e !== s).length;
        },
        [s, t]
    );
}
