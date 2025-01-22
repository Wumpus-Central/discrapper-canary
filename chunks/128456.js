r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(192379),
    a = r(335218),
    o = r.n(a),
    s = {};
function l(e, n) {
    void 0 === n && (n = o());
    var r = (0, i.useRef)(s),
        a = r.current;
    return (
        (0, i.useEffect)(function () {
            r.current = a;
        }),
        (r.current !== s && n(e, r.current)) || (a = e),
        a
    );
}
