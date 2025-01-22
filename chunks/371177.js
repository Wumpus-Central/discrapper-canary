r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(442837),
    s = r(902704),
    l = r(158776),
    u = r(561308),
    c = r(231338);
function d(e) {
    let n = a.useRef(new Set()),
        r = a.useMemo(() => {
            let r = new Set(null == e ? void 0 : e.map((e) => e.author_id));
            return !(0, s.E)([...n.current], [...r]) && (n.current = r), n.current;
        }, [e]),
        i = (0, o.Wu)([l.Z], () =>
            Array.from(r).filter((e) => {
                let n = l.Z.getStatus(e);
                return null !== n && [c.Sk.OFFLINE, c.Sk.INVISIBLE].includes(n);
            })
        );
    return a.useMemo(() => {
        let n = new Set(i);
        return null == e ? void 0 : e.filter((e) => !(0, u.kr)(e) || !n.has(e.author_id));
    }, [e, i]);
}
