n.d(t, { S: () => _ }), n(47120);
var r = n(192379),
    i = n(392711),
    o = n.n(i),
    a = n(941028),
    s = n(509848),
    l = n(849522),
    c = n(662594);
let u = '@here';
function d(e) {
    return e.length > 1 || 1 !== e.length || 'GROUP' !== e[0].type || 'unknown' !== e[0].id;
}
function f(e, t, n, r) {
    return !!d(c.ZP.getProps(n, r).groups) || (!(e.length < u.length) && !(e.length > t) && -1 !== e.indexOf(u) && ((0, a.b8)(n, r, s.KV), !0));
}
function _(e, t, n) {
    let i = (0, l.Z)(),
        [a, s] = r.useState(!1),
        u = r.useMemo(
            () =>
                o().debounce(
                    (e) => {
                        f(e, i, t, n) && s(!0);
                    },
                    200,
                    { maxWait: 500 }
                ),
            [i, t, n]
        );
    r.useEffect(() => {
        let r = c.ZP.getProps(t, n).groups;
        if (null != t && !d(r) && !a)
            return (
                e.addListener('text-changed', u),
                () => {
                    e.removeListener('text-changed', u), u.cancel();
                }
            );
    }, [a, u, e, t, n]);
}
