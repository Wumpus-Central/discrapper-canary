r.d(n, {
    S: function () {
        return p;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(392711),
    o = r.n(s),
    l = r(941028),
    u = r(509848),
    c = r(849522),
    d = r(662594);
let f = '@here';
function _(e) {
    return !!(e.length > 1) || !(1 === e.length && 'GROUP' === e[0].type && 'unknown' === e[0].id);
}
function h(e, n, r, i) {
    return !!_(d.ZP.getProps(r, i).groups) || (!(e.length < f.length) && !(e.length > n) && -1 !== e.indexOf(f) && ((0, l.b8)(r, i, u.KV), !0));
}
function p(e, n, r) {
    let i = (0, c.Z)(),
        [s, l] = a.useState(!1),
        u = a.useMemo(
            () =>
                o().debounce(
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
        if (null != n && !_(i) && !s)
            return (
                e.addListener('text-changed', u),
                () => {
                    e.removeListener('text-changed', u), u.cancel();
                }
            );
    }, [s, u, e, n, r]);
}
