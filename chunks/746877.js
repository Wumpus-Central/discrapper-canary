n.d(t, { S: () => _ }), n(47120);
var i = n(192379),
    r = n(392711),
    a = n.n(r),
    s = n(941028),
    o = n(509848),
    l = n(849522),
    u = n(662594);
let c = '@here';
function d(e) {
    return e.length > 1 || !(1 === e.length && 'GROUP' === e[0].type && 'unknown' === e[0].id);
}
function f(e, t, n, i) {
    return !!d(u.ZP.getProps(n, i).groups) || (!(e.length < c.length) && !(e.length > t) && -1 !== e.indexOf(c) && ((0, s.b8)(n, i, o.KV), !0));
}
function _(e, t, n) {
    let r = (0, l.Z)(),
        [s, o] = i.useState(!1),
        c = i.useMemo(
            () =>
                a().debounce(
                    (e) => {
                        f(e, r, t, n) && o(!0);
                    },
                    200,
                    { maxWait: 500 }
                ),
            [r, t, n]
        );
    i.useEffect(() => {
        let i = u.ZP.getProps(t, n).groups;
        if (null != t && !d(i) && !s)
            return (
                e.addListener('text-changed', c),
                () => {
                    e.removeListener('text-changed', c), c.cancel();
                }
            );
    }, [s, c, e, t, n]);
}
