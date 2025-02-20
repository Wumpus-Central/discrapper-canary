n.d(t, { Z: () => c }), n(47120);
var r = n(192379),
    i = n(442837),
    o = n(902704),
    a = n(158776),
    s = n(561308),
    l = n(231338);
function c(e) {
    let t = r.useRef(new Set()),
        n = r.useMemo(() => {
            let n = new Set(null == e ? void 0 : e.map((e) => e.author_id));
            return (0, o.E)([...t.current], [...n]) || (t.current = n), t.current;
        }, [e]),
        c = (0, i.Wu)([a.Z], () =>
            Array.from(n).filter((e) => {
                let t = a.Z.getStatus(e);
                return null !== t && [l.Sk.OFFLINE, l.Sk.INVISIBLE].includes(t);
            })
        );
    return r.useMemo(() => {
        let t = new Set(c);
        return null == e ? void 0 : e.filter((e) => !(0, s.kr)(e) || !t.has(e.author_id));
    }, [e, c]);
}
