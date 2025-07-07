(n.d(t, { Z: () => u }), n(388685));
var r = n(73800),
    i = n(442837),
    o = n(902704),
    a = n(158776),
    l = n(561308),
    c = n(231338);
function u(e) {
    let t = r.useRef(new Set()),
        n = r.useMemo(() => {
            let n = new Set(null == e ? void 0 : e.map((e) => e.author_id));
            return ((0, o.E)([...t.current], [...n]) || (t.current = n), t.current);
        }, [e]),
        u = (0, i.Wu)([a.Z], () =>
            Array.from(n).filter((e) => {
                let t = a.Z.getStatus(e);
                return null !== t && [c.Sk.OFFLINE, c.Sk.INVISIBLE].includes(t);
            })
        );
    return r.useMemo(() => {
        let t = new Set(u);
        return null == e ? void 0 : e.filter((e) => !(0, l.kr)(e) || !t.has(e.author_id));
    }, [e, u]);
}
