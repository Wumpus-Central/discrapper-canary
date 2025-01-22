r.d(n, {
    S: function () {
        return _;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(392711),
    s = r.n(o),
    l = r(941028),
    u = r(509848),
    c = r(849522),
    d = r(662594);
let f = '@here';
function p(e) {
    return !!(e.length > 1) || !(1 === e.length && 'GROUP' === e[0].type && 'unknown' === e[0].id);
}
function h(e, n, r, i) {
    return !!p(d.ZP.getProps(r, i).groups) || (!(e.length < f.length) && !(e.length > n) && -1 !== e.indexOf(f) && ((0, l.b8)(r, i, u.KV), !0));
}
function _(e, n, r) {
    let i = (0, c.Z)(),
        [o, l] = a.useState(!1),
        u = a.useMemo(
            () =>
                s().debounce(
                    (e) => {
                        h(e, i, n, r) && l(!0);
                    },
                    200,
                    { maxWait: 500 }
                ),
            [i, n, r]
        );
    a.useEffect(() => {
        let i = d.ZP.getProps(n, r).groups;
        if (null != n && !p(i) && !o)
            return (
                e.addListener('text-changed', u),
                () => {
                    e.removeListener('text-changed', u), u.cancel();
                }
            );
    }, [o, u, e, n, r]);
}
