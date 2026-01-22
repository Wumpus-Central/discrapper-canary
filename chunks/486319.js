n.d(t, { R: () => p }), n(896048);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(361610),
    o = n(36124),
    l = n(135621),
    c = n(963307);
let u = "@here";
function d(e) {
    return e.length > 1 || 1 !== e.length || "GROUP" !== e[0].type || "unknown" !== e[0].id;
}
function f(e, t, n, r) {
    return (
        !!d(c.Ay.getProps(n, r).groups) ||
        (!(e.length < u.length) && !(e.length > t) && -1 !== e.indexOf(u) && ((0, s.Ey)(n, r, o.LD), !0))
    );
}
function p(e, t, n) {
    let i = (0, l.A)(),
        [s, o] = r.useState(!1),
        u = r.useMemo(
            () =>
                a().debounce(
                    (e) => {
                        f(e, i, t, n) && o(!0);
                    },
                    200,
                    { maxWait: 500 },
                ),
            [i, t, n],
        );
    r.useEffect(() => {
        let r = c.Ay.getProps(t, n).groups;
        if (null != t && !d(r) && !s)
            return (
                e.addListener("text-changed", u),
                () => {
                    e.removeListener("text-changed", u), u.cancel();
                }
            );
    }, [s, u, e, t, n]);
}
