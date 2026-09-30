n.d(t, { R: () => m });
var l = n(582128),
    i = n(435558),
    s = n.n(i),
    r = n(361610),
    a = n(36124),
    o = n(135621),
    u = n(963307);
let c = "@here";
function d(e) {
    return e.length > 1 || 1 !== e.length || "unknown" !== e[0].id;
}
function m(e, t, n) {
    let i = (0, o.A)(),
        [m, h] = l.useState(!1),
        p = l.useMemo(
            () =>
                s().debounce(
                    (e) => {
                        (d(u.Ay.getProps(t, n).groups) ||
                            (!(e.length < c.length) &&
                                !(e.length > i) &&
                                -1 !== e.indexOf(c) &&
                                ((0, r.Ey)(t, n, a.LD), 1))) &&
                            h(!0);
                    },
                    200,
                    { maxWait: 500 },
                ),
            [i, t, n],
        );
    l.useEffect(() => {
        let l = u.Ay.getProps(t, n).groups;
        if (null != t && !d(l) && !m)
            return (
                e.addListener("text-changed", p),
                () => {
                    (e.removeListener("text-changed", p), p.cancel());
                }
            );
    }, [m, p, e, t, n]);
}
