n.d(t, { Z: () => c }), n(388685);
var r = n(73800),
    i = n(442837),
    l = n(902704),
    o = n(158776),
    a = n(561308),
    s = n(231338);
function c(e) {
    let t = r.useRef(new Set()),
        n = r.useMemo(() => {
            let n = new Set(null == e ? void 0 : e.map((e) => e.author_id));
            return (0, l.E)([...t.current], [...n]) || (t.current = n), t.current;
        }, [e]),
        c = (0, i.Wu)([o.Z], () =>
            Array.from(n).filter((e) => {
                let t = o.Z.getStatus(e);
                return null !== t && [s.Sk.OFFLINE, s.Sk.INVISIBLE].includes(t);
            })
        );
    return r.useMemo(() => {
        let t = new Set(c);
        return null == e ? void 0 : e.filter((e) => !(0, a.kr)(e) || !t.has(e.author_id));
    }, [e, c]);
}
