n.d(t, { Z: () => o });
var i = n(192379),
    r = n(335218),
    a = n.n(r),
    s = {};
function o(e, t) {
    void 0 === t && (t = a());
    var n = (0, i.useRef)(s),
        r = n.current;
    return (
        (0, i.useEffect)(function () {
            n.current = r;
        }),
        (n.current !== s && t(e, n.current)) || (r = e),
        r
    );
}
