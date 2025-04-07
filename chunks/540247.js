r.d(t, { P: () => s }), r(410992), r(227481), r(730884), r(20464), r(341884), r(364341), r(629680), r(505025), r(918970), r(121784), r(644351), r(146733);
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
