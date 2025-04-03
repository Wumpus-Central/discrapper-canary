r.d(t, { Z: () => c }), r(47120);
var n = r(192379),
    a = r(442837),
    o = r(902704),
    i = r(158776),
    l = r(561308),
    s = r(231338);
function c(e) {
    let t = n.useRef(new Set()),
        r = n.useMemo(() => {
            let r = new Set(null == e ? void 0 : e.map((e) => e.author_id));
            return (0, o.E)([...t.current], [...r]) || (t.current = r), t.current;
        }, [e]),
        c = (0, a.Wu)([i.Z], () =>
            Array.from(r).filter((e) => {
                let t = i.Z.getStatus(e);
                return null !== t && [s.Sk.OFFLINE, s.Sk.INVISIBLE].includes(t);
            })
        );
    return n.useMemo(() => {
        let t = new Set(c);
        return null == e ? void 0 : e.filter((e) => !(0, l.kr)(e) || !t.has(e.author_id));
    }, [e, c]);
}
