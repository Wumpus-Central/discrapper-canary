(n.d(t, { Z: () => s }), n(388685));
var r = n(73800),
    o = n(442837),
    i = n(902704),
    l = n(158776),
    a = n(561308),
    c = n(231338);
function s(e) {
    let t = r.useRef(new Set()),
        n = r.useMemo(() => {
            let n = new Set(null == e ? void 0 : e.map((e) => e.author_id));
            return ((0, i.E)([...t.current], [...n]) || (t.current = n), t.current);
        }, [e]),
        s = (0, o.Wu)([l.Z], () =>
            Array.from(n).filter((e) => {
                let t = l.Z.getStatus(e);
                return null !== t && [c.Sk.OFFLINE, c.Sk.INVISIBLE].includes(t);
            })
        );
    return r.useMemo(() => {
        let t = new Set(s);
        return null == e ? void 0 : e.filter((e) => !(0, a.kr)(e) || !t.has(e.author_id));
    }, [e, s]);
}
