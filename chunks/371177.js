(r.d(t, { Z: () => c }), r(388685));
var n = r(73800),
    i = r(442837),
    a = r(902704),
    l = r(158776),
    s = r(561308),
    o = r(231338);
function c(e) {
    let t = n.useRef(new Set()),
        r = n.useMemo(() => {
            let r = new Set(null == e ? void 0 : e.map((e) => e.author_id));
            return ((0, a.E)([...t.current], [...r]) || (t.current = r), t.current);
        }, [e]),
        c = (0, i.Wu)([l.Z], () =>
            Array.from(r).filter((e) => {
                let t = l.Z.getStatus(e);
                return null !== t && [o.Sk.OFFLINE, o.Sk.INVISIBLE].includes(t);
            })
        );
    return n.useMemo(() => {
        let t = new Set(c);
        return null == e ? void 0 : e.filter((e) => !(0, s.kr)(e) || !t.has(e.author_id));
    }, [e, c]);
}
