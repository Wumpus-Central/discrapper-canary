(n.d(t, { Z: () => u }), n(388685));
var r = n(73800),
    i = n(442837),
    a = n(902704),
    l = n(158776),
    o = n(561308),
    c = n(231338);
function u(e) {
    let t = r.useRef(new Set()),
        n = r.useMemo(() => {
            let n = new Set(null == e ? void 0 : e.map((e) => e.author_id));
            return ((0, a.E)([...t.current], [...n]) || (t.current = n), t.current);
        }, [e]),
        u = (0, i.Wu)([l.Z], () =>
            Array.from(n).filter((e) => {
                let t = l.Z.getStatus(e);
                return null !== t && [c.Sk.OFFLINE, c.Sk.INVISIBLE].includes(t);
            })
        );
    return r.useMemo(() => {
        let t = new Set(u);
        return null == e ? void 0 : e.filter((e) => !(0, o.kr)(e) || !t.has(e.author_id));
    }, [e, u]);
}
