r.d(t, { P: () => c }),
    r(410992),
    r(227481),
    r(730884),
    r(20464),
    r(341884),
    r(364341),
    r(629680),
    r(505025),
    r(918970),
    r(121784),
    r(644351),
    r(146733);
var n = r(473749),
    l = r(442837),
    u = r(974167),
    i = r(651941);
function c(e) {
    let { userId: t, keyToOmit: r } = e,
        c = n.useMemo(() => {
            if (null == r) return null;
            let e = new Uint8Array(r);
            return (0, u.MK)(e);
        }, [r]);
    return (0, l.e7)([i.Z], () => {
        let e = i.Z.getUserVerifiedKeys(t);
        return null == e ? 0 : Object.keys(e).filter((e) => e !== c).length;
    }, [c, t]);
}
