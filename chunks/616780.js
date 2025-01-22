r.d(n, {
    $: function () {
        return c;
    }
}),
    r(200651);
var i = r(192379),
    a = r(392711),
    o = r.n(a);
r(902704);
var s = r(941028);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function u(e) {
    var n, r;
    return null !== (r = null !== (n = e.displayName) && void 0 !== n ? n : e.name) && void 0 !== r ? r : 'Component';
}
function c(e) {
    i.useEffect(
        () => (
            o().forEach(e, (e, n) => (0, s.ym)(n, e)),
            () => {
                o().forEach(e, (e, n) => (0, s.w5)(n, e));
            }
        ),
        [e]
    );
}
