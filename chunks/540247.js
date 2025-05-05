n.d(t, { P: () => s }), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733);
var r = n(73800),
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
